// js/games/banco/espanol.js
// Banco de contenido: LENGUA CASTELLANA (5 factores de los EBC del MEN)
// Formato: BANCO[id] = { nombre, preguntas: [...], retos: [...] }
// correcta: 0 siempre; la opción 0 es la respuesta buena (el juego baraja).

export const BANCO = {

  // ============================ COMPRENSIÓN ============================

  "espanol--comprension--c1": {
    nombre: "Leer imágenes, palabras cercanas y oraciones cortas",
    preguntas: [
      { dificultad: 1, enunciado: "La señal con el número 20 en un cuadro rojo dice:", opciones: ["Velocidad máxima: 20", "Hay un colegio cerca", "Estacionamiento 20", "Calle 20"], correcta: 0 },
      { dificultad: 1, enunciado: "MAMÁ. La palabra tiene:", opciones: ["Dos sílabas", "Una sílaba", "Tres sílabas", "Cuatro sílabas"], correcta: 0 },
      { dificultad: 1, enunciado: "«Luis come pan». ¿Quién come pan?", opciones: ["Luis", "Pan", "Come", "Nadie"], correcta: 0 },
      { dificultad: 1, enunciado: "¿Cuál palabra rima con GATO?", opciones: ["Pato", "Perro", "Vaca", "Lápiz"], correcta: 0 },
      { dificultad: 1, enunciado: "«La rana está en el estanque». ¿Dónde está la rana?", opciones: ["En el estanque", "En la calle", "En el árbol", "En la casa"], correcta: 0 },
      { dificultad: 1, enunciado: "La viñeta muestra a Ana con paraguas y lluvia. Ana:", opciones: ["Se está protegiendo de la lluvia", "Va a correr una carrera", "Juega al fútbol", "Riega las plantas"], correcta: 0 },
      { dificultad: 2, enunciado: "«El perro de Pedro es café». El perro es:", opciones: ["De Pedro y color café", "Solo café", "De Pedro y color negro", "Un gato café"], correcta: 0 },
      { dificultad: 2, enunciado: "En la tienda veo: PAN. ¿Dónde está la palabra?", opciones: ["En el puesto del pan", "En la sala del colegio", "En la cancha", "En el bus"], correcta: 0 },
      { dificultad: 2, enunciado: "«Sofía pinta una estrella». Sofía está:", opciones: ["Pintando", "Dormando", "Corriendo", "Leyendo"], correcta: 0 },
      { dificultad: 2, enunciado: "«Ya sonó la campana». Significa que:", opciones: ["Empieza o termina algo del colegio", "Llueve mucho", "Vino el panadero", "Es de noche"], correcta: 0 },
      { dificultad: 2, enunciado: "«El sapo saltó del balde». El sapo estaba antes:", opciones: ["En el balde", "En el río", "En el patio", "En el techo"], correcta: 0 },
      { dificultad: 2, enunciado: "La oración «Marta lava la losa» tiene la letra:", opciones: ["L", "M", "S", "R"], correcta: 0 },
      { dificultad: 3, enunciado: "«Pudo jugar, pero llovió». Tío Conejo:", opciones: ["No jugó porque llovió", "Jugó en la lluvia", "Viajó lejos", "Se puso feliz"], correcta: 0 },
      { dificultad: 3, enunciado: "«A papá le gusta el café, a mí el chocolate». Yo prefiero:", opciones: ["El chocolate", "El café", "El pan", "La leche"], correcta: 0 },
      { dificultad: 3, enunciado: "«Guarda la sopa, quema». La sopa está:", opciones: ["Caliente", "Fría", "Vacia", "Dulce"], correcta: 0 },
      { dificultad: 3, enunciado: "«No quiero sopa, quiero pan». La niña pide:", opciones: ["Pan", "Sopa", "Agua", "Arroz"], correcta: 0 },
      { dificultad: 3, enunciado: "Señal de un carro con tacho de basura y una mano. Dice:", opciones: ["No botar basura a la calle", "Aquí venden basura", "Cuidado con los carros", "Parchear llantas"], correcta: 0 },
      { dificultad: 3, enunciado: "«El reloj marca las tres y ya nos vamos». Nos vamos a las:", opciones: ["Tres", "Diez", "Doce", "Una"], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Leer una oración en voz alta", descripcion: "Ordena los pasos para leer bien.", pasos: ["Mirar la oración con atención", "Juntar sílaba por sílaba", "Leer la oración completa con voz clara"] },
      { dificultad: 2, titulo: "Entender una señal del barrio", descripcion: "Ordena qué hacer al ver una señal.", pasos: ["Mirar la señal despacio", "Decir qué figura o número muestra", "Explicar qué nos pide o nos avisa"] },
      { dificultad: 3, titulo: "Leer una tira cómica corta", descripcion: "Ordena cómo entender la historieta.", pasos: ["Observar las imágenes de izquierda a derecha", "Leer los globos de diálogo en orden", "Contar con tus palabras qué pasó al final"] }
    ]
  },

  "espanol--comprension--c2": {
    nombre: "Nivel inferencial: deducir lo que el texto no dice",
    preguntas: [
      { dificultad: 1, enunciado: "«Doña Rosa baja las persianas del puesto del mercado y se va con las manos vacías». ¿Qué pasó?", opciones: ["Vendió todo o no hubo clientes y cerró", "Se fue a dormir la siesta", "Abrió el puesto temprano", "Ganó la lotería"], correcta: 0 },
      { dificultad: 1, enunciado: "«Andrés miró el cielo nublado y tomó el impermeable». Del texto se deduce que:", opciones: ["Andrés cree que va a llover", "Andrés va a nadar", "Andrés tiene frío por la calefacción", "Andrés va al cine"], correcta: 0 },
      { dificultad: 1, enunciado: "«El tigre sopló la casa de paja y esta voló». La casa de paja era:", opciones: ["Frágil", "Muy fuerte", "De ladrillo", "Enorme"], correcta: 0 },
      { dificultad: 2, enunciado: "«Lucía dejó su cuaderno abierto en la página 20 y salió corriendo al patio». Lucía:", opciones: ["Estudió o hizo tarea antes del recreo", "Nunca hizo tarea", "Perdió el cuaderno", "Regaló su cuaderno"], correcta: 0 },
      { dificultad: 2, enunciado: "«El SITP se detuvo y el señor del sombrero preguntó: ¿pasa por la avenida 68?». El señor quiere:", opciones: ["Saber si el bus llega a la avenida 68", "Vender su sombrero", "Conducir el bus", "Bajarse en esa parada"], correcta: 0 },
      { dificultad: 2, enunciado: "«Mariana guardó el último pan bajo el delantal para que no lo viera su hermano». Mariana:", opciones: ["Quiere hacer una sorpresa con el pan", "Olivó el pan", "No le gusta el pan", "Va a vender el pan"], correcta: 0 },
      { dificultad: 2, enunciado: "«La profesora sonrió cuando vimos el silencio del salón». El silencio indicates que:", opciones: ["El grupo se puso a trabajar o a escuchar", "El salón estaba vacío", "Nadie sabía la respuesta", "Sonó una alarma"], correcta: 0 },
      { dificultad: 2, enunciado: "«El cóndor voló sobre los Andes sin mover las alas». El cóndor:", opciones: ["Aprovecha las corrientes de aire para planear", "Está cansado y descansa", "Caminó por la montaña", "Voló muy bajo"], correcta: 0 },
      { dificultad: 3, enunciado: "«Mi abuelo dice que antes el barrio La Soledad tenía tranvía y hoy solo quedan riebles pintados de flores». ¿Qué cambio se insinúa?", opciones: ["El transporte del barrio cambió con el tiempo", "Los rieles se robaron todos", "El abuelo nunca vio el tranvía", "Las flores tapan las casas"], correcta: 0 },
      { dificultad: 3, enunciado: "«Camila copió la tarea de Juan y el profesor le puso un cero». ¿Qué se puede inferir del profesor?", opciones: ["Valora el trabajo propio de cada estudiante", "No revisa las tareas", "Quiere a Juan como su alumno favorito", "Se equivocó de nota"], correcta: 0 },
      { dificultad: 3, enunciado: "«El vendedor de tintos encendió la radio: hoy gana el local». La expresión «gana el local» sugiere que:", opciones: ["El equipo de la ciudad ganó el partido", "El local cerró por feriado", "El vendedor perdió dinero", "La radio se dañó"], correcta: 0 },
      { dificultad: 3, enunciado: "«Don Efraín riega sus helechos y comenta: con usted no se puede». Si los helechos se ven marchitos, Don Efraín:", opciones: ["Los cuida pero las plantas no responden", "No los riega nunca", "Los va a vender", "Culpa al vecino"], correcta: 0 },
      { dificultad: 3, enunciado: "«Sara llegó con los zapatos llenos de arena aunque vive en Bogotá». ¿Dónde estuvo Sara?", opciones: ["En un lugar con arena, como un parque o playa", "En una zapatería", "En su casa toda la tarde", "En la biblioteca"], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Deducir de un texto corto", descripcion: "Ordena los pasos para inferir.", pasos: ["Leer el texto completo", "Buscar pistas en lo que hace o dice un personaje", "Unir las pistas con lo que ya sé", "Decir qué concluyo sin que esté escrito"] },
      { dificultad: 2, titulo: "Adivinar el lugar por las pistas", descripcion: "Ordena cómo descubrir dónde ocurre una historia.", pasos: ["Leer buscando objetos y sonidos del lugar", "Anotar las pistas: olores, voces, mobiliario", "Comparar pistas con lugares que conozco", "Elegir el lugar que explica todas las pistas"] },
      { dificultad: 3, titulo: "Comprender una historia con saltos en el tiempo", descripcion: "Ordena los pasos para entender hechos que no están narrados en orden.", pasos: ["Listar los hechos en el orden en que aparecen", "Preguntar qué causa qué en cada hecho", "Reorganizar los hechos en orden cronológico", "Deducir lo que ocurrió entre un hecho y otro"] }
    ]
  },

  "espanol--comprension--c3": {
    nombre: "Idea principal, información implícita y propósito del autor",
    preguntas: [
      { dificultad: 1, enunciado: "«Bogotá pasó de tener tranvías en los años 40 a unos buses alimentadores, un SITP y una ciclovía que crece cada año. Así, la ciudad ha reinventado su forma de moverse». La idea principal es:", opciones: ["El transporte de Bogotá ha cambiado con el tiempo", "El tranvía era lento y antiguo", "La ciclovía es lo mejor de la ciudad", "Los buses alimentadores son nuevos"], correcta: 0 },
      { dificultad: 1, enunciado: "«Los murundiales, las papas criollas y el maíz son alimentos traídos de América que hoy están en la dieta de todo el mundo». El texto trata sobre:", opciones: ["Alimentos americanos presentes en el mundo", "La cocina de los países europeos", "Las plantas que dejó de comer Bogotá", "La siembra de papa en el altiplano"], correcta: 0 },
      { dificultad: 1, enunciado: "Un texto enumera pasos para preparar ajiaco. Su propósito es:", opciones: ["Instruir o explicar cómo se hace algo", "Convencer de comprar pollo", "Contar una anécdota graciosa", "Expresar nostalgia por la tierra"], correcta: 0 },
      { dificultad: 2, enunciado: "«El 20 de julio de 1810, en el comercio de la calle de los Meneros, criollos y españoles se enredaron en un incidente con un jarrón. Lo que parecía una riña pequeña terminó siendo la chispa de una jornada que cambió la historia de Nueva Granada». ¿Qué se infiere del «incidente del jarrón»?", opciones: ["Fue una excusa que activó un conflicto político mayor", "Fue la causa real y única de la independencia", "Los españoles rompieron el jarrón a propósito", "Terminó en un acuerdo de paz entre vecinos"], correcta: 0 },
      { dificultad: 2, enunciado: "En un texto sobre el páramo de Sumapaz, el autor cita cifras de cosecha de agua y habla de «nuestra despensa de agua». La expresión «despensa de agua» sugiere que el autor:", opciones: ["Presenta el páramo como fuente que nos sostiene", "Quiere vender agua embotellada", "Cree que el agua es infinita", "Compara el páramo con una cocina"], correcta: 0 },
      { dificultad: 2, enunciado: "«La lectura en voz alta en el aula mejora la atención, según una maestra con 20 años de experiencia». ¿Cuál es la debilidad de este texto?", opciones: ["Se basa en una sola opinión, no en evidencia amplia", "La maestra es demasiado joven", "La lectura no se hace en voz alta", "Mejora también la puntualidad"], correcta: 0 },
      { dificultad: 2, enunciado: "Un afiche del colegio dice: «Únete al club de lectura: cada viernes en la biblioteca, talleres gratis y libros que te esperan». El propósito del afiche es:", opciones: ["Persuadir a estudiantes a participar", "Informar que la biblioteca se cierra", "Narrar la historia del club", "Explicar cómo se escriben los afiches"], correcta: 0 },
      { dificultad: 3, enunciado: "«Con 1.794 versos, la obra de José Asunción Silva marcó un antes en la poesía colombiana. Algunos críticos celebran su musicalidad; otros la llaman excesivamente lánguida». ¿Qué hace este texto?", opciones: ["Presenta una obra y muestra dos valoraciones opuestas", "Declara que la obra es mala", "Cuenta la biografía completa de Silva", "Compara a Silva con García Márquez"], correcta: 0 },
      { dificultad: 3, enunciado: "«El consumo de pantallas entre jóvenes creció; la escuela sigue midiendo la asistencia con lista de papel». ¿Cuál es la información implícita?", opciones: ["La escuela no se ha adaptado a los cambios tecnológicos", "La lista de papel es más moderna que las pantallas", "Los jóvenes no usan pantallas", "La asistencia ya no se controla"], correcta: 0 },
      { dificultad: 3, enunciado: "Un artículo titula «El silencio del cóndor» y describe pájaros que ya no se ven en los cerros orientales. El título sugiere que:", opciones: ["Se perderá algo valioso del paisaje natural", "Los cóndores aprendieron a callar", "El autor prefiere los lugares sin ruido", "Habrá más cóndores en la ciudad"], correcta: 0 },
      { dificultad: 3, enunciado: "Si un autor escribe: «No diré que la ciclovía lo resuelve todo, pero ningún otro plan ha devuelto tanto espacio público a la gente», su postura es:", opciones: ["Matizada: reconoce límites pero defiende la ciclovía", "Totalmente contraria a la ciclovía", "Neutral, no toma posición", "A favor de eliminar la ciclovía"], correcta: 0 },
      { dificultad: 3, enunciado: "En un texto, dos vecinos discuten sobre si talar un árbol; el narrador solo describe el sol en las hojas. ¿Qué se espera que haga el lector?", opciones: ["Deducir qué significa el árbol para cada uno mirando los detalles", "Detenerse a regar el árbol", "Buscar un tercer vecino", "Ignorar la discusión: no importa"], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Encontrar la idea principal", descripcion: "Ordena los pasos para identificar la idea principal.", pasos: ["Leer el texto completo sin detenerse", "Preguntarse ¿de qué se habla en casi todo el texto?", "Descartar detalles y ejemplos sueltos", "Enunciar la idea principal con mis palabras"] },
      { dificultad: 2, titulo: "Reconocer el propósito del autor", descripcion: "Ordena los pasos para identificar para qué escribe el autor.", pasos: ["Identificar el tipo de texto: cuento, noticia, artículo de opinión", "Observar el título y las palabras con carga emotiva", "Preguntar qué quiere lograr: informar, convencer, entretener", "Comprobar si el final refuerza esa intención"] },
      { dificultad: 3, titulo: "Detectar información implícita", descripcion: "Ordena los pasos para leer entre líneas.", pasos: ["Subrayar lo que el texto dice de forma explícita", "Marcar pistas: adjetivos, comparaciones, silencios del narrador", "Relacionar las pistas con el contexto del texto", "Formular la idea implícita y verificar que no contradiga el texto"] },
      { dificultad: 3, titulo: "Resumir sin traicionar el texto", descripcion: "Ordena los pasos de un buen resumen.", pasos: ["Lectura completa del texto original", "Selección de las 2 o 3 ideas que sostienen todo y eliminación de ejemplos", "Redactar el resumen con mis palabras", "Comparar con el texto para revisar que no agregué nada ni me falta lo esencial"] }
    ]
  },

  // Las tres últimas preguntas de este nodo siguen el estilo Saber 11 del colegio.

  "espanol--comprension--c4": {
    nombre: "Tesis, argumentos y conclusión en textos argumentativos",
    preguntas: [
      { dificultad: 1, enunciado: "«Defender el uso del celular en clase está mal: en seis cursos observados, el 80 % de los estudiantes interrumpió la explicación para mirar notificaciones». La tesis del texto es:", opciones: ["El celular en clase perjudica la atención", "Los celulares tienen demasiadas notificaciones", "Los estudiantes de sexto son desordenados", "Hay que prohibir todos los aparatos digitales"], correcta: 0 },
      { dificultad: 1, enunciado: "Un argumento de autoridad se caracteriza porque:", opciones: ["Se apoya en lo que dice un experto reconocido", "Apela a las emociones del público", "Usa solo ejemplos inventados", "Repite la idea principal con otras palabras"], correcta: 0 },
      { dificultad: 1, enunciado: "«Concluyo entonces que las jornadas sin celular ganaron más que perdieron: la convivencia mejoró y nadie extrañó las redes». Esa parte del texto es:", opciones: ["La conclusión, porque retoma la tesis y la cierra", "La tesis, porque abre el tema", "Un contraargumento, porque duda", "El contexto, porque informa"], correcta: 0 },
      { dificultad: 2, enunciado: "«Los críticos dicen que prohibir el celular en el colegio es un retroceso; sin embargo, los datos muestran que una norma clara enseña a usarlo mejor que un veto silencioso». La función de «los críticos dicen…» es:", opciones: ["Anticipar y refutar un contraargumento", "Presentar la tesis principal del autor", "Dar un ejemplo anecdótico sin valor", "Citar a los expertos que respaldan la tesis"], correcta: 0 },
      { dificultad: 2, enunciado: "«Si todos dejamos los plásticos de un solo uso, las quebradas de la ciudad dejarán de taparse». ¿Qué tipo de argumento es?", opciones: ["Causal: una acción produce un resultado esperado", "De autoridad: cita expertos en ambiente", "Ad hominem: ataca a quien usa plásticos", "De ejemplificación: cuenta un caso histórico"], correcta: 0 },
      { dificultad: 2, enunciado: "Un texto que demuestra que una norma es justa mostrando cómo la cumplen tres colegios de Bogotá usa:", opciones: ["Argumentos de ejemplos casos concretos", "Argumento de autoridad", "Falsa analogía", "Sola opinión personal"], correcta: 0 },
      { dificultad: 2, enunciado: "«Usted, que no aprobó el examen, no puede opinar sobre la dificultad de las matemáticas». El error del hablante es:", opciones: ["Ad hominem: descalifica a la persona, no su idea", "Generalización apresurada con datos", "Falsa causa: confunde tiempo con causa", "Apelación a la emoción del miedo"], correcta: 0 },
      { dificultad: 3, enunciado: "«La ciudad que no oye: sobre el silencio de los mototaxistas». El autor compara el ruido de las motos con el silencio social de quienes callan por miedo. ¿Qué hace este texto?", opciones: ["Usa una analogía para sostener una tesis social", "Enumera normas de tránsito para conductores", "Narra la biografía de un mototaxista bogotano", "Presenta estadísticas de accidentalidad vial"], correcta: 0 },
      { dificultad: 3, enunciado: "En dos textos, uno defiende las corridas de toros como tradición y otro las ataca como maltrato. El lector crítico debe:", opciones: ["Comparar la calidad de los argumentos de cada postura", "Aceptar el que tenga más likes en redes", "Rechazar ambos temas: no son serios", "Votar por la postura que más emocione"], correcta: 0 },
      { dificultad: 3, enunciado: "«El 90 % de los asistentes aprobó el simulacro, así que todos sabemos evacuar». El fallo del argumento es:", opciones: ["Generalización: confunde un grupo con toda la población", "Falsa causa: el simulacro causó la aprobación", "Ad populum: apeló al miedo de la gente", "Circular: la conclusión repite la premisa idéntica"], correcta: 0 },
      { dificultad: 3, enunciado: "Un columnista dice: «La biblioteca del barrio es el único lugar donde la pobreza se lee como dignidad». ¿Qué se infiere de su tesis?", opciones: ["Reivindica la biblioteca como espacio de igualdad y respeto", "Propone cerrar las bibliotecas del barrio", "Afirma que la pobreza es imposible de estudiar", "Critica a los lectores del barrio por pobres"], correcta: 0 },
      { dificultad: 3, enunciado: "Si una argumentación termina con: «Los datos, las voces de los vecinos y el sentido común apuntan al mismo lugar», podemos decir que:", opciones: ["Combina varios tipos de argumento para reforzar la tesis", "Solo usa argumentos de autoridad", "Carece de estructura y de tesis", "Presenta un solo ejemplo anecdótico"], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Montar un esqueleto argumentativo", descripcion: "Ordena las partes de un texto argumentativo.", pasos: ["Enunciar la tesis clara y defendible", "Presentar el primer argumento con evidencia", "Concluir retomando la tesis"] },
      { dificultad: 2, titulo: "Analizar la argumentación de una columna", descripcion: "Ordena los pasos para analizar un texto de opinión.", pasos: ["Leer dos veces: la primera global, la segunda marcando", "Distinguir tesis, argumentos y ejemplos", "Clasificar cada argumento: autoridad, causal, ejemplos", "Evaluar si la evidencia respalda la tesis"] },
      { dificultad: 3, titulo: "Escribir un texto argumentativo escolar", descripcion: "Ordena los pasos para escribir con tesis y defensas.", pasos: ["Elegir un tema debateble y definir mi postura", "Listar tres argumentos y su evidencia", "Redactar introducción con tesis explícita", "Desarrollar cada argumento con contraargumento y refutación", "Cerrrar con conclusión que no agregue temas nuevos"] }
    ]
  },

  "espanol--comprension--c5": {
    nombre: "Lectura crítica: voces, sesgos e intertextualidad",
    preguntas: [
      { dificultad: 1, enunciado: "«La memoria de García Márquez: cuando Macondo era Aracataca», dice un titular que mezcla entrevistas, fotos y fragmentos de sus novelas. La intertextualidad del titular consiste en:", opciones: ["Cruzar la biografía del autor con su obra ficticia", "Copiar un párrafo de Cien años de soledad", "Traducir el titular al inglés", "Confundir a Macondo con otra ciudad real"], correcta: 0 },
      { dificultad: 1, enunciado: "Cuando un texto dialoga con otro texto anterior se habla de:", opciones: ["Intertextualidad", "Plagio", "Paráfrasis obligada", "Censura previa"], correcta: 0 },
      { dificultad: 1, enunciado: "La «línea editorial» de un medio es:", opciones: ["La posición general con la que ese medio selecciona y presenta sus noticias", "El orden alfabético de sus redactores", "El reglamento interno para publicar fotos", "El precio del diario en el mercado"], correcta: 0 },
      { dificultad: 2, enunciado: "«Bajan los precios de la gasolina, anuncia el Ministerio». Otro diario titula: «Nueva alza disfrazada: el gobierno deja de subsidiar el combustible». ¿Qué diferencia a los dos textos?", opciones: ["El encuadre: seleccionan palabras que orientan la interpretación", "Uno cita al Ministerio y el otro no", "El segundo reportea un hecho distinto", "No hay diferencia: son hechos opuestos"], correcta: 0 },
      { dificultad: 2, enunciado: "Una columna sobre las brechas urbanas de Bogotá usa la voz de una vendedora del SanVictencho junto con datos del DANE. ¿Qué logra el autor?", opciones: ["Polifonía: articula testimonio y evidencia estadística", "Confunde al lector mezclando registros", "Sustituye los datos con pura emoción", "Copió el testimonio sin decirlo"], correcta: 0 },
      { dificultad: 2, enunciado: "«La perra, de Pilar Quintana, abre con una perra que no ladra. Como en La casa del tiempo, el animal espeja la interior de una mujer sola». Este comentario ejerce:", opciones: ["Intertextualidad comparada entre dos obras de la misma autora", "Resumen de la biografía de Quintana", "Refutación de la novela", "Traducción de un fragmento"], correcta: 0 },
      { dificultad: 2, enunciado: "«Lea el texto completo, no solo el titular» es una recomendación contra:", opciones: ["El sesgo de confirmación que nos hace creer lo primero que vemos", "La lectura lenta de textos largos", "El uso de subtítulos informativos", "La costumbre de leer en papel"], correcta: 0 },
      { dificultad: 3, enunciado: "Un ensayo sobre el Bogotazo intercala fragmentos de noticias de 1948, testimonios de un transeúnte y un poema de Cúllar Rivadeneyra sobre la violencia. ¿Cuál es la función del poema?", opciones: ["Aporta una voz literaria que reinterpreta el hecho histórico", "Reemplaza las pruebas del ensayo", "Demuestra que el autor no consigue testimonios", "Rompe el tema histórico con algo ajeno"], correcta: 0 },
      { dificultad: 3, enunciado: "Un meme afirma: «El TransMilenio no es para pobres: es para los que se resignan». Como lectores críticos, debemos:", opciones: ["Preguntar quién lo produce, qué silencia y qué intereses defiende", "Difundirlo porque hace reír y hace pensar", "Aceptar la frase: los memes siempre dicen la verdad", "Ignorarlo: los memes no son objetos de análisis"], correcta: 0 },
      { dificultad: 3, enunciado: "En un reportaje, todas las fuentes son funcionarios de la misma alcaldía. ¿Qué sesgo es más probable?", opciones: ["Sesgo de selección de fuentes: falta contraste y disidencia", "Sesgo estadístico: los números están mal", "Sesgo temporal: pasó ayer", "Ninguno: los funcionarios bastan"], correcta: 0 },
      { dificultad: 3, enunciado: "«Nocturno de Silva» esparcido en un post con música lenta acumula 40.000 reacciones. Un profesor comenta: «aquí la red construyó canon». La idea del profesor es:", opciones: ["Las plataformas moldean qué leemos y qué consideramos valioso", "Silva escribió para las redes sociales", "La poesía necesita música para existir", "Las reacciones miden calidad literaria con rigor"], correcta: 0 },
      { dificultad: 3, enunciado: "Dos textos citan la misma encuesta sobre lectura en Bogotá pero llegan a conclusiones opuestas. Lo primero que debes revisar es:", opciones: ["Cómo enmarca cada texto los datos: qué resalta, qué omite", "Qué encuesta es más larga", "Quién publicó primero para darle la razón", "Si el lector prefiere uno u otro tema"], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Distinguir hecho y opinión", descripcion: "Ordena los pasos del análisis básico.", pasos: ["Leer el texto marcando afirmaciones comprobables", "Preguntar por cada enunciado: ¿puedo verificarlo?", "Separar los hechos de los juicios de valor", "Releer para ver si la opinión usa hechos como apoyo"] },
      { dificultad: 2, titulo: "Detectar el encuadre de una noticia", descripcion: "Ordena los pasos para identificar el encuadre.", pasos: ["Leer el titular y la entrada de la noticia", "Subrayar palabras con carga valorativa", "Comparar con otra versión del mismo hecho", "Preguntar qué se eligió mostrar y qué se omitió", "Concluir qué interpretación propone cada medio"] },
      { dificultad: 3, titulo: "Rastrear la intertextualidad en un ensayo", descripcion: "Ordena los pasos del análisis de voces.", pasos: ["Identificar el tema y la tesis del ensayo", "Marcar citas, alusiones y referencias a otros textos", "Clasificar cada referencia: explícita o implícita", "Preguntar qué aporta cada voz a la argumentación", "Evaluar si las fuentes están bien atribuidas", "Redactar una síntesis crítica de las voces del texto"] },
      { dificultad: 3, titulo: "Verificar contenido sospechoso", descripcion: "Ordena las acciones para desmentir una desinformación.", pasos: ["Leer completo antes de compartir, sin quedarse en el titular", "Buscar la fuente original: fecha, autores y contexto", "Contrastar con al menos dos medios confiables", "Revisar si la imagen o el video tienen versión anterior", "Consultar verificadores reconocidos del caso", "Decidir: informar, corregir o no difundir"] }
    ]
  },

  // ============================ PRODUCCIÓN ============================

  "espanol--produccion--c1": {
    nombre: "Escribir oraciones completas con sentido",
    preguntas: [
      { dificultad: 1, enunciado: "¿Cuál oración está completa?", opciones: ["Ana lava la losa.", "Ana lava la.", "Lava la losa con.", "Ana la losa."], correcta: 0 },
      { dificultad: 1, enunciado: "«El niño ___ pelota». ¿Qué falta?", opciones: ["juega con la", "corre al", "dorme en", "vuela sin"], correcta: 0 },
      { dificultad: 1, enunciado: "¿Cuál oración empieza con mayúscula?", opciones: ["Mi gato come.", "mi gato come", "MI GATO come.", "Mi gato Come."], correcta: 0 },
      { dificultad: 1, enunciado: "Escribe: «la luna sale». ¿Cómo debe terminar?", opciones: ["con punto: La luna sale.", "con punto, pero sin mayúscula", "con coma, ya", "así sin nada"], correcta: 0 },
      { dificultad: 1, enunciado: "¿Cuál oración dice algo completo?", opciones: ["Pipo vende pan.", "Pipo vende el.", "Vende pan muy.", "Pipo pan en."], correcta: 0 },
      { dificultad: 1, enunciado: "Para escribir sobre tu patio, primero piensas en:", opciones: ["qué haces allí y con quién", "tu zapato izquierdo", "el número de tu casa", "la firma del profe"], correcta: 0 },
      { dificultad: 2, enunciado: "«María pintó su casa azul». ¿Qué pregunta puedes hacerle a la oración?", opciones: ["¿Quién pintó?, ¿Qué pintó?", "¿Cuándo comió?, ¿Cuánto cuesta?", "¿Dónde duermen?, ¿Con quién?", "¿Por qué salta?, ¿Hacia dónde?"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Cuál oración no tiene sentido?", opciones: ["El pan caminó al colegio.", "Sofía corrió por el patio.", "Mi tía vende empanadas.", "El sol salió temprano."], correcta: 0 },
      { dificultad: 2, enunciado: "«mi amiga luisa vino en bus». ¿Qué corregimos?", opciones: ["Mayúsculas en Mi y Luisa", "Unos signos de exclamación", "La palabra bus", "Una coma después de vino"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Cuál oración tiene las palabras en buen orden?", opciones: ["En el mercado, mi abuela compra papa.", "Mercado el papa compra abuela mi.", "Compra en mi abuela mercado papa.", "Papa compra mercado en mi abuela."], correcta: 0 },
      { dificultad: 2, enunciado: "Si escribes «Los niños juegan fútbol», falta:", opciones: ["un conector: los niños juegan AL fútbol", "una mayúscula más", "otro punto final", "nada: está perfecta"], correcta: 0 },
      { dificultad: 3, enunciado: "Tres oraciones para un párrafo corto. La que NO va con las demás:", opciones: ["Las gallinas ponen huevos azules.", "El bus de la ruta 11 está tarde.", "Los estudiantes esperamos en la parada.", "Mi mamá me lleva en bicicleta."], correcta: 0 },
      { dificultad: 3, enunciado: "«Después de la lluvia salen los niños». Con ANTES queda:", opciones: ["Cambia el momento: los niños salen y luego llueve", "Dice exactamente lo mismo", "Queda sin verbo y sin sujeto", "Pasa a ser una pregunta"], correcta: 0 },
      { dificultad: 3, enunciado: "Tu oración tiene quién y qué hace, pero «suena cortada». Falta:", opciones: ["un detalle: dónde, cuándo o cómo", "la palabra que falta", "un número al final", "completar en letra imprenta"], correcta: 0 },
      { dificultad: 3, enunciado: "«Escribo una carta a mi prima en Fusagasugá». Lo primero que debe tener tu carta es:", opciones: ["«Querida prima:»", "«Atentamente:» solo", "La fecha nada más", "Un dibujo grande"], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Escribir una oración completa", descripcion: "Ordena los pasos.", pasos: ["Pensar en quién hace algo", "Escribir qué hace y con qué o dónde", "Revisar mayúscula inicial y punto final"] },
      { dificultad: 2, titulo: "Mejorar una oración floja", descripcion: "Ordena cómo ampliarla.", pasos: ["Leer la oración en voz alta", "Preguntar dónde, cuándo o cómo", "Agregar el detalle que la haga más clara"] },
      { dificultad: 3, titulo: "Escribir tres oraciones sobre un dibujo", descripcion: "Ordena los pasos de la mini-redacción.", pasos: ["Mira el dibujo y di qué pasa", "Escribe quién hace qué", "Relee y agrega un detalle"] }
    ]
  },

  "espanol--produccion--c2": {
    nombre: "Párrafo con idea principal y detalles",
    preguntas: [
      { dificultad: 1, enunciado: "La idea principal de un párrafo es:", opciones: ["La idea que resume de qué trata todo el párrafo", "La primera palabra del párrafo", "El detalle más largo y curioso", "La oración con signos de exclamación"], correcta: 0 },
      { dificultad: 1, enunciado: "«El mercado de la 12 es bulloso. Doña Berta vende quesos. Los niños corren entre los puestos. Los buses pitan». ¿Qué oración funciona como idea principal?", opciones: ["El mercado de la 12 es bulloso.", "Doña Berta vende quesos.", "Los niños corren entre los puestos.", "Los buses pitan fuerte."], correcta: 0 },
      { dificultad: 1, enunciado: "Un párrafo bien escrito va de:", opciones: ["lo general a lo particular: idea y detalles", "lo particular a lo general sin cierre", "solo detalles sueltos sin guía", "un chiste y una lista"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Cuál detalle APOYA la idea «El recreo de mi colegio es alegre»?", opciones: ["Los niños juegan tejo y saltan la cuerda", "La rectora dio un discurso de una hora", "La biblioteca abre a las siete", "El baño del primer piso gotea"], correcta: 0 },
      { dificultad: 2, enunciado: "En «Los sánduches de la cafetería me gustan y me parecen muy caros», el conector «y» está mal porque:", opciones: ["Une dos ideas que contradicen el orden esperado de la idea principal", "Debió ir una coma antes de la", "Los sánduches no se unen con conectores", "El conector correcto sería «porque»"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Cuál oración NO pertenece al párrafo sobre la ciclovía dominical?", opciones: ["Los domingos la carrera sexta recibe ciclistas y patinadores", "En ciclovía, las familias caminan hasta las doce del día", "Los vendedores ambulantes del mercado venden arepas", "Muchos bogotanos sacan sus bicicletas ese día"], correcta: 0 },
      { dificultad: 2, enunciado: "Para cerrar un párrafo puedes usar:", opciones: ["«En resumen, el mercado es el corazón del barrio»", "«Por cierto, mi gato se enfermó»", "«Mañana hay examen de matemáticas»", "«Pregunta: ¿quién fue el Libertador?»"], correcta: 0 },
      { dificultad: 3, enunciado: "Si un compañero escribe: «La tortuga es lenta. Mi mascota come doble. La tortuga vive muchos años», su problema es:", opciones: ["No hay una idea principal que ordene los detalles", "Los detalles son demasiado largos", "Usa dos veces la palabra tortuga", "La oración final no tiene punto"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Cuál sería una mejor idea principal para el párrafo: «Los abuelos cuentan historias, juean domino y siembran en el patio»?", opciones: ["En mi familia, los abuelos hacen del patio un lugar vivo", "Los abuelos son personas mayores y muy queridas", "El patio de mi casa tiene siembras y juegos de todo tipo", "Me gustan las historias que cuentan los abuelos"], correcta: 0 },
      { dificultad: 3, enunciado: "Para convertir una lista de ideas sueltas en párrafo necesitas:", opciones: ["Una idea principal y conectores que unan los detalles", "Más oraciones sueltas para completar la lista", "Cambiar todas las palabras por sinónimos", "Poner los detalles primero y la idea al final"], correcta: 0 },
      { dificultad: 3, enunciado: "Un párrafo con «primero», «luego» y «finalmente» suele organizar:", opciones: ["Una secuencia de pasos o acciones en el tiempo", "Una comparación entre dos objetos", "Una definición científica formal", "Un diálogo entre dos personajes"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Cuál párrafo está mejor construido?", opciones: ["Mi barrio tiene árboles. Los árboles dan sombra. En verano, los vecinos nos sentamos bajo ellos.", "Mi barrio tiene árboles y los perros y la tienda y yo corro y ella compra.", "Árboles, sombra, vecinos. Verano. Sentarse. Eso.", "Mi barrio es muy bonito y bonito y bonito porque sí."], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Escribir un párrafo del mercado", descripcion: "Ordena los pasos.", pasos: ["Elegir de qué tratará el párrafo", "Escribir la idea principal en una oración", "Agregar un detalle que la compruebe", "Cerrar con una oración final"] },
      { dificultad: 2, titulo: "Armar un párrafo de comparación", descripcion: "Ordena los pasos.", pasos: ["Escribir la idea principal que enlaza los dos elementos", "Párrafo 1: detalles del primer elemento", "Párrafo 2: detalles del segundo con conector comparativo", "Releer para unificar tiempos verbales"] },
      { dificultad: 3, titulo: "Corregir un párrafo desordenado", descripcion: "Ordena la revisión entre pares.", pasos: ["Identificar si hay una idea principal clara", "Marcar las oraciones que no le pertenecen", "Ordenar los detalles de lo general a lo particular e insertar conectores", "Reescribir el párrafo en limpio"] }
    ]
  },

  "espanol--produccion--c3": {
    nombre: "Texto expositivo con conectores y cohesión",
    preguntas: [
      { dificultad: 1, enunciado: "El conector «en consecuencia» introduce:", opciones: ["Una consecuencia o resultado", "Un ejemplo concreto", "Una objeción contraria", "Una digresión temática"], correcta: 0 },
      { dificultad: 1, enunciado: "«El páramo capta agua; por eso, el agua llega a los acueductos». «Por eso» expresa:", opciones: ["Relación causal", "Relación temporal", "Relación de adición", "Relación de oposición"], correcta: 0 },
      { dificultad: 1, enunciado: "Un texto expositivo debe ser:", opciones: ["Claro, ordenado y sin opiniones personales", "Emocionado, oscuro y subjetivo", "Poético y lleno de rimas", "Breve e incomprensible a propósito"], correcta: 0 },
      { dificultad: 2, enunciado: "«Bogotá tiene teleferico. ___ el teleférico de San Miguel conecta zonas altas». El conector adecuado:", opciones: ["Por ejemplo,", "En cambio,", "Aunque,", "En resumen,"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Cuál es el problema de cohesión en «Los estudiantes leyeron el libro. La obra era interesante. Es que estaba cansada»?", opciones: ["El referente de «es que estaba cansada» no se entiende", "El texto usa la palabra «libro» dos veces", "Falta una conjunción entre «obra» e «interesante»", "El párrafo tiene dos oraciones too cortas"], correcta: 0 },
      { dificultad: 2, enunciado: "«A diferencia del cóndor que planea, el colibrí bate sus alas rapidísimo». El texto organiza la información por:", opciones: ["Contraste o comparación", "Cronología histórica", "Cita de autoridad", "Definición única"], correcta: 0 },
      { dificultad: 2, enunciado: "La mención «Estos animales» para referirse a los frailejones sirve para:", opciones: ["Evitar repeticiones y mantener la cohesión", "Cambiar el tema del texto", "Introducir una opinión nueva", "Cerrar el texto definitivamente"], correcta: 0 },
      { dificultad: 3, enunciado: "«El texto explica el ciclo del agua: la evaporación, la condensación y la precipitación. Por lo tanto, su estructura es:", opciones: ["Enumeración ordenada de partes de un proceso", "Comparación entre dos fenómenos", "Narración con personajes ficticios", "Definición simple con sinónimos"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Qué oración rompe la objetividad de un texto expositivo?", opciones: ["Tristemente, los páramos están desapareciendo.", "El páramo retiene agua entre sus musgos.", "La temperatura del páramo desciende en la noche.", "Los frailejones crecen muy lentamente."], correcta: 0 },
      { dificultad: 3, enunciado: "«El tranvía fue reemplazado; sin embargo, hoy se discute su regreso». «Sin embargo» funciona porque:", opciones: ["Introduce una idea contraria a lo esperado del contexto", "Añade un ejemplo al caso anterior", "Concluye el razonamiento expuesto antes", "Ordena cronológicamente dos hechos"], correcta: 0 },
      { dificultad: 3, enunciado: "Para pasar de un problema a sus causas, el conector más preciso es:", opciones: ["debido a que", "por ejemplo", "en otras palabras", "además"], correcta: 0 },
      { dificultad: 3, enunciado: "Un texto expositivo sobre el jagguar empieza describiéndolo, luego su hábitat y después las amenazas. Su orden es:", opciones: ["De lo general a lo particular, con progresión temática", "Caótico: salta sin hilo entre ideas", "De lo particular a lo general sin cierre", "Solo cronológico: fechas y fechas"], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Planear un texto expositivo", descripcion: "Ordena los pasos de planeación.", pasos: ["Elegir el tema y las preguntas que responderá", "Organizar la información en partes", "Redactar con conectores entre las partes", "Revisar claridad y objetividad"] },
      { dificultad: 2, titulo: "Revisar la cohesión de un párrafo", descripcion: "Ordena los pasos de la revisión.", pasos: ["Releer el párrafo completo en voz alta", "Subrayar conectores y verificar a qué se refiere cada pronombre", "Reescribir las oraciones sueltas o confusas", "Comprobar que el tema avanza sin retrocesos"] },
      { dificultad: 3, titulo: "Escribir la introducción de un texto expositivo", descripcion: "Ordena cómo redactar el inicio.", pasos: ["Presentar el tema en una oración general", "Dar el contexto: dónde y cuándo es relevante", "Anticipar las partes que tendrá el texto", "Cerrar con una oración que enganche al lector"] }
    ]
  },

  "espanol--produccion--c4": {
    nombre: "Oración compuesta, concordancia y ortografía",
    preguntas: [
      { dificultad: 1, enunciado: "¿Cuál es una oración compuesta?", opciones: ["Llovía fuerte y los buses se demoraron.", "Los buses se demoraron.", "La lluvia de la tarde.", "Llovió en Bogotá."], correcta: 0 },
      { dificultad: 1, enunciado: "«Había muchos estudiantes en el patio». La forma correcta es:", opciones: ["Había es invariable en impersonal", "Habían, porque estudiantes es plural", "Hayan, por la e", "HAVÍA con ye"], correcta: 0 },
      { dificultad: 1, enunciado: "«La gente ___ esperando». La concordancia correcta:", opciones: ["está", "están", "estamos", "estés"], correcta: 0 },
      { dificultad: 2, enunciado: "«El profesor, junto con sus estudiantes, ___ al museo». La concordancia recomendada es:", opciones: ["fue: el sujeto es «el profesor»", "fueron: por los estudiantes plurales", "fuimos: nos incluye a todos", "iban: sin concordancia alguna"], correcta: 0 },
      { dificultad: 2, enunciado: "«Mi hermano ___ que ___ mañana». ¿Qué opción no tiene errores de concordancia?", opciones: ["dijo / llovería", "dijo / lloverán", "dijimos / lloviera", "dicen / lloverá"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Cuál oración lleva mal el uso de «porque»?", opciones: ["No fui a la fiesta, por que estaba enfermo.", "Estudio porque quiero ser veterinaria.", "¿Por qué no avisaste?", "Escribo por que me pidieron un texto."], correcta: 0 },
      { dificultad: 2, enunciado: "La tilde diacrítica está bien usada en:", opciones: ["Más café, pero el de tu casa me gusta.", "El mas grande corrió mas rápido.", "Si vas a ir, di si o di no.", "Tu libro esta en tu mesa."], correcta: 0 },
      { dificultad: 3, enunciado: "«Los datos revelan que la mayoría de las familias ___ en la periferia y ___ servicios básicos». ¿Cuál opción respeta la concordancia?", opciones: ["vive / carece de", "viven / carecen de", "vive / carecen", "viven / carece"], correcta: 0 },
      { dificultad: 3, enunciado: "«Quería estudiar diseño, sino trabajaría en el taller de su padre». La corrección adecuada:", opciones: ["Cambiar «sino» por «pues» o «de lo contrario»", "Cambiar la coma por punto y seguido", "Sustituir «quería» por «querría»", "Dejarlo así: es correcto"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Cuál oración comete un dequeísmo?", opciones: ["Estoy segura de que él viene.", "Pienso de que lloverá.", "Me alegro de que aprobaste.", "Insistió en que volviera."], correcta: 0 },
      { dificultad: 3, enunciado: "La concordancia en «Se venden empanadas fritas en la esquina» funciona porque:", opciones: ["«se» es parte de una pasiva refleja: el verbo concuerda con el sujeto «empanadas»", "«se» impide toda concordancia posterior", "«venden» debería ir en singular siempre", "La oración es agramatical"], correcta: 0 },
      { dificultad: 3, enunciado: "En un texto formal, ¿cuál es la forma correcta?", opciones: ["Bogotá, D. C., tiene clima variable.", "Bogotá D.C tiene clima variable.", "Bogotá-d.c- tiene clima variable.", "Bogotá DC tiene clima variable."], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Unir dos oraciones simples", descripcion: "Ordena los pasos.", pasos: ["Escribir las dos ideas simples", "Elegir el conector que expresa su relación", "Unir y revisar coma y concordancia"] },
      { dificultad: 2, titulo: "Corregir la concordancia de un párrafo", descripcion: "Ordena la revisión.", pasos: ["Leer subrayando sujeto y verbo", "Detectar los núcleos del sujeto", "Verificar número y persona de cada verbo", "Corregir y volver a leer en voz alta"] },
      { dificultad: 3, titulo: "Revisión ortográfica de un texto propio", descripcion: "Ordena la estrategia de corrección.", pasos: ["Imprimir o aislar el texto sin leerlo en pantalla", "Leer de atrás hacia adelante para ver palabras sueltas", "Marcar dudas: por que/porque, haber/a ver, tilde diacrítica", "Consultar el diccionario y las reglas", "Reescribir y comprobar una lectura final completa"] }
    ]
  },

  "espanol--produccion--c5": {
    nombre: "Ensayo académico: estructura, citación y paráfrasis",
    preguntas: [
      { dificultad: 1, enunciado: "En un ensayo académico, la tesis debe estar:", opciones: ["Explícita y defendible en el cuerpo del texto", "Oculto siempre para dar sorpresa", "Copiado de la conclusión de otro autor", "Redactado como pregunta cerrada"], correcta: 0 },
      { dificultad: 1, enunciado: "Parafrasear consiste en:", opciones: ["Decir con mis palabras la idea de un autor citando la fuente", "Copiar textualmente sin comillas el original", "Resumir inventando datos nuevos", "Traducir el texto completo al inglés"], correcta: 0 },
      { dificultad: 1, enunciado: "Una cita textual corta en formato normas se presenta:", opciones: ["Entre comillas con autor y año", "En cursiva sin referencia", "Entre paréntesis y sin año", "Cambiando la fuente del documento"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Cuál pasaje es plagio?", opciones: ["Reproduce el argumento de Quintana con sus mismas frases, sin comillas ni cita", "Resume la trama de La perra con sus palabras", "Cita un párrafo breve entre comillas y con fuente", "Usa el texto de Silva como punto de partida para criticarlo"], correcta: 0 },
      { dificultad: 2, enunciado: "«Como señala García Márquez, la soledad en sus personajes es heredera de una historia de violencias (2002)». ¿Qué falta en este enunciado?", opciones: ["La referencia completa en la lista de referencias", "Una comilla de apertura", "Un adjetivo más preciso", "No falta nada: está perfecto"], correcta: 0 },
      { dificultad: 2, enunciado: "El marco teórico de un ensayo sirve para:", opciones: ["Situar la pregunta dentro de lo que otros han dicho", "Demostrar que no leí nada antes", "Rellenar páginas con definiciones sueltas", "Adelantar las conclusiones finales"], correcta: 0 },
      { dificultad: 2, enunciado: "«Silva (1895) escribió nocturnos. Su dolor por la muerte de su hermana aparece también en emigración...». Si parafraseo, debo:", opciones: ["Atribuir la idea a Silva y su obra con cita", "Presentar la idea como descubrimiento mío", "Borrar toda mención a Silva", "Transcribir el poema completo sin comillas"], correcta: 0 },
      { dificultad: 3, enunciado: "«El ensayista afirma que la ciudad excluye; para ello usa dos fuentes oficiales y una novela». Su estructura argumentativa es:", opciones: ["Tesis sustentada en evidencia mixta: datos e interpretación literaria", "Ad hominem con tres fuentes", "Falsa analogía literaria sin datos", "Puro resumen de fuentes, sin tesis propia"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Cuál párrafo es más académico?", opciones: ["«Aunque algunos estudios niegan la cifra, los datos del DANE (2023) muestran un descenso; esta discrepancia sugere un problema de medición.»", "«Todo el mundo sabe que la gente lee menos hoy, fin.»", "«Yo creo que mis amigos no leen y punto.»", "«Según mi mami, antes se leía mucho más.»"], correcta: 0 },
      { dificultad: 3, enunciado: "Las «voces» de un ensayo incluyen tu postura, las fuentes y el diálogo entre ellas. ¿Qué pasa si solo aparecen las fuentes?", opciones: ["El ensayo no tiene argumento propio: es un mosaico de citas", "El ensayo es más objetivo y gana rigor", "Falta nada: así debe ser siempre", "El lector sabrá lo que tú piensas igual"], correcta: 0 },
      { dificultad: 3, enunciado: "La diferencia entre cita y referencia en normas es:", opciones: ["La cita va en el texto; la referencia completa va en la lista final", "Son exactamente lo mismo", "La referencia va en el texto y la cita al final", "Ninguna lleva año de publicación"], correcta: 0 },
      { dificultad: 3, enunciado: "«Ensayar» significa originariamente:", opciones: ["Hacer intentos o pruebas: el ensayo es texto de aproximación crítica", "Reunir datos en tablas estadísticas", "Escribir solo sobre ensayos teatral", "Imitar exactamente a un maestro anterior"], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Estructura básica del ensayo", descripcion: "Ordena las partes del plan.", pasos: ["Definir tesis y pregunta guía", "Planear el cuerpo con tres argumentos", "Redactar introducción y conclusión", "Revisar cohesión y citación"] },
      { dificultad: 2, titulo: "Citar correctamente", descripcion: "Ordena el proceso de citación.", pasos: ["Tomar nota de la fuente completa desde el inicio", "Decidir entre cita textual y paráfrasis", "Insertar la cita en el texto con autor y año", "Añadir la referencia a la lista final"] },
      { dificultad: 3, titulo: "Revisar un ensayo entre pares", descripcion: "Ordena la coevaluación crítica.", pasos: ["Leer sin marcar: entender el recorrido completo", "Identificar tesis y pregunta guía", "Comprobar que cada párrafo apoye la tesis", "Revisar evidencias: citación, paráfrasis y fuentes", "Evaluar estilo, concordancia y ortografía", "Redactar retroalimentación con una fortaleza y dos mejoras"] }
    ]
  },

  // ============================ LITERATURA ============================

  "espanol--literatura--c1": {
    nombre: "Cuentos, rimas y rondas",
    preguntas: [
      { dificultad: 1, enunciado: "«La farallalla, la farallalla, todos seremos...». Esto es:", opciones: ["Una ronda para jugar en corro", "Una receta de cocina", "Un cuento de terror", "Una noticia del periódico"], correcta: 0 },
      { dificultad: 1, enunciado: "En un cuento infantil, el lugar donde pasa la historia se llama:", opciones: ["Escenario o lugar", "Personaje", "Portada", "Título"], correcta: 0 },
      { dificultad: 1, enunciado: "¿Qué se repite en una rima?", opciones: ["El sonido final de las palabras", "El nombre del autor", "Las letras del abecedario", "Los números de páginas"], correcta: 0 },
      { dificultad: 1, enunciado: "«Érase una vez…» suele iniciar:", opciones: ["Un cuento", "Una carta", "Una lista de mercado", "Un canto de fila"], correcta: 0 },
      { dificultad: 1, enunciado: "En «Patitofeo, patitofeo, todos los patos van al río», los patos van:", opciones: ["Al río", "A la montaña", "Al mercado", "A la escuela"], correcta: 0 },
      { dificultad: 1, enunciado: "Las historias de animales que hablan son típicas de:", opciones: ["Fábulas y cuentos para niños", "Noticias reales", "Manuales de ciencias", "Cartas formales"], correcta: 0 },
      { dificultad: 2, enunciado: "En «María, María, la que sube y baja», el nombre repetido ayuda a:", opciones: ["Recordar el juego y cantar juntos", "Contar las letras del nombre", "Dar miedo a los niños", "Vender una casa"], correcta: 0 },
      { dificultad: 2, enunciado: "El final feliz de un cuento es:", opciones: ["El desenlace, donde se resuelve el lío", "El título grande", "La primera hoja", "El nombre del editor"], correcta: 0 },
      { dificultad: 2, enunciado: "Rafael Pombo escribió versos para niños colombianos. Un personaje suyo es:", opciones: ["El gato confito y la mariquita", "Harry Potter", "Mafalda", "El principito"], correcta: 0 },
      { dificultad: 2, enunciado: "Cuando los niños juegan en corro cantando, están usando:", opciones: ["Rondas y juegos cantados", "Noticias", "Cuentos largos", "Reclamos"], correcta: 0 },
      { dificultad: 2, enunciado: "«La Caperucita» es un cuento que:", opciones: ["Viaja con un mensaje de advertencia", "Explica cómo hornear pan", "Describe las montañas rusas", "Cuenta las estrellas del campo"], correcta: 0 },
      { dificultad: 3, enunciado: "Si tu cuento dice que el lobo «llegó disfrazado de abuela», el truco sirve para:", opciones: ["Crear un momento de suspenso e sorpresa", "Explicar la receta de la abuela", "Mostrar que el lobo sabe coser", "Cerrar el cuento sin final"], correcta: 0 },
      { dificultad: 3, enunciado: "«La rima hace que el cuento suene bonito». La rima en los cuentos sirve para:", opciones: ["Dar musicalidad y ayudar a memorizar", "Cambiar los personajes de lugar", "Quitar la acción del cuento", "Poner más números en la página"], correcta: 0 },
      { dificultad: 3, enunciado: "Cuentas un cuento de Tío Tigre y Tío Conejo. Lo primero que necesitas es:", opciones: ["Presentar a los personajes y dónde viven", "Cerrar la puerta del salón", "Contar hasta cien despacio", "Pedir silencio al mercado"], correcta: 0 },
      { dificultad: 3, enunciado: "El personaje de un cuento que hace reír es:", opciones: ["El personaje gracioso o travieso", "El narrador serio", "El título del cuento", "La tapa del libro"], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Contar un cuento corto", descripcion: "Ordena los pasos.", pasos: ["Presentar personajes y lugar", "Contar qué problema pasa", "Decir cómo se resuelve"] },
      { dificultad: 2, titulo: "Aprender una rima en clase", descripcion: "Ordena los pasos.", pasos: ["Escuchar la rima completa", "Repetir con palmas el ritmo", "Decir la rima sola en voz alta"] },
      { dificultad: 3, titulo: "Crear una ronda nueva", descripcion: "Ordena cómo inventarla.", pasos: ["Pensar en un juego para hacer en corro", "Escribir dos versos que riman", "Probar el canto con los movimientos del juego"] }
    ]
  },

  "espanol--literatura--c2": {
    nombre: "Cuento popular, narrador y personajes",
    preguntas: [
      { dificultad: 1, enunciado: "Un cuento popular se caracteriza porque:", opciones: ["Lo cuenta el pueblo y no tiene un solo autor conocido", "Lo escribió siempre un premio Nobel", "Sale solo en televisión", "Nadie puede volver a contarlo"], correcta: 0 },
      { dificultad: 1, enunciado: "«Cuentan que en las lagunas vive La Madremonte, que castiga a quien daña el monte». El narrador de ese inicio es:", opciones: ["Un narrador en tercera persona que dice «cuentan»", "La propia Madremonte narrando", "Un personaje en primera persona", "El lector del cuento"], correcta: 0 },
      { dificultad: 1, enunciado: "El personaje que se opone al héroe es:", opciones: ["El antagonista", "El narrador", "El ambientador", "El tipógrafo"], correcta: 0 },
      { dificultad: 2, enunciado: "En «Tío Conejo le ganó a Tío Tigre por astuto», la enseñanza del relato corresponde a:", opciones: ["Una moraleja de cuento popular", "Una noticia falsa", "Un poema moderno", "Un instructivo de cocina"], correcta: 0 },
      { dificultad: 2, enunciado: "Si «La Patasola aparece en los caminos de llano», el escenario cumple la función de:", opciones: ["Crear un ambiente de miedo propio del relato de terror", "Vender tiquetes del camino", "Explicar la geografía oficial", "Introducir un recibo público"], correcta: 0 },
      { dificultad: 2, enunciado: "Un narrador en primera persona se nota porque:", opciones: ["Dice «yo vi», «conté», participa en la historia", "Dice «él fue», «ella contó»", "Narra sin pronombres", "Habla solo en presente"], correcta: 0 },
      { dificultad: 2, enunciado: "El Mohán atrae a los caminantes con una flauta. Según su papel, el Mohán es:", opciones: ["Personaje sobrenatural del folclor colombiano", "Un bandolero histórico real", "Un extraterrestre recién llegado", "El narrator del cuento"], correcta: 0 },
      { dificultad: 3, enunciado: "En un relato, el abuelo siempre cuenta que «en el páramo hay un bulto que silba». Si el narrador es escéptico, el lector debe:", opciones: ["Dudar de si el bulto existe: es un relato de lo ambiguo", "Asumir que el bulto es real porque el abuelo lo dice", "Salir corriendo del salón de clase", "Borrar el último párrafo del cuento"], correcta: 0 },
      { dificultad: 3, enunciado: "«Tío Conejo» vence con engaños a los fuertes. Esa manera de vencer se llama:", opciones: ["Astucia, rasgo típico del personaje trickster", "Bravura y fuerza física", "Suerte ciega del azar", "Sabiduría científica"], correcta: 0 },
      { dificultad: 3, enunciado: "Dos abuelas cuentan la misma leyenda con finales distintos. Eso significa que la tradición oral:", opciones: ["Es viva: cambia al pasar de boca en boca", "Está mal y hay que corregirla", "Necesita un autor que decida la versión", "Solo vale si se imprime"], correcta: 0 },
      { dificultad: 3, enunciado: "El cuento «Espuma y nada más» de Hernando Téllez ocurre en una población petrolera. El escenario funciona para:", opciones: ["Mostrar un contexto social que explica la tragedia", "Promover el turismo petrolero", "Distraer del conflicto del relato", "Dar la receta de la espuma"], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Narrar una leyenda del pueblo", descripcion: "Ordena los pasos.", pasos: ["Escoger la leyenda y su lugar", "Presentar personajes y su conflicto", "Contar los hechos en orden", "Cerrar con lo que la gente aprende"] },
      { dificultad: 2, titulo: "Cambiar al narrador de un cuento", descripcion: "Ordena los pasos del ejercicio.", pasos: ["Leer el cuento con narrador en tercera", "Elegir a qué personaje le daremos la voz", "Reescribir el mismo episodio en primera persona", "Comparar cómo cambian los datos y el tono"] },
      { dificultad: 3, titulo: "Entrevistar a un contador de historias", descripcion: "Ordena la preparación.", pasos: ["Escribir qué quiero saber y preparar preguntas abiertas", "Grabar o anotar la versión sin interrumpir", "Comparar la versión con otras versiones de la leyenda", "Devolver la historia a quien me la contó"] }
    ]
  },

  "espanol--literatura--c3": {
    nombre: "Figuras literarias y géneros narrativos",
    preguntas: [
      { dificultad: 1, enunciado: "«Tus ojos son dos luceros» es una:", opciones: ["Comparación o símil metafórico", "Metáfora pura sin enlace", "Hipérbole exagerada", "Aliteración de sonidos"], correcta: 0 },
      { dificultad: 1, enunciado: "La metáfora consiste en:", opciones: ["Nombrar una cosa con el nombre de otra por semejanza", "Repetir la misma palabra tres veces", "Contar números de forma poética", "Explicar una palabra de diccionario"], correcta: 0 },
      { dificultad: 1, enunciado: "«Me morí de risa mil veces» es un ejemplo de:", opciones: ["Hipérbole", "Metáfora", "Símil", "Onomatopeya"], correcta: 0 },
      { dificultad: 2, enunciado: "«Sus pies pisaban pedazos de papel» repite sonidos de la P: es una:", opciones: ["Aliteración", "Metáfora", "Comparación", "Personificación"], correcta: 0 },
      { dificultad: 2, enunciado: "En «La luna se asomó tímida detrás de los cerros», la luna actúa como persona: es:", opciones: ["Personificación", "Hipérbole", "Símil", "Anáfora"], correcta: 0 },
      { dificultad: 2, enunciado: "La diferencia entre narrador y autor es que:", opciones: ["El narrador es una voz creada en el texto; el autor existe en la vida real", "Son lo mismo con otros nombres", "El autor es inventado por el narrador", "El narrador solo existe en la poesía"], correcta: 0 },
      { dificultad: 2, enunciado: "Un relato en orden inverso, que empieza por el final, usa:", opciones: ["Una alteración del orden temporal: retrospección al inicio", "Metonimia pura", "Cuatro versos libres", "Solo diálogos cortos"], correcta: 0 },
      { dificultad: 3, enunciado: "«Vientos del sur / llueve sobre Chocó / gotean los tambores». La imagen que concentra varios sentidos se llama:", opciones: ["Sinestesia", "Antítesis", "Paradoja", "Epanalepsis"], correcta: 0 },
      { dificultad: 3, enunciado: "Una novela, un cuento y una crónica son géneros narrativos. ¿Cuál es el criterio que los ordena principalmente?", opciones: ["La extensión y complejidad del relato", "El color de la portada del libro", "El número de imágenes del texto", "La letra del apellido del autor"], correcta: 0 },
      { dificultad: 3, enunciado: "En el realismo mágico, «lo extraordinario se cuenta como cotidiano». Esto significa que:", opciones: ["Los hechos mágicos aparecen narrados sin asombro", "Todo es sueño del personaje desde el inicio", "No pueden aparecer elementos sobrenaturales", "El narrador siempre explica la ciencia del hecho"], correcta: 0 },
      { dificultad: 3, enunciado: "«Subo y bajo; bajo y subo; siempre subiendo voy». La repetición al inicio de cada verso es:", opciones: ["Anáfora", "Hipérbaton", "Metonimia", "Ironía"], correcta: 0 },
      { dificultad: 3, enunciado: "En la crónica literaria convienen:", opciones: ["La información de los hechos y el lenguaje de la literatura", "Solo datos y cifras verificables", "Solo ficción inventada sin base real", "Solo versos rimados en coro"], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Analizar un poema breve", descripcion: "Ordena los pasos.", pasos: ["Leer el poema dos veces en voz alta", "Marcar las figuras que se repiten", "Explicar qué siente o sugiere cada figura", "Concluir la idea global del poema"] },
      { dificultad: 2, titulo: "Distinguir los géneros narrativos", descripcion: "Ordena los pasos.", pasos: ["Leer el texto completo y medir su extensión", "Identificar cuántos personajes y tramas hay", "Clasificar: mito, leyenda, cuento o novela", "Argumentar la clasificación con dos rasgos"] },
      { dificultad: 3, titulo: "Escribir un microrrelato con metáfora", descripcion: "Ordena el taller de escritura.", pasos: ["Elegir la experiencia mínima y un objeto concreto para la metáfora central", "Escribir el borrador con menos de 100 palabras", "Quitar todo lo que explique la metáfora de más", "Titular y releer en voz alta para ajustar el ritmo"] }
    ]
  },

  "espanol--literatura--c4": {
    nombre: "Géneros literarios y comentario de texto",
    preguntas: [
      { dificultad: 1, enunciado: "Una característica de la lírica es:", opciones: ["La expresión de la subjetividad en verso", "La narración extensa de hechos complejos", "El diálogo puesto en escena ante público", "El análisis de datos estadísticos"], correcta: 0 },
      { dificultad: 1, enunciado: "El género dramático se distingue porque está escrito para:", opciones: ["Representarse ante un público mediante diálogos", "Leerlo siempre en silencio y solo", "Explicar descubrimientos científicos", "Contar la vida de un solo personaje"], correcta: 0 },
      { dificultad: 1, enunciado: "El comentario de texto literario debe evitar:", opciones: ["Opinar sin respaldarse en el texto", "Citar fragmentos del propio poema", "Explicar una figura literaria concreta", "Contextualizar la obra por época"], correcta: 0 },
      { dificultad: 2, enunciado: "«Nocturno en mi tierra extraña» de José Asunción Silva llora a la amada muerta. Su tono corresponde a:", opciones: ["La lírica modernista: musical y melancólica", "La épica heroica en alejandrinos", "El teatro realista en prosa coloquial", "La literatura infantil rimada"], correcta: 0 },
      { dificultad: 2, enunciado: "El narrador omnisciente se reconoce porque:", opciones: ["Lo sabe todo, incluidos los pensamientos de todos", "Solo sabe lo que él presencia como personaje", "Es un niño que entiende poco a poco", "Narra solo en tiempo presente"], correcta: 0 },
      { dificultad: 2, enunciado: "En un texto teatral, las acotaciones indican:", opciones: ["Gestos, decorados y movimientos del personaje", "Los versos del personaje principal", "El resumen del crítico literario", "Las preguntas del público asistente"], correcta: 0 },
      { dificultad: 2, enunciado: "La novela picaresca de «El las Indias»... Cúllar Rivadeneyra ambienta sus cuentos en el Pacífico. El valor documental de su obra está en:", opciones: ["Los costumbres y lenguas de una región retratadas", "La invención de planetas lejanos fantásticos", "Sus teorías económicas muy complejas", "Sus recetas culinarias completas"], correcta: 0 },
      { dificultad: 3, enunciado: "En Cien años de soledad, la peste del insomio hace olvidar los nombres. La peste funciona como:", opciones: ["Alegoría de la pérdida de memoria colectiva", "Explicación médica realista de una epidemia", "Simple anécdota decorativa del relato", "Prueba de que el narrador miente"], correcta: 0 },
      { dificultad: 3, enunciado: "Una estudiante comenta «La perra» de Pilar Quintana: «la perra no es una mascota: es un espejo». En su comentario debe:", opciones: ["Mostrar con citas cómo el relato construye ese espejo", "Basta con repetir su frase: no necesita más nada", "Copiar la reseña completa de la contraportada del libro", "Cambiar el final de la novela a su gusto personal"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Qué distingue al comentario de texto de la reseña?", opciones: ["El comentario analiza el texto mismo; la reseña valora la obra para orientar lectores", "Son dos nombres para la misma tarea escolar", "El comentario es más corto que la reseña siempre", "La reseña nunca debe opinar nada"], correcta: 0 },
      { dificultad: 3, enunciado: "El conflicto de un personaje consigo mismo se denomina:", opciones: ["Conflicto interno", "Conflicto externo", "Nudo narrativo clásico", "Clímax dramático"], correcta: 0 },
      { dificultad: 3, enunciado: "Un alumno escribe: «la obra es buena porque me gustó». ¿Qué le falta a su comentario?", opciones: ["Argumentar con recursos del texto: estructura, imágenes, ritmo", "Cambiar todas las palabras por sinónimos raros", "Escribir el comentario más largo posible", "Poner la fecha de publicación de la obra"], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Redactar un comentario de texto", descripcion: "Ordena las partes.", pasos: ["Lectura del texto y primera impresión", "Localizar tema y estructura del texto", "Analizar dos recursos literarios con citas", "Escribir conclusión valorativa"] },
      { dificultad: 2, titulo: "Comparar dos poemas", descripcion: "Ordena el análisis comparativo.", pasos: ["Leer ambos poemas en voz alta", "Anotar tema, tono y época de cada uno", "Señalar dos semejanzas y dos diferencias", "Relacionar forma y sentido en cada poema", "Redactar una conclusión sobre su propuesta poética"] },
      { dificultad: 3, titulo: "Adaptar un cuento a escena teatral", descripcion: "Ordena el taller dramático.", pasos: ["Leer el cuento marcando los hechos imprescindibles", "Decidir el tiempo y lugar de la representación", "Convertir la narración en acotaciones y parlamentos", "Reescribir los diálogos con voz propia de cada personaje", "Leer en voz alta corrigiendo lo que suena artificioso"] }
    ]
  },

  "espanol--literatura--c5": {
    nombre: "Movimientos literarios y obras latinoamericanas",
    preguntas: [
      { dificultad: 1, enunciado: "El Modernismo hispanoamericano, con José Asunción Silva como antecedente, buscó:", opciones: ["Renovar la lengua poética con musicalidad y cosmopolitismo", "Escribir en lenguaje llano de la calle", "Copiar los modelos griegos al pie de la letra", "Fundar el teatro colombiano moderno"], correcta: 0 },
      { dificultad: 1, enunciado: "«Cien años de soledad» (1967) se asocia con:", opciones: ["El realismo mágico y el boom latinoamericano", "El Romanticismo del siglo XIX", "La literatura colonial de la Nueva Granada", "La poesía colombiana del nadaísmo"], correcta: 0 },
      { dificultad: 1, enunciado: "El Nadaísmo, movimiento bogotano de los años 60, se caracterizó por:", opciones: ["La rebeldía vital y la provocación frente a la moral conservadora", "El culto al orden y a las tradiciones", "La defensa exclusiva de la lengua española", "La escritura de literatura para niños"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Qué contexto histórico explica el realismo mágico?", opciones: ["América Latina narrada entre modernización y violencias, donde lo fantástico convive con lo cotidiano", "Europa de posguerra sin religión", "La antigüedad grecoromana", "El Imperio Azteca prehispánico"], correcta: 0 },
      { dificultad: 2, enunciado: "«La vorágine», de José Eustasio Rivera, denuncia la explotación cauchera. Por eso se lee como novela:", opciones: ["De la tierra: crítica social en ambiente americano", "Utópica de un futuro perfecto", "Policiaca de un crimen en París", "Costumbrista de un pueblo bogotano"], correcta: 0 },
      { dificultad: 2, enunciado: "El Boom se llama así porque:", opciones: ["Un grupo de novelas latinoamericanas tuvo proyección mundial en los 60", "Las editoriales imprimían en papel boom", "Los autores se llamaban boom entre ellos", "Fue un género de teatro explosivo"], correcta: 0 },
      { dificultad: 2, enunciado: "Cúllar Rivadeneyra, antecesor de la narrativa costumbrista del Pacífico, muestra en sus cuentos:", opciones: ["Lenguas, ritmos y cosmogonías de las comunidades negras", "La vida cortesana de la Bogotá del siglo XVIII", "Expediciones científicas europeas por el Amazonas", "Crónicas del transporte urbano de Medellín"], correcta: 0 },
      { dificultad: 3, enunciado: "Una novela de Pilar Quintana se estudia junto con «La vorágine» por el tema de la mujer frente a un entorno hostil. Esa comparación es válida si el comentario:", opciones: ["Distingue épocas, voces y proyectos literarios distintos", "Declara que una copia a la otra sin decirlo", "Ignora los 90 años de diferencia entre ambas obras", "Cambia los finales para que queden iguales"], correcta: 0 },
      { dificultad: 3, enunciado: "«Nadie lo vio mondar, nadie lo vio sembrar / la tierra negra del Pacífico». Si un estudiante lo declara folclor, debe aclarar que:", opciones: ["Es una lírica con voz colectiva inspirada en formas orales, no un texto anónimo", "Todo poema con ritmo es folclor verdadero", "No se puede inspirar en la oralidad hoy día", "Solo la música popular puede tener esa voz"], correcta: 0 },
      { dificultad: 3, enunciado: "La posmodernidad literaria usa la parodia y la mezcla de registros. Un ejemplo latinoamericano claro es:", opciones: ["Reescribir mitos o géneros populares desde la ironía", "Copiar el Quijote como texto escolar sagrado", "Publicar sin editoriales ni lectores", "Escribir siempre con rima consonante"], correcta: 0 },
      { dificultad: 3, enunciado: "«El coronel no tiene quien le escriba» retrata la espera de un veterano de la Guerra de los Mil Días. La espera se interpreta como:", opciones: ["Metáfora de la promesa incumplida del Estado a sus ciudadanos", "Prueba de que el coronel era flojo y perezoso", "Detalle anecdótico sin mayor peso", "Crítica a la novela por ser aburrida"], correcta: 0 },
      { dificultad: 3, enunciado: "Al estudiar la obra de García Márquez se dice que reescribe a las mil noches y al Quijote. Esa afirmación alude a:", opciones: ["Sus fuentes intertextuales orientales y españolas", "Su plagio confeso de ambas obras", "Que nunca leyó ni un solo clásico", "Que escribía solo para niños y señoritas"], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Ubicar una obra en su movimiento", descripcion: "Ordena los pasos.", pasos: ["Leer la obra y su fecha de publicación", "Identificar temas y recursos de su escritura", "Comparar con el programa del movimiento literario", "Justificar la ubicación con dos rasgos concretos"] },
      { dificultad: 2, titulo: "Preparar un panel literario", descripcion: "Ordena la preparación.", pasos: ["Elegir las obras colombianas del panel", "Definir la pregunta que guiará la discusión", "Preparar cada participante sus argumentos citados", "Ensayar tiempos y turnos de intervención", "Moderar y cerrar con síntesis de coincidencias"] },
      { dificultad: 3, titulo: "Escribir un ensayo literario comparado", descripcion: "Ordena el proceso completo.", pasos: ["Elegir dos obras y el eje de la comparación", "Buscar qué han dicho los críticos sobre cada una", "Formular una tesis propia que dialogue con la crítica", "Redactar con citas y paráfrasis bien atribuidas", "Revisar la coherencia entre tesis, cuerpo y cierre", "Editar el estilo y normalizar las referencias"] }
    ]
  },

  // ============================ MEDIOS ============================

  "espanol--medios--c1": {
    nombre: "Señales, íconos y mensajes cortos",
    preguntas: [
      { dificultad: 1, enunciado: "Un círculo rojo con una raya sobre un cigarrillo significa:", opciones: ["Prohibido fumar", "Se puede fumar aquí", "Venden cigarrillos", "Fumo mucho"], correcta: 0 },
      { dificultad: 1, enunciado: "La flecha verde grande en la puerta dice:", opciones: ["Salida", "Baño", "Comedor", "Archivo"], correcta: 0 },
      { dificultad: 1, enunciado: "Un dibujo de un sobre con una flecha suele ser:", opciones: ["Correo o mensaje", "Reloj de pared", "Jugo de caja", "Escoba nueva"], correcta: 0 },
      { dificultad: 1, enunciado: "El semáforo en rojo dice:", opciones: ["Alto, no pases", "Camina ya mismo", "Corre rápido", "Gira en redondo"], correcta: 0 },
      { dificultad: 2, enunciado: "Un ícono de una mano y una campana tachadas quiere decir:", opciones: ["Silencio, no toque la campana", "La campana está buena", "Toque dos veces", "Rompa la campana"], correcta: 0 },
      { dificultad: 2, enunciado: "«No pise el césped» es:", opciones: ["Un aviso que pide cuidar las plantas", "Una orden de sembrar hierba", "El nombre del parque", "Un saludo cortés"], correcta: 0 },
      { dificultad: 2, enunciado: "En el bus, el ícono de la silla con rueda indica:", opciones: ["Espacio preferente para personas con movilidad limitada", "Asiento para el señor conductor", "Sitio para dejar maletas", "Solo para niños pequeños"], correcta: 0 },
      { dificultad: 2, enunciado: "La señal con una cámara dentro de un cuadrito avisa:", opciones: ["Hay cámaras grabando el área", "Venden cámaras allá", "Se puede tomar fotos gratis", "Hay un museo cerca"], correcta: 0 },
      { dificultad: 3, enunciado: "Una valla dice «Niño al mando, baje la mano» con un carrito. Es una señal que:", opciones: ["Usa humor para pedir cuidado al conducir", "Prohíbe el paso de niños", "Vende carritos de mano", "Indica que hay escuela de cocina"], correcta: 0 },
      { dificultad: 3, enunciado: "«Cierre la puerta suave: se duerme el bebe». El emisor del mensaje es:", opciones: ["Una vecina que pide silencio", "La tienda del barrio", "La ruta escolar del colegio", "El aviso del agua"], correcta: 0 },
      { dificultad: 3, enunciado: "Un afiche muestra un basurito triste y dice «¡Recójeme!». El basurito que habla es:", opciones: ["Un truco para que recordemos botar la basura en su lugar", "Una señal de tránsito oficial obligatoria", "El nombre propio de una calle de Bogotá", "La propaganda de un carro nuevo"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Cuál señal se entiende aunque no sepas leer?", opciones: ["Un calavera y huesos sobre un frasco", "Un párrafo largo en letras pequeñas", "Una lista de precios del mercado", "La carta de una prima en Fusagasugá"], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Entender una señal del colegio", descripcion: "Ordena los pasos.", pasos: ["Mirar bien la señal completa", "Decir qué figura o color muestra", "Explicar qué nos pide o prohíbe"] },
      { dificultad: 2, titulo: "Diseñar una señal para el salón", descripcion: "Ordena los pasos.", pasos: ["Pensar en el problema del salón", "Dibujar una figura clara y grande", "Poner pocas palabras si hace falta"] },
      { dificultad: 3, titulo: "Seguir instrucciones de un mapa simple", descripcion: "Ordena el recorrido.", pasos: ["Buscar dónde estoy marcado en el mapa", "Localizar el lugar al que quiero llegar", "Trazar el camino con las flechas del mapa"] }
    ]
  },

  "espanol--medios--c2": {
    nombre: "La noticia: qué pasó, quién y cuándo",
    preguntas: [
      { dificultad: 1, enunciado: "La respuesta de una noticia se ubica normalmente:", opciones: ["En el entradado o primer párrafo", "En el titular de la primera página", "En la última línea del texto completo", "En el pie de la foto nada más"], correcta: 0 },
      { dificultad: 1, enunciado: "Las preguntas básicas de la noticia son:", opciones: ["Qué, quién, cuándo, dónde y por qué", "Cuánto, con quién, a dónde, cómo", "Quién es el presidente y su edad", "Cómo y con cuánto dinero"], correcta: 0 },
      { dificultad: 1, enunciado: "El titular sirve para:", opciones: ["Anunciar lo más importante e invitar a leer", "Explicar el cierre del periódico", "Contar los párrafos del texto", "Presentar al fotógrafo del diario"], correcta: 0 },
      { dificultad: 2, enunciado: "«Este sábado, 500 familias del barrio El Salto recibieron agua por tubería tras años de espera», dijo la Alcaldía. La pregunta «quién» la responde:", opciones: ["Las 500 familias y la Alcaldía", "El agua del sistema nuevo", "La tubería instalada", "El barrio de la ciudad"], correcta: 0 },
      { dificultad: 2, enunciado: "«Se espera que el teleférico abra este mes» y «el teleférico abre este mes» son:", opciones: ["Lo primero es una expectativa, lo segundo un hecho", "Ambos hechos comprobados", "Los dos son opiniones", "El primero es titular"], correcta: 0 },
      { dificultad: 2, enunciado: "Una noticia debe escribirse en:", opciones: ["Tercera persona con tono objetivo", "Primera persona: yo, yo, yo", "Versos rimados con métrica", "Lenguaje de saludos navideños"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Cuál es la fuente más confiable para una noticia sobre el huracán?", opciones: ["El IDEAM y la Unidad de Gestión del Riesgo", "Un chisme de un grupo de vecinos", "Una foto vieja sin fecha", "Una cadena de mensajes reenviada"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Por qué un titular puede ser sesgado?", opciones: ["Porque selecciona una versión del hecho y deja fuera otras", "Porque va siempre en negrilla", "Porque es más corto que la noticia", "Porque lo firma un periodista famoso"], correcta: 0 },
      { dificultad: 3, enunciado: "Dos medios titulan distinto el mismo hecho: uno escribe «TransMilenio colapsa» y el otro «Usuarios exigen soluciones». Lo que cambió es:", opciones: ["El énfasis: unos destacan el suceso, otros la reacción", "El día del hecho", "La ciudad del Metro", "El número de buses"], correcta: 0 },
      { dificultad: 3, enunciado: "Una noticia sin fecha ni lugar publicados:", opciones: ["Dificulta verificar si es reciente o es de otro contexto", "Igualmente se entiende sola y basta", "Es imposible de escribir jamás", "Siempre es mentira total"], correcta: 0 },
      { dificultad: 3, enunciado: "La crónica de un partido y la noticia del mismo partido se distinguen porque:", opciones: ["La crónica narra con escena y estilo; la noticia da los datos duros", "Son lo mismo con distinto nombre", "La noticia es mucho más larga", "Solo la noticia puede tener fotos"], correcta: 0 },
      { dificultad: 3, enunciado: "Para cubrir el festival cultural del barrio, una noticia debe preguntar por:", opciones: ["Quién organiza, qué habrá, cuándo y dónde se hace", "El precio del papel del periódico", "Cuántas fotos hay en el álbum", "Qué opinan los animales del parque"], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Escribir una noticia escolar", descripcion: "Ordena los pasos.", pasos: ["Averiguar los datos: qué, quién, cuándo, dónde", "Redactar el titular y el entradado", "Agregar detalles en orden de importancia", "Revisar objetividad y fuentes"] },
      { dificultad: 2, titulo: "Reportear un evento del barrio", descripcion: "Ordena el trabajo de campo.", pasos: ["Planear qué voy a preguntar y a quién", "Tomar apuntes y grabar la entrevista verificando datos con dos personas", "Redactar con sus propias palabras", "Pedir a la fuente que revise lo dicho"] },
      { dificultad: 3, titulo: "Armar el noticiero del salón", descripcion: "Ordena la producción del noticiero.", pasos: ["Reunir y jerarquizar las tres noticias más importantes", "Redactar cada una para leerla en 40 segundos con fuentes verificadas", "Distribuir locutores y ensayar", "Grabar y revisar juntos"] }
    ]
  },

  "espanol--medios--c3": {
    nombre: "Fuentes confiables e información en pantalla",
    preguntas: [
      { dificultad: 1, enunciado: "Una fuente primaria de información es:", opciones: ["El testimonio de quien vivió el hecho", "Un tuit sin autor conocido", "Un resumen de otro resumen", "Un chisme del mercado"], correcta: 0 },
      { dificultad: 1, enunciado: "Para saber si un sitio web es confiable miramos:", opciones: ["Quién publica, con qué fecha y con qué fuentes", "Cuántos colores tiene el diseño", "Si tiene música de fondo", "Si el nombre es gracioso"], correcta: 0 },
      { dificultad: 1, enunciado: "Una wiki abierta se caracteriza porque:", opciones: ["Cualquiera puede editarla: hay que verificar su contenido", "Es siempre la verdad definitiva", "Solo la pueden ver los maestros", "Nunca cambia nada"], correcta: 0 },
      { dificultad: 2, enunciado: "Buscar «niñez trabajadora Bogotá» en vez de «vendedores callejeros» es una pregunta de:", opciones: ["Reformular la búsqueda con términos distintos", "Escribir mal una consulta obligada", "Comprar mejor internet", "Cambiar el buscador siempre"], correcta: 0 },
      { dificultad: 2, enunciado: "El algoritmo de una red decide qué vemos según:", opciones: ["Nuestro comportamiento: lo que miramos, damos like y compartimos", "La hora exacta de nacimiento", "La letra de nuestro nombre", "El color preferido declarado"], correcta: 0 },
      { dificultad: 2, enunciado: "«Burbuja de filtros» significa que:", opciones: ["La red nos muestra solo lo que refuerza lo que ya pensamos", "La red está llena de publicidad pagada", "Un error técnico borra las noticias", "Los filtros de agua limpian los datos"], correcta: 0 },
      { dificultad: 2, enunciado: "Verificar una imagen incluye:", opciones: ["Buscar si apareció antes con otro título o fecha", "Aceptarla si tiene muchos corazones", "Descargarla e imprimirla ya", "Agrandarla con zoom solo"], correcta: 0 },
      { dificultad: 3, enunciado: "Un portal vende «10 alimentos que curan el cáncer» sin citar estudios. Debemos:", opciones: ["Dudar: afirmación extraordinaria requiere evidencia verificable", "Compartirlo para ayudar a la gente", "Comprar todos esos alimentos", "Aceptar: la internet nunca miente"], correcta: 0 },
      { dificultad: 3, enunciado: "El periodismo de datos se diferencia del de opiniones en que:", opciones: ["Sustenta sus afirmaciones en datos verificables y su metodología", "Publica solo tuits del momento", "Usa cifras inventadas por el editor", "No necesita fuentes jamás"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Por qué es mala práctica copiar un párrafo de internet sin cita?", opciones: ["Porque no se puede verificar ni reconocer la autoría", "Porque internet es demasiado lenta", "Porque los párrafos deben ser cortos siempre", "No es mala: todo internet es libre"], correcta: 0 },
      { dificultad: 3, enunciado: "En una búsqueda, el operador de comillas «» sirve para:", opciones: ["Buscar la frase exacta, palabra por palabra", "Buscar solo en mayúsculas", "Excluir todas las palabras", "Traducir la búsqueda al inglés"], correcta: 0 },
      { dificultad: 3, enunciado: "Un video muestra una avalancha... con el agua al revés. La señal más clara de manipulación es:", opciones: ["Incoherencia física dentro del propio video", "La calidad de la imagen del video", "Que esté grabado en vertical", "Que no tenga música"], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Evaluar una página web", descripcion: "Ordena los pasos.", pasos: ["Ver quién publica y con qué fecha", "Buscar las fuentes citadas", "Contrastar con otra página distinta"] },
      { dificultad: 2, titulo: "Investigar para un trabajo escolar", descripcion: "Ordena los pasos.", pasos: ["Escribir la pregunta de investigación y buscar con palabras clave variadas", "Leer y anotar datos con su fuente", "Distinguir fuentes primarias y secundarias", "Organizar la información por categorías"] },
      { dificultad: 3, titulo: "Cazadores de desinformación", descripcion: "Ordena la verificación.", pasos: ["Leer completo: titular, texto, autoría y fecha", "Buscar la fuente original y el dominio del medio", "Hacer búsqueda inversa de imágenes y comparar con verificadores", "Escribir un veredicto con sus evidencias"] }
    ]
  },

  "espanol--medios--c4": {
    nombre: "Publicidad, desinformación y sesgos",
    preguntas: [
      { dificultad: 1, enunciado: "El propósito central de la publicidad es:", opciones: ["Persuadir para comprar o adoptar una conducta", "Informar con total neutralidad", "Narrar historias sin ninguna intención", "Entrenar la memoria de los niños"], correcta: 0 },
      { dificultad: 1, enunciado: "El eslogan se distingue porque:", opciones: ["Es breve, pegajoso y resume la promesa de la marca", "Explica detalladamente la fórmula del producto", "Ocupa media página del aviso", "Solo aparece en la radio"], correcta: 0 },
      { dificultad: 1, enunciado: "Una «fake news» se define por:", opciones: ["Afirmaciones falsas que circulan como si fueran informativas", "Opiniones legítimas con las que no estoy de acuerdo", "Noticias aburridas mal escritas", "Información verificada por dos medios"], correcta: 0 },
      { dificultad: 2, enunciado: "Un anuncio de gaseosas muestra jóvenes en el Caribe, risas y playa. Está apelando a:", opciones: ["La emoción y el deseo de pertenencia, no a datos del producto", "La lógica pura y simple del consumidor", "Una comparativa nutricional rigurosa", "La descripción técnica de la fórmula"], correcta: 0 },
      { dificultad: 2, enunciado: "«Los jóvenes de hoy no leen nada: lo dice mi papá». El texto ejerce:", opciones: ["Generalización apoyada en una sola autoridad familiar", "Estadística oficial con fuentes serias", "Análisis técnico muy riguroso", "Noticia objetiva del día"], correcta: 0 },
      { dificultad: 2, enunciado: "El sesgo de confirmación en redes nos lleva a:", opciones: ["Compartir lo que coincide con lo que ya creemos", "Buscar siempre la refutación propia", "Dudar de todo lo que nos gusta", "Leer solo a autores antiguos"], correcta: 0 },
      { dificultad: 2, enunciado: "Una publicidad de «alitas de pollo» comparables a las de otra marca usa:", opciones: ["Argumento comparativo, que puede ser válido o engañoso según datos", "Testimonio de un famoso", "Pura información técnica neutral", "Humor sin ninguna intención"], correcta: 0 },
      { dificultad: 3, enunciado: "Un post dice: «Científicos confirman que el celular en el bolsillo causa esterilidad». ¿Qué revisar primero?", opciones: ["Quién son esos «científicos» y dónde está el estudio", "La cantidad de likes del post", "Si el celular es caro o barato", "El color del fondo de la imagen"], correcta: 0 },
      { dificultad: 3, enunciado: "El «humor político» en memes puede desinformar porque:", opciones: ["Presenta una caricatura de los hechos que se recuerda más que el dato real", "Solo interesa a los jóvenes del país", "Es siempre mentira literal y directa", "Nunca toca temas serios"], correcta: 0 },
      { dificultad: 3, enunciado: "Dos cuentas de un mismo partido publican a la vez idénticos mensajes sin indicar autoría. Sospechamos:", opciones: ["Astroturfing: parecer de movimiento espontáneo fabricado", "Publicidad comercial del partido", "Un error técnico de la plataforma", "Periodismo ciudadano normal"], correcta: 0 },
      { dificultad: 3, enunciado: "Para medir el sesgo de un medio se recomienda:", opciones: ["Comparar su cobertura con otros medios y con la fuente original", "Aceptar su línea editorial entera", "Leerlo solo si tiene fotos bonitas", "Crear una lista negra de medios"], correcta: 0 },
      { dificultad: 3, enunciado: "El «clickbait» funciona porque:", opciones: ["Provoca curiosidad fuerte y entrega una información pobre", "Ofrece la información completa del hecho", "Es una tarifa de internet gratis", "Obliga al lector a verificar fuentes"], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Desarmar un anuncio publicitario", descripcion: "Ordena el análisis.", pasos: ["Identificar qué promete el anuncio", "Reconocer las emociones que usa", "Concluir qué quiere que yo haga"] },
      { dificultad: 2, titulo: "Analizar una campaña de salud", descripcion: "Ordena el análisis crítico.", pasos: ["Definir a quién va dirigida la campaña", "Identificar la promesa y el temor que usa", "Examinar la evidencia que presenta", "Comparar con los datos oficiales", "Proponer una mejora del mensaje"] },
      { dificultad: 3, titulo: "Crear contenido responsable", descripcion: "Ordena el proceso de producción.", pasos: ["Definir el mensaje que quiero difundir", "Verificar cada dato con dos fuentes independientes", "Elegir lenguaje claro sin insultos ni estigmatizaciones", "Atribuir imágenes y citas de origen", "Publicar y estar atento a correcciones"] }
    ]
  },

  "espanol--medios--c5": {
    nombre: "Análisis del discurso y ecosistema digital",
    preguntas: [
      { dificultad: 1, enunciado: "El análisis del discurso estudia:", opciones: ["Cómo el lenguaje construye posiciones y relaciones de poder", "Solo la ortografía de los discursos", "Únicamente los discursos del presidente", "La duración en minutos de un audio"], correcta: 0 },
      { dificultad: 1, enunciado: "En el ecosistema digital, el «engagement» mide:", opciones: ["La interacción que genera un contenido entre usuarios", "La cantidad de hojas del periódico", "El costo de la impresión", "La edad del director del medio"], correcta: 0 },
      { dificultad: 1, enunciado: "Una plataforma de video sostiene su negocio principalmente con:", opciones: ["Publicidad dirigida según el tiempo de atención de los usuarios", "Las monedas de los videojuegos", "El pago mensual de todos los países", "La venta de los celulares chinos"], correcta: 0 },
      { dificultad: 2, enunciado: "En el framing de «protesta», decir «vándalos» en vez de «manifestantes»:", opciones: ["Deslegitima el reclamo desde la elección léxica", "Es un sinónimo neutro sin consecuencia", "Aclara los hechos con rigor", "Solo cambia la puntuación"], correcta: 0 },
      { dificultad: 2, enunciado: "La «economía de la atención» implica que:", opciones: ["Los contenidos compiten por retenernos, y el algoritmo premia la indignación", "Todos los contenidos se muestran en orden cronológico", "Nadie mira publicidad en la red", "La atención no vale nada hoy"], correcta: 0 },
      { dificultad: 2, enunciado: "Un influencer anuncia «producto milagro» sin marcar #publicidad. Incurre en:", opciones: ["Publicidad encubierta: el deber legal de identificar el contenido pagado", "Periodismo de investigación serio", "Una opinión libre sin implicaciones", "Un error inofensivo y aceptable"], correcta: 0 },
      { dificultad: 2, enunciado: "Las «cámaras de eco» en redes refuerzan posiciones porque:", opciones: ["Un grupo cerrado repite el mismo relato sin contactos disidentes", "Las redes prohíben opinar distinto", "Nadie quiere discutir en internet", "Los algoritmos muestran solo noticias falsas"], correcta: 0 },
      { dificultad: 3, enunciado: "Un discurso político dice: «Nosotros, la gente honesta; ellos, los de siempre». El análisis debe notar:", opciones: ["La construcción de un nosotros/ellos que simplifica la realidad", "Un ejemplo típico de argumentación lógica", "Una descripción neutral de dos equipos", "Una comparación con la naturaleza"], correcta: 0 },
      { dificultad: 3, enunciado: "Un medio publica solo notas de agencia y ninguna investigación propia. ¿Qué riesgo tiene su relato?", opciones: ["Depender de un material uniforme: poca voz y mirada propias", "Ser demasiado independiente de todo", "Equivocarse más que los demás", "Tener demasiado tiempo para cada nota"], correcta: 0 },
      { dificultad: 3, enunciado: "El periodismo de datos con visualización se diferencia del gráfico decorativo porque:", opciones: ["Permite verificar y explorar el dato, no solo ilustrar el titular", "Usa más colores llamativos que el otro", "Se presenta solo en televisión abierta", "Omite las fuentes por seguridad"], correcta: 0 },
      { dificultad: 3, enunciado: "Un deepfake del alcalde circuló horas antes de desmentirse. La lección de ecosistema es:", opciones: ["La desinformación se propaga más rápido que su corrección", "Los desmentidos llegan siempre a todos", "Los deepfakes no afectan la política real", "Solo los jóvenes comparten esos audios"], correcta: 0 },
      { dificultad: 3, enunciado: "El «derecho al olvido» en internet tensiona:", opciones: ["La libertad de información y el derecho a la reputación de las personas", "El precio del internet de las casas", "El uso obligatorio de cuentas de correo", "La edad para crear un perfil"], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Analizar un post publicitario", descripcion: "Ordena los pasos.", pasos: ["Identificar a quién se dirige y qué promete", "Marcar la selección léxica del mensaje", "Concluir qué ideología sugiere"] },
      { dificultad: 2, titulo: "Mapear un debate en redes", descripcion: "Ordena el estudio.", pasos: ["Definir el caso y la semana de estudio", "Seleccionar las cuentas más activas del debate", "Clasificar los argumentos de cada bando", "Observar qué palabras definen a cada uno", "Graficar quién amplifica a quién"] },
      { dificultad: 3, titulo: "Producir una pieza informativa verificada", descripcion: "Ordena el flujo profesional.", pasos: ["Definir la pregunta y la fuente primaria", "Reunir y cruzar documentos y testimonios", "Redactar con atribución de cada dato", "Diseñar visualización con la fuente visible", "Editar con verificación final de citas", "Publicar, monitorear y corregir en público"] }
    ]
  },

  // ============================ ÉTICA DE LA COMUNICACIÓN ============================

  "espanol--etica-comunicacion--c1": {
    nombre: "Escuchar y esperar el turno para hablar",
    preguntas: [
      { dificultad: 1, enunciado: "Cuando un amigo cuenta algo, debo:", opciones: ["Mirarlo y escucharlo", "Gritar mi propia historia", "Taparme la cara", "Salir corriendo"], correcta: 0 },
      { dificultad: 1, enunciado: "Si alguien tiene la palabra en clase, yo:", opciones: ["Levanto la mano para pedir turno", "Hablo sin parar", "Canto otro cuento", "Duermo un poco"], correcta: 0 },
      { dificultad: 1, enunciado: "«La palabra es del niño de la bufanda». ¿Qué toca?", opciones: ["Escucharlo hasta que termine", "Quitarle la bufanda", "Bajarse del salón", "Gritar más fuerte"], correcta: 0 },
      { dificultad: 1, enunciado: "Si no entendí lo que dijeron, puedo:", opciones: ["Preguntar con respeto: «¿me repites?»", "Decir que hablan mal", "Reírme del otro", "No volver a hablar"], correcta: 0 },
      { dificultad: 2, enunciado: "El turno de hablar se puede pedir con:", opciones: ["La mano levantada o un gesto acordado", "Un manotazo en la mesa", "Un silbido grande", "Empujando al otro"], correcta: 0 },
      { dificultad: 2, enunciado: "Mi compañero se puso triste y calló. Lo amable es:", opciones: ["Darle tiempo y estar cerca si él quiere", "Contar un chiste fuerte", "Ignorarlo del todo", "Gritarle que hable ya"], correcta: 0 },
      { dificultad: 2, enunciado: "En la asamblea del salón, escuchar sirve para:", opciones: ["Que todos puedan decir lo suyo", "Que solo hable el más callado", "Terminar rápido sin decidir", "Que gane quien grite"], correcta: 0 },
      { dificultad: 2, enunciado: "Si interrumpí sin querer, debo:", opciones: ["Pedir disculpas y escuchar de nuevo", "Reírme del que hablaba", "Sentarme en otra silla", "Contar otro tema"], correcta: 0 },
      { dificultad: 3, enunciado: "Los niños pelean por quién presentó primero. La maestra debe:", opciones: ["Acordar un orden claro y turnos iguales", "Dejar que gane el más bravo", "Dejar de hacer asambleas", "Presentar ella sola siempre"], correcta: 0 },
      { dificultad: 3, enunciado: "Si me río del acento de un niño nuevo:", opciones: ["Lo hago sentir mal: debo escuchar con respeto", "Le enseño a hablar bien", "Nada malo pasa con eso", "Él debe aprender de mí"], correcta: 0 },
      { dificultad: 3, enunciado: "Dos amigos quieren contar su cuento a la vez. ¿Qué acuerdo es bueno?", opciones: ["Sortear el orden y el otro escucha primero", "Que hablen los dos a la vez", "Que ninguno cuente nada", "Que solo escuche el más grande"], correcta: 0 },
      { dificultad: 3, enunciado: "En la fila del mercado alguien dice «no me oíste». Tú creías que te escuchó. Debes:", opciones: ["Repetir con calma mirando a la persona", "Gritar lo mismo tres veces", "Caminar sin decir nada", "Cambiar de puesto"], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Asamblea del salón", descripcion: "Ordena los pasos.", pasos: ["Pedir el turno con la mano", "Hablar sin ofender a nadie", "Escuchar al que sigue"] },
      { dificultad: 2, titulo: "Contar un problema sin pelear", descripcion: "Ordena la conversación.", pasos: ["Decir qué siento con calma", "Explicar qué pasó sin insultar", "Preguntar al otro qué necesita"] },
      { dificultad: 3, titulo: "Acuerdo de escucha para el recreo", descripcion: "Ordena el proceso del acuerdo.", pasos: ["Cada uno dice el problema sin interrumpir", "Se repite lo que entendí del otro", "Buscamos juntos la solución que quepa a los dos"] }
    ]
  },

  "espanol--etica-comunicacion--c2": {
    nombre: "Respeto al hablar y al escribir",
    preguntas: [
      { dificultad: 1, enunciado: "Escribir con respeto significa:", opciones: ["Cuidar las palabras para no ofender", "Escribir solo lo que yo pienso", "Usar mayúsculas para gritar", "Copiar los deberes del compañero"], correcta: 0 },
      { dificultad: 1, enunciado: "Antes de publicar algo sobre un compañero, conviene:", opciones: ["Preguntarme si me gustaría que lo hicieran conmigo", "Publicarlo rápido para que no se note", "Borrar mi propio nombre siempre", "Contarlo solo a un amigo"], correcta: 0 },
      { dificultad: 1, enunciado: "Una crítica respetuosa se dirige:", opciones: ["A lo que la persona hizo, no a su valor como persona", "Al físico del compañero", "A la familia entera del otro", "A un apodo del compañero"], correcta: 0 },
      { dificultad: 2, enunciado: "En un chat del salón, alguien envía un meme con burlas. Lo ético es:", opciones: ["No reír ni compartirlo y avisar a un adulto si es grave", "Compartirlo por todos los grupos", "Respondele con otro meme peor", "Fingir que no se vio nada"], correcta: 0 },
      { dificultad: 2, enunciado: "«Te escribo esto para que entiendas y no para atacarte». El mensaje muestra:", opciones: ["Intención clara sin agresión gratuita", "Una amenaza velada", "Una burla al lector", "Una omisión del tema"], correcta: 0 },
      { dificultad: 2, enunciado: "Si un trabajo cita una idea de otro autor, la forma respetuosa es:", opciones: ["Reconocer la autoría con cita", "Presentarla como mía sin decir nada", "Cambiar dos letras y listo", "Imprimir la hoja dos veces"], correcta: 0 },
      { dificultad: 2, enunciado: "Una carta de disculpa debe incluir:", opciones: ["Reconocimiento del daño y oferta de reparación", "Un «perdón» mínimo y seguir como si nada", "La lista de las deudas del otro", "Una foto del momento"], correcta: 0 },
      { dificultad: 3, enunciado: "Mi amigo publicó fotos de mi casa sin permiso. El daño es:", opciones: ["De mi privacidad y mi imagen en el grupo", "Solo un pequeño malentendido", "Un error de la cámara sola", "Inofensivo: eran fotos mías"], correcta: 0 },
      { dificultad: 3, enunciado: "«No es chisme si lo cuenta alguien que estaba allá». El argumento falla porque:", opciones: ["La fuente no quita lo dañino o falso del contenido", "Siempre se puede preguntar al de la casa", "Los que estaban allá no saben nada", "Todo chisme es obligatorio de creer"], correcta: 0 },
      { dificultad: 3, enunciado: "Si en el foro del colegio alguien difama a una profesora, el estudiante responsable:", opciones: ["No comparte, avisa al adulto y protege el derecho a la honra", "También difama para equilibrar", "No hace nada y se desconecta", "Lo guarda para vengarse luego"], correcta: 0 },
      { dificultad: 3, enunciado: "En un grupo de WhatsApp del salón, lo que se escribe queda porque:", opciones: ["Los mensajes pueden guardarse y reenviarse más allá del grupo", "Se borran solos por la noche", "Solo la profe los puede leer", "Nadie puede guardar un chat"], correcta: 0 },
      { dificultad: 3, enunciado: "La regla de oro «no hagas público lo que otros no dirían de sí» protege:", opciones: ["La intimidad y la confianza del grupo", "El celular del que habla", "Las notas del colegio", "La batería de la casa"], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Pedir disculpas bien", descripcion: "Ordena los pasos.", pasos: ["Nombrar lo que hice mal", "Explicar el daño que causó", "Ofrecer cómo repararlo"] },
      { dificultad: 2, titulo: "Escribir una carta respetuosa de reclamo", descripcion: "Ordena la redacción.", pasos: ["Saludar con respeto", "Describir el hecho sin insultos", "Explicar cómo me afectó", "Proponer una solución concreta"] },
      { dificultad: 3, titulo: "Construir el decálogo de comunicación del salón", descripcion: "Ordena el proceso colectivo.", pasos: ["Cada uno escribe un problema de comunicación visto", "Agrupamos los problemas y redactamos acuerdos en positivo", "Revisamos que no excluyan a nadie", "Aprobamos por votación y lo publicamos"] }
    ]
  },

  "espanol--etica-comunicacion--c3": {
    nombre: "Censura, estereotipos y lenguaje inclusivo",
    preguntas: [
      { dificultad: 1, enunciado: "La censura en comunicación ocurre cuando:", opciones: ["Alguien con poder impide publicar o decir algo", "Un lector elige no comprar el periódico", "Un texto tiene errores de ortografía", "Un autor cambia su opinión"], correcta: 0 },
      { dificultad: 1, enunciado: "Decir «las niñas no sirven para las matemáticas» es:", opciones: ["Un estereotipo que limita a las personas", "Un dato científico probado", "Un chiste inofensivo", "Una ley del colegio"], correcta: 0 },
      { dificultad: 1, enunciado: "Un estereotipo es:", opciones: ["Una imagen fija y generalizada de un grupo", "Una foto de familia propia", "Un tipo de comilla doble", "Un conector de oposición"], correcta: 0 },
      { dificultad: 2, enunciado: "La libertad de expresión de un estudiante termina donde:", opciones: ["Afecta el derecho de otro: su honra o su intimidad", "Termina la clase de lengua castellana", "Se acaba el internet del colegio", "Llega la hora del almuerzo"], correcta: 0 },
      { dificultad: 2, enunciado: "«Los rojos son desordenados y los azules pulcros». El texto de un cuento infantil reforzaría:", opciones: ["Prejuicios de grupo con apariencia de norma", "Un análisis de colores riguroso", "Una estadística escolar verdadera", "Una receta típica del colegio"], correcta: 0 },
      { dificultad: 2, enunciado: "Cambiar «los hombres de ciencia» por «las personas científicas» busca:", opciones: ["Hacer visible que la categoría incluye a todos", "Escribir siempre más largo", "Confundir al lector a propósito", "Rompertoda la concordancia"], correcta: 0 },
      { dificultad: 2, enunciado: "La doble moral de «puedo burlarme de otros pero no de mí» contradice:", opciones: ["La ética comunicativa del respeto recíproco", "La ortografía de las comillas", "El orden del temario escolar", "La duración del recreo"], correcta: 0 },
      { dificultad: 3, enunciado: "Un profesor prohíbe que se hable de un conflicto del barrio «para no politizar». ¿Qué está pasando?", opciones: ["Censura: se silencia un tema legítimo de debate ciudadano", "Un acuerdo pedagógico perfecto", "Una regla técnica del currículo", "Una medida de seguridad obligatoria"], correcta: 0 },
      { dificultad: 3, enunciado: "En el periódico mural solo aparecen fotos de chicos rubios y delgados. El periódico:", opciones: ["Borra el rostro de la mayoría", "Refleja a todos por igual", "Solo cuida su diseño estético", "Usa fotos de un archivo viejo"], correcta: 0 },
      { dificultad: 3, enunciado: "Un chiste refuerza que «todos los paisas son comerciales». Su daño es:", opciones: ["Reduce a las personas a una etiqueta de origen", "Enseña historia de Antioquia", "Promueve la amistad entre colegios", "Solo incomoda a los mayores"], correcta: 0 },
      { dificultad: 3, enunciado: "El lenguaje inclusivo se llama a veces «políticamente correcto» para descalificarlo. Quien analiza debe:", opciones: ["Preguntar qué ganancia o daño trae cada uso, no solo el nombre", "Aceptar la burla y no cambiar nada", "Prohibir todo debate al respecto", "Cambiar de tema cada vez"], correcta: 0 },
      { dificultad: 3, enunciado: "En una lista de tareas de grupo, «que lo haga una mujer porque son ordenadas». El texto:", opciones: ["Asigna tareas por estereotipo y no por habilidades", "Es un método justo y eficiente", "Respeta la diversidad del grupo", "Solo describe estadísticas"], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Detectar un estereotipo", descripcion: "Ordena los pasos.", pasos: ["Identificar el grupo del que habla", "Buscar la etiqueta fija que le pega", "Pensar en dos personas que la rompen"] },
      { dificultad: 2, titulo: "Escribir un texto sin exclusión", descripcion: "Ordena la revisión.", pasos: ["Redactar el texto normalmente", "Revisar si invisibiliza o etiqueta a grupos", "Sustituir por términos que incluyan", "Leerlo pidiendo la opinión de otro"] },
      { dificultad: 3, titulo: "Debatir un caso de censura escolar", descripcion: "Ordena el debate.", pasos: ["Describir los hechos y qué derecho invoca cada parte", "Buscar ejemplos parecidos en la ley y la prensa", "Construir posiciones con evidencia", "Concluir en grupo con un criterio de cuándo limitar y cuándo no"] }
    ]
  },

  "espanol--etica-comunicacion--c4": {
    nombre: "Discurso de odio y responsabilidad del emisor",
    preguntas: [
      { dificultad: 1, enunciado: "El discurso de odio busca:", opciones: ["Degradar y atacar a personas por su identidad o grupo", "Expresar desacuerdos con respeto", "Informar con fuentes claras", "Promover la participación ciudadana"], correcta: 0 },
      { dificultad: 1, enunciado: "Una opinión ofensiva no es automáticamente discurso de odio si:", opciones: ["Critica ideas sin negar la dignidad del grupo", "Incita a dañar a miembros de un grupo", "Llama a excluir a una comunidad entera", "Usa apodos degradantes por su origen"], correcta: 0 },
      { dificultad: 1, enunciado: "La responsabilidad del emisor incluye:", opciones: ["Responder por el efecto de lo que dice y difunde", "Culpar al que lo entendió mal", "Borrar el mensaje si lo descubren", "Dejar la responsabilidad al algoritmo"], correcta: 0 },
      { dificultad: 2, enunciado: "«No odio a nadie, solo digo que esta gente sobra en el barrio». La frase:", opciones: ["Deshumaniza por grupo y puede alimentar la violencia", "Es una opinión inofensiva total", "Critica la mala conducta ciudadana", "Solo describe un problema de espacio"], correcta: 0 },
      { dificultad: 2, enunciado: "En Colombia, la Ley 1482 de 2011 tipifica:", opciones: ["Los actos de racismo y discriminación como delitos", "El uso obligatorio de redes sociales", "La censura previa de todo medio", "El precio de la publicidad digital"], correcta: 0 },
      { dificultad: 2, enunciado: "Compartir una publicación de odio sin estar de acuerdo:", opciones: ["La amplifica: el reenvío también tiene consecuencias", "La anula por no gustarte", "La neutraliza con un gesto", "No cuenta como difusión"], correcta: 0 },
      { dificultad: 2, enunciado: "El «discurso deshumanizante» se reconoce porque:", opciones: ["Asocia un grupo con animales o plagas que exterminan", "Usa datos estadísticos oficiales", "Invita a dudar y a pensar", "Cita al grupo con respeto"], correcta: 0 },
      { dificultad: 3, enunciado: "Un compañero publica en un grupo: «a los desplazados hay que sacarlos». La respuesta ética adecuada es:", opciones: ["No difundir, señalar el carácter discriminatorio y alertar a un adulto", "Respondele con más odio", "Borrar el grupo de raíz", "Seguir la corriente a todos"], correcta: 0 },
      { dificultad: 3, enunciado: "Un medio se defiende: «solo informamos lo que dice la gente». ¿Qué falta en esa defensa?", opciones: ["Reconocer la responsabilidad editorial de seleccionar y amplificar mensajes", "Aceptar que los medios nunca tienen poder", "Cambiar de país la noticia", "Cerrar la sección de cartas"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Por qué el anonimato aumenta los discursos de odio?", opciones: ["Reduce el costo personal de degradar al otro", "Mejora la calidad de toda argumentación", "Hace la comunicación más segura para todos", "Evita malentendidos posibles"], correcta: 0 },
      { dificultad: 3, enunciado: "La contranarrativa eficaz ante un discurso de odio suele:", opciones: ["Mostrar rostros e historias que contradicen la etiqueta del grupo", "Responder insultando al que odia", "Guardar silencio total para toda la vida", "Repetir la etiqueta para criticarla siempre"], correcta: 0 },
      { dificultad: 3, enunciado: "Un colegio detecta un grupo de odio por el origen de un compañero. La primera medida legítima es:", opciones: ["Activar protocolo de convivencia: acompañar a la víctima y formar al grupo", "Expulsar al grupo sin hablar nunca con ellos", "Ignorar: los grupos virtuales no existen", "Sancionar a la víctima por quejarse"], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Distinguir opinión y odio", descripcion: "Ordena la verificación.", pasos: ["Leer el mensaje completo", "Preguntar si ataca la dignidad de un grupo", "Preguntar si incita a la violencia"] },
      { dificultad: 2, titulo: "Responder como emisor responsable", descripcion: "Ordena la decisión.", pasos: ["Antes de publicar, preguntarse qué efecto puede tener", "Verificar el contenido y su fuente", "Medir el tono: criticar ideas, no personas", "Publicar o no, y asumir lo publicado"] },
      { dificultad: 3, titulo: "Diseñar una campaña contra la discriminación", descripcion: "Ordena la planeación.", pasos: ["Identificar una forma concreta de discriminación del colegio", "Escuchar a quienes la viven, con respeto", "Definir el mensaje central y los canales", "Producir contenidos con voces diversas", "Evaluar el impacto y ajustar la campaña"] }
    ]
  },

  "espanol--etica-comunicacion--c5": {
    nombre: "Ética de la información y libertad de expresión",
    preguntas: [
      { dificultad: 1, enunciado: "La libertad de expresión en un Estado de derecho:", opciones: ["Protege las opiniones y admite límites para no dañar otros derechos", "Permite decir cualquier cosa sin ningún límite", "Solo protege a los periodistas profesionales", "Depende del precio del internet"], correcta: 0 },
      { dificultad: 1, enunciado: "El derecho a la honra protege:", opciones: ["La reputación e imagen de las personas", "El costo de las impresiones", "El número de seguidores", "La duración de las clases"], correcta: 0 },
      { dificultad: 1, enunciado: "La «ética de la información» se ocupa de:", opciones: ["Cómo se produce, difunde y usa la información con responsabilidad", "La velocidad de los procesadores", "El costo de los datos móviles", "La antigüedad de las computadoras"], correcta: 0 },
      { dificultad: 2, enunciado: "El «hecho noticioso» que justifica publicar la vida privada de una funcionaria debe ponderarse con:", opciones: ["Su pertinencia con la función pública, no la simple curiosidad", "La fama personal de la funcionaria", "La duración total del reportaje", "El color del medio en que se publica"], correcta: 0 },
      { dificultad: 2, enunciado: "Un medio publiciza el nombre de un denunciante sin su consentimiento. Viola:", opciones: ["La protección de fuentes y la reserva legítima", "La libertad de prensa entera", "El derecho de petición", "La ley de tránsito"], correcta: 0 },
      { dificultad: 2, enunciado: "El «outsourcing» de contenido patrocinado como «artículo» sin marcarlo afecta:", opciones: ["La transparencia ante el lector", "La ortografía del portal", "La velocidad de carga", "La dieta del redactor"], correcta: 0 },
      { dificultad: 2, enunciado: "La cláusula de conciencia del periodista protege:", opciones: ["No publicar en contra de principios éticos o veracidad", "Pedir aumento sin informar", "Negarse a cubrir temas incómodos siempre", "Vender la información a otros"], correcta: 0 },
      { dificultad: 3, enunciado: "«Si un rumor sobre un compañero es verdad, tengo derecho a publicarlo». El análisis ético diría:", opciones: ["La veracidad no elimina el daño: hay que ponderar interés público e intimidad", "Publicar todo es un deber de todos", "Solo las mentiras se pueden borrar", "La escuela no tiene ética comunicativa"], correcta: 0 },
      { dificultad: 3, enunciado: "Las sanciones a discursos en redes por parte de plataformas privadas plantean el problema de:", opciones: ["La moderación privada con efectos sobre el debate público", "La velocidad de los datos móviles", "El precio de los celulares", "La edad para estudiar periodismo"], correcta: 0 },
      { dificultad: 3, enunciado: "El periodismo de precisión y la Ley de transparencia exigen al comunicador:", opciones: ["Rendir cuentas del método con que obtuvo sus datos", "Proteger su nombre con seudónimos", "Reducir sus fuentes a una sola", "Evitar todos los errores a costa de todo"], correcta: 0 },
      { dificultad: 3, enunciado: "Un estudiante quiere usar datos de sus compañeros para su trabajo escolar sin permiso. Debe:", opciones: ["Solicitar consentimiento informado y cuidar la confidencialidad", "Publicar todo de inmediato", "Cambiar de tema solo", "Copiar de internet sin mencionar"], correcta: 0 },
      { dificultad: 3, enunciado: "La «paradoja de la tolerancia» de Popper sugiere que:", opciones: ["Una sociedad tolerante no debe tolerar ilimitadamente el discurso que aniquila la tolerancia", "Todos los discursos son iguales siempre", "La tolerancia implica negar la libertad de expresión", "Nunca se debe restringir un mensaje"], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Ponderar libertad y daño", descripcion: "Ordena el análisis.", pasos: ["Identificar el derecho que se invoca", "Identificar el derecho que podría lesionarse", "Concluir con la opción menos dañina"] },
      { dificultad: 2, titulo: "Protocolo ético del medio escolar", descripcion: "Ordena la construcción del protocolo.", pasos: ["Listar los dilemas típicos del medio escolar", "Elegir los valores guía: veracidad, dignidad, transparencia", "Escribir reglas concretas para cada dilema", "Aprobar en asamblea de redacción", "Publicar y revisar cada semestre"] },
      { dificultad: 3, titulo: "Debate sobre un caso de libertad de expresión", descripcion: "Ordena la sesión académica.", pasos: ["Estudiar los hechos del caso y su contexto", "Identificar derechos y normas en tensión", "Construir dos posturas con argumentos y evidencia", "Escuchar a las partes contrarias con respeto", "Redactar un fallo colectivo con su razonamiento", "Comparar la decisión con fallos reales"] }
    ]
  }
};
