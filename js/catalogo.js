export const MATERIAS = [
  {
    id: "matematicas",
    nombre: "Matemáticas",
    icono: "📐",
    color: "card1",
    descripcion: "Productos notables, factorización, ecuaciones y sistemas, funciones, potenciación, Pitágoras y probabilidad.",
    temas: [
      { id: "productos-notables", nombre: "Productos notables" },
      { id: "factorizacion", nombre: "Factorización de expresiones algebraicas" },
      { id: "ecuaciones-lineales", nombre: "Ecuaciones lineales de primer grado" },
      { id: "sistemas-ecuaciones", nombre: "Sistemas de ecuaciones lineales con dos incógnitas" },
      { id: "funciones-lineales", nombre: "Funciones lineales y su representación gráfica" },
      { id: "funciones-cuadraticas", nombre: "Funciones cuadráticas y parábolas" },
      { id: "potenciacion-radicacion", nombre: "Potenciación, radicación y sus propiedades" },
      { id: "teorema-pitagoras", nombre: "Teorema de Pitágoras y aplicaciones geométricas" },
      { id: "probabilidad-conteo", nombre: "Probabilidad y técnicas de conteo" }
    ]
  },
  {
    id: "espanol",
    nombre: "Español / Lengua Castellana",
    icono: "📖",
    color: "card2",
    descripcion: "Análisis sintáctico, clases de palabras, tildes, conectores, tipos de texto, figuras literarias y comprensión lectora.",
    temas: [
      { id: "analisis-sintactico", nombre: "Análisis sintáctico de oraciones (sujeto y predicado)" },
      { id: "clases-palabras", nombre: "Clases de palabras y categorías gramaticales" },
      { id: "tildes-acentuacion", nombre: "Uso correcto de tildes y reglas de acentuación" },
      { id: "conectores-textuales", nombre: "Identificación y uso de conectores textuales" },
      { id: "tipos-textos", nombre: "Tipos de textos (narrativo, descriptivo, expositivo y argumentativo)" },
      { id: "figuras-literarias", nombre: "Figuras literarias (metáfora, personificación, hipérbole, etc.)" },
      { id: "oracion-compuesta", nombre: "Estructura y análisis de la oración compuesta" },
      { id: "cohesion-coherencia", nombre: "Cohesión y coherencia textual" },
      { id: "interpretacion-critica", nombre: "Interpretación crítica de textos y comprensión lectora avanzada" }
    ]
  },
  {
    id: "ingles",
    nombre: "Inglés",
    icono: "🔤",
    color: "card4",
    descripcion: "Tiempos verbales, pasado simple, modales, comparativos, pronombres relativos, futuro, preguntas y preposiciones.",
    temas: [
      { id: "tiempos-presentes", nombre: "Tiempos verbales básicos (Present Simple vs. Present Continuous)" },
      { id: "pasado-simple", nombre: "Pasado simple de verbos regulares e irregulares" },
      { id: "verbos-modales", nombre: "Uso de los verbos modales (can, could, should, must)" },
      { id: "comparativos-superlativos", nombre: "Comparativos y superlativos" },
      { id: "pronombres-relativos", nombre: "Pronombres relativos (who, which, that)" },
      { id: "futuro", nombre: "Futuro con will y going to" },
      { id: "comprension-lectura-ingles", nombre: "Comprensión de lectura en textos cortos y narrativos" },
      { id: "wh-questions", nombre: "Formación y uso de preguntas (Wh- questions)" },
      { id: "preposiciones", nombre: "Preposiciones de tiempo y lugar (in, on, at, between, among)" }
    ]
  }
];


// Materias anunciadas pero todavía sin contenido. Viven separadas de MATERIAS
// para que ningún selector, validación ni regla de Firestore las acepte por
// error: aquí solo se listan como "próximamente".
export const MATERIAS_PROXIMAS = [
  { id: "ciencias", nombre: "Ciencias", icono: "🔬", color: "card3" },
  { id: "sociales", nombre: "Sociales / Historia", icono: "🌎", color: "card5" },
  { id: "tecnologia", nombre: "Tecnología / Informática", icono: "💻", color: "card6" }
];

// Los tres juegos son "motores": no tienen contenido propio, reciben el tema y
// la dificultad de la clase y arman la partida. Está aquí y no repetido en
// cada panel porque también lo consume la portada.
export const JUEGOS = [
  {
    id: "quiz",
    icono: "🎮",
    nombre: "Quiz de Lógica",
    nombreCorto: "Quiz",
    archivo: "quiz.html",
    descripcion: "Pon a prueba tu razonamiento con preguntas rápidas y desafiantes."
  },
  {
    id: "puzzle",
    icono: "🧩",
    nombre: "Puzzle de Código",
    nombreCorto: "Puzzle",
    archivo: "puzzle.html",
    descripcion: "Ordena las piezas correctas y descubre cómo piensan los programadores."
  },
  {
    id: "carrera",
    icono: "🚀",
    nombre: "Carrera Espacial",
    nombreCorto: "Carrera",
    archivo: "carrera.html",
    descripcion: "Compite contra el reloj resolviendo retos antes de que despegue tu nave."
  }
];

export function obtenerJuego(juegoId) {
  return JUEGOS.find((juego) => juego.id === juegoId);
}

// `prefijo` separa la raíz del sitio de las carpetas de panel: desde
// interfaz-estudiante/ se usa "../", desde index.html se usa "".
export function rutaDeJuego(juegoId, prefijo = "") {
  const juego = obtenerJuego(juegoId);
  return juego ? `${prefijo}juegos/${juego.archivo}` : "#";
}

export function obtenerMateria(materiaId) {
  return MATERIAS.find((materia) => materia.id === materiaId);
}

export function obtenerTema(materiaId, temaId) {
  const materia = obtenerMateria(materiaId);
  return materia?.temas.find((tema) => tema.id === temaId);
}
