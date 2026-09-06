// js/games/carrera-data.js
// Generador de problemas matemáticos para "Carrera Espacial", parte del
// área de Matemáticas (nivel grado 6º). Cada problema se genera al azar
// dentro de rangos apropiados para el grado, con 4 opciones de respuesta.

function aleatorioEntre(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function mezclarConIndice(opciones, indiceCorrecta) {
  const valorCorrecto = opciones[indiceCorrecta];
  const copia = [...opciones];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return { opciones: copia, correcta: copia.indexOf(valorCorrecto) };
}

/** Genera 3 distractores numéricos distintos entre sí y del valor correcto. */
function generarDistractores(correcto, rangoDispersión = 10) {
  const distractores = new Set();
  let intentos = 0;
  while (distractores.size < 3 && intentos < 30) {
    intentos++;
    const offset = aleatorioEntre(-rangoDispersión, rangoDispersión);
    const candidato = correcto + (offset === 0 ? rangoDispersión : offset);
    if (candidato !== correcto && candidato >= 0) distractores.add(candidato);
  }
  // Relleno de seguridad si por rangos pequeños no se llenó el set.
  let extra = 1;
  while (distractores.size < 3) {
    const candidato = correcto + extra;
    if (candidato !== correcto) distractores.add(candidato);
    extra++;
  }
  return [...distractores].slice(0, 3);
}

function armarOpciones(correcto, rangoDispersión = 10) {
  const distractores = generarDistractores(correcto, rangoDispersión);
  const todas = [String(correcto), ...distractores.map(String)];
  return mezclarConIndice(todas, 0);
}

function problemaSuma() {
  const a = aleatorioEntre(15, 250);
  const b = aleatorioEntre(15, 250);
  const correcto = a + b;
  const { opciones, correcta } = armarOpciones(correcto, 12);
  return { enunciado: `${a} + ${b} = ?`, opciones, correcta };
}

function problemaResta() {
  let a = aleatorioEntre(20, 300);
  let b = aleatorioEntre(10, a); // evita negativos
  const correcto = a - b;
  const { opciones, correcta } = armarOpciones(correcto, 12);
  return { enunciado: `${a} - ${b} = ?`, opciones, correcta };
}

function problemaMultiplicacion() {
  const a = aleatorioEntre(2, 12);
  const b = aleatorioEntre(2, 12);
  const correcto = a * b;
  const { opciones, correcta } = armarOpciones(correcto, 10);
  return { enunciado: `${a} × ${b} = ?`, opciones, correcta };
}

function problemaDivision() {
  const b = aleatorioEntre(2, 10);
  const k = aleatorioEntre(2, 12);
  const a = b * k; // división exacta
  const { opciones, correcta } = armarOpciones(k, 5);
  return { enunciado: `${a} ÷ ${b} = ?`, opciones, correcta };
}

function problemaOrdenOperaciones() {
  const a = aleatorioEntre(2, 9);
  const b = aleatorioEntre(2, 9);
  const c = aleatorioEntre(2, 9);
  const correcto = a + b * c;
  const { opciones, correcta } = armarOpciones(correcto, 10);
  return { enunciado: `${a} + ${b} × ${c} = ?`, opciones, correcta };
}

function problemaPorcentaje() {
  const porcentajes = [10, 20, 25, 50];
  const porcentaje = porcentajes[aleatorioEntre(0, porcentajes.length - 1)];
  const base = aleatorioEntre(2, 40) * 10; // múltiplo de 10 para resultado exacto
  const correcto = Math.round((porcentaje / 100) * base);
  const { opciones, correcta } = armarOpciones(correcto, 8);
  return { enunciado: `¿Cuánto es el ${porcentaje}% de ${base}?`, opciones, correcta };
}

const GENERADORES = [
  problemaSuma,
  problemaResta,
  problemaMultiplicacion,
  problemaDivision,
  problemaOrdenOperaciones,
  problemaPorcentaje
];

/** Genera un problema aleatorio de cualquier tipo. */
export function generarProblema() {
  const generador = GENERADORES[aleatorioEntre(0, GENERADORES.length - 1)];
  return generador();
}

/** Genera `n` problemas para una ronda de carrera. */
export function generarProblemas(n) {
  return Array.from({ length: n }, () => generarProblema());
}
