// js/games/banco/matematicas.js
// Banco de contenido de Matemáticas para los 25 nodos del catálogo
// (5 pensamientos del MEN x 5 ciclos). Convenciones del formato:
// - correcta: 0 siempre; el juego baraja las opciones al mostrar.
// - Las 4 opciones deben ser distintas y no vacías.
// - Retos: pasos en orden correcto del proceso, máx. c1 3 / c2 4 / c3 4 / c4 5 / c5 6.

export const BANCO = {
  // ============ PENSAMIENTO NUMÉRICO ============
  "matematicas--numeracion--c1": {
    nombre: "Contar, comparar y ordenar números hasta 20",
    preguntas: [
      { dificultad: 1, enunciado: "Al contar, ¿qué número va justo después del 15?", opciones: ["16", "17", "14", "10"], correcta: 0 },
      { dificultad: 1, enunciado: "¿Cuál de estos números es el mayor: 8, 11, 9 o 13?", opciones: ["13", "11", "9", "8"], correcta: 0 },
      { dificultad: 1, enunciado: "Sofía tiene 7 mariposas; su hermano tiene 9. ¿Quién tiene más?", opciones: ["Su hermano", "Sofía", "Tienen la misma cantidad", "Ninguno de los dos"], correcta: 0 },
      { dificultad: 2, enunciado: "Cuento de 2 en 2: 10, 12, 14... ¿Qué número sigue?", opciones: ["16", "15", "18", "13"], correcta: 0 },
      { dificultad: 2, enunciado: "En la fila había 12 niños. Llegan 5 más. ¿Cuántos niños son ahora?", opciones: ["17", "16", "18", "7"], correcta: 0 },
      { dificultad: 2, enunciado: "Ordeno de menor a mayor: 3, 5, 11, 14. ¿Cuál número queda tercero?", opciones: ["11", "14", "5", "3"], correcta: 0 },
      { dificultad: 3, enunciado: "Mi número tiene 1 decena más 6 unidades. ¿Cuál es?", opciones: ["16", "61", "7", "10"], correcta: 0 },
      { dificultad: 3, enunciado: "Del 1 al 20, ¿cuántos números terminan en 5?", opciones: ["2", "3", "1", "4"], correcta: 0 },
      { dificultad: 3, enunciado: "Conté hasta 15 de 5 en 5. ¿Cuánto falta para llegar al 20?", opciones: ["5", "4", "6", "10"], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Ordenar números de menor a mayor", descripcion: "Ordena los pasos para acomodar los números.", pasos: ["Miro todos los números con atención", "Marco primero el más pequeño", "Al final marco el más grande"] },
      { dificultad: 3, titulo: "Descubrir el número que sigue en un patrón", descripcion: "Ordena los pasos del proceso.", pasos: ["Leo los números en orden", "Cuento cuánto salto de uno al siguiente", "Doy el mismo salto y digo el número"] }
    ]
  },

  "matematicas--numeracion--c2": {
    nombre: "Fracciones y decimales: partes de una unidad",
    preguntas: [
      { dificultad: 1, enunciado: "Un chocolate tiene 8 pedazos iguales. Comí 3. ¿Qué fracción comí?", opciones: ["3/8", "8/3", "5/8", "3/5"], correcta: 0 },
      { dificultad: 1, enunciado: "¿Cuál es la mitad de 1 metro?", opciones: ["50 cm", "5 cm", "25 cm", "100 cm"], correcta: 0 },
      { dificultad: 1, enunciado: "¿Cómo se lee el número 0,8?", opciones: ["ocho décimos", "ocho centésimos", "ocho unidades", "ochenta décimos"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Cuánto falta para completar 1 entero en 1/4 + __ ?", opciones: ["3/4", "1/4", "1/2", "2/4"], correcta: 0 },
      { dificultad: 2, enunciado: "De una pizza de 8 pedazos, comí 3. ¿Qué fracción sobró?", opciones: ["5/8", "3/8", "8/5", "3/5"], correcta: 0 },
      { dificultad: 2, enunciado: "Luisa tiene 12 canicas. Regaló la tercera parte. ¿Cuántas regaló?", opciones: ["4", "3", "6", "9"], correcta: 0 },
      { dificultad: 3, enunciado: "En la tienda, 0,5 kg de queso cuesta $1000. ¿Cuánto cuesta 1 kg?", opciones: ["$2000", "$1500", "$1000", "$500"], correcta: 0 },
      { dificultad: 3, enunciado: "Un cordel de un metro se cortó en 5 partes iguales. ¿Cuánto mide cada parte?", opciones: ["20 cm", "5 cm", "10 cm", "25 cm"], correcta: 0 },
      { dificultad: 3, enunciado: "Marta corrió 3/4 de la pista; Pedro corrió 4/5 de la misma pista. ¿Quién corrió más?", opciones: ["Pedro", "Marta", "Corrieron igual", "No se puede saber"], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Escribir la fracción de un dibujo", descripcion: "Ordena los pasos para escribir la fracción de la parte pintada.", pasos: ["Cuento todas las partes iguales del dibujo", "Cuento solo las partes pintadas", "Escribo arriba las pintadas", "Escribo abajo el total de partes"] },
      { dificultad: 3, titulo: "Sumar fracciones con el mismo denominador", descripcion: "Ordena los pasos del proceso.", pasos: ["Reviso que los números de abajo sean iguales", "Sumo los números de arriba", "Conservo el mismo número de abajo", "Compruebo con un dibujo si pasa de un entero"] }
    ]
  },

  "matematicas--numeracion--c3": {
    nombre: "Números enteros, divisibilidad y jerarquía de operaciones",
    preguntas: [
      { dificultad: 1, enunciado: "¿Cuál es el opuesto (inverso aditivo) del número −7?", opciones: ["7", "−7", "0", "1/7"], correcta: 0 },
      { dificultad: 1, enunciado: "¿Cuánto es (−4) + (−3)?", opciones: ["−7", "7", "−1", "1"], correcta: 0 },
      { dificultad: 1, enunciado: "¿Cuál de estos números es primo?", opciones: ["7", "9", "15", "21"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Cuánto es 3 + 4 · 2?", opciones: ["11", "14", "9", "24"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Cuánto es (3 + 4) · 2?", opciones: ["14", "11", "9", "5"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Cuál es el máximo común divisor (MCD) de 12 y 18?", opciones: ["6", "3", "12", "36"], correcta: 0 },
      { dificultad: 3, enunciado: "En la madrugada hacía −4 °C en Bogotá; al mediodía subió 11 grados. ¿Cuánto marcaba el termómetro?", opciones: ["7 °C", "−7 °C", "15 °C", "−15 °C"], correcta: 0 },
      { dificultad: 3, enunciado: "Tres luces parpadean cada 2, 3 y 4 segundos. ¿Cada cuántos segundos vuelven a coincidir?", opciones: ["12 segundos", "24 segundos", "6 segundos", "9 segundos"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Cuánto es 20 − 4 · 3 + 5?", opciones: ["13", "23", "53", "8"], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Restar números enteros", descripcion: "Ordena los pasos para restar con negativos.", pasos: ["Convertir la resta en suma del opuesto", "Sumar según la regla de los signos", "Escribir el resultado con su signo"] },
      { dificultad: 3, titulo: "Resolver una expresión con jerarquía de operaciones", descripcion: "Ordena los pasos del proceso.", pasos: ["Resolver lo que está dentro de paréntesis", "Calcular potencias si las hay", "Hacer multiplicaciones y divisiones de izquierda a derecha", "Terminar con sumas y restas"] }
    ]
  },

  "matematicas--numeracion--c4": {
    nombre: "Potencias, raíces y notación científica",
    preguntas: [
      { dificultad: 1, enunciado: "¿Cuánto es 2⁵?", opciones: ["32", "10", "16", "25"], correcta: 0 },
      { dificultad: 1, enunciado: "¿Cuánto es √81?", opciones: ["9", "81", "8", "40,5"], correcta: 0 },
      { dificultad: 1, enunciado: "¿Cuánto es 5² · 5³?", opciones: ["5⁵", "5⁶", "25⁵", "5¹"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Cuál es la notación científica de 4000?", opciones: ["4 × 10³", "40 × 10²", "4 × 10⁴", "0,4 × 10³"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Cuánto es √144?", opciones: ["12", "14", "72", "121"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Cuánto es (3²)²?", opciones: ["81", "27", "36", "9"], correcta: 0 },
      { dificultad: 3, enunciado: "El viaje Bogotá-Girardot mide unos 240 000 metros. En notación científica es:", opciones: ["2,4 × 10⁵ m", "24 × 10⁴ m", "2,4 × 10⁶ m", "0,24 × 10⁶ m"], correcta: 0 },
      { dificultad: 3, enunciado: "Un tablero cuadrado tiene 289 casillas. ¿Cuántas casillas mide cada lado?", opciones: ["17", "14", "19", "72"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Cuánto es 2⁻³?", opciones: ["1/8", "−8", "8", "−1/8"], correcta: 0 }
    ],
    retos: [
      { dificultad: 2, titulo: "Multiplicar potencias de igual base", descripcion: "Ordena los pasos del proceso.", pasos: ["Confirmar que las dos bases son iguales", "Copiar la base que se repite", "Sumar los exponentes", "Calcular el valor final si hace falta"] },
      { dificultad: 3, titulo: "Pasar un número grande a notación científica", descripcion: "Ordena los pasos del proceso.", pasos: ["Ubicar la coma decimal al final del número", "Moverla hasta dejar una cifra entera", "Contar cuántas posiciones se movió", "Escribir el número entre 1 y 10 por 10 elevado a ese conteo"] }
    ]
  },

  "matematicas--numeracion--c5": {
    nombre: "Logaritmos, progresiones y sucesiones",
    preguntas: [
      { dificultad: 1, enunciado: "¿Cuánto es log₂(16)?", opciones: ["4", "8", "2", "16"], correcta: 0 },
      { dificultad: 1, enunciado: "En la sucesión 3, 7, 11, 15, ... ¿cuál es el término siguiente?", opciones: ["19", "17", "20", "18"], correcta: 0 },
      { dificultad: 1, enunciado: "¿Cuánto es log₁₀(1000)?", opciones: ["3", "10", "100", "30"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Cuál es el término general de la sucesión 2, 5, 8, 11, ...?", opciones: ["3n − 1", "3n + 1", "2n + 3", "3n − 2"], correcta: 0 },
      { dificultad: 2, enunciado: "Sabiendo que log(5) + log(20) = log(x), ¿cuánto vale x?", opciones: ["100", "25", "15", "20"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Cuánto vale la suma 1 + 2 + 3 + ... + 10?", opciones: ["55", "50", "100", "110"], correcta: 0 },
      { dificultad: 3, enunciado: "Una colonia de bacterias se duplica cada hora y al inicio hay 1. ¿Cuántas hay a las 10 horas?", opciones: ["1024", "512", "2048", "100"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Cuánto es log₂(32) − log₂(4)?", opciones: ["3", "8", "5", "2"], correcta: 0 },
      { dificultad: 3, enunciado: "En una progresión aritmética el primer término es 5 y la diferencia es 3. ¿Cuánto vale el término 12?", opciones: ["38", "41", "35", "36"], correcta: 0 }
    ],
    retos: [
      { dificultad: 2, titulo: "Hallar el término n de una progresión aritmética", descripcion: "Ordena los pasos del proceso.", pasos: ["Identificar el primer término a₁", "Identificar la diferencia d", "Aplicar la fórmula aₙ = a₁ + (n − 1)·d", "Simplificar la operación"] },
      { dificultad: 3, titulo: "Resolver una ecuación logarítmica", descripcion: "Ordena los pasos del proceso.", pasos: ["Exigir que los argumentos sean positivos", "Aplicar las propiedades de los logaritmos", "Reescribir la ecuación en forma exponencial", "Despejar la incógnita", "Verificar la solución en la ecuación original"] }
    ]
  },

  // ============ PENSAMIENTO VARIACIONAL ============
  "matematicas--variacional--c1": {
    nombre: "Patrones y series con figuras y números",
    preguntas: [
      { dificultad: 1, enunciado: "Se repite: bola roja, bola azul, bola roja, bola azul... ¿Cuál sigue?", opciones: ["bola azul", "bola roja", "bola verde", "bola amarilla"], correcta: 0 },
      { dificultad: 1, enunciado: "Dibujos: círculo, cuadrado, círculo, cuadrado... ¿Qué figura sigue?", opciones: ["cuadrado", "círculo", "triángulo", "estrella"], correcta: 0 },
      { dificultad: 1, enunciado: "¿Qué número sigue: 2, 4, 6, 8...?", opciones: ["10", "9", "12", "7"], correcta: 0 },
      { dificultad: 2, enunciado: "Cuento de 5 en 5: 5, 10, 15... ¿Qué número sigue?", opciones: ["20", "17", "25", "16"], correcta: 0 },
      { dificultad: 2, enunciado: "Pego 2 estrellas, luego 4, luego 6. ¿Cuántas estrellas en el cuarto dibujo?", opciones: ["8", "6", "10", "7"], correcta: 0 },
      { dificultad: 2, enunciado: "Cuento hacia atrás de 5 en 5: 20, 15, 10... ¿Qué número sigue?", opciones: ["5", "0", "8", "12"], correcta: 0 },
      { dificultad: 3, enunciado: "Ana pega 3 stickers cada día. Al tercer día tiene 9. ¿Cuántos tendrá al cuarto día?", opciones: ["12", "10", "9", "16"], correcta: 0 },
      { dificultad: 3, enunciado: "Completé el patrón: 3, 6, 9, __, 15. ¿Qué número falta?", opciones: ["12", "11", "13", "10"], correcta: 0 },
      { dificultad: 3, enunciado: "Las sillas se acomodan así: 4, 8, 12, 16. ¿De cuánto en cuánto avanza el patrón?", opciones: ["4", "2", "6", "8"], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Seguir un patrón de figuras", descripcion: "Ordena los pasos.", pasos: ["Miro las figuras que ya están", "Descubro cuál parte se repite", "Dibujo la figura que sigue"] },
      { dificultad: 3, titulo: "Descubrir de cuánto en cuánto sube un patrón", descripcion: "Ordena los pasos.", pasos: ["Leo los números en orden", "Cuento los saltos de uno al siguiente", "Repito el salto para hallar el que sigue"] }
    ]
  },

  "matematicas--variacional--c2": {
    nombre: "Patrones numéricos, equivalencias y la balanza",
    preguntas: [
      { dificultad: 1, enunciado: "Patrón: 5, 10, 15, 20. ¿De cuánto en cuánto sube?", opciones: ["5", "10", "4", "2"], correcta: 0 },
      { dificultad: 1, enunciado: "En una balanza equilibrada, 2 mangos pesan como 6 naranjas. 1 mango pesa como:", opciones: ["3 naranjas", "2 naranjas", "6 naranjas", "4 naranjas"], correcta: 0 },
      { dificultad: 1, enunciado: "¿Qué número hay que sumarle a 37 para llegar a 40?", opciones: ["3", "7", "13", "40"], correcta: 0 },
      { dificultad: 2, enunciado: "Patrón: 1, 3, 6, 10... los saltos crecen. ¿Qué número sigue?", opciones: ["15", "13", "12", "14"], correcta: 0 },
      { dificultad: 2, enunciado: "En la balanza, 2 panes pesan 300 g. ¿Cuánto pesa 1 pan?", opciones: ["150 g", "300 g", "75 g", "600 g"], correcta: 0 },
      { dificultad: 2, enunciado: "Máquina de patrones: entra 4 sale 8; entra 5 sale 10; entra 7 sale 14. ¿Qué hace?", opciones: ["multiplicar por 2", "sumar 4", "sumar 2", "multiplicar por 4"], correcta: 0 },
      { dificultad: 3, enunciado: "Camila ahorra 500 pesos cada semana. ¿Cuánto tendrá en 6 semanas?", opciones: ["3000 pesos", "506 pesos", "600 pesos", "3600 pesos"], correcta: 0 },
      { dificultad: 3, enunciado: "Luis junto con su mamá suman 45 años. Su mamá tiene 30. ¿Cuántos años tiene Luis?", opciones: ["15", "25", "30", "75"], correcta: 0 },
      { dificultad: 3, enunciado: "Con palitos armo cuadrados: 1 cuadrado usa 4, 2 usan 7, 3 usan 10. ¿Cuántos palitos para 5?", opciones: ["16", "15", "20", "13"], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Encontrar la regla de un patrón de números", descripcion: "Ordena los pasos del proceso.", pasos: ["Escribo los números del patrón en orden", "Calculo de cuánto en cuánto suben", "Digo la regla con mis palabras", "Pruebo la regla con el último número"] },
      { dificultad: 3, titulo: "Equilibrar una balanza", descripcion: "Ordena los pasos del proceso.", pasos: ["Leo qué hay en cada plato de la balanza", "Descubro cuánto sobra o falta en un lado", "Quito o agrego lo mismo en los dos platos", "Verifico que la balanza quede recta"] }
    ]
  },

  "matematicas--variacional--c3": {
    nombre: "Expresiones algebraicas y ecuaciones de un paso",
    preguntas: [
      { dificultad: 1, enunciado: "Si x + 5 = 12, ¿cuánto vale x?", opciones: ["7", "17", "5", "12"], correcta: 0 },
      { dificultad: 1, enunciado: "Si 3x = 18, ¿cuánto vale x?", opciones: ["6", "15", "21", "54"], correcta: 0 },
      { dificultad: 1, enunciado: "¿Cómo se escribe «el doble de un número n»?", opciones: ["2n", "n + 2", "n/2", "n²"], correcta: 0 },
      { dificultad: 2, enunciado: "Resuelve la ecuación 2x + 3 = 11.", opciones: ["x = 4", "x = 7", "x = 5", "x = 3"], correcta: 0 },
      { dificultad: 2, enunciado: "Resuelve la ecuación x/4 = 5.", opciones: ["x = 20", "x = 9", "x = 1", "x = 4"], correcta: 0 },
      { dificultad: 2, enunciado: "Si x = 3, ¿cuánto vale el valor de 2x² − 1?", opciones: ["17", "11", "35", "18"], correcta: 0 },
      { dificultad: 3, enunciado: "La edad del papá de Juana es el triple de la edad de ella; él tiene 42 años. ¿Qué ecuación sirve para hallar la edad de Juana?", opciones: ["3x = 42", "x + 3 = 42", "42x = 3", "x/3 = 42"], correcta: 0 },
      { dificultad: 3, enunciado: "El perímetro de un cuadrado es 28 cm. ¿Qué ecuación representa el lado l?", opciones: ["4l = 28", "l² = 28", "l + 4 = 28", "2l = 28"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Cuánto vale x en la ecuación x − 3 + 5 = 10?", opciones: ["x = 8", "x = 12", "x = 2", "x = 18"], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Resolver una ecuación de un paso", descripcion: "Ordena los pasos del proceso.", pasos: ["Observar qué operación acompaña a la incógnita", "Aplicar la operación inversa en los dos lados", "Aislar la incógnita", "Comprobar el valor en la ecuación"] },
      { dificultad: 3, titulo: "Traducir un problema del enunciado a ecuación", descripcion: "Ordena los pasos del proceso.", pasos: ["Elegir una letra para el dato desconocido", "Expresar las demás cantidades con esa letra", "Igualar la expresión según el dato del problema", "Resolver la ecuación y responder la pregunta"] }
    ]
  },

  "matematicas--variacional--c4": {
    nombre: "Productos notables, factorización y ecuaciones cuadráticas",
    preguntas: [
      { dificultad: 1, enunciado: "Desarrolla el producto notable (x + 4)².", opciones: ["x² + 8x + 16", "x² + 16", "x² + 4x + 16", "x² + 8x + 8"], correcta: 0 },
      { dificultad: 1, enunciado: "Factoriza la diferencia de cuadrados x² − 9.", opciones: ["(x + 3)(x − 3)", "(x − 3)²", "(x + 9)(x − 1)", "(x + 3)²"], correcta: 0 },
      { dificultad: 1, enunciado: "Multiplica (x + 2)(x + 3).", opciones: ["x² + 5x + 6", "x² + 6x + 5", "x² + 5", "x² + 6"], correcta: 0 },
      { dificultad: 2, enunciado: "Factoriza el trinomio x² + 7x + 12.", opciones: ["(x + 3)(x + 4)", "(x + 2)(x + 6)", "(x + 1)(x + 12)", "(x + 4)(x + 4)"], correcta: 0 },
      { dificultad: 2, enunciado: "Desarrolla (2x − 5)².", opciones: ["4x² − 20x + 25", "4x² − 25", "4x² − 20x − 25", "2x² − 20x + 25"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Cuáles son las soluciones de x² − 5x + 6 = 0?", opciones: ["x = 2 y x = 3", "x = −2 y x = −3", "x = 1 y x = 6", "x = 2 y x = −3"], correcta: 0 },
      { dificultad: 3, enunciado: "El área de un rectángulo es x² + 5x y su base mide x. ¿Cuánto mide la altura?", opciones: ["x + 5", "x + 3", "5x", "x² + 5"], correcta: 0 },
      { dificultad: 3, enunciado: "Una pelota lanzada desde un techo sigue h(t) = 20 − 5t² (metros). ¿En cuántos segundos toca el suelo?", opciones: ["2 segundos", "4 segundos", "1 segundo", "20 segundos"], correcta: 0 },
      { dificultad: 3, enunciado: "Si (x − 3)² = x² − kx + 9, ¿cuánto vale k?", opciones: ["6", "3", "9", "12"], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Expandir el cuadrado de un binomio", descripcion: "Ordena los pasos del proceso.", pasos: ["Elevar el primer término al cuadrado", "Multiplicar 2 veces ambos términos", "Elevar el segundo término al cuadrado", "Sumar los tres resultados"] },
      { dificultad: 3, titulo: "Resolver una ecuación cuadrática por factorización", descripcion: "Ordena los pasos del proceso.", pasos: ["Llevar la ecuación a la forma ax² + bx + c = 0", "Buscar dos números que sumen b y multipliquen a·c", "Reescribir el trinomio como producto de factores", "Igualar cada factor a cero", "Verificar las dos soluciones en la ecuación"] }
    ]
  },

  "matematicas--variacional--c5": {
    nombre: "Funciones, límites y derivadas",
    preguntas: [
      { dificultad: 1, enunciado: "Si f(x) = 2x + 1, ¿cuánto vale f(3)?", opciones: ["7", "6", "5", "9"], correcta: 0 },
      { dificultad: 1, enunciado: "¿Cuál es la derivada de f(x) = x³?", opciones: ["3x²", "x²", "3x", "x⁴/4"], correcta: 0 },
      { dificultad: 1, enunciado: "¿Cuánto es el límite de (x + 5) cuando x tiende a 2?", opciones: ["7", "5", "2", "10"], correcta: 0 },
      { dificultad: 2, enunciado: "¿En qué puntos la función f(x) = x² − 3x corta el eje x?", opciones: ["En 0 y en 3", "En 0 y en −3", "Solo en 3", "En 1 y en 3"], correcta: 0 },
      { dificultad: 2, enunciado: "La línea recta y = 2x + 3 tiene pendiente de valor:", opciones: ["2", "3", "5", "−2"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Cuánto es el límite de (x² − 1)/(x − 1) cuando x tiende a 1?", opciones: ["2", "0", "1", "no existe"], correcta: 0 },
      { dificultad: 3, enunciado: "Fabricar x camisetas cuesta 200x + 5000 pesos y cada una se vende en 400. ¿Cuántas hay que vender para no perder?", opciones: ["25", "12", "50", "10"], correcta: 0 },
      { dificultad: 3, enunciado: "Si f(x) = x², ¿cuál es la pendiente de la recta tangente en x = 4?", opciones: ["8", "16", "4", "2"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Cuánto es el límite de (3x + 6)/(x + 2) cuando x tiende a −2?", opciones: ["3", "0", "no existe", "−2"], correcta: 0 }
    ],
    retos: [
      { dificultad: 2, titulo: "Derivar un polinomio término a término", descripcion: "Ordena los pasos del proceso.", pasos: ["Bajar el exponente y multiplicarlo por el coeficiente", "Restar 1 al exponente de cada término", "Convertir la constante en 0", "Reunir los términos y simplificar"] },
      { dificultad: 3, titulo: "Resolver un problema de optimización con derivadas", descripcion: "Ordena los pasos del proceso.", pasos: ["Escribir la función que se quiere maximizar o minimizar", "Reducir el problema a una sola variable si hace falta", "Derivar la función", "Igualar la derivada a cero", "Resolver la ecuación para hallar el punto crítico", "Verificar que ese punto da el máximo o mínimo pedido"] }
    ]
  },

  // ============ PENSAMIENTO ESPACIAL ============
  "matematicas--espacial--c1": {
    nombre: "Formas del entorno: lados, vértices y conteo",
    preguntas: [
      { dificultad: 1, enunciado: "¿Cuántos lados tiene un triángulo?", opciones: ["3", "4", "2", "5"], correcta: 0 },
      { dificultad: 1, enunciado: "¿Cuántas esquinas (vértices) tiene un cuadrado?", opciones: ["4", "3", "5", "2"], correcta: 0 },
      { dificultad: 1, enunciado: "Una tapa redonda de mesa tiene:", opciones: ["cero lados rectos", "un lado recto", "dos lados rectos", "cuatro lados rectos"], correcta: 0 },
      { dificultad: 2, enunciado: "La cara de la caja de zapatos tiene forma de:", opciones: ["rectángulo", "triángulo", "círculo", "estrella"], correcta: 0 },
      { dificultad: 2, enunciado: "Trazo una línea diagonal en un cuadrado. ¿Cuántos triángulos se forman?", opciones: ["2", "1", "3", "4"], correcta: 0 },
      { dificultad: 2, enunciado: "Cuento los lados de un cuadrado más los lados de un triángulo. ¿Cuántos salen?", opciones: ["7", "6", "8", "12"], correcta: 0 },
      { dificultad: 3, enunciado: "En el patio están 5 mesas cuadradas. ¿Cuántos lados suman todas?", opciones: ["20", "15", "25", "10"], correcta: 0 },
      { dificultad: 3, enunciado: "Con 12 palitos armamos triángulos separados. ¿Cuántos triángulos salen?", opciones: ["4", "3", "6", "2"], correcta: 0 },
      { dificultad: 3, enunciado: "La ventana del salón tiene 4 esquinas. ¿Qué forma puede tener?", opciones: ["rectángulo", "triángulo", "círculo", "ninguna de esas"], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Contar los lados de una figura", descripcion: "Ordena los pasos.", pasos: ["Toco la figura con el dedo", "Cuento cada línea recta una sola vez", "Digo en voz alta el número de lados"] },
      { dificultad: 3, titulo: "Armar una figura con palitos", descripcion: "Ordena los pasos.", pasos: ["Elijo la figura que voy a formar", "Pongo un palito en cada lado", "Reviso que las esquinas queden cerradas"] }
    ]
  },

  "matematicas--espacial--c2": {
    nombre: "Perímetro y área de rectángulos y cuadrados",
    preguntas: [
      { dificultad: 1, enunciado: "Un cuadrado mide cinco centímetros por lado. ¿Cuánto mide su perímetro?", opciones: ["20 cm", "25 cm", "10 cm", "15 cm"], correcta: 0 },
      { dificultad: 1, enunciado: "Un rectángulo mide 6 cm de largo, 3 cm de ancho. ¿Cuánto mide su área?", opciones: ["18 cm²", "9 cm²", "27 cm²", "12 cm²"], correcta: 0 },
      { dificultad: 1, enunciado: "¿Cuál es el área de un cuadrado de 4 cm de lado?", opciones: ["16 cm²", "8 cm²", "12 cm²", "20 cm²"], correcta: 0 },
      { dificultad: 2, enunciado: "Un patio cuadrado mide siete metros por lado. ¿Cuánto mide su área?", opciones: ["49 m²", "28 m²", "14 m²", "42 m²"], correcta: 0 },
      { dificultad: 2, enunciado: "Un rectángulo mide 16 cm de perímetro. El largo mide 5 cm. ¿Cuánto mide el ancho?", opciones: ["3 cm", "4 cm", "6 cm", "11 cm"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Cuántos baldosines de a un metro caben en un piso de 3 m por 4 m?", opciones: ["12", "7", "4", "14"], correcta: 0 },
      { dificultad: 3, enunciado: "Pongo cerca alrededor de una huerta de 8 m por 5 m. El metro de alambre cuesta $2000. ¿Cuánto gasto?", opciones: ["$52 000", "$40 000", "$66 000", "$26 000"], correcta: 0 },
      { dificultad: 3, enunciado: "Uno dos cuadrados de 3 cm de lado para formar un rectángulo. ¿Cuánto mide su perímetro?", opciones: ["18 cm", "24 cm", "12 cm", "36 cm"], correcta: 0 },
      { dificultad: 3, enunciado: "Completé de cinta el borde de un cartel de 10 cm por 15 cm. ¿Cuántos cm de cinta usé?", opciones: ["50 cm", "150 cm", "25 cm", "35 cm"], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Calcular el perímetro de un rectángulo", descripcion: "Ordena los pasos del proceso.", pasos: ["Medir los cuatro lados de la figura", "Recordar que los lados opuestos son iguales", "Sumar los cuatro números", "Escribir la respuesta con su unidad (cm o m)"] },
      { dificultad: 3, titulo: "Calcular el área de un rectángulo", descripcion: "Ordena los pasos del proceso.", pasos: ["Medir el largo del rectángulo", "Medir el ancho del rectángulo", "Multiplicar el largo por el ancho", "Expresar el resultado en unidades cuadradas"] }
    ]
  },

  "matematicas--espacial--c3": {
    nombre: "Ángulos, triángulos y cuadriláteros",
    preguntas: [
      { dificultad: 1, enunciado: "¿Cuánto suman los ángulos internos de un triángulo?", opciones: ["180°", "360°", "90°", "270°"], correcta: 0 },
      { dificultad: 1, enunciado: "Un ángulo que mide exactamente 90° se llama ángulo:", opciones: ["recto", "agudo", "obtuso", "llano"], correcta: 0 },
      { dificultad: 1, enunciado: "Un triángulo con sus tres lados iguales se llama:", opciones: ["equilátero", "isósceles", "escaleno", "rectángulo"], correcta: 0 },
      { dificultad: 2, enunciado: "Dos ángulos de un triángulo miden 60° y 70°. ¿Cuánto mide el tercero?", opciones: ["50°", "60°", "40°", "130°"], correcta: 0 },
      { dificultad: 2, enunciado: "Un ángulo que mide 135° se clasifica como:", opciones: ["obtuso", "recto", "agudo", "llano"], correcta: 0 },
      { dificultad: 2, enunciado: "En un paralelogramo, un ángulo interno mide 70°. ¿Cuánto mide el ángulo vecino?", opciones: ["110°", "70°", "90°", "130°"], correcta: 0 },
      { dificultad: 3, enunciado: "Los ángulos interiores de un cuadrilátero suman:", opciones: ["360°", "180°", "270°", "540°"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Cuánto mide el ángulo complementario de 35°?", opciones: ["55°", "65°", "145°", "45°"], correcta: 0 },
      { dificultad: 3, enunciado: "Un triángulo isósceles tiene un ángulo de 100° entre los lados iguales. ¿Cuánto mide cada uno de los otros dos?", opciones: ["40°", "50°", "80°", "30°"], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Clasificar un ángulo según su medida", descripcion: "Ordena los pasos del proceso.", pasos: ["Estimar con la vista si el ángulo está muy abierto", "Medir el ángulo con el transportador", "Comparar la medida con 90° y con 180°", "Nombrar el ángulo como agudo, recto u obtuso"] },
      { dificultad: 3, titulo: "Hallar el ángulo faltante de un triángulo", descripcion: "Ordena los pasos del proceso.", pasos: ["Sumar las medidas de los dos ángulos conocidos", "Recordar que los tres ángulos suman 180°", "Restar esa suma de 180°", "Comprobar que los tres ángulos den 180°"] }
    ]
  },

  "matematicas--espacial--c4": {
    nombre: "Teorema de Pitágoras y figuras compuestas",
    preguntas: [
      { dificultad: 1, enunciado: "En un triángulo rectángulo, ¿cómo se llama el lado más largo?", opciones: ["la hipotenusa", "el cateto", "la mediana", "la altura"], correcta: 0 },
      { dificultad: 1, enunciado: "El teorema de Pitágoras solo se aplica en triángulos:", opciones: ["rectángulos", "equiláteros", "obtusángulos", "isósceles"], correcta: 0 },
      { dificultad: 1, enunciado: "Si los catetos miden 3 y 4, ¿cuánto mide la hipotenusa?", opciones: ["5", "6", "7", "12"], correcta: 0 },
      { dificultad: 2, enunciado: "La hipotenusa mide 13 cm y un cateto mide 5 cm. ¿Cuánto mide el otro cateto?", opciones: ["12 cm", "8 cm", "10 cm", "18 cm"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Cuánto mide la diagonal de un cuadrado de 5 cm de lado?", opciones: ["5√2 cm", "5√3 cm", "10 cm", "25 cm"], correcta: 0 },
      { dificultad: 2, enunciado: "Uno un rectángulo de 6 x 4 con otro de 6 x 2 por su lado de 6. ¿Cuál es el área total?", opciones: ["36 u²", "48 u²", "28 u²", "40 u²"], correcta: 0 },
      { dificultad: 3, enunciado: "Una escalera de 10 m se apoya en la base de un muro a 8 m de la pared. ¿Qué altura alcanza?", opciones: ["6 m", "7 m", "5 m", "8 m"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Cuál es la distancia entre los puntos (1, 2) y (4, 6)?", opciones: ["5", "7", "√7", "25"], correcta: 0 },
      { dificultad: 3, enunciado: "Un lote rectangular de 20 m por 15 m tiene un camino diagonal. El metro lineal de camino cuesta $4000. ¿Cuánto cuesta?", opciones: ["$100 000", "$80 000", "$140 000", "$125 000"], correcta: 0 }
    ],
    retos: [
      { dificultad: 2, titulo: "Hallar la hipotenusa con Pitágoras", descripcion: "Ordena los pasos del proceso.", pasos: ["Confirmar que el triángulo es rectángulo", "Elevar al cuadrado la medida de cada cateto", "Sumar los dos cuadrados", "Extraer la raíz cuadrada del resultado"] },
      { dificultad: 3, titulo: "Calcular el área de una figura compuesta", descripcion: "Ordena los pasos del proceso.", pasos: ["Dividir la figura en partes conocidas", "Calcular el área de cada parte", "Sumar las áreas de las partes", "Restar las partes que se repiten o sobran", "Expresar el total en unidades cuadradas"] }
    ]
  },

  "matematicas--espacial--c5": {
    nombre: "Geometría analítica y trigonometría",
    preguntas: [
      { dificultad: 1, enunciado: "¿Cuál es la distancia del origen (0, 0) al punto (3, 4)?", opciones: ["5", "7", "12", "25"], correcta: 0 },
      { dificultad: 1, enunciado: "¿Cuánto vale sen 30°?", opciones: ["1/2", "√2/2", "√3/2", "1"], correcta: 0 },
      { dificultad: 1, enunciado: "En la recta y = 2x + 3, ¿cuál es la pendiente?", opciones: ["2", "3", "5", "−2"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Cuál es la pendiente de la recta que pasa por (1, 1) y (3, 5)?", opciones: ["2", "1", "4", "1/2"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Cuánto vale cos 60°?", opciones: ["1/2", "√3/2", "√2/2", "1"], correcta: 0 },
      { dificultad: 2, enunciado: "¿En qué punto la recta y = 3x − 6 corta el eje x?", opciones: ["(2, 0)", "(0, 2)", "(3, 0)", "(−2, 0)"], correcta: 0 },
      { dificultad: 3, enunciado: "Desde el pie de un mango, a 20 m, se ve la copa con un ángulo de elevación de 60°. ¿Cuánto mide el árbol?", opciones: ["20√3 m", "20/√3 m", "10√3 m", "40 m"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Cuál es el punto medio del segmento con extremos A(2, 3) y B(6, 7)?", opciones: ["(4, 5)", "(8, 10)", "(3, 4)", "(2, 2)"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Cuál es la ecuación de la circunferencia de centro (0, 0) y radio 5?", opciones: ["x² + y² = 25", "x² + y² = 5", "x + y = 25", "x² − y² = 25"], correcta: 0 }
    ],
    retos: [
      { dificultad: 2, titulo: "Hallar la ecuación de la recta que pasa por dos puntos", descripcion: "Ordena los pasos del proceso.", pasos: ["Calcular la pendiente con m = (y₂ − y₁) / (x₂ − x₁)", "Sustituir la pendiente y un punto en y = mx + b", "Despejar el intercepto b", "Escribir la ecuación completa", "Verificar que el otro punto la cumpla"] },
      { dificultad: 3, titulo: "Resolver un triángulo rectángulo con trigonometría", descripcion: "Ordena los pasos del proceso.", pasos: ["Identificar el ángulo conocido y sus lados adyacente y opuesto", "Elegir la razón trigonométrica adecuada", "Plantear la ecuación con esa razón", "Despejar el lado que falta", "Calcular el valor numérico", "Comprobar el resultado con Pitágoras"] }
    ]
  },

  // ============ PENSAMIENTO MÉTRICO ============
  "matematicas--medida--c1": {
    nombre: "Comparaciones y medidas con el cuerpo",
    preguntas: [
      { dificultad: 1, enunciado: "Para medir el salón uso pasos; para medir un lápiz uso:", opciones: ["dedos", "pasos", "brazos", "piernas"], correcta: 0 },
      { dificultad: 1, enunciado: "La pulsera es más corta que la cinta. Entonces la cinta es más:", opciones: ["larga", "corta", "pesada", "liviana"], correcta: 0 },
      { dificultad: 1, enunciado: "¿Cuál de estas cosas pesa más?", opciones: ["un balón de fútbol", "una pluma", "un pedazo de papel", "una hoja seca"], correcta: 0 },
      { dificultad: 2, enunciado: "Mi mano mide 4 dedos de ancho. ¿Cuántas manos caben en la mesa de 20 dedos?", opciones: ["5 manos", "4 manos", "16 manos", "10 manos"], correcta: 0 },
      { dificultad: 2, enunciado: "Juan da 10 pasos hasta el tablero; Marta da 8 pasos iguales. ¿Quién está más lejos?", opciones: ["Juan", "Marta", "Están igual", "Ninguno"], correcta: 0 },
      { dificultad: 2, enunciado: "La liga mide 8 palmos; la cinta mide 12 palmos. ¿Cuál es más larga?", opciones: ["la cinta", "la liga", "Las dos son iguales", "No se puede saber"], correcta: 0 },
      { dificultad: 3, enunciado: "Sara midió su libro: 5 dedos de largo. Un dedo mide 2 cm. ¿Cuánto mide el libro?", opciones: ["10 cm", "7 cm", "5 cm", "12 cm"], correcta: 0 },
      { dificultad: 3, enunciado: "Camino por el patio dando 8 saltos de 2 pies. ¿Cuántos pies mide el patio?", opciones: ["16", "10", "8", "24"], correcta: 0 },
      { dificultad: 3, enunciado: "Con el mismo vaso: un jarro llena 6 vasos; el otro llena 4. ¿Cuál jarro es más grande?", opciones: ["el primero", "el segundo", "son iguales", "no se puede saber"], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Medir un objeto con palmos", descripcion: "Ordena los pasos.", pasos: ["Empiezo en un extremo del objeto", "Marco con el dedo donde termina cada palmo", "Cuento cuántos palmos caben"] },
      { dificultad: 3, titulo: "Comparar el peso de dos objetos", descripcion: "Ordena los pasos.", pasos: ["Sostengo un objeto en cada mano", "Miro cuál mano baja más", "Digo cuál pesa más sin adivinar"] }
    ]
  },

  "matematicas--medida--c2": {
    nombre: "Unidades de longitud, tiempo y dinero",
    preguntas: [
      { dificultad: 1, enunciado: "¿Cuántos centímetros tiene 1 metro?", opciones: ["100 cm", "10 cm", "1000 cm", "50 cm"], correcta: 0 },
      { dificultad: 1, enunciado: "¿Cuántos minutos tiene 1 hora?", opciones: ["60", "100", "30", "24"], correcta: 0 },
      { dificultad: 1, enunciado: "¿Cuántos días tiene una semana?", opciones: ["7", "5", "10", "12"], correcta: 0 },
      { dificultad: 2, enunciado: "Un refresco cuesta $1800. Pago con un billete de $2000. ¿Cuánto me devuelven?", opciones: ["$200", "$20 pesos", "$2000", "$180"], correcta: 0 },
      { dificultad: 2, enunciado: "El bus sale a las 8:00 de la mañana. Son las 7:45. ¿Cuánto falta?", opciones: ["15 minutos", "5 minutos", "45 minutos", "25 minutos"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Cuántos centímetros son 2 metros más 30 centímetros?", opciones: ["230 cm", "2030 cm", "3020 cm", "20 cm"], correcta: 0 },
      { dificultad: 3, enunciado: "De Bogotá a Girardot son 120 km. El bus ya recorrió 75 km. ¿Cuánto falta?", opciones: ["45 km", "35 km", "55 km", "195 km"], correcta: 0 },
      { dificultad: 3, enunciado: "Cada jugo de durazno trae 250 ml. ¿Cuántos ml suman 8 jugos?", opciones: ["2000 ml", "250 ml", "800 ml", "2500 ml"], correcta: 0 },
      { dificultad: 3, enunciado: "La clase empezó a las 7:30, terminó a las 11:30. ¿Cuánto duró?", opciones: ["4 horas", "3 horas", "5 horas", "11 horas"], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Pasar metros a centímetros", descripcion: "Ordena los pasos del proceso.", pasos: ["Recordar que 1 metro son 100 centímetros", "Multiplicar los metros por 100", "Sumar los centímetros que ya había", "Escribir la medida en centímetros"] },
      { dificultad: 3, titulo: "Calcular el tiempo transcurrido entre dos horas", descripcion: "Ordena los pasos del proceso.", pasos: ["Anotar la hora de inicio y la hora de final", "Contar primero las horas completas", "Contar después los minutos que faltan", "Sumar horas y minutos en una sola respuesta"] }
    ]
  },

  "matematicas--medida--c3": {
    nombre: "Razón, proporción y porcentaje",
    preguntas: [
      { dificultad: 1, enunciado: "¿Cuánto es el 15% de 200?", opciones: ["30", "15", "20", "45"], correcta: 0 },
      { dificultad: 1, enunciado: "En una bandeja hay 3 manzanas y 5 naranjas. ¿Cuál es la razón de manzanas a naranjas?", opciones: ["3/5", "5/3", "3/8", "8/3"], correcta: 0 },
      { dificultad: 1, enunciado: "El 25% de un todo equivale a la fracción:", opciones: ["1/4", "1/2", "1/3", "1/5"], correcta: 0 },
      { dificultad: 2, enunciado: "3 lápices cuestan $4500. ¿Cuánto cuestan 5 lápices iguales?", opciones: ["$7500", "$6000", "$9000", "$8000"], correcta: 0 },
      { dificultad: 2, enunciado: "Un suéter cuesta $60 000 con un descuento del 10%. ¿Cuánto se paga?", opciones: ["$54 000", "$59 000", "$48 000", "$66 000"], correcta: 0 },
      { dificultad: 2, enunciado: "En una proporción, las dos razones que se igualan deben ser:", opciones: ["equivalentes", "siempre distintas", "la mitad una de otra", "mayores que uno"], correcta: 0 },
      { dificultad: 3, enunciado: "Con 5 kg de papa pago $8500. ¿Cuánto pagaré por 8 kg al mismo precio?", opciones: ["$13 600", "$12 000", "$17 000", "$10 200"], correcta: 0 },
      { dificultad: 3, enunciado: "De 60 estudiantes, 45 pasaron la materia de matemáticas. ¿Qué porcentaje aprobó?", opciones: ["75%", "45%", "60%", "85%"], correcta: 0 },
      { dificultad: 3, enunciado: "Para 5 niños alcanzo con 200 ml de jugo. ¿Cuánto jugo necesito para 12 niños?", opciones: ["480 ml", "400 ml", "600 ml", "240 ml"], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Aplicar la regla de tres simple", descripcion: "Ordena los pasos del proceso.", pasos: ["Escribir la proporción con los datos del problema", "Multiplicar en diagonal los números conocidos", "Dividir entre el número que queda en diagonal", "Revisar que la respuesta tenga sentido"] },
      { dificultad: 3, titulo: "Calcular un porcentaje en una cuenta de tienda", descripcion: "Ordena los pasos del proceso.", pasos: ["Convertir el porcentaje en fracción de 100", "Multiplicar el precio por esa fracción", "Obtener así el valor del descuento", "Restar el descuento del precio original"] }
    ]
  },

  "matematicas--medida--c4": {
    nombre: "Proporcionalidad inversa, escala e interés simple",
    preguntas: [
      { dificultad: 1, enunciado: "Si 4 personas tardan 6 días en pintar una casa, ¿cuánto tardarán 8 personas al mismo ritmo?", opciones: ["3 días", "12 días", "2 días", "24 días"], correcta: 0 },
      { dificultad: 1, enunciado: "En un mapa a escala 1:100, un muro de 2 cm en el mapa mide en la realidad:", opciones: ["200 cm", "2 cm", "100 cm", "102 cm"], correcta: 0 },
      { dificultad: 1, enunciado: "En proporcionalidad inversa, cuando una magnitud aumenta, la otra:", opciones: ["disminuye en la misma proporción", "también aumenta", "queda igual", "se anula"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Cuánto se paga de interés simple por un capital de $2 000 000 al 5% mensual durante 3 meses?", opciones: ["$300 000", "$100 000", "$600 000", "$150 000"], correcta: 0 },
      { dificultad: 2, enunciado: "6 obreros tardan 12 días en un trabajo. ¿Cuánto tardarán 9 obreros iguales?", opciones: ["8 días", "18 días", "6 días", "16 días"], correcta: 0 },
      { dificultad: 2, enunciado: "En una maqueta, 1 cm representa 2 m reales. Un salón de 9 m mide en la maqueta:", opciones: ["4,5 cm", "18 cm", "7 cm", "11 cm"], correcta: 0 },
      { dificultad: 3, enunciado: "Un libro de $40 000 sube un 8% en el mercado. ¿Cuánto cuesta ahora?", opciones: ["$43 200", "$48 000", "$40 800", "$36 800"], correcta: 0 },
      { dificultad: 3, enunciado: "El área real de un lote es 300 m². En un plano a escala 1:1000, ¿cuántos cm² se dibujan?", opciones: ["30 cm²", "3 cm²", "300 cm²", "0,3 cm²"], correcta: 0 },
      { dificultad: 3, enunciado: "Un capital de $500 000 generó $90 000 de interés simple al 2% mensual. ¿Cuántos meses duró?", opciones: ["9 meses", "4,5 meses", "18 meses", "12 meses"], correcta: 0 }
    ],
    retos: [
      { dificultad: 2, titulo: "Resolver con proporcionalidad inversa", descripcion: "Ordena los pasos del proceso.", pasos: ["Confirmar que al subir una magnitud la otra baja", "Multiplicar las dos magnitudes conocidas de un par", "Igualar ese producto al otro par con la incógnita", "Despejar la incógnita dividiendo", "Revisar que el sentido del cambio sea lógico"] },
      { dificultad: 3, titulo: "Medir distancias reales usando una escala", descripcion: "Ordena los pasos del proceso.", pasos: ["Leer la escala del mapa como una razón", "Medir la distancia en el mapa", "Multiplicar esa medida por el número de la escala", "Convertir el resultado a metros o kilómetros", "Comparar con la respuesta esperada"] }
    ]
  },

  "matematicas--medida--c5": {
    nombre: "Modelación, optimización e interés compuesto",
    preguntas: [
      { dificultad: 1, enunciado: "¿Cuánto vale $1 000 000 al 1% de interés compuesto durante 2 años?", opciones: ["$1 020 100", "$1 020 000", "$1 210 000", "$1 002 010"], correcta: 0 },
      { dificultad: 1, enunciado: "La función de costo C(x) = 5000x describe el costo de x cuadernos. ¿Cuál es la variable dependiente?", opciones: ["el costo C", "la cantidad x", "el precio 5000", "el colegio"], correcta: 0 },
      { dificultad: 1, enunciado: "En el interés compuesto, a diferencia del simple, los intereses:", opciones: ["se suman al capital del periodo siguiente", "se retiran cada mes", "no se calculan", "bajan con el tiempo"], correcta: 0 },
      { dificultad: 2, enunciado: "El ingreso por venta de empanadas es I(x) = 8000 − |200 − 50x|. ¿En qué x el ingreso es máximo?", opciones: ["x = 4", "x = 200", "x = 50", "x = 8"], correcta: 0 },
      { dificultad: 2, enunciado: "$2 000 000 al 10% anual compuesto durante 2 años dan un total de:", opciones: ["$2 420 000", "$2 400 000", "$2 200 000", "$2 440 000"], correcta: 0 },
      { dificultad: 2, enunciado: "Una ventana rectangular con 10 m de marco: si x es el ancho, el área se modela con A(x) =", opciones: ["x(5 − x)", "x(10 − x)", "2x(5 − x)", "x(10 − 2x)"], correcta: 0 },
      { dificultad: 3, enunciado: "La población de un pueblo crece 2% anual con 5000 habitantes. En 3 años será cercana a:", opciones: ["5306", "5300", "5100", "5600"], correcta: 0 },
      { dificultad: 3, enunciado: "El costo de producir x camisetas es 4000x + 20 000; cada una se vende en 7000. ¿Cuántas se necesitan para empezar a ganar?", opciones: ["7", "6", "10", "5"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Cuál modelo representa mejor la altura de un cohete que sube rápido al principio y frena al caer?", opciones: ["una función cuadrática", "una función lineal", "una función constante", "una función paso"], correcta: 0 }
    ],
    retos: [
      { dificultad: 2, titulo: "Calcular el monto con interés compuesto", descripcion: "Ordena los pasos del proceso.", pasos: ["Identificar capital, tasa y número de periodos", "Escribir la fórmula M = C(1 + i)ⁿ", "Sustituir los valores del problema", "Calcular la potencia (1 + i)ⁿ", "Multiplicar por el capital inicial"] },
      { dificultad: 3, titulo: "Optimizar el área de una cerca con poco material", descripcion: "Ordena los pasos del proceso.", pasos: ["Dibujar la situación y nombrar las variables", "Expresar una variable en términos de la otra con el dato fijo", "Escribir la función que se quiere maximizar", "Derivar la función e igualar a cero", "Resolver la ecuación para hallar el punto crítico", "Confirmar con un gráfico que es un máximo"] }
    ]
  },

  // ============ PENSAMIENTO ALEATORIO (DATOS) ============
  "matematicas--datos--c1": {
    nombre: "Tablas de conteo y pictogramas",
    preguntas: [
      { dificultad: 1, enunciado: "La tabla dice: 5 manzanas, 3 peras. ¿Cuál fruta gana?", opciones: ["manzanas", "peras", "están iguales", "ninguna fruta"], correcta: 0 },
      { dificultad: 1, enunciado: "Cada carita del pictograma vale 2 niños. Son 3 caritas. ¿Cuántos niños son?", opciones: ["6", "5", "3", "8"], correcta: 0 },
      { dificultad: 1, enunciado: "Conté 4 pelotas azules, 1 roja. ¿De qué color tengo más?", opciones: ["azul", "rojo", "de los dos igual", "no se sabe"], correcta: 0 },
      { dificultad: 2, enunciado: "Gané 6 puntos; tu compañero hizo 2. ¿Cuántos puntos gané más?", opciones: ["4", "8", "3", "12"], correcta: 0 },
      { dificultad: 2, enunciado: "Cada dibujo vale 5 flores. La columna de rosas trae 2 dibujos. ¿Cuántas rosas son?", opciones: ["10", "7", "3", "15"], correcta: 0 },
      { dificultad: 2, enunciado: "La tabla trae fútbol 9 niños, natación 4. ¿Cuántos niños son en total?", opciones: ["13", "5", "12", "14"], correcta: 0 },
      { dificultad: 3, enunciado: "Pinto un cuadrito por cada 2 votos. Mi columna tiene 4 cuadritos. ¿Cuántos votos fueron?", opciones: ["8", "6", "4", "2"], correcta: 0 },
      { dificultad: 3, enunciado: "La tabla dice: 10 lectores el lunes, 5 el martes. ¿En qué día leyeron menos?", opciones: ["el martes", "el lunes", "leyeron igual", "no se puede saber"], correcta: 0 },
      { dificultad: 3, enunciado: "Contamos pájaros: 6 rojos, 4 azules, 6 amarillos. ¿Qué colores tienen la misma cantidad?", opciones: ["rojo y amarillo", "azul y rojo", "azul y amarillo", "ninguno repite"], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Leer una tabla de conteo", descripcion: "Ordena los pasos.", pasos: ["Miro el nombre de cada fila", "Leo el número que está al lado", "Comparo los números para ver cuál gana"] },
      { dificultad: 3, titulo: "Armar un pictograma", descripcion: "Ordena los pasos.", pasos: ["Cuento cada grupo de objetos", "Elijo un dibujo que valga varias unidades", "Pongo los dibujos en la columna correcta"] }
    ]
  },

  "matematicas--datos--c2": {
    nombre: "Gráficos de barras y promedio",
    preguntas: [
      { dificultad: 1, enunciado: "En el gráfico de barras: mango 8 votos, limón 9. ¿Cuál fruta ganó?", opciones: ["el limón", "el mango", "empataron", "ninguna fruta"], correcta: 0 },
      { dificultad: 1, enunciado: "Calcula el promedio de los datos 4, 6, 5.", opciones: ["5", "15", "6", "4"], correcta: 0 },
      { dificultad: 1, enunciado: "En una barra, cada cuadrito vale 10 libros. La barra tiene 4 cuadritos. ¿Cuántos libros son?", opciones: ["40", "14", "4", "30"], correcta: 0 },
      { dificultad: 2, enunciado: "Notas de Camila: 3, 5, 4. ¿Cuál es su promedio?", opciones: ["4", "5", "3", "12"], correcta: 0 },
      { dificultad: 2, enunciado: "El gráfico muestra 12 niños que juegan fútbol, 7 que juegan ajedrez. ¿Cuántos más juegan fútbol?", opciones: ["5", "6", "19", "4"], correcta: 0 },
      { dificultad: 2, enunciado: "Pregunté a 20 niños; la barra más alta tiene 9 votos. ¿Cuántos NO votaron por esa opción?", opciones: ["11", "9", "20", "2"], correcta: 0 },
      { dificultad: 3, enunciado: "El promedio de la familia es 30 años. Son 4 miembros. ¿Cuántos años suman todos?", opciones: ["120", "34", "7,5", "40"], correcta: 0 },
      { dificultad: 3, enunciado: "Anoté 20 °C, 25 °C, 16 °C durante tres días. ¿Cuál es el promedio?", opciones: ["20 °C", "25 °C", "16 °C", "19 °C"], correcta: 0 },
      { dificultad: 3, enunciado: "Todos los socios del club tienen 12 años. ¿Cuál es el promedio de edades?", opciones: ["12 años", "24 años", "6 años", "no se puede saber"], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Calcular el promedio de unas notas", descripcion: "Ordena los pasos del proceso.", pasos: ["Sumar todas las notas que tengo", "Contar cuántas notas son", "Dividir la suma entre esa cantidad", "Comparar el resultado con las notas originales"] },
      { dificultad: 3, titulo: "Construir un gráfico de barras con una tabla", descripcion: "Ordena los pasos del proceso.", pasos: ["Leer la tabla y elegir de cuánto en cuánto va la escala", "Dibujar una barra para cada categoría", "Hacer que cada barra llegue hasta su número", "Poner título y números al gráfico"] }
    ]
  },

  "matematicas--datos--c3": {
    nombre: "Media, mediana, moda y rango",
    preguntas: [
      { dificultad: 1, enunciado: "¿Cuál es la moda de los datos 2, 3, 3, 5?", opciones: ["3", "2", "5", "13"], correcta: 0 },
      { dificultad: 1, enunciado: "¿Cuál es el rango de los datos 4, 9, 2, 7?", opciones: ["7", "9", "2", "5"], correcta: 0 },
      { dificultad: 1, enunciado: "¿Cuál es la media de los datos 6, 6 y 6?", opciones: ["6", "18", "3", "12"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Cuál es la mediana de los datos 1, 4, 7, 9, 12?", opciones: ["7", "4", "9", "43"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Cuál es la media de las edades 8, 10 y 12?", opciones: ["10", "30", "8", "12"], correcta: 0 },
      { dificultad: 2, enunciado: "En los datos 1, 2, 2, 2, 9, la media es 4 y la mediana es 2. ¿Por qué la media sube tanto?", opciones: ["porque el 9 la arrastra hacia arriba", "porque hay demasiados unos", "porque faltan datos", "no sube, están iguales"], correcta: 0 },
      { dificultad: 3, enunciado: "Las notas de un salón fueron 20, 25, 30, 25, 50. ¿Cuál es la mediana?", opciones: ["25", "30", "50", "20"], correcta: 0 },
      { dificultad: 3, enunciado: "En un salón se promedió 25 entre 6 estudiantes. ¿Cuánto sumaron las notas?", opciones: ["150", "31", "6", "125"], correcta: 0 },
      { dificultad: 3, enunciado: "Los valores 10, 12, 15, 18, 25 tienen media 20 y mediana 15. ¿Qué valor representa mejor al grupo?", opciones: ["la mediana, porque la media la infla el 25", "la media, porque siempre es mayor", "el rango, porque mide lo que falta", "la moda, que es 18"], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Hallar la mediana de un conjunto de datos", descripcion: "Ordena los pasos del proceso.", pasos: ["Ordenar los datos de menor a mayor", "Contar cuántos datos hay", "Buscar el dato que queda en el centro", "Si hay dos centrales, sacar su promedio"] },
      { dificultad: 3, titulo: "Decidir qué medida usar para describir un grupo", descripcion: "Ordena los pasos del proceso.", pasos: ["Ordenar los datos y hallar la mediana", "Calcular la media y comparar ambas", "Buscar valores extremos que distorsionan la media", "Elegir la medida que mejor represente al grupo"] }
    ]
  },

  "matematicas--datos--c4": {
    nombre: "Probabilidad clásica y diagramas de árbol",
    preguntas: [
      { dificultad: 1, enunciado: "Al lanzar una moneda, ¿cuál es la probabilidad de obtener cara?", opciones: ["1/2", "1/4", "1", "2"], correcta: 0 },
      { dificultad: 1, enunciado: "En una bolsa hay 3 bolas rojas y 2 azules. ¿Cuál es la probabilidad de sacar una azul?", opciones: ["2/5", "3/5", "1/2", "2/3"], correcta: 0 },
      { dificultad: 1, enunciado: "Al lanzar un dado, ¿cuál es la probabilidad de obtener un número mayor que 6?", opciones: ["0", "1/6", "1", "1/2"], correcta: 0 },
      { dificultad: 2, enunciado: "Se lanzan dos monedas. ¿Cuál es la probabilidad de obtener dos caras?", opciones: ["1/4", "1/2", "1/8", "1"], correcta: 0 },
      { dificultad: 2, enunciado: "En una tienda hay 10 productos, 2 con defecto. ¿Cuál es la probabilidad de que salga uno defectuoso?", opciones: ["1/5", "1/2", "2/3", "1/10"], correcta: 0 },
      { dificultad: 2, enunciado: "Al lanzar un dado, ¿cuál es la probabilidad de obtener un número par?", opciones: ["1/2", "1/3", "1/6", "2/3"], correcta: 0 },
      { dificultad: 3, enunciado: "De una baraja española de 40 cartas se saca una al azar. ¿Cuál es la probabilidad de que sea un oro?", opciones: ["1/4", "1/40", "1/10", "1/2"], correcta: 0 },
      { dificultad: 3, enunciado: "Para armar un sanduche, hay 2 panes y 3 rellenos distintos. ¿Cuántas combinaciones hay?", opciones: ["6", "5", "9", "8"], correcta: 0 },
      { dificultad: 3, enunciado: "Se lanza una moneda dos veces. ¿Cuál es la probabilidad de obtener exactamente una cara y una cruz?", opciones: ["1/2", "1/4", "1/3", "3/4"], correcta: 0 }
    ],
    retos: [
      { dificultad: 2, titulo: "Calcular una probabilidad clásica", descripcion: "Ordena los pasos del proceso.", pasos: ["Contar todos los resultados posibles", "Contar los resultados favorables", "Escribir la fracción favorables entre posibles", "Simplificar la fracción si se puede"] },
      { dificultad: 3, titulo: "Contar combinaciones con un diagrama de árbol", descripcion: "Ordena los pasos del proceso.", pasos: ["Identificar las decisiones del experimento", "Dibujar una rama por cada opción posible", "Completar las ramas de la segunda decisión", "Contar todos los recorridos del árbol", "Multiplicar opciones para verificar el total"] }
    ]
  },

  "matematicas--datos--c5": {
    nombre: "Probabilidad condicional y distribuciones",
    preguntas: [
      { dificultad: 1, enunciado: "En un dado honesto, ¿cuál es la probabilidad de sacar un 4?", opciones: ["1/6", "1/4", "1/3", "1/2"], correcta: 0 },
      { dificultad: 1, enunciado: "Si P(A) = 0,3, ¿cuánto vale P(no A)?", opciones: ["0,7", "0,3", "1,3", "0,5"], correcta: 0 },
      { dificultad: 1, enunciado: "La suma de todas las probabilidades de una distribución debe ser:", opciones: ["1", "0", "2", "depende del experimento"], correcta: 0 },
      { dificultad: 2, enunciado: "P(A) = 0,5; P(B|A) = 0,4. ¿Cuánto vale P(A y B)?", opciones: ["0,2", "0,9", "0,1", "0,5"], correcta: 0 },
      { dificultad: 2, enunciado: "Al lanzar dos dados, ¿cuál es la probabilidad de que la suma sea 7?", opciones: ["1/6", "1/12", "1/7", "7/36"], correcta: 0 },
      { dificultad: 2, enunciado: "En una caja hay 10 fichas, 4 blancas. Saco una sin reemplazo. ¿Cuál es la probabilidad de que sea blanca?", opciones: ["2/5", "1/4", "1/10", "3/5"], correcta: 0 },
      { dificultad: 3, enunciado: "Un 30% de los estudiantes usa bus; de ellos, 20% llega tarde. ¿Qué porcentaje de todos llega tarde en bus?", opciones: ["6%", "20%", "30%", "50%"], correcta: 0 },
      { dificultad: 3, enunciado: "Al lanzar una moneda 3 veces, ¿cuál es la probabilidad de obtener las tres caras?", opciones: ["1/8", "1/6", "1/4", "3/8"], correcta: 0 },
      { dificultad: 3, enunciado: "Un examen tiene 10 preguntas de verdadero o falso. ¿De cuántas formas se puede responder el examen?", opciones: ["2¹⁰", "10²", "20", "10!"], correcta: 0 }
    ],
    retos: [
      { dificultad: 2, titulo: "Calcular una probabilidad condicional", descripcion: "Ordena los pasos del proceso.", pasos: ["Identificar el evento que ya ocurrió", "Reducir el espacio muestral a ese evento", "Contar los casos favorables dentro de lo reducido", "Dividir entre los nuevos casos posibles"] },
      { dificultad: 3, titulo: "Verificar si dos eventos son independientes", descripcion: "Ordena los pasos del proceso.", pasos: ["Calcular la probabilidad de cada evento", "Calcular la probabilidad de la intersección", "Comparar la intersección con el producto P(A)·P(B)", "Decidir si son independientes según la igualdad"] }
    ]
  }
};
