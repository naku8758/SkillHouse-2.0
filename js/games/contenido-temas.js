// js/games/contenido-temas.js
// Banco central de contenido educativo, organizado por TEMA (los 9 que el
// profesor puede elegir al crear una clase, definidos en catalogo.js) y por
// DIFICULTAD (1 = fácil, 2 = intermedio, 3 = difícil).
//
// Los 3 juegos (Quiz de Lógica, Puzzle de Código y Carrera Espacial) no
// tienen contenido propio fijo: son "motores" que reciben el tema y la
// dificultad de la clase y arman la partida a partir de este banco.
//
// - "preguntas": preguntas de opción múltiple. Las usan TANTO el Quiz de
//   Lógica (sin cronómetro) COMO la Carrera Espacial (contrarreloj) — el
//   contenido es el mismo, lo único que cambia es la forma de jugarlo.
// - "retos": retos de ordenar pasos de un proceso. Los usa el Puzzle de
//   Código.
//
// Dificultad acumulativa: nivel 1 usa solo preguntas de dificultad 1
// (10 preguntas); nivel 2 usa dificultad 1 y 2 (20 preguntas); nivel 3 usa
// las tres (30 preguntas). Por eso a mayor dificultad, más preguntas.

export const CONTENIDO_TEMAS = {
  "productos-notables": {
    nombre: "Productos notables",
    preguntas: [
      { dificultad: 1, enunciado: "(x + 2)² = ?", opciones: ["x² + 4x + 4", "x² + 4", "x² + 2x + 4", "x² + 4x + 2"], correcta: 0 },
      { dificultad: 1, enunciado: "(x − 3)² = ?", opciones: ["x² − 6x + 9", "x² − 9", "x² − 3x + 9", "x² − 6x − 9"], correcta: 0 },
      { dificultad: 1, enunciado: "(x + 1)(x − 1) = ?", opciones: ["x² − 1", "x² + 1", "x² − 2x − 1", "x² + 2x − 1"], correcta: 0 },
      { dificultad: 1, enunciado: "(a + b)² se expande como:", opciones: ["a² + 2ab + b²", "a² + b²", "a² − 2ab + b²", "a² + ab + b²"], correcta: 0 },
      { dificultad: 1, enunciado: "(a − b)² se expande como:", opciones: ["a² − 2ab + b²", "a² − b²", "a² + 2ab + b²", "a² − ab + b²"], correcta: 0 },
      { dificultad: 1, enunciado: "(x + 5)(x − 5) = ?", opciones: ["x² − 25", "x² + 25", "x² − 10x − 25", "x² − 5"], correcta: 0 },
      { dificultad: 1, enunciado: "¿Cuál es el resultado de (y + 4)²?", opciones: ["y² + 8y + 16", "y² + 16", "y² + 4y + 16", "y² + 8y + 4"], correcta: 0 },
      { dificultad: 1, enunciado: "¿Cuál es el resultado de (m − 2)²?", opciones: ["m² − 4m + 4", "m² − 4", "m² − 2m + 4", "m² − 4m − 4"], correcta: 0 },
      { dificultad: 1, enunciado: "(2 + x)(2 − x) = ?", opciones: ["4 − x²", "x² − 4", "4 + x²", "2 − x²"], correcta: 0 },
      { dificultad: 1, enunciado: "¿Cómo se llama la expresión (a+b)(a−b)?", opciones: ["Diferencia de cuadrados", "Trinomio cuadrado perfecto", "Suma de cubos", "Cuadrado de un binomio"], correcta: 0 },

      { dificultad: 2, enunciado: "(2x + 3)² = ?", opciones: ["4x² + 12x + 9", "4x² + 9", "4x² + 6x + 9", "2x² + 12x + 9"], correcta: 0 },
      { dificultad: 2, enunciado: "(3x − 1)² = ?", opciones: ["9x² − 6x + 1", "9x² − 1", "9x² − 3x + 1", "9x² − 6x − 1"], correcta: 0 },
      { dificultad: 2, enunciado: "(2x + 5)(2x − 5) = ?", opciones: ["4x² − 25", "4x² + 25", "2x² − 25", "4x² − 10x − 25"], correcta: 0 },
      { dificultad: 2, enunciado: "(x + 2y)² = ?", opciones: ["x² + 4xy + 4y²", "x² + 4y²", "x² + 2xy + 4y²", "x² + 4xy + 2y²"], correcta: 0 },
      { dificultad: 2, enunciado: "(3a − 2b)² = ?", opciones: ["9a² − 12ab + 4b²", "9a² − 4b²", "9a² − 6ab + 4b²", "9a² − 12ab − 4b²"], correcta: 0 },
      { dificultad: 2, enunciado: "(5x + 1)(5x − 1) = ?", opciones: ["25x² − 1", "25x² + 1", "5x² − 1", "25x² − 10x − 1"], correcta: 0 },
      { dificultad: 2, enunciado: "Simplifica: (x+3)² − x²", opciones: ["6x + 9", "9", "6x", "x + 9"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Cuál es el término del medio de (x+7)²?", opciones: ["14x", "7x", "49x", "x"], correcta: 0 },
      { dificultad: 2, enunciado: "(4 − 3x)² = ?", opciones: ["16 − 24x + 9x²", "16 − 9x²", "16 − 12x + 9x²", "16 + 24x + 9x²"], correcta: 0 },
      { dificultad: 2, enunciado: "(2a + 3b)(2a − 3b) = ?", opciones: ["4a² − 9b²", "4a² + 9b²", "2a² − 9b²", "4a² − 6ab − 9b²"], correcta: 0 },

      { dificultad: 3, enunciado: "(x + y + 1)² = ?", opciones: ["x² + y² + 1 + 2xy + 2x + 2y", "x² + y² + 1", "x² + y² + 2xy + 1", "x² + y² + 2x + 2y + 1 − 2xy"], correcta: 0 },
      { dificultad: 3, enunciado: "Simplifica: (x+4)² − (x−4)²", opciones: ["16x", "32", "8x", "64"], correcta: 0 },
      { dificultad: 3, enunciado: "(2x − 3y)² = ?", opciones: ["4x² − 12xy + 9y²", "4x² − 9y²", "4x² − 6xy + 9y²", "4x² − 12xy − 9y²"], correcta: 0 },
      { dificultad: 3, enunciado: "Si (x+a)² = x² + 10x + 25, ¿cuánto vale a?", opciones: ["5", "10", "25", "2.5"], correcta: 0 },
      { dificultad: 3, enunciado: "(x² + 2)(x² − 2) = ?", opciones: ["x⁴ − 4", "x⁴ + 4", "x⁴ − 2", "x² − 4"], correcta: 0 },
      { dificultad: 3, enunciado: "Simplifica: (a+b)² + (a−b)²", opciones: ["2a² + 2b²", "2a² − 2b²", "4ab", "a² + b²"], correcta: 0 },
      { dificultad: 3, enunciado: "(3x + 2y)² = ?", opciones: ["9x² + 12xy + 4y²", "9x² + 4y²", "9x² + 6xy + 4y²", "9x² + 12xy − 4y²"], correcta: 0 },
      { dificultad: 3, enunciado: "Si (x−a)² = x² − 8x + 16, ¿cuánto vale a?", opciones: ["4", "8", "16", "2"], correcta: 0 },
      { dificultad: 3, enunciado: "Simplifica: (a+b)² − (a−b)²", opciones: ["4ab", "2a² + 2b²", "2ab", "4a²"], correcta: 0 },
      { dificultad: 3, enunciado: "(x+5)(x−5)(x²+25) = ?", opciones: ["x⁴ − 625", "x⁴ + 625", "x⁴ − 25", "x² − 625"], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Elevar un binomio al cuadrado (a+b)²", descripcion: "Ordena los pasos del proceso.", pasos: ["Identificar los dos términos del binomio (a y b)", "Elevar al cuadrado el primer término", "Multiplicar 2 veces el primer término por el segundo", "Elevar al cuadrado el segundo término y sumar todo"] },
      { dificultad: 1, titulo: "Multiplicar una suma por una diferencia (a+b)(a−b)", descripcion: "Ordena los pasos del proceso.", pasos: ["Identificar los dos términos que se repiten", "Elevar al cuadrado el primer término", "Elevar al cuadrado el segundo término", "Restar el segundo cuadrado del primero"] },
      { dificultad: 2, titulo: "Elevar al cuadrado un binomio con coeficientes (ax+b)²", descripcion: "Ordena los pasos del proceso.", pasos: ["Elevar al cuadrado el coeficiente y la variable del primer término", "Multiplicar 2 veces el primer término por el segundo término", "Elevar al cuadrado el segundo término", "Sumar los tres resultados"] },
      { dificultad: 2, titulo: "Verificar si una expresión es diferencia de cuadrados", descripcion: "Ordena los pasos del proceso.", pasos: ["Revisar si la expresión tiene dos términos separados por una resta", "Verificar si cada término es un cuadrado perfecto", "Sacar la raíz cuadrada de cada término", "Escribir el producto de la suma por la diferencia de esas raíces"] },
      { dificultad: 3, titulo: "Elevar al cuadrado un trinomio (a+b+c)²", descripcion: "Ordena los pasos del proceso.", pasos: ["Elevar al cuadrado cada uno de los tres términos", "Multiplicar 2 veces cada pareja de términos distintos", "Sumar los tres cuadrados obtenidos", "Sumar los tres dobles productos obtenidos"] },
      { dificultad: 3, titulo: "Simplificar una expresión combinando productos notables", descripcion: "Ordena los pasos del proceso.", pasos: ["Identificar qué productos notables aparecen en la expresión", "Desarrollar cada producto notable por separado", "Reducir los términos semejantes", "Escribir el resultado simplificado"] }
    ]
  },

  "factorizacion": {
    nombre: "Factorización de expresiones algebraicas",
    preguntas: [
      { dificultad: 1, enunciado: "Factoriza: 2x + 4", opciones: ["2(x + 2)", "2(x + 4)", "2x(1 + 2)", "x(2 + 4)"], correcta: 0 },
      { dificultad: 1, enunciado: "Factoriza: 3x + 6y", opciones: ["3(x + 2y)", "3(x + 6y)", "3x(1 + 2y)", "6(x + y)"], correcta: 0 },
      { dificultad: 1, enunciado: "Factoriza: x² − 9", opciones: ["(x+3)(x−3)", "(x−3)²", "(x+9)(x−1)", "(x+3)²"], correcta: 0 },
      { dificultad: 1, enunciado: "Factoriza: x² − 1", opciones: ["(x+1)(x−1)", "(x−1)²", "(x+1)²", "x(x−1)"], correcta: 0 },
      { dificultad: 1, enunciado: "Factoriza: 5x − 5", opciones: ["5(x − 1)", "5(x − 5)", "x(5 − 5)", "5x(1 − 1)"], correcta: 0 },
      { dificultad: 1, enunciado: "¿Cuál es el factor común de 4x + 8?", opciones: ["4", "2", "8", "x"], correcta: 0 },
      { dificultad: 1, enunciado: "Factoriza: x² − 16", opciones: ["(x+4)(x−4)", "(x−4)²", "(x+16)(x−1)", "(x+4)²"], correcta: 0 },
      { dificultad: 1, enunciado: "Factoriza: 6x + 9", opciones: ["3(2x + 3)", "3(2x + 9)", "6(x + 9)", "9(x + 6)"], correcta: 0 },
      { dificultad: 1, enunciado: "Factoriza: 10x − 15", opciones: ["5(2x − 3)", "5(2x − 15)", "10(x − 15)", "15(x − 10)"], correcta: 0 },
      { dificultad: 1, enunciado: "¿Cuál es el factor común de 6a + 9a²?", opciones: ["3a", "3", "a", "9a"], correcta: 0 },

      { dificultad: 2, enunciado: "Factoriza: x² + 6x + 9", opciones: ["(x+3)²", "(x+9)²", "(x+3)(x−3)", "(x+6)(x+9)"], correcta: 0 },
      { dificultad: 2, enunciado: "Factoriza: x² − 4x + 4", opciones: ["(x−2)²", "(x−4)²", "(x+2)²", "(x−2)(x+2)"], correcta: 0 },
      { dificultad: 2, enunciado: "Factoriza: x² + 5x + 6", opciones: ["(x+2)(x+3)", "(x+1)(x+6)", "(x−2)(x−3)", "(x+6)(x−1)"], correcta: 0 },
      { dificultad: 2, enunciado: "Factoriza: x² − 5x + 6", opciones: ["(x−2)(x−3)", "(x+2)(x+3)", "(x−1)(x−6)", "(x−6)(x+1)"], correcta: 0 },
      { dificultad: 2, enunciado: "Factoriza: x² + 7x + 10", opciones: ["(x+2)(x+5)", "(x+1)(x+10)", "(x−2)(x−5)", "(x+5)(x−2)"], correcta: 0 },
      { dificultad: 2, enunciado: "Factoriza: x² − x − 6", opciones: ["(x−3)(x+2)", "(x+3)(x−2)", "(x−1)(x−6)", "(x−6)(x+1)"], correcta: 0 },
      { dificultad: 2, enunciado: "Factoriza: x² + 2x − 8", opciones: ["(x+4)(x−2)", "(x−4)(x−2)", "(x+8)(x−1)", "(x+1)(x−8)"], correcta: 0 },
      { dificultad: 2, enunciado: "Factoriza: 4x² − 9", opciones: ["(2x+3)(2x−3)", "(2x+9)(2x−1)", "(2x+3)²", "(4x+3)(x−3)"], correcta: 0 },
      { dificultad: 2, enunciado: "Factoriza: 9x² − 6x + 1", opciones: ["(3x−1)²", "(3x+1)²", "(3x−1)(3x+1)", "(9x−1)(x−1)"], correcta: 0 },
      { dificultad: 2, enunciado: "Factoriza: x² − 8x + 16", opciones: ["(x−4)²", "(x+4)²", "(x−4)(x+4)", "(x−8)(x+2)"], correcta: 0 },

      { dificultad: 3, enunciado: "Factoriza: 2x² + 5x + 3", opciones: ["(2x+3)(x+1)", "(2x+1)(x+3)", "(x+3)(x+1)", "(2x+3)(x−1)"], correcta: 0 },
      { dificultad: 3, enunciado: "Factoriza: 3x² − 7x + 2", opciones: ["(3x−1)(x−2)", "(3x−2)(x−1)", "(3x+1)(x−2)", "(x−1)(x−2)"], correcta: 0 },
      { dificultad: 3, enunciado: "Factoriza: 2x² − x − 6", opciones: ["(2x+3)(x−2)", "(2x−3)(x+2)", "(2x+3)(x+2)", "(x−3)(x+2)"], correcta: 0 },
      { dificultad: 3, enunciado: "Factoriza por agrupación: ax + ay + bx + by", opciones: ["(a+b)(x+y)", "(a−b)(x+y)", "(a+b)(x−y)", "ab(x+y)"], correcta: 0 },
      { dificultad: 3, enunciado: "Factoriza: 6x² + 7x + 2", opciones: ["(2x+1)(3x+2)", "(2x+2)(3x+1)", "(6x+1)(x+2)", "(2x−1)(3x−2)"], correcta: 0 },
      { dificultad: 3, enunciado: "Factoriza: 4x² − 4x − 3", opciones: ["(2x−3)(2x+1)", "(2x+3)(2x−1)", "(4x−3)(x+1)", "(2x−3)(2x−1)"], correcta: 0 },
      { dificultad: 3, enunciado: "Factoriza completamente: x³ − x", opciones: ["x(x−1)(x+1)", "x(x−1)²", "x²(x−1)", "(x−1)(x+1)"], correcta: 0 },
      { dificultad: 3, enunciado: "Factoriza: 2x² + 3x − 2", opciones: ["(2x−1)(x+2)", "(2x+1)(x−2)", "(2x−2)(x+1)", "(x−1)(2x+2)"], correcta: 0 },
      { dificultad: 3, enunciado: "Factoriza: x² − (a+b)x + ab", opciones: ["(x−a)(x−b)", "(x+a)(x+b)", "(x−a)(x+b)", "(x−ab)(x−1)"], correcta: 0 },
      { dificultad: 3, enunciado: "Factoriza completamente: 3x² − 12", opciones: ["3(x−2)(x+2)", "3(x−4)(x+4)", "(3x−2)(x+2)", "3(x−2)²"], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Factorizar por factor común", descripcion: "Ordena los pasos del proceso.", pasos: ["Buscar el número o letra que se repite en todos los términos", "Dividir cada término entre ese factor común", "Escribir el factor común fuera de un paréntesis", "Escribir dentro del paréntesis el resultado de las divisiones"] },
      { dificultad: 1, titulo: "Factorizar una diferencia de cuadrados", descripcion: "Ordena los pasos del proceso.", pasos: ["Verificar que la expresión tenga dos términos con una resta", "Sacar la raíz cuadrada de cada término", "Escribir el producto de la suma por la diferencia de esas raíces"] },
      { dificultad: 2, titulo: "Factorizar un trinomio cuadrado perfecto", descripcion: "Ordena los pasos del proceso.", pasos: ["Verificar que el primer y el último término sean cuadrados perfectos", "Sacar la raíz cuadrada de esos dos términos", "Comprobar que el término del medio sea el doble producto de esas raíces", "Escribir el resultado como el cuadrado de un binomio"] },
      { dificultad: 2, titulo: "Factorizar un trinomio de la forma x²+bx+c", descripcion: "Ordena los pasos del proceso.", pasos: ["Buscar dos números que multiplicados den c", "Verificar que esos mismos números sumados den b", "Escribir el trinomio como el producto de dos binomios con esos números", "Comprobar el resultado multiplicando los binomios"] },
      { dificultad: 3, titulo: "Factorizar un trinomio de la forma ax²+bx+c (a≠1)", descripcion: "Ordena los pasos del proceso.", pasos: ["Multiplicar el coeficiente a por el término independiente c", "Buscar dos números que multiplicados den ese resultado y sumados den b", "Reescribir el término del medio usando esos dos números", "Factorizar por agrupación los cuatro términos resultantes"] },
      { dificultad: 3, titulo: "Factorizar por agrupación de términos", descripcion: "Ordena los pasos del proceso.", pasos: ["Separar la expresión en dos grupos de dos términos", "Sacar el factor común de cada grupo por separado", "Verificar que ambos grupos tengan el mismo paréntesis en común", "Sacar ese paréntesis común como factor final"] }
    ]
  },

  "ecuaciones-lineales": {
    nombre: "Ecuaciones lineales de primer grado",
    preguntas: [
      { dificultad: 1, enunciado: "x + 5 = 12 → x = ?", opciones: ["7", "17", "5", "12"], correcta: 0 },
      { dificultad: 1, enunciado: "x − 3 = 10 → x = ?", opciones: ["13", "7", "3", "10"], correcta: 0 },
      { dificultad: 1, enunciado: "2x = 16 → x = ?", opciones: ["8", "16", "32", "14"], correcta: 0 },
      { dificultad: 1, enunciado: "x/3 = 4 → x = ?", opciones: ["12", "7", "4/3", "1"], correcta: 0 },
      { dificultad: 1, enunciado: "x + 8 = 8 → x = ?", opciones: ["0", "8", "16", "1"], correcta: 0 },
      { dificultad: 1, enunciado: "3x = 21 → x = ?", opciones: ["7", "18", "24", "3"], correcta: 0 },
      { dificultad: 1, enunciado: "x − 7 = 0 → x = ?", opciones: ["7", "0", "−7", "14"], correcta: 0 },
      { dificultad: 1, enunciado: "x/5 = 5 → x = ?", opciones: ["25", "1", "10", "5"], correcta: 0 },
      { dificultad: 1, enunciado: "4 + x = 9 → x = ?", opciones: ["5", "13", "4", "9"], correcta: 0 },
      { dificultad: 1, enunciado: "6x = 0 → x = ?", opciones: ["0", "6", "1", "−6"], correcta: 0 },

      { dificultad: 2, enunciado: "2x + 3 = 11 → x = ?", opciones: ["4", "7", "5.5", "8"], correcta: 0 },
      { dificultad: 2, enunciado: "3x − 5 = 10 → x = ?", opciones: ["5", "15", "3.3", "1"], correcta: 0 },
      { dificultad: 2, enunciado: "5x + 2 = 27 → x = ?", opciones: ["5", "29", "6", "4"], correcta: 0 },
      { dificultad: 2, enunciado: "4x − 7 = 9 → x = ?", opciones: ["4", "0.5", "16", "3"], correcta: 0 },
      { dificultad: 2, enunciado: "2x + 10 = 4 → x = ?", opciones: ["−3", "3", "7", "−7"], correcta: 0 },
      { dificultad: 2, enunciado: "7 − x = 2 → x = ?", opciones: ["5", "9", "−5", "14"], correcta: 0 },
      { dificultad: 2, enunciado: "3(x + 2) = 15 → x = ?", opciones: ["3", "5", "11", "1"], correcta: 0 },
      { dificultad: 2, enunciado: "2(x − 1) = 10 → x = ?", opciones: ["6", "4", "11", "9"], correcta: 0 },
      { dificultad: 2, enunciado: "x/2 + 3 = 7 → x = ?", opciones: ["8", "4", "20", "2"], correcta: 0 },
      { dificultad: 2, enunciado: "5 − 2x = 1 → x = ?", opciones: ["2", "3", "−2", "8"], correcta: 0 },

      { dificultad: 3, enunciado: "3x + 4 = x + 10 → x = ?", opciones: ["3", "7", "14", "2"], correcta: 0 },
      { dificultad: 3, enunciado: "5x − 2 = 2x + 7 → x = ?", opciones: ["3", "5", "1.5", "9"], correcta: 0 },
      { dificultad: 3, enunciado: "2(x + 3) = 3(x − 1) → x = ?", opciones: ["9", "3", "−9", "1"], correcta: 0 },
      { dificultad: 3, enunciado: "4x − 3 = 2x + 9 → x = ?", opciones: ["6", "3", "12", "2"], correcta: 0 },
      { dificultad: 3, enunciado: "3(2x − 1) = 2(x + 4) → x = ?", opciones: ["11/4", "3", "9/4", "5"], correcta: 0 },
      { dificultad: 3, enunciado: "x/2 + x/3 = 5 → x = ?", opciones: ["6", "5", "15", "30"], correcta: 0 },
      { dificultad: 3, enunciado: "5(x − 2) = 3(x + 2) → x = ?", opciones: ["8", "4", "16", "2"], correcta: 0 },
      { dificultad: 3, enunciado: "2x + 5 = −3x + 25 → x = ?", opciones: ["4", "6", "20", "5"], correcta: 0 },
      { dificultad: 3, enunciado: "7 − 2x = 3x − 8 → x = ?", opciones: ["3", "1", "5", "15"], correcta: 0 },
      { dificultad: 3, enunciado: "(x+1)/2 = (x−1)/3 → x = ?", opciones: ["−5", "5", "−1", "1"], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Resolver una ecuación de un paso (x + a = b)", descripcion: "Ordena los pasos del proceso.", pasos: ["Identificar el número que está sumando o restando junto a la x", "Aplicar la operación contraria en ambos lados de la ecuación", "El resultado obtenido es el valor de x"] },
      { dificultad: 1, titulo: "Resolver una ecuación de un paso (ax = b)", descripcion: "Ordena los pasos del proceso.", pasos: ["Identificar el número que multiplica a la x", "Dividir ambos lados de la ecuación entre ese número", "El resultado obtenido es el valor de x"] },
      { dificultad: 2, titulo: "Resolver una ecuación de dos pasos (ax + b = c)", descripcion: "Ordena los pasos del proceso.", pasos: ["Restar o sumar el término independiente en ambos lados", "Dividir el resultado entre el coeficiente de la x", "Comprobar el valor reemplazándolo en la ecuación original"] },
      { dificultad: 2, titulo: "Resolver una ecuación con paréntesis", descripcion: "Ordena los pasos del proceso.", pasos: ["Aplicar la propiedad distributiva para eliminar el paréntesis", "Reducir los términos semejantes de cada lado", "Despejar la x aplicando las operaciones contrarias", "Comprobar el resultado"] },
      { dificultad: 3, titulo: "Resolver una ecuación con la incógnita en ambos lados", descripcion: "Ordena los pasos del proceso.", pasos: ["Agrupar todos los términos con x en un mismo lado", "Agrupar los términos numéricos en el otro lado", "Reducir los términos semejantes de cada lado", "Dividir para despejar completamente la x"] },
      { dificultad: 3, titulo: "Resolver una ecuación con fracciones", descripcion: "Ordena los pasos del proceso.", pasos: ["Encontrar el mínimo común múltiplo de los denominadores", "Multiplicar toda la ecuación por ese número para eliminar las fracciones", "Resolver la ecuación resultante sin fracciones", "Comprobar el resultado en la ecuación original"] }
    ]
  },

  "sistemas-ecuaciones": {
    nombre: "Sistemas de ecuaciones lineales con dos incógnitas",
    preguntas: [
      { dificultad: 1, enunciado: "x + y = 5, x − y = 1. ¿Cuánto vale x?", opciones: ["3", "2", "5", "1"], correcta: 0 },
      { dificultad: 1, enunciado: "x + y = 10, x = 6. ¿Cuánto vale y?", opciones: ["4", "6", "16", "10"], correcta: 0 },
      { dificultad: 1, enunciado: "2x = 8, x + y = 10. ¿Cuánto vale y?", opciones: ["6", "4", "2", "8"], correcta: 0 },
      { dificultad: 1, enunciado: "x = 3, x + y = 7. ¿Cuánto vale y?", opciones: ["4", "3", "7", "10"], correcta: 0 },
      { dificultad: 1, enunciado: "x + y = 12, x − y = 2. ¿Cuánto vale x?", opciones: ["7", "5", "10", "6"], correcta: 0 },
      { dificultad: 1, enunciado: "y = 2x, x + y = 9. ¿Cuánto vale x?", opciones: ["3", "6", "9", "4.5"], correcta: 0 },
      { dificultad: 1, enunciado: "x + y = 6, x = 2y. ¿Cuánto vale y?", opciones: ["2", "4", "3", "6"], correcta: 0 },
      { dificultad: 1, enunciado: "x − y = 3, y = 1. ¿Cuánto vale x?", opciones: ["4", "2", "3", "1"], correcta: 0 },
      { dificultad: 1, enunciado: "x + y = 8, y = x. ¿Cuánto vale x?", opciones: ["4", "8", "2", "0"], correcta: 0 },
      { dificultad: 1, enunciado: "2x + y = 10, y = 0. ¿Cuánto vale x?", opciones: ["5", "10", "0", "2"], correcta: 0 },

      { dificultad: 2, enunciado: "x + y = 7, x − y = 3. ¿Cuánto vale x?", opciones: ["5", "2", "4", "7"], correcta: 0 },
      { dificultad: 2, enunciado: "2x + y = 11, x − y = 1. ¿Cuánto vale x?", opciones: ["4", "5", "3", "6"], correcta: 0 },
      { dificultad: 2, enunciado: "3x + 2y = 16, x = 4. ¿Cuánto vale y?", opciones: ["2", "4", "8", "1"], correcta: 0 },
      { dificultad: 2, enunciado: "x + 2y = 8, x − y = 2. ¿Cuánto vale y?", opciones: ["2", "4", "6", "3"], correcta: 0 },
      { dificultad: 2, enunciado: "2x − y = 4, x + y = 5. ¿Cuánto vale x?", opciones: ["3", "2", "5", "1"], correcta: 0 },
      { dificultad: 2, enunciado: "x = 2, 4x + y = 14. ¿Cuánto vale y?", opciones: ["6", "8", "12", "4"], correcta: 0 },
      { dificultad: 2, enunciado: "3x − y = 5, x + y = 7. ¿Cuánto vale x?", opciones: ["3", "4", "2", "5"], correcta: 0 },
      { dificultad: 2, enunciado: "2x + 3y = 12, x = 3. ¿Cuánto vale y?", opciones: ["2", "3", "6", "4"], correcta: 0 },
      { dificultad: 2, enunciado: "x − 2y = 1, x + y = 7. ¿Cuánto vale y?", opciones: ["2", "3", "5", "1"], correcta: 0 },
      { dificultad: 2, enunciado: "5x + y = 20, y = 5. ¿Cuánto vale x?", opciones: ["3", "5", "4", "15"], correcta: 0 },

      { dificultad: 3, enunciado: "3x + 2y = 16, 2x − y = 6. ¿Cuánto vale x?", opciones: ["4", "3", "2", "6"], correcta: 0 },
      { dificultad: 3, enunciado: "2x + 3y = 12, 4x − 3y = 6. ¿Cuánto vale x?", opciones: ["3", "2", "6", "4"], correcta: 0 },
      { dificultad: 3, enunciado: "5x + 2y = 19, 3x − 2y = 5. ¿Cuánto vale x?", opciones: ["3", "2", "4", "5"], correcta: 0 },
      { dificultad: 3, enunciado: "3x + 4y = 18, 3x − 2y = 0. ¿Cuánto vale y?", opciones: ["3", "2", "6", "1"], correcta: 0 },
      { dificultad: 3, enunciado: "2x + y = 11, 3x + y = 15. ¿Cuánto vale x?", opciones: ["4", "3", "7", "5"], correcta: 0 },
      { dificultad: 3, enunciado: "5x − y = 14, 2x + y = 7. ¿Cuánto vale x?", opciones: ["3", "2", "1", "4"], correcta: 0 },
      { dificultad: 3, enunciado: "4x + 2y = 20, x + 2y = 8. ¿Cuánto vale x?", opciones: ["4", "2", "6", "3"], correcta: 0 },
      { dificultad: 3, enunciado: "3x + y = 10, x + y = 4. ¿Cuánto vale x?", opciones: ["3", "1", "4", "6"], correcta: 0 },
      { dificultad: 3, enunciado: "2x + 5y = 19, 2x + y = 7. ¿Cuánto vale y?", opciones: ["3", "2", "4", "1"], correcta: 0 },
      { dificultad: 3, enunciado: "6x + y = 17, 2x + y = 9. ¿Cuánto vale x?", opciones: ["2", "3", "5", "4"], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Resolver un sistema por sustitución simple", descripcion: "Ordena los pasos del proceso.", pasos: ["Despejar una de las variables en una de las ecuaciones", "Sustituir esa expresión en la otra ecuación", "Resolver la ecuación resultante con una sola incógnita", "Reemplazar el valor encontrado para hallar la otra incógnita"] },
      { dificultad: 1, titulo: "Verificar la solución de un sistema de ecuaciones", descripcion: "Ordena los pasos del proceso.", pasos: ["Tomar los valores propuestos para x y para y", "Reemplazarlos en la primera ecuación", "Reemplazarlos en la segunda ecuación", "Confirmar que ambas ecuaciones se cumplan"] },
      { dificultad: 2, titulo: "Resolver un sistema por el método de igualación", descripcion: "Ordena los pasos del proceso.", pasos: ["Despejar la misma variable en ambas ecuaciones", "Igualar las dos expresiones obtenidas", "Resolver la ecuación resultante", "Reemplazar el valor encontrado en cualquiera de las ecuaciones originales"] },
      { dificultad: 2, titulo: "Resolver un sistema por sustitución con coeficientes", descripcion: "Ordena los pasos del proceso.", pasos: ["Despejar una variable en la ecuación más sencilla", "Sustituir esa expresión en la otra ecuación", "Resolver la ecuación resultante", "Hallar el valor de la segunda variable"] },
      { dificultad: 3, titulo: "Resolver un sistema por el método de eliminación", descripcion: "Ordena los pasos del proceso.", pasos: ["Multiplicar una o ambas ecuaciones para igualar los coeficientes de una variable", "Sumar o restar las ecuaciones para eliminar esa variable", "Resolver la ecuación resultante con una sola incógnita", "Reemplazar el valor encontrado para hallar la otra variable"] },
      { dificultad: 3, titulo: "Plantear un sistema de ecuaciones a partir de un problema", descripcion: "Ordena los pasos del proceso.", pasos: ["Identificar las dos incógnitas del problema", "Traducir cada condición del problema en una ecuación", "Resolver el sistema de ecuaciones obtenido", "Verificar que la solución tenga sentido con el problema original"] }
    ]
  },

  "funciones-lineales": {
    nombre: "Funciones lineales y su representación gráfica",
    preguntas: [
      { dificultad: 1, enunciado: "Si f(x) = x + 3, ¿cuánto vale f(2)?", opciones: ["5", "6", "2", "3"], correcta: 0 },
      { dificultad: 1, enunciado: "Si f(x) = 2x, ¿cuánto vale f(4)?", opciones: ["8", "2", "6", "4"], correcta: 0 },
      { dificultad: 1, enunciado: "¿Cuál es la pendiente de y = 3x + 1?", opciones: ["3", "1", "4", "−3"], correcta: 0 },
      { dificultad: 1, enunciado: "¿Cuál es el intercepto con el eje y de y = 2x + 5?", opciones: ["5", "2", "0", "7"], correcta: 0 },
      { dificultad: 1, enunciado: "Si f(x) = x − 4, ¿cuánto vale f(0)?", opciones: ["−4", "4", "0", "−1"], correcta: 0 },
      { dificultad: 1, enunciado: "¿Cuál es la pendiente de y = −2x + 7?", opciones: ["−2", "2", "7", "−7"], correcta: 0 },
      { dificultad: 1, enunciado: "Si f(x) = 5x, ¿cuánto vale f(1)?", opciones: ["5", "1", "0", "6"], correcta: 0 },
      { dificultad: 1, enunciado: "¿En qué punto corta al eje y la función y = 4x − 3?", opciones: ["(0, −3)", "(0, 4)", "(3, 0)", "(0, 3)"], correcta: 0 },
      { dificultad: 1, enunciado: "Si f(x) = x + 1, ¿cuánto vale f(−1)?", opciones: ["0", "2", "−2", "1"], correcta: 0 },
      { dificultad: 1, enunciado: "¿Cuál es el intercepto con el eje y de y = −x + 6?", opciones: ["6", "−1", "0", "−6"], correcta: 0 },

      { dificultad: 2, enunciado: "¿Cuál es la pendiente de la recta que pasa por (0,0) y (2,4)?", opciones: ["2", "4", "0.5", "6"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Cuál es la pendiente de la recta que pasa por (1,2) y (3,6)?", opciones: ["2", "4", "1", "3"], correcta: 0 },
      { dificultad: 2, enunciado: "Si f(x) = 3x − 2, ¿cuánto vale f(3)?", opciones: ["7", "9", "1", "11"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Cuál es la pendiente de la recta que pasa por (0,3) y (2,7)?", opciones: ["2", "4", "3.5", "7"], correcta: 0 },
      { dificultad: 2, enunciado: "Una recta tiene pendiente 2 y pasa por (0,1). ¿Cuál es su ecuación?", opciones: ["y = 2x + 1", "y = x + 2", "y = 2x − 1", "y = 1x + 2"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Cuál es la pendiente de la recta que pasa por (1,5) y (4,5)?", opciones: ["0", "1", "5", "Indefinida"], correcta: 0 },
      { dificultad: 2, enunciado: "Si f(x) = −2x + 4, ¿cuánto vale f(2)?", opciones: ["0", "8", "2", "−4"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Cuál es la pendiente de la recta que pasa por (2,1) y (2,5)?", opciones: ["Indefinida (vertical)", "0", "4", "2"], correcta: 0 },
      { dificultad: 2, enunciado: "Una recta tiene pendiente −1 y pasa por (0,4). ¿Cuál es su ecuación?", opciones: ["y = −x + 4", "y = x − 4", "y = −x − 4", "y = 4x − 1"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Cuál es la pendiente de la recta que pasa por (0,2) y (4,10)?", opciones: ["2", "4", "8", "0.5"], correcta: 0 },

      { dificultad: 3, enunciado: "¿Cuál es la ecuación de la recta que pasa por (1,3) y (2,5)?", opciones: ["y = 2x + 1", "y = 2x − 1", "y = x + 2", "y = 2x + 3"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Cuál es la ecuación de la recta que pasa por (0,−2) y (3,4)?", opciones: ["y = 2x − 2", "y = 2x + 2", "y = −2x − 2", "y = x − 2"], correcta: 0 },
      { dificultad: 3, enunciado: "¿El punto (2,5) pertenece a la recta y = 2x + 1?", opciones: ["Sí", "No", "Solo si x=0", "No se puede saber"], correcta: 0 },
      { dificultad: 3, enunciado: "¿El punto (3,4) pertenece a la recta y = x + 2?", opciones: ["No", "Sí", "Solo si y=0", "No se puede saber"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Cuál es la pendiente de una recta paralela a y = 3x − 5?", opciones: ["3", "−5", "−3", "1/3"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Cuál es la ecuación de la recta que pasa por (−1,1) y (1,5)?", opciones: ["y = 2x + 3", "y = 2x − 3", "y = x + 3", "y = 3x + 2"], correcta: 0 },
      { dificultad: 3, enunciado: "Dos rectas son paralelas y una tiene pendiente 4. ¿Cuál es la pendiente de la otra?", opciones: ["4", "−4", "1/4", "0"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Cuál es la ecuación de la recta que pasa por (2,0) y (0,4)?", opciones: ["y = −2x + 4", "y = 2x + 4", "y = −2x − 4", "y = −4x + 2"], correcta: 0 },
      { dificultad: 3, enunciado: "¿El punto (0,5) pertenece a la recta y = −x + 5?", opciones: ["Sí", "No", "Solo si x=5", "No se puede saber"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Cuál es la ecuación de la recta con pendiente −3 que pasa por (1,−1)?", opciones: ["y = −3x + 2", "y = −3x − 2", "y = 3x − 2", "y = −3x + 1"], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Evaluar una función lineal en un valor de x", descripcion: "Ordena los pasos del proceso.", pasos: ["Identificar la regla de la función", "Reemplazar la x por el valor indicado", "Resolver las operaciones indicadas", "El resultado es el valor de la función en ese punto"] },
      { dificultad: 1, titulo: "Identificar la pendiente y el intercepto de una función lineal", descripcion: "Ordena los pasos del proceso.", pasos: ["Escribir la función en la forma y = mx + b", "Identificar el número que multiplica a la x como la pendiente", "Identificar el número solo como el intercepto con el eje y"] },
      { dificultad: 2, titulo: "Calcular la pendiente a partir de dos puntos", descripcion: "Ordena los pasos del proceso.", pasos: ["Restar las coordenadas y de los dos puntos", "Restar las coordenadas x de los dos puntos en el mismo orden", "Dividir la diferencia de las y entre la diferencia de las x", "Ese resultado es la pendiente"] },
      { dificultad: 2, titulo: "Graficar una función lineal a partir de su ecuación", descripcion: "Ordena los pasos del proceso.", pasos: ["Ubicar el intercepto con el eje y en la gráfica", "Desde ese punto, usar la pendiente para encontrar un segundo punto", "Marcar el segundo punto en la gráfica", "Trazar la línea recta que pasa por ambos puntos"] },
      { dificultad: 3, titulo: "Encontrar la ecuación de una recta que pasa por dos puntos", descripcion: "Ordena los pasos del proceso.", pasos: ["Calcular la pendiente con los dos puntos dados", "Elegir uno de los puntos y usar la fórmula punto-pendiente", "Despejar la y para dejar la ecuación en la forma y = mx + b", "Comprobar el resultado con el segundo punto"] },
      { dificultad: 3, titulo: "Determinar si dos rectas son paralelas", descripcion: "Ordena los pasos del proceso.", pasos: ["Escribir ambas ecuaciones en la forma y = mx + b", "Identificar la pendiente de cada una", "Comparar las dos pendientes", "Si las pendientes son iguales, las rectas son paralelas"] }
    ]
  },

  "funciones-cuadraticas": {
    nombre: "Funciones cuadráticas y parábolas",
    preguntas: [
      { dificultad: 1, enunciado: "Si f(x) = x², ¿cuánto vale f(3)?", opciones: ["9", "6", "3", "12"], correcta: 0 },
      { dificultad: 1, enunciado: "Si f(x) = x² + 1, ¿cuánto vale f(2)?", opciones: ["5", "4", "9", "3"], correcta: 0 },
      { dificultad: 1, enunciado: "¿Hacia dónde abre la parábola y = x²?", opciones: ["Hacia arriba", "Hacia abajo", "Hacia la derecha", "Hacia la izquierda"], correcta: 0 },
      { dificultad: 1, enunciado: "¿Hacia dónde abre la parábola y = −x²?", opciones: ["Hacia abajo", "Hacia arriba", "Hacia la derecha", "Hacia la izquierda"], correcta: 0 },
      { dificultad: 1, enunciado: "Si f(x) = x², ¿cuánto vale f(0)?", opciones: ["0", "1", "x", "No existe"], correcta: 0 },
      { dificultad: 1, enunciado: "¿Cuál es el vértice de y = x²?", opciones: ["(0,0)", "(1,1)", "(0,1)", "(1,0)"], correcta: 0 },
      { dificultad: 1, enunciado: "Si f(x) = x² − 4, ¿cuánto vale f(2)?", opciones: ["0", "4", "−4", "8"], correcta: 0 },
      { dificultad: 1, enunciado: "¿Cómo se llama la gráfica de una función cuadrática?", opciones: ["Parábola", "Recta", "Hipérbola", "Círculo"], correcta: 0 },
      { dificultad: 1, enunciado: "Si f(x) = 2x², ¿cuánto vale f(2)?", opciones: ["8", "4", "6", "16"], correcta: 0 },
      { dificultad: 1, enunciado: "¿Cuál es el grado de una función cuadrática?", opciones: ["2", "1", "3", "0"], correcta: 0 },

      { dificultad: 2, enunciado: "¿Cuál es el vértice de y = (x−2)² + 3?", opciones: ["(2,3)", "(−2,3)", "(2,−3)", "(3,2)"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Cuál es el vértice de y = (x+1)² − 4?", opciones: ["(−1,−4)", "(1,−4)", "(−1,4)", "(4,−1)"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Cuáles son las raíces de y = x² − 9?", opciones: ["x = 3 y x = −3", "x = 9 y x = −9", "x = 3 solamente", "x = 0 y x = 9"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Cuáles son las raíces de y = x² − 4x?", opciones: ["x = 0 y x = 4", "x = 0 y x = −4", "x = 4 solamente", "x = 2 y x = 2"], correcta: 0 },
      { dificultad: 2, enunciado: "Si f(x) = x² − 2x, ¿cuánto vale f(3)?", opciones: ["3", "9", "6", "12"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Cuáles son las raíces de y = (x−1)(x+5)?", opciones: ["x = 1 y x = −5", "x = −1 y x = 5", "x = 1 y x = 5", "x = −1 y x = −5"], correcta: 0 },
      { dificultad: 2, enunciado: "Si f(x) = x² + 3x, ¿cuánto vale f(2)?", opciones: ["10", "8", "12", "7"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Cuál es el vértice de y = x² − 6x + 9?", opciones: ["(3,0)", "(−3,0)", "(0,9)", "(6,9)"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Cuáles son las raíces de y = x² − 25?", opciones: ["x = 5 y x = −5", "x = 25 y x = −25", "x = 5 solamente", "x = 0 y x = 25"], correcta: 0 },
      { dificultad: 2, enunciado: "Si f(x) = −x² + 4, ¿cuánto vale f(1)?", opciones: ["3", "5", "−3", "4"], correcta: 0 },

      { dificultad: 3, enunciado: "¿Cuáles son las soluciones de x² − 5x + 6 = 0?", opciones: ["x = 2 y x = 3", "x = 1 y x = 6", "x = −2 y x = −3", "x = 6 solamente"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Cuáles son las soluciones de x² − x − 6 = 0?", opciones: ["x = 3 y x = −2", "x = −3 y x = 2", "x = 3 y x = 2", "x = 6 y x = −1"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Cuáles son las soluciones de x² + 2x − 8 = 0?", opciones: ["x = 2 y x = −4", "x = −2 y x = 4", "x = 2 y x = 4", "x = 8 y x = −1"], correcta: 0 },
      { dificultad: 3, enunciado: "Usando la fórmula general, ¿cuáles son las soluciones de x² − 3x − 4 = 0?", opciones: ["x = 4 y x = −1", "x = −4 y x = 1", "x = 4 y x = 1", "x = 3 y x = −4"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Cuál es el discriminante de x² + 2x + 1 = 0?", opciones: ["0", "4", "−4", "8"], correcta: 0 },
      { dificultad: 3, enunciado: "Si el discriminante de una ecuación cuadrática es negativo, ¿cuántas soluciones reales tiene?", opciones: ["Ninguna", "Una", "Dos", "Infinitas"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Cuáles son las soluciones de x² − 7x + 12 = 0?", opciones: ["x = 3 y x = 4", "x = 3 y x = 12", "x = 7 y x = 12", "x = −3 y x = −4"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Cuál es el eje de simetría de y = x² − 4x + 3?", opciones: ["x = 2", "x = 4", "x = −2", "x = 3"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Cuáles son las soluciones de 2x² − 8 = 0?", opciones: ["x = 2 y x = −2", "x = 4 y x = −4", "x = 8 y x = −8", "x = 2 solamente"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Cuál es el discriminante de x² − 4x + 4 = 0?", opciones: ["0", "16", "−16", "8"], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Evaluar una función cuadrática en un valor de x", descripcion: "Ordena los pasos del proceso.", pasos: ["Identificar la regla de la función cuadrática", "Reemplazar la x por el valor indicado en todos sus términos", "Resolver las operaciones respetando el orden correcto", "El resultado es el valor de la función en ese punto"] },
      { dificultad: 1, titulo: "Identificar hacia dónde abre una parábola", descripcion: "Ordena los pasos del proceso.", pasos: ["Observar el signo del coeficiente que acompaña a x²", "Si el coeficiente es positivo, la parábola abre hacia arriba", "Si el coeficiente es negativo, la parábola abre hacia abajo"] },
      { dificultad: 2, titulo: "Encontrar el vértice de una parábola en forma y=(x−h)²+k", descripcion: "Ordena los pasos del proceso.", pasos: ["Identificar el valor de h dentro del paréntesis", "Cambiar el signo de h para obtener la coordenada x del vértice", "Identificar el valor de k fuera del paréntesis como la coordenada y", "Escribir el vértice como el par ordenado (h,k)"] },
      { dificultad: 2, titulo: "Encontrar las raíces de una parábola factorizable", descripcion: "Ordena los pasos del proceso.", pasos: ["Factorizar la expresión cuadrática", "Igualar cada factor a cero por separado", "Resolver cada ecuación resultante", "Esos valores son las raíces de la parábola"] },
      { dificultad: 3, titulo: "Resolver una ecuación cuadrática con la fórmula general", descripcion: "Ordena los pasos del proceso.", pasos: ["Identificar los valores de a, b y c en la ecuación", "Calcular el discriminante (b² − 4ac)", "Reemplazar los valores en la fórmula general", "Simplificar para obtener las dos soluciones"] },
      { dificultad: 3, titulo: "Analizar el discriminante de una ecuación cuadrática", descripcion: "Ordena los pasos del proceso.", pasos: ["Calcular el discriminante con la fórmula b² − 4ac", "Si el discriminante es positivo, hay dos soluciones reales", "Si es igual a cero, hay una solución real (doble)", "Si es negativo, no hay soluciones reales"] }
    ]
  },

  "potenciacion-radicacion": {
    nombre: "Potenciación, radicación y sus propiedades",
    preguntas: [
      { dificultad: 1, enunciado: "¿Cuánto es 2³?", opciones: ["8", "6", "9", "5"], correcta: 0 },
      { dificultad: 1, enunciado: "¿Cuánto es 5²?", opciones: ["25", "10", "52", "20"], correcta: 0 },
      { dificultad: 1, enunciado: "¿Cuánto es √16?", opciones: ["4", "8", "2", "16"], correcta: 0 },
      { dificultad: 1, enunciado: "¿Cuánto es √25?", opciones: ["5", "12.5", "10", "2.5"], correcta: 0 },
      { dificultad: 1, enunciado: "¿Cuánto es 3²?", opciones: ["9", "6", "3", "12"], correcta: 0 },
      { dificultad: 1, enunciado: "¿Cuánto es 10²?", opciones: ["100", "20", "1000", "10"], correcta: 0 },
      { dificultad: 1, enunciado: "¿Cuánto es √9?", opciones: ["3", "4.5", "9", "18"], correcta: 0 },
      { dificultad: 1, enunciado: "¿Cuánto es 4³?", opciones: ["64", "12", "16", "48"], correcta: 0 },
      { dificultad: 1, enunciado: "¿Cuánto es √100?", opciones: ["10", "50", "20", "100"], correcta: 0 },
      { dificultad: 1, enunciado: "¿Cuánto es 2⁴?", opciones: ["16", "8", "6", "32"], correcta: 0 },

      { dificultad: 2, enunciado: "¿Cuánto es 2² × 2³?", opciones: ["32", "16", "12", "64"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Cuánto es x⁵ ÷ x²?", opciones: ["x³", "x⁷", "x²·⁵", "x"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Cuánto es (x²)³?", opciones: ["x⁶", "x⁵", "x⁹", "x²"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Cuánto es 2⁻¹?", opciones: ["1/2", "−2", "2", "−1/2"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Cuánto es ∛27?", opciones: ["3", "9", "27", "5.2"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Cuánto es 3⁰?", opciones: ["1", "0", "3", "No existe"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Cuánto es a³ × a⁴?", opciones: ["a⁷", "a¹²", "a⁴", "2a⁷"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Cuánto es ∛8?", opciones: ["2", "4", "8", "2.66"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Cuánto es 5⁻²?", opciones: ["1/25", "−1/25", "1/10", "25"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Cuánto es (2x)²?", opciones: ["4x²", "2x²", "4x", "2x"], correcta: 0 },

      { dificultad: 3, enunciado: "¿Cuánto es √50 simplificado?", opciones: ["5√2", "25√2", "2√5", "10√5"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Cuánto es √8 simplificado?", opciones: ["2√2", "4√2", "2√4", "8√2"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Cuánto es 8^(1/3)?", opciones: ["2", "8/3", "4", "24"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Cuánto es 4^(3/2)?", opciones: ["8", "6", "4", "64"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Cuánto es √12 simplificado?", opciones: ["2√3", "3√2", "4√3", "√12"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Cuánto es 9^(1/2)?", opciones: ["3", "4.5", "18", "81"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Cuánto es (x^(1/2))²?", opciones: ["x", "x²", "x^(1/4)", "1"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Cuánto es √2 × √8?", opciones: ["4", "√10", "16", "2√2"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Cuánto es √18 simplificado?", opciones: ["3√2", "2√3", "9√2", "6√3"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Cuánto es 27^(2/3)?", opciones: ["9", "3", "18", "729"], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Calcular una potencia de base entera", descripcion: "Ordena los pasos del proceso.", pasos: ["Identificar la base y el exponente", "Multiplicar la base por sí misma tantas veces como indique el exponente", "El resultado final es el valor de la potencia"] },
      { dificultad: 1, titulo: "Calcular una raíz cuadrada exacta", descripcion: "Ordena los pasos del proceso.", pasos: ["Pensar qué número multiplicado por sí mismo da el número dentro de la raíz", "Comprobar el resultado elevándolo al cuadrado", "Ese número es la raíz cuadrada buscada"] },
      { dificultad: 2, titulo: "Aplicar la propiedad del producto de potencias de igual base", descripcion: "Ordena los pasos del proceso.", pasos: ["Verificar que ambas potencias tengan la misma base", "Sumar los exponentes de las dos potencias", "Escribir el resultado con la base original y el nuevo exponente"] },
      { dificultad: 2, titulo: "Aplicar la propiedad del cociente de potencias de igual base", descripcion: "Ordena los pasos del proceso.", pasos: ["Verificar que ambas potencias tengan la misma base", "Restar el exponente del denominador al del numerador", "Escribir el resultado con la base original y el nuevo exponente"] },
      { dificultad: 3, titulo: "Simplificar una raíz no exacta", descripcion: "Ordena los pasos del proceso.", pasos: ["Descomponer el número dentro de la raíz en factores", "Buscar el mayor factor que sea un cuadrado perfecto", "Sacar la raíz de ese factor cuadrado perfecto fuera del radical", "Dejar el otro factor dentro de la raíz"] },
      { dificultad: 3, titulo: "Convertir una raíz en una potencia con exponente fraccionario", descripcion: "Ordena los pasos del proceso.", pasos: ["Identificar el número dentro de la raíz como la base", "Identificar el índice de la raíz", "Escribir ese índice como el denominador de un exponente fraccionario", "Escribir el resultado como una potencia con exponente fraccionario"] }
    ]
  },

  "teorema-pitagoras": {
    nombre: "Teorema de Pitágoras y aplicaciones geométricas",
    preguntas: [
      { dificultad: 1, enunciado: "Si los catetos miden 3 y 4, ¿cuánto mide la hipotenusa?", opciones: ["5", "7", "6", "4"], correcta: 0 },
      { dificultad: 1, enunciado: "Si los catetos miden 6 y 8, ¿cuánto mide la hipotenusa?", opciones: ["10", "14", "12", "8"], correcta: 0 },
      { dificultad: 1, enunciado: "¿Cuál es la fórmula del teorema de Pitágoras?", opciones: ["a² + b² = c²", "a + b = c", "a² − b² = c²", "a × b = c"], correcta: 0 },
      { dificultad: 1, enunciado: "En un triángulo rectángulo, ¿cómo se llama el lado más largo?", opciones: ["Hipotenusa", "Cateto", "Base", "Altura"], correcta: 0 },
      { dificultad: 1, enunciado: "Si los catetos miden 5 y 12, ¿cuánto mide la hipotenusa?", opciones: ["13", "17", "10", "60"], correcta: 0 },
      { dificultad: 1, enunciado: "¿Cómo se llaman los lados que forman el ángulo recto?", opciones: ["Catetos", "Hipotenusas", "Diagonales", "Vértices"], correcta: 0 },
      { dificultad: 1, enunciado: "Si los catetos miden 9 y 12, ¿cuánto mide la hipotenusa?", opciones: ["15", "21", "18", "13"], correcta: 0 },
      { dificultad: 1, enunciado: "Si la hipotenusa mide 10 y un cateto mide 6, ¿cuánto mide el otro cateto?", opciones: ["8", "4", "16", "6"], correcta: 0 },
      { dificultad: 1, enunciado: "Si los catetos miden 1 y 1, ¿cuánto mide la hipotenusa?", opciones: ["√2", "2", "1", "√4"], correcta: 0 },
      { dificultad: 1, enunciado: "¿A qué tipo de triángulo se le aplica el teorema de Pitágoras?", opciones: ["Triángulo rectángulo", "Triángulo equilátero", "Cualquier triángulo", "Triángulo obtuso"], correcta: 0 },

      { dificultad: 2, enunciado: "Si la hipotenusa mide 13 y un cateto mide 5, ¿cuánto mide el otro cateto?", opciones: ["12", "8", "18", "9"], correcta: 0 },
      { dificultad: 2, enunciado: "Si la hipotenusa mide 15 y un cateto mide 9, ¿cuánto mide el otro cateto?", opciones: ["12", "6", "24", "18"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Cuál es la diagonal de un rectángulo de lados 6 y 8?", opciones: ["10", "14", "48", "7"], correcta: 0 },
      { dificultad: 2, enunciado: "Una escalera de 10 m está apoyada en una pared, con la base a 6 m de la pared. ¿A qué altura llega?", opciones: ["8 m", "4 m", "16 m", "6 m"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Cuál es la diagonal de un cuadrado de lado 5?", opciones: ["5√2", "10", "5", "25"], correcta: 0 },
      { dificultad: 2, enunciado: "Si los catetos miden 7 y 24, ¿cuánto mide la hipotenusa?", opciones: ["25", "31", "17", "21"], correcta: 0 },
      { dificultad: 2, enunciado: "Si la hipotenusa mide 20 y un cateto mide 12, ¿cuánto mide el otro cateto?", opciones: ["16", "8", "32", "14"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Cuál es la diagonal de un rectángulo de lados 9 y 12?", opciones: ["15", "21", "3", "18"], correcta: 0 },
      { dificultad: 2, enunciado: "Si los catetos miden 8 y 15, ¿cuánto mide la hipotenusa?", opciones: ["17", "23", "7", "20"], correcta: 0 },
      { dificultad: 2, enunciado: "Una escalera de 13 m está apoyada en una pared, con la base a 5 m de la pared. ¿A qué altura llega?", opciones: ["12 m", "8 m", "18 m", "10 m"], correcta: 0 },

      { dificultad: 3, enunciado: "¿Un triángulo con lados 6, 8 y 10 es rectángulo?", opciones: ["Sí", "No", "Solo a veces", "Falta información"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Un triángulo con lados 5, 6 y 8 es rectángulo?", opciones: ["No", "Sí", "Solo a veces", "Falta información"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Cuál es la distancia entre los puntos (0,0) y (3,4)?", opciones: ["5", "7", "12", "3.5"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Cuál es la distancia entre los puntos (1,1) y (4,5)?", opciones: ["5", "7", "4", "3"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Un triángulo con lados 9, 12 y 15 es rectángulo?", opciones: ["Sí", "No", "Solo a veces", "Falta información"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Cuál es la distancia entre los puntos (0,0) y (6,8)?", opciones: ["10", "14", "48", "7"], correcta: 0 },
      { dificultad: 3, enunciado: "Si un cateto mide 10 y la hipotenusa mide 26, ¿cuánto mide el otro cateto?", opciones: ["24", "16", "36", "20"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Cuál es la distancia entre los puntos (2,3) y (2,7)?", opciones: ["4", "5", "2", "10"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Un triángulo con lados 7, 24 y 25 es rectángulo?", opciones: ["Sí", "No", "Solo a veces", "Falta información"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Cuál es la altura de un triángulo equilátero de lado 2?", opciones: ["√3", "2", "1", "√2"], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Calcular la hipotenusa conociendo los dos catetos", descripcion: "Ordena los pasos del proceso.", pasos: ["Elevar al cuadrado cada uno de los catetos", "Sumar los dos resultados obtenidos", "Sacar la raíz cuadrada de esa suma", "Ese resultado es la medida de la hipotenusa"] },
      { dificultad: 1, titulo: "Identificar los elementos de un triángulo rectángulo", descripcion: "Ordena los pasos del proceso.", pasos: ["Ubicar el ángulo recto del triángulo", "Identificar los dos lados que forman ese ángulo como los catetos", "Identificar el lado opuesto al ángulo recto como la hipotenusa"] },
      { dificultad: 2, titulo: "Calcular un cateto conociendo la hipotenusa y el otro cateto", descripcion: "Ordena los pasos del proceso.", pasos: ["Elevar al cuadrado la hipotenusa", "Elevar al cuadrado el cateto conocido", "Restar el cuadrado del cateto al cuadrado de la hipotenusa", "Sacar la raíz cuadrada de ese resultado"] },
      { dificultad: 2, titulo: "Aplicar el teorema de Pitágoras a un problema de la vida real", descripcion: "Ordena los pasos del proceso.", pasos: ["Identificar cuáles medidas del problema representan los catetos o la hipotenusa", "Dibujar un triángulo rectángulo con esas medidas", "Aplicar la fórmula a²+b²=c² con los datos conocidos", "Resolver para encontrar la medida que falta"] },
      { dificultad: 3, titulo: "Verificar si un triángulo es rectángulo conociendo sus tres lados", descripcion: "Ordena los pasos del proceso.", pasos: ["Identificar cuál es el lado más largo (posible hipotenusa)", "Elevar al cuadrado los dos lados más cortos y sumarlos", "Elevar al cuadrado el lado más largo", "Comparar ambos resultados: si son iguales, el triángulo es rectángulo"] },
      { dificultad: 3, titulo: "Calcular la distancia entre dos puntos usando Pitágoras", descripcion: "Ordena los pasos del proceso.", pasos: ["Calcular la diferencia entre las coordenadas x de los dos puntos", "Calcular la diferencia entre las coordenadas y de los dos puntos", "Elevar al cuadrado ambas diferencias y sumarlas", "Sacar la raíz cuadrada de esa suma para obtener la distancia"] }
    ]
  },

  "probabilidad-conteo": {
    nombre: "Probabilidad y técnicas de conteo",
    preguntas: [
      { dificultad: 1, enunciado: "Al lanzar una moneda, ¿cuál es la probabilidad de obtener cara?", opciones: ["1/2", "1/4", "1", "1/3"], correcta: 0 },
      { dificultad: 1, enunciado: "Al lanzar un dado, ¿cuál es la probabilidad de obtener un 4?", opciones: ["1/6", "1/4", "1/2", "4/6"], correcta: 0 },
      { dificultad: 1, enunciado: "En una bolsa hay 3 bolas rojas y 2 azules. ¿Cuántas bolas hay en total?", opciones: ["5", "6", "3", "2"], correcta: 0 },
      { dificultad: 1, enunciado: "Al lanzar un dado, ¿cuál es la probabilidad de obtener un número par?", opciones: ["1/2", "1/3", "1/6", "2/3"], correcta: 0 },
      { dificultad: 1, enunciado: "¿Cuántos resultados posibles hay al lanzar una moneda?", opciones: ["2", "1", "4", "6"], correcta: 0 },
      { dificultad: 1, enunciado: "¿Cuántos resultados posibles hay al lanzar un dado?", opciones: ["6", "4", "2", "12"], correcta: 0 },
      { dificultad: 1, enunciado: "En una bolsa con 4 bolas rojas y 6 azules, ¿cuál es la probabilidad de sacar una roja?", opciones: ["4/10", "6/10", "4/6", "1/4"], correcta: 0 },
      { dificultad: 1, enunciado: "Al lanzar un dado, ¿cuál es la probabilidad de obtener un número mayor a 4?", opciones: ["2/6", "4/6", "1/6", "3/6"], correcta: 0 },
      { dificultad: 1, enunciado: "Si tienes 3 camisas y 2 pantalones, ¿cuántas combinaciones de outfit puedes formar?", opciones: ["6", "5", "3", "2"], correcta: 0 },
      { dificultad: 1, enunciado: "¿Cuál es la probabilidad de que NO salga cara al lanzar una moneda?", opciones: ["1/2", "1", "0", "1/4"], correcta: 0 },

      { dificultad: 2, enunciado: "¿Cuántas formas hay de ordenar 3 personas en una fila?", opciones: ["6", "3", "9", "12"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Cuánto es 4!?", opciones: ["24", "16", "12", "8"], correcta: 0 },
      { dificultad: 2, enunciado: "Al lanzar dos monedas, ¿cuál es la probabilidad de obtener dos caras?", opciones: ["1/4", "1/2", "1/3", "2/4"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Cuántas placas de 2 letras se pueden formar con A, B y C (sin repetir)?", opciones: ["6", "3", "9", "2"], correcta: 0 },
      { dificultad: 2, enunciado: "Al lanzar un dado dos veces, ¿cuántos resultados posibles hay en total?", opciones: ["36", "12", "6", "18"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Cuánto es 5!?", opciones: ["120", "20", "60", "25"], correcta: 0 },
      { dificultad: 2, enunciado: "En una carrera de 4 corredores, ¿de cuántas formas pueden llegar 1° y 2°?", opciones: ["12", "8", "4", "16"], correcta: 0 },
      { dificultad: 2, enunciado: "Con 4 sabores de helado, eliges 2 para un cono. ¿Cuántas combinaciones hay (sin importar el orden)?", opciones: ["6", "8", "12", "4"], correcta: 0 },
      { dificultad: 2, enunciado: "Al lanzar una moneda y un dado, ¿cuántos resultados posibles hay en total?", opciones: ["12", "8", "6", "2"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Cuántas formas hay de ordenar las letras de la palabra 'SOL'?", opciones: ["6", "3", "9", "12"], correcta: 0 },

      { dificultad: 3, enunciado: "¿De cuántas formas se pueden elegir 3 personas de un grupo de 5 (sin importar el orden)?", opciones: ["10", "15", "20", "60"], correcta: 0 },
      { dificultad: 3, enunciado: "¿De cuántas formas se pueden elegir 2 personas de un grupo de 6?", opciones: ["15", "30", "12", "6"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Cuántos números de 3 cifras diferentes se pueden formar con 1,2,3,4 (sin repetir)?", opciones: ["24", "12", "64", "10"], correcta: 0 },
      { dificultad: 3, enunciado: "En una bolsa hay 5 bolas rojas y 3 azules. ¿Cuál es la probabilidad de sacar una azul?", opciones: ["3/8", "5/8", "3/5", "1/3"], correcta: 0 },
      { dificultad: 3, enunciado: "¿De cuántas formas se pueden ordenar 4 libros en un estante?", opciones: ["24", "16", "12", "8"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Cuánto es 6! / (3! × 3!)?", opciones: ["20", "40", "10", "120"], correcta: 0 },
      { dificultad: 3, enunciado: "Si lanzas 3 monedas, ¿cuántos resultados posibles hay en total?", opciones: ["8", "6", "9", "3"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Cuál es la probabilidad de sacar un as de una baraja de 52 cartas?", opciones: ["4/52", "1/52", "13/52", "4/13"], correcta: 0 },
      { dificultad: 3, enunciado: "¿De cuántas formas se puede elegir un presidente y un secretario de un grupo de 5 (cargos distintos)?", opciones: ["20", "10", "25", "15"], correcta: 0 },
      { dificultad: 3, enunciado: "Al lanzar 2 dados, ¿de cuántas formas la suma de los puntos puede ser 7?", opciones: ["6", "3", "7", "12"], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Calcular la probabilidad simple de un evento", descripcion: "Ordena los pasos del proceso.", pasos: ["Contar cuántos resultados favorables cumplen la condición pedida", "Contar cuántos resultados posibles hay en total", "Dividir el número de resultados favorables entre el total", "Ese resultado es la probabilidad del evento"] },
      { dificultad: 1, titulo: "Contar los resultados posibles de un experimento simple", descripcion: "Ordena los pasos del proceso.", pasos: ["Identificar todas las opciones posibles del experimento", "Hacer una lista o diagrama con todas ellas", "Contar cuántas opciones distintas aparecen en la lista"] },
      { dificultad: 2, titulo: "Calcular el número de resultados de dos experimentos combinados", descripcion: "Ordena los pasos del proceso.", pasos: ["Contar cuántos resultados posibles tiene el primer experimento", "Contar cuántos resultados posibles tiene el segundo experimento", "Multiplicar esos dos números entre sí", "Ese producto es el total de resultados combinados"] },
      { dificultad: 2, titulo: "Calcular de cuántas formas se pueden ordenar varios elementos", descripcion: "Ordena los pasos del proceso.", pasos: ["Contar cuántos elementos hay para ordenar", "Multiplicar ese número por todos los enteros positivos menores que él", "Ese resultado (el factorial) es el número total de ordenamientos posibles"] },
      { dificultad: 3, titulo: "Calcular una combinación (el orden no importa)", descripcion: "Ordena los pasos del proceso.", pasos: ["Identificar cuántos elementos hay en total y cuántos se van a elegir", "Calcular el factorial del total de elementos", "Calcular el factorial de los elegidos y el de los no elegidos", "Dividir el primer factorial entre el producto de los otros dos"] },
      { dificultad: 3, titulo: "Calcular una permutación (el orden sí importa)", descripcion: "Ordena los pasos del proceso.", pasos: ["Identificar cuántos elementos hay en total y cuántos se van a elegir y ordenar", "Calcular el factorial del total de elementos", "Calcular el factorial de los elementos que no se eligen", "Dividir el primer factorial entre el segundo para obtener la permutación"] }
    ]
  },

  "analisis-sintactico": {
    nombre: "Análisis sintáctico de oraciones (sujeto y predicado)",
    preguntas: [
      { dificultad: 1, enunciado: "'El perro corre en el parque.' ¿Cuál es el sujeto?", opciones: ["El perro", "corre", "en el parque", "el parque"], correcta: 0 },
      { dificultad: 1, enunciado: "'María canta una canción.' ¿Cuál es el sujeto?", opciones: ["María", "canta", "una canción", "canción"], correcta: 0 },
      { dificultad: 1, enunciado: "'Los niños juegan fútbol.' ¿Cuál es el sujeto?", opciones: ["Los niños", "juegan", "fútbol", "juegan fútbol"], correcta: 0 },
      { dificultad: 1, enunciado: "'El profesor explica la lección.' ¿Cuál es el sujeto?", opciones: ["El profesor", "explica", "la lección", "explica la lección"], correcta: 0 },
      { dificultad: 1, enunciado: "'Ana y Luis estudian juntos.' ¿Cuál es el sujeto?", opciones: ["Ana y Luis", "estudian", "juntos", "estudian juntos"], correcta: 0 },
      { dificultad: 1, enunciado: "'La casa es grande.' ¿Cuál es el sujeto?", opciones: ["La casa", "es", "grande", "es grande"], correcta: 0 },
      { dificultad: 1, enunciado: "'Los pájaros vuelan alto.' ¿Cuál es el sujeto?", opciones: ["Los pájaros", "vuelan", "alto", "vuelan alto"], correcta: 0 },
      { dificultad: 1, enunciado: "'Mi hermano cocina muy bien.' ¿Cuál es el sujeto?", opciones: ["Mi hermano", "cocina", "muy bien", "cocina muy bien"], correcta: 0 },
      { dificultad: 1, enunciado: "'El carro está en el garaje.' ¿Cuál es el sujeto?", opciones: ["El carro", "está", "en el garaje", "garaje"], correcta: 0 },
      { dificultad: 1, enunciado: "'Las flores huelen bien.' ¿Cuál es el sujeto?", opciones: ["Las flores", "huelen", "bien", "huelen bien"], correcta: 0 },

      { dificultad: 2, enunciado: "'El perro corre en el parque.' ¿Cuál es el predicado?", opciones: ["corre en el parque", "El perro", "en el parque", "corre"], correcta: 0 },
      { dificultad: 2, enunciado: "'El gato negro duerme.' ¿Cuál es el núcleo del sujeto?", opciones: ["gato", "negro", "El gato negro", "duerme"], correcta: 0 },
      { dificultad: 2, enunciado: "'María canta una canción hermosa.' ¿Cuál es el predicado?", opciones: ["canta una canción hermosa", "María", "una canción hermosa", "hermosa"], correcta: 0 },
      { dificultad: 2, enunciado: "'Los niños juegan fútbol.' ¿Cuál es el núcleo del predicado?", opciones: ["juegan", "fútbol", "Los niños", "juegan fútbol"], correcta: 0 },
      { dificultad: 2, enunciado: "'El profesor explica la lección con paciencia.' ¿Cuál es el predicado?", opciones: ["explica la lección con paciencia", "El profesor", "con paciencia", "la lección"], correcta: 0 },
      { dificultad: 2, enunciado: "'La casa blanca es grande.' ¿Cuál es el núcleo del sujeto?", opciones: ["casa", "blanca", "La casa blanca", "es"], correcta: 0 },
      { dificultad: 2, enunciado: "'Los estudiantes terminaron el examen.' ¿Cuál es el predicado?", opciones: ["terminaron el examen", "Los estudiantes", "el examen", "terminaron"], correcta: 0 },
      { dificultad: 2, enunciado: "'Mi hermano cocina muy bien.' ¿Cuál es el núcleo del predicado?", opciones: ["cocina", "muy bien", "hermano", "Mi hermano"], correcta: 0 },
      { dificultad: 2, enunciado: "'El sol brilla en el cielo.' ¿Cuál es el predicado?", opciones: ["brilla en el cielo", "El sol", "en el cielo", "brilla"], correcta: 0 },
      { dificultad: 2, enunciado: "'Las flores del jardín huelen bien.' ¿Cuál es el núcleo del sujeto?", opciones: ["flores", "jardín", "Las flores del jardín", "huelen"], correcta: 0 },

      { dificultad: 3, enunciado: "'Corrieron toda la tarde.' ¿Qué tipo de sujeto tiene esta oración?", opciones: ["Sujeto tácito", "Sujeto simple", "Sujeto compuesto", "No tiene sujeto"], correcta: 0 },
      { dificultad: 3, enunciado: "'Vive en Bogotá.' ¿Qué tipo de sujeto tiene?", opciones: ["Sujeto tácito", "Sujeto simple", "Sujeto compuesto", "No tiene sujeto"], correcta: 0 },
      { dificultad: 3, enunciado: "'Juan y Pedro llegaron tarde.' ¿Qué tipo de sujeto es?", opciones: ["Sujeto compuesto", "Sujeto simple", "Sujeto tácito", "No tiene sujeto"], correcta: 0 },
      { dificultad: 3, enunciado: "'María, mi mejor amiga, ganó el premio.' ¿Qué tipo de sujeto tiene?", opciones: ["Sujeto simple con aposición", "Sujeto compuesto", "Sujeto tácito", "No tiene sujeto"], correcta: 0 },
      { dificultad: 3, enunciado: "En 'El perro come su comida rápidamente', ¿cuál es el complemento directo?", opciones: ["su comida", "rápidamente", "El perro", "come"], correcta: 0 },
      { dificultad: 3, enunciado: "En 'Ella le dio un regalo a su mamá', ¿cuál es el complemento indirecto?", opciones: ["a su mamá", "un regalo", "Ella", "dio"], correcta: 0 },
      { dificultad: 3, enunciado: "'Llueve mucho en esta época.' ¿Qué tipo de sujeto tiene?", opciones: ["Sujeto tácito (impersonal)", "Sujeto simple", "Sujeto compuesto", "Sujeto expreso"], correcta: 0 },
      { dificultad: 3, enunciado: "En 'El estudiante escribió la carta con cuidado', ¿cuál es el complemento circunstancial?", opciones: ["con cuidado", "la carta", "El estudiante", "escribió"], correcta: 0 },
      { dificultad: 3, enunciado: "'Los estudiantes y los profesores participaron en el evento.' ¿Qué tipo de sujeto es?", opciones: ["Sujeto compuesto", "Sujeto simple", "Sujeto tácito", "No tiene sujeto"], correcta: 0 },
      { dificultad: 3, enunciado: "En 'Compramos pan en la panadería', ¿cuál es el complemento circunstancial de lugar?", opciones: ["en la panadería", "pan", "Compramos", "No hay"], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Identificar el sujeto de una oración", descripcion: "Ordena los pasos del proceso.", pasos: ["Buscar el verbo principal de la oración", "Preguntar '¿quién realiza la acción?'", "Esa palabra o grupo de palabras es el sujeto"] },
      { dificultad: 1, titulo: "Identificar el predicado de una oración", descripcion: "Ordena los pasos del proceso.", pasos: ["Identificar primero el sujeto de la oración", "Todo lo que no sea el sujeto es el predicado", "El predicado siempre contiene el verbo"] },
      { dificultad: 2, titulo: "Encontrar el núcleo del sujeto", descripcion: "Ordena los pasos del proceso.", pasos: ["Identificar el sujeto completo de la oración", "Buscar la palabra principal dentro de ese grupo", "Esa palabra es el núcleo del sujeto"] },
      { dificultad: 2, titulo: "Encontrar el núcleo del predicado", descripcion: "Ordena los pasos del proceso.", pasos: ["Identificar el predicado completo de la oración", "Buscar el verbo conjugado dentro de ese grupo", "Ese verbo es el núcleo del predicado"] },
      { dificultad: 3, titulo: "Identificar un sujeto tácito", descripcion: "Ordena los pasos del proceso.", pasos: ["Buscar el verbo principal de la oración", "Verificar si no aparece explícitamente quién realiza la acción", "Deducir el sujeto según la terminación del verbo"] },
      { dificultad: 3, titulo: "Identificar los complementos de un predicado", descripcion: "Ordena los pasos del proceso.", pasos: ["Identificar el verbo principal de la oración", "Preguntar qué, a quién o cómo/dónde/cuándo se realiza la acción", "Clasificar cada respuesta como complemento directo, indirecto o circunstancial"] }
    ]
  },

  "clases-palabras": {
    nombre: "Clases de palabras y categorías gramaticales",
    preguntas: [
      { dificultad: 1, enunciado: "En la palabra 'perro', ¿qué clase de palabra es?", opciones: ["Sustantivo", "Verbo", "Adjetivo", "Adverbio"], correcta: 0 },
      { dificultad: 1, enunciado: "En 'corre', ¿qué clase de palabra es?", opciones: ["Verbo", "Sustantivo", "Adjetivo", "Preposición"], correcta: 0 },
      { dificultad: 1, enunciado: "En 'bonito', ¿qué clase de palabra es?", opciones: ["Adjetivo", "Sustantivo", "Verbo", "Adverbio"], correcta: 0 },
      { dificultad: 1, enunciado: "En 'rápidamente', ¿qué clase de palabra es?", opciones: ["Adverbio", "Adjetivo", "Sustantivo", "Verbo"], correcta: 0 },
      { dificultad: 1, enunciado: "En 'ella', ¿qué clase de palabra es?", opciones: ["Pronombre", "Sustantivo", "Adjetivo", "Artículo"], correcta: 0 },
      { dificultad: 1, enunciado: "En 'el', ¿qué clase de palabra es?", opciones: ["Artículo", "Pronombre", "Adjetivo", "Sustantivo"], correcta: 0 },
      { dificultad: 1, enunciado: "En 'y', ¿qué clase de palabra es?", opciones: ["Conjunción", "Preposición", "Artículo", "Adverbio"], correcta: 0 },
      { dificultad: 1, enunciado: "En 'sobre', ¿qué clase de palabra es?", opciones: ["Preposición", "Conjunción", "Adverbio", "Artículo"], correcta: 0 },
      { dificultad: 1, enunciado: "En 'casa', ¿qué clase de palabra es?", opciones: ["Sustantivo", "Verbo", "Adjetivo", "Adverbio"], correcta: 0 },
      { dificultad: 1, enunciado: "En 'feliz', ¿qué clase de palabra es?", opciones: ["Adjetivo", "Sustantivo", "Verbo", "Adverbio"], correcta: 0 },

      { dificultad: 2, enunciado: "En 'El niño juega alegremente', ¿qué palabra es el adverbio?", opciones: ["alegremente", "El niño", "juega", "niño"], correcta: 0 },
      { dificultad: 2, enunciado: "En 'La casa azul es grande', ¿qué palabra es el adjetivo?", opciones: ["azul", "casa", "es", "grande y azul"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Cuál de estas palabras es un sustantivo propio?", opciones: ["Bogotá", "ciudad", "grande", "correr"], correcta: 0 },
      { dificultad: 2, enunciado: "En 'Ellos corren rápido', ¿qué clase de palabra es 'ellos'?", opciones: ["Pronombre", "Sustantivo", "Adjetivo", "Verbo"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Cuál de estas palabras es una preposición?", opciones: ["con", "pero", "muy", "casa"], correcta: 0 },
      { dificultad: 2, enunciado: "En 'María y Juan estudian', ¿qué clase de palabra es 'y'?", opciones: ["Conjunción", "Preposición", "Adverbio", "Pronombre"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Cuál de estas palabras es un verbo?", opciones: ["estudiar", "rápido", "mesa", "azul"], correcta: 0 },
      { dificultad: 2, enunciado: "En 'un libro interesante', ¿qué clase de palabra es 'un'?", opciones: ["Artículo", "Pronombre", "Adjetivo", "Sustantivo"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Cuál de estas palabras es un adjetivo?", opciones: ["hermoso", "correr", "casa", "rápidamente"], correcta: 0 },
      { dificultad: 2, enunciado: "En 'ella habla muy bien', ¿qué clase de palabra es 'muy'?", opciones: ["Adverbio", "Adjetivo", "Pronombre", "Verbo"], correcta: 0 },

      { dificultad: 3, enunciado: "¿Cuál es el sustantivo derivado del verbo 'cantar'?", opciones: ["cantante", "cantado", "cantaba", "cantable"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Cuál es el adjetivo derivado del sustantivo 'felicidad'?", opciones: ["feliz", "felizmente", "felicitar", "felicidades"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Qué clase de palabra es 'aunque' en 'Aunque llueve, saldré'?", opciones: ["Conjunción", "Preposición", "Adverbio", "Pronombre"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Cuál de estas es una interjección?", opciones: ["¡Ay!", "casa", "correr", "bonito"], correcta: 0 },
      { dificultad: 3, enunciado: "En 'el que llegó tarde', ¿qué clase de palabra es 'que'?", opciones: ["Pronombre relativo", "Conjunción", "Adverbio", "Artículo"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Cuál es el diminutivo de 'casa'?", opciones: ["casita", "casona", "casero", "casucha"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Cuál de estas palabras es un adverbio de negación?", opciones: ["nunca", "mucho", "aquí", "ayer"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Qué clase de palabra es 'mi' en 'mi perro es fiel'?", opciones: ["Adjetivo posesivo", "Pronombre personal", "Sustantivo", "Artículo"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Cuál es el aumentativo de 'perro'?", opciones: ["perrazo", "perrito", "perrera", "perruno"], correcta: 0 },
      { dificultad: 3, enunciado: "En 'los libros de la biblioteca', ¿qué clase de palabra es 'de'?", opciones: ["Preposición", "Conjunción", "Artículo", "Adverbio"], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Identificar si una palabra es sustantivo o verbo", descripcion: "Ordena los pasos del proceso.", pasos: ["Preguntar si la palabra nombra a una persona, animal, cosa o idea", "Si es así, es un sustantivo", "Si expresa una acción o estado, es un verbo"] },
      { dificultad: 1, titulo: "Identificar un adjetivo en una oración", descripcion: "Ordena los pasos del proceso.", pasos: ["Buscar el sustantivo en la oración", "Buscar la palabra que lo describe o califica", "Esa palabra es el adjetivo"] },
      { dificultad: 2, titulo: "Distinguir un adverbio de un adjetivo", descripcion: "Ordena los pasos del proceso.", pasos: ["Verificar si la palabra modifica a un sustantivo o a un verbo", "Si modifica a un sustantivo, es adjetivo", "Si modifica a un verbo, adjetivo u otro adverbio, es adverbio"] },
      { dificultad: 2, titulo: "Identificar la clase de una palabra dentro de una oración", descripcion: "Ordena los pasos del proceso.", pasos: ["Leer la oración completa", "Ubicar la palabra en cuestión", "Analizar su función dentro de la oración para clasificarla"] },
      { dificultad: 3, titulo: "Reconocer una palabra derivada", descripcion: "Ordena los pasos del proceso.", pasos: ["Identificar la palabra base (raíz)", "Observar qué prefijo o sufijo se le agregó", "Determinar la nueva clase de palabra que resulta"] },
      { dificultad: 3, titulo: "Clasificar palabras según su categoría gramatical en un texto", descripcion: "Ordena los pasos del proceso.", pasos: ["Leer el texto completo", "Separar las palabras según su función (sustantivo, verbo, adjetivo, etc.)", "Verificar cada clasificación según el contexto de la oración"] }
    ]
  },

  "tildes-acentuacion": {
    nombre: "Uso correcto de tildes y reglas de acentuación",
    preguntas: [
      { dificultad: 1, enunciado: "¿Cómo se clasifica la palabra 'camión' según su acentuación?", opciones: ["Aguda", "Grave", "Esdrújula", "Sobresdrújula"], correcta: 0 },
      { dificultad: 1, enunciado: "¿Cómo se clasifica la palabra 'árbol'?", opciones: ["Grave", "Aguda", "Esdrújula", "Sobresdrújula"], correcta: 0 },
      { dificultad: 1, enunciado: "¿Cómo se clasifica la palabra 'música'?", opciones: ["Esdrújula", "Aguda", "Grave", "Sobresdrújula"], correcta: 0 },
      { dificultad: 1, enunciado: "¿Las palabras esdrújulas siempre llevan tilde?", opciones: ["Sí", "No", "Solo a veces", "Depende del hablante"], correcta: 0 },
      { dificultad: 1, enunciado: "¿Cómo se clasifica 'reloj'?", opciones: ["Aguda", "Grave", "Esdrújula", "Sobresdrújula"], correcta: 0 },
      { dificultad: 1, enunciado: "¿Cuál es la regla para acentuar las palabras agudas?", opciones: ["Cuando terminan en n, s o vocal", "Cuando terminan en cualquier consonante", "Siempre llevan tilde", "Nunca llevan tilde"], correcta: 0 },
      { dificultad: 1, enunciado: "¿Cómo se clasifica 'lápiz'?", opciones: ["Grave", "Aguda", "Esdrújula", "Sobresdrújula"], correcta: 0 },
      { dificultad: 1, enunciado: "¿Cuál es la regla para acentuar las palabras graves?", opciones: ["Cuando NO terminan en n, s o vocal", "Cuando terminan en vocal", "Siempre llevan tilde", "Nunca llevan tilde"], correcta: 0 },
      { dificultad: 1, enunciado: "¿Cómo se clasifica 'teléfono'?", opciones: ["Esdrújula", "Aguda", "Grave", "Sobresdrújula"], correcta: 0 },
      { dificultad: 1, enunciado: "¿Cómo se clasifica 'pared'?", opciones: ["Aguda", "Grave", "Esdrújula", "Sobresdrújula"], correcta: 0 },

      { dificultad: 2, enunciado: "¿Cuál de estas palabras lleva tilde correctamente?", opciones: ["camión", "camion", "camio", "camióm"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Cuál de estas palabras está correctamente escrita?", opciones: ["fácil", "facil", "fasil", "fácíl"], correcta: 0 },
      { dificultad: 2, enunciado: "En la palabra 'día', ¿por qué lleva tilde?", opciones: ["Porque hay un hiato", "Porque es aguda", "Porque es esdrújula", "No debería llevar tilde"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Cuál de estas palabras es esdrújula y necesita tilde?", opciones: ["pérdida", "perdido", "perder", "perdiendo"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Cuál de estas palabras está mal escrita?", opciones: ["facíl", "rápido", "canción", "árbol"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Cuál de estas es una palabra sobresdrújula?", opciones: ["dígamelo", "rápidamente", "cómodo", "canción"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Cuál de estas palabras graves lleva tilde correctamente?", opciones: ["árbol", "lapiz", "camion", "dificil"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Por qué la palabra 'país' lleva tilde?", opciones: ["Porque hay un hiato", "Porque es esdrújula", "Porque termina en consonante", "No debería llevar tilde"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Cuál de estas palabras es correcta?", opciones: ["así", "asi", "haci", "asy"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Cuál de estas palabras es esdrújula (necesita tilde en la antepenúltima sílaba)?", opciones: ["musica", "facil", "arbol", "camion"], correcta: 0 },

      { dificultad: 3, enunciado: "¿Cuál es la diferencia entre 'tú' y 'tu'?", opciones: ["'Tú' es pronombre personal, 'tu' es posesivo", "Son exactamente lo mismo", "'Tú' es posesivo, 'tu' es pronombre", "'Tu' no existe en español"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Cuál es la diferencia entre 'él' y 'el'?", opciones: ["'Él' es pronombre personal, 'el' es artículo", "Son exactamente lo mismo", "'Él' es artículo, 'el' es pronombre", "'El' no existe en español"], correcta: 0 },
      { dificultad: 3, enunciado: "Según la RAE actual, ¿la palabra 'solo' (adverbio) debe llevar tilde?", opciones: ["No, ya no se tilda", "Sí, siempre", "Solo si hay ambigüedad extrema y se prefiere", "Depende del país"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Cuál es la diferencia entre 'sí' y 'si'?", opciones: ["'Sí' es afirmación, 'si' es condicional", "Son exactamente lo mismo", "'Sí' es condicional, 'si' es afirmación", "'Si' no existe en español"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Cuál es la diferencia entre 'más' y 'mas'?", opciones: ["'Más' indica cantidad, 'mas' significa 'pero'", "Son exactamente lo mismo", "'Más' significa 'pero', 'mas' indica cantidad", "'Mas' no existe en español"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Cuál es la diferencia entre 'té' y 'te'?", opciones: ["'Té' es la bebida, 'te' es pronombre", "Son exactamente lo mismo", "'Té' es pronombre, 'te' es la bebida", "'Te' no existe en español"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Cuál es la diferencia entre 'dé' y 'de'?", opciones: ["'Dé' es del verbo dar, 'de' es preposición", "Son exactamente lo mismo", "'Dé' es preposición, 'de' es del verbo dar", "'De' no existe en español"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Cuál es la diferencia entre 'aún' y 'aun'?", opciones: ["'Aún' significa 'todavía', 'aun' significa 'incluso'", "Son exactamente lo mismo", "'Aún' significa 'incluso', 'aun' significa 'todavía'", "'Aun' no existe en español"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Cuál es la diferencia entre 'qué' y 'que'?", opciones: ["'Qué' es interrogativo/exclamativo, 'que' es relativo o conjunción", "Son exactamente lo mismo", "'Qué' es relativo, 'que' es interrogativo", "'Que' no existe en español"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Cuál es la diferencia entre 'cómo' y 'como'?", opciones: ["'Cómo' es interrogativo/exclamativo, 'como' es comparativo o conjunción", "Son exactamente lo mismo", "'Cómo' es comparativo, 'como' es interrogativo", "'Como' no existe en español"], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Clasificar una palabra según su acentuación", descripcion: "Ordena los pasos del proceso.", pasos: ["Separar la palabra en sílabas", "Identificar cuál es la sílaba tónica", "Determinar si es aguda, grave o esdrújula según la posición de esa sílaba"] },
      { dificultad: 1, titulo: "Aplicar la regla de tilde para palabras agudas", descripcion: "Ordena los pasos del proceso.", pasos: ["Verificar si la palabra es aguda", "Revisar si termina en n, s o vocal", "Si cumple esa condición, se le coloca la tilde"] },
      { dificultad: 2, titulo: "Aplicar la regla de tilde para palabras graves", descripcion: "Ordena los pasos del proceso.", pasos: ["Verificar si la palabra es grave (llana)", "Revisar si termina en una consonante distinta de n o s", "Si cumple esa condición, se le coloca la tilde"] },
      { dificultad: 2, titulo: "Aplicar la regla de tilde para palabras esdrújulas", descripcion: "Ordena los pasos del proceso.", pasos: ["Verificar si la palabra es esdrújula", "Confirmar que la sílaba tónica es la antepenúltima", "Todas las palabras esdrújulas llevan tilde sin excepción"] },
      { dificultad: 3, titulo: "Identificar un hiato para saber si lleva tilde", descripcion: "Ordena los pasos del proceso.", pasos: ["Buscar dos vocales juntas en la palabra", "Verificar si una es fuerte y otra débil", "Si la débil lleva el golpe de voz, se rompe el diptongo y se coloca la tilde"] },
      { dificultad: 3, titulo: "Usar la tilde diacrítica correctamente", descripcion: "Ordena los pasos del proceso.", pasos: ["Identificar la palabra que tiene dos significados posibles", "Determinar qué función cumple en la oración", "Colocar la tilde solo si corresponde al significado que lleva tilde"] }
    ]
  },

  "conectores-textuales": {
    nombre: "Identificación y uso de conectores textuales",
    preguntas: [
      { dificultad: 1, enunciado: "¿Qué tipo de conector es 'además'?", opciones: ["Aditivo", "Adversativo", "Causal", "Consecutivo"], correcta: 0 },
      { dificultad: 1, enunciado: "¿Qué tipo de conector es 'pero'?", opciones: ["Adversativo", "Aditivo", "Causal", "Consecutivo"], correcta: 0 },
      { dificultad: 1, enunciado: "¿Qué tipo de conector es 'porque'?", opciones: ["Causal", "Aditivo", "Adversativo", "De orden"], correcta: 0 },
      { dificultad: 1, enunciado: "¿Qué tipo de conector es 'por lo tanto'?", opciones: ["Consecutivo", "Aditivo", "Adversativo", "De orden"], correcta: 0 },
      { dificultad: 1, enunciado: "¿Qué tipo de conector es 'primero'?", opciones: ["De orden/secuencia", "Aditivo", "Causal", "Adversativo"], correcta: 0 },
      { dificultad: 1, enunciado: "¿Qué tipo de conector es 'también'?", opciones: ["Aditivo", "Adversativo", "Causal", "Consecutivo"], correcta: 0 },
      { dificultad: 1, enunciado: "¿Qué tipo de conector es 'sin embargo'?", opciones: ["Adversativo", "Aditivo", "Causal", "De orden"], correcta: 0 },
      { dificultad: 1, enunciado: "¿Qué tipo de conector es 'finalmente'?", opciones: ["De orden/secuencia", "Aditivo", "Causal", "Adversativo"], correcta: 0 },
      { dificultad: 1, enunciado: "¿Qué tipo de conector es 'ya que'?", opciones: ["Causal", "Aditivo", "Adversativo", "De orden"], correcta: 0 },
      { dificultad: 1, enunciado: "¿Qué tipo de conector es 'entonces'?", opciones: ["Consecutivo", "Aditivo", "Adversativo", "De orden"], correcta: 0 },

      { dificultad: 2, enunciado: "'Estudió mucho, ___ no pasó el examen.' ¿Qué conector usarías?", opciones: ["sin embargo", "además", "porque", "primero"], correcta: 0 },
      { dificultad: 2, enunciado: "'Llegó tarde ___ el tráfico estaba pesado.' ¿Qué conector usarías?", opciones: ["porque", "pero", "además", "finalmente"], correcta: 0 },
      { dificultad: 2, enunciado: "'Hizo la tarea, ___ ayudó a su hermano.' ¿Qué conector usarías?", opciones: ["además", "pero", "porque", "por lo tanto"], correcta: 0 },
      { dificultad: 2, enunciado: "'No estudió, ___ reprobó el examen.' ¿Qué conector usarías?", opciones: ["por lo tanto", "además", "pero", "primero"], correcta: 0 },
      { dificultad: 2, enunciado: "'___ vamos al parque, luego compraremos un helado.' ¿Qué conector de orden usarías?", opciones: ["Primero", "Sin embargo", "Porque", "Por lo tanto"], correcta: 0 },
      { dificultad: 2, enunciado: "'Le gusta el fútbol, ___ prefiere el baloncesto.' ¿Qué conector usarías?", opciones: ["pero", "además", "porque", "entonces"], correcta: 0 },
      { dificultad: 2, enunciado: "'Se esforzó mucho, ___ logró su meta.' ¿Qué conector usarías?", opciones: ["por eso", "pero", "aunque", "primero"], correcta: 0 },
      { dificultad: 2, enunciado: "'Quiere viajar ___ conocer nuevas culturas.' ¿Qué conector de finalidad usarías?", opciones: ["para", "porque", "pero", "entonces"], correcta: 0 },
      { dificultad: 2, enunciado: "'No tenía dinero, ___ pidió un préstamo.' ¿Qué conector usarías?", opciones: ["por lo tanto", "pero", "además", "primero"], correcta: 0 },
      { dificultad: 2, enunciado: "'Vino a la fiesta ___ estaba enfermo.' ¿Qué conector de contraste usarías?", opciones: ["aunque", "porque", "además", "entonces"], correcta: 0 },

      { dificultad: 3, enunciado: "¿Qué función cumple el conector 'no obstante'?", opciones: ["Introducir un contraste u oposición", "Introducir un ejemplo", "Cerrar el texto", "Ordenar las ideas"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Qué función cumple el conector 'es decir'?", opciones: ["Aclarar o explicar una idea anterior", "Introducir un contraste", "Cerrar el texto", "Ordenar las ideas"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Qué función cumple el conector 'en conclusión'?", opciones: ["Cerrar o resumir las ideas del texto", "Introducir un ejemplo", "Introducir una causa", "Ordenar las ideas"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Qué función cumple el conector 'por ejemplo'?", opciones: ["Introducir un ejemplo", "Cerrar el texto", "Introducir un contraste", "Ordenar las ideas"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Qué función cumple el conector 'a pesar de'?", opciones: ["Introducir un contraste u oposición", "Introducir un ejemplo", "Cerrar el texto", "Ordenar las ideas"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Qué función cumple el conector 'en primer lugar'?", opciones: ["Organizar las ideas en orden", "Introducir un contraste", "Cerrar el texto", "Introducir una causa"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Qué función cumple el conector 'debido a'?", opciones: ["Introducir una causa", "Introducir un contraste", "Cerrar el texto", "Ordenar las ideas"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Qué función cumple el conector 'de igual manera'?", opciones: ["Comparar o añadir una idea similar", "Introducir un contraste", "Cerrar el texto", "Introducir una causa"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Cuál sería el mejor conector para cerrar un texto argumentativo?", opciones: ["En conclusión", "Por ejemplo", "Sin embargo", "Primero"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Cuál conector introduce mejor un resultado o consecuencia?", opciones: ["Por consiguiente", "Sin embargo", "Por ejemplo", "Aunque"], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Identificar el tipo de un conector", descripcion: "Ordena los pasos del proceso.", pasos: ["Leer la oración completa con el conector", "Analizar qué relación establece entre las ideas", "Clasificar el conector según esa relación"] },
      { dificultad: 1, titulo: "Elegir un conector aditivo", descripcion: "Ordena los pasos del proceso.", pasos: ["Identificar que se quiere agregar una idea similar a la anterior", "Elegir un conector como 'además' o 'también'", "Colocarlo entre las dos ideas"] },
      { dificultad: 2, titulo: "Elegir el conector adecuado según el contexto", descripcion: "Ordena los pasos del proceso.", pasos: ["Leer las dos ideas que se van a conectar", "Identificar qué relación lógica existe entre ellas", "Elegir el conector que exprese esa relación correctamente"] },
      { dificultad: 2, titulo: "Usar un conector causal correctamente", descripcion: "Ordena los pasos del proceso.", pasos: ["Identificar la causa y la consecuencia en las dos ideas", "Elegir un conector como 'porque' o 'ya que'", "Colocarlo antes de la causa"] },
      { dificultad: 3, titulo: "Analizar la función de un conector en un texto", descripcion: "Ordena los pasos del proceso.", pasos: ["Leer el párrafo completo donde aparece el conector", "Observar qué ideas conecta antes y después", "Determinar la función específica que cumple"] },
      { dificultad: 3, titulo: "Reescribir un texto variando sus conectores", descripcion: "Ordena los pasos del proceso.", pasos: ["Identificar los conectores repetidos en el texto", "Buscar sinónimos o conectores equivalentes para cada uno", "Reemplazarlos manteniendo el mismo sentido del texto"] }
    ]
  },

  "tipos-textos": {
    nombre: "Tipos de textos (narrativo, descriptivo, expositivo y argumentativo)",
    preguntas: [
      { dificultad: 1, enunciado: "Un texto que cuenta una historia con personajes y sucesos es de tipo:", opciones: ["Narrativo", "Descriptivo", "Expositivo", "Argumentativo"], correcta: 0 },
      { dificultad: 1, enunciado: "Un texto que detalla las características de algo o alguien es de tipo:", opciones: ["Descriptivo", "Narrativo", "Expositivo", "Argumentativo"], correcta: 0 },
      { dificultad: 1, enunciado: "Un texto que explica un tema de forma objetiva es de tipo:", opciones: ["Expositivo", "Narrativo", "Descriptivo", "Argumentativo"], correcta: 0 },
      { dificultad: 1, enunciado: "Un texto que defiende una opinión con razones es de tipo:", opciones: ["Argumentativo", "Narrativo", "Descriptivo", "Expositivo"], correcta: 0 },
      { dificultad: 1, enunciado: "Un cuento es un ejemplo de texto:", opciones: ["Narrativo", "Descriptivo", "Expositivo", "Argumentativo"], correcta: 0 },
      { dificultad: 1, enunciado: "Un manual de instrucciones es un ejemplo de texto:", opciones: ["Expositivo", "Narrativo", "Descriptivo", "Argumentativo"], correcta: 0 },
      { dificultad: 1, enunciado: "Una reseña que da una opinión sobre una película es un ejemplo de texto:", opciones: ["Argumentativo", "Narrativo", "Descriptivo", "Expositivo"], correcta: 0 },
      { dificultad: 1, enunciado: "Un poema que describe un paisaje es un ejemplo de texto:", opciones: ["Descriptivo", "Narrativo", "Expositivo", "Argumentativo"], correcta: 0 },
      { dificultad: 1, enunciado: "Una noticia que informa un hecho es un ejemplo de texto:", opciones: ["Expositivo", "Narrativo", "Descriptivo", "Argumentativo"], correcta: 0 },
      { dificultad: 1, enunciado: "Una fábula con una moraleja es un ejemplo de texto:", opciones: ["Narrativo", "Descriptivo", "Expositivo", "Argumentativo"], correcta: 0 },

      { dificultad: 2, enunciado: "¿Cuál es un elemento típico de un texto narrativo?", opciones: ["Personajes", "Tesis", "Adjetivos calificativos abundantes", "Instrucciones numeradas"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Cuál es un elemento típico de un texto descriptivo?", opciones: ["Adjetivos calificativos", "Personajes con diálogos", "Tesis y argumentos", "Datos estadísticos"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Cuál es la estructura típica de un texto expositivo?", opciones: ["Introducción, desarrollo y conclusión", "Planteamiento, nudo y desenlace", "Tesis, argumentos y contraargumentos", "Descripción física y psicológica"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Cuál es un elemento típico de un texto argumentativo?", opciones: ["Tesis y argumentos", "Personajes", "Descripción de un paisaje", "Instrucciones paso a paso"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Qué tiempo verbal predomina en un texto narrativo?", opciones: ["Pasado", "Presente", "Futuro", "Condicional"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Qué tipo de lenguaje predomina en un texto descriptivo?", opciones: ["Lenguaje sensorial y detallado", "Lenguaje técnico y objetivo", "Lenguaje persuasivo", "Lenguaje narrativo con diálogos"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Qué característica tiene un texto expositivo?", opciones: ["Objetividad", "Subjetividad", "Uso de personajes", "Uso de metáforas"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Qué característica tiene un texto argumentativo?", opciones: ["Defiende un punto de vista", "Es completamente objetivo", "Solo describe", "Solo narra hechos"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Cuál es el propósito principal de un texto narrativo?", opciones: ["Contar una historia", "Convencer al lector", "Explicar un proceso", "Describir un objeto"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Cuál es el propósito principal de un texto argumentativo?", opciones: ["Convencer al lector", "Contar una historia", "Describir un lugar", "Dar instrucciones"], correcta: 0 },

      { dificultad: 3, enunciado: "Un ensayo que describe un lugar y luego argumenta por qué se debe proteger es un ejemplo de texto:", opciones: ["Mixto (descriptivo-argumentativo)", "Puramente narrativo", "Puramente expositivo", "No es un texto válido"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Qué tipo de texto es una autobiografía?", opciones: ["Narrativo (con elementos descriptivos)", "Puramente expositivo", "Puramente argumentativo", "Instructivo"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Qué tipo de texto es un artículo científico?", opciones: ["Expositivo", "Narrativo", "Descriptivo", "Argumentativo"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Qué tipo de texto es un discurso político persuasivo?", opciones: ["Argumentativo", "Narrativo", "Descriptivo", "Expositivo"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Qué tipo de texto es una carta que describe un viaje con detalle?", opciones: ["Descriptivo-narrativo", "Puramente argumentativo", "Puramente expositivo", "Instructivo"], correcta: 0 },
      { dificultad: 3, enunciado: "En un texto argumentativo, ¿qué función cumple la tesis?", opciones: ["Presentar la idea principal que se defenderá", "Contar la historia completa", "Describir el ambiente", "Dar instrucciones"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Cuál es la diferencia principal entre un texto expositivo y uno argumentativo?", opciones: ["El expositivo informa sin opinar, el argumentativo defiende una postura", "Son exactamente iguales", "El expositivo siempre es más corto", "El argumentativo nunca usa datos"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Qué tipo de texto usarías para explicar cómo funciona el reciclaje?", opciones: ["Expositivo", "Argumentativo", "Narrativo", "Descriptivo"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Qué tipo de texto usarías para convencer a alguien de reciclar?", opciones: ["Argumentativo", "Expositivo", "Narrativo", "Descriptivo"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Qué tipo de texto usarías para contar tu experiencia reciclando un día especial?", opciones: ["Narrativo", "Expositivo", "Argumentativo", "Instructivo"], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Identificar el tipo de un texto", descripcion: "Ordena los pasos del proceso.", pasos: ["Leer el texto completo", "Identificar su propósito principal (contar, describir, explicar o convencer)", "Clasificarlo según ese propósito"] },
      { dificultad: 1, titulo: "Reconocer las características de un texto narrativo", descripcion: "Ordena los pasos del proceso.", pasos: ["Verificar si el texto cuenta una historia con personajes", "Revisar si tiene un inicio, desarrollo y final", "Confirmar que predomina el tiempo pasado"] },
      { dificultad: 2, titulo: "Reconocer las características de un texto expositivo", descripcion: "Ordena los pasos del proceso.", pasos: ["Verificar si el texto explica un tema de forma objetiva", "Revisar si presenta información organizada y clara", "Confirmar que no incluye opiniones personales"] },
      { dificultad: 2, titulo: "Reconocer las características de un texto argumentativo", descripcion: "Ordena los pasos del proceso.", pasos: ["Verificar si el texto defiende una postura o idea", "Identificar la tesis principal", "Buscar los argumentos que la sustentan"] },
      { dificultad: 3, titulo: "Distinguir un texto expositivo de uno argumentativo", descripcion: "Ordena los pasos del proceso.", pasos: ["Leer el texto completo", "Verificar si solo informa o si además defiende una opinión", "Clasificarlo como expositivo si es objetivo, o argumentativo si defiende una postura"] },
      { dificultad: 3, titulo: "Analizar un texto con características mixtas", descripcion: "Ordena los pasos del proceso.", pasos: ["Leer el texto completo", "Identificar qué partes describen, narran o argumentan", "Determinar cuál función predomina en el conjunto del texto"] }
    ]
  },

  "figuras-literarias": {
    nombre: "Figuras literarias (metáfora, personificación, hipérbole, etc.)",
    preguntas: [
      { dificultad: 1, enunciado: "'Sus ojos son dos luceros.' ¿Qué figura literaria es?", opciones: ["Metáfora", "Personificación", "Hipérbole", "Símil"], correcta: 0 },
      { dificultad: 1, enunciado: "'El viento susurraba secretos.' ¿Qué figura literaria es?", opciones: ["Personificación", "Metáfora", "Hipérbole", "Símil"], correcta: 0 },
      { dificultad: 1, enunciado: "'Te lo he dicho un millón de veces.' ¿Qué figura literaria es?", opciones: ["Hipérbole", "Metáfora", "Personificación", "Símil"], correcta: 0 },
      { dificultad: 1, enunciado: "'El tiempo es oro.' ¿Qué figura literaria es?", opciones: ["Metáfora", "Personificación", "Hipérbole", "Símil"], correcta: 0 },
      { dificultad: 1, enunciado: "'Las estrellas guiñaban en el cielo.' ¿Qué figura literaria es?", opciones: ["Personificación", "Metáfora", "Hipérbole", "Símil"], correcta: 0 },
      { dificultad: 1, enunciado: "'Lloré un río de lágrimas.' ¿Qué figura literaria es?", opciones: ["Hipérbole", "Metáfora", "Personificación", "Símil"], correcta: 0 },
      { dificultad: 1, enunciado: "'Sus palabras eran veneno.' ¿Qué figura literaria es?", opciones: ["Metáfora", "Personificación", "Hipérbole", "Símil"], correcta: 0 },
      { dificultad: 1, enunciado: "'El sol se despertó temprano.' ¿Qué figura literaria es?", opciones: ["Personificación", "Metáfora", "Hipérbole", "Símil"], correcta: 0 },
      { dificultad: 1, enunciado: "'Te esperé una eternidad.' ¿Qué figura literaria es?", opciones: ["Hipérbole", "Metáfora", "Personificación", "Símil"], correcta: 0 },
      { dificultad: 1, enunciado: "'La vida es un sueño.' ¿Qué figura literaria es?", opciones: ["Metáfora", "Personificación", "Hipérbole", "Símil"], correcta: 0 },

      { dificultad: 2, enunciado: "'Es fuerte como un roble.' ¿Qué figura literaria es?", opciones: ["Símil", "Metáfora", "Personificación", "Hipérbole"], correcta: 0 },
      { dificultad: 2, enunciado: "'Nada, nada, nada me detiene.' ¿Qué figura literaria es?", opciones: ["Anáfora", "Metáfora", "Símil", "Hipérbole"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Cuál es la diferencia entre metáfora y símil?", opciones: ["El símil usa 'como', la metáfora no", "Son exactamente iguales", "La metáfora usa 'como', el símil no", "El símil no compara nada"], correcta: 0 },
      { dificultad: 2, enunciado: "'Corre veloz como el viento.' ¿Qué figura literaria es?", opciones: ["Símil", "Metáfora", "Personificación", "Anáfora"], correcta: 0 },
      { dificultad: 2, enunciado: "'Siempre estudio, siempre trabajo, siempre sueño.' ¿Qué figura literaria es?", opciones: ["Anáfora", "Metáfora", "Símil", "Hipérbole"], correcta: 0 },
      { dificultad: 2, enunciado: "'El mar bailaba bajo la luna.' ¿Qué figura literaria es?", opciones: ["Personificación", "Metáfora", "Símil", "Hipérbole"], correcta: 0 },
      { dificultad: 2, enunciado: "'Blanca como la nieve.' ¿Qué figura literaria es?", opciones: ["Símil", "Metáfora", "Personificación", "Anáfora"], correcta: 0 },
      { dificultad: 2, enunciado: "'Su sonrisa era un rayo de sol.' ¿Qué figura literaria es?", opciones: ["Metáfora", "Símil", "Personificación", "Hipérbole"], correcta: 0 },
      { dificultad: 2, enunciado: "'Ver, ver, solo quiero ver.' ¿Qué figura literaria es?", opciones: ["Anáfora", "Metáfora", "Símil", "Hipérbole"], correcta: 0 },
      { dificultad: 2, enunciado: "'Fuerte como el acero.' ¿Qué figura literaria es?", opciones: ["Símil", "Metáfora", "Personificación", "Anáfora"], correcta: 0 },

      { dificultad: 3, enunciado: "'El silencio gritaba en la habitación vacía.' ¿Qué figura literaria combina personificación con contraste?", opciones: ["Paradoja (con personificación)", "Símil simple", "Hipérbole simple", "Anáfora"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Qué efecto busca la hipérbole en un texto?", opciones: ["Exagerar para enfatizar una idea o sentimiento", "Comparar dos cosas con 'como'", "Dar vida a objetos", "Repetir un sonido"], correcta: 0 },
      { dificultad: 3, enunciado: "'Es un hielo ardiente.' ¿Qué figura literaria es?", opciones: ["Paradoja (oxímoron)", "Símil", "Anáfora", "Hipérbole"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Qué efecto busca la personificación en un poema?", opciones: ["Dar vida y emoción a elementos no humanos", "Exagerar una cantidad", "Repetir una palabra", "Comparar con 'como'"], correcta: 0 },
      { dificultad: 3, enunciado: "'Sus manos eran pájaros que volaban al escribir.' ¿Qué figura literaria es?", opciones: ["Metáfora", "Símil", "Anáfora", "Hipérbole"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Qué figura literaria consiste en repetir un sonido inicial en varias palabras?", opciones: ["Aliteración", "Metáfora", "Hipérbole", "Anáfora"], correcta: 0 },
      { dificultad: 3, enunciado: "'El ruido del arroyo al rodar' destaca por la repetición del sonido 'r'. ¿Qué figura es?", opciones: ["Aliteración", "Metáfora", "Hipérbole", "Anáfora"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Cuál es la función principal de una metáfora en un texto literario?", opciones: ["Crear una imagen mental comparando dos elementos sin usar 'como'", "Repetir sonidos iniciales", "Exagerar una cantidad", "Dar vida a un objeto"], correcta: 0 },
      { dificultad: 3, enunciado: "'Su ausencia se sentía como una montaña sobre mi pecho.' ¿Qué figuras combina esta oración?", opciones: ["Símil e hipérbole", "Solo metáfora", "Solo anáfora", "Solo personificación"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Por qué los autores usan figuras literarias en sus textos?", opciones: ["Para embellecer el lenguaje y crear efectos expresivos", "Para hacer el texto más corto", "Para evitar usar adjetivos", "Para que el texto sea más objetivo"], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Identificar una metáfora", descripcion: "Ordena los pasos del proceso.", pasos: ["Buscar una comparación entre dos elementos sin usar la palabra 'como'", "Verificar que uno de los elementos reemplaza directamente al otro", "Confirmar que se trata de una metáfora"] },
      { dificultad: 1, titulo: "Identificar una personificación", descripcion: "Ordena los pasos del proceso.", pasos: ["Buscar un objeto, animal o elemento no humano en la oración", "Verificar si se le atribuye una acción o cualidad humana", "Confirmar que se trata de una personificación"] },
      { dificultad: 2, titulo: "Distinguir una metáfora de un símil", descripcion: "Ordena los pasos del proceso.", pasos: ["Buscar si la comparación usa la palabra 'como'", "Si la usa, es un símil", "Si no la usa y compara directamente, es una metáfora"] },
      { dificultad: 2, titulo: "Identificar una hipérbole", descripcion: "Ordena los pasos del proceso.", pasos: ["Buscar una expresión que exagere una idea o cualidad", "Verificar si esa exageración es claramente irreal o desproporcionada", "Confirmar que se trata de una hipérbole"] },
      { dificultad: 3, titulo: "Identificar una anáfora", descripcion: "Ordena los pasos del proceso.", pasos: ["Buscar si una misma palabra o frase se repite al inicio de varios versos u oraciones", "Confirmar que esa repetición tiene una intención expresiva", "Clasificarla como anáfora"] },
      { dificultad: 3, titulo: "Analizar el efecto de una figura literaria en un texto", descripcion: "Ordena los pasos del proceso.", pasos: ["Identificar qué figura literaria se está usando", "Pensar en qué imagen o sensación provoca en el lector", "Explicar por qué el autor eligió esa figura en ese contexto"] }
    ]
  },

  "oracion-compuesta": {
    nombre: "Estructura y análisis de la oración compuesta",
    preguntas: [
      { dificultad: 1, enunciado: "'Juan estudia y María trabaja.' ¿Qué tipo de oración es?", opciones: ["Compuesta (coordinada)", "Simple", "No es una oración", "Subordinada solamente"], correcta: 0 },
      { dificultad: 1, enunciado: "'El perro ladra.' ¿Qué tipo de oración es?", opciones: ["Simple", "Compuesta", "Subordinada", "No tiene verbo"], correcta: 0 },
      { dificultad: 1, enunciado: "¿Cuántos verbos conjugados tiene una oración compuesta como mínimo?", opciones: ["Dos", "Uno", "Tres", "Ninguno"], correcta: 0 },
      { dificultad: 1, enunciado: "'Quiero ir al cine, pero no tengo dinero.' ¿Qué tipo de oración es?", opciones: ["Compuesta (coordinada adversativa)", "Simple", "No es una oración", "Compuesta copulativa"], correcta: 0 },
      { dificultad: 1, enunciado: "'Estudió mucho.' ¿Qué tipo de oración es?", opciones: ["Simple", "Compuesta", "Subordinada", "No tiene sujeto"], correcta: 0 },
      { dificultad: 1, enunciado: "¿Qué conjunción indica coordinación copulativa?", opciones: ["y", "pero", "o", "aunque"], correcta: 0 },
      { dificultad: 1, enunciado: "'Ni estudia ni trabaja.' ¿Qué tipo de coordinación es?", opciones: ["Copulativa negativa", "Adversativa", "Disyuntiva", "Causal"], correcta: 0 },
      { dificultad: 1, enunciado: "¿Qué conjunción indica coordinación disyuntiva?", opciones: ["o", "y", "pero", "aunque"], correcta: 0 },
      { dificultad: 1, enunciado: "'Vamos al parque o nos quedamos en casa.' ¿Qué tipo de oración es?", opciones: ["Compuesta (coordinada disyuntiva)", "Simple", "Compuesta copulativa", "Subordinada"], correcta: 0 },
      { dificultad: 1, enunciado: "¿Qué conjunción indica coordinación adversativa?", opciones: ["pero", "y", "o", "ni"], correcta: 0 },

      { dificultad: 2, enunciado: "'Quiero que vengas.' ¿Qué tipo de oración subordinada tiene?", opciones: ["Subordinada sustantiva", "Subordinada adjetiva", "Subordinada adverbial", "Coordinada"], correcta: 0 },
      { dificultad: 2, enunciado: "'El libro que leí es interesante.' ¿Qué tipo de oración subordinada tiene?", opciones: ["Subordinada adjetiva (relativa)", "Subordinada sustantiva", "Subordinada adverbial", "Coordinada"], correcta: 0 },
      { dificultad: 2, enunciado: "'Iré cuando termine mi trabajo.' ¿Qué tipo de oración subordinada tiene?", opciones: ["Subordinada adverbial (temporal)", "Subordinada sustantiva", "Subordinada adjetiva", "Coordinada"], correcta: 0 },
      { dificultad: 2, enunciado: "'Sé que tienes razón.' ¿Qué función cumple la oración subordinada?", opciones: ["Complemento directo (sustantiva)", "Modifica un sustantivo", "Indica tiempo", "Indica causa"], correcta: 0 },
      { dificultad: 2, enunciado: "'La casa donde vivo es grande.' ¿Qué tipo de oración subordinada tiene?", opciones: ["Subordinada adjetiva", "Subordinada sustantiva", "Subordinada adverbial", "Coordinada"], correcta: 0 },
      { dificultad: 2, enunciado: "'Si estudias, aprobarás.' ¿Qué tipo de oración subordinada tiene?", opciones: ["Subordinada adverbial condicional", "Subordinada sustantiva", "Subordinada adjetiva", "Coordinada"], correcta: 0 },
      { dificultad: 2, enunciado: "'Porque llovía, no salimos.' ¿Qué tipo de oración subordinada tiene?", opciones: ["Subordinada adverbial causal", "Subordinada sustantiva", "Subordinada adjetiva", "Coordinada"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Qué palabra suele introducir una oración subordinada sustantiva?", opciones: ["que", "donde", "cuando", "aunque"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Qué palabra suele introducir una oración subordinada adjetiva?", opciones: ["que/quien/el cual", "porque", "si", "aunque"], correcta: 0 },
      { dificultad: 2, enunciado: "'Aunque llovía, salimos a caminar.' ¿Qué tipo de oración subordinada tiene?", opciones: ["Subordinada adverbial concesiva", "Subordinada sustantiva", "Subordinada adjetiva", "Coordinada"], correcta: 0 },

      { dificultad: 3, enunciado: "'El niño que estudió mucho, aprobó el examen porque se preparó bien.' ¿Cuántas oraciones subordinadas hay?", opciones: ["Dos", "Una", "Tres", "Ninguna"], correcta: 0 },
      { dificultad: 3, enunciado: "Identifica la oración principal en: 'Cuando llegué a casa, mi mamá ya había cocinado.'", opciones: ["Mi mamá ya había cocinado", "Cuando llegué a casa", "Llegué a casa", "Había cocinado"], correcta: 0 },
      { dificultad: 3, enunciado: "'Espero que llegues pronto para que podamos empezar.' ¿Qué tipos de subordinadas contiene?", opciones: ["Sustantiva y adverbial final", "Dos sustantivas", "Dos adjetivas", "Coordinadas solamente"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Cuál es la diferencia principal entre una oración coordinada y una subordinada?", opciones: ["En la coordinada las oraciones son independientes; en la subordinada una depende de la otra", "Son exactamente iguales", "La coordinada siempre depende de otra oración", "La subordinada nunca tiene verbo"], correcta: 0 },
      { dificultad: 3, enunciado: "'Los estudiantes, que llegaron tarde, no pudieron presentar el examen.' ¿Qué función cumple la subordinada?", opciones: ["Modifica al sustantivo 'estudiantes' (adjetiva)", "Es el sujeto de la oración", "Indica una causa", "Es el complemento directo"], correcta: 0 },
      { dificultad: 3, enunciado: "En 'Iré a la fiesta si me invitan', identifica la oración subordinada.", opciones: ["si me invitan", "Iré a la fiesta", "a la fiesta", "me invitan a la fiesta"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Qué tipo de nexo introduce una subordinada adverbial de finalidad?", opciones: ["para que", "porque", "aunque", "cuando"], correcta: 0 },
      { dificultad: 3, enunciado: "'Como no estudió, reprobó el examen.' ¿Qué tipo de subordinada es?", opciones: ["Causal", "Condicional", "Temporal", "Concesiva"], correcta: 0 },
      { dificultad: 3, enunciado: "Identifica el nexo subordinante en: 'Trabajo para que mis hijos estudien.'", opciones: ["para que", "trabajo", "mis hijos", "estudien"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Qué elemento identifica que una oración es subordinada?", opciones: ["No tiene sentido completo por sí sola y depende de otra", "Siempre empieza con mayúscula", "Nunca tiene verbo", "Siempre es más larga que la principal"], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Distinguir una oración simple de una compuesta", descripcion: "Ordena los pasos del proceso.", pasos: ["Contar cuántos verbos conjugados tiene la oración", "Si tiene solo uno, es simple", "Si tiene dos o más, es compuesta"] },
      { dificultad: 1, titulo: "Identificar una oración coordinada", descripcion: "Ordena los pasos del proceso.", pasos: ["Verificar que la oración tiene dos partes independientes", "Buscar una conjunción que las una (y, pero, o)", "Confirmar que ambas partes tienen sentido completo por separado"] },
      { dificultad: 2, titulo: "Identificar una oración subordinada sustantiva", descripcion: "Ordena los pasos del proceso.", pasos: ["Buscar una oración que funcione como complemento directo de otra", "Verificar si puede reemplazarse por 'eso' o 'algo'", "Confirmar que es una subordinada sustantiva"] },
      { dificultad: 2, titulo: "Identificar una oración subordinada adjetiva", descripcion: "Ordena los pasos del proceso.", pasos: ["Buscar una oración introducida por 'que', 'quien' o 'el cual'", "Verificar si esa oración describe a un sustantivo anterior", "Confirmar que es una subordinada adjetiva"] },
      { dificultad: 3, titulo: "Identificar una oración subordinada adverbial", descripcion: "Ordena los pasos del proceso.", pasos: ["Buscar una oración que indique tiempo, causa, condición u otra circunstancia", "Verificar que depende de la oración principal para tener sentido completo", "Clasificar el tipo de subordinada adverbial según su significado"] },
      { dificultad: 3, titulo: "Analizar una oración compuesta con varias subordinadas", descripcion: "Ordena los pasos del proceso.", pasos: ["Identificar la oración principal del enunciado", "Buscar cada oración subordinada y su nexo", "Clasificar cada una según su función y tipo"] }
    ]
  },

  "cohesion-coherencia": {
    nombre: "Cohesión y coherencia textual",
    preguntas: [
      { dificultad: 1, enunciado: "¿Qué es la coherencia en un texto?", opciones: ["Que las ideas tengan relación lógica entre sí", "El uso de conectores solamente", "La ortografía correcta", "El número de párrafos"], correcta: 0 },
      { dificultad: 1, enunciado: "¿Qué es la cohesión en un texto?", opciones: ["El uso de recursos lingüísticos que unen las ideas", "Que las ideas tengan sentido lógico", "La longitud del texto", "El tema del texto"], correcta: 0 },
      { dificultad: 1, enunciado: "Si un texto tiene ideas desordenadas y contradictorias, ¿qué le falta?", opciones: ["Coherencia", "Cohesión", "Ortografía", "Longitud"], correcta: 0 },
      { dificultad: 1, enunciado: "Si un texto repite palabras innecesariamente sin usar sinónimos o pronombres, ¿qué le falta?", opciones: ["Cohesión", "Coherencia", "Ortografía", "Tema"], correcta: 0 },
      { dificultad: 1, enunciado: "¿Cuál es un recurso de cohesión?", opciones: ["El uso de conectores", "La ortografía", "El tema del texto", "La longitud del párrafo"], correcta: 0 },
      { dificultad: 1, enunciado: "¿Cuál es un recurso de cohesión?", opciones: ["El uso de pronombres para evitar repetición", "El uso de mayúsculas", "El uso de números", "El uso de comillas"], correcta: 0 },
      { dificultad: 1, enunciado: "¿La coherencia se relaciona más con el significado o con la forma del texto?", opciones: ["El significado", "La forma", "La ortografía", "La longitud"], correcta: 0 },
      { dificultad: 1, enunciado: "¿La cohesión se relaciona más con el significado o con la forma del texto?", opciones: ["La forma (los elementos lingüísticos)", "El significado", "El tema", "La intención del autor"], correcta: 0 },
      { dificultad: 1, enunciado: "¿Qué recurso de cohesión evita repetir un sustantivo varias veces?", opciones: ["El pronombre", "El adjetivo", "El artículo", "La preposición"], correcta: 0 },
      { dificultad: 1, enunciado: "¿Qué recurso de cohesión conecta ideas dentro de un párrafo?", opciones: ["Los conectores", "Los sustantivos", "Los artículos", "Las tildes"], correcta: 0 },

      { dificultad: 2, enunciado: "En 'Juan compró un carro. Él lo maneja todos los días.', ¿qué palabra es un recurso de cohesión?", opciones: ["Él", "carro", "compró", "todos"], correcta: 0 },
      { dificultad: 2, enunciado: "En 'Compré manzanas. Estas son deliciosas.', ¿qué palabra es un recurso de cohesión?", opciones: ["Estas", "Compré", "manzanas", "deliciosas"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Cuál de estos textos es más coherente?", opciones: ["El que sigue un orden lógico de ideas", "El que tiene más palabras", "El que usa más conectores", "El que es más corto"], correcta: 0 },
      { dificultad: 2, enunciado: "En un texto con oraciones que no se relacionan entre sí, ¿qué problema hay?", opciones: ["Falta de coherencia", "Falta de ortografía", "Exceso de conectores", "Falta de título"], correcta: 0 },
      { dificultad: 2, enunciado: "En 'Ana estudia mucho, por eso saca buenas notas.', ¿qué recurso de cohesión conecta las ideas?", opciones: ["El conector 'por eso'", "El pronombre 'ella'", "El artículo 'la'", "La preposición 'en'"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Qué recurso de cohesión se usa para no repetir 'la casa' varias veces?", opciones: ["Un pronombre como 'ella' o un sinónimo", "Repetir la palabra exacta", "Usar solo artículos", "Usar solo verbos"], correcta: 0 },
      { dificultad: 2, enunciado: "En un párrafo, si cada oración habla de un tema completamente distinto, ¿qué falta?", opciones: ["Coherencia", "Cohesión", "Ortografía", "Puntuación"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Qué recurso de cohesión usa la elipsis?", opciones: ["Omitir información ya mencionada para no repetirla", "Repetir todas las palabras", "Usar solo mayúsculas", "Usar solo comas"], correcta: 0 },
      { dificultad: 2, enunciado: "En 'Pedro llegó tarde. El chico se disculpó.', ¿qué recurso de cohesión sustituye a 'Pedro'?", opciones: ["'El chico'", "'tarde'", "'se disculpó'", "'llegó'"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Qué le pasa a un texto si usa conectores de forma incorrecta?", opciones: ["Pierde cohesión y puede confundir al lector", "Se vuelve más claro", "Mejora automáticamente", "No pasa nada"], correcta: 0 },

      { dificultad: 3, enunciado: "Un texto tiene buena cohesión pero las ideas no tienen sentido lógico entre sí. ¿Qué le falta?", opciones: ["Coherencia", "Cohesión", "Ortografía", "Extensión"], correcta: 0 },
      { dificultad: 3, enunciado: "Un texto tiene ideas lógicas pero repite las mismas palabras sin conectores ni pronombres. ¿Qué le falta?", opciones: ["Cohesión", "Coherencia", "Tema", "Título"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Cuál es la mejor forma de mejorar la cohesión de un párrafo repetitivo?", opciones: ["Usar sinónimos, pronombres y conectores variados", "Escribir oraciones más cortas", "Eliminar todos los conectores", "Repetir las mismas palabras con más énfasis"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Por qué es importante la coherencia en un ensayo?", opciones: ["Para que el lector entienda el argumento de forma lógica y clara", "Para que el texto sea más largo", "Para usar más adjetivos", "Para que tenga más párrafos"], correcta: 0 },
      { dificultad: 3, enunciado: "En un texto largo, ¿qué recurso ayuda a mantener la coherencia global?", opciones: ["Mantener un mismo tema o hilo conductor", "Usar palabras diferentes en cada párrafo", "Cambiar de tema frecuentemente", "Usar solo oraciones cortas"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Qué tipo de cohesión se logra al usar palabras de una misma familia (ej. 'estudiar', 'estudio', 'estudiante')?", opciones: ["Cohesión léxica (derivación)", "Cohesión gramatical", "Coherencia temática", "Ninguna cohesión"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Qué problema tiene un texto si sus párrafos no se conectan entre sí con transiciones?", opciones: ["Falta de cohesión entre párrafos", "Exceso de coherencia", "Demasiados conectores", "Ortografía incorrecta"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Cómo se llama el recurso de referirse a algo mencionado antes en el texto?", opciones: ["Anáfora (referencia anafórica)", "Catáfora", "Metáfora", "Hipérbole"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Cómo se llama el recurso de referirse a algo que se mencionará después en el texto?", opciones: ["Catáfora (referencia catafórica)", "Anáfora", "Metáfora", "Elipsis"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Qué evalúa principalmente un lector cuando dice que un texto 'tiene sentido'?", opciones: ["Su coherencia", "Su ortografía", "Su longitud", "Su título"], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Evaluar si un texto tiene coherencia", descripcion: "Ordena los pasos del proceso.", pasos: ["Leer el texto completo", "Verificar si las ideas siguen un orden lógico", "Confirmar que no hay contradicciones entre las ideas"] },
      { dificultad: 1, titulo: "Evaluar si un texto tiene cohesión", descripcion: "Ordena los pasos del proceso.", pasos: ["Leer el texto completo", "Verificar si usa conectores y pronombres para unir las ideas", "Confirmar que no hay repeticiones innecesarias"] },
      { dificultad: 2, titulo: "Mejorar la cohesión de un texto repetitivo", descripcion: "Ordena los pasos del proceso.", pasos: ["Identificar las palabras que se repiten demasiado", "Buscar sinónimos o pronombres para reemplazarlas", "Reescribir el texto con esos cambios"] },
      { dificultad: 2, titulo: "Identificar un recurso de cohesión en un texto", descripcion: "Ordena los pasos del proceso.", pasos: ["Leer el texto completo", "Buscar palabras que hagan referencia a algo mencionado antes", "Identificar qué recurso de cohesión se está usando"] },
      { dificultad: 3, titulo: "Corregir un texto incoherente", descripcion: "Ordena los pasos del proceso.", pasos: ["Leer el texto completo", "Identificar las ideas que no se relacionan lógicamente con las demás", "Reordenar o eliminar esas ideas para lograr coherencia"] },
      { dificultad: 3, titulo: "Analizar la relación entre cohesión y coherencia en un texto", descripcion: "Ordena los pasos del proceso.", pasos: ["Leer el texto completo", "Evaluar por separado su cohesión (forma) y su coherencia (sentido)", "Concluir si el texto logra comunicar su mensaje de forma efectiva"] }
    ]
  },

  "interpretacion-critica": {
    nombre: "Interpretación crítica de textos y comprensión lectora avanzada",
    preguntas: [
      { dificultad: 1, enunciado: "'El gobierno anunció nuevas medidas económicas.' ¿Qué tipo de información es esta?", opciones: ["Un hecho objetivo", "Una opinión", "Una hipérbole", "Una metáfora"], correcta: 0 },
      { dificultad: 1, enunciado: "'Esta película es la mejor del año.' ¿Qué tipo de información es esta?", opciones: ["Una opinión", "Un hecho objetivo", "Una cita textual", "Un dato estadístico"], correcta: 0 },
      { dificultad: 1, enunciado: "¿Qué significa 'inferir' al leer un texto?", opciones: ["Deducir algo que no está escrito directamente", "Copiar el texto exacto", "Contar las palabras", "Leer en voz alta"], correcta: 0 },
      { dificultad: 1, enunciado: "¿Qué es la idea principal de un texto?", opciones: ["El mensaje más importante que el autor quiere transmitir", "La primera palabra del texto", "El número de párrafos", "El título únicamente"], correcta: 0 },
      { dificultad: 1, enunciado: "¿Qué es un argumento en un texto?", opciones: ["Una razón que apoya una idea o postura", "Una descripción de un lugar", "Un personaje de una historia", "Un signo de puntuación"], correcta: 0 },
      { dificultad: 1, enunciado: "¿Qué es el propósito de un texto?", opciones: ["La intención del autor al escribirlo", "El número de páginas", "El tipo de letra usado", "El nombre del autor"], correcta: 0 },
      { dificultad: 1, enunciado: "¿Qué diferencia hay entre un hecho y una opinión?", opciones: ["El hecho se puede comprobar, la opinión es subjetiva", "Son exactamente lo mismo", "La opinión siempre es más larga", "El hecho siempre es falso"], correcta: 0 },
      { dificultad: 1, enunciado: "Si un autor usa muchos adjetivos positivos sobre un tema, ¿qué se puede inferir sobre su postura?", opciones: ["Que tiene una opinión favorable", "Que es completamente objetivo", "Que no tiene opinión", "Que está en contra del tema"], correcta: 0 },
      { dificultad: 1, enunciado: "¿Qué es el contexto de un texto?", opciones: ["La situación o circunstancias en las que se produjo el texto", "El número de palabras", "El título del texto", "El tipo de letra"], correcta: 0 },
      { dificultad: 1, enunciado: "¿Por qué es importante identificar la intención del autor?", opciones: ["Para comprender mejor el mensaje y no dejarse manipular", "Para contar las palabras del texto", "Para memorizar el texto", "Para copiarlo exactamente"], correcta: 0 },

      { dificultad: 2, enunciado: "Si un texto solo presenta un lado de un tema controversial, ¿qué se puede decir de él?", opciones: ["Puede ser un texto sesgado (parcial)", "Es completamente objetivo", "Es siempre falso", "Es un texto narrativo"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Qué es una falacia en un argumento?", opciones: ["Un error de razonamiento que parece válido pero no lo es", "Una opinión correcta", "Un dato verificado", "Una figura literaria"], correcta: 0 },
      { dificultad: 2, enunciado: "'Todos los jóvenes de hoy son irresponsables.' ¿Qué tipo de afirmación es esta?", opciones: ["Una generalización (posible falacia)", "Un hecho comprobado", "Una cita textual", "Una figura literaria"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Qué debe hacer un lector crítico ante una noticia sin fuentes citadas?", opciones: ["Cuestionar su veracidad y buscar otras fuentes", "Creerla inmediatamente", "Compartirla sin verificar", "Ignorar el tema por completo"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Qué es la credibilidad de una fuente?", opciones: ["Qué tan confiable es la información según su origen", "El número de palabras que usa", "El tipo de letra del texto", "La fecha de publicación únicamente"], correcta: 0 },
      { dificultad: 2, enunciado: "Si un texto usa solo estadísticas sin explicar su origen, ¿qué debería hacer un lector crítico?", opciones: ["Verificar de dónde vienen esos datos", "Aceptarlas sin cuestionar", "Ignorar el texto completo", "Repetir los datos sin análisis"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Qué es un contraargumento?", opciones: ["Una idea que refuta o cuestiona el argumento principal", "Un sinónimo del argumento principal", "Una figura literaria", "Un tipo de conector"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Por qué es importante distinguir hechos de opiniones al leer una noticia?", opciones: ["Para formar una opinión propia basada en información objetiva", "Para memorizar la noticia completa", "Para contar las palabras del texto", "Para identificar el tipo de letra"], correcta: 0 },
      { dificultad: 2, enunciado: "Si un autor usa un lenguaje muy emocional para hablar de un tema, ¿qué podría estar buscando?", opciones: ["Persuadir al lector apelando a las emociones", "Ser completamente objetivo", "Confundir al lector sin intención", "Aburrir al lector"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Qué es el punto de vista de un autor?", opciones: ["La perspectiva o postura desde la cual escribe", "El número de páginas de su texto", "El título de su obra", "El género literario"], correcta: 0 },

      { dificultad: 3, enunciado: "Al comparar dos textos sobre el mismo tema con conclusiones opuestas, ¿qué debe hacer el lector?", opciones: ["Analizar los argumentos y evidencias de cada uno antes de concluir", "Creer automáticamente al primero que leyó", "Ignorar ambos textos", "Elegir el texto más largo"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Qué significa que un argumento sea 'válido' pero no necesariamente 'verdadero'?", opciones: ["Que su estructura lógica es correcta, pero sus premisas pueden ser falsas", "Que es completamente falso", "Que no tiene ninguna lógica", "Que es una opinión sin fundamento"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Qué es la interpretación crítica de un texto?", opciones: ["Analizar el mensaje, la intención y el contexto más allá de lo literal", "Copiar el texto exactamente", "Memorizar el texto completo", "Contar el número de palabras"], correcta: 0 },
      { dificultad: 3, enunciado: "Si un texto histórico fue escrito por alguien involucrado en los hechos, ¿qué se debe considerar?", opciones: ["Que puede tener una perspectiva parcial o subjetiva", "Que es completamente objetivo siempre", "Que no tiene ningún valor", "Que es una obra de ficción"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Qué es el 'lenguaje connotativo' y cómo afecta la interpretación de un texto?", opciones: ["Es el significado subjetivo o emocional de las palabras, que puede influir en la percepción del lector", "Es el significado literal exacto de las palabras", "Es un tipo de conector textual", "Es una figura literaria específica"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Por qué es importante considerar la fecha de publicación de un texto informativo?", opciones: ["Porque la información puede haber cambiado o quedado desactualizada", "Porque determina el género del texto", "Porque afecta la ortografía del texto", "No tiene ninguna importancia"], correcta: 0 },
      { dificultad: 3, enunciado: "Si dos autores usan los mismos datos pero llegan a conclusiones distintas, ¿qué podría explicar esto?", opciones: ["Diferencias en su interpretación o en sus valores/perspectivas", "Que uno de los dos mintió necesariamente", "Que los datos son falsos", "Que no es posible que esto ocurra"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Qué habilidad se necesita para identificar cuándo un texto manipula la información?", opciones: ["Pensamiento crítico y verificación de fuentes", "Memorización exacta del texto", "Velocidad de lectura", "Conocimiento de figuras literarias únicamente"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Qué es la 'lectura inferencial' en comparación con la 'lectura literal'?", opciones: ["La inferencial va más allá de lo escrito, deduciendo significados implícitos", "Son exactamente lo mismo", "La literal siempre es más profunda", "La inferencial solo repite el texto"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Por qué es valioso leer textos con posturas distintas sobre un mismo tema?", opciones: ["Para formar una opinión más completa y equilibrada", "Para memorizar más información", "Para confundirse a propósito", "No tiene ningún valor"], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Diferenciar un hecho de una opinión en un texto", descripcion: "Ordena los pasos del proceso.", pasos: ["Leer la afirmación con atención", "Preguntarse si se puede comprobar con datos", "Si se puede comprobar es un hecho, si expresa un punto de vista es una opinión"] },
      { dificultad: 1, titulo: "Identificar la idea principal de un texto", descripcion: "Ordena los pasos del proceso.", pasos: ["Leer el texto completo", "Preguntarse de qué trata principalmente", "Resumir esa idea en una sola oración"] },
      { dificultad: 2, titulo: "Identificar el propósito de un autor", descripcion: "Ordena los pasos del proceso.", pasos: ["Leer el texto completo", "Observar el tipo de lenguaje y la estructura que usa", "Determinar si busca informar, persuadir, narrar o entretener"] },
      { dificultad: 2, titulo: "Evaluar la credibilidad de una fuente", descripcion: "Ordena los pasos del proceso.", pasos: ["Identificar quién escribió el texto y con qué intención", "Verificar si presenta datos o fuentes que respalden la información", "Concluir qué tan confiable es la información presentada"] },
      { dificultad: 3, titulo: "Analizar un argumento de forma crítica", descripcion: "Ordena los pasos del proceso.", pasos: ["Identificar la tesis o idea principal del argumento", "Buscar las razones o evidencias que la sustentan", "Evaluar si esas razones son suficientes y válidas"] },
      { dificultad: 3, titulo: "Comparar dos textos con posturas opuestas", descripcion: "Ordena los pasos del proceso.", pasos: ["Leer ambos textos completos", "Identificar los argumentos principales de cada uno", "Analizar las diferencias y formar una opinión propia basada en la evidencia de ambos"] }
    ]
  },

  "tiempos-presentes": {
    nombre: "Tiempos verbales básicos (Present Simple vs. Present Continuous)",
    preguntas: [
      { dificultad: 1, enunciado: "She ___ to school every day.", opciones: ["goes", "go", "going", "gone"], correcta: 0 },
      { dificultad: 1, enunciado: "I ___ watching TV right now.", opciones: ["am", "is", "are", "be"], correcta: 0 },
      { dificultad: 1, enunciado: "They ___ football every Saturday.", opciones: ["play", "plays", "playing", "played"], correcta: 0 },
      { dificultad: 1, enunciado: "He ___ a book at the moment.", opciones: ["is reading", "read", "reads", "readed"], correcta: 0 },
      { dificultad: 1, enunciado: "We ___ coffee every morning.", opciones: ["drink", "drinks", "drinking", "drank"], correcta: 0 },
      { dificultad: 1, enunciado: "Look! It ___ raining.", opciones: ["is raining", "rain", "rains", "rained"], correcta: 0 },
      { dificultad: 1, enunciado: "My mom ___ dinner every night.", opciones: ["cooks", "cook", "cooking", "is cook"], correcta: 0 },
      { dificultad: 1, enunciado: "Right now, I ___ my homework.", opciones: ["am doing", "do", "does", "did"], correcta: 0 },
      { dificultad: 1, enunciado: "The sun ___ in the east.", opciones: ["rises", "rise", "is rising", "rose"], correcta: 0 },
      { dificultad: 1, enunciado: "Listen! Someone ___ at the door.", opciones: ["is knocking", "knock", "knocks", "knocked"], correcta: 0 },

      { dificultad: 2, enunciado: "___ she like pizza?", opciones: ["Does", "Do", "Is", "Are"], correcta: 0 },
      { dificultad: 2, enunciado: "I ___ not like spicy food.", opciones: ["do", "does", "am", "is"], correcta: 0 },
      { dificultad: 2, enunciado: "He always ___ his homework on time.", opciones: ["finishes", "finish", "finishing", "is finish"], correcta: 0 },
      { dificultad: 2, enunciado: "___ you working on the project now?", opciones: ["Are", "Do", "Does", "Is"], correcta: 0 },
      { dificultad: 2, enunciado: "She ___ never late for class.", opciones: ["is", "does", "do", "are"], correcta: 0 },
      { dificultad: 2, enunciado: "We ___ studying English at this moment.", opciones: ["are", "is", "do", "does"], correcta: 0 },
      { dificultad: 2, enunciado: "___ they usually eat lunch at noon?", opciones: ["Do", "Does", "Are", "Is"], correcta: 0 },
      { dificultad: 2, enunciado: "He ___ not watching TV right now.", opciones: ["is", "do", "does", "are"], correcta: 0 },
      { dificultad: 2, enunciado: "I usually ___ up at 7 am.", opciones: ["get", "gets", "getting", "am get"], correcta: 0 },
      { dificultad: 2, enunciado: "She ___ speaking on the phone at the moment.", opciones: ["is", "are", "do", "does"], correcta: 0 },

      { dificultad: 3, enunciado: "Which sentence is correct for a general fact?", opciones: ["I understand the lesson.", "I am understanding the lesson.", "I understanding the lesson.", "I does understand the lesson."], correcta: 0 },
      { dificultad: 3, enunciado: "'She ___ to music every evening.'", opciones: ["listens", "listen", "is listening", "listen to"], correcta: 0 },
      { dificultad: 3, enunciado: "Choose the correct sentence for a permanent fact.", opciones: ["Water boils at 100°C.", "Water is boiling at 100°C.", "Water boil at 100°C.", "Water boiling at 100°C."], correcta: 0 },
      { dificultad: 3, enunciado: "'I ___ this soup; it's delicious.' (state verb)", opciones: ["like", "am liking", "likes", "liking"], correcta: 0 },
      { dificultad: 3, enunciado: "Which sentence describes an action happening now?", opciones: ["She is cooking dinner.", "She cooks dinner.", "She cook dinner.", "She cooked dinner now."], correcta: 0 },
      { dificultad: 3, enunciado: "'He ___ two languages fluently.' (general fact)", opciones: ["speaks", "speak", "is speaking", "spoke"], correcta: 0 },
      { dificultad: 3, enunciado: "Choose the correct question: '___ your sister live in Bogotá?'", opciones: ["Does", "Do", "Is", "Are"], correcta: 0 },
      { dificultad: 3, enunciado: "'I ___ that you are right.' (state verb)", opciones: ["believe", "am believing", "believing", "believed"], correcta: 0 },
      { dificultad: 3, enunciado: "Which is correct?", opciones: ["She doesn't like coffee.", "She don't likes coffee.", "She not likes coffee.", "She doesn't likes coffee."], correcta: 0 },
      { dificultad: 3, enunciado: "'They ___ for the bus right now.' (ongoing action)", opciones: ["are waiting", "wait", "waits", "waited"], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Decide between Present Simple and Present Continuous", descripcion: "Ordena los pasos del proceso.", pasos: ["Identify if the action is a habit/routine or happening right now", "If it's a routine, use Present Simple", "If it's happening now, use Present Continuous"] },
      { dificultad: 1, titulo: "Form a Present Simple sentence with he/she/it", descripcion: "Ordena los pasos del proceso.", pasos: ["Take the base form of the verb", "Add -s or -es for he/she/it", "Place it after the subject"] },
      { dificultad: 2, titulo: "Form the negative of a Present Simple sentence", descripcion: "Ordena los pasos del proceso.", pasos: ["Identify the subject and verb", "Add 'do not' or 'does not' before the verb", "Use the base form of the verb after 'do/does not'"] },
      { dificultad: 2, titulo: "Form a Present Continuous sentence", descripcion: "Ordena los pasos del proceso.", pasos: ["Identify the subject", "Add the correct form of 'to be' (am/is/are)", "Add the main verb with -ing"] },
      { dificultad: 3, titulo: "Decide when to use a state verb correctly", descripcion: "Ordena los pasos del proceso.", pasos: ["Identify if the verb describes a state (like/know/believe)", "Remember state verbs are not usually used in continuous form", "Use the simple present form instead"] },
      { dificultad: 3, titulo: "Correct a common Present Simple/Continuous mistake", descripcion: "Ordena los pasos del proceso.", pasos: ["Read the sentence carefully", "Identify if a state verb was used in continuous form", "Rewrite the verb in simple present"] }
    ]
  },

  "pasado-simple": {
    nombre: "Pasado simple de verbos regulares e irregulares",
    preguntas: [
      { dificultad: 1, enunciado: "Yesterday, I ___ my homework.", opciones: ["walked", "walk", "walking", "walks"], correcta: 0 },
      { dificultad: 1, enunciado: "She ___ the door before leaving.", opciones: ["closed", "close", "closing", "closes"], correcta: 0 },
      { dificultad: 1, enunciado: "They ___ soccer last weekend.", opciones: ["played", "play", "plays", "playing"], correcta: 0 },
      { dificultad: 1, enunciado: "We ___ a movie last night.", opciones: ["watched", "watch", "watches", "watching"], correcta: 0 },
      { dificultad: 1, enunciado: "He ___ his room yesterday.", opciones: ["cleaned", "clean", "cleans", "cleaning"], correcta: 0 },
      { dificultad: 1, enunciado: "I ___ to the store this morning.", opciones: ["walked", "walk", "walks", "walking"], correcta: 0 },
      { dificultad: 1, enunciado: "She ___ her friend last week.", opciones: ["called", "call", "calls", "calling"], correcta: 0 },
      { dificultad: 1, enunciado: "They ___ dinner together.", opciones: ["cooked", "cook", "cooks", "cooking"], correcta: 0 },
      { dificultad: 1, enunciado: "We ___ English for two hours.", opciones: ["studied", "study", "studies", "studying"], correcta: 0 },
      { dificultad: 1, enunciado: "He ___ the piano yesterday.", opciones: ["practiced", "practice", "practices", "practicing"], correcta: 0 },

      { dificultad: 2, enunciado: "I ___ to Paris last summer.", opciones: ["went", "go", "goes", "going"], correcta: 0 },
      { dificultad: 2, enunciado: "She ___ a sandwich for lunch.", opciones: ["ate", "eat", "eats", "eating"], correcta: 0 },
      { dificultad: 2, enunciado: "They ___ the movie was great.", opciones: ["said", "say", "says", "saying"], correcta: 0 },
      { dificultad: 2, enunciado: "He ___ his keys yesterday.", opciones: ["lost", "lose", "loses", "losing"], correcta: 0 },
      { dificultad: 2, enunciado: "We ___ a great time at the party.", opciones: ["had", "have", "has", "having"], correcta: 0 },
      { dificultad: 2, enunciado: "I ___ him at the mall.", opciones: ["saw", "see", "sees", "seeing"], correcta: 0 },
      { dificultad: 2, enunciado: "She ___ the letter quickly.", opciones: ["wrote", "write", "writes", "writing"], correcta: 0 },
      { dificultad: 2, enunciado: "They ___ home late last night.", opciones: ["came", "come", "comes", "coming"], correcta: 0 },
      { dificultad: 2, enunciado: "He ___ the answer immediately.", opciones: ["knew", "know", "knows", "knowing"], correcta: 0 },
      { dificultad: 2, enunciado: "We ___ to the beach last weekend.", opciones: ["went", "go", "goes", "going"], correcta: 0 },

      { dificultad: 3, enunciado: "___ you go to the party?", opciones: ["Did", "Do", "Does", "Was"], correcta: 0 },
      { dificultad: 3, enunciado: "I ___ not see him yesterday.", opciones: ["did", "do", "does", "was"], correcta: 0 },
      { dificultad: 3, enunciado: "She ___ not finish her homework.", opciones: ["did", "do", "does", "was"], correcta: 0 },
      { dificultad: 3, enunciado: "'Did they ___ the movie?' (base form)", opciones: ["watch", "watched", "watches", "watching"], correcta: 0 },
      { dificultad: 3, enunciado: "'What ___ you do last night?'", opciones: ["did", "do", "does", "was"], correcta: 0 },
      { dificultad: 3, enunciado: "Choose the correct negative: 'He ___ eat breakfast.'", opciones: ["didn't eat", "didn't ate", "don't ate", "doesn't ate"], correcta: 0 },
      { dificultad: 3, enunciado: "'Where ___ she go on vacation?'", opciones: ["did", "do", "does", "is"], correcta: 0 },
      { dificultad: 3, enunciado: "Choose the correct sentence.", opciones: ["They didn't go to school.", "They not went to school.", "They did not went to school.", "They doesn't go to school."], correcta: 0 },
      { dificultad: 3, enunciado: "'___ he finish the project on time?'", opciones: ["Did", "Do", "Does", "Is"], correcta: 0 },
      { dificultad: 3, enunciado: "Choose the correct past form of 'buy'.", opciones: ["bought", "buyed", "buys", "buying"], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Form the past simple of a regular verb", descripcion: "Ordena los pasos del proceso.", pasos: ["Take the base form of the verb", "Add -ed to the end", "Check for spelling changes if needed"] },
      { dificultad: 1, titulo: "Identify an irregular verb in the past", descripcion: "Ordena los pasos del proceso.", pasos: ["Check if the verb follows the -ed rule", "If not, memorize its special past form", "Use that special form in the sentence"] },
      { dificultad: 2, titulo: "Form a negative sentence in the past simple", descripcion: "Ordena los pasos del proceso.", pasos: ["Identify the subject and the verb", "Add 'did not' before the base form of the verb", "Remove -ed or the irregular form and use the base verb"] },
      { dificultad: 2, titulo: "Form a question in the past simple", descripcion: "Ordena los pasos del proceso.", pasos: ["Start the sentence with 'Did'", "Add the subject", "Use the base form of the verb", "End with a question mark"] },
      { dificultad: 3, titulo: "Choose between regular and irregular past forms in context", descripcion: "Ordena los pasos del proceso.", pasos: ["Identify the verb in the sentence", "Check if it is regular or irregular", "Apply the correct past form rule"] },
      { dificultad: 3, titulo: "Build a full past simple sentence", descripcion: "Ordena los pasos del proceso.", pasos: ["Choose the subject of the sentence", "Choose the correct past form of the main verb", "Add time expressions like 'yesterday' or 'last week'", "Complete the sentence with the rest of the information"] }
    ]
  },

  "verbos-modales": {
    nombre: "Uso de los verbos modales (can, could, should, must)",
    preguntas: [
      { dificultad: 1, enunciado: "I ___ swim very well.", opciones: ["can", "cans", "could to", "canning"], correcta: 0 },
      { dificultad: 1, enunciado: "You ___ study for the exam.", opciones: ["should", "shoulds", "shoulding", "should to"], correcta: 0 },
      { dificultad: 1, enunciado: "She ___ speak French fluently.", opciones: ["can", "cans", "could to", "canning"], correcta: 0 },
      { dificultad: 1, enunciado: "We ___ finish this by Friday.", opciones: ["must", "musts", "must to", "musting"], correcta: 0 },
      { dificultad: 1, enunciado: "___ I borrow your pen?", opciones: ["Can", "Cans", "Could to", "Canning"], correcta: 0 },
      { dificultad: 1, enunciado: "You ___ wear a seatbelt.", opciones: ["must", "musts", "must to", "musting"], correcta: 0 },
      { dificultad: 1, enunciado: "He ___ play the guitar when he was young.", opciones: ["could", "can", "cans", "canned"], correcta: 0 },
      { dificultad: 1, enunciado: "___ you help me, please?", opciones: ["Can", "Cans", "Could to", "Canning"], correcta: 0 },
      { dificultad: 1, enunciado: "You ___ not smoke here.", opciones: ["mustn't", "must", "musts", "must to"], correcta: 0 },
      { dificultad: 1, enunciado: "She ___ come to the party if she wants.", opciones: ["can", "cans", "could to", "canning"], correcta: 0 },

      { dificultad: 2, enunciado: "When I was a child, I ___ run very fast.", opciones: ["could", "can", "cans", "canned"], correcta: 0 },
      { dificultad: 2, enunciado: "You ___ apologize to her.", opciones: ["should", "shoulds", "shoulding", "must to"], correcta: 0 },
      { dificultad: 2, enunciado: "We ___ leave now, or we'll be late.", opciones: ["must", "should", "can", "could"], correcta: 0 },
      { dificultad: 2, enunciado: "___ I ask you a question?", opciones: ["Could", "Coulds", "Musting", "Shoulding"], correcta: 0 },
      { dificultad: 2, enunciado: "You ___ not park here; it's forbidden.", opciones: ["must", "should", "can", "could"], correcta: 0 },
      { dificultad: 2, enunciado: "He ___ have finished by now; it's late.", opciones: ["should", "must", "can", "could"], correcta: 0 },
      { dificultad: 2, enunciado: "___ you pass me the salt, please?", opciones: ["Could", "Coulds", "Musting", "Shoulding"], correcta: 0 },
      { dificultad: 2, enunciado: "Students ___ arrive on time.", opciones: ["must", "could", "can", "should"], correcta: 0 },
      { dificultad: 2, enunciado: "You ___ see a doctor if you feel sick.", opciones: ["should", "must", "can", "could"], correcta: 0 },
      { dificultad: 2, enunciado: "I ___ not understand the question yesterday.", opciones: ["couldn't", "can't", "mustn't", "shouldn't"], correcta: 0 },

      { dificultad: 3, enunciado: "'He must be tired.' This sentence expresses:", opciones: ["Deduction", "Obligation", "Ability", "Advice"], correcta: 0 },
      { dificultad: 3, enunciado: "'You should see a doctor.' This expresses:", opciones: ["Advice", "Obligation", "Permission", "Deduction"], correcta: 0 },
      { dificultad: 3, enunciado: "'Employees must wear uniforms.' This expresses:", opciones: ["Obligation", "Advice", "Permission", "Ability"], correcta: 0 },
      { dificultad: 3, enunciado: "'She can't be at home; her car isn't there.' This expresses:", opciones: ["Deduction", "Permission", "Obligation", "Ability"], correcta: 0 },
      { dificultad: 3, enunciado: "Choose the correct modal for strong obligation: 'You ___ finish this report today.'", opciones: ["must", "should", "could", "might"], correcta: 0 },
      { dificultad: 3, enunciado: "'Could I use your phone?' is used to:", opciones: ["Ask permission", "Express obligation", "Give advice", "Express deduction"], correcta: 0 },
      { dificultad: 3, enunciado: "Choose the modal expressing possibility: 'It ___ rain later.'", opciones: ["might", "must", "should", "can"], correcta: 0 },
      { dificultad: 3, enunciado: "'You mustn't touch that wire.' expresses:", opciones: ["Prohibition", "Advice", "Ability", "Deduction"], correcta: 0 },
      { dificultad: 3, enunciado: "'He should have called us.' expresses:", opciones: ["A criticism about a missed action", "A past ability", "Permission", "Deduction"], correcta: 0 },
      { dificultad: 3, enunciado: "Choose the most polite request.", opciones: ["Could you please open the window?", "You must open the window.", "Open the window now.", "You should open the window."], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Choose the correct modal for ability", descripcion: "Ordena los pasos del proceso.", pasos: ["Identify if the sentence is about ability", "Use 'can' for present ability", "Use 'could' for past ability"] },
      { dificultad: 1, titulo: "Form a sentence with a modal verb", descripcion: "Ordena los pasos del proceso.", pasos: ["Choose the subject", "Add the modal verb", "Add the base form of the main verb after it"] },
      { dificultad: 2, titulo: "Choose between 'should' and 'must'", descripcion: "Ordena los pasos del proceso.", pasos: ["Identify if the sentence expresses advice or obligation", "Use 'should' for advice", "Use 'must' for strong obligation"] },
      { dificultad: 2, titulo: "Form a negative sentence with a modal verb", descripcion: "Ordena los pasos del proceso.", pasos: ["Identify the modal verb in the sentence", "Add 'not' right after the modal", "Keep the base form of the main verb"] },
      { dificultad: 3, titulo: "Identify the meaning of a modal verb in context", descripcion: "Ordena los pasos del proceso.", pasos: ["Read the full sentence carefully", "Identify if it expresses ability, advice, obligation, or deduction", "Choose the meaning that fits the context"] },
      { dificultad: 3, titulo: "Choose the most polite way to make a request", descripcion: "Ordena los pasos del proceso.", pasos: ["Identify that a request is being made", "Prefer 'could' or 'would' over 'can' for politeness", "Add 'please' to make it even more polite"] }
    ]
  },

  "comparativos-superlativos": {
    nombre: "Comparativos y superlativos",
    preguntas: [
      { dificultad: 1, enunciado: "This book is ___ than that one.", opciones: ["bigger", "big", "biggest", "more big"], correcta: 0 },
      { dificultad: 1, enunciado: "She is the ___ student in the class.", opciones: ["tallest", "tall", "taller", "more tall"], correcta: 0 },
      { dificultad: 1, enunciado: "My car is ___ than yours.", opciones: ["faster", "fast", "fastest", "more fast"], correcta: 0 },
      { dificultad: 1, enunciado: "He is the ___ boy in the school.", opciones: ["shortest", "short", "shorter", "more short"], correcta: 0 },
      { dificultad: 1, enunciado: "This is the ___ day of the year.", opciones: ["hottest", "hot", "hotter", "more hot"], correcta: 0 },
      { dificultad: 1, enunciado: "This exercise is ___ than the last one.", opciones: ["easier", "easy", "easiest", "more easy"], correcta: 0 },
      { dificultad: 1, enunciado: "She is ___ than her sister.", opciones: ["older", "old", "oldest", "more old"], correcta: 0 },
      { dificultad: 1, enunciado: "This is the ___ house on the street.", opciones: ["smallest", "small", "smaller", "more small"], correcta: 0 },
      { dificultad: 1, enunciado: "He runs ___ than me.", opciones: ["faster", "fast", "fastest", "more fast"], correcta: 0 },
      { dificultad: 1, enunciado: "That was the ___ movie I've seen.", opciones: ["funniest", "funny", "funnier", "more funny"], correcta: 0 },

      { dificultad: 2, enunciado: "This book is ___ than that one.", opciones: ["more interesting", "interesting", "most interesting", "interestinger"], correcta: 0 },
      { dificultad: 2, enunciado: "She is the ___ person I know.", opciones: ["most generous", "generous", "more generous", "generouser"], correcta: 0 },
      { dificultad: 2, enunciado: "This test was ___ than I expected.", opciones: ["more difficult", "difficult", "most difficult", "difficulter"], correcta: 0 },
      { dificultad: 2, enunciado: "He is ___ than his brother.", opciones: ["better", "good", "best", "gooder"], correcta: 0 },
      { dificultad: 2, enunciado: "That was the ___ meal I've ever had.", opciones: ["worst", "bad", "worse", "badder"], correcta: 0 },
      { dificultad: 2, enunciado: "This city is ___ than the capital.", opciones: ["more beautiful", "beautiful", "most beautiful", "beautifuler"], correcta: 0 },
      { dificultad: 2, enunciado: "This is the ___ solution to the problem.", opciones: ["best", "good", "better", "gooder"], correcta: 0 },
      { dificultad: 2, enunciado: "The weather today is ___ than yesterday.", opciones: ["worse", "bad", "worst", "badder"], correcta: 0 },
      { dificultad: 2, enunciado: "She is the ___ singer in the competition.", opciones: ["most talented", "talented", "more talented", "talenteder"], correcta: 0 },
      { dificultad: 2, enunciado: "This road is ___ than the other one.", opciones: ["more dangerous", "dangerous", "most dangerous", "dangerouser"], correcta: 0 },

      { dificultad: 3, enunciado: "He is not as tall ___ his father.", opciones: ["as", "than", "that", "like"], correcta: 0 },
      { dificultad: 3, enunciado: "This phone is the ___ expensive of all.", opciones: ["least", "less", "more", "most"], correcta: 0 },
      { dificultad: 3, enunciado: "She is ___ experienced as her colleague.", opciones: ["as", "than", "less", "more"], correcta: 0 },
      { dificultad: 3, enunciado: "This is by far the ___ interesting book I've read.", opciones: ["most", "more", "less", "least"], correcta: 0 },
      { dificultad: 3, enunciado: "This car is ___ expensive than that one, but still good.", opciones: ["less", "as", "least", "most"], correcta: 0 },
      { dificultad: 3, enunciado: "The more you practice, ___ you improve.", opciones: ["the more", "more", "most", "the most"], correcta: 0 },
      { dificultad: 3, enunciado: "She sings ___ well as her sister.", opciones: ["as", "than", "more", "most"], correcta: 0 },
      { dificultad: 3, enunciado: "This is one of the ___ important decisions of my life.", opciones: ["most", "more", "less", "least"], correcta: 0 },
      { dificultad: 3, enunciado: "He is ___ skilled than I expected.", opciones: ["less", "as", "least", "more than"], correcta: 0 },
      { dificultad: 3, enunciado: "Choose the correct sentence.", opciones: ["The bigger the house, the more expensive it is.", "The bigger the house, more expensive it is.", "The big house, the more expensive.", "Bigger house, the more expensive it is."], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Form the comparative of a short adjective", descripcion: "Ordena los pasos del proceso.", pasos: ["Take the short adjective", "Add -er to the end", "Add 'than' after it to compare"] },
      { dificultad: 1, titulo: "Form the superlative of a short adjective", descripcion: "Ordena los pasos del proceso.", pasos: ["Take the short adjective", "Add -est to the end", "Add 'the' before it"] },
      { dificultad: 2, titulo: "Form the comparative of a long adjective", descripcion: "Ordena los pasos del proceso.", pasos: ["Identify that the adjective has two or more syllables", "Add 'more' before the adjective", "Add 'than' after it to compare"] },
      { dificultad: 2, titulo: "Form the superlative of a long adjective", descripcion: "Ordena los pasos del proceso.", pasos: ["Identify that the adjective has two or more syllables", "Add 'the most' before the adjective", "Complete the sentence"] },
      { dificultad: 3, titulo: "Use an irregular comparative or superlative correctly", descripcion: "Ordena los pasos del proceso.", pasos: ["Identify if the adjective is irregular (like good, bad)", "Remember its special comparative and superlative forms", "Use the correct form in the sentence"] },
      { dificultad: 3, titulo: "Form an 'as...as' comparison", descripcion: "Ordena los pasos del proceso.", pasos: ["Identify the two things being compared as equal", "Place 'as' before the adjective", "Place 'as' after the adjective and before the second thing"] }
    ]
  },

  "pronombres-relativos": {
    nombre: "Pronombres relativos (who, which, that)",
    preguntas: [
      { dificultad: 1, enunciado: "The man ___ lives next door is a doctor.", opciones: ["who", "which", "whom", "whose"], correcta: 0 },
      { dificultad: 1, enunciado: "This is the book ___ I bought yesterday.", opciones: ["which", "who", "whom", "whose"], correcta: 0 },
      { dificultad: 1, enunciado: "She is the teacher ___ helped me.", opciones: ["who", "which", "whom", "whose"], correcta: 0 },
      { dificultad: 1, enunciado: "The car ___ is parked outside is mine.", opciones: ["which", "who", "whom", "whose"], correcta: 0 },
      { dificultad: 1, enunciado: "The woman ___ called you is my aunt.", opciones: ["who", "which", "whom", "whose"], correcta: 0 },
      { dificultad: 1, enunciado: "I have a dog ___ loves to play.", opciones: ["which", "who", "whom", "whose"], correcta: 0 },
      { dificultad: 1, enunciado: "The children ___ study here are very smart.", opciones: ["who", "which", "whom", "whose"], correcta: 0 },
      { dificultad: 1, enunciado: "This is the house ___ we lived in.", opciones: ["which", "who", "whom", "whose"], correcta: 0 },
      { dificultad: 1, enunciado: "The boy ___ won the race is my friend.", opciones: ["who", "which", "whom", "whose"], correcta: 0 },
      { dificultad: 1, enunciado: "The movie ___ we watched was great.", opciones: ["which", "who", "whom", "whose"], correcta: 0 },

      { dificultad: 2, enunciado: "The girl ___ bag was stolen is crying.", opciones: ["whose", "who", "which", "whom"], correcta: 0 },
      { dificultad: 2, enunciado: "This is the man ___ car was stolen.", opciones: ["whose", "who", "which", "whom"], correcta: 0 },
      { dificultad: 2, enunciado: "The teacher, ___ is very kind, helped me.", opciones: ["who", "which", "whom", "whose"], correcta: 0 },
      { dificultad: 2, enunciado: "My phone, ___ I bought last year, broke.", opciones: ["which", "who", "whom", "whose"], correcta: 0 },
      { dificultad: 2, enunciado: "The person ___ I spoke to was helpful.", opciones: ["whom", "which", "who", "whose"], correcta: 0 },
      { dificultad: 2, enunciado: "The dog ___ tail is brown ran away.", opciones: ["whose", "who", "which", "whom"], correcta: 0 },
      { dificultad: 2, enunciado: "This is the company ___ I work for.", opciones: ["which", "who", "whom", "whose"], correcta: 0 },
      { dificultad: 2, enunciado: "The scientist ___ discovered this was famous.", opciones: ["who", "which", "whom", "whose"], correcta: 0 },
      { dificultad: 2, enunciado: "The house, ___ was built in 1990, is for sale.", opciones: ["which", "who", "whom", "whose"], correcta: 0 },
      { dificultad: 2, enunciado: "The man ___ helped us was very kind.", opciones: ["who", "which", "whom", "whose"], correcta: 0 },

      { dificultad: 3, enunciado: "To ___ did you give the book?", opciones: ["whom", "who", "which", "whose"], correcta: 0 },
      { dificultad: 3, enunciado: "The report, ___ took two weeks to finish, was excellent.", opciones: ["which", "that", "who", "whom"], correcta: 0 },
      { dificultad: 3, enunciado: "Choose the correct sentence.", opciones: ["My brother, who lives in Spain, is visiting.", "My brother, that lives in Spain, is visiting.", "My brother, which lives in Spain, is visiting.", "My brother, whom lives in Spain, is visiting."], correcta: 0 },
      { dificultad: 3, enunciado: "The employee ___ performance improved got a bonus.", opciones: ["whose", "who", "which", "whom"], correcta: 0 },
      { dificultad: 3, enunciado: "This is the book about ___ we talked.", opciones: ["which", "who", "whom", "whose"], correcta: 0 },
      { dificultad: 3, enunciado: "The manager, ___ we all respect, is retiring.", opciones: ["whom", "which", "that", "whose"], correcta: 0 },
      { dificultad: 3, enunciado: "Combine: 'This is the artist. I admire her work.' → 'This is the artist ___ work I admire.'", opciones: ["whose", "who", "which", "whom"], correcta: 0 },
      { dificultad: 3, enunciado: "Choose the correct: 'The car ___ broke down was new.'", opciones: ["which", "whom", "whose", "who"], correcta: 0 },
      { dificultad: 3, enunciado: "The candidate ___ we voted for won.", opciones: ["whom", "who", "whose", "which"], correcta: 0 },
      { dificultad: 3, enunciado: "Choose the correct sentence.", opciones: ["The book, which I read last week, was amazing.", "The book, that I read last week, was amazing.", "The book, who I read last week, was amazing.", "The book, whom I read last week, was amazing."], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Choose 'who' or 'which' correctly", descripcion: "Ordena los pasos del proceso.", pasos: ["Identify if the noun being described is a person or a thing", "Use 'who' for people", "Use 'which' for things"] },
      { dificultad: 1, titulo: "Combine two sentences using a relative pronoun", descripcion: "Ordena los pasos del proceso.", pasos: ["Identify the noun that repeats in both sentences", "Replace the repeated noun in the second sentence with a relative pronoun", "Join the two sentences into one"] },
      { dificultad: 2, titulo: "Use 'whose' to show possession", descripcion: "Ordena los pasos del proceso.", pasos: ["Identify that something belongs to the person or thing being described", "Replace the possessive word with 'whose'", "Place 'whose' right before the noun it modifies"] },
      { dificultad: 2, titulo: "Decide if a relative clause needs commas", descripcion: "Ordena los pasos del proceso.", pasos: ["Identify if the information is essential to identify the noun", "If it is essential, do not use commas", "If it is extra information, use commas around the clause"] },
      { dificultad: 3, titulo: "Use 'whom' correctly in a formal sentence", descripcion: "Ordena los pasos del proceso.", pasos: ["Identify if the relative pronoun is the object of the verb or preposition", "Use 'whom' instead of 'who' in formal writing", "Place it correctly in the sentence"] },
      { dificultad: 3, titulo: "Correct a relative clause that uses 'that' instead of 'which'", descripcion: "Ordena los pasos del proceso.", pasos: ["Identify if the clause is non-restrictive (extra information with commas)", "Remember that 'that' cannot be used in non-restrictive clauses", "Replace 'that' with 'which'"] }
    ]
  },

  "futuro": {
    nombre: "Futuro con will y going to",
    preguntas: [
      { dificultad: 1, enunciado: "I think it ___ rain tomorrow.", opciones: ["will", "going to", "is", "are"], correcta: 0 },
      { dificultad: 1, enunciado: "She ___ to visit her grandmother next week.", opciones: ["is going", "will", "go", "goes"], correcta: 0 },
      { dificultad: 1, enunciado: "We ___ study English tonight.", opciones: ["will", "is going", "go", "goes"], correcta: 0 },
      { dificultad: 1, enunciado: "They ___ to travel to Peru next month.", opciones: ["are going", "will", "go", "goes"], correcta: 0 },
      { dificultad: 1, enunciado: "I ___ help you with your homework.", opciones: ["will", "is going", "go", "goes"], correcta: 0 },
      { dificultad: 1, enunciado: "He ___ to buy a new car soon.", opciones: ["is going", "will", "go", "goes"], correcta: 0 },
      { dificultad: 1, enunciado: "___ you come to the party?", opciones: ["Will", "Is going", "Do", "Are"], correcta: 0 },
      { dificultad: 1, enunciado: "We ___ to have a party this weekend.", opciones: ["are going", "will", "go", "goes"], correcta: 0 },
      { dificultad: 1, enunciado: "I promise I ___ call you later.", opciones: ["will", "is going", "go", "goes"], correcta: 0 },
      { dificultad: 1, enunciado: "She ___ to start a new job next month.", opciones: ["is going", "will", "go", "goes"], correcta: 0 },

      { dificultad: 2, enunciado: "Look at those clouds! It ___ rain.", opciones: ["is going to", "will", "go", "goes"], correcta: 0 },
      { dificultad: 2, enunciado: "I'm thirsty. I ___ get some water. (spontaneous decision)", opciones: ["will", "am going to", "go", "goes"], correcta: 0 },
      { dificultad: 2, enunciado: "We have already booked the tickets; we ___ travel next week.", opciones: ["are going to", "will", "go", "goes"], correcta: 0 },
      { dificultad: 2, enunciado: "The phone is ringing. I ___ answer it.", opciones: ["will", "am going to", "go", "goes"], correcta: 0 },
      { dificultad: 2, enunciado: "She has decided; she ___ study medicine.", opciones: ["is going to", "will", "go", "goes"], correcta: 0 },
      { dificultad: 2, enunciado: "I don't know what to do. I think I ___ ask for help.", opciones: ["will", "am going to", "go", "goes"], correcta: 0 },
      { dificultad: 2, enunciado: "Look out! You ___ fall!", opciones: ["are going to", "will", "go", "goes"], correcta: 0 },
      { dificultad: 2, enunciado: "We've planned everything; the wedding ___ be in June.", opciones: ["is going to", "will", "go", "goes"], correcta: 0 },
      { dificultad: 2, enunciado: "I promise I ___ never lie to you.", opciones: ["will", "am going to", "go", "goes"], correcta: 0 },
      { dificultad: 2, enunciado: "He has already packed his bags; he ___ leave tonight.", opciones: ["is going to", "will", "go", "goes"], correcta: 0 },

      { dificultad: 3, enunciado: "By this time next year, I ___ graduated.", opciones: ["will have", "am going to have", "will be", "am going"], correcta: 0 },
      { dificultad: 3, enunciado: "This time tomorrow, we ___ flying to Madrid.", opciones: ["will be", "are going to", "will have", "go"], correcta: 0 },
      { dificultad: 3, enunciado: "Choose the correct sentence for an arrangement.", opciones: ["I'm meeting him at 5 pm.", "I will meet him at 5 pm.", "I meet him at 5 pm.", "I am going meet him at 5 pm."], correcta: 0 },
      { dificultad: 3, enunciado: "By 2030, scientists ___ found a cure.", opciones: ["will have", "are going to have", "will be", "go"], correcta: 0 },
      { dificultad: 3, enunciado: "Choose the sentence expressing a scheduled event.", opciones: ["The train leaves at 6 am.", "The train will leave at 6 am.", "The train is leaving at 6 am tomorrow only once", "The train is going to leave"], correcta: 0 },
      { dificultad: 3, enunciado: "This time next week, she ___ working in her new office.", opciones: ["will be", "is going to", "will have", "go"], correcta: 0 },
      { dificultad: 3, enunciado: "Choose the correct future perfect: 'By the time you arrive, I ___ finished cooking.'", opciones: ["will have", "will be", "am going to", "go"], correcta: 0 },
      { dificultad: 3, enunciado: "Choose the best sentence for a fixed plan already arranged.", opciones: ["We are having dinner with them tomorrow.", "We will have dinner with them tomorrow.", "We have dinner with them tomorrow always.", "We are going to have dinner with them, maybe."], correcta: 0 },
      { dificultad: 3, enunciado: "In ten years, technology ___ changed a lot.", opciones: ["will have", "is going to", "will be", "go"], correcta: 0 },
      { dificultad: 3, enunciado: "Choose the correct sentence: prediction based on opinion, not evidence.", opciones: ["I think she will pass the exam.", "I think she is going to pass the exam because of evidence.", "She passes the exam.", "She is passing the exam right now."], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Choose between 'will' and 'going to' for a prediction", descripcion: "Ordena los pasos del proceso.", pasos: ["Identify if there is evidence for the prediction", "If there is visible evidence, use 'going to'", "If it's just an opinion, use 'will'"] },
      { dificultad: 1, titulo: "Form a sentence with 'going to'", descripcion: "Ordena los pasos del proceso.", pasos: ["Choose the subject", "Add the correct form of 'to be'", "Add 'going to' and the base form of the main verb"] },
      { dificultad: 2, titulo: "Choose 'will' for a spontaneous decision", descripcion: "Ordena los pasos del proceso.", pasos: ["Identify that the decision is being made at the moment of speaking", "Use 'will' instead of 'going to'", "Add the base form of the main verb"] },
      { dificultad: 2, titulo: "Form a sentence with 'will' for a promise", descripcion: "Ordena los pasos del proceso.", pasos: ["Choose the subject", "Add 'will'", "Add the base form of the main verb to complete the promise"] },
      { dificultad: 3, titulo: "Use the future continuous correctly", descripcion: "Ordena los pasos del proceso.", pasos: ["Identify an action that will be in progress at a specific future time", "Use 'will be' plus the main verb with -ing", "Add the specific future time to the sentence"] },
      { dificultad: 3, titulo: "Use the future perfect correctly", descripcion: "Ordena los pasos del proceso.", pasos: ["Identify an action that will be completed before a specific future time", "Use 'will have' plus the past participle of the verb", "Add the specific future time to the sentence"] }
    ]
  },

  "comprension-lectura-ingles": {
    nombre: "Comprensión de lectura en textos cortos y narrativos",
    preguntas: [
      { dificultad: 1, enunciado: "'Tom has a red bike. He rides it to school every day.' What color is Tom's bike?", opciones: ["Red", "Blue", "Green", "Black"], correcta: 0 },
      { dificultad: 1, enunciado: "'Anna likes cats. She has three cats at home.' How many cats does Anna have?", opciones: ["Three", "Two", "Four", "One"], correcta: 0 },
      { dificultad: 1, enunciado: "'It is sunny today. Maria is going to the park.' Where is Maria going?", opciones: ["To the park", "To school", "To the store", "Home"], correcta: 0 },
      { dificultad: 1, enunciado: "'Peter is hungry. He wants to eat a sandwich.' What does Peter want to eat?", opciones: ["A sandwich", "A pizza", "A salad", "A cake"], correcta: 0 },
      { dificultad: 1, enunciado: "'The dog is sleeping under the tree.' Where is the dog?", opciones: ["Under the tree", "On the tree", "Next to the tree", "In the house"], correcta: 0 },
      { dificultad: 1, enunciado: "'Sara has a blue backpack. She takes it to school.' What color is Sara's backpack?", opciones: ["Blue", "Red", "Green", "Yellow"], correcta: 0 },
      { dificultad: 1, enunciado: "'John plays soccer on Saturdays.' What sport does John play?", opciones: ["Soccer", "Basketball", "Tennis", "Baseball"], correcta: 0 },
      { dificultad: 1, enunciado: "'The cake is in the oven. It will be ready in 20 minutes.' Where is the cake?", opciones: ["In the oven", "On the table", "In the fridge", "Outside"], correcta: 0 },
      { dificultad: 1, enunciado: "'Lucy reads a book every night before bed.' When does Lucy read?", opciones: ["Every night before bed", "In the morning", "At school", "On weekends"], correcta: 0 },
      { dificultad: 1, enunciado: "'The store opens at 9 am and closes at 6 pm.' What time does the store close?", opciones: ["6 pm", "9 am", "12 pm", "8 pm"], correcta: 0 },

      { dificultad: 2, enunciado: "'Mark woke up late. He rushed to get dressed and missed the bus.' Why did Mark walk to school?", opciones: ["He missed the bus", "He likes walking", "His bike broke", "It was a short distance"], correcta: 0 },
      { dificultad: 2, enunciado: "'Emma studied hard for her exam. The next day, she got the highest score.' Why did Emma get the highest score?", opciones: ["She studied hard", "She was lucky", "The exam was easy", "Her friend helped her"], correcta: 0 },
      { dificultad: 2, enunciado: "'It started to rain, so the children went inside to play games.' Why did the children go inside?", opciones: ["It started to rain", "They were tired", "It was late", "They finished playing outside"], correcta: 0 },
      { dificultad: 2, enunciado: "'Daniel forgot his umbrella and got wet on his way home.' What is implied about the weather?", opciones: ["It was raining", "It was sunny", "It was snowing", "It was windy"], correcta: 0 },
      { dificultad: 2, enunciado: "'The team practiced every day for a month before the big game.' What can we infer about the team?", opciones: ["They were dedicated", "They didn't care about winning", "They were tired", "They lost"], correcta: 0 },
      { dificultad: 2, enunciado: "'Sofia saved her allowance for three months to buy a new bicycle.' What does this tell us about Sofia?", opciones: ["She is a saver", "She is impatient", "She dislikes bicycles", "She is careless"], correcta: 0 },
      { dificultad: 2, enunciado: "'The power went out during the storm, so the family lit candles.' Why did they light candles?", opciones: ["The power went out", "For fun", "It was a celebration", "They forgot to pay the bill"], correcta: 0 },
      { dificultad: 2, enunciado: "'After finishing his homework, Leo went out to play with his friends.' What did Leo do first?", opciones: ["Finish his homework", "Play with friends", "Go to sleep", "Watch TV"], correcta: 0 },
      { dificultad: 2, enunciado: "'The garden was full of flowers because Grandma watered them every day.' Why was the garden full of flowers?", opciones: ["Grandma watered them every day", "It rained a lot", "It was spring", "The flowers were fake"], correcta: 0 },
      { dificultad: 2, enunciado: "'Since Alex trains every morning, he became the fastest runner in his school.' Why did Alex become the fastest runner?", opciones: ["He trains every morning", "He was born fast", "He is tall", "He has good shoes"], correcta: 0 },

      { dificultad: 3, enunciado: "'Recycling helps protect the environment. It reduces waste and saves natural resources.' What is the main idea?", opciones: ["Recycling protects the environment", "Plastic is bad", "Glass is recyclable", "Waste is a problem"], correcta: 0 },
      { dificultad: 3, enunciado: "'Although the trip was long and tiring, the family enjoyed the beautiful scenery.' What is the tone of this sentence?", opciones: ["Positive despite difficulty", "Negative", "Angry", "Confused"], correcta: 0 },
      { dificultad: 3, enunciado: "'This article explains how to plant a garden step by step.' What is the purpose of this text?", opciones: ["To instruct", "To entertain", "To persuade", "To narrate a story"], correcta: 0 },
      { dificultad: 3, enunciado: "'Exercise is important for health. It strengthens the heart and improves mood.' What is this text mainly about?", opciones: ["The benefits of exercise", "The heart only", "Weight loss", "Mood disorders"], correcta: 0 },
      { dificultad: 3, enunciado: "'Despite the rain, the concert continued as planned.' What does 'despite' suggest?", opciones: ["In spite of", "Because of", "Instead of", "Similar to"], correcta: 0 },
      { dificultad: 3, enunciado: "'The author argues that students should have less homework to improve their well-being.' What type of text is this?", opciones: ["Argumentative", "Narrative", "Descriptive", "Instructional"], correcta: 0 },
      { dificultad: 3, enunciado: "'The old house, covered in ivy, stood silently at the end of the street.' What is being described?", opciones: ["A place", "An action", "A feeling", "An opinion"], correcta: 0 },
      { dificultad: 3, enunciado: "'Scientists warn that climate change could affect food production worldwide.' What is the author's purpose?", opciones: ["To inform and warn", "To entertain", "To sell a product", "To tell a story"], correcta: 0 },
      { dificultad: 3, enunciado: "'She was nervous before the interview, but she answered every question with confidence.' What can we infer about her?", opciones: ["She overcame her nervousness", "She failed the interview", "She didn't prepare", "She left early"], correcta: 0 },
      { dificultad: 3, enunciado: "'This guide will help you set up your new phone in five easy steps.' What kind of text is this?", opciones: ["Instructional", "Narrative", "Argumentative", "Poetic"], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Find a specific detail in a short text", descripcion: "Ordena los pasos del proceso.", pasos: ["Read the question carefully first", "Scan the text for key words related to the question", "Locate the exact sentence with the answer"] },
      { dificultad: 1, titulo: "Identify the main character of a story", descripcion: "Ordena los pasos del proceso.", pasos: ["Read the text completely", "Identify who the actions in the story are about", "Confirm that character appears throughout the text"] },
      { dificultad: 2, titulo: "Make a simple inference from a text", descripcion: "Ordena los pasos del proceso.", pasos: ["Read the text carefully", "Identify the information that is directly stated", "Use that information to figure out something not directly said"] },
      { dificultad: 2, titulo: "Identify the sequence of events in a story", descripcion: "Ordena los pasos del proceso.", pasos: ["Read the text completely", "Look for time words like 'first', 'then', 'after'", "List the events in the order they happened"] },
      { dificultad: 3, titulo: "Identify the main idea of a paragraph", descripcion: "Ordena los pasos del proceso.", pasos: ["Read the paragraph completely", "Identify what most of the sentences have in common", "Summarize that common idea in one sentence"] },
      { dificultad: 3, titulo: "Identify the author's purpose in a text", descripcion: "Ordena los pasos del proceso.", pasos: ["Read the text completely", "Consider whether it explains, persuades, entertains, or informs", "Choose the purpose that best matches the text's content and tone"] }
    ]
  },

  "wh-questions": {
    nombre: "Formación y uso de preguntas (Wh- questions)",
    preguntas: [
      { dificultad: 1, enunciado: "___ is your name?", opciones: ["What", "Who", "Where", "When"], correcta: 0 },
      { dificultad: 1, enunciado: "___ do you live?", opciones: ["Where", "What", "Who", "When"], correcta: 0 },
      { dificultad: 1, enunciado: "___ is your birthday?", opciones: ["When", "What", "Who", "Where"], correcta: 0 },
      { dificultad: 1, enunciado: "___ is that girl?", opciones: ["Who", "What", "Where", "When"], correcta: 0 },
      { dificultad: 1, enunciado: "___ do you go to bed early? (asking for reason)", opciones: ["Why", "What", "Where", "When"], correcta: 0 },
      { dificultad: 1, enunciado: "___ old are you?", opciones: ["How", "What", "Where", "When"], correcta: 0 },
      { dificultad: 1, enunciado: "___ is your favorite color?", opciones: ["What", "Who", "Where", "When"], correcta: 0 },
      { dificultad: 1, enunciado: "___ does the bus arrive? (asking for time)", opciones: ["When", "Where", "Who", "What"], correcta: 0 },
      { dificultad: 1, enunciado: "___ is your teacher?", opciones: ["Who", "What", "Where", "When"], correcta: 0 },
      { dificultad: 1, enunciado: "___ are you going? (asking for place)", opciones: ["Where", "What", "Who", "When"], correcta: 0 },

      { dificultad: 2, enunciado: "___ do you eat for breakfast?", opciones: ["What", "Whats", "What do", "What does"], correcta: 0 },
      { dificultad: 2, enunciado: "___ does she live?", opciones: ["Where", "Wheres", "Where do", "Where does"], correcta: 0 },
      { dificultad: 2, enunciado: "Form the question for: 'She goes to school by bus.'", opciones: ["How does she go to school?", "Where does she go to school?", "What does she go to school?", "Who does she go to school?"], correcta: 0 },
      { dificultad: 2, enunciado: "___ did you see at the party?", opciones: ["Who", "Whom", "Whos", "Who did"], correcta: 0 },
      { dificultad: 2, enunciado: "Form the question for: 'They are watching a movie.'", opciones: ["What are they watching?", "Who are they watching?", "Where are they watching?", "When are they watching?"], correcta: 0 },
      { dificultad: 2, enunciado: "___ is he so happy?", opciones: ["Why", "Whys", "Why is", "Why does"], correcta: 0 },
      { dificultad: 2, enunciado: "Form the question for: 'He arrives at 8 am.'", opciones: ["When does he arrive?", "Where does he arrive?", "Who does he arrive?", "What does he arrive?"], correcta: 0 },
      { dificultad: 2, enunciado: "___ many books do you have?", opciones: ["How", "What", "Which", "Who"], correcta: 0 },
      { dificultad: 2, enunciado: "Form the question for: 'She is talking to her mom.'", opciones: ["Who is she talking to?", "What is she talking to?", "Where is she talking to?", "When is she talking to?"], correcta: 0 },
      { dificultad: 2, enunciado: "___ do you prefer, tea or coffee?", opciones: ["Which", "What", "Who", "Where"], correcta: 0 },

      { dificultad: 3, enunciado: "Choose the correct indirect question: 'Could you tell me ___?'", opciones: ["where the station is", "where is the station", "where's the station", "where does the station"], correcta: 0 },
      { dificultad: 3, enunciado: "Choose the correct question tag: 'She likes coffee, ___?'", opciones: ["doesn't she", "does she", "isn't she", "is she"], correcta: 0 },
      { dificultad: 3, enunciado: "'I wonder ___ he is late.'", opciones: ["why he is", "why is", "why", "why does"], correcta: 0 },
      { dificultad: 3, enunciado: "Choose the correct embedded question: 'Do you know ___?'", opciones: ["what time it is", "what time is it", "what's the time is", "what time does it"], correcta: 0 },
      { dificultad: 3, enunciado: "'Could you explain ___ this works?'", opciones: ["how", "how does", "how it does", "how it"], correcta: 0 },
      { dificultad: 3, enunciado: "Choose the correct: 'I don't know ___ she left.'", opciones: ["why", "why did", "why does", "why she"], correcta: 0 },
      { dificultad: 3, enunciado: "'Tell me ___ you need.'", opciones: ["what", "what do", "what does", "what is"], correcta: 0 },
      { dificultad: 3, enunciado: "Choose the correct: 'I'm not sure ___ the meeting starts.'", opciones: ["when", "when does", "what time is", "when it"], correcta: 0 },
      { dificultad: 3, enunciado: "'She asked me ___ I was going.'", opciones: ["where", "where was", "where did", "where am"], correcta: 0 },
      { dificultad: 3, enunciado: "Choose the correct indirect question: 'Can you tell me ___?'", opciones: ["who that man is", "who is that man", "who's that man", "who does that man"], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Choose the correct wh-word for a question", descripcion: "Ordena los pasos del proceso.", pasos: ["Identify what information the answer would give (person, place, time, thing)", "Match that information to the correct wh-word", "Place it at the beginning of the question"] },
      { dificultad: 1, titulo: "Form a basic wh-question", descripcion: "Ordena los pasos del proceso.", pasos: ["Choose the correct wh-word", "Add the correct auxiliary verb (do/does/is/are)", "Add the subject and the rest of the question"] },
      { dificultad: 2, titulo: "Form a wh-question about the subject", descripcion: "Ordena los pasos del proceso.", pasos: ["Identify that the question asks about the subject of the sentence", "Use the wh-word directly before the verb", "Do not add an extra auxiliary verb"] },
      { dificultad: 2, titulo: "Form a wh-question about the object", descripcion: "Ordena los pasos del proceso.", pasos: ["Identify that the question asks about the object of the sentence", "Add the wh-word", "Add the auxiliary verb, subject, and base verb"] },
      { dificultad: 3, titulo: "Form an indirect (embedded) question", descripcion: "Ordena los pasos del proceso.", pasos: ["Start with a polite phrase like 'Could you tell me'", "Add the wh-word", "Use normal statement word order instead of question word order"] },
      { dificultad: 3, titulo: "Correct a wh-question with the wrong word order", descripcion: "Ordena los pasos del proceso.", pasos: ["Identify the wh-word and the auxiliary verb", "Check if the subject comes before or after the auxiliary verb", "Correct the order so the auxiliary comes before the subject"] }
    ]
  },

  "preposiciones": {
    nombre: "Preposiciones de tiempo y lugar (in, on, at, between, among)",
    preguntas: [
      { dificultad: 1, enunciado: "I was born ___ 2010.", opciones: ["in", "on", "at", "between"], correcta: 0 },
      { dificultad: 1, enunciado: "The meeting is ___ Monday.", opciones: ["on", "in", "at", "between"], correcta: 0 },
      { dificultad: 1, enunciado: "She wakes up ___ 7 am.", opciones: ["at", "in", "on", "between"], correcta: 0 },
      { dificultad: 1, enunciado: "We live ___ Bogotá.", opciones: ["in", "on", "at", "between"], correcta: 0 },
      { dificultad: 1, enunciado: "The book is ___ the table.", opciones: ["on", "in", "at", "between"], correcta: 0 },
      { dificultad: 1, enunciado: "I have class ___ the morning.", opciones: ["in", "on", "at", "between"], correcta: 0 },
      { dificultad: 1, enunciado: "The party is ___ Saturday night.", opciones: ["on", "in", "at", "between"], correcta: 0 },
      { dificultad: 1, enunciado: "He arrived ___ midnight.", opciones: ["at", "in", "on", "between"], correcta: 0 },
      { dificultad: 1, enunciado: "The cat is ___ the box.", opciones: ["in", "on", "at", "between"], correcta: 0 },
      { dificultad: 1, enunciado: "See you ___ noon.", opciones: ["at", "in", "on", "between"], correcta: 0 },

      { dificultad: 2, enunciado: "The store is ___ the bank and the pharmacy.", opciones: ["between", "among", "at", "in"], correcta: 0 },
      { dificultad: 2, enunciado: "She was the best ___ all the students.", opciones: ["among", "between", "at", "in"], correcta: 0 },
      { dificultad: 2, enunciado: "There is a park ___ my house and the school.", opciones: ["between", "among", "at", "in"], correcta: 0 },
      { dificultad: 2, enunciado: "He felt comfortable ___ his friends.", opciones: ["among", "between", "at", "in"], correcta: 0 },
      { dificultad: 2, enunciado: "The ball is ___ the two boxes.", opciones: ["between", "among", "at", "in"], correcta: 0 },
      { dificultad: 2, enunciado: "She sat ___ her classmates during the presentation.", opciones: ["among", "between", "at", "in"], correcta: 0 },
      { dificultad: 2, enunciado: "The keys are ___ the two books on the shelf.", opciones: ["between", "among", "at", "in"], correcta: 0 },
      { dificultad: 2, enunciado: "He is popular ___ his colleagues.", opciones: ["among", "between", "at", "in"], correcta: 0 },
      { dificultad: 2, enunciado: "The house is located ___ the lake and the mountains.", opciones: ["between", "among", "at", "in"], correcta: 0 },
      { dificultad: 2, enunciado: "There was a discussion ___ the team members.", opciones: ["among", "between", "at", "in"], correcta: 0 },

      { dificultad: 3, enunciado: "I'll see you ___ the weekend.", opciones: ["on", "in", "at", "between"], correcta: 0 },
      { dificultad: 3, enunciado: "She was born ___ July.", opciones: ["in", "on", "at", "between"], correcta: 0 },
      { dificultad: 3, enunciado: "We arrived ___ the airport an hour early.", opciones: ["at", "in", "on", "between"], correcta: 0 },
      { dificultad: 3, enunciado: "He lives ___ 5th Avenue.", opciones: ["on", "in", "at", "between"], correcta: 0 },
      { dificultad: 3, enunciado: "The concert starts ___ 8 pm ___ Friday.", opciones: ["at...on", "on...at", "in...at", "at...in"], correcta: 0 },
      { dificultad: 3, enunciado: "I usually relax ___ the evening.", opciones: ["in", "on", "at", "between"], correcta: 0 },
      { dificultad: 3, enunciado: "The conference is ___ March 15th.", opciones: ["on", "in", "at", "between"], correcta: 0 },
      { dificultad: 3, enunciado: "She is standing ___ the door.", opciones: ["at", "in", "on", "between"], correcta: 0 },
      { dificultad: 3, enunciado: "There is a strong bond ___ the two sisters.", opciones: ["between", "among", "at", "in"], correcta: 0 },
      { dificultad: 3, enunciado: "He was chosen ___ hundreds of applicants.", opciones: ["among", "between", "at", "in"], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Choose the correct preposition for a specific time", descripcion: "Ordena los pasos del proceso.", pasos: ["Identify if the time is a clock time, a day, or a longer period", "Use 'at' for clock times", "Use 'on' for days, and 'in' for months, years, and longer periods"] },
      { dificultad: 1, titulo: "Choose the correct preposition for a place", descripcion: "Ordena los pasos del proceso.", pasos: ["Identify if the place is a point, a surface, or an enclosed space", "Use 'at' for a specific point", "Use 'on' for a surface, and 'in' for an enclosed space"] },
      { dificultad: 2, titulo: "Choose between 'between' and 'among'", descripcion: "Ordena los pasos del proceso.", pasos: ["Identify how many things or people are involved", "Use 'between' for exactly two", "Use 'among' for three or more"] },
      { dificultad: 2, titulo: "Identify the correct time preposition in a sentence", descripcion: "Ordena los pasos del proceso.", pasos: ["Read the full sentence", "Identify whether it refers to a clock time, day, or longer period", "Choose the matching preposition"] },
      { dificultad: 3, titulo: "Combine two prepositions of time and place correctly", descripcion: "Ordena los pasos del proceso.", pasos: ["Identify the time expression and the place expression in the sentence", "Choose the correct preposition for each one separately", "Place them in the correct order in the sentence"] },
      { dificultad: 3, titulo: "Correct a common preposition mistake", descripcion: "Ordena los pasos del proceso.", pasos: ["Read the sentence carefully", "Identify the preposition that was used incorrectly", "Replace it with the correct preposition for that context"] }
    ]
  }
};

function mezclar(arreglo) {
  const copia = [...arreglo];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

/**
 * Devuelve las preguntas de opción múltiple de un tema para una dificultad
 * dada. Incluye TODO el contenido de esa dificultad y las anteriores (a
 * mayor dificultad, más preguntas), mezclado y con las de la dificultad
 * exacta primero. Lo usan tanto el Quiz de Lógica como la Carrera Espacial.
 *
 * Las opciones de cada pregunta se mezclan y se recalcula `correcta`. En el
 * banco de contenido todas están escritas con la respuesta en la primera
 * posición, y sin este paso el alumno aprendería a pulsar siempre la A.
 */
export function obtenerPreguntasPorTema(temaId, dificultad) {
  const tema = CONTENIDO_TEMAS[temaId];
  if (!tema) return [];

  const nivel = Number(dificultad) || 2;
  const disponibles = tema.preguntas.filter((p) => p.dificultad <= nivel);
  const exactas = mezclar(disponibles.filter((p) => p.dificultad === nivel));
  const resto = mezclar(disponibles.filter((p) => p.dificultad !== nivel));
  return [...exactas, ...resto].map(mezclarOpciones);
}

/** Devuelve una copia de la pregunta con sus opciones barajadas. */
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
 * Devuelve los retos de "ordenar el proceso" de un tema para una dificultad
 * dada, con la misma lógica acumulativa que obtenerPreguntasPorTema. Los
 * usa el Puzzle de Código.
 */
export function obtenerRetosPorTema(temaId, dificultad) {
  const tema = CONTENIDO_TEMAS[temaId];
  if (!tema) return [];

  const nivel = Number(dificultad) || 2;
  const disponibles = tema.retos.filter((r) => r.dificultad <= nivel);
  const exactas = mezclar(disponibles.filter((r) => r.dificultad === nivel));
  const resto = mezclar(disponibles.filter((r) => r.dificultad !== nivel));
  return [...exactas, ...resto];
}

/** Nombre legible de un tema a partir de su id (para mostrar en pantalla). */
export function nombreDelTema(temaId) {
  return CONTENIDO_TEMAS[temaId]?.nombre || temaId || "Tema general";
}

/** Elige un tema al azar (usado en modo práctica, sin clase asignada). */
export function temaAleatorio() {
  const ids = Object.keys(CONTENIDO_TEMAS);
  return ids[Math.floor(Math.random() * ids.length)];
}

/** Milisegundos por pregunta en Carrera Espacial según la dificultad (más difícil = menos tiempo). */
export function tiempoPorPregunta(dificultad) {
  return { 1: 15000, 2: 12000, 3: 9000 }[Number(dificultad)] || 12000;
}
