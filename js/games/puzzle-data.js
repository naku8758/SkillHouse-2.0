// js/games/puzzle-data.js
// Banco de retos para "Puzzle de Código", parte del área de Matemáticas
// (nivel grado 6º). Cada reto tiene una lista de pasos EN EL ORDEN
// CORRECTO de un algoritmo matemático sencillo. El juego los desordena y
// el estudiante debe reconstruir la secuencia lógica correcta, pensando
// como un programador (sin necesidad de conocer sintaxis real).

export const RETOS = [
  {
    titulo: "Sumar dos números (algoritmo)",
    descripcion: "Ordena los pasos de un algoritmo simple para sumar dos números.",
    pasos: [
      "Pedir el primer número al usuario",
      "Pedir el segundo número al usuario",
      "Sumar ambos números",
      "Guardar el resultado en una variable",
      "Mostrar el resultado en pantalla"
    ]
  },
  {
    titulo: "Repetir una acción 5 veces (bucle)",
    descripcion: "Ordena los pasos de un algoritmo que repite una acción 5 veces (como un bucle 'for').",
    pasos: [
      "Crear un contador que empiece en 1",
      "Revisar si el contador es menor o igual a 5",
      "Si es menor o igual a 5, realizar la acción",
      "Sumar 1 al contador",
      "Volver a revisar la condición hasta que el contador supere 5"
    ]
  },
  {
    titulo: "Decidir si un número es par o impar",
    descripcion: "Ordena los pasos del algoritmo (una decisión tipo 'si... entonces').",
    pasos: [
      "Pedir un número al usuario",
      "Dividir el número entre 2",
      "Revisar si el residuo de la división es 0",
      "Si el residuo es 0, decir 'es par'",
      "Si el residuo no es 0, decir 'es impar'"
    ]
  },
  {
    titulo: "Calcular el promedio de tres notas",
    descripcion: "Ordena los pasos del algoritmo para calcular un promedio.",
    pasos: [
      "Pedir la primera nota",
      "Pedir la segunda nota",
      "Pedir la tercera nota",
      "Sumar las tres notas",
      "Dividir la suma entre 3 para obtener el promedio"
    ]
  },
  {
    titulo: "Revisar si un número es múltiplo de 3",
    descripcion: "Ordena los pasos de este algoritmo de decisión.",
    pasos: [
      "Pedir un número al usuario",
      "Dividir el número entre 3",
      "Revisar si el residuo de la división es 0",
      "Si el residuo es 0, decir 'es múltiplo de 3'",
      "Si el residuo no es 0, decir 'no es múltiplo de 3'"
    ]
  },
  {
    titulo: "Calcular el área de un rectángulo",
    descripcion: "Ordena los pasos del algoritmo para hallar un área.",
    pasos: [
      "Pedir la medida de la base",
      "Pedir la medida de la altura",
      "Multiplicar la base por la altura",
      "Guardar el resultado como el área",
      "Mostrar el área en pantalla"
    ]
  },
  {
    titulo: "Ordenar tres números de menor a mayor",
    descripcion: "Ordena los pasos de este algoritmo de comparación (como lo haría una computadora).",
    pasos: [
      "Pedir los tres números",
      "Comparar el primero con el segundo y ordenarlos entre sí",
      "Comparar el segundo con el tercero y ordenarlos entre sí",
      "Comparar el primero con el segundo otra vez, por si cambió",
      "Mostrar los tres números ya ordenados"
    ]
  },
  {
    titulo: "Convertir minutos a horas y minutos",
    descripcion: "Ordena los pasos del algoritmo para convertir un total de minutos.",
    pasos: [
      "Pedir la cantidad total de minutos",
      "Dividir el total entre 60 para obtener las horas completas",
      "Calcular el residuo de esa división",
      "Ese residuo son los minutos restantes",
      "Mostrar el resultado como 'horas y minutos'"
    ]
  }
];
