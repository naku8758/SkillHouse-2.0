// js/malla.js
// Maquinaria de grados y ciclos. Aquí vive la regla que hace que la plataforma
// sirva para los once grados: el código del curso (601, 305, 1104) dice el
// grado, el grado dice el ciclo, y el ciclo dice cómo debe jugarse.
//
// Los ciclos no son invento nuestro: son los tramos en que el MEN agrupa los
// Estándares Básicos de Competencias (1°-2°, 3°-5°, 6°-7°, 8°-9°, 10°-11°).
// Un tema tiene una versión por ciclo, no once versiones idénticas.

export const GRADOS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

export const CICLOS = [
  { id: "c1", nombre: "1° y 2°", grados: [1, 2], nombreCorto: "iniciales" },
  { id: "c2", nombre: "3° a 5°", grados: [3, 4, 5], nombreCorto: "primaria" },
  { id: "c3", nombre: "6° y 7°", grados: [6, 7], nombreCorto: "secundaria baja" },
  { id: "c4", nombre: "8° y 9°", grados: [8, 9], nombreCorto: "secundaria alta" },
  { id: "c5", nombre: "10° y 11°", grados: [10, 11], nombreCorto: "media" }
];

export const NOMBRE_GRADO = {
  1: "grado 1°", 2: "grado 2°", 3: "grado 3°", 4: "grado 4°", 5: "grado 5°",
  6: "grado 6°", 7: "grado 7°", 8: "grado 8°", 9: "grado 9°",
  10: "grado 10°", 11: "grado 11°"
};

export function cicloPorId(cicloId) {
  return CICLOS.find((c) => c.id === cicloId) || null;
}

/**
 * Grado a partir del código del curso. Las dos últimas cifras siempre son el
 * número de grupo (js/cursos.js:codigoDeCurso), así que el grado es lo que
 * queda delante: 601 -> 6, 611 -> 6, 1104 -> 11, 1006 -> 10.
 */
export function gradoDeCurso(codigo) {
  const limpio = String(codigo ?? "").trim();
  if (!/^\d{3,4}$/.test(limpio)) return 0;
  const grado = Number(limpio.slice(0, -2));
  return GRADOS.includes(grado) ? grado : 0;
}

export function cicloDeGrado(grado) {
  const c = CICLOS.find((x) => x.grados.includes(Number(grado)));
  return c ? c.id : "";
}

export function cicloDeCurso(codigo) {
  return cicloDeGrado(gradoDeCurso(codigo));
}

/**
 * Cómo se juega cada ciclo. La razón de estos números es de lectura, no de
 * estilo: un niño de 1° aún está decodificando, y cuatro opciones de texto
 * largo más un cronómetro miden su velocidad leyendo, no lo que sabe. En
 * media pasa lo contrario: sin presión de tiempo el contenido se vuelve fácil.
 *
 *  opciones      cuántas opciones muestra el test (se eligen las buenas
 *                conservando la correcta)
 *  pasos         máximo de pasos en un reto de ordenar
 *  ronda         preguntas por partida
 *  tiempo        milisegundos por pregunta en Carrera Espacial (0 = sin reloj)
 *  voz           leer el enunciado en voz alta automático
 *  fuente        tamaño base del enunciado
 *  abstracto     si el ciclo admite enunciados con variables y texto largo
 */
export const AJUSTES = {
  c1: { opciones: 2, pasos: 3, ronda: 6, tiempo: 0, voz: true, fuente: 1.35, abstracto: false },
  c2: { opciones: 3, pasos: 4, ronda: 8, tiempo: 24000, voz: true, fuente: 1.2, abstracto: false },
  c3: { opciones: 4, pasos: 4, ronda: 10, tiempo: 18000, voz: false, fuente: 1.05, abstracto: true },
  c4: { opciones: 4, pasos: 5, ronda: 10, tiempo: 14000, voz: false, fuente: 1, abstracto: true },
  c5: { opciones: 4, pasos: 6, ronda: 12, tiempo: 11000, voz: false, fuente: 1, abstracto: true }
};

export function ajustesDeCiclo(cicloId) {
  return AJUSTES[cicloId] || AJUSTES.c3;
}

/** Ajustes directos desde el código del curso, que es lo que tiene una clase. */
export function ajustesDeCurso(codigo) {
  return ajustesDeCiclo(cicloDeCurso(codigo) || "c3");
}

// ---------------------------------------------------------------------------
// Identificadores de tema
// ---------------------------------------------------------------------------
// Un tema es un eje de una materia en un ciclo. Se escribe
//   `${materia}--${eje}--${ciclo}`   p. ej. "matematicas--numeros--c1"
// y el identificador carga el ciclo sin tener que consultar más documentos.
// Los temas históricos ("productos-notables") no llevan sufijo: siguen
// funcionando tal cual, sin recorte por edad.

export function idDeTema(materiaId, ejeId, cicloId) {
  return `${materiaId}--${ejeId}--${cicloId}`;
}

export function esTemaDeCiclo(temaId) {
  return String(temaId || "").includes("--");
}

export function partesDeTema(temaId) {
  const trozos = String(temaId || "").split("--");
  if (trozos.length < 3) return null;
  return {
    materiaId: trozos[0],
    ejeId: trozos[1],
    cicloId: trozos[trozos.length - 1]
  };
}

/** Ciclo embebido en un identificador de tema ("" si es un tema histórico). */
export function cicloDeTema(temaId) {
  return partesDeTema(temaId)?.cicloId || "";
}

/**
 * Un profesor puede editar la clase y moverla de curso. Si la mueve de 601 a
 * 305, el tema guardado sigue hablando de 6° y 7°. Aquí se traduce al mismo
 * eje del ciclo del curso nuevo, y si ese ciclo no tiene contenido para ese
 * eje se devuelve el tema original para no dejar la clase sin juego.
 */
export function alinearTemaAlCurso(temaId, codigoCurso, existeTema) {
  const partes = partesDeTema(temaId);
  if (!partes) return temaId;
  const destino = cicloDeCurso(codigoCurso);
  if (!destino || destino === partes.cicloId) return temaId;
  const candidato = idDeTema(partes.materiaId, partes.ejeId, destino);
  return existeTema(candidato) ? candidato : temaId;
}
