// js/games/banco/tecnologia.js
// Banco de contenido de Tecnología e Informática para la plataforma escolar.
//
// Cobertura: los cinco ejes del área según los Estándares Básicos de
// Competencias en Tecnología e Informática del MEN (ambientación, estructura
// y sistemas técnicos, tecnología y sociedad, diseño y tecnología) y los
// lineamientos de Pensamiento Computacional: fenomenología de la computación,
// resolución de problemas, desarrollo de soluciones, comunicación y
// colaboración, y pensamiento de sistemas.
//
// Cada nodo es un tema `tecnologia--<eje>--<ciclo>`:
//   c1 = 1° y 2°, c2 = 3° a 5°, c3 = 6° y 7°, c4 = 8° y 9°, c5 = 10° y 11°.
//   - "preguntas": opción múltiple. La respuesta correcta se escribe SIEMPRE
//     en la posición 0; los juegos la mueven a otra casilla al barajar.
//   - "retos": pasos de un proceso en el ORDEN CORRECTO; el juego los mezcla.
// Dificultad real: 1 recuerda, 2 aplica, 3 analiza, compara o depura.

export const BANCO = {
  "tecnologia--algoritmos--c1": {
    id: "tecnologia--algoritmos--c1",
    nombre: "Secuencias: primero, después, al final",
    preguntas: [
      {
        enunciado: "Para lavarnos las manos, ¿qué hacemos primero?",
        opciones: ["Mojar las manos con agua", "Secarnos con la toalla", "Cerrar la llave del agua", "Guardar el jabón en su caja"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "En una secuencia de tres pasos, el paso del medio viene después de",
        opciones: ["el primer paso", "el último paso", "la hora del recreo", "la salida del salón"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "La palabra que usamos para nombrar el último paso es",
        opciones: ["al final", "de primero", "en el medio", "otra vez"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "Ordenar los pasos desde el principio hasta el final produce una",
        opciones: ["secuencia", "adivinanza", "carrera", "fotografía"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "Ana quiere dibujar en la tableta del salón. ¿Cuál es el primer paso?",
        opciones: ["Buscar el botón de prender", "Elegir el color verde", "Dibujar la casa", "Guardar el trabajo"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Pasos: salir del salón, formar la fila, caminar al patio. ¿Qué paso va primero?",
        opciones: ["Formar la fila", "Salir del salón", "Caminar al patio", "Entrar de nuevo"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Roberto quiere servir agua en el termo. Después de destaparlo, ¿qué sigue?",
        opciones: ["Acercar el termo a la llave", "Tapar el termo de nuevo", "Guardar el termo en la bolsa", "Ir a jugar al patio"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Lina escribió almorzar de primero al ordenar los pasos de su aseo. Su error fue",
        opciones: ["poner el almuerzo antes de lavarse las manos", "haber escrito solo tres pasos", "olvidarse del jabón para las manos", "sentarse en la mesa del comedor"],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Si en una receta batimos los huevos después de meter el molde al horno, entonces",
        opciones: ["el pastel no sale como debe ser", "la receta funciona igual", "el horno prende solo", "sobran los ingredientes"],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Tres compañeros ordenan los mismos pasos de forma distinta. La secuencia sirve cuando",
        opciones: ["los pasos siguen un orden que tiene sentido", "cada quien escribe lo que quiera", "los pasos se repiten diez veces", "la lista queda bien larga"],
        correcta: 0,
        dificultad: 3
      }
    ],
    retos: [
      {
        titulo: "Lavarse las manos antes del almuerzo",
        dificultad: 1,
        pasos: ["Poner las manos bajo el agua", "Frotar con jabón por todos lados", "Enjuagar y secar las manos"]
      },
      {
        titulo: "Dibujar en la tableta del salón",
        dificultad: 2,
        pasos: ["Prender la tableta con su botón", "Abrir la app de dibujo", "Guardar el dibujo con la profe"]
      },
      {
        titulo: "Arreglar una secuencia desordenada",
        dificultad: 3,
        pasos: ["Leer todos los pasos en voz alta", "Buscar el paso que va de primero", "Mover los pasos hasta que tengan sentido"]
      }
    ]
  },

  "tecnologia--algoritmos--c2": {
    id: "tecnologia--algoritmos--c2",
    nombre: "Algoritmos con pasos y repeticiones",
    preguntas: [
      {
        enunciado: "Un algoritmo es",
        opciones: ["un conjunto de pasos ordenados para resolver una tarea", "un dibujo rápido del problema", "una respuesta que se adivina", "una máquina que trabaja sola"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "Cuando un paso se repite varias veces dentro de un algoritmo usamos una",
        opciones: ["repetición", "portada", "firma", "medida"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "¿Cuál de estas tareas se resuelve siguiendo un algoritmo?",
        opciones: ["Preparar limonada con la receta escrita", "Soñar con el partido del viernes", "Pintar un paisaje como cada quien quiera", "Escribir el diario personal"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "En la programación por bloques, las instrucciones se",
        opciones: ["unen como piezas de rompecabezas", "escriben con tiza en el tablero", "dibujan en una hoja de examen", "guardan en la mochila"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "El personaje debe caminar diez cuadritos iguales. El bloque más útil es",
        opciones: ["repetir diez veces", "esperar un segundo", "decir hola", "cambiar de disfraz"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Un grupo escribe: prender el equipo, esperar el escritorio, abrir el navegador, escribir la dirección del colegio. El algoritmo sirve para",
        opciones: ["entrar a la página web de la escuela", "instalar un juego nuevo", "apagar el computador", "imprimir la tarea"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Para que un compañero llegue de la biblioteca al salón sin equivocarse, las instrucciones deben ser",
        opciones: ["claras, una acción por paso", "cortas y sin números", "en voz baja, sin mirar", "secretas, solo para él"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "El baile del salón se repite hasta que la profesora levante la mano. ¿Qué tipo de instrucción es?",
        opciones: ["Una repetición con condición de parada", "Un paso único", "Una portada de la danza", "Un error de coreografía"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "El robot de papel avanza dos cuadritos al frente, pero se sale de la hoja. ¿Qué se revisa primero?",
        opciones: ["Cuántas veces se repite el avance", "El color con que se dibujó", "El nombre del robot", "La hoja donde se dibuja"],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Dos algoritmos resuelven lo mismo: uno tiene doce pasos, el otro solo cinco. Entonces",
        opciones: ["los dos sirven, pero el corto es más fácil de leer", "el de doce pasos está mal", "solo el corto cuenta como algoritmo", "los algoritmos no se comparan"],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "En la instrucción 'si la mesa está sucia, limpiarla' la parte que decide si se actúa se llama",
        opciones: ["condición", "repetición", "portada", "firma"],
        correcta: 0,
        dificultad: 3
      }
    ],
    retos: [
      {
        titulo: "Algoritmo para preparar limonada",
        dificultad: 1,
        pasos: ["Exprimir los limones en la jarra", "Agregar el agua y el azúcar", "Remover hasta disolver el azúcar", "Servir en un vaso limpio"]
      },
      {
        titulo: "Coreografía que se repite ocho veces",
        dificultad: 2,
        pasos: ["Escribir los movimientos del baile", "Contar cuántas veces se repiten", "Encerrarlos en un bloque repetir", "Probar el baile contando en voz alta"]
      },
      {
        titulo: "Encontrar el error de un algoritmo de saludo",
        dificultad: 3,
        pasos: ["Leer la tarea que debe resolver", "Ejecutar los pasos uno por uno", "Anotar en qué paso aparece el error", "Cambiar solo ese paso y volver a probar"]
      }
    ]
  },

  "tecnologia--algoritmos--c3": {
    id: "tecnologia--algoritmos--c3",
    nombre: "Pseudocódigo y diagramas de flujo",
    preguntas: [
      {
        enunciado: "En un diagrama de flujo, las figuras de óvalo se usan para",
        opciones: ["marcar el inicio y el final del proceso", "representar las decisiones", "realizar los cálculos", "leer datos del usuario"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "El rombo dentro de un diagrama de flujo representa",
        opciones: ["una decisión con dos salidas posibles", "una operación matemática", "el mensaje final en pantalla", "el almacenamiento de datos"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "El pseudocódigo es",
        opciones: ["una forma de escribir algoritmos con palabras cercanas al lenguaje humano", "un lenguaje que solo funciona en Windows", "el nombre de un programa de dibujo", "un diagrama hecho con figuras de colores"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "En pseudocódigo, la instrucción para mostrar un mensaje en pantalla suele escribirse con la palabra",
        opciones: ["Escribir", "Leer", "Borrar", "Guardado"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "Para saber si un estudiante puede entrar a una función con la edad exigida, el diagrama necesita un rombo porque",
        opciones: ["hay que comparar la edad y tomar una de dos rutas", "el rombo hace el dibujo más bonito", "sin rombo no se puede leer la edad", "las decisiones solo van en el pseudocódigo"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "En el pseudocódigo 'Mientras haya casillas vacías: leer la siguiente casilla', el ciclo se detiene cuando",
        opciones: ["no quedan casillas vacías por leer", "se apaga el computador", "la casilla tiene un número", "termina la clase de tecnología"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Un diagrama con el dato 7 hace lo siguiente: si 7 es mayor que 5, suma 1; si no, resta 1. El resultado que se muestra es",
        opciones: ["8", "6", "7", "5"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Leemos las notas del salón y las acumulamos para hallar el promedio. El acumulador debe inicializarse",
        opciones: ["en cero, antes de leer la primera nota", "en la primera nota leída", "en el número de estudiantes", "en diez, para tener margen"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Un diagrama funciona con números pares pero se detiene con los impares porque, en el rombo, la salida 'No' no conecta con ninguna figura. El problema es",
        opciones: ["una rama de la decisión quedó sin camino hacia el final", "el óvalo de inicio falta por completo", "la suma del proceso está mal escrita", "faltan colores para distinguir las figuras"],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Comparamos dos pseudocódigos que ordenan nombres: uno revisa la lista completa muchas veces y otro divide la lista a la mitad en cada vuelta. ¿Qué afirmación es correcta?",
        opciones: ["El segundo suele hacer menos comparaciones con listas largas", "Los dos siempre tardan exactamente lo mismo", "El primero conviene más en listas gigantes", "Ninguno de los dos puede ordenar texto"],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Hacemos prueba de escritorio con los valores 3, 0 y 5. El algoritmo imprime 'Aprobado' si el valor es mayor o igual a 3. La salida correcta es",
        opciones: ["Aprobado, No aprobado, Aprobado", "Aprobado, Aprobado, Aprobado", "No aprobado, No aprobado, Aprobado", "No aprobado, Aprobado, No aprobado"],
        correcta: 0,
        dificultad: 3
      }
    ],
    retos: [
      {
        titulo: "Dibujar el diagrama que valida una edad de acceso",
        dificultad: 1,
        pasos: ["Óvalo que marca el inicio", "Paralelogramo para leer la edad", "Rombo que compara la edad con doce años", "Óvalo de fin después de las dos salidas"]
      },
      {
        titulo: "Escribir el pseudocódigo de la suma de notas del salón",
        dificultad: 2,
        pasos: ["Declarar el acumulador e inicializarlo en cero", "Leer la nota de cada estudiante", "Sumar la nota leída al acumulador", "Escribir el total al terminar las notas"]
      },
      {
        titulo: "Depurar un diagrama que nunca termina",
        dificultad: 3,
        pasos: ["Ubicar el bloque repetitivo sin condición de salida", "Identificar qué variable debería cambiar en cada vuelta", "Añadir la condición que detiene el ciclo", "Volver a trazar el diagrama con dos datos de prueba"]
      }
    ]
  },

  "tecnologia--algoritmos--c4": {
    id: "tecnologia--algoritmos--c4",
    nombre: "Variables, condiciones y ciclos",
    preguntas: [
      {
        enunciado: "En programación, una variable es",
        opciones: ["un espacio con nombre que guarda un valor que puede cambiar", "un cable interno del computador", "un botón fijo del teclado", "una carpeta donde se guardan archivos"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "El ciclo 'mientras' se diferencia del ciclo 'para' porque",
        opciones: ["el primero se detiene por una condición y el segundo cuenta vueltas", "el primero no necesita variables", "el segundo solo funciona con texto", "el segundo siempre es infinito"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "En un programa de bloques, el evento que hace correr el algoritmo es",
        opciones: ["un suceso como presionar la bandera o una tecla", "una variable guardada en la nube", "un ciclo sin fin", "una función matemática"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "La variable 'puntos' guardaba el valor 5 y se ejecuta el bloque 'asignar puntos = 8'. El valor nuevo es",
        opciones: ["8", "5", "13", "40"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "Para validar que una contraseña tenga por lo menos ocho caracteres se usa",
        opciones: ["una condición que compare el largo del texto con ocho", "un ciclo que sume ocho vueltas fijas", "una variable de tipo decimal", "una lista con ocho nombres"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Un programa suma 1 + 2 + 3 + ... + 10 con un ciclo 'para i de 1 a 10' y un acumulado que inicia en cero. El resultado es",
        opciones: ["55", "50", "45", "100"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Cuando un bloque 'por siempre' se coloca dentro de otro bloque 'por siempre', la estructura resultante se llama",
        opciones: ["ciclos anidados", "ciclo vacío", "asignación doble", "variable global"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Un estudiante escribe 'si nota mayor que 3 entonces APROBADO'. Si quiere que la nota 3 también apruebe, debe cambiar el operador a",
        opciones: ["mayor o igual que 3", "menor que 3", "distinto de 3", "igual a 3"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "El bucle 'mientras contador sea distinto de cero' no se detiene nunca si no cambiamos el contador dentro del ciclo porque",
        opciones: ["la condición jamás llega a ser falsa", "el contador se vuelve negativo", "el programa borra la variable", "cero no es un número válido"],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "En el juego del salón la puntuación sube de 10 en 10, pero al llegar a 100 sigue subiendo. La corrección que respeta el diseño es",
        opciones: ["añadir una condición que detenga el aumento al llegar a 100", "reiniciar el computador cada diez puntos", "cambiar el color del personaje en 100", "quitar la variable de puntuación"],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "El reto es imprimir los números pares del 2 al 10. Un estudiante escribe 'para i de 2 a 10: imprimir i'. ¿Qué falta?",
        opciones: ["una condición que verifique que i dividido entre 2 dé resto cero", "un ciclo adicional de diez vueltas", "cambiar el 2 inicial por el 4", "asignar i igual a 2 otra vez"],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Dos compañeros discuten: uno dice que la variable se declara una sola vez y se reutiliza; el otro la declara dentro del ciclo. ¿Qué ocurre con la segunda opción?",
        opciones: ["el valor se reinicia en cada vuelta del ciclo", "el programa corre más rápido siempre", "el ciclo se convierte en condición", "la variable deja de existir en la memoria"],
        correcta: 0,
        dificultad: 3
      }
    ],
    retos: [
      {
        titulo: "Montar la variable de puntuación de un juego",
        dificultad: 1,
        pasos: ["Crear la variable puntos con valor inicial cero", "Detectar el evento que suma puntos", "Sumar diez al valor actual de la variable", "Mostrar la variable en pantalla"]
      },
      {
        titulo: "Construir un ciclo con condición de salida",
        dificultad: 2,
        pasos: ["Definir la variable que controla el ciclo", "Asignarle un valor inicial claro", "Repetir mientras la condición sea verdadera", "Cambiar esa variable dentro del ciclo", "Probar el programa con dos casos"]
      },
      {
        titulo: "Depurar el bucle infinito del semáforo",
        dificultad: 3,
        pasos: ["Observar el programa y anotar el síntoma", "Localizar el bloque mientras del ciclo", "Revisar qué variable cambia en cada vuelta", "Ajustar la condición de salida del ciclo", "Volver a ejecutar y confirmar el arreglo"]
      }
    ]
  },

  "tecnologia--algoritmos--c5": {
    id: "tecnologia--algoritmos--c5",
    nombre: "Estructuras de datos, depuración y complejidad",
    preguntas: [
      {
        enunciado: "Una lista o arreglo se usa para",
        opciones: ["guardar muchos valores del mismo tipo bajo un mismo nombre, accesibles por índice", "almacenar la energía del computador", "repetir una condición verdadera", "cifrar los datos personales del usuario"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "En una pila el último dato que entra es el primero que sale; en una cola",
        opciones: ["el primero que entra es el primero que sale", "los datos salen siempre en orden inverso", "solo cabe un elemento", "los datos se guardan sin orden"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "Decir que un algoritmo tiene complejidad O(n) significa que su tiempo de ejecución",
        opciones: ["crece de forma proporcional al número de datos de entrada", "se mantiene igual aunque la entrada crezca", "crece al cuadrado del número de datos", "depende solo del marca del computador"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "Un error de sintaxis se distingue de un error lógico porque",
        opciones: ["el primero impide que el programa se ejecute", "el primero solo cambia el resultado final", "el lógico detiene el compilador", "el lógico no se puede corregir"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "Buscamos un apellido en una lista sin orden de 400 registros. En el peor caso, la búsqueda lineal hace",
        opciones: ["400 comparaciones", "200 comparaciones", "9 comparaciones", "1 comparación"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Para aplicar búsqueda binaria sobre el registro de estudiantes del colegio, el requisito previo es",
        opciones: ["tener los datos ordenados", "que los datos sean numéricos", "que no haya datos repetidos", "guardar todo en una pila"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "El programa promedio(lista) devuelve suma(lista) entre len(lista). Si la lista llega vacía, el programa",
        opciones: ["falla porque divide entre cero", "devuelve cero", "devuelve uno", "ignora el llamado"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Para probar el algoritmo que calcula la nota definitiva de 0.0 a 5.0 conviene empezar por",
        opciones: ["casos extremo y de borde: todo en 0.0, todo en 5.0 y una sola nota", "cualquier dato tomado al azar", "solamente la nota 3.0 del punto medio", "los nombres de los estudiantes del curso"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Se ordenan 1.000 nombres con dos métodos: el primero revisa parejas de elementos una y otra vez (O(n²)); el segundo divide y conquista (O(n log n)). La conclusión válida es",
        opciones: ["el segundo hace muchas menos comparaciones al crecer la lista", "los dos rinden igual en el peor caso", "el primero conviene más en listas grandes", "ninguno de los dos ordena texto"],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Un programa invierte una lista recorriéndola de atrás hacia adelante, pero pierde el último elemento. La causa más probable está en",
        opciones: ["los índices de inicio o de fin del recorrido", "el nombre elegido para la variable", "el tipo de datos guardado en la lista", "la función usada para imprimir"],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Una aplicación colombiana de domicilios decide en qué orden llega cada pedido al domiciliario. Como estructura de datos, esa fila de pedidos pendientes se comporta como",
        opciones: ["una cola atendida por prioridad", "una pila donde el último es el primero", "una variable de texto simple", "un único número entero"],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Al depurar, un compañero cambia tres cosas del código al tiempo y el error desaparece, pero aparece otro. ¿Qué práctica se abandonó?",
        opciones: ["modificar una sola cosa por prueba para saber cuál causó el cambio", "ejecutar el programa varias veces", "comentar las líneas del código", "guardar una copia del proyecto"],
        correcta: 0,
        dificultad: 3
      }
    ],
    retos: [
      {
        titulo: "Aplicar búsqueda binaria al listado de estudiantes",
        dificultad: 1,
        pasos: ["Ordenar la lista de menor a mayor", "Elegir el elemento del centro", "Comparar el dato buscado con el del centro", "Descartar la mitad que no aplica", "Repetir hasta encontrar o agotar la lista"]
      },
      {
        titulo: "Usar una pila para la acción de deshacer",
        dificultad: 2,
        pasos: ["Crear la pila vacía al abrir el archivo", "Guardar cada edición en la cima de la pila", "Al deshacer, extraer el último elemento", "Vaciar la pila al cerrar el documento"]
      },
      {
        titulo: "Medir y comparar la complejidad de dos algoritmos",
        dificultad: 3,
        pasos: ["Definir los tamaños de entrada que se van a probar", "Preparar tres listas de tamaño distinto", "Ejecutar cada algoritmo y registrar el tiempo", "Graficar el tiempo contra el tamaño de entrada", "Comparar la forma de las dos curvas", "Concluir qué algoritmo conviene con muchos datos"]
      }
    ]
  },

  "tecnologia--herramientas-digitales--c1": {
    id: "tecnologia--herramientas-digitales--c1",
    nombre: "Manejar el mouse y dibujar en pantalla",
    preguntas: [
      {
        enunciado: "En la pantalla, la flechita que sigue la mano sobre el mouse se llama",
        opciones: ["el cursor", "la ventana", "el icono", "la barra"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "Para abrir una carpeta del escritorio usamos",
        opciones: ["doble clic sobre ella", "un golpe en la pantalla", "el cable del mouse", "la bocina del equipo"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "La pieza del mouse que se oprime con el dedo es",
        opciones: ["el botón", "la pantalla", "el teclado", "la bocina"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "En la app de dibujo, el balde de pintura sirve para",
        opciones: ["rellenar una figura con color", "borrar todo el dibujo", "prender el equipo", "imprimir la hoja"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "Queremos mover un dibujo a otro lado de la pantalla. Con el mouse se hace",
        opciones: ["arrastrándolo con el botón oprimido", "soplando sobre la pantalla", "cerrando la app de dibujo", "moviendo el teclado"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Para dibujar una línea continua en la pantalla, ¿qué hacemos?",
        opciones: ["oprimir el botón mientras movemos el mouse", "golpear el mouse contra el pupitre", "apagar y prender la pantalla", "escribir los números del uno al diez"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Si nos equivocamos al pintar, el botón que devuelve el último cambio es",
        opciones: ["deshacer", "imprimir", "silenciar", "subir el volumen"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "El cursor no se mueve nada en la pantalla. La profe revisa el cable. El fallo está en",
        opciones: ["el aparato de entrada dejó de funcionar", "la app de dibujo se cerró sola", "la hoja de dibujo estaba llena", "el computador no tiene pantalla"],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "El lápiz pinta un punto; el borrador lo quita. Las dos herramientas cambian en",
        opciones: ["la acción que hacen sobre el dibujo", "el color de la pantalla", "el nombre de la app", "el tamaño del mouse"],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Un compañero frota la pantalla con la mano para mover la flechita. No funciona porque",
        opciones: ["el mouse debe deslizarse sobre la mesa", "la pantalla está apagada", "la flechita no se ve nunca", "la app de dibujo está cerrada"],
        correcta: 0,
        dificultad: 3
      }
    ],
    retos: [
      {
        titulo: "Dibujar un sol en la pantalla",
        dificultad: 1,
        pasos: ["Abrir la app de dibujo", "Elegir el color amarillo", "Rellenar el círculo con el balde"]
      },
      {
        titulo: "Mover un dibujo a otro lado",
        dificultad: 2,
        pasos: ["Posar el cursor sobre el dibujo", "Arrastrar con el botón oprimido", "Soltar el botón en el sitio nuevo"]
      },
      {
        titulo: "Ajustar el mouse cuando la flechita no obedece",
        dificultad: 3,
        pasos: ["Mirar la pantalla para ver qué pasa", "Revisar el cable o la pila del mouse", "Volver a mover la flechita despacio"]
      }
    ]
  },

  "tecnologia--herramientas-digitales--c2": {
    id: "tecnologia--herramientas-digitales--c2",
    nombre: "Procesador de textos: escribir y formatear",
    preguntas: [
      {
        enunciado: "Un procesador de textos sirve para",
        opciones: ["escribir, corregir y dar formato a un documento", "sumar columnas de números grandes", "grabar videos de la clase", "conectarse a internet sin navegador"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "La herramienta que deja el texto con letras gruesas se llama",
        opciones: ["negrita", "subrayado", "centrado", "sangría"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "Para empezar un párrafo nuevo se oprime la tecla",
        opciones: ["Enter", "Escape", "Suprimir", "Retroceso"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "En un documento, la rayita parpadeante nos indica",
        opciones: ["el lugar donde aparecerá lo que escribamos", "el número de la página actual", "la cantidad total de palabras", "el tamaño de la letra del título"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "Queremos que el título del trabajo se vea más grande. Después de seleccionarlo usamos",
        opciones: ["el control de tamaño de letra", "el corrector ortográfico", "la numeración de páginas", "el botón de deshacer"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "La tecla que deja todas las letras en mayúscula hasta que se vuelve a oprimir es",
        opciones: ["Bloq Mayús", "Tabulador", "Alt", "Espaciadora"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Para mover un párrafo de lugar sin reescribirlo usamos",
        opciones: ["cortar y pegar", "borrar y reimprimir", "negrita y cursiva", "guardar y cerrar"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "En el borrador del periódico escolar, ¿qué herramienta avisa las palabras mal escritas?",
        opciones: ["el corrector ortográfico", "la sangría francesa", "el borde de página", "la tabla de colores"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Dos compañeros escriben el mismo texto: uno lo pone todo en mayúsculas, el otro solo al inicio de cada oración. Se lee mejor cuando",
        opciones: ["las mayúsculas abren cada oración", "todo el texto va en mayúsculas", "no se usan signos de puntuación", "las letras cambian de color cada línea"],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "La profe pide guardar el trabajo de sociales con un nombre que sirva para encontrarlo después. El mejor es",
        opciones: ["acuerdos-del-municipio", "documento1", "trabajo final final", "sin titulo todavia"],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "El corrector subraya en rojo un apellido bogotano escrito correctamente. ¿Qué hacemos?",
        opciones: ["Dejarlo, porque los nombres propios no siempre están en su diccionario", "Borrarlo del documento completo", "Cambiar el tamaño de toda la letra", "Guardar el archivo con otro nombre"],
        correcta: 0,
        dificultad: 3
      }
    ],
    retos: [
      {
        titulo: "Formatar el título del trabajo",
        dificultad: 1,
        pasos: ["Escribir el título en la primera línea", "Seleccionar el título con el mouse", "Aumentar el tamaño de la letra", "Centrar el título con su botón"]
      },
      {
        titulo: "Guardar el documento del salón",
        dificultad: 2,
        pasos: ["Oprimir el botón de guardar", "Elegir la carpeta del curso", "Escribir un nombre claro para el archivo", "Confirmar el nombre en la barra superior"]
      },
      {
        titulo: "Dejar un párrafo listo para entregar",
        dificultad: 3,
        pasos: ["Leer el párrafo y marcar lo confuso", "Reescribir las oraciones difíciles", "Pasar el corrector ortográfico", "Comparar la versión final con el borrador"]
      }
    ]
  },

  "tecnologia--herramientas-digitales--c3": {
    id: "tecnologia--herramientas-digitales--c3",
    nombre: "Presentaciones y hoja de cálculo básica",
    preguntas: [
      {
        enunciado: "En una presentación digital, cada lámina se llama",
        opciones: ["diapositiva", "celda", "párrafo", "carpeta"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "En una hoja de cálculo, la intersección de una columna con una fila es",
        opciones: ["una celda", "un margen", "un rango", "una etiqueta"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "Las columnas de una hoja de cálculo se identifican con",
        opciones: ["letras", "números", "colores", "signos de puntuación"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "La celda B3 corresponde a",
        opciones: ["la columna B, fila 3", "la fila B, columna 3", "la hoja 3, columna B", "la tercera hoja del archivo"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "Para que el total de una columna de gastos del recreo se calcule solo, escribimos en la hoja",
        opciones: ["=SUMA(B2:B7)", "PROMEDIO B2 B7", "B2+B7 sin signo igual", "CONTAR las monedas"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "En la presentación del proyecto ambiental queremos que el texto aparezca línea por línea mientras explicamos. Usamos",
        opciones: ["una animación de entrada", "un borde de diapositiva", "la letra cursiva", "el pie de página"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "En la hoja de asistencia la fila 1 guarda los títulos de cada columna. Esa costumbre sirve porque",
        opciones: ["permite saber qué dato guarda cada columna al ordenar o filtrar", "hace que la hoja calcule promedios sola", "cambia el color de las celdas llenas", "impide que se borren los datos"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Queremos llevar los datos de la hoja de cálculo a una lámina con barras. Lo más rápido es",
        opciones: ["insertar el gráfico creado desde la hoja", "copiar celda por celda con el mouse", "transcribir los números a mano", "tomar una foto a la pantalla"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Una diapositiva tiene ocho líneas de texto, dos imágenes y fondo de colores; el público no sigue la explicación. Se rompió el principio de",
        opciones: ["sobriedad: exceso de contenido en una sola lámina", "orden alfabético del texto", "tamaño del título de la presentación", "cantidad de diapositivas del archivo"],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Al escribir la fórmula del promedio en una celda aparecen las letras de la fórmula en lugar del número. La causa más probable es",
        opciones: ["falta el signo igual al comienzo, entonces la hoja lo trata como texto", "el rango seleccionado está vacío", "la hoja tiene demasiadas columnas", "el promedio no existe en la versión gratuita"],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Comparamos una presentación con mucho texto con un afiche impreso del mismo tema. La diapositiva exige",
        opciones: ["menos palabras, porque quien presenta completa la idea en vivo", "más palabras que el afiche para que se entienda sola", "el mismo texto del afiche, siempre", "tablas numéricas en cada lámina"],
        correcta: 0,
        dificultad: 3
      }
    ],
    retos: [
      {
        titulo: "Preparar la diapositiva de portada",
        dificultad: 1,
        pasos: ["Escribir el título del proyecto", "Añadir el curso y el nombre del colegio", "Poner una imagen relacionada con el tema", "Revisar que el texto se lea desde el fondo"]
      },
      {
        titulo: "Llenar la hoja de registro del curso",
        dificultad: 2,
        pasos: ["Escribir los títulos en la primera fila", "Diligenciar la nota de cada estudiante", "Aplicar la fórmula de promedio al final", "Comprobar que el resultado cambie al corregir una nota"]
      },
      {
        titulo: "Convertir una tabla en gráfico de barras",
        dificultad: 3,
        pasos: ["Seleccionar el rango de datos con sus títulos", "Abrir el menú para insertar un gráfico", "Elegir el tipo de barras", "Comparar las barras con los valores de la tabla"]
      }
    ]
  },

  "tecnologia--herramientas-digitales--c4": {
    id: "tecnologia--herramientas-digitales--c4",
    nombre: "Fórmulas, funciones y gráficos en hoja de cálculo",
    preguntas: [
      {
        enunciado: "En una hoja de cálculo, toda fórmula empieza con",
        opciones: ["el signo igual", "la palabra formula", "un número entero", "el nombre del archivo"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "La función que devuelve el valor más alto de un rango es",
        opciones: ["MAX", "PROMEDIO", "CONTAR", "REDONDEAR"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "El rango A1:C3 de una hoja contiene",
        opciones: ["nueve celdas", "tres celdas", "seis celdas", "doce celdas"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "Para saber cuántas estaturas se registraron en una columna usamos la función",
        opciones: ["CONTAR", "SUMA", "MAX", "UNIR"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "El promedio del curso debe quedar fijo en una celda y copiarse a veinte hojas sin que cambie. Se escribe",
        opciones: ["una referencia absoluta como $B$2", "una referencia relativa como B2", "solo el número del promedio", "el nombre de la hoja de cálculo"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "En la tienda escolar la fila 2 calcula el total con =B2*C2. Al copiar esa fórmula a la fila 3 la hoja escribe",
        opciones: ["=B3*C3", "=B2*C2", "=C2*B2", "=B2*C3*2"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Para saber cuántos estudiantes de 9° obtuvieron nota de 4.0 o más se usa",
        opciones: ["CONTAR.SI con el criterio >=4", "SUMAR.SI con el criterio 4", "MAX del rango de notas", "CONTAR de toda la columna"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Queremos mostrar qué parte del presupuesto del colegio se va en papelería, transporte y almuerzo. El gráfico más adecuado es",
        opciones: ["uno circular, porque compara partes de un total", "uno de líneas, porque muestra el año", "uno de dispersión, porque relaciona dos variables", "una sola barra, porque hay tres rubros"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "El total de la colación sale absurdo. La fórmula dice =B2+C2*D2 y se quería sumar primero y después multiplicar. El arreglo es",
        opciones: ["=(B2+C2)*D2, con paréntesis", "=B2+C2*D2 dos veces", "=SUMA(B2:D2)", "=B2*D2+C2*2"],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Una hoja calcula el promedio del curso con =PROMEDIO(B2:B31) y otra con =SUMA(B2:B31)/30. En la fila 20 hay un texto en lugar de nota. ¿Qué diferencia se espera?",
        opciones: ["PROMEDIO descarta la celda sin número; dividir entre 30 no lo hace", "Las dos fórmulas dan exactamente el mismo resultado", "La hoja marca error en las dos celdas", "El texto cuenta como cero en las dos fórmulas"],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "El docente pide un gráfico con la asistencia del colegio mes a mes durante el año. Elegimos líneas y no circular porque",
        opciones: ["las líneas muestran la evolución de un valor en el tiempo", "el circular muestra mejor las tendencias anuales", "las barras no existen en la hoja de cálculo", "las líneas calculan además el promedio"],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Al copiar una fórmula hacia abajo, una referencia de celda no se ajustó y todos los resultados salen iguales. ¿Qué se corrigió?",
        opciones: ["faltó mezclar referencias absolutas y relativas según lo necesario", "sobraba una fila vacía en la tabla", "la fórmula debía escribirse sin signo igual", "el rango estaba en otra hoja del archivo"],
        correcta: 0,
        dificultad: 3
      }
    ],
    retos: [
      {
        titulo: "Calcular el total de la tienda escolar",
        dificultad: 1,
        pasos: ["Escribir el precio unitario en una columna", "Escribir la cantidad vendida en otra columna", "Multiplicar ambas celdas con una fórmula", "Copiar la fórmula hacia las filas restantes"]
      },
      {
        titulo: "Reportar quién aprueba con una condición",
        dificultad: 2,
        pasos: ["Ordenar las notas del curso en una columna", "Escribir la función SI en la columna siguiente", "Comparar cada nota con el valor aprobado", "Copiar la fórmula hacia abajo", "Revisar dos casos límite: 3.9 y 4.0"]
      },
      {
        titulo: "Auditar una hoja compartida antes de entregarla",
        dificultad: 3,
        pasos: ["Leer el cálculo que pidió el docente", "Verificar que cada fórmula empiece con signo igual", "Comprobar los rangos seleccionados celda por celda", "Recalcular con dos valores conocidos de prueba", "Anotar en una celda la fuente de los datos"]
      }
    ]
  },

  "tecnologia--herramientas-digitales--c5": {
    id: "tecnologia--herramientas-digitales--c5",
    nombre: "Datos, automatización y trabajo colaborativo",
    preguntas: [
      {
        enunciado: "En un documento colaborativo guardado en la nube, varios estudiantes pueden",
        opciones: ["editar al mismo tiempo y ver los cambios de los demás", "editar de uno en uno con el archivo cerrado", "solo mirar en modo lectura", "trabajar sin guardar nada nunca"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "El historial de versiones de un archivo en línea sirve para",
        opciones: ["recuperar una versión anterior del documento", "cifrar la contraseña del curso", "aumentar el almacenamiento contratado", "imprimir en doble cara"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "Una automatización o macro en una hoja de cálculo se usa para",
        opciones: ["ejecutar de golpe una serie de pasos repetitivos", "reemplazar el nombre de la celda activa", "convertir el archivo en una foto", "cambiar el idioma del teclado"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "Un formulario en línea que reciben 200 estudiantes del colegio alimenta",
        opciones: ["una hoja de cálculo con una fila por respuesta", "un documento de texto con una sola línea", "una presentación con una diapositiva", "un archivo de imagen por estudiante"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "Para saber cuántos se inscribieron en la jornada de aseo por cada sede, la herramienta de la hoja es",
        opciones: ["una tabla dinámica que agrupe por sede y cuente inscritos", "una fórmula de producto entre dos columnas", "un gráfico de líneas del curso", "el formato condicional de colores"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "En la hoja compartida del proyecto, una columna de fechas tiene tres formatos distintos. Lo primero que se hace es",
        opciones: ["unificar el formato de fecha en toda la columna", "convertir la columna a texto simple", "borrar las filas con formato raro", "sumar las fechas para promediarlas"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Para enviar una circular con el nombre de cada familia a partir de la lista de contactos se aplica",
        opciones: ["combinar correspondencia con los campos de la lista", "una macro que borre los nombres", "un gráfico circular de contactos", "una búsqueda manual hoja por hoja"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "La conexión del salón falla a media clase de tecnología. ¿Qué función del trabajo en la nube protege lo avanzado?",
        opciones: ["el guardado automático de los cambios", "la barra de herramientas lateral", "el chat del documento compartido", "la plantilla del archivo nuevo"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "En la hoja de matrículas la columna de correos tiene espacios al final y las búsquedas fallan. ¿Qué limpieza de datos aplica?",
        opciones: ["normalizar la columna quitando espacios y validando el formato", "ordenar la columna de la Z a la A", "convertir los correos en números enteros", "ocultar las filas que fallan"],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Comparamos dos maneras de recoger la información del almuerzo: una hoja donde cada delegado escribe libremente y un formulario con una pregunta por día. El formulario gana porque",
        opciones: ["estandariza las respuestas y reduce errores de digitación", "no necesita conexión a internet en ningún momento", "calcula solo las calorías del menú escolar", "reemplaza el trabajo del delegado de turno"],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "El sistema del colegio respalda la hoja de notas cada noche. ¿Qué condición evita que el respaldo no sirva de nada?",
        opciones: ["guardar la copia en un lugar distinto al archivo original, con fecha", "cerrar el archivo siempre a las cinco", "limitar la hoja a mil filas de datos", "borrar la copia vieja cada mañana"],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Dos grupos consolidan los resultados de las jornadas con fórmulas distintas y los totales no cuadran. La salida de sistema que resuelve el conflicto es",
        opciones: ["acordar una plantilla común con las mismas variables", "prohibir el uso de fórmulas en la hoja del curso", "elegir el resultado del grupo que terminó primero", "sumar las dos columnas de totales presentadas"],
        correcta: 0,
        dificultad: 3
      }
    ],
    retos: [
      {
        titulo: "Abrir el documento colaborativo del proyecto",
        dificultad: 1,
        pasos: ["Crear el archivo en la carpeta del curso", "Compartir el enlace con permiso de edición", "Repartir las secciones entre el equipo", "Comentar en el texto en vez de borrar al compañero", "Leer el documento final completo"]
      },
      {
        titulo: "Automatizar el resumen de un formulario escolar",
        dificultad: 2,
        pasos: ["Revisar que cada pregunta tenga opciones claras", "Abrir las respuestas en la hoja vinculada", "Filtrar los datos por curso y jornada", "Insertar los conteos con funciones automáticas", "Compartir el resumen con el docente"]
      },
      {
        titulo: "Consolidar los datos de las jornadas del colegio",
        dificultad: 3,
        pasos: ["Acordar los mismos nombres de columnas entre todos", "Guardar una copia de cada archivo recibido", "Unificar los formatos de fechas y números", "Apilar los registros en una sola tabla maestra", "Validar los totales contra los archivos originales", "Documentar el proceso para que otro lo repita"]
      }
    ]
  },

  "tecnologia--dispositivos--c1": {
    id: "tecnologia--dispositivos--c1",
    nombre: "Máquinas y objetos de mi casa",
    preguntas: [
      {
        enunciado: "¿Cuál de estos objetos de la casa funciona con electricidad?",
        opciones: ["la nevera", "la escoba", "el balde", "la silla de madera"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "La tableta del salón se prende con",
        opciones: ["un botón que está en un lado", "la llave del agua", "el control del televisor", "una moneda grande"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "El teclado del computador sirve para",
        opciones: ["escribir letras con los dedos", "mostrar lo que hacemos", "dar órdenes moviendo la mano", "sacar copias de la tarea"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "La pantalla de la tableta responde cuando",
        opciones: ["la tocamos con el dedo", "la movemos dentro de la bolsa", "le hablamos bajito", "la dejamos cargando"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "¿Cuál de estas máquinas tiene un motor que da vueltas?",
        opciones: ["la ventiladora", "la taza", "el tablero del salón", "el balde azul"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "La profe dice que no toquemos el computador con las manos mojadas. Eso evita",
        opciones: ["que el equipo se dañe y nos dé una descarga", "que la pantalla se ponga oscura", "que se acabe la tarea del día", "que el mouse se mueva solo"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Guardamos la tableta en su funda para",
        opciones: ["que no se raye ni se golpee", "que prenda más rápido", "que dure más la tarea", "que se conecte sola al internet"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "La ropa seca más rápido con la ventiladora prendida. La ventiladora necesita",
        opciones: ["energía eléctrica para girar", "agua para enfriar", "luz del sol encima", "solo el cable suelto"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Comparamos la escoba con la aspiradora: las dos limpian el piso, pero la aspiradora",
        opciones: ["gasta electricidad para funcionar", "funciona sin cable ni enchufe", "no tiene ninguna pieza móvil", "pesa mucho menos que la escoba"],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Decimos que la pantalla de la tableta también es un botón porque",
        opciones: ["con ella le damos órdenes al equipo", "está prendida todo el día", "tiene muchos colores bonitos", "carga la batería del celular"],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "La ventiladora prendida hace ruido. Al desconectarla el ruido para. Eso muestra que",
        opciones: ["el motor necesita energía para moverse", "el ruido sale del cable suelto", "la ventiladora funciona sola siempre", "el apagador guarda la energía"],
        correcta: 0,
        dificultad: 3
      }
    ],
    retos: [
      {
        titulo: "Prender la ventiladora del salón",
        dificultad: 1,
        pasos: ["Revisar que nadie tenga el dedo cerca", "Conectar el cable al tomacorriente", "Oprimir el botón de prender"]
      },
      {
        titulo: "Guardar la tableta al terminar la clase",
        dificultad: 2,
        pasos: ["Cerrar el dibujo que dejamos abierto", "Apagar la tableta con su botón", "Guardarla dentro de la funda"]
      },
      {
        titulo: "Revisar un objeto que no funciona",
        dificultad: 3,
        pasos: ["Mirar si el cable está conectado", "Buscar el botón de prender otra vez", "Avisar a un adulto si sigue fallando"]
      }
    ]
  },

  "tecnologia--dispositivos--c2": {
    id: "tecnologia--dispositivos--c2",
    nombre: "Hardware, periféricos y circuitos simples",
    preguntas: [
      {
        enunciado: "El hardware de un computador es",
        opciones: ["todo lo que se puede tocar del equipo", "los programas que vienen instalados", "la conexión a internet del colegio", "el nombre del usuario del salón"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "Un periférico de entrada es el que",
        opciones: ["envía información al computador", "saca información en papel", "guarda los archivos del curso", "apaga el equipo cuando termina"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "La pantalla del computador es un periférico de",
        opciones: ["salida", "entrada", "guardado", "cableado"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "En un circuito simple, la pieza que aporta la energía es",
        opciones: ["la pila", "el cable", "el bombillo", "el portabombillo"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "La memoria USB sirve para",
        opciones: ["guardar archivos y llevarlos a otro equipo", "conectar el salón a internet", "enfriar el procesador del equipo", "aumentar el tamaño de la pantalla"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Armamos el circuito con pila, cables, bombillo; el bombillo no prende. Probamos con otro bombillo: ahora funciona. La conclusión es",
        opciones: ["el primer bombillo estaba dañado", "la pila no tiene energía nunca", "el cable es demasiado corto", "el portabombillo es de plástico"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "El computador del laboratorio suena pero no muestra imagen. ¿Qué se revisa primero?",
        opciones: ["la pantalla y su cable de video", "el teclado del equipo", "la memoria USB conectada", "el mouse del salón"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "La memoria que guarda los datos mientras el equipo está prendido es",
        opciones: ["la memoria RAM", "el disco duro", "la memoria USB", "el monitor del equipo"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Comparamos el disco duro con la memoria RAM: el disco",
        opciones: ["conserva la información cuando el equipo se apaga", "borra todo al quedar sin energía", "funciona solo con el internet prendido", "guarda únicamente los sonidos"],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Un compañero dice que el micrófono es periférico de salida porque su voz se escucha grabada. El error está en que",
        opciones: ["el micrófono envía datos al equipo; el sonido sale por el hablante", "el micrófono también sirve para escuchar música", "la grabación se guarda en el disco duro", "el hablante es un periférico de entrada"],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Tocamos los extremos del cable pelado con una lámina de metal y el bombillo prende; con una goma no. El circuito muestra que",
        opciones: ["el metal deja pasar la corriente, la goma no", "el bombillo necesita luz para prender", "la goma guarda la energía de la pila", "el cable debe ser siempre de plástico"],
        correcta: 0,
        dificultad: 3
      }
    ],
    retos: [
      {
        titulo: "Conectar el computador del salón",
        dificultad: 1,
        pasos: ["Conectar el cable de la pantalla", "Conectar el teclado y el mouse", "Oprimir el botón de encendido", "Esperar la pantalla de inicio"]
      },
      {
        titulo: "Armar un circuito simple con pila y bombillo",
        dificultad: 2,
        pasos: ["Conectar un cable al polo positivo de la pila", "Unir el otro extremo a la base del bombillo", "Cerrar la ruta con el segundo cable", "Observar si el bombillo enciende"]
      },
      {
        titulo: "Clasificar los periféricos del laboratorio",
        dificultad: 3,
        pasos: ["Vaciar la caja de periféricos del salón", "Identificar qué hace cada aparato", "Separar los de entrada de los de salida", "Anotar los dudosos y consultar al grupo"]
      }
    ]
  },

  "tecnologia--dispositivos--c3": {
    id: "tecnologia--dispositivos--c3",
    nombre: "Redes, sensores y placas electrónicas",
    preguntas: [
      {
        enunciado: "El aparato que reparte la conexión a internet sin cables por el salón es",
        opciones: ["el router inalámbrico", "el escáner del office", "la memoria USB", "el proyector del aula"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "En una red local, el servidor de archivos cumple la función de",
        opciones: ["guardar y repartir la información a los equipos conectados", "dibujar los mapas del colegio", "convertir el sonido en imagen", "apagar los computadores al final del día"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "¿Cuál de estos elementos es un sensor de la placa micro:bit?",
        opciones: ["el acelerómetro que detecta movimiento", "el parlante que produce sonido", "el cable de red del salón", "la pantalla externa del docente"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "Una red inalámbrica WLAN se caracteriza por conectar los equipos mediante",
        opciones: ["ondas de radio", "cables de fibra de vidrio", "luces del bombillo", "imanes pegados al techo"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "La página del colegio carga en el computador del salón, pero no en el del patio, cuyo cable está suelto. El problema es de",
        opciones: ["conectividad física del equipo del patio", "licencia del navegador", "tamaño de la memoria del equipo", "formato de la página del colegio"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "La dirección IP de un computador dentro de la red del colegio sirve para",
        opciones: ["identificarlo entre los equipos conectados", "cifrar las tareas del curso", "medir la velocidad del procesador", "guardar las páginas favoritas"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Programamos la placa para que muestre una imagen cuando hay poca luz en el aula. ¿Qué componente entrega ese dato?",
        opciones: ["el sensor de luz", "el botón A de la placa", "el conector USB", "el acelerómetro"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Un sensor de temperatura de la bodega del colegio reporta datos a la red. ¿Qué se necesita para que otros los consulten?",
        opciones: ["conexión a la red y una dirección donde leer los datos", "una impresora a color en la bodega", "que el sensor tenga pantalla propia", "un disco duro por cada sensor"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Comparamos la red con cables del laboratorio con la inalámbrica del salón: cuando mucha gente se conecta a la vez, la inalámbrica",
        opciones: ["baja su velocidad porque el canal se comparte", "aumenta su velocidad por el número de aparatos", "funciona igual aunque nadie use los cables", "convierte los datos en archivos de imagen"],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "El sensor de humedad de la huerta escolar reporta siempre el mismo valor aunque la tierra esté seca. Antes de comprar otro sensor conviene revisar",
        opciones: ["las conexiones del cable y el código que lee el sensor", "el color de la tierra de la huerta", "la marca del computador del salón", "la cantidad de plantas sembradas"],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "La escuela rural vecina comparte su conexión con un repetidor instalado en el techo. ¿Qué limitación tiene esa solución?",
        opciones: ["la señal depende del clima y de la distancia al punto de origen", "el repetidor multiplica la velocidad contratada", "la señal llega más fuerte que por cable", "el repetidor almacena las páginas sin internet"],
        correcta: 0,
        dificultad: 3
      }
    ],
    retos: [
      {
        titulo: "Montar la red del salón de cómputo",
        dificultad: 1,
        pasos: ["Conectar el módem de la empresa de internet", "Unir el módem con el router por cable de red", "Conectar los equipos por cable o por wifi", "Probar la navegación en un computador"]
      },
      {
        titulo: "Leer un sensor con la placa micro:bit",
        dificultad: 2,
        pasos: ["Conectar la placa al computador por USB", "Cargar el programa que lee el sensor", "Abrir el monitor de serie para ver los datos", "Comparar el dato con la medida real del aula"]
      },
      {
        titulo: "Diagnosticar la red lenta de la sede",
        dificultad: 3,
        pasos: ["Medir la velocidad en dos horarios distintos", "Contar los equipos que usan la misma señal", "Revisar los cables y la ubicación del router", "Proponer una mejora y volver a medir"]
      }
    ]
  },

  "tecnologia--dispositivos--c4": {
    id: "tecnologia--dispositivos--c4",
    nombre: "Robótica, microcontroladores e IoT",
    preguntas: [
      {
        enunciado: "Un microcontrolador se diferencia del procesador de un computador porque",
        opciones: ["integra memoria, entradas y salidas en un chip para una tarea concreta", "funciona únicamente con internet de alta velocidad", "no puede leer sensores ni activar motores", "necesita siempre un monitor aparte"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "En un robot, los motores que producen el movimiento se llaman",
        opciones: ["actuadores", "sensores", "puertos serie", "servidores"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "Los objetos cotidianos conectados a la red para reportar datos del entorno forman parte de",
        opciones: ["el Internet de las Cosas (IoT)", "la memoria caché del equipo", "el sistema operativo del robot", "la hoja de cálculo en la nube"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "El sensor ultrasónico montado en la plataforma del robot se usa para",
        opciones: ["medir la distancia a un obstáculo", "reconocer la voz del conductor", "cargar la batería del equipo", "grabar video del recorrido"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "El robot sigue la línea con dos sensores de reflectancia. Para que corrija, el programa debe",
        opciones: ["comparar la lectura de ambos sensores y decidir según cuál detecta", "apagar uno de los dos sensores del robot", "repetir siempre el mismo bloque de avance", "confiar en el color de la pintura de la línea"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "En el invernadero del colegio una electroválvula riega cuando la lectura del sensor baja del umbral. La variable controlada es",
        opciones: ["la humedad medida en el suelo", "la hora del día en el reloj", "el largo del cable del sensor", "el color de la válvula"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "El módulo de bluetooth de la placa del robot permite",
        opciones: ["enviar datos al celular sin cables", "aumentar la capacidad de la pila", "reemplazar el sensor ultrasónico", "almacenar el programa del robot"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "En el encuentro de robótica de la sede, el robot no avanza aunque el programa esté correcto; el equipo revisa las pilas. Fallaba",
        opciones: ["la fuente de energía del chasis", "el sensor de luz de la placa", "el nombre del programa cargado", "la memoria donde se guardó el código"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Comparamos dos robots seguidores de línea: uno usa dos sensores de reflectancia y el otro suma un giroscopio. La ventaja del segundo es que",
        opciones: ["corrige las curvas porque conoce su propia orientación", "gasta menos energía en cada vuelta", "no necesita programarse para avanzar", "elimina la necesidad de sensores frontales"],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "El foco inteligente del colegio envía datos todo el día y la red escolar se satura. ¿Qué ajuste al sistema lo resuelve?",
        opciones: ["que reporte solo cuando la lectura cambia de valor", "que apague su sensor durante la jornada", "que duplique la frecuencia de envío de datos", "que guarde los datos en la pila del dispositivo"],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "El robot avanza derecho, choca, retrocede y repite el ciclo; el sensor ultrasónico entrega lecturas correctas. El fallo está en",
        opciones: ["el programa no cambia la dirección después de detectar el obstáculo", "el sensor está mal conectado a la placa", "la batería se descarga en cada choque", "la pista tiene líneas de dos colores"],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Un aula con domótica regula la luz con un sensor y una lámpara inteligente. ¿Qué elemento falta para cerrar el lazo de control?",
        opciones: ["el programa que compara la lectura del sensor y decide cuándo encender", "un computador distinto para cada lámpara del aula", "una impresora que registre la lectura del sensor", "un segundo sensor idéntico al primero"],
        correcta: 0,
        dificultad: 3
      }
    ],
    retos: [
      {
        titulo: "Montar el robot seguidor de línea",
        dificultad: 1,
        pasos: ["Fijar los sensores de reflectancia al frente", "Conectar los motores a la placa controladora", "Cargar el programa de lectura de sensores", "Ajustar la velocidad en la pista de prueba"]
      },
      {
        titulo: "Conectar el sensor de humedad al riego automático",
        dificultad: 2,
        pasos: ["Identificar el pin de entrada analógica de la placa", "Conectar el sensor respetando tierra y voltaje", "Escribir el programa que compara con el umbral", "Activar la electroválvula desde una salida digital", "Regar y comprobar el cambio en la lectura"]
      },
      {
        titulo: "Diagnosticar el robot que ignora el obstáculo",
        dificultad: 3,
        pasos: ["Reproducir el fallo y anotar cuándo ocurre", "Verificar la lectura del sensor ultrasónico", "Revisar el bloque condicional del programa", "Corregir la acción que sigue a la detección", "Volver a probar con dos distancias distintas"]
      }
    ]
  },

  "tecnologia--dispositivos--c5": {
    id: "tecnologia--dispositivos--c5",
    nombre: "Electrónica digital e inteligencia artificial",
    preguntas: [
      {
        enunciado: "Un sistema digital trabaja con",
        opciones: ["dos estados representados como cero y uno", "ondas continuas de cualquier valor", "únicamente señales de audio", "números decimales infinitos"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "La puerta lógica que entrega uno solo cuando todas sus entradas valen uno es",
        opciones: ["AND", "OR", "NOT", "XOR"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "Una red neuronal artificial está compuesta por",
        opciones: ["capas de nodos que combinan entradas con pesos ajustables", "cables de red conectados en serie", "un solo sensor de temperatura del aula", "una hoja de cálculo con fórmulas fijas"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "En un sistema de visión artificial, el paso previo a clasificar una imagen es",
        opciones: ["convertirla en datos numéricos que la máquina pueda procesar", "imprimirla en papel de buena calidad", "guardarla en una memoria USB del colegio", "reducir el tamaño de la pantalla del equipo"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "El sensor de temperatura del aula entrega una señal continua que la placa registra como números. ¿Qué hace esa conversión?",
        opciones: ["el convertidor analógico a digital de la placa", "el cable de red del laboratorio", "la memoria USB donde se guarda el dato", "el parlante de la placa electrónica"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Para el clasificador de residuos de la sede se quiere un sistema que aprenda de ejemplos. La opción válida es",
        opciones: ["un modelo de aprendizaje supervisivo entrenado con fotos etiquetadas", "una fórmula de hoja de cálculo con el peso de cada residuo", "un circuito con una puerta AND por cada materia", "un manual de instrucciones impreso para el aseo"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Frente a la electrónica analógica, la digital tiene la ventaja de que",
        opciones: ["el mensaje se regenera exacto aunque exista ruido eléctrico", "ocupa siempre menos espacio en el circuito", "no necesita fuente de energía para funcionar", "trabaja únicamente con un solo sensor"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "El robot de la feria de ciencias reconoce las voces de cinco estudiantes. Para reconocer una voz nueva necesita",
        opciones: ["más datos de entrenamiento etiquetados con esa voz", "apagar el micrófono del robot del salón", "un sensor ultrasónico adicional en la placa", "aumentar el tamaño de las ruedas del robot"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Con dos sensores de puerta, la puerta lógica XOR enciende la luz del pasillo solo cuando",
        opciones: ["uno de los dos detecta presencia, pero no los dos", "los dos sensores detectan presencia a la vez", "ninguno de los sensores detecta movimiento", "ambos sensores quedan averiados a la vez"],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "El clasificador de residuos confunde la bolsa plástica con el papel blanco porque el conjunto de entrenamiento tenía pocas bolsas. ¿Qué se corrige?",
        opciones: ["ampliar y reetiquetar los datos de entrenamiento de esa clase", "cambiar el color del contenedor de plástico", "quitar la categoría del papel del modelo", "reducir el número total de imágenes usadas"],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Una cámara de la sede envía imágenes a un modelo alojado en la nube, pero la conexión escolar es lenta. ¿Qué diseño se ajusta al contexto colombiano?",
        opciones: ["procesar parte de la tarea en el dispositivo y enviar solo el resultado", "aumentar la resolución de cada imagen enviada", "dejar el sistema funcionando sin ninguna cámara", "almacenar todo el video en la nube del colegio"],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Comparamos un circuito que suma con puertas lógicas frente a uno analógico con resistencias: el digital resulta más confiable porque",
        opciones: ["trabaja con niveles definidos en lugar de valores intermedios", "ocupa menos componentes siempre que el analógico", "no requiere alimentación eléctrica en el aula", "puede funcionar sin tabla de verdad conocida"],
        correcta: 0,
        dificultad: 3
      }
    ],
    retos: [
      {
        titulo: "Montar el semáforo con la placa y tres LED",
        dificultad: 1,
        pasos: ["Conectar cada LED a un pin digital con su resistencia", "Definir la variable que guarda el estado del semáforo", "Escribir la secuencia de encendido con sus pausas", "Cargar el programa en la placa del salón", "Medir los tiempos con el cronómetro del celular"]
      },
      {
        titulo: "Enviar una foto del aula por la red del colegio",
        dificultad: 2,
        pasos: ["Capturar la imagen con la cámara del equipo", "Convertir la imagen en datos digitales", "Comprimir el archivo según la conexión disponible", "Transmitir el archivo por la red del colegio", "Verificar en el destino que la imagen llegó completa"]
      },
      {
        titulo: "Auditar un modelo de IA usado por el colegio",
        dificultad: 3,
        pasos: ["Identificar qué decide el modelo y con qué datos", "Contar cuántos ejemplos aporta cada grupo del curso", "Probar el modelo con casos de todos los grupos", "Comparar los errores entre unos grupos y otros", "Registrar por escrito los sesgos encontrados", "Proponer un uso del modelo con vigilancia docente"]
      }
    ]
  },

  "tecnologia--ciudadania-digital--c1": {
    id: "tecnologia--ciudadania-digital--c1",
    nombre: "Uso responsable de la pantalla",
    preguntas: [
      {
        enunciado: "Antes de usar la tableta del salón pedimos permiso a",
        opciones: ["la profe del salón", "el compañero de al lado", "el vigilante de la puerta", "mi amigo del barrio"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "Cuando terminamos de usar el equipo debemos",
        opciones: ["cerrar la app y dejar la silla ordenada", "dejar todo abierto para el otro día", "guardar el mouse en la mochila", "llevarnos la pantalla del salón"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "Con la tableta jugamos un ratito. Después conviene",
        opciones: ["descansar la vista mirando por la ventana", "seguir jugando hasta el recreo", "acercar la cara a la pantalla", "bajar el brillo casi a cero"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "Las fotos de los compañeros se comparten solo si",
        opciones: ["ellos y su familia están de acuerdo", "la foto quedó muy bonita", "yo también salgo en la foto", "el celular tiene buena batería"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "En el grupo de WhatsApp de la clase, los mensajes deben ser",
        opciones: ["cortos y respetuosos", "gritados en mayúsculas", "de cualquier persona extraña", "solo de la hora del recreo"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Si un video me asusta mientras uso la tableta, lo primero es",
        opciones: ["pedir ayuda a un adulto de confianza", "seguir viendo para ver qué pasa", "contarlo solo a mis amigos del salón", "cerrar los ojos sin decir nada"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Jugué con goma en las manos. Antes de tomar el mouse debo",
        opciones: ["limpiarme y secarme los dedos", "pasar el mouse por el paño del salón", "soplar la pantalla del computador", "guardar el equipo en la funda"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Un compañero me manda la foto de otro niño sin su permiso. Lo correcto es",
        opciones: ["no reenviarla a nadie", "pasársela a media clase", "borrar al compañero del grupo", "imprimirla para el mural"],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Mi familia fija una hora para guardar el celular. Esa regla protege",
        opciones: ["la vista y el sueño de todos", "la batería del celular ajeno", "el internet lento de la casa", "los juegos nuevos del teléfono"],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Mi primo quiere dar la dirección de la casa a un juego en línea. No debe porque",
        opciones: ["esa información es privada de la familia", "el juego todavía está en revisión", "la dirección cabe en un solo mensaje", "el juego no tiene dibujo de la casa"],
        correcta: 0,
        dificultad: 3
      }
    ],
    retos: [
      {
        titulo: "Pedir la tableta para jugar",
        dificultad: 1,
        pasos: ["Levantar la mano en el salón", "Decir qué app queremos usar", "Esperar la orden de la profe"]
      },
      {
        titulo: "Descansar la vista después de jugar",
        dificultad: 2,
        pasos: ["Cerrar la app de la tableta", "Dejar la tableta sobre la mesa", "Mirar por la ventana un momento"]
      },
      {
        titulo: "Avisar cuando algo incomoda en pantalla",
        dificultad: 3,
        pasos: ["Salir del juego que incomoda", "Contarle a un adulto de confianza", "Dejar el equipo quieto sobre la mesa"]
      }
    ]
  },

  "tecnologia--ciudadania-digital--c2": {
    id: "tecnologia--ciudadania-digital--c2",
    nombre: "Contraseñas, respeto en línea y derechos de autor",
    preguntas: [
      {
        enunciado: "Una contraseña segura es la que",
        opciones: ["mezcla mayúsculas, minúsculas, números y signos, y nadie conoce", "usa la fecha de nacimiento completa", "lleva el nombre propio y el número del salón", "es la misma para todos los juegos"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "La clave de la plataforma del colegio la compartimos con",
        opciones: ["solo la familia de confianza, nunca con el salón", "todo el grupo de WhatsApp de la clase", "el primero que la pida por chat", "un jugador del foro del juego"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "En los comentarios del blog escolar debemos",
        opciones: ["tratar a los demás como queremos que nos traten", "escribir solo en mayúsculas", "comentar la vida del compañero", "publicar el número de la casa"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "Cuando usamos una imagen de internet en la presentación, debemos",
        opciones: ["decir de quién es la imagen", "borrar la firma del autor", "cambiarle el color al dibujo", "presentarla como propia"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "¿Cuál de estas contraseñas es más fácil de adivinar para otra persona?",
        opciones: ["juan1234", "cafe-verde-42-x", "M4r!posa2026", "tren.azul.bogota7"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Un compañero sube un meme que se burla de otro niño. Como grupo debemos",
        opciones: ["avisar al director de grupo del salón", "compartirlo para que se rían más", "responderle con otro meme parecido", "hacer de cuenta que no vimos nada"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Mi tía me pide el usuario del colegio para mirar mis notas. ¿Qué respondo?",
        opciones: ["Que la cuenta es personal y ella las ve en la reunión", "Que se lo presto solo por un día", "Que le creo un usuario nuevo", "Que le paso la clave del celular"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Un dibujo lo hizo Ana; usarlo en el cartel del salón sin decir nada es",
        opciones: ["copiar el trabajo de otra persona", "mejorar el cartel del salón", "citar el trabajo de Ana", "una técnica de dibujo nueva"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Dos compañeros discuten en el chat del salón; los mensajes suben de tono. Un tercero debería",
        opciones: ["avisar al docente antes de responder", "responder con un mensaje más fuerte", "salir del grupo sin decir nada", "guardar el chat como broma"],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Comparamos dos mensajes: 'no entendí esto, me lo explicas otra vez' frente a 'qué burro eres'. La diferencia está en que",
        opciones: ["el primero pide ayuda sin ofender a nadie", "los dos son una falta de respeto igual", "el segundo es una forma de ayudar", "los dos cierran la conversación"],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Quiero usar en el video del colegio una canción hallada en internet. Antes de publicarla debo revisar",
        opciones: ["si permite ese uso o si hay que pedir autorización", "si la canción suena conocida en el salón", "si el video quedó con buena luz", "si la canción dura menos de un minuto"],
        correcta: 0,
        dificultad: 3
      }
    ],
    retos: [
      {
        titulo: "Crear una clave segura para la plataforma",
        dificultad: 1,
        pasos: ["Pensar en una frase larga que nadie conoce", "Cambiar algunas letras por mayúsculas", "Agregar números y un signo", "Guardar la clave solo en la memoria"]
      },
      {
        titulo: "Reaccionar ante un mensaje que ofende",
        dificultad: 2,
        pasos: ["Detenerse antes de responder", "Leer de nuevo el mensaje con calma", "Hablar con el compañero en privado", "Informar al docente si la situación sigue"]
      },
      {
        titulo: "Dar el crédito a una imagen de internet",
        dificultad: 3,
        pasos: ["Buscar la página donde está la imagen", "Revisar si permite usarla y cómo", "Copiar el nombre del autor y la fuente", "Escribir el crédito en la diapositiva"]
      }
    ]
  },

  "tecnologia--ciudadania-digital--c3": {
    id: "tecnologia--ciudadania-digital--c3",
    nombre: "Privacidad, licencias y datos personales",
    preguntas: [
      {
        enunciado: "En una red social, la configuración de privacidad del perfil sirve para",
        opciones: ["decidir quién puede ver lo que publicamos", "hacer que la página cargue más rápido", "aumentar el número de seguidores del perfil", "cambiar el tamaño de la foto del perfil"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "La ley colombiana que protege los datos personales es la",
        opciones: ["Ley 1581 de 2012", "Ley 115 de 1994", "Ley 1098 de 2006", "Ley 1620 de 2013"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "Una licencia Creative Commons indica",
        opciones: ["qué permisos da el autor para usar su obra", "que la obra ya no tiene dueño", "cuánto cuesta comprar la obra", "que la obra solo se ve en un país"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "El nombre, la foto y el teléfono de un estudiante son",
        opciones: ["datos personales protegidos por la ley", "datos públicos que cualquiera puede usar", "datos técnicos de la red del colegio", "datos anónimos sin ninguna utilidad"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "El colegio pide firmar una autorización para publicar fotos del evento deportivo. Esa autorización protege",
        opciones: ["la imagen de los estudiantes según la ley de datos personales", "el presupuesto asignado al evento deportivo de la sede", "la marca de la cámara que usa el colegio", "el derecho del fotógrafo a cobrar la sesión"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Encuentro una imagen con licencia CC BY-NC. ¿Puedo usarla en el periódico escolar dando el crédito al autor?",
        opciones: ["Sí, permite uso sin fines comerciales reconociendo al autor", "No, ninguna licencia autoriza usos escolares", "Sí, porque el periódico escolar no necesita citar fuentes", "No, porque la licencia NC prohíbe toda copia posible"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Publicar sin pensar deja rastro, porque los mensajes",
        opciones: ["quedan guardados en servidores y pueden volver a verse", "desaparecen en cuanto se cierra la aplicación", "solo los lee la persona que los recibió", "se borran cuando se apaga el celular"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "En un juego en línea me piden una foto del uniforme del colegio. La conducta correcta es",
        opciones: ["no enviarla y avisar a un adulto", "enviarla si el juego promete puntos", "enviar solo la foto del salón de clase", "prestar la cuenta del colegio para jugar"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Comparamos dos publicaciones: la foto de la salida del salón con estudiantes identificables y un paisaje de la sabana sin personas. La primera exige",
        opciones: ["el permiso de las familias por tratarse de datos personales", "ningún permiso, porque la actividad es escolar", "solo la autorización del docente que acompañó", "únicamente el visto bueno del fotógrafo del colegio"],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Un compañero aparece en un video de otro colegio que se burla de él y ya tiene muchos compartidos. ¿Qué ruta protege mejor sus derechos?",
        opciones: ["solicitar la retirada a la plataforma e informar al comité de convivencia", "responder con otro video del mismo estilo", "borrar el perfil propio para que nadie lo encuentre", "esperar a que el video deje de estar de moda"],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Una tienda en línea guarda la dirección donde entrega los pedidos. ¿Qué derecho tiene el cliente sobre ese dato?",
        opciones: ["Conocer, actualizar y pedir la supresión de su dato personal", "Exigir que la tienda venda su dirección a otras empresas", "Ocultar la dirección sin avisar a la tienda nunca más", "Regalar su dirección a los amigos que se la pidan"],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "¿Por qué la clave de la plataforma no debe quedar escrita en el grupo de WhatsApp de la clase?",
        opciones: ["porque cualquier persona del grupo podría leerla y entrar", "porque WhatsApp cobra por escribir caracteres especiales", "porque la clave cambia sola cada media hora", "porque el grupo se usa solo para tareas de matemáticas"],
        correcta: 0,
        dificultad: 3
      }
    ],
    retos: [
      {
        titulo: "Revisar la privacidad del perfil escolar",
        dificultad: 1,
        pasos: ["Abrir el menú de configuración de la cuenta", "Cambiar la visibilidad del perfil a privada", "Decidir quién puede enviar mensajes", "Guardar los cambios hechos en el perfil"]
      },
      {
        titulo: "Usar una imagen con licencia Creative Commons",
        dificultad: 2,
        pasos: ["Confirmar el tipo de licencia de la imagen", "Ver si la licencia permite el uso escolar", "Copiar el nombre del autor y la fuente", "Añadir el crédito en la presentación"]
      },
      {
        titulo: "Ejercer el habeas data sobre una foto propia",
        dificultad: 3,
        pasos: ["Localizar la publicación que muestra la foto", "Solicitar al responsable que la retire", "Pedir apoyo a la familia o al docente", "Dejar constancia escrita de la solicitud"]
      }
    ]
  },

  "tecnologia--ciudadania-digital--c4": {
    id: "tecnologia--ciudadania-digital--c4",
    nombre: "Seguridad digital e ingeniería social",
    preguntas: [
      {
        enunciado: "El phishing se define como",
        opciones: ["un mensaje falso que imita uno confiable para robar datos", "un virus que daña la pantalla del equipo", "una copia de seguridad hecha en la nube", "un programa que acelera la conexión del colegio"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "La verificación en dos pasos agrega al inicio de sesión",
        opciones: ["un código que llega al celular o a una aplicación", "una segunda contraseña fija escrita en papel", "el usuario del docente del curso", "un reinicio automático del navegador"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "Un antivirus actualizado en los equipos del laboratorio ayuda a",
        opciones: ["detectar archivos maliciosos recién descargados", "aumentar la velocidad del internet escolar", "reemplazar la copia de seguridad de la hoja", "evitar que se apague el computador del salón"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "El candado y el protocolo HTTPS en la barra del navegador indican",
        opciones: ["que la conexión con ese sitio va cifrada", "que la página es gratuita para siempre", "que el equipo está libre de todo virus", "que la empresa del sitio es colombiana"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "Llega un correo del banco con un enlace para recuperar la cuenta de inmediato. La reacción correcta es",
        opciones: ["escribir a mano la dirección del banco y verificar allí", "abrir el enlace y digitar la clave para no perder tiempo", "responder el correo con la clave vieja", "reenviar el correo a los compañeros del curso"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "En un centro comercial ofrecen wifi abierto y gratis. Para revisar la plataforma del colegio conviene",
        opciones: ["no entrar a cuentas personales desde esa red abierta", "cambiar la clave frente a cualquiera que mire", "guardar la contraseña en el navegador del equipo público", "conectarse primero con el cable del módem del local"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Se recomienda cambiar la contraseña de vez en cuando porque",
        opciones: ["una clave usada mucho tiempo tiene más opciones de ser filtrada", "el sistema operativo se agota con la misma clave", "las cuentas con clave vieja dejan de funcionar solas", "la memoria del equipo se llena con la clave antigua"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Recibo un WhatsApp de la rectora pidiendo un pago urgente de matrícula a un número distinto al del colegio. ¿Qué hago?",
        opciones: ["confirmo la información por un canal oficial de la institución", "pagar rápido para no perder el cupo del estudiante", "reenviar el mensaje a los compañeros del curso", "responder con la cédula para que me aparten el cupo"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Comparamos dos enlaces recibidos por correo: uno corto sin referencia y otro completo del dominio del colegio. El corto es sospechoso porque",
        opciones: ["oculta la dirección real a la que nos lleva", "está escrito con menos letras de las necesarias", "no puede abrirse en un celular del colegio", "carece de imágenes dentro de la página"],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Un compañero recibe un mensaje con su foto del mural del salón y le exigen dinero para no compartirla. ¿Qué procede?",
        opciones: ["guardar la evidencia y avisar a un adulto; la línea 141 del ICBF atiende emergencias de la niñez", "pagar para que el material no se difunda nunca", "borrar el mensaje y no contar nada a nadie", "exigirle al remitente otra foto del mismo tipo"],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "El laboratorio usa una sola contraseña para todos los cursos. ¿Qué riesgo tiene esa decisión?",
        opciones: ["si alguien la divulga, cualquiera puede entrar a los trabajos de todos", "ahorra tiempo y por tanto no genera ningún problema", "protege mejor la información del colegio en la nube", "evita que los estudiantes olviden la clave del año"],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Instalo una aplicación gratis que, antes de funcionar, pide acceso a contactos, cámara y micrófono. ¿Qué analiza el usuario?",
        opciones: ["que los permisos pedidos no corresponden a la función de la app", "que la app pesa demasiado para la memoria del celular", "que el idioma de la app no es el del colegio", "que la aplicación no trae un juego en el menú"],
        correcta: 0,
        dificultad: 3
      }
    ],
    retos: [
      {
        titulo: "Reconocer un mensaje de phishing",
        dificultad: 1,
        pasos: ["Leer el remitente completo del mensaje", "Comparar la dirección con la de la entidad real", "Detectar si el texto presiona con urgencia", "Reportar o borrar sin abrir los enlaces"]
      },
      {
        titulo: "Proteger la cuenta escolar con doble factor",
        dificultad: 2,
        pasos: ["Abrir el menú de seguridad de la cuenta", "Activar la verificación en dos pasos", "Elegir a dónde llega el código temporal", "Probar el ingreso con el nuevo código", "Anotar la clave de respaldo en un lugar seguro"]
      },
      {
        titulo: "Contener un robo de cuenta en el curso",
        dificultad: 3,
        pasos: ["Cambiar la contraseña desde un dispositivo confiable", "Cerrar todas las sesiones abiertas de la cuenta", "Revisar los mensajes enviados en las últimas horas", "Avisar al docente y a los contactos afectados", "Reportar el hecho y guardar la evidencia"]
      }
    ]
  },

  "tecnologia--ciudadania-digital--c5": {
    id: "tecnologia--ciudadania-digital--c5",
    nombre: "Ética de datos, IA y regulación tecnológica",
    preguntas: [
      {
        enunciado: "El sesgo en un sistema de inteligencia artificial nace principalmente de",
        opciones: ["los datos con los que se entrena el modelo", "la marca del computador donde corre", "la velocidad de la red del colegio", "el número de pantallas del laboratorio"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "Un deepfake es",
        opciones: ["un video o audio sintético que imita a una persona real", "una foto tomada con una cámara antigua", "un virus que borra la memoria del celular", "una clave larga usada con doble factor"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "En Colombia, la entidad que vigila el cumplimiento de la Ley 1581 de datos personales es",
        opciones: ["la Superintendencia de Industria y Comercio", "el ICFES", "la Contraloría General", "el Servicio Nacional de Aprendizaje"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "Las licencias Creative Commons existen para",
        opciones: ["permitir el uso de obras bajo condiciones elegidas por el autor", "prohibir por ley toda copia de una obra", "vender las obras por internet sin impuestos", "registrar la marca de una empresa editorial"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "El modelo que elige los porteros del torneo se entrenó solo con videos de los estudiantes varones de 11°. El problema ético es que",
        opciones: ["el modelo reproduce el sesgo de género presente en los datos", "el torneo necesita más canchas en la sede", "los videos tienen una resolución demasiado alta", "el programa no se pudo instalar en la nube"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Una Alcaldía publica el mapa de las cámaras de seguridad de la ciudad. ¿Qué condición hace más ético ese uso?",
        opciones: ["informar con qué fin se recoge la imagen y quién la trata", "instalar más cámaras en cada calle del barrio", "ocultar el mapa para que nadie lo consulte", "permitir que cualquier persona descargue los videos"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Circula un video generado con IA donde una figura pública colombiana dice cosas que nunca dijo. La respuesta ciudadana más sólida es",
        opciones: ["verificar la fuente original antes de compartirlo", "comentarlo solo con amigos cercanos del curso", "borrar el canal donde apareció el video", "suponer que todo video puede ser falso"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Una aplicación colombiana de domicilios registra las direcciones de las familias. ¿Qué le exige la norma de datos personales?",
        opciones: ["pedir consentimiento y tratar solo los datos necesarios para el servicio", "vender las direcciones a otras empresas del sector", "guardar los datos para siempre sin informar a nadie", "publicar las direcciones en el sitio web de la empresa"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Frente al derecho de autor clásico, la licencia copyleft se caracteriza porque exige",
        opciones: ["que las obras derivadas conserven la misma libertad de uso", "que toda obra se pague antes de poder citarla", "que el autor pierda la propiedad de su obra", "que la obra solo se difunda en papel impreso"],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "El colegio quiere instalar reconocimiento facial en la entrada del comedor. ¿Qué criterio pesa más en una evaluación de impacto?",
        opciones: ["la proporcionalidad entre el control buscado y el dato biométrico entregado", "el costo del programa de reconocimiento de rostros", "la cantidad de cámaras disponibles en la sede", "la opinión de los estudiantes de último año"],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Un municipio entrega a una empresa los resultados de las pruebas Saber recogidos para otro fin. ¿Qué principio de la Ley 1581 se compromete?",
        opciones: ["la finalidad: el dato no puede usarse para un propósito distinto del informado", "la calidad del archivo guardado en la nube", "la soberanía tecnológica de la entidad pública", "el principio de transparencia presupuestal"],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Un estudiante delega en un generador de IA el 90 % de su tarea y recibe la nota máxima. ¿Qué criterio de evaluación se afecta?",
        opciones: ["la autenticidad del trabajo personal que se evalúa", "el peso del documento entregado", "la norma de citación usada en el texto", "la disponibilidad del internet en su casa"],
        correcta: 0,
        dificultad: 3
      }
    ],
    retos: [
      {
        titulo: "Preparar el aviso de datos de un proyecto estudiantil",
        dificultad: 1,
        pasos: ["Identificar cada dato personal que se recoge", "Escribir la finalidad de cada uno de esos datos", "Redactar el aviso de privacidad para las familias", "Pedir el consentimiento del acudiente y del estudiante", "Definir cuánto tiempo se guardará la información"]
      },
      {
        titulo: "Verificar un contenido producido con IA",
        dificultad: 2,
        pasos: ["Anotar la afirmación central del contenido", "Buscar la fuente original de esa afirmación", "Compararla con dos fuentes confiables", "Revisar señales de síntesis en video o audio", "Decidir si se difunde, se corrige o se descarta"]
      },
      {
        titulo: "Montar una ruta de denuncia por mal uso de datos en la sede",
        dificultad: 3,
        pasos: ["Documentar el hecho con capturas y fechas", "Informar al comité de convivencia escolar", "Solicitar la retirada del contenido al responsable", "Pedir la protección de los datos del estudiante afectado", "Escalar la queja a la Superintendencia si no responden", "Cerrar el caso con un acuerdo de no repetición"]
      }
    ]
  },

  "tecnologia--diseno--c1": {
    id: "tecnologia--diseno--c1",
    nombre: "Trazar, recortar y construir",
    preguntas: [
      {
        enunciado: "Antes de recortar el cartón usamos",
        opciones: ["las tijeras del salón", "el cuchillo de la cocina", "la regla de metal", "el borrador grande"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "La línea guía para recortar se hace con",
        opciones: ["el lápiz y la regla", "la pega blanca", "el punzón del salón", "el crayón de cera"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "Para unir dos hojas de papel usamos",
        opciones: ["la pega", "el agua", "el borrador", "el lápiz"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "¿Cuál de estos materiales sirve para construir una casita?",
        opciones: ["la caja de cartón", "la piedra del patio", "el vaso de vidrio lleno", "el cable del foco"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "El dibujo de lo que vamos a construir primero se llama",
        opciones: ["boceto", "recibo", "mandado", "retrato"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "Queremos que la torre de papel se pare derecha. Lo primero es",
        opciones: ["hacerle una base ancha", "pegarle un lazo arriba", "pintarla de dos colores", "doblarla por la mitad"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Para cortar una línea recta con la tijera, ¿qué hacemos primero?",
        opciones: ["trazar la guía con la regla", "pegar la hoja a la mesa", "doblar la hoja por la mitad", "pintar la línea de color"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Construyo un avión de papel. Si las dos alas quedan distintas, el avión",
        opciones: ["vuela torcido hacia un lado", "vuela más alto que antes", "se queda quieto en el piso", "se dobla solo a la mitad"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Ponemos cargas en dos puentes de papel. El doblado en pliegues aguanta más porque",
        opciones: ["los pliegues le dan firmeza", "tiene un color más fuerte", "pesa bastante más que el otro", "está pegado con dos capas de pega"],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "El barco de papel se moja. Al poco tiempo se hunde. El fallo del diseño está en",
        opciones: ["el material elegido para el agua", "el tamaño del tanque de agua", "el color pintado en la vela", "la forma del sombrero del capitán"],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "La rueda recortada del carrito queda llena de bordes. La solución es",
        opciones: ["recortar despacio siguiendo la línea", "pintar la rueda de negro", "cambiar el nombre del carrito", "pegar la rueda con más pega"],
        correcta: 0,
        dificultad: 3
      }
    ],
    retos: [
      {
        titulo: "Recortar una figura de cartón",
        dificultad: 1,
        pasos: ["Trazar la figura con el lápiz", "Recortar por fuera de la línea", "Borrar la marca del lápiz"]
      },
      {
        titulo: "Armar un carrito de cartón",
        dificultad: 2,
        pasos: ["Conseguir una caja de cartón", "Pegar las ruedas en los lados", "Dejar secar la pega un rato"]
      },
      {
        titulo: "Rehacer el puente que se dobla",
        dificultad: 3,
        pasos: ["Mirar por qué se dobla el papel", "Probar dobladitos en la hoja", "Volver a poner la carga encima"]
      }
    ]
  },

  "tecnologia--diseno--c2": {
    id: "tecnologia--diseno--c2",
    nombre: "Objetos: qué necesidad resuelven",
    preguntas: [
      {
        enunciado: "Todo objeto técnico existe para",
        opciones: ["resolver una necesidad de las personas", "llenar el espacio de la casa", "pesar menos que los otros", "servir de adorno en la sala"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "El termo de la lonchera resuelve la necesidad de",
        opciones: ["mantener la bebida caliente un buen rato", "hacer más pesada la mochila", "medir el tiempo del recreo", "contar las raciones de comida"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "Las partes de un objeto que se unen para que funcione son",
        opciones: ["sus componentes", "sus adornos", "su empaque", "su marca"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "La mejora que se le hace a un objeto después de usarlo es",
        opciones: ["una innovación sobre el diseño inicial", "un daño del material", "una decoración del empaque", "una compra nueva"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "La mamá de Sara plancha en el piso de la cocina. ¿Qué necesidad de diseño detectamos ahí?",
        opciones: ["una superficie firme para planchar sin dañarse", "una cocina más grande para la casa", "una estufa que caliente más rápido", "un tablero donde escribir la tarea"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Una sandalia se rompe siempre por la misma correa. ¿Qué parte del objeto revisamos?",
        opciones: ["el punto de unión de la correa", "el color del suela", "el tamaño de la caja", "el nombre de la marca"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "¿Cuál de estos objetos cumple la misma función que la bolsa plástica del mercado?",
        opciones: ["la bolsa de tela reutilizable", "la moneda del comprador", "el recibo impreso", "el carro de dos ruedas"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "El timbre de la escuela suena en las dos sedes. Su función es",
        opciones: ["avisar los cambios de hora", "medir la llegada de cada estudiante", "contar los salones de la sede", "iluminar el pasillo del primer piso"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Comparamos la escoba común con la que trae recogedor: la segunda resuelve además",
        opciones: ["la necesidad de recoger la basura sin agacharse", "la necesidad de barrer pisos de concreto", "el guardado de la escoba en la pared", "el costo de compra del cepillo"],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "La estufa de leña de la cocina rural calienta los alimentos; además seca la ropa tendida cerca. El objeto entonces",
        opciones: ["cumple más de una función", "está mal diseñado", "debe comprarse dos veces", "perdió su función principal"],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "¿Qué problema trae un diseño que no parte de la necesidad de sus usuarios?",
        opciones: ["el objeto puede quedar bonito y aun así no servir", "el objeto sale más barato de construir", "el objeto se daña por el uso diario", "el objeto necesita más pintura"],
        correcta: 0,
        dificultad: 3
      }
    ],
    retos: [
      {
        titulo: "Descubrir la necesidad detrás de un objeto",
        dificultad: 1,
        pasos: ["Observar el objeto en su uso real", "Anotar qué problema resuelve", "Relacionar el objeto con esa necesidad", "Explicar por qué la resuelve bien"]
      },
      {
        titulo: "Proponer una mejora a la lonchera del salón",
        dificultad: 2,
        pasos: ["Identificar la queja más repetida del curso", "Pensar en dos soluciones posibles", "Elegir la solución más fácil de construir", "Probarla con el uso de un día completo"]
      },
      {
        titulo: "Comparar dos objetos que cumplen la misma función",
        dificultad: 3,
        pasos: ["Definir la función que se quiere cumplir", "Listar las partes de cada objeto", "Probar los dos con la misma tarea", "Concluir cuál cumple mejor y decir por qué"]
      }
    ]
  },

  "tecnologia--diseno--c3": {
    id: "tecnologia--diseno--c3",
    nombre: "Planos, prototipos y materiales",
    preguntas: [
      {
        enunciado: "Un plano de un objeto, a diferencia de un boceto, incluye",
        opciones: ["medidas, escala y simbología", "solo la forma aproximada", "únicamente colores del dibujo", "el nombre de quien lo construyó"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "En un plano, la escala 1:10 significa que",
        opciones: ["cada centímetro del dibujo representa diez centímetros del objeto", "el objeto mide diez metros de alto", "el dibujo es diez veces más grande que el objeto", "el plano se imprime en diez hojas"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "Un prototipo es",
        opciones: ["una primera versión construible para probar el diseño", "el dibujo definitivo guardado en el archivo", "el manual de uso impreso del producto", "el presupuesto entregado al cliente"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "La ficha técnica de un material registra",
        opciones: ["propiedades como dureza, peso y resistencia", "el precio de venta del año pasado", "el nombre de la tienda donde se compra", "la opinión del comprador del material"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "Para la cartelera transparente y liviana del salón elegimos",
        opciones: ["el acrílico", "el concreto", "el ladrillo", "la madera de pino"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "El plano de la maqueta de la escuela tiene la vista frontal y la superior. La vista superior aporta",
        opciones: ["cómo se distribuyen las partes sobre el terreno", "la altura real de cada edificio", "el color de las paredes del salón", "el nombre de los materiales usados"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Antes de construir la torre con material de desecho conviene",
        opciones: ["hacer un modelo pequeño y probarlo", "comprar todo el material de una vez", "pintar la base de color oscuro", "medir la sombra del lugar escogido"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "La tapa de la caja no cierra después de armarla siguiendo el plano. El problema más probable está en",
        opciones: ["las dimensiones dibujadas en el plano", "el color elegido para la caja", "el peso del cartón usado", "la marca de la pega aplicada"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Dos puentes de material reciclado, con la misma luz entre apoyos: el de botellas aguanta más peso que el de cartón prensado. ¿Qué hacemos con ese dato?",
        opciones: ["registrarlo y repetir la prueba con cargas crecientes", "descartar el cartón para siempre", "cambiar la luz de uno de los dos puentes", "elegir el puente más barato sin más pruebas"],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "La silla de respaldo bajo se aprobó en plano, pero en el prototipo los estudiantes se cansan. ¿Qué etapa del proceso falló?",
        opciones: ["la prueba con usuarios, que debía hacerse antes de aprobar", "el trazado de la vista lateral del plano", "la compra de la madera del asiento", "la decoración final de la silla"],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Un plano debe poder ser leído por alguien que no hizo el dibujo porque",
        opciones: ["el plano comunica el diseño a quien va a construirlo", "el papel del plano es muy costoso", "los planos se guardan en la biblioteca", "el dibujo debe quedar bonito en la pared"],
        correcta: 0,
        dificultad: 3
      }
    ],
    retos: [
      {
        titulo: "Dibujar el plano de la caseta del jardín",
        dificultad: 1,
        pasos: ["Trazar la vista frontal con su altura", "Añadir la vista superior de la base", "Rotular las medidas de cada lado", "Escribir el material de cada parte"]
      },
      {
        titulo: "Construir el prototipo de la caneca clasificadora",
        dificultad: 2,
        pasos: ["Reunir el material de desecho disponible", "Armar una primera versión que se sostenga", "Probarla con los residuos de un día", "Anotar los cambios que pide el grupo"]
      },
      {
        titulo: "Elegir el material de la bandeja del comedor",
        dificultad: 3,
        pasos: ["Listar las propiedades que exige el uso", "Comparar tres materiales con esa lista", "Descartar los que se deforman con el calor", "Justificar la elección en la ficha técnica"]
      }
    ]
  },

  "tecnologia--diseno--c4": {
    id: "tecnologia--diseno--c4",
    nombre: "Experimentación y control de variables",
    preguntas: [
      {
        enunciado: "En la experimentación de un diseño, la variable independiente es",
        opciones: ["la que el equipo cambia a propósito", "la que se mide como resultado", "la que se mantiene igual en todas las pruebas", "la que decide el docente del proyecto"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "La variable dependiente de una prueba es la que",
        opciones: ["se mide para ver el efecto del cambio", "se cambia a propósito en el diseño", "se deja fija en todos los casos", "se anota al final sin volver a repetirla"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "Mantener constantes las demás variables sirve para",
        opciones: ["atribuir el resultado solo a la variable cambiada", "terminar la prueba más rápido", "gastar menos material del proyecto", "evitar tener que repetir las mediciones"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "El caso con el que comparamos los resultados de una prueba se llama",
        opciones: ["testigo o línea base", "prototipo final", "variable perdida", "informe de cierre"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "Se prueban dos suelas: la misma persona camina la misma distancia con cada par. La variable controlada es",
        opciones: ["el camino recorrido por quien evalúa", "el tipo de suela probado", "la marca registrada del zapato", "la opinión del grupo de estudiantes"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Se estudia el efecto del grosor del cartón en la resistencia de una torre. Para que la comparación sea justa se mantiene igual",
        opciones: ["el tamaño y la forma de la torre", "el grosor de la hoja de cartón", "el peso que se pone encima", "el número de pruebas realizadas"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "El horno solar con pintura negra llegó a 60 °C; el testigo sin pintura, a 40 °C. El registro debe decir que",
        opciones: ["la superficie oscura calentó veinte grados más en las mismas condiciones", "el horno con pintura siempre llega a 60 grados", "la medición del termómetro está mal hecha", "el testigo debe pintarse para la próxima prueba"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Para reducir el error al medir la altura de la planta con la regla se",
        opciones: ["hace la misma medición tres veces y se promedia", "usa una regla distinta en cada planta", "anota solo la medición más alta", "cambia la pregunta del experimento"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "La prueba de la vela aromática se hizo con una sola vela de cada tipo. ¿Qué limita esa conclusión?",
        opciones: ["una sola muestra no permite atribuir la diferencia al diseño", "las velas se quemaron demasiado rápido", "el color de la cera no era el mismo", "la mecha de las velas era de algodón"],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Dos equipos prueban el mismo filtro de agua: uno mide el tiempo de filtrado, el otro el color del agua que sale. Antes de comparar deben acordar",
        opciones: ["un mismo indicador de resultado y un mismo procedimiento", "qué equipo termina primero la prueba", "cuántos grados de temperatura tiene el agua", "en qué salón se hará la próxima medición"],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Al graficar peso soportado contra número de pliegues del papel, la línea sube hasta seis pliegues y baja después. La lectura correcta es",
        opciones: ["hay un punto óptimo: más allá de seis pliegues el papel pierde resistencia", "el papel no soporta ningún peso con pliegues", "la gráfica está mal trazada por completo", "más pliegues siempre significa más resistencia"],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "El ventilador de la maqueta solo enfría cuando se abre la ventana del salón. ¿Qué concluye el equipo?",
        opciones: ["la corriente de la ventana era una variable sin control", "el ventilador de la maqueta está dañado", "la maqueta debe pintarse de color claro", "el termómetro del salón no sirve para esto"],
        correcta: 0,
        dificultad: 3
      }
    ],
    retos: [
      {
        titulo: "Diseñar la prueba de un material aislante",
        dificultad: 1,
        pasos: ["Definir la pregunta que se quiere responder", "Elegir el material que se va a cambiar", "Decidir qué se mide en cada prueba", "Mantener iguales las demás condiciones"]
      },
      {
        titulo: "Probar la resistencia del casco de la bicicleta",
        dificultad: 2,
        pasos: ["Preparar tres cascos del mismo tamaño", "Soltar el mismo peso desde la misma altura", "Repetir la caída tres veces por casco", "Registrar la marca dejada en cada casco", "Comparar los registros de los tres casos"]
      },
      {
        titulo: "Corregir el experimento de la planta del aula",
        dificultad: 3,
        pasos: ["Revisar si todas las plantas recibieron la misma luz", "Identificar la variable que cambió sin control", "Repetir la prueba con solo el factor de interés", "Registrar de nuevo los datos en la tabla", "Volver a concluir con el experimento corregido"]
      }
    ]
  },

  "tecnologia--diseno--c5": {
    id: "tecnologia--diseno--c5",
    nombre: "Design thinking e innovación",
    preguntas: [
      {
        enunciado: "El design thinking empieza por la etapa de",
        opciones: ["empatizar con quienes usan el producto", "vender la idea al público", "calcular la utilidad del proyecto", "comprar la maquinaria necesaria"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "La fase de idear consiste en",
        opciones: ["generar muchas ideas sin juzgarlas todavía", "elegir la primera idea que aparece", "construir ya el producto final", "cerrar el proyecto por falta de tiempo"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "Una innovación es viable cuando",
        opciones: ["se puede sostener con los recursos reales disponibles", "usa la tecnología más costosa del mercado", "tiene el logo más llamativo del sector", "funciona solo en un laboratorio del país"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "El mapeo de actores de un proyecto permite",
        opciones: ["identificar a las personas afectadas por el problema", "contar los metros cuadrados de la sede", "ordenar las facturas de la compra", "definir el color del prototipo"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "El equipo recoge treinta encuestas sobre la espera en la coordinación de la sede. Lo que sigue es",
        opciones: ["agrupar las respuestas por causas y escribir una sola frase de problema", "comprar el software que automaticen las filas", "presentar la solución al directivo sin más análisis", "cerrar la encuesta y no volver a revisarla"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "La sede queda en una zona donde las casas no tienen internet. La innovación del proyecto de deberes debe priorizar",
        opciones: ["soluciones que funcionen sin conexión permanente", "tareas que exijan videollamadas diarias", "una app que ocupe mucho almacenamiento", "material descargable solo en la nube"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "En la fase de prototipar el equipo construye",
        opciones: ["un modelo rápido y barato que se pueda probar con usuarios", "el producto ya empaquetado para la venta", "el informe final impreso del proyecto", "el presupuesto detallado de la producción"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Se propone una app de lectura para la sede rural. ¿Qué pregunta de la fase de prueba es más útil?",
        opciones: ["¿los lectores terminan más textos en una semana con la app?", "¿de qué color es el fondo de la pantalla?", "¿cuántos likes recibió el anuncio de la app?", "¿quién diseño los iconos de la aplicación?"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "El riego automático del invernadero agrada al equipo, pero las familias dicen que obliga a mirar el celular todo el día. ¿Qué criterio se afecta?",
        opciones: ["la deseabilidad, porque el sistema impone una carga a sus usuarios", "la viabilidad técnica del circuito de riego", "la durabilidad de las mangueras instaladas", "la escala del plano del invernadero"],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Contra la basura del descanso se comparan una app de reporte y una brigada estudiantil con turnos. La app cuesta mucho y el internet falla; la brigada funciona. En la elección pesa más",
        opciones: ["la factibilidad de la solución en el contexto de la sede", "la novedad tecnológica de la aplicación", "el número de pantallas usadas por la app", "la cantidad de ideas anotadas en la lluvia de ideas"],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "La sustentación del proyecto de grado menciona el problema y la solución, pero no muestra evidencia de la prueba. ¿Qué falta para convencer?",
        opciones: ["los datos recogidos al probar la solución con usuarios", "el logo del colegio en la portada", "una lista de los materiales comprados", "el nombre de cada integrante del equipo"],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "¿Qué señal indica que la definición del problema está mal formulada?",
        opciones: ["los usuarios entrevistados no reconocen su situación en esa frase", "la frase del problema es corta y clara", "el equipo tiene muchas ideas para resolverlo", "la solución ya tiene prototipo construido"],
        correcta: 0,
        dificultad: 3
      }
    ],
    retos: [
      {
        titulo: "Mapear el problema de la basura del descanso",
        dificultad: 1,
        pasos: ["Entrevistar a los estudiantes del descanso", "Observar dónde se acumulan los residuos", "Agrupar las causas repetidas por todos", "Escribir el problema en una frase concreta"]
      },
      {
        titulo: "Prototipar el sistema de reciclaje de la sede",
        dificultad: 2,
        pasos: ["Dibujar la idea en un boceto rápido", "Construir el modelo con material disponible", "Probarlo con el curso durante dos días", "Recoger las quejas de quien lo usó", "Ajustar el prototipo con lo aprendido"]
      },
      {
        titulo: "Cerrar el ciclo de design thinking en el proyecto",
        dificultad: 3,
        pasos: ["Empatizar con entrevistas a los usuarios reales", "Definir el problema en una frase verificable", "Idear y seleccionar dos propuestas viables", "Prototipar la propuesta elegida", "Probar el prototipo con los usuarios", "Documentar los cambios para la nueva versión"]
      }
    ]
  }
};
