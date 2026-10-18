// js/games/banco/educacion-fisica.js
// Banco de contenido para Educación Física, Recreación y Deportes.
// Organizado por eje (5) y por ciclo (c1 1°-2°, c2 3°-5°, c3 6°-7°, c4 8°-9°,
// c5 10°-11°). Cada nodo trae preguntas de opción múltiple (la respuesta
// correcta siempre va en la posición 0 porque el juego las mezcla en pantalla)
// y retos para ordenar pasos.
//
// Marco curricular: Estándares Básicos de Competencias para Educación Física,
// Recreación y Deportes (corporalidad y salud, actividades físicas y salud,
// dinámica de grupos y valores, recreación). Capacidades físicas: fuerza,
// velocidad, resistencia, flexibilidad, coordinación. Habilidades motrices
// básicas: locomotoras, no locomotoras y de manipulación.

export const BANCO = {
  "educacion-fisica--motricidad--c1": {
    id: "educacion-fisica--motricidad--c1",
    nombre: "Correr, saltar y lanzar",
    preguntas: [
      { enunciado: "Para correr bien debemos mover:", opciones: ["las piernas una tras otra", "solo la cabeza", "los brazos hacia atrás", "un dedo del pie"], correcta: 0, dificultad: 1 },
      { enunciado: "Saltar significa:", opciones: ["elevar el cuerpo con las piernas", "arrastrarnos por el piso", "quedarnos sentados", "girar solo la cabeza"], correcta: 0, dificultad: 1 },
      { enunciado: "Cuando lanzamos una pelota usamos:", opciones: ["el brazo y la mano", "solo el pie", "la oreja", "la rodilla"], correcta: 0, dificultad: 1 },
      { enunciado: "Antes de correr en clase debo:", opciones: ["calentar con el profe", "dormir en la cancha", "comer muchos dulces", "esconderme"], correcta: 0, dificultad: 1 },
      { enunciado: "¿Qué parte del cuerpo trabaja más al correr?", opciones: ["las piernas", "el cabello", "la uña del dedo", "la lengua"], correcta: 0, dificultad: 2 },
      { enunciado: "Al saltar la cuerda, ¿qué hacemos?", opciones: ["saltar rítmicamente sobre los pies", "tirarnos al piso", "caminar de lado", "cerrar los puños"], correcta: 0, dificultad: 2 },
      { enunciado: "La carrera de encostalados se hace:", opciones: ["metido en costales y saltando", "nadando en la piscina", "montando en bicicleta", "dibujando un cuadro"], correcta: 0, dificultad: 2 },
      { enunciado: "Lanzar lejos una pelota requiere:", opciones: ["impulso con el brazo", "quedarnos muy quietos", "cerrar los ojos al azar", "sentarnos primero"], correcta: 0, dificultad: 2 },
      { enunciado: "¿Cuál juego nos ayuda a correr rápido?", opciones: ["la carrera de relevos", "el teatro de sombras", "el dominó", "la siesta"], correcta: 0, dificultad: 3 },
      { enunciado: "Para no lastimarme al saltar debo:", opciones: ["caer con las rodillas dobladas", "caer con los pies tiesos", "cerrar las manos", "saltar hacia un muro"], correcta: 0, dificultad: 3 },
      { enunciado: "Si quiero lanzar mejor la pelota, practico:", opciones: ["lanzar a una caja", "dormir mucho", "comer dulces", "ver la tele"], correcta: 0, dificultad: 3 },
      { enunciado: "¿Qué hacemos primero al llegar a la clase?", opciones: ["saludar y calentar", "correr sin parar", "ir a la tienda", "esconderme"], correcta: 0, dificultad: 3 }
    ],
    retos: [
      { titulo: "Alistarse para correr", pasos: ["Llegar al espacio del juego", "Calentar las piernas con el profe", "Correr por un camino libre"], dificultad: 1 },
      { titulo: "Hacer un buen salto", pasos: ["Flexionar un poco las rodillas", "Impulsarnos con los pies", "Caer con cuidado y con las manos listas"], dificultad: 2 },
      { titulo: "Lanzar la pelota lejos", pasos: ["Sujetar la pelota con la mano dominante", "Poner un pie delante del otro", "Girar el cuerpo y lanzar con fuerza"], dificultad: 3 }
    ]
  },

  "educacion-fisica--motricidad--c2": {
    id: "educacion-fisica--motricidad--c2",
    nombre: "Coordinación, equilibrio y lateralidad",
    preguntas: [
      { enunciado: "La lateralidad nos dice si somos:", opciones: ["diestros o zurdos", "altos o bajos", "rápidos o lentos", "fuertes o débiles"], correcta: 0, dificultad: 1 },
      { enunciado: "El equilibrio es la capacidad de:", opciones: ["mantenernos sin caernos", "correr muy rápido", "dormir bien", "hablar fuerte"], correcta: 0, dificultad: 1 },
      { enunciado: "Para coordinar movemos:", opciones: ["varias partes del cuerpo a la vez", "solo un dedo", "únicamente la cabeza", "una pestaña"], correcta: 0, dificultad: 1 },
      { enunciado: "La mano que usamos para escribir suele ser:", opciones: ["la dominante", "el codo", "la rodilla", "el talón"], correcta: 0, dificultad: 1 },
      { enunciado: "Caminar sobre una línea sin caernos trabaja el:", opciones: ["equilibrio", "cabello", "ombligo", "bigote"], correcta: 0, dificultad: 2 },
      { enunciado: "Saltar de un pie a otro en las casillas es jugar a:", opciones: ["la peregrana", "la siesta", "ver televisión", "recortar papel"], correcta: 0, dificultad: 2 },
      { enunciado: "Tener buena coordinación ayuda a:", opciones: ["atrapar la pelota", "dormir más", "comer dulces", "ensuciarse"], correcta: 0, dificultad: 2 },
      { enunciado: "Ser diestro significa usar más la mano:", opciones: ["derecha", "izquierda", "el pie", "la oreja"], correcta: 0, dificultad: 2 },
      { enunciado: "Un buen ejercicio para el equilibrio es:", opciones: ["pararse en un pie sin caerse", "cerrar los puños", "hablar solo", "sentarse en el piso"], correcta: 0, dificultad: 3 },
      { enunciado: "¿Qué actividad ejercita equilibrio, manos, pies a la vez?", opciones: ["saltar la cuerda", "dormir", "comer", "leer"], correcta: 0, dificultad: 3 },
      { enunciado: "Al lanzar una pelota contra la pared, ¿qué entrenamos?", opciones: ["la coordinación", "el sueño", "el hambre", "el frío"], correcta: 0, dificultad: 3 },
      { enunciado: "¿Por qué practicamos el equilibrio?", opciones: ["para no caernos al movernos", "para dormir", "para comer", "para leer más rápido"], correcta: 0, dificultad: 3 }
    ],
    retos: [
      { titulo: "Caminar por una línea", pasos: ["Poner un pie delante del otro", "Mirar hacia un punto fijo", "Avanzar con calma sin caernos"], dificultad: 1 },
      { titulo: "Equilibrarse en un pie", pasos: ["Apoyar bien un pie", "Levantar la otra pierna", "Estirar los brazos para no caerse", "Volver al piso con cuidado"], dificultad: 2 },
      { titulo: "Jugar a la peregrana", pasos: ["Dibujar las casillas en el suelo", "Lanzar la piedra a la primera casilla", "Saltar con un pie por cada casilla", "Regresar dando la vuelta"], dificultad: 3 }
    ]
  },

  "educacion-fisica--motricidad--c3": {
    id: "educacion-fisica--motricidad--c3",
    nombre: "Habilidades motrices combinadas",
    preguntas: [
      { enunciado: "Las habilidades motrices básicas se dividen en:", opciones: ["locomotoras, no locomotoras y de manipulación", "solo de salto", "únicamente de carrera", "de respiración"], correcta: 0, dificultad: 1 },
      { enunciado: "Correr, saltar y trepar son habilidades:", opciones: ["locomotoras", "manipulativas", "de respiración", "estáticas"], correcta: 0, dificultad: 1 },
      { enunciado: "Lanzar, atrapar y patear son habilidades de:", opciones: ["manipulación", "equilibrio estático", "giro", "descanso"], correcta: 0, dificultad: 1 },
      { enunciado: "Girar o agacharnos sin movernos del sitio es una habilidad:", opciones: ["no locomotora", "de salto largo", "de carrera", "de lanzamiento"], correcta: 0, dificultad: 1 },
      { enunciado: "Una secuencia de carrera, salto y lanzamiento combina:", opciones: ["tres habilidades motrices", "una sola", "ninguna", "solo respiración"], correcta: 0, dificultad: 2 },
      { enunciado: "La coordinación óculo-manual nos sirve para:", opciones: ["atrapar la pelota con las manos", "cerrar los ojos", "escuchar música", "dormir"], correcta: 0, dificultad: 2 },
      { enunciado: "Trepar un muro bajo requiere sobre todo:", opciones: ["fuerza en brazos y dominio corporal", "hablar fuerte", "dormir antes", "comer dulces"], correcta: 0, dificultad: 2 },
      { enunciado: "La yola se lanza usando:", opciones: ["la mano y el antebrazo", "el pie únicamente", "la espalda", "la barbilla"], correcta: 0, dificultad: 2 },
      { enunciado: "Al combinar carrera, salto y aterrizaje, lo más seguro es:", opciones: ["flexionar las rodillas al caer", "quedar con las piernas rígidas", "cerrar los ojos al saltar", "saltar hacia el vacío"], correcta: 0, dificultad: 3 },
      { enunciado: "Una habilidad motriz combinada se domina cuando:", opciones: ["la realizamos con fluidez y control", "la hacemos con miedo", "la olvidamos", "dependemos siempre del profe"], correcta: 0, dificultad: 3 },
      { enunciado: "El zigzag entre conos entrena principalmente la:", opciones: ["agilidad", "flexibilidad pasiva", "digestión", "visión nocturna"], correcta: 0, dificultad: 3 },
      { enunciado: "Para mejorar una secuencia motriz conviene:", opciones: ["repetirla con distintas variantes", "hacerla una sola vez", "no practicarla", "solo verla en video"], correcta: 0, dificultad: 3 }
    ],
    retos: [
      { titulo: "Armar un circuito combinado", pasos: ["Correr hacia el aro", "Saltar dentro del aro", "Lanzar la pelota a la caja"], dificultad: 1 },
      { titulo: "Recorrer el circuito con destreza", pasos: ["Salida de carrera en zigzag", "Salto de valla baja con pies juntos", "Arranque y lanzamiento a la caja", "Regreso trotando para recuperar el aliento"], dificultad: 2 },
      { titulo: "Planear una secuencia de tres habilidades", pasos: ["Elegir una habilidad locomotora", "Añadir una de manipulación", "Incorporar un giro no locomotor", "Unir todo en un orden fluido"], dificultad: 3 }
    ]
  },

  "educacion-fisica--motricidad--c4": {
    id: "educacion-fisica--motricidad--c4",
    nombre: "Fuerza, resistencia y flexibilidad",
    preguntas: [
      { enunciado: "La capacidad de vencer una resistencia con el músculo es:", opciones: ["fuerza", "velocidad", "flexibilidad", "equilibrio"], correcta: 0, dificultad: 1 },
      { enunciado: "La resistencia nos permite:", opciones: ["sostener un esfuerzo por mucho tiempo", "levantar un peso una sola vez", "tocarnos la punta de los pies", "correr en línea recta"], correcta: 0, dificultad: 1 },
      { enunciado: "La flexibilidad se trabaja principalmente con:", opciones: ["estiramientos", "sprint", "pesas muy pesadas", "saltos largos"], correcta: 0, dificultad: 1 },
      { enunciado: "Correr una distancia corta lo más rápido posible mide la:", opciones: ["velocidad", "resistencia larga", "flexibilidad", "movilidad pasiva"], correcta: 0, dificultad: 1 },
      { enunciado: "Los 800 metros lisos en el colegio desarrollan más la:", opciones: ["resistencia", "fuerza máxima", "flexibilidad", "coordinación fina"], correcta: 0, dificultad: 2 },
      { enunciado: "Un salto vertical mide sobre todo la:", opciones: ["fuerza explosiva de las piernas", "resistencia cardiovascular", "flexibilidad", "lateralidad"], correcta: 0, dificultad: 2 },
      { enunciado: "Para mejorar la fuerza sin lesionarnos debemos:", opciones: ["progresar poco a poco en la carga", "levantar lo máximo el primer día", "entrenar sin calentar", "dormir en el gimnasio"], correcta: 0, dificultad: 2 },
      { enunciado: "El test de course navette o ir y venir evalúa:", opciones: ["la resistencia aeróbica", "la fuerza de mano", "la flexibilidad", "la velocidad pura"], correcta: 0, dificultad: 2 },
      { enunciado: "Combinar carrera, sentadilla y estiramiento mejora a la vez:", opciones: ["varias capacidades físicas", "una sola", "ninguna", "únicamente la visión"], correcta: 0, dificultad: 3 },
      { enunciado: "Al planear una rutina equilibrada es recomendable incluir:", opciones: ["fuerza, resistencia y flexibilidad", "solo fuerza", "solo estiramientos", "solo sentadillas"], correcta: 0, dificultad: 3 },
      { enunciado: "¿Por qué la flexibilidad protege las articulaciones?", opciones: ["porque permite moverlas en su rango sin forzar", "porque aumenta el peso", "porque baja la estatura", "porque quita el sueño"], correcta: 0, dificultad: 3 },
      { enunciado: "Un adolescente sedentario que pasa sentado todo el día puede presentar:", opciones: ["menor resistencia y fuerza", "mayor resistencia", "flexibilidad óptima", "mejor coordinación fina"], correcta: 0, dificultad: 3 }
    ],
    retos: [
      { titulo: "Test de flexibilidad", pasos: ["Sentarse con las piernas estiradas", "Juntar las plantas de los pies", "Inclinarse hacia la punta", "Sostener la posición respirando"], dificultad: 1 },
      { titulo: "Circuito de resistencia", pasos: ["Trotar suave durante tres minutos", "Hacer saltos de tijera treinta segundos", "Correr entre conos ida y vuelta", "Medir las pulsaciones al terminar", "Repetir dos veces con descanso corto"], dificultad: 2 },
      { titulo: "Diseñar una rutina de condición física", pasos: ["Definir la capacidad a trabajar", "Elegir ejercicios seguros y variados", "Fijar series, repeticiones y descanso", "Combinar fuerza, resistencia y flexibilidad", "Registrar el progreso cada semana"], dificultad: 3 }
    ]
  },

  "educacion-fisica--motricidad--c5": {
    id: "educacion-fisica--motricidad--c5",
    nombre: "Biomecánica y entrenamiento",
    preguntas: [
      { enunciado: "La biomecánica estudia:", opciones: ["el movimiento del cuerpo aplicando la física", "la alimentación", "el descanso", "la historia del deporte"], correcta: 0, dificultad: 1 },
      { enunciado: "El principio de entrenamiento que aumenta la dificultad de forma gradual se llama:", opciones: ["sobrecarga progresiva", "individualidad", "continuidad", "especificidad"], correcta: 0, dificultad: 1 },
      { enunciado: "Al flexionar el codo para levantar un peso, el brazo funciona como una:", opciones: ["palanca", "rueda", "polea fija", "resorte"], correcta: 0, dificultad: 1 },
      { enunciado: "El centro de gravedad del cuerpo humano se ubica cerca de:", opciones: ["la zona pélvica", "la punta de la nariz", "el talón", "la coronilla"], correcta: 0, dificultad: 1 },
      { enunciado: "En un salto, flexionar las rodillas antes de impulsarnos sirve para:", opciones: ["reclutar más músculos y ganar altura", "perder el tiempo", "lastimar la rodilla", "disminuir la fuerza"], correcta: 0, dificultad: 2 },
      { enunciado: "El principio de especificidad indica que el entrenamiento debe:", opciones: ["parecerse al gesto del deporte", "ser igual para todos", "ignorarse", "ser solo de gimnasio"], correcta: 0, dificultad: 2 },
      { enunciado: "La sobrecarga progresiva con descanso adecuado produce:", opciones: ["adaptación y mejora", "lesión inmediata", "estancamiento seguro", "malestar eterno"], correcta: 0, dificultad: 2 },
      { enunciado: "Analizar la zancada de un velocista busca:", opciones: ["optimizar la técnica y la eficiencia", "hacerlo caminar", "aumentar el maratón", "quitarle piernas"], correcta: 0, dificultad: 2 },
      { enunciado: "La fuerza relativa de un atleta es la fuerza medida:", opciones: ["en proporción al peso corporal", "en el peso total levantado", "en la masa del cuerpo", "en la estatura"], correcta: 0, dificultad: 3 },
      { enunciado: "En la periodización, un mesociclo corresponde a:", opciones: ["una etapa mediana de varias semanas", "un día de entrenamiento", "una sola serie", "un año completo"], correcta: 0, dificultad: 3 },
      { enunciado: "Al dosificar la carga del entrenamiento NO debemos modificar todo a la vez:", opciones: ["volumen, intensidad, frecuencia y descanso", "ninguna variable", "solo la ropa", "el color de la cancha"], correcta: 0, dificultad: 3 },
      { enunciado: "Al mejorar la técnica de carrera, a la misma velocidad se reduce:", opciones: ["el gasto energético", "la velocidad", "la fuerza al mínimo", "la resistencia a cero"], correcta: 0, dificultad: 3 }
    ],
    retos: [
      { titulo: "Analizar la técnica de un lanzamiento", pasos: ["Observar la posición inicial del cuerpo", "Seguir la trayectoria del brazo", "Identificar la transferencia de peso", "Corregir el gesto con el profe"], dificultad: 1 },
      { titulo: "Aplicar sobrecarga progresiva", pasos: ["Definir el ejercicio objetivo", "Establecer una carga inicial cómoda", "Aumentar la carga en pequeños pasos", "Controlar el descanso entre series", "Registrar la respuesta del cuerpo", "Ajustar la siguiente semana"], dificultad: 2 },
      { titulo: "Diseñar un microciclo semanal", pasos: ["Fijar el objetivo de la semana", "Distribuir días de fuerza y resistencia", "Reservar sesiones técnicas", "Incluir descanso activo", "Dosificar intensidad alta y baja", "Alinearlo con la competencia"], dificultad: 3 }
    ]
  },

  "educacion-fisica--juegos-deportivos--c1": {
    id: "educacion-fisica--juegos-deportivos--c1",
    nombre: "Juegos con reglas simples",
    preguntas: [
      { enunciado: "En un juego todos debemos:", opciones: ["respetar las reglas", "empujar a los demás", "gritar mucho", "mentir"], correcta: 0, dificultad: 1 },
      { enunciado: "Cuando llega mi turno debo:", opciones: ["esperar con calma", "quitar el turno", "empujar", "esconderme"], correcta: 0, dificultad: 1 },
      { enunciado: "Si un compañero cae, lo correcto es:", opciones: ["ayudarlo a levantarse", "seguir corriendo", "reírme", "saltarlo"], correcta: 0, dificultad: 1 },
      { enunciado: "Antes de jugar escuchamos:", opciones: ["las explicaciones del profe", "la radio", "el viento", "nada"], correcta: 0, dificultad: 1 },
      { enunciado: "Ganar siempre en un juego es:", opciones: ["imposible, a veces se pierde", "obligatorio", "una ley", "seguro"], correcta: 0, dificultad: 2 },
      { enunciado: "El juego de la estatua consiste en:", opciones: ["quedarse quieto al sonar una señal", "correr sin parar", "cerrar los ojos", "dormir"], correcta: 0, dificultad: 2 },
      { enunciado: "Para jugar en equipo necesitamos:", opciones: ["comunicarnos con los compañeros", "golpear a todos", "no hablar", "escondernos"], correcta: 0, dificultad: 2 },
      { enunciado: "Si no entiendo una regla debo:", opciones: ["preguntar al profe", "inventar otra", "irme del juego", "gritar"], correcta: 0, dificultad: 2 },
      { enunciado: "¿Cuál juego se hace en equipos?", opciones: ["las manzanas podridas", "el trompo", "la cometa", "la yola"], correcta: 0, dificultad: 3 },
      { enunciado: "Si cometemos una falta en el juego debemos:", opciones: ["aceptar el castigo con calma", "discutir siempre", "mentir", "golpear"], correcta: 0, dificultad: 3 },
      { enunciado: "Un buen compañero en el juego es el que:", opciones: ["anima a todos", "excluye a los lentos", "hace trampa", "gana solo"], correcta: 0, dificultad: 3 },
      { enunciado: "Al terminar el juego saludamos:", opciones: ["al contrario y a todos", "solo al que ganó", "a nadie", "saliendo corriendo"], correcta: 0, dificultad: 3 }
    ],
    retos: [
      { titulo: "Jugar a la estatua", pasos: ["Correr por el espacio", "Escuchar la señal del profe", "Quedarse quieto sin moverse"], dificultad: 1 },
      { titulo: "Alistar el juego por equipos", pasos: ["Escoger un capitán por equipo", "Contar a los integrantes", "Ubicarse en el campo de juego"], dificultad: 2 },
      { titulo: "Resolver un conflicto jugando", pasos: ["Detener el juego con calma", "Escuchar a la otra parte", "Acordar la forma de seguir"], dificultad: 3 }
    ]
  },

  "educacion-fisica--juegos-deportivos--c2": {
    id: "educacion-fisica--juegos-deportivos--c2",
    nombre: "Predeportivos: pasar, recibir y lanzar",
    preguntas: [
      { enunciado: "Un juego predeportivo prepara para:", opciones: ["un deporte oficial", "dormir", "la cocina", "el sueño"], correcta: 0, dificultad: 1 },
      { enunciado: "Pasar el balón a un compañero se llama:", opciones: ["el pase", "el regate", "la red", "el saque"], correcta: 0, dificultad: 1 },
      { enunciado: "Recibir el balón requiere:", opciones: ["mirarlo y preparar las manos", "cerrar los ojos", "girar la espalda", "correr hacia atrás"], correcta: 0, dificultad: 1 },
      { enunciado: "En el prebaloncesto, encestar significa:", opciones: ["meter el balón en la canasta", "lanzarlo fuera", "correr", "saltar"], correcta: 0, dificultad: 1 },
      { enunciado: "El regate sirve para avanzar:", opciones: ["botando el balón en el suelo", "pasando la pelota", "caminando atrás", "cerrando los ojos"], correcta: 0, dificultad: 2 },
      { enunciado: "Un buen pase llega:", opciones: ["al compañero desmarcado", "al suelo", "a nadie", "a la cabeza propia"], correcta: 0, dificultad: 2 },
      { enunciado: "En el prevoleibol pasamos el balón:", opciones: ["de un lado al otro sobre la red", "con las piernas", "por debajo del brazo", "a ras del suelo"], correcta: 0, dificultad: 2 },
      { enunciado: "Recibir bien el balón nos ayuda a:", opciones: ["mantener el control del juego", "perderlo", "tirarlo fuera", "dormir"], correcta: 0, dificultad: 2 },
      { enunciado: "¿Cuál juego predeportivo trabaja pases, recepciones, tiros?", opciones: ["el minibaloncesto", "la rayuela", "la cometa", "las canicas"], correcta: 0, dificultad: 3 },
      { enunciado: "El control orientado del balón permite:", opciones: ["preparar el siguiente gesto", "detenerse siempre", "cerrar los ojos", "tirar hacia atrás"], correcta: 0, dificultad: 3 },
      { enunciado: "En el patapiel combinamos movimientos de:", opciones: ["el béisbol más el fútbol", "la natación", "la esgrima", "el ciclismo"], correcta: 0, dificultad: 3 },
      { enunciado: "Para que el pase salga preciso debemos:", opciones: ["dosificar la fuerza del envío", "lanzar con los ojos cerrados", "tirar siempre hacia arriba", "quedarnos quietos"], correcta: 0, dificultad: 3 }
    ],
    retos: [
      { titulo: "Hacer un pase con las manos", pasos: ["Colocarse frente al compañero", "Extender los brazos al frente", "Empujar el balón con las dos manos"], dificultad: 1 },
      { titulo: "Recibir el balón de pecho", pasos: ["Mirar venir el balón", "Girar un poco el torso", "Recibirlo con brazos flexionados", "Amararlo contra el pecho"], dificultad: 2 },
      { titulo: "Armar una jugada de prebaloncesto", pasos: ["Subir con dribling controlado", "Pasar al compañero desmarcado", "Cortar hacia la canasta", "Finalizar con un tiro a la tabla"], dificultad: 3 }
    ]
  },

  "educacion-fisica--juegos-deportivos--c3": {
    id: "educacion-fisica--juegos-deportivos--c3",
    nombre: "Reglamento de fútbol y baloncesto",
    preguntas: [
      { enunciado: "En un partido de fútbol, cada equipo juega con:", opciones: ["once jugadores", "cinco jugadores", "siete jugadores", "nueve jugadores"], correcta: 0, dificultad: 1 },
      { enunciado: "El baloncesto se juega en la cancha con:", opciones: ["cinco jugadores por equipo", "once por equipo", "siete por equipo", "cuatro por equipo"], correcta: 0, dificultad: 1 },
      { enunciado: "Un partido de fútbol reglamentario dura:", opciones: ["noventa minutos en dos tiempos", "cuarenta y cinco minutos seguidos", "sesenta minutos", "dos horas"], correcta: 0, dificultad: 1 },
      { enunciado: "En el baloncesto, un tiro libre vale:", opciones: ["un punto", "dos puntos", "tres puntos", "cuatro puntos"], correcta: 0, dificultad: 1 },
      { enunciado: "En el fútbol se sanciona posición adelantada cuando el atacante, al recibir el pase, está:", opciones: ["más cerca de la línea de meta que el penúltimo rival", "dentro de su propia área", "sobre la línea de banda", "en el círculo central"], correcta: 0, dificultad: 2 },
      { enunciado: "En el baloncesto, caminar con el balón sin botarlo se considera:", opciones: ["una infracción de pasos", "un doble regate válido", "una falta del rival", "un tiro válido"], correcta: 0, dificultad: 2 },
      { enunciado: "El tiempo máximo para tirar al aro en posesión del balón en baloncesto es:", opciones: ["veinticuatro segundos", "diez segundos", "cuarenta y ocho segundos", "noventa segundos"], correcta: 0, dificultad: 2 },
      { enunciado: "En el fútbol, tocar el balón con la mano del jugador de campo se sanciona como:", opciones: ["mano", "gol", "saque de banda", "córner"], correcta: 0, dificultad: 2 },
      { enunciado: "En el baloncesto, un atacante no puede permanecer en la zona rival más de:", opciones: ["tres segundos", "ocho segundos", "doce segundos", "veinticuatro segundos"], correcta: 0, dificultad: 3 },
      { enunciado: "La tarjeta roja en el fútbol significa que el jugador:", opciones: ["es expulsado del partido", "recibe solo una advertencia", "entra a la cancha", "cobra un penalti"], correcta: 0, dificultad: 3 },
      { enunciado: "El balón que sale por la línea de banda en fútbol se repone con:", opciones: ["saque de banda", "saque de esquina", "tiro libre", "gol de cabeza"], correcta: 0, dificultad: 3 },
      { enunciado: "Los tres puntos en baloncesto se obtienen al:", opciones: ["encestar detrás de la línea de tres", "encestar dentro del área", "cobrar un tiro libre", "robar el balón"], correcta: 0, dificultad: 3 }
    ],
    retos: [
      { titulo: "Sacar del centro en fútbol", pasos: ["Colocar el balón en el punto central", "Ubicar a los once jugadores", "Pitar el inicio del partido", "Entregar el balón al compañero del medio"], dificultad: 1 },
      { titulo: "Cobrar un tiro libre", pasos: ["Retirar la barrera a la distancia reglamentaria", "Colocar el balón en el punto de la falta", "Ejecutar el tiro tras la señal del árbitro", "Reanudar el juego el equipo rival"], dificultad: 2 },
      { titulo: "Armar una jugada de baloncesto", pasos: ["Subir el balón con dribling controlado", "Dar un pase al exterior", "Hacer un bloqueo para liberar al tirador", "Definir con tiro al aro"], dificultad: 3 }
    ]
  },

  "educacion-fisica--juegos-deportivos--c4": {
    id: "educacion-fisica--juegos-deportivos--c4",
    nombre: "Táctica deportiva y sistemas de juego",
    preguntas: [
      { enunciado: "La táctica de un equipo es:", opciones: ["el plan para ganar un partido", "la ropa del equipo", "el viaje a la cancha", "la comida antes del juego"], correcta: 0, dificultad: 1 },
      { enunciado: "En voleibol, cada equipo juega en cancha con:", opciones: ["seis jugadores", "once jugadores", "cinco jugadores", "cuatro jugadores"], correcta: 0, dificultad: 1 },
      { enunciado: "La red de voleibol está a 2,43 metros en la categoría:", opciones: ["masculina", "femenina", "cadete", "infantil"], correcta: 0, dificultad: 1 },
      { enunciado: "El saque en voleibol consiste en:", opciones: ["poner el balón en juego pasándolo al campo rival", "detener el balón", "correr por la red", "sentarse en el piso"], correcta: 0, dificultad: 1 },
      { enunciado: "En voleibol, un mismo jugador no puede tocar el balón:", opciones: ["dos veces seguidas", "tres veces en un punto", "una sola vez", "jamás"], correcta: 0, dificultad: 2 },
      { enunciado: "Los sistemas de juego como 4-4-2 o 3-5-2 en fútbol organizan:", opciones: ["la ubicación de los jugadores en el campo", "el color del uniforme", "la duración del partido", "la comida del equipo"], correcta: 0, dificultad: 2 },
      { enunciado: "Cada equipo de voleibol puede dar como máximo:", opciones: ["tres toques antes de pasar el balón", "un solo toque", "seis toques", "diez toques"], correcta: 0, dificultad: 2 },
      { enunciado: "La rotación en voleibol exige que los jugadores:", opciones: ["cambien de posición en el sentido de las agujas del reloj", "se queden siempre fijos", "salgan de la cancha", "pisen la red"], correcta: 0, dificultad: 2 },
      { enunciado: "El juego posicional busca principalmente:", opciones: ["crear superioridad numérica en una zona", "que juegue solo uno", "detener el partido", "perder el balón"], correcta: 0, dificultad: 3 },
      { enunciado: "En voleibol, si el balón toca el suelo del propio campo, el punto es para:", opciones: ["el equipo contrario", "el mismo equipo", "el público", "el árbitro"], correcta: 0, dificultad: 3 },
      { enunciado: "Un contraataque rápido en voleibol suele definirse con:", opciones: ["un remate por la banda", "un saque", "una parada", "sentarse en la red"], correcta: 0, dificultad: 3 },
      { enunciado: "Una defensa en zona coloca a los jugadores según:", opciones: ["el espacio asignado a cada uno", "el gusto del capitán", "el número de camiseta", "la hora del partido"], correcta: 0, dificultad: 3 }
    ],
    retos: [
      { titulo: "Organizar el saque en voleibol", pasos: ["Colocarse detrás de la línea de fondo", "Ubicar al colocador cerca de la red", "Golpear el balón al campo rival", "Iniciar la rotación tras el punto"], dificultad: 1 },
      { titulo: "Montar una defensa en fútbol", pasos: ["Marcar al atacante más cercano", "Cubrir los espacios entre líneas", "Acompañar desde el centro", "Preparar la salida en contraataque"], dificultad: 2 },
      { titulo: "Diseñar un ataque en voleibol", pasos: ["Recibir el saque hacia el colocador", "Armar el balón por la banda opuesta", "Atacar con un remate cruzado", "Cerrar la red con el bloqueo", "Reubicarse para el siguiente balón"], dificultad: 3 }
    ]
  },

  "educacion-fisica--juegos-deportivos--c5": {
    id: "educacion-fisica--juegos-deportivos--c5",
    nombre: "Reglamento federativo y periodización",
    preguntas: [
      { enunciado: "El reglamento federativo de un deporte lo modifica:", opciones: ["su federación nacional o internacional", "el público", "un espectador", "un hinchada"], correcta: 0, dificultad: 1 },
      { enunciado: "En periodización del entrenamiento, el macrociclo es:", opciones: ["la planificación de toda la temporada", "un solo mes", "una serie", "un día"], correcta: 0, dificultad: 1 },
      { enunciado: "La FIFA gobierna el reglamento del:", opciones: ["fútbol a nivel mundial", "baloncesto", "voleibol", "atletismo"], correcta: 0, dificultad: 1 },
      { enunciado: "El dopaje en el deporte se refiere al uso de:", opciones: ["sustancias prohibidas para mejorar el rendimiento", "agua", "frutas", "vendajes"], correcta: 0, dificultad: 1 },
      { enunciado: "La FIBA, federación internacional del baloncesto, fija entre otras cosas:", opciones: ["el reglamento y las medidas de la cancha", "el clima del partido", "el nombre de los clubes", "la comida de los atletas"], correcta: 0, dificultad: 2 },
      { enunciado: "En periodización, el pico de rendimiento debe coincidir con:", opciones: ["el momento de la competencia", "el inicio de la pretemporada", "un día de descanso", "después de la temporada"], correcta: 0, dificultad: 2 },
      { enunciado: "La AMA (WADA) es la agencia que:", opciones: ["vigila las normas antidopaje en el mundo", "organiza el fútbol", "dirige el Comité Olímpico", "funda los clubes"], correcta: 0, dificultad: 2 },
      { enunciado: "Tras una tarjeta roja, el equipo sancionado en fútbol continúa en el campo:", opciones: ["con un jugador menos", "con once jugadores", "con doce jugadores", "sin el portero"], correcta: 0, dificultad: 2 },
      { enunciado: "El microciclo en periodización corresponde a:", opciones: ["una semana de entrenamiento", "un año entero", "una sola clase", "un mesociclo completo"], correcta: 0, dificultad: 3 },
      { enunciado: "Las reglas de edad en ligas amateur buscan principalmente:", opciones: ["proteger al deportista y dar equidad", "dificultar el juego", "quitar puntos", "favorecer al más fuerte"], correcta: 0, dificultad: 3 },
      { enunciado: "La sobrecarga constante sin descanso suficiente puede causar:", opciones: ["sobreentrenamiento y lesiones", "mejor rendimiento", "recuperación rápida", "ninguna alteración"], correcta: 0, dificultad: 3 },
      { enunciado: "En voleibol federativo, un partido se gana al ganar:", opciones: ["tres sets, cada uno a 25 puntos con diferencia de dos", "un set de once puntos", "cinco sets iguales", "dos puntos seguidos"], correcta: 0, dificultad: 3 }
    ],
    retos: [
      { titulo: "Planear la temporada con macrociclo", pasos: ["Definir el objetivo de la temporada", "Dividir el año en mesociclos", "Distribuir cada mesociclo en microciclos", "Alinear los picos con las competencias"], dificultad: 1 },
      { titulo: "Preparar a un equipo para el torneo", pasos: ["Diagnosticar el nivel del equipo", "Establecer los objetivos tácticos", "Planificar sesiones semanales", "Dosificar la carga y el descanso", "Simular partidos de preparación", "Ajustar el pico en la semana del debut"], dificultad: 2 },
      { titulo: "Aplicar el reglamento en un partido", pasos: ["Verificar la ficha y edad de los jugadores", "Revisar el uniforme y los dorsales", "Comprobar medidas y peso del balón", "Explicar las reglas a los capitanes", "Aplicar sanciones según el reglamento", "Registrar la hoja de resultados"], dificultad: 3 }
    ]
  },

  "educacion-fisica--expresion-corporal--c1": {
    id: "educacion-fisica--expresion-corporal--c1",
    nombre: "Imitar movimientos y animales",
    preguntas: [
      { enunciado: "Imitar a un animal con el cuerpo es jugar a:", opciones: ["la mímica de animales", "dormir mucho", "leer un libro", "comer sopa"], correcta: 0, dificultad: 1 },
      { enunciado: "Cuando imito el vuelo del águila muevo:", opciones: ["los brazos como alas", "solo la cabeza", "una rodilla", "el cabello"], correcta: 0, dificultad: 1 },
      { enunciado: "Para caminar como un pato flexiono:", opciones: ["las rodillas y bajo el cuerpo", "los dedos de la mano", "la nariz", "las orejas"], correcta: 0, dificultad: 1 },
      { enunciado: "Saltar como el sapo nos hace:", opciones: ["agacharnos e impulsarnos", "rodar en el piso", "quedarnos tiesos", "cerrar los ojos"], correcta: 0, dificultad: 1 },
      { enunciado: "El cangrejo en el juego camina:", opciones: ["hacia atrás con cuidado", "muy rápido hacia adelante", "rodando", "de puntillas"], correcta: 0, dificultad: 2 },
      { enunciado: "Imitar movimientos nos ayuda a:", opciones: ["conocer nuestro cuerpo", "dormir más", "comer dulce", "ir al baño"], correcta: 0, dificultad: 2 },
      { enunciado: "Al hacer el elefante, un brazo se usa como:", opciones: ["una trompa larga", "una oreja", "una pata corta", "la cola"], correcta: 0, dificultad: 2 },
      { enunciado: "Movernos como un pez en el suelo es:", opciones: ["ondear el cuerpo", "saltar muy alto", "quedarnos quietos", "correr"], correcta: 0, dificultad: 2 },
      { enunciado: "¿Qué animal imitamos al ondular todo el cuerpo?", opciones: ["la serpiente", "el pollo", "la rana", "el gato"], correcta: 0, dificultad: 3 },
      { enunciado: "Para imitar al conejo debemos saltar:", opciones: ["con los dos pies juntos", "con una sola mano", "girando en el aire", "de lado"], correcta: 0, dificultad: 3 },
      { enunciado: "El juego de imitar sonidos más movimientos trabaja:", opciones: ["la expresión corporal", "la vista", "el sueño", "la digestión"], correcta: 0, dificultad: 3 },
      { enunciado: "Al inventar el andar de un oso caminamos:", opciones: ["pesados y a cuatro apoyos", "de puntillas", "saltando", "corriendo rápido"], correcta: 0, dificultad: 3 }
    ],
    retos: [
      { titulo: "Imitar al sapo", pasos: ["Agachar el cuerpo con las manos en el suelo", "Impulsar las piernas para saltar", "Caer otra vez agachados"], dificultad: 1 },
      { titulo: "Imitar al cangrejo", pasos: ["Apoyar manos y pies en el suelo", "Levantar el cuerpo mirando al frente", "Caminar hacia atrás con cuidado"], dificultad: 2 },
      { titulo: "Crear un animal inventado", pasos: ["Elegir cómo se mueve el animal", "Imitar su forma de caminar", "Mostrarlo al grupo con un sonido"], dificultad: 3 }
    ]
  },

  "educacion-fisica--expresion-corporal--c2": {
    id: "educacion-fisica--expresion-corporal--c2",
    nombre: "Coreografías sencillas",
    preguntas: [
      { enunciado: "Una coreografía es:", opciones: ["un conjunto de movimientos con música", "un cálculo largo", "una carrera rápida", "un sueño"], correcta: 0, dificultad: 1 },
      { enunciado: "Para bailar en grupo debemos:", opciones: ["seguir el mismo ritmo", "correr libre", "cerrar los ojos", "hablar mucho"], correcta: 0, dificultad: 1 },
      { enunciado: "El conteo en una danza nos ayuda a:", opciones: ["ordenar los movimientos", "dormir", "comer", "leer"], correcta: 0, dificultad: 1 },
      { enunciado: "La música marca en el baile:", opciones: ["el tiempo de cada paso", "el color del piso", "la sede", "el clima"], correcta: 0, dificultad: 1 },
      { enunciado: "Repetir una secuencia de pasos nos hace:", opciones: ["memorizar la coreografía", "perderla", "olvidarla", "dormir"], correcta: 0, dificultad: 2 },
      { enunciado: "El espacio del baile debe ser:", opciones: ["libre para no chocar", "lleno de objetos", "estrecho con sillas", "oscuro"], correcta: 0, dificultad: 2 },
      { enunciado: "Caminar al ritmo de un tambor practica:", opciones: ["la coordinación", "la vista", "el sueño", "la digestión"], correcta: 0, dificultad: 2 },
      { enunciado: "Completar un movimiento hasta el final nos da:", opciones: ["fluidez al bailar", "cansancio total", "confusión", "aburrimiento"], correcta: 0, dificultad: 2 },
      { enunciado: "¿Qué hacemos al entrar en el mismo momento todos?", opciones: ["coordinar al grupo", "salir corriendo", "cerrar los ojos", "dejar de bailar"], correcta: 0, dificultad: 3 },
      { enunciado: "Una coreografía sencilla se arma:", opciones: ["uniendo pasos en un orden", "sin ningún orden", "solo con saltos", "sin música"], correcta: 0, dificultad: 3 },
      { enunciado: "Bailar en fila requiere que:", opciones: ["cada uno respete su lugar", "todos se choquen", "nadie mire al frente", "se apaguen las luces"], correcta: 0, dificultad: 3 },
      { enunciado: "El ensayo antes de la presentación sirve para:", opciones: ["aunar la coordinación del grupo", "perder tiempo", "confundir", "dormir"], correcta: 0, dificultad: 3 }
    ],
    retos: [
      { titulo: "Aprender cuatro tiempos", pasos: ["Escuchar la música completa", "Marcar el primer golpe con el pie", "Añadir el movimiento de brazos", "Repetir la secuencia completa"], dificultad: 1 },
      { titulo: "Bailar en ronda", pasos: ["Tomarse de las manos en círculo", "Avanzar hacia un lado", "Retroceder dando una palma", "Volver al punto de partida"], dificultad: 2 },
      { titulo: "Montar una coreografía de ocho tiempos", pasos: ["Escoger la música del grupo", "Definir los pasos de cada tiempo", "Ordenar los movimientos en una secuencia", "Ensayar hasta sincronizar al grupo"], dificultad: 3 }
    ]
  },

  "educacion-fisica--expresion-corporal--c3": {
    id: "educacion-fisica--expresion-corporal--c3",
    nombre: "Ritmo, espacio y coreografía",
    preguntas: [
      { enunciado: "El ritmo en una danza es:", opciones: ["la distribución ordenada del movimiento en el tiempo", "la ropa del bailarín", "la sala de espera", "un salto alto"], correcta: 0, dificultad: 1 },
      { enunciado: "El espacio coreográfico se organiza en:", opciones: ["niveles alto, medio y bajo", "una sola línea", "solo el suelo", "el fondo del auditorio"], correcta: 0, dificultad: 1 },
      { enunciado: "La dinámica del movimiento puede ser:", opciones: ["lenta, rápida, fuerte o suave", "solo fuerte", "solo rápida", "siempre floja"], correcta: 0, dificultad: 1 },
      { enunciado: "Una secuencia dancística ordenada se llama:", opciones: ["frase de movimiento", "salto largo", "pausa larga", "silencio total"], correcta: 0, dificultad: 1 },
      { enunciado: "Cambiar de dirección sin perder el ritmo entrena:", opciones: ["la orientación espacial", "la fuerza máxima", "la vista nocturna", "la digestión"], correcta: 0, dificultad: 2 },
      { enunciado: "El canon en una coreografía aparece cuando:", opciones: ["un grupo repite el mismo movimiento retrasado en el tiempo", "todos hacen cosas distintas", "nadie se mueve", "la música se detiene"], correcta: 0, dificultad: 2 },
      { enunciado: "El nivel bajo en danza se ejecuta:", opciones: ["cerca del suelo, gateando o rodando", "saltando muy alto", "de pie estirado", "colgado de una barra"], correcta: 0, dificultad: 2 },
      { enunciado: "La musicalidad del bailarín es la capacidad de:", opciones: ["moverse acorde con el compás", "correr rápido", "hablar fuerte", "cerrar los ojos"], correcta: 0, dificultad: 2 },
      { enunciado: "Una composición simétrica en el escenario se logra:", opciones: ["espejando los movimientos de un lado al otro", "haciendo todos cosas distintas", "desordenando las filas", "sin música"], correcta: 0, dificultad: 3 },
      { enunciado: "El vestuario del montaje responde a:", opciones: ["la intención artística de la obra", "la temperatura del día", "el gusto del público", "la hora del ensayo"], correcta: 0, dificultad: 3 },
      { enunciado: "Para variar una frase dancística recurrimos a:", opciones: ["cambiar el ritmo, la dirección y los niveles", "repetir siempre igual", "quitarnos el vestuario", "bailar en silencio"], correcta: 0, dificultad: 3 },
      { enunciado: "La improvisación dirigida se basa en:", opciones: ["una consigna rítmica o espacial del docente", "el azar total", "la repetición automática", "el silencio absoluto"], correcta: 0, dificultad: 3 }
    ],
    retos: [
      { titulo: "Bailar al ritmo del tambor", pasos: ["Escuchar el pulso del tambor", "Marcar cada golpe con el pie", "Alinear el resto del cuerpo al tiempo", "Repetir variando la velocidad"], dificultad: 1 },
      { titulo: "Componer una frase de ocho tiempos", pasos: ["Definir el tema de la frase", "Elegir los movimientos base", "Distribuirlos en ocho tiempos", "Sumar desplazamientos por el espacio"], dificultad: 2 },
      { titulo: "Montar una coreografía grupal", pasos: ["Seleccionar la música del grupo", "Crear la secuencia de movimientos", "Ubicar los cambios de nivel y dirección", "Sincronizar al equipo con ensayos"], dificultad: 3 }
    ]
  },

  "educacion-fisica--expresion-corporal--c4": {
    id: "educacion-fisica--expresion-corporal--c4",
    nombre: "Composición de movimientos",
    preguntas: [
      { enunciado: "La composición coreográfica se apoya en los principios de:", opciones: ["unidad, variedad, desarrollo y forma", "el azar total", "el desorden", "la repetición ciega"], correcta: 0, dificultad: 1 },
      { enunciado: "La unidad en una coreografía significa:", opciones: ["que todos los elementos expresan la misma idea", "varios temas sueltos", "ausencia de música", "un baile sin forma"], correcta: 0, dificultad: 1 },
      { enunciado: "El desarrollo del tema en la danza consiste en:", opciones: ["hacer crecer los movimientos desde un motivo breve", "repetir siempre lo mismo", "quitar toda la música", "bailar sentado"], correcta: 0, dificultad: 1 },
      { enunciado: "La simetría en la composición se refiere a:", opciones: ["la disposición equilibrada de los cuerpos en el espacio", "saltar muy alto", "hacer ruido", "cerrar los ojos"], correcta: 0, dificultad: 1 },
      { enunciado: "La técnica de canon permite:", opciones: ["mostrar el mismo movimiento en entradas retrasadas", "que cada uno baile distinto", "detener el baile", "quitar la música"], correcta: 0, dificultad: 2 },
      { enunciado: "El motivo dancístico es:", opciones: ["la célula breve de movimiento que se desarrolla", "un salto largo", "el cierre de la obra", "el vestuario"], correcta: 0, dificultad: 2 },
      { enunciado: "La transición en danza se usa para:", opciones: ["conectar una frase con otra con sentido", "finalizar siempre la obra", "detener la música", "salir del escenario"], correcta: 0, dificultad: 2 },
      { enunciado: "El contraste en la composición aporta:", opciones: ["variedad al cambiar tempo o nivel", "aburrimiento", "monotonía", "silencio total"], correcta: 0, dificultad: 2 },
      { enunciado: "La estructura de una pieza coreográfica suele tener:", opciones: ["inicio, desarrollo y cierre", "solo un paso", "solo un final", "solo ensayos"], correcta: 0, dificultad: 3 },
      { enunciado: "La luz y el vestuario contribuyen a:", opciones: ["comunicar la intención del montaje", "confundir al público", "quitar espacio", "apagar el teatro"], correcta: 0, dificultad: 3 },
      { enunciado: "La improvisación estructurada se vuelve creación porque:", opciones: ["se seleccionan los mejores movimientos", "se deja todo al azar", "se borra lo aprendido", "se elimina la música"], correcta: 0, dificultad: 3 },
      { enunciado: "Una idea coreográfica clara se refleja en:", opciones: ["el movimiento del cuerpo en el espacio", "el color de la valla", "la duración del descanso", "la hora del ensayo"], correcta: 0, dificultad: 3 }
    ],
    retos: [
      { titulo: "Crear una idea de movimiento", pasos: ["Elegir el tema de la obra", "Asociar sensaciones al tema", "Traducirlas en movimientos", "Unirlas en una breve secuencia"], dificultad: 1 },
      { titulo: "Componer una frase con desarrollo", pasos: ["Proponer un motivo breve", "Repetirlo con variaciones", "Cambiar su nivel o dirección", "Sumar una transición al cierre", "Mostrarlo en el espacio"], dificultad: 2 },
      { titulo: "Montar una pieza coreográfica", pasos: ["Definir el tema y la idea central", "Crear los motivos y las frases", "Estructurar inicio, desarrollo y cierre", "Coordinar música, espacio y vestuario", "Ensayar y ajustar para la presentación"], dificultad: 3 }
    ]
  },

  "educacion-fisica--expresion-corporal--c5": {
    id: "educacion-fisica--expresion-corporal--c5",
    nombre: "Análisis del movimiento y creación escénica",
    preguntas: [
      { enunciado: "El análisis del movimiento en danza estudia:", opciones: ["el gesto, el espacio, el tiempo y el esfuerzo", "el color de la luz del vestíbulo", "el precio del teatro", "el menú del elenco"], correcta: 0, dificultad: 1 },
      { enunciado: "La creación escénica implica:", opciones: ["componer y presentar ante un público", "solo ensayar en casa", "escribir un guion de cine", "correr una maratón"], correcta: 0, dificultad: 1 },
      { enunciado: "La dramaturgia en una obra de danza es:", opciones: ["la estructura narrativa del montaje", "el uso exclusivo del vestuario", "un salto largo", "una sola música de fondo"], correcta: 0, dificultad: 1 },
      { enunciado: "La línea dramática de una obra corresponde a:", opciones: ["la progresión de la acción en el tiempo", "el color del escenario", "el nombre del teatro", "la duración del descanso"], correcta: 0, dificultad: 1 },
      { enunciado: "La gramática del movimiento de Laban analiza:", opciones: ["el cuerpo, el espacio, el tiempo y el esfuerzo", "el vestuario", "la boletería", "la publicidad"], correcta: 0, dificultad: 2 },
      { enunciado: "La escenografía colabora en una obra de danza para:", opciones: ["ubicar la acción en un espacio visual", "quitar los pasos", "reemplazar la música", "cerrar el telón siempre"], correcta: 0, dificultad: 2 },
      { enunciado: "El vestuario en la creación escénica cumple una función:", opciones: ["estética y simbólica al servicio de la idea", "solo decorativa", "de seguridad vial", "de cocina"], correcta: 0, dificultad: 2 },
      { enunciado: "El análisis del esfuerzo en danza considera:", opciones: ["peso, tiempo, espacio y fluidez", "el salario del bailarín", "la taquilla", "el color del piso"], correcta: 0, dificultad: 2 },
      { enunciado: "La puesta en escena integra:", opciones: ["movimiento, música, espacio y vestuario en una idea", "solo los pasos", "solo la iluminación", "solo el guion escrito"], correcta: 0, dificultad: 3 },
      { enunciado: "La crítica constructiva del movimiento aporta:", opciones: ["elementos para mejorar la obra", "descalificaciones personales", "censura previa", "humor sin sentido"], correcta: 0, dificultad: 3 },
      { enunciado: "El concepto de una obra escénica es:", opciones: ["la idea central que unifica la creación", "el nombre del bailarín principal", "el teatro elegido", "la duración total"], correcta: 0, dificultad: 3 },
      { enunciado: "Al analizar una pieza coreográfica comparamos:", opciones: ["la intención expresada contra el resultado visible", "el costo de producción", "el clima del día", "el menú del elenco"], correcta: 0, dificultad: 3 }
    ],
    retos: [
      { titulo: "Analizar una frase de movimiento", pasos: ["Observar la ejecución completa", "Identificar las partes del cuerpo involucradas", "Describir el uso del tiempo y del espacio", "Registrar la calidad del esfuerzo", "Concluir sobre la intención expresiva"], dificultad: 1 },
      { titulo: "Diseñar una creación escénica", pasos: ["Definir el concepto de la obra", "Explorar los movimientos clave", "Estructurar las frases en el espacio", "Coordinar la música y el vestuario", "Ensayar con público interno", "Presentar ante el auditorio"], dificultad: 2 },
      { titulo: "Evaluar una obra en escena", pasos: ["Observar la obra sin interrumpir", "Describir la idea central percibida", "Analizar el movimiento y el espacio", "Valorar la música y el vestuario", "Identificar aciertos expresivos", "Proponer mejoras concretas"], dificultad: 3 }
    ]
  },

  "educacion-fisica--salud-bienestar--c1": {
    id: "educacion-fisica--salud-bienestar--c1",
    nombre: "Higiene, descanso y movimiento",
    preguntas: [
      { enunciado: "Antes de comer debo:", opciones: ["lavarme las manos", "correr un rato", "gritar", "dormir"], correcta: 0, dificultad: 1 },
      { enunciado: "Después de hacer ejercicio debo:", opciones: ["tomar agua", "comer muchos dulces", "dormir en la cancha", "cerrar los ojos"], correcta: 0, dificultad: 1 },
      { enunciado: "Dormir bien nos ayuda a:", opciones: ["crecer y tener fuerza", "llegar tarde", "pelear con todos", "ver más tele"], correcta: 0, dificultad: 1 },
      { enunciado: "El cuerpo necesita moverse cada día para:", opciones: ["estar sano", "dormir siempre", "comer menos aire", "crecer el pelo"], correcta: 0, dificultad: 1 },
      { enunciado: "Bañarnos todos los días nos mantiene:", opciones: ["limpios y sanos", "muy cansados", "somnolientos", "enfermitos"], correcta: 0, dificultad: 2 },
      { enunciado: "Si tengo mucho sueño en clase debo contarlo a:", opciones: ["mi profe o mis padres", "a nadie", "a la pelota", "al perro"], correcta: 0, dificultad: 2 },
      { enunciado: "Para estar fuertes debemos dormir:", opciones: ["las horas necesarias", "muy poquito", "ninguna hora", "solo en la cancha"], correcta: 0, dificultad: 2 },
      { enunciado: "El ejercicio ayuda al cuerpo a:", opciones: ["estar más sano", "doler más", "cansar siempre", "enfermar"], correcta: 0, dificultad: 2 },
      { enunciado: "¿Cuál costumbre protege nuestro corazón?", opciones: ["jugar afuera cada día", "no moverse nunca", "dormir frente al televisor", "comer solo dulces"], correcta: 0, dificultad: 3 },
      { enunciado: "Antes de dormir lo mejor es:", opciones: ["dejar de correr y relajarse", "saltar la cuerda", "hacer muchas flexiones", "gritar fuerte"], correcta: 0, dificultad: 3 },
      { enunciado: "Si me lastimo al caer, lo primero es:", opciones: ["avisar al profe", "esconderme", "correr más", "llorar solo"], correcta: 0, dificultad: 3 },
      { enunciado: "Lavarse las manos protege porque:", opciones: ["quita los gérmenes", "me pone más rápido", "me da sueño", "me quita el hambre"], correcta: 0, dificultad: 3 }
    ],
    retos: [
      { titulo: "Lavarse las manos", pasos: ["Abrir la llave del agua", "Poner jabón en las manos", "Frotar y enjuagar bien"], dificultad: 1 },
      { titulo: "Alistarse para dormir", pasos: ["Guardar los juguetes", "Ponerse el pijama", "Acostarse a una hora fija"], dificultad: 2 },
      { titulo: "Cuidarse después de jugar", pasos: ["Tomar agua poco a poco", "Secar el sudor con la toalla", "Descansar sentado un rato"], dificultad: 3 }
    ]
  },

  "educacion-fisica--salud-bienestar--c2": {
    id: "educacion-fisica--salud-bienestar--c2",
    nombre: "Comida sana, agua y actividad física",
    preguntas: [
      { enunciado: "Una comida sana debe tener:", opciones: ["frutas, verduras, cereales, proteínas", "solo dulces", "solo gaseosa", "solo pan con chocolate"], correcta: 0, dificultad: 1 },
      { enunciado: "El agua es importante porque el cuerpo:", opciones: ["la necesita para funcionar", "no la necesita", "la rechaza", "la cambia por dulce"], correcta: 0, dificultad: 1 },
      { enunciado: "Los alimentos que dan energía al cuerpo son:", opciones: ["los carbohidratos", "las vitaminas solamente", "el agua solamente", "la sal sola"], correcta: 0, dificultad: 1 },
      { enunciado: "Desayunar antes del colegio es:", opciones: ["importante para rendir", "innecesario", "malo", "de grandes"], correcta: 0, dificultad: 1 },
      { enunciado: "La comida chatarra daña porque trae exceso de:", opciones: ["azúcar, grasa, sodio", "vitaminas", "agua", "fibra"], correcta: 0, dificultad: 2 },
      { enunciado: "Para fortalecer los huesos ayuda el:", opciones: ["calcio de la leche", "azúcar refinada", "café", "refresco"], correcta: 0, dificultad: 2 },
      { enunciado: "Se recomienda tomar agua:", opciones: ["varias veces durante el día", "solo en la noche", "una vez al mes", "solo con gaseosa"], correcta: 0, dificultad: 2 },
      { enunciado: "El cuerpo gasta más agua cuando:", opciones: ["hacemos ejercicio intenso", "vemos televisión", "dormimos sentados", "jugamos con papel"], correcta: 0, dificultad: 2 },
      { enunciado: "Una merienda saludable para llevar al colegio es:", opciones: ["una fruta con un puñado de nueces", "una bolsa completa de dulces", "una gaseosa grande", "una porción de papas fritas"], correcta: 0, dificultad: 3 },
      { enunciado: "¿Qué hábito cuida el peso corporal?", opciones: ["comer variado y moverse", "solo dormir", "solo ver tele", "comer siempre dulces"], correcta: 0, dificultad: 3 },
      { enunciado: "La vitamina A, presente en la zanahoria, protege:", opciones: ["la vista", "los huesos del pie", "el cabello", "las uñas"], correcta: 0, dificultad: 3 },
      { enunciado: "Un buen menú del día debe incluir:", opciones: ["varios colores de vegetales", "solo un color", "ninguna fruta", "solo postre"], correcta: 0, dificultad: 3 }
    ],
    retos: [
      { titulo: "Lavarse las manos antes de comer", pasos: ["Abrir la llave con agua limpia", "Aplicar jabón en las manos", "Frotar palmas y dedos", "Enjuagar con agua limpia"], dificultad: 1 },
      { titulo: "Armar un plato saludable", pasos: ["Poner una porción de cereal", "Añadir vegetales de varios colores", "Colocar una proteína como el huevo", "Incluir una fruta de postre"], dificultad: 2 },
      { titulo: "Planear la hidratación del día", pasos: ["Salir con la botella de agua llena", "Beber antes de sentir sed", "Tomar sorbos durante el recreo", "Anotar las veces que bebiste"], dificultad: 3 }
    ]
  },

  "educacion-fisica--salud-bienestar--c3": {
    id: "educacion-fisica--salud-bienestar--c3",
    nombre: "Calentamiento y prevención de lesiones",
    preguntas: [
      { enunciado: "El calentamiento antes del ejercicio sirve para:", opciones: ["preparar el cuerpo y prevenir lesiones", "perder el tiempo", "cansarse antes", "dormir mejor en casa"], correcta: 0, dificultad: 1 },
      { enunciado: "Un buen calentamiento comienza con:", opciones: ["movimientos suaves de trote", "un sprint a máxima velocidad", "estiramientos bruscos", "saltos muy altos"], correcta: 0, dificultad: 1 },
      { enunciado: "Los estiramientos deben hacerse:", opciones: ["de forma lenta, sin rebotes", "con muchos saltos", "muy rápido y con fuerza", "hasta sentir dolor agudo"], correcta: 0, dificultad: 1 },
      { enunciado: "El vendaje en un tobillo se usa para:", opciones: ["sujetar la articulación lesionada", "adornar el uniforme", "calentar el pie", "pesar más al correr"], correcta: 0, dificultad: 1 },
      { enunciado: "Si un compañero se lastima en la clase, debemos:", opciones: ["avisar de inmediato al docente", "moverlo sin cuidado", "esconderlo", "continuar como si nada"], correcta: 0, dificultad: 2 },
      { enunciado: "El protocolo PRICE para una contusión incluye:", opciones: ["reposo, hielo, compresión, elevación", "correr, saltar, girar, parar", "calor, masaje, trote, vuelta", "agua, sol, sal, sombra"], correcta: 0, dificultad: 2 },
      { enunciado: "La ropa deportiva debe ser:", opciones: ["cómoda, fresca y del tamaño adecuado", "ajustada que impida el paso", "de tela muy pesada", "sin zapatos"], correcta: 0, dificultad: 2 },
      { enunciado: "La vuelta a la calma después del ejercicio busca:", opciones: ["llevar el cuerpo al estado inicial", "aumentar la frecuencia a tope", "quitar el sueño", "dar hambre extra"], correcta: 0, dificultad: 2 },
      { enunciado: "El golpe de calor se evita con:", opciones: ["buena hidratación y ropa transpirable", "más ejercicio bajo el sol", "comer muy pesado", "dormir muy tarde"], correcta: 0, dificultad: 3 },
      { enunciado: "Entrenar en frío aumenta el riesgo de:", opciones: ["desgarro muscular", "mejor rendimiento", "mayor flexibilidad", "menor sudoración"], correcta: 0, dificultad: 3 },
      { enunciado: "Un plan de prevención de lesiones incluye:", opciones: ["técnica, carga progresiva, descanso, nutrición", "solo calentar", "solo estirar", "solo hidratar"], correcta: 0, dificultad: 3 },
      { enunciado: "El enfriamiento al final de la clase sirve para:", opciones: ["retirar con suavidad los desechos del músculo", "quitar tiempo de juego", "llegar más tarde a casa", "saltar la ducha"], correcta: 0, dificultad: 3 }
    ],
    retos: [
      { titulo: "Calentar antes de jugar", pasos: ["Trotar suave alrededor de la cancha", "Mover las articulaciones del cuerpo", "Hacer estiramientos lentos", "Repetir gestos del juego con suavidad"], dificultad: 1 },
      { titulo: "Atender una torcedura leve", pasos: ["Sentar al compañero lesionado", "Aplicar hielo envuelto en un paño", "Comprimir con un vendaje suave", "Elevar la extremidad afectada"], dificultad: 2 },
      { titulo: "Diseñar una rutina segura", pasos: ["Evaluar el estado físico previo", "Definir la carga semanal adecuada", "Incluir calentamiento y vuelta a la calma", "Reservar descanso y vigilar el dolor"], dificultad: 3 }
    ]
  },

  "educacion-fisica--salud-bienestar--c4": {
    id: "educacion-fisica--salud-bienestar--c4",
    nombre: "Fisiología del ejercicio y nutrición",
    preguntas: [
      { enunciado: "Durante el ejercicio intenso, el corazón:", opciones: ["late más rápido para bombear sangre", "late mucho más lento", "deja de bombear", "solo descansa"], correcta: 0, dificultad: 1 },
      { enunciado: "Al hacer deporte, la respiración:", opciones: ["se acelera para captar más oxígeno", "se detiene un rato", "no cambia nada", "se vuelve más lenta"], correcta: 0, dificultad: 1 },
      { enunciado: "La principal fuente de energía durante un ejercicio prolongado son:", opciones: ["los carbohidratos y las grasas", "las vitaminas", "el agua sola", "la fibra"], correcta: 0, dificultad: 1 },
      { enunciado: "El grupo muscular que más se usa al trotar es el de:", opciones: ["las piernas", "el cuello", "la lengua", "las manos"], correcta: 0, dificultad: 1 },
      { enunciado: "La frecuencia cardíaca máxima aproximada se calcula restando la edad de:", opciones: ["220", "200", "180", "240"], correcta: 0, dificultad: 2 },
      { enunciado: "La termorregulación durante el ejercicio se logra sobre todo con:", opciones: ["el sudor que refresca la piel", "la orina", "la saliva", "las lágrimas"], correcta: 0, dificultad: 2 },
      { enunciado: "El exceso de lactato en el músculo produce:", opciones: ["fatiga y sensación de ardor", "mejor resistencia", "más fuerza explosiva", "descanso profundo"], correcta: 0, dificultad: 2 },
      { enunciado: "La anemia por falta de hierro en deportistas jóvenes provoca:", opciones: ["cansancio y bajo rendimiento", "superpoderes", "más velocidad", "mejor sueño"], correcta: 0, dificultad: 2 },
      { enunciado: "El consumo máximo de oxígeno o VO2máx mide:", opciones: ["la resistencia aeróbica del deportista", "la fuerza de las manos", "la longitud del músculo", "el peso corporal"], correcta: 0, dificultad: 3 },
      { enunciado: "La nutrición del deportista aumenta especialmente en:", opciones: ["carbohidratos, según el volumen de carga", "azúcares refinados", "bebidas muy frías", "comida chatarra"], correcta: 0, dificultad: 3 },
      { enunciado: "La recuperación entre entrenamientos depende más de:", opciones: ["el sueño, la hidratación, la alimentación", "el color de las zapatillas", "la música del gimnasio", "la hora del día"], correcta: 0, dificultad: 3 },
      { enunciado: "El entrenamiento de resistencia produce adaptaciones como:", opciones: ["más capilares y mejor uso del oxígeno", "más lactato permanente", "menos capacidad pulmonar", "fuerza máxima sin técnica"], correcta: 0, dificultad: 3 }
    ],
    retos: [
      { titulo: "Controlar la frecuencia cardíaca", pasos: ["Tomar el pulso en la muñeca", "Contar las pulsaciones por quince segundos", "Multiplicar el conteo por cuatro", "Comparar con el rango de la edad"], dificultad: 1 },
      { titulo: "Montar la merienda del deportista", pasos: ["Elegir la fruta para la energía", "Añadir una proteína como el huevo", "Tomar agua antes de comer", "Registrar el horario de la merienda"], dificultad: 2 },
      { titulo: "Diseñar un plan de recuperación", pasos: ["Distribuir días de carga e intensidad", "Reservar sesiones suaves de movilidad", "Controlar la ingesta de agua", "Garantizar horas de sueño profundo", "Vigilar señales de fatiga por varios días"], dificultad: 3 }
    ]
  },

  "educacion-fisica--salud-bienestar--c5": {
    id: "educacion-fisica--salud-bienestar--c5",
    nombre: "Salud pública, dopaje y prevención",
    preguntas: [
      { enunciado: "La OMS recomienda que niños y adolescentes hagan al menos:", opciones: ["sesenta minutos de actividad física diaria", "ninguna actividad", "tres minutos por mes", "una hora al año"], correcta: 0, dificultad: 1 },
      { enunciado: "El sedentarismo aumenta el riesgo de:", opciones: ["enfermedades cardiovasculares y obesidad", "mejor rendimiento", "mayor estatura", "más flexibilidad articular"], correcta: 0, dificultad: 1 },
      { enunciado: "La OMS es la organización que:", opciones: ["vigila la salud pública en el mundo","gobierna el fútbol profesional","dirige los Juegos Olímpicos","regula la alimentación escolar"], correcta: 0, dificultad: 1 },
      { enunciado: "Las sustancias dopantes se prohíben porque:", opciones: ["dan ventaja injusta y dañan la salud", "mejoran el sueño profundo", "hacen más rápido al atleta", "suben el rendimiento con total seguridad"], correcta: 0, dificultad: 1 },
      { enunciado: "El control antidopaje se realiza mediante:", opciones: ["análisis de orina y de sangre", "peso y estatura", "pulso y temperatura", "exámenes visuales"], correcta: 0, dificultad: 2 },
      { enunciado: "Una campaña de salud pública que promueve el movimiento se dirige a:", opciones: ["toda la población de un territorio", "solo a atletas élite", "solo a adultos mayores", "solo al público del estadio"], correcta: 0, dificultad: 2 },
      { enunciado: "El índice de masa corporal se calcula dividiendo el peso entre:", opciones: ["la estatura al cuadrado", "la edad", "la talla en centímetros", "la frecuencia cardíaca"], correcta: 0, dificultad: 2 },
      { enunciado: "La prevención del consumo de sustancias en el deporte incluye:", opciones: ["educación, controles y alternativas recreativas", "castigos sin explicación", "exámenes de fuerza", "solo sanciones"], correcta: 0, dificultad: 2 },
      { enunciado: "Un programa poblacional de actividad física debe garantizar:", opciones: ["accesibilidad, variedad y seguridad", "solo gimnasios costosos", "competencias internacionales", "una sola disciplina"], correcta: 0, dificultad: 3 },
      { enunciado: "El tabaco y el alcohol dañan el rendimiento porque:", opciones: ["afectan el oxígeno, la coordinación, la recuperación", "mejoran el sueño profundo", "aumentan la fuerza máxima", "reducen sanamente las pulsaciones"], correcta: 0, dificultad: 3 },
      { enunciado: "La vacunación dentro de una comunidad deportiva protege contra:", opciones: ["enfermedades infecciosas prevenibles", "el dolor muscular tardío", "las lesiones ligamentarias", "la fatiga por entrenamiento"], correcta: 0, dificultad: 3 },
      { enunciado: "El triángulo de la salud en el deporte se compone de:", opciones: ["ejercicio, descanso, alimentación", "entrenamiento, doping, descanso", "competencia, espectáculo, negocio", "masa muscular, fuerza, técnica"], correcta: 0, dificultad: 3 }
    ],
    retos: [
      { titulo: "Verificar la regla de la OMS", pasos: ["Revisar los minutos activos de cada día", "Sumar la actividad en juegos y transporte", "Comparar el total con los sesenta minutos", "Ajustar la rutina si falta actividad"], dificultad: 1 },
      { titulo: "Diseñar una campaña de prevención", pasos: ["Identificar la población objetivo", "Definir el mensaje central", "Diseñar actividades prácticas accesibles", "Buscar alianzas con la escuela", "Difundir por varios canales", "Evaluar el impacto al terminar"], dificultad: 2 },
      { titulo: "Montar un programa escolar de actividad física", pasos: ["Diagnosticar el estado físico del grupo", "Fijar objetivos realistas por edad", "Planificar sesiones divertidas y variadas", "Garantizar espacio seguro e hidratación", "Controlar asistencia y participación", "Revaluar cada mes y ajustar el plan"], dificultad: 3 }
    ]
  },

  "educacion-fisica--deporte-contexto--c1": {
    id: "educacion-fisica--deporte-contexto--c1",
    nombre: "Juegos de mi barrio",
    preguntas: [
      { enunciado: "El tejo es el deporte nacional de:", opciones: ["Colombia", "Francia", "Japón", "Canadá"], correcta: 0, dificultad: 1 },
      { enunciado: "Para hacer girar el trompo usamos:", opciones: ["un hilo y un palo", "un palito solo", "los pies", "el codo"], correcta: 0, dificultad: 1 },
      { enunciado: "La cometa vuela por acción del:", opciones: ["viento", "agua", "hielo", "humo"], correcta: 0, dificultad: 1 },
      { enunciado: "En la carrera de encostalados los corredores van dentro de:", opciones: ["costales", "cajas", "llantas", "sillas"], correcta: 0, dificultad: 1 },
      { enunciado: "El juego de la yola se hace con:", opciones: ["un disco de dos conos unidos", "una pelota de fútbol", "un balón inflado grande", "una raqueta"], correcta: 0, dificultad: 2 },
      { enunciado: "La carrera de velas se gana:", opciones: ["sin que se apague la vela", "si la vela se quema", "corriendo de rodillas", "sin correr"], correcta: 0, dificultad: 2 },
      { enunciado: "La carrera de encostalados requiere:", opciones: ["saltar sin soltar el costal", "caminar de manos", "rodar por el piso", "andar en bicicleta"], correcta: 0, dificultad: 2 },
      { enunciado: "En el escondite un jugador hace de:", opciones: ["el que busca", "el que se esconde", "el que duerme", "el que llora"], correcta: 0, dificultad: 2 },
      { enunciado: "En el juego de la quema se busca:", opciones: ["tocar a los rivales con la pelota", "meter el balón en un arco", "dar la vuelta a la cancha", "saltar una cuerda"], correcta: 0, dificultad: 3 },
      { enunciado: "La patineta de ruedas nos ayuda a:", opciones: ["deslizarnos por el barrio", "nadar", "correr maratones", "trepar árboles"], correcta: 0, dificultad: 3 },
      { enunciado: "Los juegos de patio se practican principalmente:", opciones: ["en el colegio y en el barrio", "solo en gimnasios cerrados", "en piscinas", "en canchas grandes"], correcta: 0, dificultad: 3 },
      { enunciado: "Una regla de seguridad al jugar en la calle es:", opciones: ["no correr entre carros en marcha", "lanzar pelotas al tránsito", "cruzar con los ojos cerrados", "empujar a otros"], correcta: 0, dificultad: 3 }
    ],
    retos: [
      { titulo: "Jugar con la yola", pasos: ["Sujetar la yola con la mano", "Impulsarla con un giro de muñeca", "Recogerla al aire con cuidado"], dificultad: 1 },
      { titulo: "Hacer volar una cometa", pasos: ["Escoger un día con viento", "Soltar la cometa con cuidado", "Correr un poco para elevarla"], dificultad: 2 },
      { titulo: "Jugar al tejo con seguridad", pasos: ["Marcar la línea de lanzamiento", "Girar el cuerpo al lanzar la teja", "Alejarse de la zona de rebote"], dificultad: 3 }
    ]
  },

  "educacion-fisica--deporte-contexto--c2": {
    id: "educacion-fisica--deporte-contexto--c2",
    nombre: "Recreación activa en el tiempo libre",
    preguntas: [
      { enunciado: "La recreación activa significa usar el tiempo libre:", opciones: ["moviendo el cuerpo", "sin hacer nada", "dormir toda la tarde", "viendo televisión"], correcta: 0, dificultad: 1 },
      { enunciado: "Un lugar para la recreación activa en Bogotá es:", opciones: ["un parque público", "una oficina privada", "un garaje", "una cocina"], correcta: 0, dificultad: 1 },
      { enunciado: "El ciclismo urbano ayuda a:", opciones: ["desplazarse sanamente", "dormir más", "engordar", "cansarse lento"], correcta: 0, dificultad: 1 },
      { enunciado: "Una salida al campo con la familia puede incluir:", opciones: ["caminar por senderos", "dormir bajo la mesa", "esperar sentados", "ver televisión"], correcta: 0, dificultad: 1 },
      { enunciado: "El senderismo se practica:", opciones: ["caminando por la montaña", "dentro de una cueva", "en una autopista cerrada", "en una piscina"], correcta: 0, dificultad: 2 },
      { enunciado: "Para hacer deporte sin gastar mucho conviene:", opciones: ["jugar con la vecindad", "comprar muchos aparatos", "viajar muy lejos", "esperar sentados"], correcta: 0, dificultad: 2 },
      { enunciado: "La natación en piscina requiere:", opciones: ["supervisión de un adulto", "nadie alrededor", "tirarse en piscina vacía", "entrar de cabeza siempre"], correcta: 0, dificultad: 2 },
      { enunciado: "El juego libre al aire libre mejora:", opciones: ["el cuerpo, el ánimo, la amistad", "el sueño nocturno solo", "la vista de cerca", "el oído izquierdo"], correcta: 0, dificultad: 2 },
      { enunciado: "Una alternativa activa para el domingo en familia es:", opciones: ["ir en bicicleta al parque", "ver películas todo el día", "quedarse en cama", "jugar con el celular"], correcta: 0, dificultad: 3 },
      { enunciado: "¿Qué plan usa más el tiempo libre de manera activa?", opciones: ["una tarde en el parque con amigos", "ver televisión en la cama", "jugar videojuegos sentado", "dormir sin horario"], correcta: 0, dificultad: 3 },
      { enunciado: "Un club recreativo de barrio se caracteriza por:", opciones: ["dar actividades seguras a muchos niños", "cobrar precios altos", "exigir uniforme costoso", "solo para atletas"], correcta: 0, dificultad: 3 },
      { enunciado: "Un plan de tiempo libre debe incluir estudio, recreación:", opciones: ["en horarios organizados", "sin ninguna hora fija", "sin nunca dormir", "sin ningún permiso"], correcta: 0, dificultad: 3 }
    ],
    retos: [
      { titulo: "Organizar un paseo en bicicleta", pasos: ["Revisar frenos y ruedas", "Ponerse el casco bien puesto", "Salir por rutas conocidas", "Llevar una botella de agua"], dificultad: 1 },
      { titulo: "Jugar al aire libre con amigos", pasos: ["Elegir un lugar libre de carros", "Explicar el juego a todos", "Definir equipos con cuidado", "Respetar las reglas acordadas"], dificultad: 2 },
      { titulo: "Planear una semana activa", pasos: ["Escribir los días disponibles", "Elegir actividades variadas", "Sumar momentos de descanso", "Compartir el plan con los amigos"], dificultad: 3 }
    ]
  },

  "educacion-fisica--deporte-contexto--c3": {
    id: "educacion-fisica--deporte-contexto--c3",
    nombre: "Deportes en Colombia y sus figuras",
    preguntas: [
      { enunciado: "Mariana Pajón ganó medalla de oro olímpico en el deporte de:", opciones: ["BMX, ciclismo de pequeñas ruedas", "natación sincronizada", "fútbol femenino", "taekwondo"], correcta: 0, dificultad: 1 },
      { enunciado: "Caterine Ibargüen ganó oro olímpico en Río 2016 en:", opciones: ["salto triple", "maratón", "boxeo", "judo"], correcta: 0, dificultad: 1 },
      { enunciado: "El primer oro olímpico de Colombia, Sídney 2000, llegó con:", opciones: ["María Isabel Urrutia, levantamiento de pesas", "una nadadora de fondo", "un ciclista de pista", "un remero de banca"], correcta: 0, dificultad: 1 },
      { enunciado: "La liga profesional colombiana de fútbol la organiza:", opciones: ["Dimayor", "FIBA", "WADA", "UNESCO"], correcta: 0, dificultad: 1 },
      { enunciado: "Egan Bernal hizo historia en 2019 al ganar:", opciones: ["el Tour de Francia", "el Mundial de atletismo", "el oro olímpico en gimnasia", "el Mundial de boxeo"], correcta: 0, dificultad: 2 },
      { enunciado: "Nairo Quintana se destacó al ganar en 2014 la carrera de:", opciones: ["el Giro de Italia", "la Vuelta a España", "el Tour de Francia", "el Campeonato Nacional"], correcta: 0, dificultad: 2 },
      { enunciado: "El estadio emblemático de la Selección Colombia en Bogotá se llama:", opciones: ["El Campín", "El Metropolitano", "Alberto Grisales", "Pascual Guerrero"], correcta: 0, dificultad: 2 },
      { enunciado: "El deporte nacional de Colombia por ley es:", opciones: ["el tejo", "el ajedrez", "el sóftbol", "el tenis de mesa"], correcta: 0, dificultad: 2 },
      { enunciado: "Pajón, Ibargüen y Urrutia comparten que sus oros fueron en:", opciones: ["pruebas individuales", "deportes colectivos", "ciclismo de montaña", "natación en aguas abiertas"], correcta: 0, dificultad: 3 },
      { enunciado: "James Rodríguez ganó la bota de oro en el Mundial de Brasil 2014 por:", opciones: ["ser el máximo goleador del torneo", "ser el mejor arquero del torneo", "ser el director técnico", "ser el árbitro principal"], correcta: 0, dificultad: 3 },
      { enunciado: "El Ministerio del Deporte de Colombia reemplazó a Coldeportes en:", opciones: ["2019", "2003", "1986", "1978"], correcta: 0, dificultad: 3 },
      { enunciado: "El Comité Olímpico Colombiano cumple el rol de:", opciones: ["coordinar la participación olímpica del país", "dirigir la liga de fútbol profesional", "administrar impuestos nacionales", "organizar las elecciones"], correcta: 0, dificultad: 3 }
    ],
    retos: [
      { titulo: "Contar el deporte colombiano", pasos: ["Escoger una figura deportiva del país", "Leer sus logros y la disciplina", "Anotar el año de sus títulos", "Compartir el dato en clase"], dificultad: 1 },
      { titulo: "Montar un torneo de barrio", pasos: ["Definir el deporte a jugar", "Inscribir equipos con reglas claras", "Armar el calendario de partidos", "Premiar la participación por igual"], dificultad: 2 },
      { titulo: "Elaborar un proyecto del deporte nacional", pasos: ["Investigar el origen del tejo", "Describir las reglas del pagoachera", "Recolectar fotos o entrevistas", "Presentar conclusiones al grupo"], dificultad: 3 }
    ]
  },

  "educacion-fisica--deporte-contexto--c4": {
    id: "educacion-fisica--deporte-contexto--c4",
    nombre: "Sistema deportivo colombiano",
    preguntas: [
      { enunciado: "La Ley 181 de 1995 en Colombia regula:", opciones: ["el deporte, la educación física, la recreación, el tiempo libre", "la minería en páramos", "la banca comercial", "las importaciones"], correcta: 0, dificultad: 1 },
      { enunciado: "El Ministerio del Deporte de Colombia fue creado en:", opciones: ["2019", "1995", "1968", "2005"], correcta: 0, dificultad: 1 },
      { enunciado: "El Comité Olímpico Colombiano hace parte del movimiento liderado por:", opciones: ["el Comité Olímpico Internacional", "la FIFA", "la WADA", "la ONU"], correcta: 0, dificultad: 1 },
      { enunciado: "Las federaciones deportivas nacionales están vigiladas por:", opciones: ["el Ministerio del Deporte", "la Superintendencia de Salud", "la ANDI", "la DIAN"], correcta: 0, dificultad: 1 },
      { enunciado: "Coldeportes fue reemplazado institucionalmente por:", opciones: ["el Ministerio del Deporte", "la Dimayor", "la Federación Colombiana de Fútbol", "el Ministerio de Educación"], correcta: 0, dificultad: 2 },
      { enunciado: "El IDRD de Bogotá se encarga de:", opciones: ["dirigir el deporte, la recreación, el tiempo libre en la ciudad", "regular el tráfico", "cobrar impuestos", "administrar hospitales"], correcta: 0, dificultad: 2 },
      { enunciado: "El deporte profesional en Colombia se organiza en clubes afiliados a:", opciones: ["las federaciones nacionales correspondientes", "las alcaldías locales", "los colegios privados", "los medios de comunicación"], correcta: 0, dificultad: 2 },
      { enunciado: "Los Juegos Nacionales de Colombia reúnen a deportistas de:", opciones: ["los departamentos y el Distrito Capital", "un solo municipio", "un solo colegio", "las universidades privadas"], correcta: 0, dificultad: 2 },
      { enunciado: "El deporte paralímpico en Colombia está articulado al:", opciones: ["Comité Paralímpico Colombiano", "Comité Olímpico Internacional solo", "Ministerio de Salud", "Ministerio de Educación"], correcta: 0, dificultad: 3 },
      { enunciado: "La política pública del deporte busca:", opciones: ["masificar el acceso, detectar y formar deportistas", "cobrar impuestos", "restringir la práctica en colegios", "solo patrocinar el fútbol"], correcta: 0, dificultad: 3 },
      { enunciado: "Un club deportivo en Colombia se constituye legalmente ante:", opciones: ["la cámara de comercio, con reconocimiento deportivo", "el Congreso de la República", "la Superintendencia de Sociedades exclusivamente", "la DIAN sin más registro"], correcta: 0, dificultad: 3 },
      { enunciado: "La formación del deportista de alto rendimiento se apoya en:", opciones: ["los centros de entrenamiento, las ligas, las federaciones", "el Congreso de la República", "las salas de cine comerciales", "el Ministerio de Salud"], correcta: 0, dificultad: 3 }
    ],
    retos: [
      { titulo: "Identificar a un actor del sistema deportivo", pasos: ["Elegir un actor como liga o federación", "Revisar sus funciones según la ley", "Anotar su sede y sus competencias", "Explicar el rol con un ejemplo", "Presentar al grupo"], dificultad: 1 },
      { titulo: "Tramitar el reconocimiento deportivo de un club", pasos: ["Constituir legalmente el club", "Afiliarlo a la federación correspondiente", "Solicitar el reconocimiento deportivo", "Registrar la planilla ante la entidad", "Habilitar jugadores para la liga"], dificultad: 2 },
      { titulo: "Diseñar una política deportiva municipal", pasos: ["Diagnosticar la oferta recreativa por comunas", "Definir población y metas", "Asignar escenarios y presupuesto", "Crear un plan de mantenimiento de canchas", "Evaluar el impacto con indicadores"], dificultad: 3 }
    ]
  },

  "educacion-fisica--deporte-contexto--c5": {
    id: "educacion-fisica--deporte-contexto--c5",
    nombre: "Economía y política del deporte",
    preguntas: [
      { enunciado: "La industria del deporte mueve la economía mediante:", opciones: ["empleo, turismo, publicidad, derechos de televisión", "solo estadios", "solo boletería", "ningún ingreso"], correcta: 0, dificultad: 1 },
      { enunciado: "Un gran evento deportivo como el Tour de Francia beneficia principalmente a:", opciones: ["la ciudad sede, el comercio, el turismo, la imagen país", "solo a los corredores", "solo al comité organizador", "solo a la prensa escrita"], correcta: 0, dificultad: 1 },
      { enunciado: "Los derechos de transmisión de un partido corresponden a:", opciones: ["la venta de la señal para verlo por televisión o plataforma", "la venta de boletas en taquilla", "el arriendo del estadio", "el seguro deportivo del club"], correcta: 0, dificultad: 1 },
      { enunciado: "La institución pública que conduce la política deportiva en Colombia es:", opciones: ["el Ministerio del Deporte", "la DIAN", "el Consejo de Estado", "la Procuraduría"], correcta: 0, dificultad: 1 },
      { enunciado: "El fútbol profesional colombiano se financia alrededor de:", opciones: ["venta de jugadores, derechos de TV, patrocinio, taquilla", "exportación de café", "venta de petróleo", "arriendo de oficinas"], correcta: 0, dificultad: 2 },
      { enunciado: "Un gobierno municipal promueve el deporte mediante:", opciones: ["inversión en escenarios, programas, formadores", "vender los parques", "cobrar impuestos a los niños", "quitar la clase de educación física"], correcta: 0, dificultad: 2 },
      { enunciado: "El patrocinio de un deportista es:", opciones: ["un apoyo económico o en especie a cambio de imagen", "un préstamo bancario obligatorio", "un impuesto personal", "una multa federativa"], correcta: 0, dificultad: 2 },
      { enunciado: "La Ley del Deporte en Colombia reserva recursos del impuesto al consumo para:", opciones: ["financiar programas de deporte y recreación", "el pago de la deuda externa", "la venta de licores", "el mantenimiento de carreteras"], correcta: 0, dificultad: 2 },
      { enunciado: "La corrupción en el deporte suele manifestarse en:", opciones: ["manejo irregular de recursos, fichajes dudosos, amaños de partidos", "entrenamientos abiertos al público", "concursos públicos de becas", "transparencia federativa anual"], correcta: 0, dificultad: 3 },
      { enunciado: "El fair play financiero busca:", opciones: ["equilibrar ingresos y gastos de los clubes", "aumentar sueldos sin control", "eliminar la competencia", "impedir la venta de jugadores"], correcta: 0, dificultad: 3 },
      { enunciado: "Una política de deporte comunitario prioriza:", opciones: ["acceso, equidad de género, inclusión", "a los deportistas élite", "el lucro de la empresa privada", "la exclusión por nivel económico"], correcta: 0, dificultad: 3 },
      { enunciado: "Un efecto económico típico de un megaevento en la ciudad sede es:", opciones: ["construcción de escenarios y empleo temporal", "quita permanente de impuestos", "abolición del deporte", "menos turismo garantizado"], correcta: 0, dificultad: 3 }
    ],
    retos: [
      { titulo: "Analizar el negocio de un club de fútbol", pasos: ["Identificar los ingresos del club", "Clasificar entradas: TV, marketing, transferencias, taquilla", "Estudiar el costo salarial y operativo", "Proponer una estrategia de sostenibilidad", "Presentar conclusiones a la asamblea"], dificultad: 1 },
      { titulo: "Diseñar una política de deporte equitativo", pasos: ["Diagnosticar la oferta recreativa por comunas", "Priorizar población joven, niñas, adultos mayores", "Destinar recursos a comunas más pobres", "Reformar escenarios seguros", "Crear programas de formadores", "Medir participación y ajustarla cada año"], dificultad: 2 },
      { titulo: "Evaluar el impacto económico de un evento", pasos: ["Estimar el número de visitantes esperados", "Medir ocupación hotelera y comercio local", "Registrar la inversión pública realizada", "Comparar ingresos frente a costos", "Identificar el legado tangible e intangible", "Publicar un informe transparente"], dificultad: 3 }
    ]
  }
};
