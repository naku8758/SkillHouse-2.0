// js/games/banco.js
// Cargador del contenido. Es la única puerta que usan los tres juegos para
// leer preguntas y retos.
//
// Dos cosas hicieron falta al pasar de 3 materias a 14 y de un solo curso a
// once:
//
// 1) El banco ya no se baja completo. Cada materia tiene su archivo en
//    js/games/banco/ y se carga solo cuando se juega ese tema, con import()
//    dinámico. Un curso de 2° de Matemáticas no tiene por qué descargar
//    Filosofía de 11°.
// 2) El contenido se filtra por ciclo (js/malla.js). En 1° y 2° se muestran
//    dos opciones y seis preguntas, sin reloj; en 10° y 11°, cuatro opciones,
//    doce preguntas y once segundos. El recorte NUNCA quita la respuesta
//    correcta: se conserva siempre y se descartan distractores.
//
// API:
//   obtenerPreguntasPorTema(temaId, dificultad) -> Promise[pregunta]
//   obtenerRetosPorTema(temaId, dificultad)     -> Promise[reto]
//   hayContenido(temaId)                         -> Promise<boolean>

import { ajustesDeCiclo, partesDeTema } from "../malla.js";
import { cicloDelTema, temasDelGrado, temasDeMateria, MATERIAS } from "../catalogo.js";

const MODULOS = new Map();
let legadoCargado = null;

async function bancoDe(materiaId) {
  if (MODULOS.has(materiaId)) return MODULOS.get(materiaId);
  const mod = await import(`./banco/${materiaId}.js`);
  if (!mod || !mod.BANCO) throw new Error(`El banco de ${materiaId} no exporta BANCO.`);
  MODULOS.set(materiaId, mod.BANCO);
  return mod.BANCO;
}

async function bancoLegado() {
  if (legadoCargado) return legadoCargado;
  const mod = await import("./contenido-temas.js");
  legadoCargado = mod.CONTENIDO_TEMAS;
  return legadoCargado;
}

/** El nodo de contenido de un tema, o null si no existe. */
export async function nodoDe(temaId) {
  const partes = partesDeTema(temaId);
  if (!partes) {
    const legado = await bancoLegado();
    return legado[temaId] || null;
  }
  const banco = await bancoDe(partes.materiaId);
  return banco[temaId] || null;
}

export async function hayContenido(temaId) {
  const nodo = await nodoDe(temaId);
  return Boolean(nodo && Array.isArray(nodo.preguntas) && nodo.preguntas.length);
}

function mezclar(arreglo) {
  const copia = [...arreglo];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

/**
 * Deja solo `max` opciones conservando la correcta. Los distractores se
 * descartan de atrás hacia delante, porque el banco se escribe con el
 * distractor más plausible primero.
 */
function recortarOpciones(pregunta, max) {
  if (!Number.isInteger(max) || max >= pregunta.opciones.length) return pregunta;
  const restantes = pregunta.opciones
    .map((texto, i) => ({ texto, i }))
    .filter(({ i }) => i !== pregunta.correcta)
    .slice(0, Math.max(0, max - 1));
  const conservadas = [{ texto: pregunta.opciones[pregunta.correcta], i: -1 }, ...restantes];
  const nuevas = conservadas.map((c) => c.texto);
  return { ...pregunta, opciones: nuevas, correcta: 0 };
}

/** Baraja las opciones y recalcula el índice correcto. */
function mezclarOpciones(pregunta) {
  const pares = pregunta.opciones.map((texto, i) => ({ texto, esCorrecta: i === pregunta.correcta }));
  const barajadas = mezclar(pares);
  return {
    ...pregunta,
    opciones: barajadas.map((p) => p.texto),
    correcta: barajadas.findIndex((p) => p.esCorrecta)
  };
}

/**
 * Preguntas de opción múltiple para un tema y una dificultad. Acumulativo: el
 * nivel 2 trae el nivel 1 además, y el 3 trae los tres. Se baraja, se recorta
 * a las opciones del ciclo y se corta la ronda al tamaño del ciclo.
 */
export async function obtenerPreguntasPorTema(temaId, dificultad) {
  const nodo = await nodoDe(temaId);
  if (!nodo || !Array.isArray(nodo.preguntas)) return [];
  const ajustes = ajustesDeCiclo(cicloDelTema(temaId));

  const nivel = Number(dificultad) || 2;
  // Si el tema no tiene nada en ese nivel se juega con lo más cercano
  // que exista: una ronda corta es preferible a una pantalla vacía.
  let disponibles = nodo.preguntas.filter((p) => p.dificultad <= nivel);
  if (!disponibles.length) {
    disponibles = [...nodo.preguntas]
      .sort((a, b) => a.dificultad - b.dificultad)
      .slice(0, ajustes.ronda);
  }
  const exactas = mezclar(disponibles.filter((p) => p.dificultad === nivel));
  const resto = mezclar(disponibles.filter((p) => p.dificultad !== nivel));

  return [...exactas, ...resto]
    .map((p) => recortarOpciones(p, ajustes.opciones))
    .map(mezclarOpciones)
    .slice(0, ajustes.ronda);
}

/** Retos de ordenar pasos, con la misma lógica acumulativa. */
export async function obtenerRetosPorTema(temaId, dificultad) {
  const nodo = await nodoDe(temaId);
  if (!nodo || !Array.isArray(nodo.retos)) return [];
  const ajustes = ajustesDeCiclo(cicloDelTema(temaId));

  const nivel = Number(dificultad) || 2;
  // Si el tema no tiene nada en ese nivel se juega con lo más cercano
  // que exista: una ronda corta es preferible a una pantalla vacía.
  let disponibles = nodo.retos.filter((r) => r.dificultad <= nivel);
  if (!disponibles.length) {
    disponibles = [...nodo.retos]
      .sort((a, b) => a.dificultad - b.dificultad)
      .slice(0, Math.max(3, Math.round(ajustes.ronda / 2)));
  }
  const exactas = mezclar(disponibles.filter((r) => r.dificultad === nivel));
  const resto = mezclar(disponibles.filter((r) => r.dificultad !== nivel));

  return [...exactas, ...resto].slice(0, Math.max(3, Math.round(ajustes.ronda / 2)));
}

/**
 * Tema al azar PARA el modo práctica, que es el único caso en que la
 * plataforma elige por el usuario. Se prueban los temas candidatos de uno en
 * uno hasta encontrar uno con banco escrito: con 14 áreas todavía hay temas
 * del catálogo sin contenido, y ofrecer un tema vacío sería una página rota.
 *
 * `materiaId` y `grado` son opcionales; de no darse se busca en todo el
 * catálogo, que es el caso del modo invitado sin filtro.
 */
export async function resolverTemaAleatorio({ materiaId = "", grado = 0 } = {}) {
  let candidatos;
  if (grado) {
    candidatos = temasDelGrado(grado, { materiaId });
  } else if (materiaId) {
    candidatos = temasDeMateria(materiaId);
  } else {
    candidatos = MATERIAS.flatMap((materia) => temasDeMateria(materia.id));
  }

  for (const tema of mezclar(candidatos.map((t) => t.id))) {
    if (await hayContenido(tema)) return tema;
  }
  return "";
}
