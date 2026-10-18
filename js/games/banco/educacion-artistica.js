// js/games/banco/educacion-artistica.js
// Banco de Educación Artística para la plataforma escolar.
// Cinco ejes (artes plásticas, música, escena, patrimonio, estética) por los
// cinco ciclos del MEN, con el marco de los Estándares Básicos de Competencias
// del Arte, la Cultura y los Sentidos: identidad, expresión, interpretación y
// comprensión artística, apreciación estética.
// Convención del motor: la respuesta correcta se escribe siempre primero
// (correcta: 0) y el juego la baraja; el distractor más plausible va en la
// posición 1 porque es el primero que se conserva al recortar opciones en 1°-5°.

export const BANCO = {
  // -----------------------------------------------------------------------
  // EJE: Artes plásticas y visuales
  // -----------------------------------------------------------------------
  "educacion-artistica--artes-plasticas--c1": {
    id: "educacion-artistica--artes-plasticas--c1",
    nombre: "Colores primarios, líneas y formas",
    preguntas: [
      { dificultad: 1, enunciado: "¿Cuáles son los colores primarios?", opciones: ["Rojo, amarillo y azul", "Verde, naranja y morado", "Rojo, verde y café", "Azul, gris y blanco"], correcta: 0 },
      { dificultad: 1, enunciado: "¿Qué color forma el amarillo cuando lo mezclo con azul?", opciones: ["Verde", "Morado", "Naranja", "Café"], correcta: 0 },
      { dificultad: 1, enunciado: "¿Qué color nace de mezclar rojo con amarillo?", opciones: ["Naranja", "Verde", "Azul", "Rosado"], correcta: 0 },
      { dificultad: 1, enunciado: "¿Qué figura tiene tres lados?", opciones: ["El triángulo", "El cuadrado", "El círculo", "El rectángulo"], correcta: 0 },
      { dificultad: 1, enunciado: "¿Con qué línea dibujo el borde recto de un marco?", opciones: ["Línea recta", "Línea ondulada", "Línea en espiral", "Línea de punticos"], correcta: 0 },
      { dificultad: 2, enunciado: "Ana quiere pintar el pasto del patio. ¿Qué dos colores mezcla?", opciones: ["Amarillo con azul", "Rojo con amarillo", "Azul con rojo", "Rojo con blanco"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Qué colores escojo para pintar un atardecer?", opciones: ["Rojo, naranja y amarillo", "Azul y verde", "Gris y negro", "Celeste y morado"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Con qué herramienta extiendo la pintura líquida en la hoja?", opciones: ["El pincel", "El borrador", "La tijera", "El sacapuntas"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Qué figura uso para dibujar la rueda de una carreta?", opciones: ["El círculo", "El triángulo", "El rectángulo", "La estrella"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Qué color me queda si junto rojo con azul?", opciones: ["Morado", "Verde", "Naranja", "Celeste"], correcta: 0 },
      { dificultad: 3, enunciado: "Pedro dice que el verde sale de rojo con amarillo. ¿Qué le respondo?", opciones: ["Que se equivoca: el verde sale de amarillo con azul", "Que tiene razón con esa mezcla", "Que el verde no se puede pintar", "Que el verde sale solo de blanco"], correcta: 0 },
      { dificultad: 3, enunciado: "Marta dibujó solo líneas quebradas. ¿Qué puede ser?", opciones: ["Una montaña con picos", "El piso liso de la cocina", "La carretera del pueblo", "Un charco quieto"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Cuál de estos trabajos es una escultura?", opciones: ["La figurita de plastilina", "El dibujo con crayola", "La foto de la mascota", "El coloreado de una hoja"], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Poner pintura en la paleta", pasos: ["Sacar un poco de pintura de cada frasco", "Poner cada color en su huequito", "Mover el pincel para unir dos colores"] },
      { dificultad: 2, titulo: "Hacer una serpiente de plastilina", pasos: ["Tomar un pedazo de plastilina", "Estirarlo con la palma en la mesa", "Doblar la punta para la cabecita"] },
      { dificultad: 3, titulo: "Dibujar una casa con formas", pasos: ["Trazar el piso con una línea recta", "Cerrar las paredes con un cuadrado", "Montar el techo con un triángulo"] }
    ]
  },

  "educacion-artistica--artes-plasticas--c2": {
    id: "educacion-artistica--artes-plasticas--c2",
    nombre: "Color, textura y composición",
    preguntas: [
      { dificultad: 1, enunciado: "¿Cómo se llaman los colores que nacen de mezclar dos primarios?", opciones: ["Secundarios", "Cálidos", "Neutros", "Complementarios"], correcta: 0 },
      { dificultad: 1, enunciado: "¿Cuál de estos es un color cálido?", opciones: ["El naranja", "El azul", "El verde agua", "El morado"], correcta: 0 },
      { dificultad: 1, enunciado: "¿Cuál de estos es un color frío?", opciones: ["El azul", "El rojo", "El amarillo", "El naranja"], correcta: 0 },
      { dificultad: 1, enunciado: "La textura que puedo sentir con la mano se llama:", opciones: ["Táctil", "Visual", "Sonora", "Digital"], correcta: 0 },
      { dificultad: 1, enunciado: "¿Cómo se llama el trabajo que armo pegando retazos de papel?", opciones: ["Collage", "Xilografía", "Fresco", "Estampado"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Dónde ubico el objeto principal para que el dibujo se vea ordenado?", opciones: ["En el centro o en un punto de interés", "Escondido en una esquina", "Encima del borde de la hoja", "Fuera del papel"], correcta: 0 },
      { dificultad: 2, enunciado: "Si a un color le agrego bastante blanco, obtengo un color:", opciones: ["Más claro", "Más oscuro", "Más cálido", "Más pesado"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Qué me sirve para lograr una superficie rugosa en mi hoja?", opciones: ["Pegar arena y usar técnica mixta", "Solo acuarela con agua", "Solo crayola de cera", "Solo una línea de grafito"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Qué pareja de colores se opone en el círculo cromático?", opciones: ["Amarillo con morado", "Rojo con naranja", "Azul con verde", "Amarillo con verde"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Cómo diferencio una obra abstracta de una figurativa?", opciones: ["La figurativa muestra objetos reconocibles y la abstracta no", "La abstracta siempre es más grande", "La figurativa solo usa lápiz", "No hay ninguna diferencia"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Por qué un mismo color se ve distinto sobre negro que sobre blanco?", opciones: ["Porque el fondo cambia cómo percibimos el color", "Porque el color cambia de nombre", "Porque la hoja se ensucia", "Porque el pincel lo gasta"], correcta: 0 },
      { dificultad: 3, enunciado: "Dos compañeros pintan el mar: uno con azules, otro con rojos. ¿Cuál transmite frío?", opciones: ["El que usa azul y verde", "El que usa rojo y naranja", "Los dos por igual", "Ninguno, el color no afecta"], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Armar un collage de papeles", pasos: ["Reunir papeles de colores y pegante", "Recortar formas pequeñas", "Componer la figura sobre la hoja", "Pegar todo cuando me gusta el conjunto"] },
      { dificultad: 2, titulo: "Dividir la hoja en cálidos y fríos", pasos: ["Recordar los colores cálidos", "Dividir la hoja en dos mitades", "Pintar una mitad con cálidos", "Pintar la otra con fríos"] },
      { dificultad: 3, titulo: "Componer un paisaje con protagonista", pasos: ["Decidir qué objeto será el protagonista", "Ubicarlo en un punto de la hoja", "Agrandarlo y pintarlo con fuerza", "Trabajar el fondo con menos detalle"] }
    ]
  },

  "educacion-artistica--artes-plasticas--c3": {
    id: "educacion-artistica--artes-plasticas--c3",
    nombre: "Perspectiva y claroscuro",
    preguntas: [
      { dificultad: 1, enunciado: "¿Cómo se llama el punto donde parece que se encuentran las líneas del camino?", opciones: ["Punto de fuga", "Línea de horizonte", "Eje de simetría", "Centro geométrico"], correcta: 0 },
      { dificultad: 1, enunciado: "En un paisaje de mar, la línea de horizonte marca:", opciones: ["Donde el cielo parece tocar el mar", "La orilla donde pisan las olas", "El borde superior del papel", "La sombra de un barco"], correcta: 0 },
      { dificultad: 1, enunciado: "¿Qué técnica trabaja luces y sombras para dar sensación de volumen?", opciones: ["El claroscuro", "El puntillismo", "El collage", "El estarcido"], correcta: 0 },
      { dificultad: 1, enunciado: "En perspectiva, un objeto que está más cerca se ve:", opciones: ["Más grande", "Más pequeño", "Del mismo tamaño", "Solo como silueta"], correcta: 0 },
      { dificultad: 1, enunciado: "La escala de valores sirve para ordenar los tonos según su:", opciones: ["Mayor o menor claridad", "Temperatura del color", "Cantidad de pigmento", "Grosor del trazo"], correcta: 0 },
      { dificultad: 2, enunciado: "Dibujo una carretera que se aleja: las líneas de sus bordes deben:", opciones: ["Juntarse hacia el punto de fuga", "Separarse cada vez más", "Quedar paralelas y separadas", "Desaparecer de inmediato"], correcta: 0 },
      { dificultad: 2, enunciado: "Si la luz llega desde la izquierda, la sombra principal queda:", opciones: ["Hacia la derecha del objeto", "Encima del objeto", "Repartida por igual alrededor", "En la parte de atrás, invisible"], correcta: 0 },
      { dificultad: 2, enunciado: "En la perspectiva aérea, los montes lejanos se pintan:", opciones: ["Más claros y azulados", "Más oscuros y saturados", "Con líneas gruesas negras", "Con rojo intenso"], correcta: 0 },
      { dificultad: 2, enunciado: "El sombreado hecho con líneas que se cruzan se llama:", opciones: ["Achurado cruzado", "Punteado", "Esfumado", "Empaste"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Por qué una nube no suele tener sombra dura?", opciones: ["Porque la luz difusa la rodea por todos lados", "Porque las nubes son blancas", "Porque están demasiado lejos", "Porque el viento las mueve"], correcta: 0 },
      { dificultad: 3, enunciado: "En un bodegón, ¿cuál luz da más volumen a las frutas?", opciones: ["Una luz lateral marcada", "Una luz frontal y pareja", "Una luz desde atrás solo", "Oscuridad total"], correcta: 0 },
      { dificultad: 3, enunciado: "En un dibujo el fondo es más grande que lo del frente. ¿Qué error tiene?", opciones: ["Invierte la perspectiva: agranda lo lejano", "Le falta color", "Usa demasiadas texturas", "No deja bordes blancos"], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Marcar la línea de horizonte", pasos: ["Ubicar la franja del cielo", "Trazar la línea donde el cielo toca el suelo", "Colocar los objetos lejanos sobre esa línea", "Poner los cercanos más abajo y grandes"] },
      { dificultad: 2, titulo: "Dibujar un camino en perspectiva", pasos: ["Trazar dos líneas que se abren hacia el frente", "Buscar el punto de fuga en el horizonte", "Unir las líneas hacia ese punto", "Achicar los árboles conforme se alejan"] },
      { dificultad: 3, titulo: "Sombrear una esfera con claroscuro", pasos: ["Iluminar la esfera desde un lado", "Marcar la luz más alta con blanco", "Sombrear el lado opuesto con gradientes", "Añadir la sombra proyectada en la base"] }
    ]
  },

  "educacion-artistica--artes-plasticas--c4": {
    id: "educacion-artistica--artes-plasticas--c4",
    nombre: "Teoría del color y composición",
    preguntas: [
      { dificultad: 1, enunciado: "¿Cuántos colores tiene el círculo cromático clásico de doce partes?", opciones: ["Doce", "Tres", "Seis", "Veinticuatro"], correcta: 0 },
      { dificultad: 1, enunciado: "Se llaman colores análogos los que:", opciones: ["Están vecinos en el círculo cromático", "Están opuestos en el círculo", "Son todos primarios", "Solo se usan en el blanco y negro"], correcta: 0 },
      { dificultad: 1, enunciado: "La saturación de un color se refiere a:", opciones: ["Qué tan puro e intenso se ve", "Qué tan grande se dibuja", "Cuánto pesa el tubo de pintura", "En qué sala del museo está"], correcta: 0 },
      { dificultad: 1, enunciado: "En la mezcla aditiva de la pantalla, los colores luz son:", opciones: ["Rojo, verde y azul", "Cian, magenta y amarillo", "Rojo, amarillo y azul", "Blanco, gris y negro"], correcta: 0 },
      { dificultad: 1, enunciado: "La regla de tercios divide el formato en:", opciones: ["Nueve partes con dos líneas verticales y dos horizontales", "Cuatro partes iguales con una cruz", "Dos mitades con una línea", "Siete franjas diagonales"], correcta: 0 },
      { dificultad: 2, enunciado: "Para imprimir una revista se trabaja con los colores:", opciones: ["Cian, magenta, amarillo y negro", "Rojo, verde y azul", "Sólamente primarios", "Ocre, tierra y verde sombra"], correcta: 0 },
      { dificultad: 2, enunciado: "Si quiero que un rojo pierda intensidad sin ponerle negro o blanco, mezclo con:", opciones: ["Su color complementario, el verde", "Su vecino análogo, el naranja", "Otro rojo más saturado", "Un color igual en menos tamaño"], correcta: 0 },
      { dificultad: 2, enunciado: "Para que un cartel guide la mirada hacia el texto importante, conviene:", opciones: ["Contrastar color y tamaño en ese punto", "Usar el mismo color en todo", "Poner solo texturas grises", "Borrar los bordes del cartel"], correcta: 0 },
      { dificultad: 2, enunciado: "Un equilibrio asimétrico en una composición se logra cuando:", opciones: ["Los elementos distintos se compensan por peso visual", "Todo se copia igual en cada lado", "Se llena la hoja de un solo color", "Se deja el centro vacío siempre"], correcta: 0 },
      { dificultad: 3, enunciado: "Al analizar un cartel, ¿qué diferencia hay entre contraste y énfasis?", opciones: ["El contraste es diferencia de elementos y el énfasis es el punto que manda", "Son dos nombres para lo mismo", "El énfasis solo se hace con color", "El contraste exige borrar el fondo"], correcta: 0 },
      { dificultad: 3, enunciado: "Dos paletas cuentan cosas distintas: la de azules grises frente a la de rojos vivos. ¿Qué interpretamos?", opciones: ["Que el clima emocional del mensaje cambia", "Que una está mal impresa", "Que la segunda gasta más pintura", "Que la primera no es arte"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Por qué el ritmo visual funciona en una composición?", opciones: ["Porque la repetición de elementos organiza el recorrido de la mirada", "Porque obliga a usar música de fondo", "Porque elimina el punto focal", "Porque hace todo simétrico"], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Construir una escala de saturación", pasos: ["Elegir un color base", "Preparar varias porciones iguales", "Añadir pigmento puro a la primera", "Mezclar las demás con blanco o gris", "Ordenar las pruebas de más a menos intenso"] },
      { dificultad: 2, titulo: "Diseñar una paleta análoga para una ilustración", pasos: ["Ubicar el color principal en el círculo", "Tomar los dos colores vecinos", "Definir cuál será claro y cuál oscuro", "Probar la paleta en un guion de cajas", "Revisar que el texto se pueda leer"] },
      { dificultad: 3, titulo: "Componer con regla de tercios", pasos: ["Dividir el formato en nueve partes", "Elegir dos puntos de cruce", "Poner el protagonista en un cruce", "Dejar respirar el resto del plano", "Verificar el peso visual del conjunto"] }
    ]
  },

  "educacion-artistica--artes-plasticas--c5": {
    id: "educacion-artistica--artes-plasticas--c5",
    nombre: "Movimientos artísticos y análisis de obra",
    preguntas: [
      { dificultad: 1, enunciado: "¿Qué movimiento busca captar la luz y el instante con pinceladas sueltas?", opciones: ["El impresionismo", "El cubismo", "El surrealismo", "El neoclasicismo"], correcta: 0 },
      { dificultad: 1, enunciado: "El cubismo muestra los objetos:", opciones: ["Desde varios puntos de vista a la vez", "Solo como siluetas negras", "Con colores cálidos siempre", "Copiados de la fotografía"], correcta: 0 },
      { dificultad: 1, enunciado: "Fernando Botero, nacido en Medellín, es reconocido por:", opciones: ["Dar volumen exagerado a sus figuras", "Pintar solo mapas de Colombia", "Trabajar exclusivamente con máquina", "Firmar obras sin figuras humanas"], correcta: 0 },
      { dificultad: 1, enunciado: "El Museo Botero de Bogotá pertenece a una colección que:", opciones: ["El artista donó a una entidad pública del Banco de la República", "Se alquiló por un año", "Fue comprada en un remate", "Nunca se abrió al público"], correcta: 0 },
      { dificultad: 1, enunciado: "¿Qué es el arte abstracto?", opciones: ["Un arte que no representa objetos reconocibles del mundo visible", "Un arte que solo copia retratos", "Un arte hecho en piedra", "Un arte sin uso de color"], correcta: 0 },
      { dificultad: 2, enunciado: "En un muralismo mexicano vemos figuras grandes, contornos marcados y mensaje social. Su función era:", opciones: ["Llevar la historia a un público amplio fuera del museo", "Vender cuadros pequeños a coleccionistas", "Reemplazar la fotografía", "Decorar salas privadas"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Qué recurso permite reconocer una obra surrealista?", opciones: ["Imágenes oníricas imposibles pintadas con precisión", "Solo manchas de color al azar", "Mapas técnicos de ingeniería", "Retratos de familia reales"], correcta: 0 },
      { dificultad: 2, enunciado: "Al aplicar el método de análisis de una obra, el paso que sigue a la descripción es:", opciones: ["El análisis de los elementos visuales y la composición", "El juicio de valor inmediato", "La compra de la obra", "La firma del autor"], correcta: 0 },
      { dificultad: 2, enunciado: "El tenebrismo barroco, con fondos oscuros y focos de luz fuertes, se usa para:", opciones: ["Dramatizar el tema y dirigir la atención", "Mostrar el paisaje completo", "Ahorrar pigmento claro", "Imitar la pintura digital"], correcta: 0 },
      { dificultad: 3, enunciado: "Un crítico afirma que Botero pinta obesos. La respuesta que mejor sostiene su propuesta estética es:", opciones: ["Que a Botero le interesa el volumen y la masa, no la obesidad", "Que el cuerpo en el arte no importa", "Que las figuras son retratos de vecinos", "Que el tamaño del lienzo obliga"], correcta: 0 },
      { dificultad: 3, enunciado: "Compara el realismo decimonónico con el arte conceptual: ¿dónde está el desplazamiento?", opciones: ["Del parecido con la apariencia al peso de la idea y el proceso", "Del lienzo a la piedra", "Del color al blanco y negro", "De museos a templos"], correcta: 0 },
      { dificultad: 3, enunciado: "Una pintura de Alejandro Obregón con caymanes y un Caribe denso se inscribe en una línea colombiana que:", opciones: ["Une la región caribe con una mirada simbólica y de color intenso", "Copia escenas europeas sin referencias locales", "Usa solo fotografía impresa", "Renuncia al tema territorial"], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Describir una obra antes de interpretarla", pasos: ["Anotar los datos de la ficha técnica", "Enumerar lo que veo sin adjetivos", "Ordenar la descripción por zonas", "Separar hechos de suposiciones", "Revisar si faltan elementos del fondo", "Guardar las dudas para la interpretación"] },
      { dificultad: 2, titulo: "Montar una línea de tiempo de movimientos artísticos", pasos: ["Listar los movimientos a estudiar", "Buscar el contexto de cada uno", "Ubicar cada movimiento en el orden cronológico", "Añadir una obra representativa a cada uno", "Señalar qué ruptura propone cada uno", "Colgar la línea en el aula y comentarla"] },
      { dificultad: 3, titulo: "Escribir una reseña crítica de una obra vista en sala", pasos: ["Describir la obra con datos verificables", "Analizar color, composición y técnica", "Interpretar el mensaje según su contexto", "Compararla con otra obra del mismo periodo", "Emitir un juicio con argumentos", "Citar fuentes y revisar la reseña"] }
    ]
  },

  // -----------------------------------------------------------------------
  // EJE: Música
  // -----------------------------------------------------------------------
  "educacion-artistica--musica--c1": {
    id: "educacion-artistica--musica--c1",
    nombre: "Sonido, silencio y pulso",
    preguntas: [
      { dificultad: 1, enunciado: "¿Qué produce un sonido?", opciones: ["Una vibración que llega a mi oído", "Una luz muy fuerte", "Un color cálido", "Un olor dulce"], correcta: 0 },
      { dificultad: 1, enunciado: "¿Qué hacemos cuando escuchamos silencio?", opciones: ["Dejamos de producir sonidos", "Golpeamos la mesa", "Cantamos más fuerte", "Tocamos la flauta"], correcta: 0 },
      { dificultad: 1, enunciado: "¿Qué instrumento golpeo con las manos para marcar el pulso?", opciones: ["El tambor", "La flauta", "El triángulo", "El pito"], correcta: 0 },
      { dificultad: 1, enunciado: "El pulso de una canción se parece a:", opciones: ["El latido constante del corazón", "Un trueno repentino", "Una mancha de color", "Un sabor dulce"], correcta: 0 },
      { dificultad: 1, enunciado: "¿Cuál de estos sonidos es agudo?", opciones: ["El silbato del profe", "El retumbar del tambor grande", "El trueno de la tormenta", "El motor del camión"], correcta: 0 },
      { dificultad: 2, enunciado: "Para que un tambor suene suave debo:", opciones: ["Golpearlo con poca fuerza", "Golpearlo con toda mi fuerza", "Dejarlo tirado en el piso", "Taparlo con las dos manos"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Cómo marco el pulso de una canción?", opciones: ["Aplaudiendo en cada tiempo", "Aplaudiendo cuando yo quiera", "Saltando cada vez más rápido", "Quedándome quieto sin escuchar"], correcta: 0 },
      { dificultad: 2, enunciado: "Toco una cuerda de la guitarra. ¿Qué hace para sonar?", opciones: ["Vibra muy rápido", "Se derrite", "Cambia de color", "Se vuelve más pesada"], correcta: 0 },
      { dificultad: 2, enunciado: "Suena la campana del colegio. ¿Qué me dice ese sonido?", opciones: ["Que una señal avisa algo del salón", "Que va a llover", "Que ya es de noche", "Que se fue el recreo"], correcta: 0 },
      { dificultad: 3, enunciado: "Un amigo dice que en la música no caben silencios. ¿Qué le respondo?", opciones: ["Que sí caben: el silencio también hace música", "Que tiene razón: es puro sonido", "Que el silencio solo sirve para dormir", "Que el silencio suena más fuerte"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Por qué el tambor suena distinto con palito que con la mano?", opciones: ["Porque cambia la vibración y el color del sonido", "Porque el palito es más grande", "Porque la mano no sabe tocar", "Porque suena exactamente igual"], correcta: 0 },
      { dificultad: 3, enunciado: "Escucho una voz gruesa, una voz delgada, un canto fino. ¿Cuál es grave?", opciones: ["La voz gruesa", "La voz delgada", "El canto fino", "Ninguna de ellas"], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Marcar el pulso con palmas", pasos: ["Escuchar la canción un momento", "Aplaudir en cada pulso", "Seguir el pulso hasta el final"] },
      { dificultad: 2, titulo: "Buscar de dónde viene el sonido", pasos: ["Poner atención al ruido que oigo", "Buscar el objeto que vibra", "Imitar ese sonido con mi voz"] },
      { dificultad: 3, titulo: "Jugar a sonido y silencio", pasos: ["Formar un círculo en el salón", "Caminar mientras suena el tambor", "Quedarme quieto en el silencio"] }
    ]
  },

  "educacion-artistica--musica--c2": {
    id: "educacion-artistica--musica--c2",
    nombre: "Ritmo, notas y escalas",
    preguntas: [
      { dificultad: 1, enunciado: "¿Cuántas notas tiene la escala que cantamos con do, re, mi?", opciones: ["Siete", "Cinco", "Doce", "Veinte"], correcta: 0 },
      { dificultad: 1, enunciado: "La organización de los sonidos en el tiempo se llama:", opciones: ["Ritmo", "Altura", "Timbre", "Armonía"], correcta: 0 },
      { dificultad: 1, enunciado: "Si la negra vale un tiempo, ¿cuánto vale la blanca?", opciones: ["Dos tiempos", "Cuatro tiempos", "Medio tiempo", "Ocho tiempos"], correcta: 0 },
      { dificultad: 1, enunciado: "¿Cuántas líneas tiene el pentagrama?", opciones: ["Cinco", "Cuatro", "Seis", "Siete"], correcta: 0 },
      { dificultad: 1, enunciado: "La mayor o menor fuerza con que suena un sonido se llama:", opciones: ["Intensidad", "Duración", "Altura", "Tempo"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Cuánto valen dos corcheas juntas?", opciones: ["Lo que una negra", "Lo que una blanca", "Lo que una redonda doble", "Nada, no suman"], correcta: 0 },
      { dificultad: 2, enunciado: "Queremos cantar una canción más despacio. Cambiamos el:", opciones: ["Tempo", "Timbre", "Compás escrito", "Color de la partitura"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Qué objeto usamos para dar la nota La de afinación?", opciones: ["El diapasón", "El atril", "La pizarra", "El tambor"], correcta: 0 },
      { dificultad: 2, enunciado: "La subida ordenada de notas de un do hasta el siguiente do se llama:", opciones: ["Escala", "Acorde", "Ligadura", "Silencio"], correcta: 0 },
      { dificultad: 3, enunciado: "Dos canciones usan las mismas notas, pero suenan distinto. ¿Qué las separa?", opciones: ["El ritmo con que se ordenan esas notas", "El papel donde están escritas", "El nombre del compositor", "La cantidad de líneas del pentagrama"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Por qué una flauta suena distinto de un violín en la misma nota?", opciones: ["Porque cada instrumento tiene un timbre propio", "Porque cambia la altura de la nota", "Porque el violín toca siempre más fuerte", "Porque la flauta no afina"], correcta: 0 },
      { dificultad: 3, enunciado: "Un patrón rítmico se repite igual en cada compás. ¿Qué decimos de él?", opciones: ["Que es regular y mantiene el pulso", "Que está mal escrito", "Que perdió la melodía", "Que suena más agudo"], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Escribir un patrón con negras y corcheas", pasos: ["Elegir un compás de cuatro tiempos", "Dibujar cuatro espacios en la fila", "Llenar los espacios con negras y corcheas", "Aplaudir el patrón para comprobarlo"] },
      { dificultad: 2, titulo: "Subir por una escala", pasos: ["Tomar do como punto de partida", "Subir nota por nota hasta el otro do", "Cantar señalando la subida con la mano", "Comprobar que la última nota descansa"] },
      { dificultad: 3, titulo: "Crear un acompañamiento para una canción", pasos: ["Escuchar la canción marcando el pulso", "Escoger el instrumento que acompaña", "Ensayar un patrón corto sobre el pulso", "Bajar la intensidad al final de la frase"] }
    ]
  },

  "educacion-artistica--musica--c3": {
    id: "educacion-artistica--musica--c3",
    nombre: "Lenguaje musical, compás e intervalos",
    preguntas: [
      { dificultad: 1, enunciado: "¿Qué indica la clave de sol escrita al inicio del pentagrama?", opciones: ["Que la segunda línea desde abajo es la nota sol", "Que la pieza se toca más lento", "Que el pentagrama se lee al revés", "Que las notas van en la clave de fa"], correcta: 0 },
      { dificultad: 1, enunciado: "La distancia de altura entre dos sonidos se llama:", opciones: ["Intervalo", "Compás", "Armadura", "Cadencia"], correcta: 0 },
      { dificultad: 1, enunciado: "La distancia más pequeña entre dos notas vecinas del teclado es un:", opciones: ["Semitono", "Octava", "Cuarta justa", "Sostenido"], correcta: 0 },
      { dificultad: 1, enunciado: "En un compás de tres cuartos hay:", opciones: ["Tres tiempos por compás", "Cuatro tiempos por compás", "Dos tiempos por compás", "Seis tiempos por compás"], correcta: 0 },
      { dificultad: 1, enunciado: "El signo que baja la nota medio tono es el:", opciones: ["Bemol", "Sostenido", "Silencio de corchea", "Línea adicional"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Cuántas corcheas llenan un compás de cuatro cuartos?", opciones: ["Ocho", "Cuatro", "Dieciséis", "Doce"], correcta: 0 },
      { dificultad: 2, enunciado: "La indicación dinámica para tocar muy fuerte es:", opciones: ["Fortísimo", "Pianíssimo", "Mezzo piano", "Rallentando"], correcta: 0 },
      { dificultad: 2, enunciado: "Un compás binario se diferencia de uno ternario en:", opciones: ["La cantidad de tiempos que se agrupan por compás", "El número de líneas del pentagrama", "La altura de la clave usada", "El tipo de instrumento que lo toca"], correcta: 0 },
      { dificultad: 2, enunciado: "Dos notas se dicen de octava cuando:", opciones: ["Llevan el mismo nombre y una suena más aguda", "Suenan a la vez con distinta intensidad", "Están separadas por un solo semítono", "Están escritas en la misma línea"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Por qué una misma melodía suena alegre en modo mayor y seria en modo menor?", opciones: ["Porque cambia la distribución de tonos y semitonos", "Porque el mayor se toca más lento", "Porque el menor usa menos notas", "Porque el modo depende del público"], correcta: 0 },
      { dificultad: 3, enunciado: "Comparando un 6/8 con un 2/4 al bailar, ¿qué percibimos?", opciones: ["El 6/8 agrupa en dos tiempos compuestos y da balanceo", "El 2/4 suena siempre más fuerte", "Son idénticos en sensación", "El 6/8 no permite bailar"], correcta: 0 },
      { dificultad: 3, enunciado: "Si la partitura pide accelerando desde el compás doce, ¿qué cambia?", opciones: ["El tempo aumenta de forma progresiva", "La tonalidad sube un tono", "La intensidad pasa a piano", "El número de líneas del pentagrama"], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Leer un compás de la partitura", pasos: ["Identificar la clave al inicio del pentagrama", "Contar los tiempos que indica la fracción", "Sumar el valor de cada figura del compás", "Verificar que totalicen los tiempos pedidos"] },
      { dificultad: 2, titulo: "Reconocer un intervalo cantando", pasos: ["Afinar la nota inicial con el diapasón", "Cantar la nota superior del intervalo", "Comparar la distancia entre las dos alturas", "Nombrar el intervalo según esa distancia"] },
      { dificultad: 3, titulo: "Analizar la forma de una pieza breve", pasos: ["Escuchar la pieza completa una vez", "Marcar los momentos en que cambia", "Etiquetar las partes como A, B y A prima", "Comprobar si alguna parte regresa igual"] }
    ]
  },

  "educacion-artistica--musica--c4": {
    id: "educacion-artistica--musica--c4",
    nombre: "Armonía, acordes y forma musical",
    preguntas: [
      { dificultad: 1, enunciado: "Un acorde de tres notas superpuestas por terceras se llama:", opciones: ["Tríada", "Novena", "Arpegio", "Escala cromática"], correcta: 0 },
      { dificultad: 1, enunciado: "La tríada que suena abierta y estable es la:", opciones: ["Mayor", "Menor", "Disminuida", "Suspendida"], correcta: 0 },
      { dificultad: 1, enunciado: "El acorde construido sobre el quinto grado de la escala se llama:", opciones: ["Dominante", "Tónica", "Subdominante", "Sensible"], correcta: 0 },
      { dificultad: 1, enunciado: "La caja, la guacharaca y el acordeón forman el conjunto tradicional del:", opciones: ["Vallenato", "Bambuco", "Joropo", "Currulao"], correcta: 0 },
      { dificultad: 1, enunciado: "El bambuco es un género musical de la región:", opciones: ["Andina, con fuerza en Tolima, Huila y Cundinamarca", "Caribe de la costa norte", "Orinoquense de los llanos", "Amazona del sur del país"], correcta: 0 },
      { dificultad: 2, enunciado: "Los instrumentos habituales del joropo de la Orinoquía son:", opciones: ["Arpa, bandola y cuatro", "Tiple, guitarra y bandola", "Marimba, cununo y llorador", "Gaita, llamador y maracas"], correcta: 0 },
      { dificultad: 2, enunciado: "Para cerrar una frase con sensación de final, el compositor usa:", opciones: ["Una cadencia V-I", "Un ostinato de corcheas", "Un acorde aislado sin relación", "Un cambio de instrumento"], correcta: 0 },
      { dificultad: 2, enunciado: "En una forma ternaria A-B-A, la sección B suele:", opciones: ["Contrastar con A en melodía, tonalidad o carácter", "Repetir A nota por nota", "Eliminar el pulso de la pieza", "Ser siempre la parte final"], correcta: 0 },
      { dificultad: 2, enunciado: "El patrón que se repite obstinadamente bajo la melodía se llama:", opciones: ["Ostinato", "Cadencia", "Puente", "Coda"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Por qué el acorde de séptima de dominante pide resolver a la tónica?", opciones: ["Porque su tritono crea una tensión que busca reposo", "Porque es el acorde más grave", "Porque suena más fuerte que los demás", "Porque lleva menos notas"], correcta: 0 },
      { dificultad: 3, enunciado: "Compara el acompañamiento del bambuco con el del vallenato:", opciones: ["El bambuco usa cuerdas como el tiple; el vallenato, acordeón y percusión", "Ambos usan exactamente los mismos instrumentos", "El vallenato se acompana solo con arpa", "El bambuco renuncia a la armonía"], correcta: 0 },
      { dificultad: 3, enunciado: "Dos piezas comparten progresión de acordes pero una es balada y otra son. ¿Qué define el género?", opciones: ["El patrón rítmico, el tempo y el fraseo, más que la armonía", "El color de la carátula del disco", "La cantidad de acordes usados", "El idioma del público"], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Montar una tríada mayor sobre do", pasos: ["Elegir do como nota fundamental", "Subir una tercera hasta mi", "Subir otra tercera hasta sol", "Pulsar las tres notas a la vez", "Escuchar la consonancia del acorde"] },
      { dificultad: 2, titulo: "Analizar la forma de una canción popular", pasos: ["Escuchar la canción completa", "Marcar cada sección que cambia", "Nombrar estrofa, coro y puente", "Comprobar las repeticiones de la melodía", "Escribir el esquema con letras"] },
      { dificultad: 3, titulo: "Armonizar una melodía con I, IV y V", pasos: ["Identificar la tonalidad de la melodía", "Acomodar cada nota a un acorde posible", "Probar la sucesión I-IV-V-I en la guitarra", "Buscar una cadencia V-I en el cierre", "Escuchar el conjunto y ajustar los cambios"] }
    ]
  },

  "educacion-artistica--musica--c5": {
    id: "educacion-artistica--musica--c5",
    nombre: "Acústica, historia de la música y composición",
    preguntas: [
      { dificultad: 1, enunciado: "¿En qué unidad se mide la frecuencia de un sonido?", opciones: ["En hercios", "En decibelios", "En metros por segundo", "En lúmenes"], correcta: 0 },
      { dificultad: 1, enunciado: "La persistencia del sonido en una sala después de apagada la fuente es:", opciones: ["La reverberación", "El eco único", "La absorción", "La afinación"], correcta: 0 },
      { dificultad: 1, enunciado: "El período de la música europea que va aproximadamente de 1600 a 1750 es:", opciones: ["El Barroco", "El Clasicismo", "El Renacimiento", "El Romanticismo"], correcta: 0 },
      { dificultad: 1, enunciado: "La forma sonata se organiza en tres partes:", opciones: ["Exposición, desarrollo y reexposición", "Inicio, nudo y desenlace", "Preludio, fuga y coral", "Estrofa, coro y coda"], correcta: 0 },
      { dificultad: 1, enunciado: "La cualidad que distingue un oboe de un violín tocando la misma nota es:", opciones: ["El timbre", "La altura", "La intensidad", "El compás"], correcta: 0 },
      { dificultad: 2, enunciado: "Cuando un músico pasa de piano a forte cambia sobre todo:", opciones: ["La amplitud de la onda sonora", "La frecuencia fundamental", "La cantidad de líneas del pentagrama", "La velocidad del sonido en el aire"], correcta: 0 },
      { dificultad: 2, enunciado: "Los derechos de autor de las composiciones musicales en Colombia se gestionan mediante:", opciones: ["Sociedades de gestión colectiva como SAYCO", "Las personerías municipales", "El Servicio de Impuestos únicamente", "Ninguna entidad, son libres"], correcta: 0 },
      { dificultad: 2, enunciado: "Convertir una señal de audio en datos digitales tomando muestras por segundo es:", opciones: ["El muestreo o sampling", "La masterización", "La ecualización", "La digitación"], correcta: 0 },
      { dificultad: 2, enunciado: "El Festival Petronio Álvarez, en Cali, está dedicado a:", opciones: ["Las músicas del Pacífico colombiano, como el currulao y la marimba", "El rock en español bogotano", "La ópera italiana en Bogotá", "La música electrónica del Caribe"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Qué diferencia hay entre una música tonal y una atonal?", opciones: ["La tonal gira alrededor de una nota de reposo; la atonal rompe esa jerarquía", "La atonal usa solo tres notas", "La tonal no admite acordes", "La diferencia es únicamente el instrumento"], correcta: 0 },
      { dificultad: 3, enunciado: "Compara una grabación de estudio con un concierto en vivo:", opciones: ["El vivo aporta presencia e imprevisibilidad y la grabación permite edición", "El vivo siempre suena peor grabado", "La grabación carece de timbres", "No hay diferencia estética alguna"], correcta: 0 },
      { dificultad: 3, enunciado: "Un etnomusicólogo graba cantos de trabajo del Pacífico para estudiar su contexto. Le interesa:", opciones: ["La función social de la tradición, no solo las notas escritas", "Vender las grabaciones en el extranjero", "Reemplazar a los músicos con sintetizadores", "Demostrar que el género está acabado"], correcta: 0 }
    ],
    retos: [
      { dificultad: 2, titulo: "Observar el espectro de una nota", pasos: ["Producir la nota con un instrumento", "Grabar el sonido en el computador", "Ver el espectro de frecuencias", "Identificar el fundamental y los armónicos", "Comparar ese espectro con otro instrumento", "Concluir que el timbre viene de los armónicos"] },
      { dificultad: 3, titulo: "Componer una pieza breve por secciones", pasos: ["Definir el carácter y el tempo de la pieza", "Escribir un tema melódico corto", "Variar el tema con ritmo o armonía", "Crear una sección contrastante", "Regresar al tema inicial para cerrar", "Escuchar completo y revisar los cortes"] },
      { dificultad: 3, titulo: "Investigar una tradición musical del territorio", pasos: ["Elegir un género de la región", "Buscar fuentes y grabaciones confiables", "Registrar instrumentos, formas y contextos", "Escuchar varias piezas y compararlas", "Conversar con un portador de la tradición", "Presentar conclusiones citando las fuentes"] }
    ]
  },

  // -----------------------------------------------------------------------
  // EJE: Teatro, danza y expresión corporal
  // -----------------------------------------------------------------------
  "educacion-artistica--escena--c1": {
    id: "educacion-artistica--escena--c1",
    nombre: "Expresar con el cuerpo y la voz",
    preguntas: [
      { dificultad: 1, enunciado: "¿Con qué expreso alegría cuando actúo?", opciones: ["Con la cara, las manos y todo el cuerpo", "Solo con el pelo", "Con los zapatos nuevos", "Con la mochila"], correcta: 0 },
      { dificultad: 1, enunciado: "¿Qué hago con mi voz para representar a un gigante?", opciones: ["Hablo con voz grave y fuerte", "Susurro todo el tiempo", "Canto muy agudo", "No emito ningún sonido"], correcta: 0 },
      { dificultad: 1, enunciado: "Cuando imito a un gato caminando, uso:", opciones: ["Mi cuerpo para mostrar cómo se mueve", "Solo mis zapatos", "La voz sin ningún gesto", "Nada, el gato se dibuja"], correcta: 0 },
      { dificultad: 1, enunciado: "La cara con la que muestro sorpresa se llama:", opciones: ["Gesto", "Escenografía", "Ensayo", "Telón"], correcta: 0 },
      { dificultad: 1, enunciado: "Antes de subir a la tarima, ¿qué hacemos con la obra?", opciones: ["La ensayamos varias veces", "La estrenamos sin practicar", "Le cambiamos el título otra vez", "La dejamos para el último día"], correcta: 0 },
      { dificultad: 2, enunciado: "Si cuento un secreto en escena, mi voz debe sonar:", opciones: ["Suave, pero clara para todos", "Fuerte como un tambor", "Cada vez más aguda", "Rapidísimo, sin pausas"], correcta: 0 },
      { dificultad: 2, enunciado: "Para caminar como un abuelito en escena, yo:", opciones: ["Flexiono las rodillas y bajo el ritmo", "Corro lo más rápido que puedo", "Salto sin parar un momento", "Camino en puntas de pie"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Qué le pasa a mi cuerpo cuando represento miedo?", opciones: ["Se pone tenso y quiero esconderme", "Se afloja por completo", "Se vuelve más grande", "Se queda dormido"], correcta: 0 },
      { dificultad: 2, enunciado: "En el juego de imitar, ¿qué copio primero de mi compañero?", opciones: ["Su forma de moverse y de pararse", "Su nombre y su grado", "Su cuaderno y su lápiz", "Su almuerzo de hoy"], correcta: 0 },
      { dificultad: 3, enunciado: "Dos niños dicen la misma frase: uno grita, otro susurra. ¿Qué cambia?", opciones: ["El sentimiento que llega al público", "El nombre del personaje", "La talla del teatro usado", "El color del piso del salón"], correcta: 0 },
      { dificultad: 3, enunciado: "María se pone triste en escena, pero no dice nada. ¿Cómo lo sabemos?", opciones: ["Por su postura, su mirada y su forma de moverse", "Porque usa ropa oscura siempre", "Por su estatura y su talla", "Por el orden en que entró al salón"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Por qué miramos al público cuando hablamos en escena?", opciones: ["Para que la historia llegue a quienes nos ven", "Para contar cuántos hay sentados", "Para buscar a mi familia primero", "Para que nadie escriba notas"], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Mostrar alegría con el cuerpo", pasos: ["Pararme derecho con el pecho abierto", "Sonreír y levantar los brazos", "Dar un salto corto de contento"] },
      { dificultad: 2, titulo: "Calentar la voz antes de actuar", pasos: ["Respirar hondo por la nariz", "Decir ma, me, mi, mo, mu poco a poco", "Contar una frase con voz clara"] },
      { dificultad: 3, titulo: "Crear un personaje con voz y cuerpo", pasos: ["Pensar quién es mi personaje", "Elegir cómo camina y cómo habla", "Mostrarlo al salón sin decir palabras"] }
    ]
  },

  "educacion-artistica--escena--c2": {
    id: "educacion-artistica--escena--c2",
    nombre: "Juego dramático e imitación",
    preguntas: [
      { dificultad: 1, enunciado: "Dramatizar una historia significa:", opciones: ["Actuarla con gestos y palabras frente a otros", "Escribirla sin leerla nunca", "Escucharla en silencio total", "Copiarla en el cuaderno"], correcta: 0 },
      { dificultad: 1, enunciado: "El muñeco que manejo con hilos desde arriba se llama:", opciones: ["Marioneta", "Títere de guante", "Máscara de cartón", "Sombrero de paja"], correcta: 0 },
      { dificultad: 1, enunciado: "Los objetos que manipulo durante la actuación, como un bastón o una carta, se llaman:", opciones: ["Utilería o atrezzo", "Escenografía", "Iluminación", "Coreografía"], correcta: 0 },
      { dificultad: 1, enunciado: "Actuar sin decir palabras, solo con el cuerpo, es:", opciones: ["La pantomima", "El monólogo", "El coro griego", "El libreto"], correcta: 0 },
      { dificultad: 1, enunciado: "El texto escrito de una obra de teatro se llama:", opciones: ["Libreto o guion teatral", "Novela corta", "Crónica de prensa", "Informe de la clase"], correcta: 0 },
      { dificultad: 2, enunciado: "En la improvisación, cuando mi compañero propone algo, debo:", opciones: ["Aceptarlo y seguir construyendo la escena", "Negarlo todo desde el principio", "Salirme del juego sin avisar", "Repetir lo mismo sin ningún cambio"], correcta: 0 },
      { dificultad: 2, enunciado: "Para que una escena de miedo resulte creíble, el grupo primero:", opciones: ["Acuerda el lugar, los personajes y lo que pasa", "Grita sin ninguna razón", "Cierra los ojos todo el tiempo", "Cambia de tema cada tres segundos"], correcta: 0 },
      { dificultad: 2, enunciado: "El títere de guante se mueve:", opciones: ["Con la mano metida dentro de su cuerpo", "Con hilos que salen del techo", "Con una varilla desde atrás", "Con el pie del actor"], correcta: 0 },
      { dificultad: 2, enunciado: "En el juego de adivinar un objeto con gestos, mis compañeros lo descubren porque:", opciones: ["Uso movimientos y sonidos que lo caracterizan", "Lo nombro desde el principio", "Lo dibujo en el piso del salón", "Lo llevo guardado en la mochila"], correcta: 0 },
      { dificultad: 3, enunciado: "Dos grupos presentan la misma fábula, pero uno usa narrador. ¿Qué aporta el narrador?", opciones: ["Organiza el tiempo y explica lo que no se ve", "Sustituye por completo a los personajes", "Apaga las luces de la sala", "Reemplaza el vestuario del elenco"], correcta: 0 },
      { dificultad: 3, enunciado: "En la ronda de evaluación, ¿cómo doy una opinión útil sobre el trabajo de mis compañeros?", opciones: ["Digo qué entendí, qué funcionó y qué mejoraría", "Digo que todo quedó mal", "Digo solamente que estuvo bonito", "Me quedo callado y no opino"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Por qué el trabajo en equipo hace parte del teatro?", opciones: ["Porque la escena se construye entre muchos roles y decisiones", "Porque los actores no saben leer solos", "Porque lo exige el horario escolar", "Porque así se gasta menos tiempo"], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Improvisar una escena del mercado", pasos: ["Escoger quién vende y quién compra", "Definir el lugar con objetos simples", "Improvisar el diálogo sin guion escrito", "Cerrar la escena con una acción clara"] },
      { dificultad: 2, titulo: "Armar un títere de guante", pasos: ["Moldear la cabeza en foami o trapo", "Pegar los ojos, la nariz y el cabello", "Cerrar el cuerpo como un costal para la mano", "Ensayar voces cortas con el títere"] },
      { dificultad: 3, titulo: "Adaptar un cuento a una escena breve", pasos: ["Leer el cuento y marcar sus partes", "Elegir los personajes que salen en escena", "Escribir acciones y diálogos cortos", "Probar la escena con el grupo y ajustar"] }
    ]
  },

  "educacion-artistica--escena--c3": {
    id: "educacion-artistica--escena--c3",
    nombre: "Elementos del teatro y de la escena",
    preguntas: [
      { dificultad: 1, enunciado: "El lugar donde actúan los artistas frente al público se llama:", opciones: ["Escenario", "Camerino", "Patio de butacas", "Taller de pintura"], correcta: 0 },
      { dificultad: 1, enunciado: "La tela grande que se abre o se cierra al inicio de la función es:", opciones: ["El telón", "La utilería", "El libreto", "La acotación"], correcta: 0 },
      { dificultad: 1, enunciado: "Las indicaciones de acciones que el dramaturgo escribe entre paréntesis son:", opciones: ["Acotaciones", "Diálogos del personaje", "Coros cantados", "Prólogo de la obra"], correcta: 0 },
      { dificultad: 1, enunciado: "El conjunto de elementos visuales que ambientan el espacio escénico es:", opciones: ["La escenografía", "La utilería", "La coreografía", "El vestuario"], correcta: 0 },
      { dificultad: 1, enunciado: "La persona que coordina la puesta en escena y dirige los ensayos es:", opciones: ["El director de escena", "El apuntador", "El taquillero", "El crítico de prensa"], correcta: 0 },
      { dificultad: 2, enunciado: "La diferencia entre vestuario y utilería está en que:", opciones: ["El vestuario se viste y la utilería se manipula", "La utilería se viste y el vestuario se manipula", "Son dos nombres para lo mismo", "El vestuario solo lo usa el director"], correcta: 0 },
      { dificultad: 2, enunciado: "La primera tarea del actor al recibir un personaje es:", opciones: ["Leer la obra y entender qué quiere su personaje", "Comprar ropa nueva para el estreno", "Cambiar el final escrito por el autor", "Pintar el telón del escenario"], correcta: 0 },
      { dificultad: 2, enunciado: "Si la escena ocurre de noche en un bosque, la iluminación debería:", opciones: ["Bajar la intensidad con luces azuladas", "Subir todo al blanco máximo del teatro", "Dejar la sala a oscuras por completo", "Trabajar solo con flashes de colores"], correcta: 0 },
      { dificultad: 2, enunciado: "El trabajo de sonorización busca:", opciones: ["Que la música y los efectos acompañen la acción", "Reemplazar las voces de los actores", "Modificar el libreto escrito", "Cerrar el telón más rápido"], correcta: 0 },
      { dificultad: 3, enunciado: "Decir que el teatro es una convención significa que:", opciones: ["Público y artistas aceptan que una caja vacía puede ser el mar", "Todo se ensaya antes del estreno", "La función siempre tiene intervalo", "El teatro se representa en salas cerradas"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Por qué el ensayo general se hace con vestuario y luces?", opciones: ["Para verificar la puesta completa tal como será la función", "Porque así se ahorra tiempo de montaje", "Porque el vestuario no se puede lavar", "Para que el público entre a mirar"], correcta: 0 },
      { dificultad: 3, enunciado: "Entre el monólogo y el diálogo, la diferencia principal es:", opciones: ["La cantidad de voces que hablan en escena", "El color de la luz usada", "La duración del vestuario", "La forma del telón del teatro"], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Montar el espacio escénico de una escena", pasos: ["Definir qué lugar representa la escena", "Colocar el fondo y las plataformas", "Revisar los objetos que cada actor toca", "Comprobar que el público vea desde su silla"] },
      { dificultad: 2, titulo: "Coordinar una función escolar", pasos: ["Reunir al equipo y repartir los roles", "Ajustar los horarios de los ensayos", "Montar luces, sonido y vestuario", "Recibir al público y cerrar la función"] },
      { dificultad: 3, titulo: "Analizar una función vista en el teatro", pasos: ["Anotar los hechos de la historia sin valorar", "Describir la actuación y la escenografía", "Relacionar los recursos con el mensaje", "Emitir un juicio con ejemplos vistos"] }
    ]
  },

  "educacion-artistica--escena--c4": {
    id: "educacion-artistica--escena--c4",
    nombre: "Danza colombiana y composición escénica",
    preguntas: [
      { dificultad: 1, enunciado: "¿En qué región de Colombia nació el joropo?", opciones: ["En la Orinoquía, los llanos orientales", "En la costa Caribe", "En el Pacífico sur", "En la Amazonia"], correcta: 0 },
      { dificultad: 1, enunciado: "El mapalé se caracteriza por:", opciones: ["Movimientos rápidos, golpes de cadera y saltos acrobáticos", "Un paso lento y elegante de salón", "Una coreografía de manos solo", "Un giro lento en el mismo sitio"], correcta: 0 },
      { dificultad: 1, enunciado: "La cumbia es un baile originario de la región:", opciones: ["Caribe de Colombia", "Andina del centro", "Pacífica de Nariño", "Insular de San Andrés"], correcta: 0 },
      { dificultad: 1, enunciado: "El currulao, danza del Pacífico colombiano, se acompaña con:", opciones: ["Marimba de chonta, cununo y guasá", "Arpa, bandola y cuatro", "Tiple, guitarra y bandola", "Acordeón, caja y guacharaca"], correcta: 0 },
      { dificultad: 1, enunciado: "En el bambuco, el pañuelo que llevan los bailarines sirve para:", opciones: ["Marcar el coqueteo y las figuras del baile", "Secar el sudor entre ensayos", "Atar el vestuario del bailarín", "Pedir silencio al público"], correcta: 0 },
      { dificultad: 2, enunciado: "En composición coreográfica, trabajar la dinámica significa:", opciones: ["Variar la calidad del movimiento: fuerte, suave, sostenido", "Repetir los mismos ocho tiempos siempre", "Cambiar la música a mitad de la pieza", "Subir el volumen del sonido del salón"], correcta: 0 },
      { dificultad: 2, enunciado: "En la cumbia, la bailarina lleva en la mano un objeto característico:", opciones: ["Una vela", "Un espejo pequeño", "Un canasto de fruta", "Un abanico de plumas"], correcta: 0 },
      { dificultad: 2, enunciado: "Al analizar una danza con la idea de espacio, tiempo y esfuerzo, buscamos:", opciones: ["Describir la calidad del movimiento", "Contar el número de asistentes", "Medir el vestuario en centímetros", "Revisar la taquilla del teatro"], correcta: 0 },
      { dificultad: 2, enunciado: "Comparando la cumbia con el mapalé, ¿qué diferencia de carácter notamos?", opciones: ["La cumbia avanza en un cortejo circular; el mapalé estalla en golpes ágiles", "El mapalé se ejecuta en pareja con vela", "La cumbia es un baile de origen reciente", "Ambos son lentos y sin desplazamiento"], correcta: 0 },
      { dificultad: 3, enunciado: "El bullerengue se distingue porque:", opciones: ["Es un canto y baile de tambores liderado por cantadoras de la costa", "Se ejecuta en parejas con un pañuelo blanco", "Lo toca un conjunto de cuerdas andinas", "Es un vals europeo adaptado al trópico"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Por qué decimos que las danzas del Caribe colombiano son mestizas?", opciones: ["Reunieron herencias indígena, africana y española", "Porque se bailan en la plaza pública", "Porque fueron inventadas por un solo maestro", "Porque usan vestuario de tela industrial"], correcta: 0 },
      { dificultad: 3, enunciado: "Un grupo repite la misma secuencia sin cambios y otro varía niveles y direcciones. ¿Cuál compone mejor?", opciones: ["El que varía niveles y direcciones", "El que repite sin cambios, por la memoria", "Los dos, en idéntica medida", "Ninguno, la danza no se compone"], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Aprender la base de la cumbia", pasos: ["Marcar el pulso con los pies en el suelo", "Armar el paso de avance y retroceso", "Colocar los brazos en posición de baile", "Caminar en círculo con la pareja", "Sumar el movimiento de la falda o la vela"] },
      { dificultad: 2, titulo: "Componer una frase de movimiento", pasos: ["Elegir la idea o emoción de partida", "Crear cuatro movimientos cortos", "Variar el tiempo y los niveles del cuerpo", "Repetir un motivo para dar unidad", "Mostrar la frase y ajustar con el grupo"] },
      { dificultad: 3, titulo: "Montar una danza folclórica en clase", pasos: ["Investigar el origen y el contexto de la danza", "Escuchar la música y contar su compás", "Enseñar los pasos base al grupo", "Definir los desplazamientos en el escenario", "Presentar la danza y comentar lo que cuenta"] }
    ]
  },

  "educacion-artistica--escena--c5": {
    id: "educacion-artistica--escena--c5",
    nombre: "Dirección escénica y teoría del teatro",
    preguntas: [
      { dificultad: 1, enunciado: "El trabajo del director de escena consiste principalmente en:", opciones: ["Dar una visión común al texto, al espacio y a los actores", "Vender las boletas de la función", "Fabricar el vestuario en el taller", "Escribir la crítica del diario"], correcta: 0 },
      { dificultad: 1, enunciado: "La dramaturgia estudia:", opciones: ["La estructura del texto y las decisiones sobre la versión escénica", "La venta de derechos de la obra", "El mantenimiento del salón de actos", "La contabilidad del elenco"], correcta: 0 },
      { dificultad: 1, enunciado: "En teatro, la llamada cuarta pared es:", opciones: ["La convención que separa a los personajes del público como un vidrio", "La pared del fondo del escenario", "La pared del camerino de actores", "El muro donde se pegan los afiches"], correcta: 0 },
      { dificultad: 1, enunciado: "El término catarsis, asociado al efecto de la tragedia, viene del pensamiento de:", opciones: ["Aristóteles", "Descartes", "Sartre", "Comenio"], correcta: 0 },
      { dificultad: 1, enunciado: "El Festival Iberoamericano de Teatro de Bogotá, realizado desde 1988, se caracteriza por:", opciones: ["Tomar plazas, calles y teatros con montajes de varios países", "Presentar solo obras escritas en español", "Funcionar como escuela de actuación formal", "Mantenerse cerrado al público general"], correcta: 0 },
      { dificultad: 2, enunciado: "El método de Stanislavski propone que el actor:", opciones: ["Busque objetivos y acciones verdaderas para su personaje", "Recite el texto sin emoción alguna", "Copie un gesto fijo ensayado una vez", "Improvisa libremente sin ninguna estructura"], correcta: 0 },
      { dificultad: 2, enunciado: "Bertolt Brecht buscaba el efecto de distanciamiento para que el espectador:", opciones: ["Reflexione críticamente sobre lo que está viendo", "Se pierda en la emoción de la historia", "Ignore el tema mostrado en escena", "Compre la boleta siguiente más cara"], correcta: 0 },
      { dificultad: 2, enunciado: "El Teatro del Oprimido, creado por Augusto Boal, se propone:", opciones: ["Convertir al espectador en protagonista de la escena", "Representar solo tragedias griegas", "Montar óperas de gran formato", "Enseñar oficios del teatro a técnicos"], correcta: 0 },
      { dificultad: 2, enunciado: "Los desplazamientos y posiciones coordinadas de los actores en el escenario se llaman:", opciones: ["Puesta en movimiento o blocking", "Utilería", "Acotación inicial", "Dramaturgia del texto"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Qué separa el teatro épico de Brecht del teatro realista de Stanislavski?", opciones: ["Que el primero invita a pensar y el segundo apuesta por la identificación emocional", "Que el primero usa más escenografía", "Que el segundo renuncia al texto escrito", "Que ambos solo trabajan con marionetas"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Por qué una dirección puede montar un texto clásico con vestuario de hoy?", opciones: ["Porque la puesta es una relectura y dialoga con el presente", "Porque los clásicos exigen ropa contemporánea", "Porque el vestuario de época no existe", "Porque así se ahorra presupuesto del teatro"], correcta: 0 },
      { dificultad: 3, enunciado: "El subtexto de una escena es:", opciones: ["Lo que los personajes no dicen y sostiene el texto", "El texto publicitario del afiche", "La nota del director sobre la taquilla", "El resumen del acto siguiente"], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Preparar un ejercicio actoral", pasos: ["Elegir la situación que se va a actuar", "Identificar el objetivo del personaje", "Relajar el cuerpo y la voz antes de empezar", "Ensayar las acciones con un compañero", "Revisar con el director si se entiende", "Repetir incorporando los ajustes"] },
      { dificultad: 2, titulo: "Montar una escena desde la dirección", pasos: ["Leer el texto y definir el conflicto central", "Proponer el estilo de la puesta en escena", "Traducir el texto en acciones y desplazamientos", "Guiar al elenco durante los ensayos", "Ajustar luces, música y vestuario", "Presentar la escena completa y evaluarla"] },
      { dificultad: 3, titulo: "Analizar críticamente un montaje visto", pasos: ["Describir el asunto de la obra sin juzgar", "Enumerar los elementos escénicos empleados", "Interpretar el sentido de la propuesta", "Relacionar la obra con su contexto de creación", "Argumentar un juicio de valor", "Escribir la reseña citando las fuentes"] }
    ]
  },

  // -----------------------------------------------------------------------
  // EJE: Patrimonio cultural
  // -----------------------------------------------------------------------
  "educacion-artistica--patrimonio--c1": {
    id: "educacion-artistica--patrimonio--c1",
    nombre: "Tradiciones de mi familia",
    preguntas: [
      { dificultad: 1, enunciado: "¿Con qué preparo la arepa de mi casa?", opciones: ["Con masa de maíz", "Con harina de trigo sola", "Con arroz entero cocido", "Con papa triturada nada más"], correcta: 0 },
      { dificultad: 1, enunciado: "La nanita que me cantaban para dormir es:", opciones: ["Un canto suave de mi familia", "Un juego del salón", "Un baile de la fiesta", "Un ruido de la cocina"], correcta: 0 },
      { dificultad: 1, enunciado: "La manta que tejió mi abuela se hizo con:", opciones: ["Agujas e hilo de estambre", "Papel y pegante", "Clavos y tablas", "Láminas de plástico"], correcta: 0 },
      { dificultad: 1, enunciado: "¿Qué es una tradición?", opciones: ["Algo que hacemos en familia y pasa de grandes a pequeños", "Un juguete nuevo del catálogo", "Una tarea de la escuela", "Un programa de televisión"], correcta: 0 },
      { dificultad: 1, enunciado: "Cuando llega visita a mi casa, lo que hacemos es:", opciones: ["Recibirla con un saludo y algo de tomar", "Dejarla esperando en la acera", "Cerrarle el portón sin mirar", "Pedirle que se vaya pronto"], correcta: 0 },
      { dificultad: 2, enunciado: "El tamal que preparamos en diciembre se envuelve en:", opciones: ["Hoja de plátano", "Papel de aluminio nada más", "Cancha de maíz sola", "Trapo de cocina limpio"], correcta: 0 },
      { dificultad: 2, enunciado: "Cuando canto con mi familia en la reunión, la música sirve para:", opciones: ["Compartir un momento juntos", "Contar las visitas llegadas", "Medir la comida servida", "Marcar la hora de dormir"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Cuál de estos juegos practico en el patio con mis amigos?", opciones: ["La perinela dibujada en el piso", "El dominó de la sala", "Las damas del tablero", "El rompecabezas de la mesa"], correcta: 0 },
      { dificultad: 2, enunciado: "El sancocho de la familia se cocina:", opciones: ["En una olla grande, para que alcancen todos", "En una licuadora con hielo", "En una sartén seca y sin aceite", "En una tabla de picar solamente"], correcta: 0 },
      { dificultad: 3, enunciado: "Mi familia guarda las recetas del sancocho, la arepa y el pan. ¿Qué nos enseñan?", opciones: ["Que las recetas de la casa hacen parte de nuestra cultura", "Que conviene comprar todo preparado", "Que la comida no tiene importancia", "Que solo se come durante las fiestas"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Por qué la nanita de mi abuela se llama tradición familiar?", opciones: ["Porque la aprendimos de quienes nos cuidaron antes", "Porque es un canto inventado ayer", "Porque la enseñó la televisión del salón", "Porque está impresa en un libro de la escuela"], correcta: 0 },
      { dificultad: 3, enunciado: "En mi salón unos celebran con tamal, otros con buñuelo. ¿Qué aprendemos?", opciones: ["Que hay muchas costumbres y todas valen", "Que una de las dos está equivocada", "Que solo existe una forma de celebrar", "Que hay que cambiar la fecha de la fiesta"], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Poner la mesa en casa", pasos: ["Llevar los platos a la mesa", "Repartir servilletas y cubiertos", "Sentarnos y agradecer la comida"] },
      { dificultad: 2, titulo: "Contar un cuento de mi familia", pasos: ["Preguntar a mi abuela el cuento que sabe", "Escucharlo con calma dos veces", "Contarlo a mis amigos a mi manera"] },
      { dificultad: 3, titulo: "Compartir una tradición con el salón", pasos: ["Elegir la tradición que mostraré", "Traer el objeto o la receta de mi casa", "Explicar cómo se vive en mi familia"] }
    ]
  },

  "educacion-artistica--patrimonio--c2": {
    id: "educacion-artistica--patrimonio--c2",
    nombre: "Festividades de mi ciudad",
    preguntas: [
      { dificultad: 1, enunciado: "¿Qué festival de música se hace en los parques de Bogotá con entrada libre?", opciones: ["Rock al Parque", "La Feria de las Flores", "El Festival de la Leyenda Vallenata", "El Carnaval de Barranquilla"], correcta: 0 },
      { dificultad: 1, enunciado: "Cada 6 de agosto, Bogotá celebra una fecha porque recuerda:", opciones: ["El aniversario de su fundación como ciudad", "El día del campesino colombiano", "El inicio de la temporada escolar", "La llegada del teleférico al cerro"], correcta: 0 },
      { dificultad: 1, enunciado: "En la noche de las Velitas de diciembre, la gente pone velas:", opciones: ["En las ventanas y en los balcones", "En el fondo de la alacena", "Dentro del zapato del visitante", "En el patio del colegio cerrado"], correcta: 0 },
      { dificultad: 1, enunciado: "El teleférico de Monserrate, en Bogotá, sube hasta:", opciones: ["Una montaña con una iglesia arriba", "Un islote del mar de Carolina", "El crater del Nevado del Ruiz", "La cumbre del Quindío"], correcta: 0 },
      { dificultad: 1, enunciado: "¿Cómo se llama la costumbre de cerrar calles para que la gente monte en bici los domingos?", opciones: ["La Ciclovía", "La cabalgata", "La feria taurina", "La alameda"], correcta: 0 },
      { dificultad: 2, enunciado: "El Festival Iberoamericano de Teatro llena la ciudad de público porque:", opciones: ["Lleva montajes a plazas, calles y salas de Bogotá", "Prohíbe las funciones nocturnas de la ciudad", "Solo permite la presentación de un grupo", "Traslada su sede a otra ciudad cada año"], correcta: 0 },
      { dificultad: 2, enunciado: "El 20 de julio, día festivo en Colombia, recuerda:", opciones: ["El comienzo de la independencia del país", "La firma de un tratado de límites", "El natalicio del pintor Botero", "La fundación del Museo del Oro"], correcta: 0 },
      { dificultad: 2, enunciado: "La Feria de las Flores, con el desfile de los silleteros, se celebra en:", opciones: ["Medellín", "Barranquilla", "Valledupar", "Popayán"], correcta: 0 },
      { dificultad: 2, enunciado: "En el Carnaval de Barranquilla, el acto con el que se abre la fiesta es:", opciones: ["La lectura del bando y la entrega de la llave a la reina", "El cierre de las escuelas del distrito", "La elección del concejo municipal", "La premiación del concurso de marimba"], correcta: 0 },
      { dificultad: 3, enunciado: "Un niño dice que las fiestas de Bogotá son prestadas de otros lados. ¿Qué le respondo?", opciones: ["Muchas fiestas mezclan herencias diversas y por eso también son nuestras", "Tiene razón y debemos dejar de celebrarlas", "Bogotá no tiene ninguna fiesta propia", "Las fiestas solo valen si llegan de otro país"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Qué diferencia hay entre una fiesta como las Velitas y una como el 20 de julio?", opciones: ["Una se vive desde la fe y la otra desde la memoria cívica", "La cívica dura siempre más días", "Solo la religiosa reúne a la familia", "La cívica no admite desfiles"], correcta: 0 },
      { dificultad: 3, enunciado: "La Ciclovía dominical y el Festival de Verano de Bogotá comparten que:", opciones: ["Ocupan el espacio público para el disfrute de la gente", "Se celebran cada seis meses exactos", "Son obligatorias para todos los colegios", "Solo permiten música grabada"], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Vivir la noche de las Velitas en casa", pasos: ["Buscar en casa las velas y los portalámparas", "Escoger el sitio de la ventana o del patio", "Reunir a la familia para iluminar juntos", "Comentar el momento que estamos viviendo"] },
      { dificultad: 2, titulo: "Planear una salida a una fiesta de Bogotá", pasos: ["Elegir la festividad de la ciudad a visitar", "Consultar el itinerario y el punto de encuentro", "Preparar con el grupo lo que vamos a observar", "Comentar en clase lo vivido en la actividad"] },
      { dificultad: 3, titulo: "Comparar dos festividades de Colombia", pasos: ["Escoger la fiesta de Bogotá y otra del país", "Anotar cuándo y dónde se celebran", "Buscar qué elementos comparten, qué las diferencia", "Explicar qué cuenta cada una de su región"] }
    ]
  },

  "educacion-artistica--patrimonio--c3": {
    id: "educacion-artistica--patrimonio--c3",
    nombre: "Patrimonio cultural colombiano",
    preguntas: [
      { dificultad: 1, enunciado: "El Museo del Oro de Bogotá custodia objetos elaborados por:", opciones: ["Los pueblos indígenas con oro y aleaciones", "Los herreros del periodo republicano", "Las casas de moneda extranjeras", "Los orfebres europeos del siglo XVIII"], correcta: 0 },
      { dificultad: 1, enunciado: "La pieza del Museo del Oro asociada al mito de El Dorado es:", opciones: ["La balsa Muisca", "El poporo Quimbaya", "La máscara de Pueblorico", "El tumbo de Tierradentro"], correcta: 0 },
      { dificultad: 1, enunciado: "La Catedral de Sal de Zipaquirá se levantó dentro de:", opciones: ["Túneles de una antigua mina de sal", "Una isla de coral", "Un cono volcánico apagado", "Una caverna de mármol"], correcta: 0 },
      { dificultad: 1, enunciado: "El Parque Arqueológico de San Agustín, en el sur del Huila, destaca por:", opciones: ["Las estatuas de piedra talladas por sus antiguos habitantes", "Las casonas de la colonización antioqueña", "Los murales de los pintores del siglo XX", "Las ruinas de una hacienda azucarera"], correcta: 0 },
      { dificultad: 1, enunciado: "El asentamiento prehispánico de la Sierra Nevada de Santa Marta conocido como Teyuna se llama también:", opciones: ["La Ciudad Perdida", "El Dorado de Guatavita", "La Popa de Cartagena", "La Quebrada de las Lajas"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Qué órgano internacional declara un sitio como Patrimonio Mundial por su valor universal excepcional?", opciones: ["El Comité del Patrimonio Mundial de la UNESCO", "El Ministerio de Educación de Colombia", "La oficina de turismo del municipio", "El Banco de la República"], correcta: 0 },
      { dificultad: 2, enunciado: "El Carnaval de Barranquilla, reconocido por la UNESCO como patrimonio inmaterial, se celebra:", opciones: ["En febrero o marzo, antes del miércoles de Ceniza", "En la primera semana de enero", "El mismo 20 de julio de cada año", "En la semana santa de Popayán"], correcta: 0 },
      { dificultad: 2, enunciado: "El barrio La Candelaria, en Bogotá, es un conjunto patrimonial porque:", opciones: ["Conserva trazado, casas y edificios de las etapas colonial y republicana", "Está construido sobre ruinas prehispánicas únicamente", "Fue trazado en 1948 por urbanistas extranjeros", "No conserva templos ni plazas antiguas"], correcta: 0 },
      { dificultad: 2, enunciado: "Un municipio quiere proteger la receta de su queso artesanal y el oficio de quien lo elabora. Ese bien es patrimonio:", opciones: ["Inmaterial, porque vive en los saberes y las prácticas", "Material, porque está guardado en un objeto", "Arqueológico, porque es antiguo", "Natural, porque sale del campo"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Por qué la balsa Muisca es un documento histórico y no solo una pieza bella?", opciones: ["Porque conserva información sobre la técnica, el ritual y la sociedad que la hizo", "Porque es el objeto más costoso del país", "Porque está elaborada con oro puro únicamente", "Porque la firmó un artista conocido"], correcta: 0 },
      { dificultad: 3, enunciado: "Declarar un bien como patrimonio ante la UNESCO busca principalmente:", opciones: ["Que se salvaguarde y se transmita a las generaciones futuras", "Que pueda venderse legalmente en el mercado", "Que se cierre al público para cuidarlo", "Que pierda su valor económico local"], correcta: 0 },
      { dificultad: 3, enunciado: "Un grupo quiere salvar un cine antiguo de su barrio. ¿Qué argumento patrimonial es más sólido?", opciones: ["El edificio cuenta la historia social de la ciudad y conserva valor arquitectónico", "Porque es el salón más grande del barrio", "Porque nadie asiste ya a las funciones", "Porque el lote sirve para parquear vehículos"], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Visitar un museo con mirada patrimonial", pasos: ["Leer la información de la sala y de la pieza", "Dibujar el objeto que más me interese", "Averiguar de dónde viene y quién lo hacía", "Explicar en clase su valor cultural"] },
      { dificultad: 2, titulo: "Elaborar el mapa patrimonial del barrio", pasos: ["Listar los lugares antiguos o emblemáticos", "Ubicarlos en un plano del sector", "Anotar por qué la comunidad los valora", "Proponer una acción para cuidarlos"] },
      { dificultad: 3, titulo: "Argumentar la protección de un bien municipal", pasos: ["Describir el bien y su estado actual", "Investigar su historia y su valor comunitario", "Revisar las normas que lo protegen en el país", "Presentar una propuesta de cuidado a la alcaldía"] }
    ]
  },

  "educacion-artistica--patrimonio--c4": {
    id: "educacion-artistica--patrimonio--c4",
    nombre: "Patrimonio inmaterial y culturas del mundo",
    preguntas: [
      { dificultad: 1, enunciado: "La Convención de la UNESCO que protege el patrimonio cultural inmaterial se adoptó en:", opciones: ["2003", "1972", "1948", "2015"], correcta: 0 },
      { dificultad: 1, enunciado: "El patrimonio cultural inmaterial está conformado por:", opciones: ["Prácticas, saberes y expresiones que la comunidad reconoce como propias", "Los objetos custodiados en una vitrina de museo", "Los edificios declarados monumentos nacionales", "Las áreas protegidas de parques naturales"], correcta: 0 },
      { dificultad: 1, enunciado: "San Basilio de Palenque, en la costa Caribe colombiana, es reconocido por conservar:", opciones: ["Su lengua criolla, sus cantos y su historia de palenque de libertos", "Su tradición de colonización antioqueña", "Su pasado de pueblo minero de carbón", "Sus tallados en piedra del periodo agustiniano"], correcta: 0 },
      { dificultad: 1, enunciado: "El teatro Noh de Japón y el flamenco de España son ejemplos de:", opciones: ["Patrimonio cultural inmaterial de la humanidad", "Patrimonio natural mundial", "Sitios arqueológicos de la humanidad", "Obras de la arquitectura contemporánea"], correcta: 0 },
      { dificultad: 1, enunciado: "En Colombia, los principales portadores de la memoria del bullerengue son:", opciones: ["Las cantadoras y los tamboreros de las comunidades afrocaribeñas", "Los músicos de las bandas sinfónicas de los conservatorios", "Los compositores de la lírica bogotana del siglo XX", "Los productores de la música electrónica del Caribe"], correcta: 0 },
      { dificultad: 2, enunciado: "En el lenguaje del patrimonio, la palabra salvaguardia significa:", opciones: ["Las medidas para que una práctica siga viva y se transmita", "Vender esa práctica en el mercado cultural", "Congelarla dentro de una vitrina de museo", "Declararla propiedad exclusiva de un Estado"], correcta: 0 },
      { dificultad: 2, enunciado: "Un canto de trabajo del Pacífico pierde hablantes jóvenes. ¿Qué medida de salvaguardia funciona mejor?", opciones: ["Documentarlo y crear espacios donde la propia comunidad lo enseñe", "Prohibir que se ejecute en actos públicos", "Grabarlo y guardarlo sin acceso al público", "Sustituirlo por un género de mayor circulación"], correcta: 0 },
      { dificultad: 2, enunciado: "El Paisaje Cultural Cafetero, inscrito por la UNESCO, reúne:", opciones: ["Un sistema de cultivo, unas viviendas y una memoria de colonización en un territorio", "Una reserva de fauna y flora de páramo", "Un conjunto de fortificaciones coloniales del Caribe", "Una red de teatros republicanos de la Andina"], correcta: 0 },
      { dificultad: 2, enunciado: "Al comparar el Carnaval de Negros y Blancos de Pasto con el de Barranquilla, encuentro que ambos:", opciones: ["Convocan a la ciudad entera y expresan herencias indígenas y africanas", "Se celebran exactamente en las mismas fechas", "Son la misma fiesta con otros nombres", "Se transmiten únicamente por televisión nacional"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Por qué decimos que una tradición 'congelada' deja de ser patrimonio inmaterial?", opciones: ["Porque este patrimonio existe en la práctica y necesita seguir siendo vivido", "Porque está expuesto en una vitrina con temperatura controlada", "Porque la Convención de 1972 lo impide", "Porque solo puede practicarse en otro idioma"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Qué separa las listas de la Convención de 1972 de las de la de 2003?", opciones: ["La primera protege lugares y monumentos; la segunda, prácticas vivas de las comunidades", "Son idénticas, solo cambian de nombre", "La primera aplica solo a América Latina", "La segunda protege exclusivamente la música"], correcta: 0 },
      { dificultad: 3, enunciado: "Un alcalde afirma que el patrimonio inmaterial no deja nada a la economía. ¿Qué lo contradice?", opciones: ["Sostiene oficios, fiestas y turismo cultural que dejan ingresos a la comunidad", "Porque solo la UNESCO puede comercializarlo", "Porque sus bienes están en museos nacionales", "Porque pertenece al Estado y no a la gente"], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Registrar una tradición oral de la comunidad", pasos: ["Pedir permiso al portador de la memoria", "Grabar el relato con una fuente de audio cercana", "Transcribir respetando las palabras del narrador", "Anotar nombre, edad y lugar de origen del portador", "Devolver la copia a la familia y al archivo escolar"] },
      { dificultad: 2, titulo: "Comparar dos patrimonios inmateriales", pasos: ["Elegir las dos expresiones que voy a comparar", "Investigar el origen y el territorio de cada una", "Registrar música, danza y contexto de las dos", "Buscar rasgos comunes y rasgos distintos", "Presentar conclusiones con las fuentes usadas"] },
      { dificultad: 3, titulo: "Diseñar un plan de salvaguardia desde el colegio", pasos: ["Identificar la práctica del territorio que se quiere proteger", "Mapear sus portadores y sus saberes", "Programar talleres donde otros grados la aprendan", "Acordar apoyos con la casa de cultura del municipio", "Evaluar si la práctica sigue viva al terminar el año"] }
    ]
  },

  "educacion-artistica--patrimonio--c5": {
    id: "educacion-artistica--patrimonio--c5",
    nombre: "Industrias culturales y patrimonio global",
    preguntas: [
      { dificultad: 1, enunciado: "Las industrias culturales y creativas se caracterizan por producir:", opciones: ["Bienes y servicios con valor simbólico además de valor económico", "Solo materias primas para la exportación", "Servicios públicos domiciliarios", "Productos de la construcción de vivienda"], correcta: 0 },
      { dificultad: 1, enunciado: "La Ley de Cine de Colombia (Ley 814 de 2003) creó un fondo destinado a:", opciones: ["Fomentar la producción y circulación del cine nacional", "Comprar equipos para la televisión pública únicamente", "Pagar los salarios de los taquilleros de la ciudad", "Financiar únicamente festivales de música"], correcta: 0 },
      { dificultad: 1, enunciado: "La Convención sobre la Protección y Promoción de la Diversidad de las Expresiones Culturales de la UNESCO se adoptó en:", opciones: ["2005", "1972", "1989", "2018"], correcta: 0 },
      { dificultad: 1, enunciado: "El filme 'El abrazo de la serpiente' (2015), dirigido por Ciro Guerra, marcó un hito porque:", opciones: ["Fue la primera película colombiana nominada al Óscar", "Se rodó enteramente en estudio con actores extranjeros", "Ganó el primer premio Nobel de cine del país", "Se hizo sin sonido alguno"], correcta: 0 },
      { dificultad: 1, enunciado: "En Colombia se llama economía naranja al sector de:", opciones: ["Las industrias culturales y creativas", "El comercio minorista de los barrios", "La minería de carbón a cielo abierto", "La agroindustria del aceite de palma"], correcta: 0 },
      { dificultad: 2, enunciado: "Una licencia de tipo creative commons sobre una obra sirve para:", opciones: ["Autorizar su uso bajo condiciones definidas por el autor", "Transferir la propiedad de la obra al Estado", "Impedir cualquier reproducción futura", "Eliminar los derechos morales del creador"], correcta: 0 },
      { dificultad: 2, enunciado: "El turismo cultural beneficia a una comunidad cuando:", opciones: ["La comunidad participa, decide y recibe parte de los ingresos", "Solo los operadores externos organizan todo", "Se prohíbe el acceso a los visitantes", "Los precios suben sin ninguna regla"], correcta: 0 },
      { dificultad: 2, enunciado: "La gentrificación de un barrio patrimonial ocurre cuando:", opciones: ["Suben los arriendos y la población tradicional se ve forzada a salir", "Se restauran las fachadas con permiso de la autoridad", "Los vecinos organizan una fiesta en la plaza", "El barrio recibe un servicio de transporte nuevo"], correcta: 0 },
      { dificultad: 2, enunciado: "La digitalización de la música generó modelos de negocio como:", opciones: ["El streaming y el lanzamiento independiente de sencillos", "La venta de partituras en papelerías", "La radio analógica de onda corta", "Los conciertos a puerta cerrada"], correcta: 0 },
      { dificultad: 3, enunciado: "El debate sobre apropiación cultural en la industria de la moda cuestiona el caso en que una empresa:", opciones: ["Usa motivos de un pueblo sin permiso, sin crédito y sin beneficio para esa comunidad", "Compra telas en el mercado local para sus colecciones", "Pide asesoría a diseñadores de la comunidad", "Contrata modelos de distintos países"], correcta: 0 },
      { dificultad: 3, enunciado: "Entre el patrimonio monumental y las industrias culturales, la tensión común está en:", opciones: ["Que ambos generan ingresos, pero el primero exige conservación y el segundo puede alterar sus significados", "Que ninguno deja recursos a la comunidad", "Que solo el patrimonio monumental requiere leyes", "Que las industrias culturales no usan símbolos"], correcta: 0 },
      { dificultad: 3, enunciado: "'Macondo', el territorio de 'Cien años de soledad' de Gabriel García Márquez, es hoy en la economía cultural:", opciones: ["Un símbolo que circula en turismo, editorial y productos culturales del país", "Un municipio oficial registrado por la Registraduría", "Una reserva natural administrada por la UNESCO", "Un estudio de grabación abierto al público"], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Organizar una ruta patrimonial en la ciudad", pasos: ["Escoger el barrio o el lugar de la ruta", "Ubicar los puntos que se visitarán", "Investigar la historia de cada punto", "Preparar las fichas informativas del recorrido", "Guiar al grupo por el trazado planeado", "Comentar en clase lo observado en la visita"] },
      { dificultad: 2, titulo: "Diseñar un producto cultural escolar", pasos: ["Elegir la historia local que queremos contar", "Definir el formato del producto de difusión", "Recolectar el material y los permisos de uso", "Producir el material con un guion revisado", "Difundirlo por los canales de la institución", "Medir la recepción del público y ajustar"] },
      { dificultad: 3, titulo: "Montar una feria de economías culturales locales", pasos: ["Levantar el listado de oficios y expresiones de la zona", "Invitar a portadores y emprendedores culturales", "Definir el espacio, el cronograma y el montaje", "Acordar las reglas de uso de imágenes y sonidos", "Desarrollar la feria con el público esperado", "Evaluar los resultados y proyectar una segunda versión"] }
    ]
  },

  // -----------------------------------------------------------------------
  // EJE: Estética y crítica
  // -----------------------------------------------------------------------
  "educacion-artistica--estetica--c1": {
    id: "educacion-artistica--estetica--c1",
    nombre: "Me gusta y por qué",
    preguntas: [
      { dificultad: 1, enunciado: "Cuando digo que una obra es bonita, quiero decir que:", opciones: ["Me gusta y me produce algo agradable", "Está hecha con mucha prisa", "La hizo una persona mayor", "Cuesta mucho dinero comprarla"], correcta: 0 },
      { dificultad: 1, enunciado: "¿Por qué me gusta un color en un dibujo?", opciones: ["Porque me hace sentir algo, como alegría", "Porque el color sabe dulce", "Porque está en mi caja nueva", "Porque lo escogió la profe"], correcta: 0 },
      { dificultad: 1, enunciado: "Cuando mi compañero muestra un trabajo que a mí no me gusta, debo:", opciones: ["Respetar su trabajo y decirle también algo bueno", "Burlarme de él en voz alta", "Esconder su hoja del salón", "Cambiarle el dibujo entero"], correcta: 0 },
      { dificultad: 1, enunciado: "¿Qué siento cuando escucho una música suave?", opciones: ["Calma y tranquilidad", "Miedo porque suena raro", "Hambre de inmediato", "Ganas de correr rápido"], correcta: 0 },
      { dificultad: 1, enunciado: "¿Dónde encuentro cosas bonitas fuera del colegio?", opciones: ["En el parque, en los cerros, en las casas del barrio", "Solo dentro de un museo grande", "En ningún lugar del mundo", "En la caja de los útiles nuevos"], correcta: 0 },
      { dificultad: 2, enunciado: "Me gusta más el rojo que el azul. ¿Cómo doy mi razón?", opciones: ["Digo qué me hace sentir cada color", "Digo que el rojo es más caro", "Digo que el azul está prohibido", "Digo que no sé por qué siento eso"], correcta: 0 },
      { dificultad: 2, enunciado: "Pinté un dibujo con espacios oscuros. Un amigo pregunta por qué. Yo respondo:", opciones: ["Que quise mostrar algo misterioso", "Que se me acabó el papel blanco", "Que la profe mandó pintar así", "Que el negro es más barato"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Cuál de estas cosas observo para opinar de un trabajo?", opciones: ["Los colores, las formas y lo que me hace sentir", "La marca del lápiz comprado", "El número del salón de clases", "La hora del refrigerio"], correcta: 0 },
      { dificultad: 2, enunciado: "Dos niñas pintan un mismo árbol, pero les sale distinto. ¿Es un problema?", opciones: ["No, cada quien expresa a su manera", "Sí, una de las dos perdió", "Sí, deben repetir el dibujo", "No, pero solo una puede mostrarlo"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Por qué disfruto una obra aunque no sepa quién la hizo?", opciones: ["Porque la obra me produce algo sin necesitar su nombre", "Porque todas las obras son iguales", "Porque el autor nunca importa", "Porque así la obra pasa a ser mía"], correcta: 0 },
      { dificultad: 3, enunciado: "A mí me encanta el tambor, a mi amiga le molesta. ¿Qué aprendemos?", opciones: ["Que cada persona siente la belleza de forma distinta", "Que uno de los dos escucha mal", "Que el tambor debe sonar más fuerte", "Que la música no es para niños"], correcta: 0 },
      { dificultad: 3, enunciado: "Un niño dice que solo lo bonito es arte. ¿Qué le respondo?", opciones: ["Que el arte también muestra cosas tristes para hacernos pensar", "Que tiene razón: lo triste no es arte", "Que el arte solo vive en los museos", "Que las cosas feas no se pintan nunca"], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Decir por qué me gusta una obra", pasos: ["Mirar la obra con calma un momento", "Buscar lo que más me llama la atención", "Decir en voz alta por qué me gusta"] },
      { dificultad: 2, titulo: "Elegir colores según lo que siento", pasos: ["Pensar en algo que me da alegría", "Escoger los colores de esa sensación", "Pintar con ellos un dibujo corto"] },
      { dificultad: 3, titulo: "Dar una opinión amable a un amigo", pasos: ["Decir la parte que más me gustó", "Explicar por qué esa parte funciona", "Proponer algo para mejorar con cariño"] }
    ]
  },

  "educacion-artistica--estetica--c2": {
    id: "educacion-artistica--estetica--c2",
    nombre: "Describir una obra con palabras",
    preguntas: [
      { dificultad: 1, enunciado: "Describir una obra significa:", opciones: ["Decir con palabras lo que veo en ella", "Adivinar cuánto costó la obra", "Copiarla igual en mi cuaderno", "Contar la vida privada del autor"], correcta: 0 },
      { dificultad: 1, enunciado: "Antes de describir una obra conviene:", opciones: ["Observarla con calma por un rato", "Leer primero el nombre del pintor", "Pintar algo encima de ella", "Buscar su precio en internet"], correcta: 0 },
      { dificultad: 1, enunciado: "En la ficha técnica de una obra constan datos como:", opciones: ["El título, la técnica, el año, las medidas", "El sueldo del guardia de la sala", "El color del sofa del museo", "El nombre de los visitantes"], correcta: 0 },
      { dificultad: 1, enunciado: "¿Cuál de estas frases es una descripción?", opciones: ["En el cuadro hay dos figuras sentadas junto a una mesa", "El cuadro es aburrido y muy feo", "Al pintor le faltó tiempo otra vez", "Lo hubieran hecho más grande"], correcta: 0 },
      { dificultad: 1, enunciado: "Lo que una obra me hace sentir hace parte de mi:", opciones: ["Interpretación personal", "Ficha técnica", "Inventario de la sala", "Presupuesto del museo"], correcta: 0 },
      { dificultad: 2, enunciado: "Para hablar de los colores de un paisaje debo decir:", opciones: ["Cuáles predominan, si son claros u oscuros, cálidos o fríos", "De qué color era el pincel usado", "En qué ciudad lo pintaron", "Cuánto costó el tubo de pintura"], correcta: 0 },
      { dificultad: 2, enunciado: "Si dos compañeros describen el mismo retrato, pero dicen cosas distintas, conviene:", opciones: ["Comparar qué miró cada uno y completar la descripción", "Elegir quién ganó la discusión", "Borrar las dos descripciones hechas", "Aceptar solo la del primero en hablar"], correcta: 0 },
      { dificultad: 2, enunciado: "La parte de la descripción que habla del espacio en el cuadro debe:", opciones: ["Decir qué está delante y qué queda al fondo", "Medir el marco de madera", "Contar cuánta gente entró a la sala", "Nombrar la sala del museo"], correcta: 0 },
      { dificultad: 2, enunciado: "Un texto que afirma que la obra es un fracaso está ofreciendo:", opciones: ["Un juicio de valor, no una descripción", "Una ficha técnica completa", "Una descripción objetiva", "Un dato del inventario"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Por qué la descripción ayuda antes de opinar sobre una obra?", opciones: ["Porque muestra en qué me fijé para argumentar", "Porque reemplaza la interpretación", "Porque es obligatoria en el museo", "Porque evita tener que mirar la obra"], correcta: 0 },
      { dificultad: 3, enunciado: "En un retrato noto que la mirada del personaje va hacia un lado. ¿Qué hago?", opciones: ["Uso ese detalle para pensar qué mira el personaje", "Concluyo que el cuadro está mal pintado", "Borro el detalle de la descripción", "Cambio el título de la obra"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Cuál descripción sirve más a quien no vio la obra?", opciones: ["La que ordena lo observado: figuras, colores, espacio", "La que acumula adjetivos bonitos", "La que cuenta cómo llegó al museo", "La que repite el nombre del cuadro"], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Describir un paisaje en clase", pasos: ["Mirar el cuadro dos veces seguidas", "Listar lo que aparece en él", "Anotar los colores que predominan", "Leer la descripción al grupo"] },
      { dificultad: 2, titulo: "Separar descripción de interpretación", pasos: ["Escribir lo que veo sin opinar", "Subrayar las palabras de opinión", "Cambiar esas palabras por hechos", "Añadir al final lo que la obra me sugiere"] },
      { dificultad: 3, titulo: "Construir la ficha técnica de una obra", pasos: ["Anotar el título y el nombre del autor", "Registrar la técnica y las medidas", "Escribir el año y el lugar donde se guarda", "Resumir en una frase de qué trata la obra"] }
    ]
  },

  "educacion-artistica--estetica--c3": {
    id: "educacion-artistica--estetica--c3",
    nombre: "Analizar una imagen",
    preguntas: [
      { dificultad: 1, enunciado: "El punto focal de una imagen es:", opciones: ["La zona donde la mirada se detiene primero", "El borde inferior de la fotografía", "La firma del autor siempre visible", "El marco puesto por el museo"], correcta: 0 },
      { dificultad: 1, enunciado: "Analizar una imagen consiste en:", opciones: ["Explicar cómo está hecha y qué comunica", "Copiarla en el cuaderno del colegio", "Votar si me gusta o no me gusta", "Imprimirla en el tamaño más grande"], correcta: 0 },
      { dificultad: 1, enunciado: "En una fotografía, una línea de horizonte alta hace que se vea:", opciones: ["Más terreno y menos cielo en el cuadro", "El cielo dominando toda la imagen", "Todo más oscuro y desenfocado", "La escena recortada por completo"], correcta: 0 },
      { dificultad: 1, enunciado: "Las imágenes hechas para acompañar la venta de un producto son:", opciones: ["Imágenes publicitarias", "Diagramas científicos", "Retratos de familia", "Bocetos de taller"], correcta: 0 },
      { dificultad: 1, enunciado: "El encuadre de una fotografía es:", opciones: ["El pedazo de realidad que entra dentro del marco", "La marca de la cámara usada", "El tiempo de exposición del negativo", "La carpeta digital donde se guarda"], correcta: 0 },
      { dificultad: 2, enunciado: "Frente a una misma imagen, ¿qué separa el análisis de la descripción?", opciones: ["El análisis explica cómo los elementos logran un efecto", "El análisis repite lo que aparece en ella", "El análisis lee solo el pie de foto", "El análisis calcula el precio de la obra"], correcta: 0 },
      { dificultad: 2, enunciado: "Una foto tomada a un personaje desde muy abajo suele producir:", opciones: ["La sensación de alguien grande e imponente", "La sensación de alguien pequeño y frágil", "La impresión de un sujeto lejano", "El efecto de una foto vieja"], correcta: 0 },
      { dificultad: 2, enunciado: "La diferencia entre lo denotado y lo connotado en una imagen está en:", opciones: ["Lo que muestra directamente frente a lo que sugiere culturalmente", "El tamaño del archivo digital", "La cantidad de colores usada", "El tipo de papel escogido"], correcta: 0 },
      { dificultad: 2, enunciado: "En una infografía, la información se organiza mediante:", opciones: ["Jerarquías visuales, datos y gráficos comprensibles", "Un párrafo largo y corrido", "Solamente filtros de color", "Marcos decorativos del texto"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Por qué una fotografía verdadera puede engañar por su encuadre?", opciones: ["Porque recorta el contexto y dirige lo que veo", "Porque las cámaras siempre mienten", "Porque está impresa en papel barato", "Porque no tiene firma del autor"], correcta: 0 },
      { dificultad: 3, enunciado: "Comparada una foto documental con una ilustración publicitaria del mismo tema, ¿qué cambia?", opciones: ["La intención: testimoniar frente a convencer para comprar", "El color del papel usado", "La cantidad de figuras del cuadro", "La altura del formato elegido"], correcta: 0 },
      { dificultad: 3, enunciado: "En el nivel iconográfico del análisis de una imagen pregunto:", opciones: ["Qué figuras y símbolos aparecen representados", "Cuánto mide el soporte de la obra", "En qué subasta se vendió la pieza", "Cuántos visitantes tuvo la exposición"], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Analizar los elementos de una imagen", pasos: ["Listar los objetos que aparecen en ella", "Ubicar el punto focal de la composición", "Describir la luz y los colores usados", "Explicar el efecto que ese conjunto produce"] },
      { dificultad: 2, titulo: "Verificar una imagen que circula en redes", pasos: ["Buscar de dónde salió la imagen original", "Leer el pie de foto en esa fuente", "Compararla con otras versiones del hecho", "Concluir qué parte se puede verificar"] },
      { dificultad: 3, titulo: "Interpretar una imagen según su contexto", pasos: ["Describir los elementos visibles de la obra", "Reconocer los símbolos que allí aparecen", "Investigar cuándo y para quién se hizo", "Explicar el mensaje de entonces y el de hoy"] }
    ]
  },

  "educacion-artistica--estetica--c4": {
    id: "educacion-artistica--estetica--c4",
    nombre: "Crítica de arte y semiótica",
    preguntas: [
      { dificultad: 1, enunciado: "La semiótica es la disciplina que estudia:", opciones: ["Los signos y los procesos de significación", "La química de los pigmentos pictóricos", "La contabilidad de las galerías de arte", "La acústica de las salas de concierto"], correcta: 0 },
      { dificultad: 1, enunciado: "Un signo que se parece a lo que representa, como un retrato, es un:", opciones: ["Ícono", "Índice", "Símbolo", "Código"], correcta: 0 },
      { dificultad: 1, enunciado: "Un signo que apunta a su objeto por una relación de causa, como el humo al fuego, es un:", opciones: ["Índice", "Ícono", "Símbolo", "Motivo"], correcta: 0 },
      { dificultad: 1, enunciado: "Un signo que funciona por convención cultural, como la paloma de la paz, es un:", opciones: ["Símbolo", "Ícono", "Índice", "Copia"], correcta: 0 },
      { dificultad: 1, enunciado: "La selección y la explicación de las obras de una exposición corresponden al trabajo del:", opciones: ["Curador de la muestra", "Transportador de las cajas", "Fotógrafo del catálogo impreso", "Visitante del primer día"], correcta: 0 },
      { dificultad: 2, enunciado: "Para ser seria, la crítica de arte debe:", opciones: ["Describir, analizar, interpretar y argumentar un juicio", "Limitarse a decir si la obra es bonita o fea", "Copiar el texto entregado por la galería", "Ocultar el nombre de la obra criticada"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Qué diferencia hay entre curaduría y crítica?", opciones: ["La curaduría selecciona y organiza las obras; la crítica las evalúa con argumentos", "Son dos nombres para la misma tarea", "La crítica monta la exposición física", "La curaduría se publica solo en diarios"], correcta: 0 },
      { dificultad: 2, enunciado: "En semiótica, el código de una imagen es:", opciones: ["El sistema de reglas que hace posible interpretarla", "La clave de acceso al museo", "El número de inventario de la obra", "La tarifa de entrada a la sala"], correcta: 0 },
      { dificultad: 2, enunciado: "Una publicidad que usa un símbolo nacional para vender puede criticarse porque:", opciones: ["Aprovecha un afecto colectivo con fines de mercado", "Respeta el patrimonio del país", "Informa al comprador sobre la técnica", "Evita cualquier mensaje ideológico"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Por qué un mismo símbolo significa cosas distintas en dos países?", opciones: ["Porque la significación depende del contrato cultural de cada comunidad", "Porque el símbolo cambia de forma sola", "Porque la traducción de la publicidad falla", "Porque un país tiene mejor gusto"], correcta: 0 },
      { dificultad: 3, enunciado: "Adorno y Horkheimer hablaron de industria cultural para señalar que:", opciones: ["Los bienes culturales de masas se estandarizan y se venden como mercancía", "La cultura debe producirse en fábricas del Estado", "El arte ya no puede hacerse a mano", "Las industrias del cine son patrimonio nacional"], correcta: 0 },
      { dificultad: 3, enunciado: "Cuando Roland Barthes habló de la muerte del autor quiso decir que:", opciones: ["El sentido de la obra se produce en la lectura, no en la intención del autor", "Los autores antiguos ya no deben leerse", "La firma del autor pierde valor legal", "Las obras nacen sin técnicas ni oficios"], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Escribir la crítica de una obra vista", pasos: ["Describir la obra con datos verificables", "Analizar los medios plásticos que emplea", "Interpretar qué dice según su contexto", "Emitir un juicio con razones y ejemplos", "Quitar los adjetivos vacíos en la revisión"] },
      { dificultad: 2, titulo: "Descomponer los signos de una imagen", pasos: ["Listar los elementos visibles de la imagen", "Clasificar cada uno como ícono, índice o símbolo", "Reconocer el código cultural que la sostiene", "Proponer la lectura denotativa del conjunto", "Proponer la lectura connotativa o ideológica"] },
      { dificultad: 3, titulo: "Montar una mini exposición en el colegio", pasos: ["Definir la pregunta o el tema de la muestra", "Seleccionar y ordenar las obras en un relato", "Escribir el texto curatorial de la sala", "Montar la sala y abrirla al público", "Evaluar la recepción con los visitantes reales"] }
    ]
  },

  "educacion-artistica--estetica--c5": {
    id: "educacion-artistica--estetica--c5",
    nombre: "Filosofía del arte y análisis cultural",
    preguntas: [
      { dificultad: 1, enunciado: "La estética recibió su nombre como disciplina en el siglo XVIII, gracias al filósofo:", opciones: ["Alexander Baumgarten", "Pitágoras de Samos", "Karl Marx", "Adam Smith"], correcta: 0 },
      { dificultad: 1, enunciado: "Para Kant el juicio de gusto es desinteresado, es decir que:", opciones: ["Aprecio la obra sin buscar un provecho personal en ella", "La obra no me produce nada en absoluto", "Solo importa el precio pagado por ella", "Exijo que todos coincidan conmigo por fuerza"], correcta: 0 },
      { dificultad: 1, enunciado: "En el siglo XX resultó difícil definir el arte porque:", opciones: ["Las vanguardias ampliaron materiales, gestos y contextos", "Dejó de hacerse obra nueva en el mundo", "Los museos prohibieron la pintura al óleo", "La fotografía desapareció del mercado"], correcta: 0 },
      { dificultad: 1, enunciado: "Walter Benjamin sostuvo que la reproducción técnica de la obra le hace perder:", opciones: ["Su aura, ligada al aquí y ahora del original", "Su color y su tamaño físico", "Su tema y su asunto representado", "Únicamente la firma del autor"], correcta: 0 },
      { dificultad: 1, enunciado: "El concepto de mimesis en Platón se refiere a:", opciones: ["La obra como imitación de una apariencia de la realidad", "El oficio técnico del escultor en bronce", "La medida matemática del ritmo musical", "La obligación de copiar retratos oficiales"], correcta: 0 },
      { dificultad: 2, enunciado: "Para Tolstói, en su tratado sobre el arte, la función del arte es:", opciones: ["Transmitir un sentimiento que el autor experimentó", "Demostrar la riqueza del mecenas protector", "Decorar los salones del Estado", "Ilustrar los manuales escolares"], correcta: 0 },
      { dificultad: 2, enunciado: "La mirada decolonial sobre la estética plantea que:", opciones: ["Los criterios de lo bello se historicizaron con la expansión europea", "No existe arte fuera del continente europeo", "Colombia debe cerrar sus museos coloniales", "Solo la academia puede definir el arte"], correcta: 0 },
      { dificultad: 2, enunciado: "El giro conceptual del arte contemporáneo hace que la crítica se ocupe más de:", opciones: ["El argumento, el contexto y el proceso de la obra", "La pericia manual del ejecutor siempre", "El peso del material utilizado", "La decoración de la sala del museo"], correcta: 0 },
      { dificultad: 2, enunciado: "Un análisis cultural de la imagen de moda busca:", opciones: ["Entender las relaciones de poder y de género que esa imagen sostiene", "Adivinar su valor comercial futuro", "Justificar la marca que la produjo", "Repetir el mensaje publicitario recibido"], correcta: 0 },
      { dificultad: 3, enunciado: "El urinario presentado por Duchamp como obra incomodó a la estética tradicional porque:", opciones: ["Desplazó el criterio desde el oficio hacia el contexto y la institución", "Estaba hecho de un material prohibido en el arte", "No cabía en ninguna sala de museo", "Iba firmado con un seudónimo extraño"], correcta: 0 },
      { dificultad: 3, enunciado: "Si el ojo que mira es también un ojo histórico, la crítica concluye que:", opciones: ["Sus juicios están situados culturalmente y puede revisarlos", "La obra cambia de forma al envejecer físicamente", "Ya no es posible emitir ninguna opinión válida", "Mirar objetos antiguos resulta inútil siempre"], correcta: 0 },
      { dificultad: 3, enunciado: "Al comparar el canon clásico de belleza con la estética de un carnaval, se revela que:", opciones: ["El canon de lo bello excluyó prácticas populares y no académicas", "El carnaval no usa colores ni disfraces", "La belleza clásica era más colorida", "Ambos proponen exactamente lo mismo"], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Ejercitar un juicio estético argumentado", pasos: ["Elegir una obra que me produzca rechazo", "Describir sin juzgar sus rasgos visibles", "Identificar qué rasgo provoca el rechazo", "Buscar la intención o el contexto de ese rasgo", "Reformular mi opinión con razones", "Distinguir el gusto personal del argumento"] },
      { dificultad: 2, titulo: "Debatir sobre la definición de arte", pasos: ["Reunir tres casos difíciles de clasificar", "Proponer un criterio para definir el arte", "Aplicar ese criterio a los tres casos", "Buscar contraejemplos al criterio propuesto", "Ajustar la definición con lo hallado", "Cerrar el debate con conclusiones escritas"] },
      { dificultad: 3, titulo: "Escribir un ensayo de estética sobre un objeto cultural", pasos: ["Elegir un objeto o imagen de la cultura actual", "Formular la pregunta que quiero discutir", "Revisar dos o tres autores sobre el tema", "Argumentar mi posición con ejemplos", "Anticipar una objeción y responderla", "Revisar el estilo y citar las fuentes"] }
    ]
  }
};
