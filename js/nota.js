// js/nota.js
// Escala de calificación de 1.0 a 5.0, que es la que usa el colegio.
//
// El criterio es lineal y se puede explicar en una frase de la sustentación:
// cada 25 % de acierto vale exactamente 1 punto, de modo que 0 % de respuestas
// correctas es 1,0 y 100 % es 5,0.
//
//   aciertos ->  0 %   25 %   50 %   75 %   100 %
//   nota     ->  1,0   2,0    3,0    4,0    5,0
//
// Con esa recta los cortes institucionales caen casi redondos: 60 % de aciertos
// da 3,4 (básico), 75 % da 4,0 (alto) y 90 % da 4,6 (superior).
//
// La nota SIEMPRE se puede reconstruir a partir de `puntaje`/`total` o de
// `porcentaje`, así que las partidas guardadas antes de este módulo también se
// muestran en escala de 5: no hace falta migrar nada.

export const NOTA_MINIMA = 1;
export const NOTA_MAXIMA = 5;

function limitar(valor, minimo, maximo) {
  return Math.min(maximo, Math.max(minimo, valor));
}

/**
 * Nota a partir de la fracción cruda (aciertos / total). Se prefiere esta
 * sobre la versión de porcentaje porque evita redondear dos veces: con 7
 * aciertos de 12, 7/12 = 58,33 % -> 3,33 -> 3,3, mientras que redondear antes
 * a 58 % daría 3,32 -> 3,3 también, pero con 1 de 3 el error ya se nota.
 *
 * @returns {number} nota con un decimal, entre 1,0 y 5,0
 */
export function notaDesdeFraccion(puntaje, total) {
  const t = Number(total);
  if (!t || t <= 0) return NOTA_MINIMA;
  const proporcion = limitar(Number(puntaje) || 0, 0, t) / t;
  return redondearUnDecimal(NOTA_MINIMA + (NOTA_MAXIMA - NOTA_MINIMA) * proporcion);
}

/** Nota a partir de un porcentaje ya calculado (0-100). */
export function notaDesdePorcentaje(porcentaje) {
  const p = limitar(Number(porcentaje) || 0, 0, 100);
  return redondearUnDecimal(NOTA_MINIMA + (NOTA_MAXIMA - NOTA_MINIMA) * (p / 100));
}

function redondearUnDecimal(valor) {
  return Math.round(valor * 10) / 10;
}

/**
 * Nota promedio de un estudiante a partir de sus partidas.
 * Promediar las notas (no los porcentajes) y redondear al final es lo que hace
 * que un 3,95 no se muestre como "3,9" cuando en realidad redondea a 4,0.
 */
export function notaPromedio(resultados) {
  return promedioDeNotas(resultados.map((r) => notaDeResultado(r)));
}

/** Promedio de notas ya calculadas. Devuelve null con la lista vacía. */
export function promedioDeNotas(notas) {
  if (!notas.length) return null;
  return redondearUnDecimal(notas.reduce((a, b) => a + b, 0) / notas.length);
}

/** La nota de un resultado guardado, exista o no el campo `nota` en el documento. */
export function notaDeResultado(resultado) {
  if (!resultado) return NOTA_MINIMA;
  if (typeof resultado.nota === "number") return resultado.nota;
  if (resultado.puntaje != null && resultado.total) {
    return notaDesdeFraccion(resultado.puntaje, resultado.total);
  }
  return notaDesdePorcentaje(resultado.porcentaje);
}

/** "4,7" — con coma, como se escribe a mano en el libro de notas. */
export function formatearNota(nota) {
  if (nota == null || !Number.isFinite(Number(nota))) return "—";
  return Number(nota).toFixed(1).replace(".", ",");
}

const DESEMPENOS = [
  { min: 4.5, nombre: "Superior", clase: "superior" },
  { min: 4.0, nombre: "Alto", clase: "alto" },
  { min: 3.0, nombre: "Básico", clase: "basico" },
  { min: 0, nombre: "Inferior", clase: "inferior" }
];

/** Etiqueta cualitativa que acompaña al número, como en el boletín. */
export function desempenio(nota) {
  const n = Number(nota);
  if (!Number.isFinite(n)) return { nombre: "Sin jugar", clase: "sin-nota" };
  const hallado = DESEMPENOS.find((d) => n >= d.min) || DESEMPENOS[DESEMPENOS.length - 1];
  return { nombre: hallado.nombre, clase: hallado.clase };
}

/** Texto listo para una celda: "3,8 · Básico". */
export function notaConDesempenio(nota) {
  if (nota == null) return "—";
  return `${formatearNota(nota)} · ${desempenio(nota).nombre}`;
}
