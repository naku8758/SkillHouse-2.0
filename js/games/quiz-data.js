// js/games/quiz-data.js
// Banco de preguntas para "Quiz de Lógica" (nivel grado 6º).
// Cada pregunta: { categoria, pregunta, opciones: [4], correcta: índice }
// Se mezclan varias materias para que el juego sirva como repaso general,
// igual a las "Materias" que ya se muestran en el panel del estudiante.

export const PREGUNTAS = [
  // --- Lógica / razonamiento ---
  {
    categoria: "Lógica",
    pregunta: "Si hoy es martes, ¿qué día será dentro de 10 días?",
    opciones: ["Jueves", "Viernes", "Sábado", "Miércoles"],
    correcta: 1
  },
  {
    categoria: "Lógica",
    pregunta: "Ana es más alta que Luis. Luis es más alto que Marco. ¿Quién es el más bajo?",
    opciones: ["Ana", "Luis", "Marco", "No se puede saber"],
    correcta: 2
  },
  {
    categoria: "Lógica",
    pregunta: "¿Cuál número sigue en la secuencia: 2, 4, 8, 16, __?",
    opciones: ["18", "20", "32", "24"],
    correcta: 2
  },
  {
    categoria: "Lógica",
    pregunta: "Todas las aves tienen plumas. El loro es un ave. ¿Qué se puede concluir?",
    opciones: [
      "El loro tiene plumas",
      "El loro vuela alto",
      "El loro es un mamífero",
      "No se puede concluir nada"
    ],
    correcta: 0
  },
  {
    categoria: "Lógica",
    pregunta: "¿Qué figura no pertenece al grupo: cuadrado, triángulo, círculo, perro?",
    opciones: ["Cuadrado", "Triángulo", "Círculo", "Perro"],
    correcta: 3
  },

  // --- Matemáticas ---
  {
    categoria: "Matemáticas",
    pregunta: "¿Cuánto es 12 × 8?",
    opciones: ["86", "96", "108", "94"],
    correcta: 1
  },
  {
    categoria: "Matemáticas",
    pregunta: "¿Cuál es el resultado de 144 ÷ 12?",
    opciones: ["10", "11", "12", "14"],
    correcta: 2
  },
  {
    categoria: "Matemáticas",
    pregunta: "¿Cuál de estas fracciones es equivalente a 1/2?",
    opciones: ["2/5", "3/8", "4/8", "5/9"],
    correcta: 2
  },
  {
    categoria: "Matemáticas",
    pregunta: "¿Cuántos lados tiene un hexágono?",
    opciones: ["5", "6", "7", "8"],
    correcta: 1
  },
  {
    categoria: "Matemáticas",
    pregunta: "¿Cuál es el número primo en esta lista?",
    opciones: ["9", "15", "17", "21"],
    correcta: 2
  },

  // --- Español / Lengua ---
  {
    categoria: "Español",
    pregunta: "¿Cuál palabra es un sustantivo?",
    opciones: ["Correr", "Rápido", "Montaña", "Y"],
    correcta: 2
  },
  {
    categoria: "Español",
    pregunta: "¿Cuál es el antónimo de 'alegre'?",
    opciones: ["Feliz", "Triste", "Contento", "Animado"],
    correcta: 1
  },
  {
    categoria: "Español",
    pregunta: "¿Cuál oración está correctamente escrita?",
    opciones: [
      "Haber ido al parque fue divertido",
      "A ver ido al parque fue divertido",
      "Haver ido al parque fue divertido",
      "Aber ido al parque fue divertido"
    ],
    correcta: 0
  },
  {
    categoria: "Español",
    pregunta: "¿Qué signo de puntuación indica una pregunta?",
    opciones: ["Punto", "Coma", "Signos de interrogación", "Guion"],
    correcta: 2
  },

  // --- Ciencias ---
  {
    categoria: "Ciencias",
    pregunta: "¿Cuál es el planeta más cercano al Sol?",
    opciones: ["Venus", "Mercurio", "Marte", "Tierra"],
    correcta: 1
  },
  {
    categoria: "Ciencias",
    pregunta: "¿Qué órgano bombea la sangre por el cuerpo?",
    opciones: ["Pulmón", "Cerebro", "Corazón", "Riñón"],
    correcta: 2
  },
  {
    categoria: "Ciencias",
    pregunta: "¿En qué estado de la materia las partículas están más ordenadas?",
    opciones: ["Gaseoso", "Líquido", "Sólido", "Plasma"],
    correcta: 2
  },
  {
    categoria: "Ciencias",
    pregunta: "¿Qué proceso usan las plantas para producir su alimento?",
    opciones: ["Respiración", "Fotosíntesis", "Digestión", "Evaporación"],
    correcta: 1
  },

  // --- Sociales / Historia ---
  {
    categoria: "Sociales",
    pregunta: "¿Cuál es el río más largo de Suramérica?",
    opciones: ["Río Magdalena", "Río Amazonas", "Río Orinoco", "Río Cauca"],
    correcta: 1
  },
  {
    categoria: "Sociales",
    pregunta: "¿Cuántos continentes hay en el mundo?",
    opciones: ["5", "6", "7", "4"],
    correcta: 2
  },

  // --- Tecnología ---
  {
    categoria: "Tecnología",
    pregunta: "¿Qué significa la sigla 'www'?",
    opciones: [
      "World Wide Web",
      "Web World Wide",
      "Wide World Web",
      "World Web Wide"
    ],
    correcta: 0
  },
  {
    categoria: "Tecnología",
    pregunta: "¿Cuál de estos NO es un dispositivo de entrada de una computadora?",
    opciones: ["Teclado", "Mouse", "Monitor", "Micrófono"],
    correcta: 2
  }
];
