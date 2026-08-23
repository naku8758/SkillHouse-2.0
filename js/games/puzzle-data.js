// js/games/puzzle-data.js
// Banco de retos para "Puzzle de Código" (nivel grado 6º).
// Cada reto tiene una lista de pasos EN EL ORDEN CORRECTO. El juego los
// desordena y el estudiante debe reconstruir la secuencia lógica correcta,
// pensando como un programador (sin necesidad de conocer sintaxis real).

export const RETOS = [
  {
    titulo: "Preparar un sándwich",
    descripcion: "Ordena los pasos del algoritmo para preparar un sándwich.",
    pasos: [
      "Sacar el pan de la bolsa",
      "Untar mantequilla en una rebanada",
      "Agregar el relleno (jamón y queso)",
      "Cubrir con la otra rebanada de pan",
      "Cortar el sándwich por la mitad"
    ]
  },
  {
    titulo: "Encender una linterna",
    descripcion: "Ordena los pasos del algoritmo para que la linterna encienda.",
    pasos: [
      "Abrir el compartimento de las pilas",
      "Colocar las pilas respetando la polaridad",
      "Cerrar el compartimento",
      "Presionar el botón de encendido",
      "Comprobar que la luz esté encendida"
    ]
  },
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
    titulo: "Buscar un libro en la biblioteca",
    descripcion: "Ordena los pasos del algoritmo para encontrar un libro.",
    pasos: [
      "Buscar el título en el catálogo",
      "Anotar el código del estante",
      "Ir hasta el estante indicado",
      "Revisar los libros hasta encontrar el título",
      "Tomar el libro y llevarlo a préstamo"
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
    titulo: "Cepillarse los dientes",
    descripcion: "Ordena los pasos de esta rutina diaria como si fuera un algoritmo.",
    pasos: [
      "Tomar el cepillo de dientes",
      "Poner pasta dental sobre el cepillo",
      "Cepillar los dientes durante 2 minutos",
      "Enjuagar la boca con agua",
      "Guardar el cepillo en su lugar"
    ]
  },
  {
    titulo: "Cruzar la calle de forma segura",
    descripcion: "Ordena los pasos del algoritmo para cruzar la calle sin riesgo.",
    pasos: [
      "Llegar hasta la esquina o el cruce peatonal",
      "Mirar hacia ambos lados de la calle",
      "Esperar a que no vengan carros o a que el semáforo lo permita",
      "Cruzar caminando, sin correr",
      "Seguir mirando a los lados mientras se cruza"
    ]
  }
];
