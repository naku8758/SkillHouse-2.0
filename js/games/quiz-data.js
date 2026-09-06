// js/games/quiz-data.js
// Banco de preguntas para "Quiz de Lógica", parte del área de Matemáticas
// (nivel grado 6º). Combina aritmética, geometría, fracciones y
// razonamiento lógico-matemático, todo dentro de la misma materia.
// Cada pregunta: { categoria, pregunta, opciones: [4], correcta: índice }

export const PREGUNTAS = [
  // --- Razonamiento lógico-matemático ---
  {
    categoria: "Razonamiento",
    pregunta: "¿Cuál número sigue en la secuencia: 2, 4, 8, 16, __?",
    opciones: ["18", "20", "32", "24"],
    correcta: 2
  },
  {
    categoria: "Razonamiento",
    pregunta: "Ana tiene el doble de canicas que Luis. Luis tiene 7 canicas. ¿Cuántas tiene Ana?",
    opciones: ["9", "14", "12", "21"],
    correcta: 1
  },
  {
    categoria: "Razonamiento",
    pregunta: "Si un lápiz cuesta $500 y compras 4, ¿cuánto pagas en total?",
    opciones: ["$1.500", "$2.000", "$2.500", "$1.800"],
    correcta: 1
  },
  {
    categoria: "Razonamiento",
    pregunta: "¿Cuál es el número que falta: 3, 6, 9, __, 15?",
    opciones: ["10", "11", "12", "13"],
    correcta: 2
  },
  {
    categoria: "Razonamiento",
    pregunta: "Un bus sale cada 15 minutos. Si el primero sale a las 7:00, ¿a qué hora sale el cuarto bus?",
    opciones: ["7:30", "7:45", "8:00", "7:15"],
    correcta: 1
  },

  // --- Operaciones básicas ---
  {
    categoria: "Operaciones",
    pregunta: "¿Cuánto es 12 × 8?",
    opciones: ["86", "96", "108", "94"],
    correcta: 1
  },
  {
    categoria: "Operaciones",
    pregunta: "¿Cuál es el resultado de 144 ÷ 12?",
    opciones: ["10", "11", "12", "14"],
    correcta: 2
  },
  {
    categoria: "Operaciones",
    pregunta: "¿Cuánto es 256 − 89?",
    opciones: ["167", "177", "157", "187"],
    correcta: 1
  },
  {
    categoria: "Operaciones",
    pregunta: "Resuelve respetando el orden de operaciones: 3 + 4 × 2",
    opciones: ["14", "11", "10", "9"],
    correcta: 1
  },
  {
    categoria: "Operaciones",
    pregunta: "¿Cuál es el número primo en esta lista?",
    opciones: ["9", "15", "17", "21"],
    correcta: 2
  },
  {
    categoria: "Operaciones",
    pregunta: "¿Cuánto es 7² (7 al cuadrado)?",
    opciones: ["14", "42", "49", "21"],
    correcta: 2
  },

  // --- Fracciones y porcentajes ---
  {
    categoria: "Fracciones",
    pregunta: "¿Cuál de estas fracciones es equivalente a 1/2?",
    opciones: ["2/5", "3/8", "4/8", "5/9"],
    correcta: 2
  },
  {
    categoria: "Fracciones",
    pregunta: "¿Cuánto es 1/4 + 1/4?",
    opciones: ["1/8", "2/8", "1/2", "2/4 y 1/2 no son iguales"],
    correcta: 2
  },
  {
    categoria: "Porcentajes",
    pregunta: "¿Cuánto es el 20% de 50?",
    opciones: ["5", "10", "15", "20"],
    correcta: 1
  },
  {
    categoria: "Porcentajes",
    pregunta: "Si un producto de $10.000 tiene 10% de descuento, ¿cuánto cuesta ahora?",
    opciones: ["$9.500", "$9.000", "$8.500", "$9.900"],
    correcta: 1
  },

  // --- Geometría y medidas ---
  {
    categoria: "Geometría",
    pregunta: "¿Cuántos lados tiene un hexágono?",
    opciones: ["5", "6", "7", "8"],
    correcta: 1
  },
  {
    categoria: "Geometría",
    pregunta: "¿Cuál es el perímetro de un cuadrado de lado 6 cm?",
    opciones: ["12 cm", "18 cm", "24 cm", "36 cm"],
    correcta: 2
  },
  {
    categoria: "Geometría",
    pregunta: "¿Cuánto mide un ángulo recto?",
    opciones: ["45°", "90°", "180°", "360°"],
    correcta: 1
  },
  {
    categoria: "Medidas",
    pregunta: "¿Cuántos centímetros hay en 2 metros?",
    opciones: ["20", "200", "2.000", "2"],
    correcta: 1
  },
  {
    categoria: "Medidas",
    pregunta: "¿Cuántos minutos hay en 2 horas y media?",
    opciones: ["120", "130", "150", "180"],
    correcta: 2
  }
];
