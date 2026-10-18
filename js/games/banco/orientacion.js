// js/games/banco/orientacion.js
// Banco de Orientación Educativa y proyecto de vida: autoconocimiento y emociones,
// proyecto de vida, convivencia y hábitos de estudio, cuidado integral y prevención,
// y orientación vocacional, para los cinco ciclos.
// Enfoque laico y formativo, anclado en normas y entidades colombianas (MEN, ICBF,
// Ley 115 de 1994, Ley 1620 de 2013, Decreto 1965 de 2013, Ley 1616 de 2013).

export const BANCO = {
  "orientacion--autoconocimiento--c1": {
    id: "orientacion--autoconocimiento--c1",
    nombre: "Cómo soy y qué me gusta hacer",
    preguntas: [
      { enunciado: "¿Qué es lo que más te gusta hacer en el recreo?", opciones: ["Lo que yo elijo y me divierte", "Lo que nadie quiere hacer", "Una tarea muy larga", "Dormir en la sala"], correcta: 0, dificultad: 1 },
      { enunciado: "Contar tu nombre, tu edad y tu color favorito es contar...", opciones: ["Cómo eres por fuera y por dentro", "La hora del almuerzo", "El nombre de tu colegio", "Una cuenta difícil"], correcta: 0, dificultad: 1 },
      { enunciado: "¿Para qué sirve saber qué cosas se te facilitan?", opciones: ["Para elegir juegos y tareas con calma", "Para hablar de más", "Para copiar a un amigo", "Para no estudiar nunca"], correcta: 0, dificultad: 1 },
      { enunciado: "En clase de arte dibujas muy bien. ¿Qué dices de ti?", opciones: ["Que dibujar es algo que se me da bien", "Que no sé hacer nada", "Que odio todos los dibujos", "Que debo copiar siempre"], correcta: 0, dificultad: 2 },
      { enunciado: "Un amigo corre más rápido que tú. ¿Qué está bien pensar?", opciones: ["Que cada niño es bueno en algo distinto", "Que soy el peor del curso", "Que nunca voy a jugar", "Que él no merece correr"], correcta: 0, dificultad: 2 },
      { enunciado: "Te toca presentarte ante un curso nuevo. ¿Qué cuentas?", opciones: ["Tu nombre y algo que te gusta hacer", "Los errores de otros niños", "Que no quieres estar ahí", "Un secreto de tu casa"], correcta: 0, dificultad: 2 },
      { enunciado: "Dos niños tienen gustos diferentes. ¿Qué muestran?", opciones: ["Que cada persona es única y especial", "Que uno está equivocado", "Que hay que pelear", "Que los gustos no importan"], correcta: 0, dificultad: 3 },
      { enunciado: "¿Por qué es bueno conocer tus cosas buenas?", opciones: ["Para confiar en ti cuando algo cuesta", "Para creerte mejor que todos", "Para no ayudar a nadie", "Para burlarte de otros"], correcta: 0, dificultad: 3 },
      { enunciado: "Si algo no se te da todavía, lo justo es...", opciones: ["Seguir intentando y pedir ayuda tranquila", "Rendirse y no volver a intentar", "Echar la culpa al profe", "Decir que eso es tonto"], correcta: 0, dificultad: 3 }
    ],
    retos: [
      { titulo: "Presentarme al curso", descripcion: "Ordena los pasos para saludar y presentarte ante el curso nuevo.", pasos: ["Decir mi nombre", "Contar lo que me gusta", "Saludar con una sonrisa"], dificultad: 1 },
      { titulo: "Guardar mi dibujo", descripcion: "Ordena qué hacer con tu dibujo apenas lo terminas.", pasos: ["Poner mi nombre", "Guardarlo sin doblar", "Mostrarlo con calma"], dificultad: 2 },
      { titulo: "No rendirme", descripcion: "Ordena qué hacer cuando algo te cuesta mucho.", pasos: ["Respirar e intentar de nuevo", "Pedir ayuda a la profe", "Alegrarme por mi esfuerzo"], dificultad: 3 }
    ]
  },

  "orientacion--autoconocimiento--c2": {
    id: "orientacion--autoconocimiento--c2",
    nombre: "Reconocer y nombrar emociones",
    preguntas: [
      { enunciado: "¿Cómo se llama cuando algo te da mucho gusto?", opciones: ["Alegría", "Sueño", "Hambre", "Frío"], correcta: 0, dificultad: 1 },
      { enunciado: "Cuando algo te asusta, tu cuerpo puede...", opciones: ["Sentir el corazón muy rápido", "Dar ganas de volar", "Ponerse colorado de frío", "Dejarte dormido"], correcta: 0, dificultad: 1 },
      { enunciado: "La rabia es una emoción que...", opciones: ["Todos sentimos a veces", "Solo sienten los niños malos", "No existe de verdad", "Nunca pasa en el colegio"], correcta: 0, dificultad: 1 },
      { enunciado: "Un amigo llora porque se quedó sin su borrador. ¿Qué haces?", opciones: ["Me acerco y lo escucho tranquilo", "Me río de su cara", "Lo dejo solo todo el día", "Le grito que pare"], correcta: 0, dificultad: 2 },
      { enunciado: "Sientes muchas ganas de gritar en clase. ¿Qué te ayuda?", opciones: ["Respirar lento hasta calmarte", "Gritar más fuerte ya", "Tirar el cuaderno al piso", "Empujar a un compañero"], correcta: 0, dificultad: 2 },
      { enunciado: "¿Qué quiere decir ponerle nombre a lo que sientes?", opciones: ["Entender tu emoción para manejarla", "Olvidar todo lo que pasa", "Contar un chiste del salón", "Dormir más temprano"], correcta: 0, dificultad: 2 },
      { enunciado: "Estás alegre y triste al mismo tiempo. ¿Es normal?", opciones: ["Sí, podemos sentir varias cosas juntas", "No, eso es imposible", "Significa que estás enfermo", "Solo les pasa a los grandes"], correcta: 0, dificultad: 3 },
      { enunciado: "¿Por qué un mismo hecho saca emociones distintas?", opciones: ["Porque cada niño lo entiende a su manera", "Porque todos somos iguales", "Porque nadie siente nada", "Porque es obligatorio sentir"], correcta: 0, dificultad: 3 },
      { enunciado: "La pena de un amigo te hace pensar que...", opciones: ["Se puede acompañar sin arreglarlo todo", "Hay que dejarlo solo siempre", "Debe esconder lo que siente", "Las penas no existen"], correcta: 0, dificultad: 3 }
    ],
    retos: [
      { titulo: "Calmar mis ganas de gritar", descripcion: "Ordena los pasos para no gritar cuando te enojas.", pasos: ["Parar y respirar hondo", "Contar despacio hasta diez", "Hablar bajo con calma"], dificultad: 1 },
      { titulo: "Acompañar a un amigo triste", descripcion: "Ordena cómo actuar con un compañero que está triste.", pasos: ["Sentarme cerca de él", "Escucharlo sin reírme", "Ofrecerle jugar luego"], dificultad: 2 },
      { titulo: "Entender lo que siento", descripcion: "Ordena los pasos para saber qué emoción tienes.", pasos: ["Pienso qué emoción tengo", "Digo por qué apareció", "Elijo algo que me calme", "Lo cuento a quien confío"], dificultad: 3 }
    ]
  },

  "orientacion--autoconocimiento--c3": {
    id: "orientacion--autoconocimiento--c3",
    nombre: "Fortalezas, debilidades y autoconcepto",
    preguntas: [
      { enunciado: "¿Qué es el autoconcepto?", opciones: ["La imagen que tienes de ti mismo", "La nota del último examen", "El listado de tus amigos", "La hora de entrada al colegio"], correcta: 0, dificultad: 1 },
      { enunciado: "Una fortaleza personal es...", opciones: ["Algo que haces bien y te ayuda a avanzar", "Un problema que no tiene arreglo", "Una regla del manual de convivencia", "Un juego de la tienda escolar"], correcta: 0, dificultad: 1 },
      { enunciado: "Las áreas por mejorar son...", opciones: ["Cosas que aún te cuestan y puedes trabajar", "Fallas que te hacen peor persona", "Motivos para dejar de intentarlo", "Enfermedades del cuerpo"], correcta: 0, dificultad: 1 },
      { enunciado: "Reconocer tus intereses sirve para...", opciones: ["Elegir actividades que te motivan de verdad", "Copiar lo que hacen todos", "Evitar cualquier esfuerzo", "Ganar discusiones del curso"], correcta: 0, dificultad: 1 },
      { enunciado: "En un trabajo de grupo te toca exponer y te cuesta hablar. Esto es...", opciones: ["Un área por mejorar que puedes entrenar", "Una prueba de que no sirves", "Una falta que te quita puntos", "Un juego del salón"], correcta: 0, dificultad: 2 },
      { enunciado: "Tu compañero es bueno para los números y tú para escribir. ¿Qué muestran?", opciones: ["Que cada uno tiene fortalezas distintas", "Que uno vale más que el otro", "Que no pueden trabajar juntos", "Que el curso se equivocó"], correcta: 0, dificultad: 2 },
      { enunciado: "Un estudiante anota sus logros de la semana. ¿Para qué lo hace?", opciones: ["Para ver sus avances y ajustar lo que falla", "Para presumir frente a los demás", "Para no volver a estudiar", "Para ganar un premio seguro"], correcta: 0, dificultad: 2 },
      { enunciado: "¿Por qué el autoconcepto puede cambiar con el tiempo?", opciones: ["Porque nuevas experiencias muestran otras capacidades", "Porque nadie puede conocerse nunca", "Porque el colegio lo decide por ti", "Porque las notas lo fijan siempre"], correcta: 0, dificultad: 3 },
      { enunciado: "Confundir un área por mejorar con una falla personal lleva a...", opciones: ["Rendirse cuando aún se puede avanzar", "Mejorar más rápido de lo normal", "Descubrir nuevas fortalezas", "Equilibrar el autoconcepto"], correcta: 0, dificultad: 3 },
      { enunciado: "Una amiga dice «soy mala para todo» porque perdió un partido. ¿Qué evalúas?", opciones: ["Que generaliza un mal momento como si fuera todo", "Que dice la verdad sobre sí misma", "Que debe dejar los deportes ya", "Que ganar no importa para nada"], correcta: 0, dificultad: 3 }
    ],
    retos: [
      { titulo: "Descubrir mis fortalezas", descripcion: "Ordena los pasos para reconocer en qué eres bueno.", pasos: ["Listo lo que hago bien sin pensar mucho", "Pido a dos amigos un ejemplo", "Marco lo que puedo mejorar", "Elijo una fortaleza para mostrar"], dificultad: 2 },
      { titulo: "Cambiar mi autoconcepto", descripcion: "Ordena cómo reemplazar una idea negativa sobre ti.", pasos: ["Noto una idea negativa sobre mí", "Busco pruebas a favor y en contra", "La cambio por una más justa", "Verifico el cambio la próxima semana"], dificultad: 3 }
    ]
  },

  "orientacion--autoconocimiento--c4": {
    id: "orientacion--autoconocimiento--c4",
    nombre: "Autoestima, autocuidado y gestión emocional",
    preguntas: [
      { enunciado: "La autoestima es...", opciones: ["El valor y el aprecio que te reconoces a ti mismo", "La cantidad de amigos que tienes", "El promedio de tus notas", "La ropa que usas cada día"], correcta: 0, dificultad: 1 },
      { enunciado: "El autocuidado emocional significa...", opciones: ["Reconocer y manejar lo que sientes sin dañarte", "Evitar toda emoción incómoda", "Fingir estar siempre alegre", "Culpar a otros de tu enojo"], correcta: 0, dificultad: 1 },
      { enunciado: "Una señal física de ansiedad puede ser...", opciones: ["El corazón acelerado o el estómago apretado", "Ganas de dormir ocho horas", "Hambre a media mañana", "Sed después de correr"], correcta: 0, dificultad: 1 },
      { enunciado: "El canal de ayuda escolar del colegio sirve para...", opciones: ["Buscar orientación confidencial cuando algo te preocupa", "Reclamar notas más altas", "Escaparte de las clases", "Comprar en la tienda escolar"], correcta: 0, dificultad: 1 },
      { enunciado: "Frente a un examen que te da nervios, la gestión emocional te sugiere...", opciones: ["Planear el estudio y respirar antes de empezar", "No estudiar porque ya te asusta", "Copiar para quitar el miedo", "Faltar al colegio ese día"], correcta: 0, dificultad: 2 },
      { enunciado: "Un estudiante baja su autoestima cuando...", opciones: ["Se compara todo el tiempo con los demás", "Reconoce sus logros pequeños", "Pide ayuda a tiempo", "Celebra su propio esfuerzo"], correcta: 0, dificultad: 2 },
      { enunciado: "La diferencia entre tristeza y depresión es que...", opciones: ["La tristeza pasa y la depresión persistente pide ayuda profesional", "Son exactamente la misma cosa", "La depresión dura cinco minutos", "Solo los adultos se deprimen"], correcta: 0, dificultad: 2 },
      { enunciado: "Las redes sociales afectan la autoestima cuando...", opciones: ["El valor propio queda atado a la aprobación de otros", "Solo sirven para hacer tareas del colegio", "Ayudan a conocer gente de otros países", "Se usan menos de una hora al día"], correcta: 0, dificultad: 3 },
      { enunciado: "¿Por qué el autocuidado no es egoísmo?", opciones: ["Porque cuidar tu bienestar te permite acompañar a otros", "Porque nadie más debe ayudarte", "Porque evita toda responsabilidad", "Porque el colegio no existe"], correcta: 0, dificultad: 3 },
      { enunciado: "Un amigo cuenta que se hace daño a sí mismo. La reacción responsable es...", opciones: ["Acompañarlo y avisar a un adulto de confianza del colegio", "Guardar el secreto para siempre", "Reírte para quitarle pena", "Decirle que exagera mucho"], correcta: 0, dificultad: 3 }
    ],
    retos: [
      { titulo: "Plan de autocuidado semanal", descripcion: "Ordena los pasos para armar un plan de autocuidado.", pasos: ["Anoto qué me estresa en la semana", "Elijo dos actividades que me calman", "Programo horarios para dormir bien", "Reviso cómo me sentí al final"], dificultad: 2 },
      { titulo: "Pedir ayuda en el colegio", descripcion: "Ordena cómo pedir ayuda cuando algo te supera.", pasos: ["Reconozco que algo me supera", "Busco al orientador o director de grupo", "Cuento lo que pasa con calma", "Acuerdo un plan de seguimiento", "Pido apoyo a mi familia también"], dificultad: 3 }
    ]
  },

  "orientacion--autoconocimiento--c5": {
    id: "orientacion--autoconocimiento--c5",
    nombre: "Identidad, autoconcepto y salud mental",
    preguntas: [
      { enunciado: "La Ley 1616 de 2013 en Colombia reconoce la salud mental como...", opciones: ["Parte esencial del derecho a la salud, con promoción y atención", "Un lujo solo para clínicas privadas", "Un asunto de la policía escolar", "Un tema de una sola religión"], correcta: 0, dificultad: 1 },
      { enunciado: "La línea de atención del ICBF para niños y adolescentes se conoce como...", opciones: ["La línea 106", "La línea de emergencias médicas", "La línea de atención a mujeres", "La línea de la policía nacional"], correcta: 0, dificultad: 1 },
      { enunciado: "El gobierno escolar en Colombia se organiza según...", opciones: ["El Decreto 1860 de 1994 y la Ley 115 de 1994", "El Código de Comercio", "Las leyes de tránsito", "El reglamento de la tienda escolar"], correcta: 0, dificultad: 1 },
      { enunciado: "La identidad en la adolescencia se refiere a...", opciones: ["La construcción de quién eres y qué valoras", "El número de documentos de identidad", "La moda que sigue el curso", "La nota final de grado once"], correcta: 0, dificultad: 1 },
      { enunciado: "El autoconcepto en la adolescencia implica...", opciones: ["Distinguir el yo real del yo ideal y aceptarse en proceso", "Crear un personaje falso para las redes", "Ignorar por completo las críticas", "Compararse hasta sentirse mejor"], correcta: 0, dificultad: 2 },
      { enunciado: "En un colegio público, la ruta para acompañar malestar emocional suele iniciar con...", opciones: ["El director de grupo o el orientador escolar", "La rectoría sin informar a nadie", "Un compañero de confianza", "El vigilante del colegio"], correcta: 0, dificultad: 2 },
      { enunciado: "La Ley 1616 crea en el sector educativo...", opciones: ["Planes para promover la salud mental y detectar señales de riesgo", "Exámenes que retiran estudiantes del colegio", "La obligación de medicar dentro de clase", "La eliminación de la orientación escolar"], correcta: 0, dificultad: 2 },
      { enunciado: "El estrés escolar crónico puede manifestarse con...", opciones: ["Problemas de sueño, irritabilidad o baja concentración", "Más energía y mejores notas siempre", "Ninguna señal en el cuerpo", "Solo una gripe pasajera"], correcta: 0, dificultad: 2 },
      { enunciado: "¿Qué limita el cuidado de la salud mental de un joven en Colombia?", opciones: ["El acceso desigual a servicios y el estigma social", "La simple existencia de la Ley 1616", "El número de colegios del país", "La abundancia de psicólogos rurales"], correcta: 0, dificultad: 3 },
      { enunciado: "Identificar señales de alerta en un amigo busca ante todo...", opciones: ["Activar la red de apoyo a tiempo sin asumir el rol de terapeuta", "Diagnosticar un trastorno mental", "Guardar el secreto por lealtad", "Tratarlo uno mismo con remedios"], correcta: 0, dificultad: 3 },
      { enunciado: "El gobierno escolar aporta a la salud mental porque...", opciones: ["Da voz a los estudiantes para prevenir situaciones de riesgo", "Reemplaza la atención psicológica profesional", "Decide quién merece recibir ayuda", "Elimina el manual de convivencia"], correcta: 0, dificultad: 3 },
      { enunciado: "Una visión responsable de la salud mental en grado once entiende que...", opciones: ["Pedir ayuda profesional es fortaleza, no debilidad ni fracaso", "Aguantar todo solo demuestra madurez", "La depresión es solo flojera para estudiar", "El malestar nunca afecta el rendimiento"], correcta: 0, dificultad: 3 }
    ],
    retos: [
      { titulo: "Ruta personal de salud mental", descripcion: "Ordena la ruta personal para cuidar tu salud mental.", pasos: ["Reconozco señales de desgaste en mí", "Hablo con el orientador o una línea de ayuda", "Busco apoyo en mi familia", "Sigo las recomendaciones profesionales", "Reviso mis avances cada mes"], dificultad: 2 },
      { titulo: "Detectar y acompañar a un amigo", descripcion: "Ordena cómo acompañar a un amigo en riesgo.", pasos: ["Noto un cambio persistente en su ánimo", "Lo escucho sin juzgar ni diagnosticar", "Aviso a un adulto de confianza del colegio", "Sigo la ruta de atención escolar", "Me mantengo cerca sin reemplazar al profesional", "Cuido también mi propio bienestar"], dificultad: 3 }
    ]
  },

  "orientacion--proyecto-de-vida--c1": {
    id: "orientacion--proyecto-de-vida--c1",
    nombre: "Mis metas pequeñas",
    preguntas: [
      { enunciado: "¿Qué es una meta pequeña?", opciones: ["Algo bueno que quieres lograr prontito", "Un sueño imposible de gigante", "Un castigo del colegio", "Una cuenta difícil"], correcta: 0, dificultad: 1 },
      { enunciado: "Para lograr una meta necesitas...", opciones: ["Dar pasitos y practicar un poco cada día", "Esperar que otro lo haga por ti", "Olvidarte de ella ya", "Gritar muy fuerte"], correcta: 0, dificultad: 1 },
      { enunciado: "Guardar tu trabajo en el cuaderno te ayuda a...", opciones: ["Ver cuánto avanzaste cada día", "Perder las hojas sueltas", "Llegar tarde a clases", "Copiar a un compañero"], correcta: 0, dificultad: 1 },
      { enunciado: "Quieres aprender a amarrar tus zapatos. ¿Qué haces primero?", opciones: ["Practicar despacio todos los días", "Esperar que mamá lo haga siempre", "Tirar los zapatos lejos", "Llorar hasta que salga"], correcta: 0, dificultad: 2 },
      { enunciado: "Te sale un dibujo que te costaba. ¿Qué dices?", opciones: ["Que con práctica pude lograrlo", "Que nunca podré dibujar", "Que fue pura suerte", "Que fue culpa del profe"], correcta: 0, dificultad: 2 },
      { enunciado: "Tu meta de la semana es ordenar tu cuarto. ¿Cómo empiezas?", opciones: ["Guardando primero los juguetes grandes", "Escondiendo el desorden bajo la cama", "Dejando todo igual otra vez", "Pidiendo que otros lo hagan"], correcta: 0, dificultad: 2 },
      { enunciado: "Dos niños quieren la misma meta. ¿Qué cambia?", opciones: ["Cada uno puede llegar a su propio ritmo", "Que solo uno merece lograrla", "Que ninguno debe intentarla", "Que hay que pelear por ella"], correcta: 0, dificultad: 3 },
      { enunciado: "¿Por qué una meta pequeña te acerca a una grande?", opciones: ["Porque los pasos chicos suman un gran avance", "Porque las metas grandes no existen", "Porque todo llega sin esfuerzo", "Porque esperar es lo mismo"], correcta: 0, dificultad: 3 },
      { enunciado: "Si un día no cumples tu meta, lo bueno es...", opciones: ["Volver a intentar mañana con calma", "Rendirte para siempre ya", "Culpar a todo el salón", "Borrarla del cuaderno"], correcta: 0, dificultad: 3 }
    ],
    retos: [
      { titulo: "Mi primera meta", descripcion: "Ordena los pasos para lograr tu primera meta.", pasos: ["Decir qué quiero lograr", "Dar un pasito hoy", "Marcar que sí lo hice"], dificultad: 1 },
      { titulo: "Ordenar mi mochila", descripcion: "Ordena los pasos para dejar lista la mochila.", pasos: ["Guardar mis cuadernos", "Meter mi lonchera", "Cerrar la mochila"], dificultad: 2 },
      { titulo: "Lograr algo difícil", descripcion: "Ordena los pasos para lograr algo que cuesta.", pasos: ["Pensar en qué quiero lograr", "Practicar un poco cada día", "Pedir ayuda si me atoro"], dificultad: 3 }
    ]
  },

  "orientacion--proyecto-de-vida--c2": {
    id: "orientacion--proyecto-de-vida--c2",
    nombre: "Sueños y metas de mi año",
    preguntas: [
      { enunciado: "Un sueño de año es...", opciones: ["Algo bueno que te gustaría lograr este año", "Un deseo que ya se cumplió", "Una regla del curso", "Un juego de la tienda"], correcta: 0, dificultad: 1 },
      { enunciado: "Para cumplir un sueño necesitas...", opciones: ["Poner metas chicas y pasos claros", "Solo desearlo y esperar", "Comprar todo lo nuevo", "Contarlo y olvidarlo"], correcta: 0, dificultad: 1 },
      { enunciado: "Una meta de notas se logra...", opciones: ["Estudiando un poco cada día", "Copiando en el examen", "Faltando cuando llueve", "Durmiendo en la clase"], correcta: 0, dificultad: 1 },
      { enunciado: "Quieres leer un libro del año. ¿Qué paso eliges?", opciones: ["Leer unas páginas cada noche", "Dejarlo cerrado sobre la mesa", "Pedir que otro lo lea", "Venderlo en el mercado"], correcta: 0, dificultad: 2 },
      { enunciado: "Tu sueño es jugar en el equipo del colegio. ¿Qué ayuda?", opciones: ["Practicar y cuidar el buen trato", "Pelear con el profe de deportes", "Nunca ir a entrenar", "Esperar que te llamen"], correcta: 0, dificultad: 2 },
      { enunciado: "Si cumples una meta, está bien...", opciones: ["Celebrar y pensar en la siguiente", "Ponerte a llorar", "Borrar todos tus sueños", "Reírte de los demás"], correcta: 0, dificultad: 2 },
      { enunciado: "¿Por qué las metas se anotan en un lugar visible?", opciones: ["Para no olvidarlas y revisar el avance", "Para presumir con los vecinos", "Para que las borre el viento", "Para regalarlas a otro"], correcta: 0, dificultad: 3 },
      { enunciado: "Un amigo dice que sus sueños son imposibles. ¿Qué piensas?", opciones: ["Que puede dividirlos en pasos más chicos", "Que tiene razón en rendirse", "Que los sueños no sirven", "Que debe soñar menos ya"], correcta: 0, dificultad: 3 },
      { enunciado: "Dos sueños tuyos se contradicen. ¿Qué haces?", opciones: ["Ordenar cuál va primero con ayuda", "Elegir uno al azar", "Abandonar los dos siempre", "Dejar que decida otro"], correcta: 0, dificultad: 3 }
    ],
    retos: [
      { titulo: "Mi lista de metas", descripcion: "Ordena los pasos para armar tu lista de metas del año.", pasos: ["Escribo tres metas del año", "Marco una que sea fácil primero", "Le pongo fecha a cada una", "Cuento mi avance con calma"], dificultad: 2 },
      { titulo: "De un sueño a un plan", descripcion: "Ordena los pasos para convertir un sueño en un plan.", pasos: ["Digo qué sueño tengo", "Pienso pasos chicos para lograrlo", "Elijo cuándo practicar cada paso", "Reviso si voy cumpliendo"], dificultad: 3 }
    ]
  },

  "orientacion--proyecto-de-vida--c3": {
    id: "orientacion--proyecto-de-vida--c3",
    nombre: "Proyecto personal: metas y pasos",
    preguntas: [
      { enunciado: "El proyecto de vida personal es...", opciones: ["Un plan que orienta tus metas y decisiones", "Una tarea solo del colegio", "Un regalo de cumpleaños", "Un partido de fútbol"], correcta: 0, dificultad: 1 },
      { enunciado: "Una meta SMART es específica cuando...", opciones: ["Dice con claridad qué se quiere lograr", "Se deja al azar y a la suerte", "La inventa tu compañero", "No tiene ninguna fecha"], correcta: 0, dificultad: 1 },
      { enunciado: "La dimensión personal del proyecto de vida toca...", opciones: ["Tu salud, tus gustos y tu forma de ser", "El presupuesto del país", "El clima de tu región", "La lista del mercado"], correcta: 0, dificultad: 1 },
      { enunciado: "Un paso bien puesto de una meta debe ser...", opciones: ["Realista según tu tiempo y tus medios", "Imposible desde el principio", "Secreto para que nadie lo sepa", "Diferente cada hora del día"], correcta: 0, dificultad: 1 },
      { enunciado: "La diferencia entre un sueño y una meta es que...", opciones: ["La meta tiene pasos y fecha; el sueño es un deseo", "Son exactamente la misma cosa", "El sueño es siempre más importante", "La meta nunca se cumple"], correcta: 0, dificultad: 2 },
      { enunciado: "Te propones mejorar en inglés. ¿Qué acción SMART eliges?", opciones: ["Practicar quince minutos cada día por un mes", "Estudiar cuando me acuerde mucho", "Decir que seré bilingüe ya", "Copiar el libro entero en un día"], correcta: 0, dificultad: 2 },
      { enunciado: "Revisar tu proyecto de vida cada cierto tiempo sirve para...", opciones: ["Ajustar metas que ya no tienen sentido", "Ratificar que nunca cambias", "Olvidar los errores del pasado", "Evitar toda decisión futura"], correcta: 0, dificultad: 2 },
      { enunciado: "Una meta sin fecha límite suele...", opciones: ["Quedarse sin acción porque pierde urgencia", "Cumplirse siempre más rápido", "Ser imposible de olvidar", "Funcionar igual que con fecha"], correcta: 0, dificultad: 3 },
      { enunciado: "Poner demasiadas metas a la vez puede...", opciones: ["Desgastar tus fuerzas y hacer que abandones", "Garantizar que cumples todas ya", "Mejorar tu concentración real", "Organizar mejor cada día tuyo"], correcta: 0, dificultad: 3 },
      { enunciado: "Aunque una meta sea realista, no sirve si...", opciones: ["No la conviertes en acciones concretas del día", "Está por escrito con una fecha", "La compartes con alguien de confianza", "La revisas cada cierto tiempo"], correcta: 0, dificultad: 3 }
    ],
    retos: [
      { titulo: "Meta SMART", descripcion: "Ordena los pasos para escribir una meta SMART.", pasos: ["Elijo con claridad qué quiero lograr", "Defino cómo voy a medirlo", "Fijo una fecha realista", "Programo mis acciones semanales"], dificultad: 2 },
      { titulo: "Revisar mi proyecto", descripcion: "Ordena los pasos para revisar tu proyecto personal.", pasos: ["Leo mis metas escritas", "Mido qué cumplí hasta hoy", "Analizo por qué fallé en algo", "Ajusto una meta y su plan"], dificultad: 3 }
    ]
  },

  "orientacion--proyecto-de-vida--c4": {
    id: "orientacion--proyecto-de-vida--c4",
    nombre: "Proyecto de vida y toma de decisiones",
    preguntas: [
      { enunciado: "La toma de decisiones responsable implica...", opciones: ["Evaluar opciones y sus consecuencias antes de elegir", "Decir que sí a todo por impulso", "Copiar lo que decidió otro", "Evitar siempre tener que elegir"], correcta: 0, dificultad: 1 },
      { enunciado: "Las metas a corto plazo se cumplen en...", opciones: ["Días o semanas próximas", "Muchos años sin fecha", "Solo la vida adulta", "Un minuto exacto"], correcta: 0, dificultad: 1 },
      { enunciado: "Un proyecto de vida equilibrado integra...", opciones: ["Lo personal, lo familiar, lo académico y lo social", "Solo las notas del colegio", "Únicamente el dinero futuro", "Solo los juegos del tiempo libre"], correcta: 0, dificultad: 1 },
      { enunciado: "La autoevaluación en el proyecto de vida sirve para...", opciones: ["Reconocer logros y errores para rectificar el rumbo", "Justificar todos los fracasos", "Compararse y sentirse mejor", "Dejar todo tal como está"], correcta: 0, dificultad: 1 },
      { enunciado: "Ante un dilema, pensar «¿y luego qué?» ayuda a...", opciones: ["Ver las consecuencias a futuro de cada opción", "Decidir más rápido sin pensar nada", "Ignorar a los demás afectados", "Quedarse sin elegir nunca"], correcta: 0, dificultad: 2 },
      { enunciado: "Cambiar una meta a mitad de camino es...", opciones: ["Válido cuando aprendiste algo nuevo sobre ti", "Una prueba de fracaso total", "Una falta contra el manual", "Algo que no debe pasar jamás"], correcta: 0, dificultad: 2 },
      { enunciado: "La presión del grupo afecta tus decisiones cuando...", opciones: ["Eliges por el gusto de otros y no por convicción propia", "Escuchas y decides con calma", "Consultas a un adulto de confianza", "Reflexionas sobre tus valores"], correcta: 0, dificultad: 2 },
      { enunciado: "Una decisión madura no depende solo del deseo del momento, sino de...", opciones: ["Tus valores y las consecuencias previstas", "La información que ignoras", "La opinión de la moda", "El miedo a quedarte solo"], correcta: 0, dificultad: 3 },
      { enunciado: "Priorizar metas exige renunciar a...", opciones: ["Algunas cosas buenas para enfocarte en lo importante", "Todas tus metas para siempre", "El descanso de toda la semana", "Completar el colegio"], correcta: 0, dificultad: 3 },
      { enunciado: "El miedo a equivocarse bloquea decisiones porque...", opciones: ["Convierte el error en castigo en vez de aprendizaje", "Demuestra que nadie se equivoca jamás", "Prueba que elegir no trae consecuencias", "Confirma que la pereza es la culpa"], correcta: 0, dificultad: 3 }
    ],
    retos: [
      { titulo: "Decidir con método", descripcion: "Ordena los pasos para tomar una decisión con método.", pasos: ["Nombro la decisión que debo tomar", "Listo opciones posibles y reales", "Pienso consecuencias de cada una", "Elijo según mis valores", "Reviso el resultado después"], dificultad: 2 },
      { titulo: "Equilibrar mi proyecto", descripcion: "Ordena cómo equilibrar las áreas de tu proyecto de vida.", pasos: ["Ordeno mis metas por importancia", "Miro si queda tiempo para estudiar", "Reconozco las que no dependen de mí", "Ajusto los plazos de una meta", "Escribo el nuevo plan revisado"], dificultad: 3 }
    ]
  },

  "orientacion--proyecto-de-vida--c5": {
    id: "orientacion--proyecto-de-vida--c5",
    nombre: "Proyecto de vida, plan profesional y coherencia",
    preguntas: [
      { enunciado: "La prueba Saber 11 en Colombia evalúa...", opciones: ["Competencias de los estudiantes al finalizar la media", "Solo la memoria de fórmulas", "La asistencia diaria al colegio", "Las notas de la primaria"], correcta: 0, dificultad: 1 },
      { enunciado: "El ICFES es la entidad que...", opciones: ["Diseña y aplica las pruebas de calidad educativa en Colombia", "Administra los hospitales del país", "Otorga los registros mercantiles", "Controla el tránsito municipal"], correcta: 0, dificultad: 1 },
      { enunciado: "El SENA ofrece principalmente...", opciones: ["Formación técnica y tecnológica para el trabajo", "Títulos de medicina y de derecho", "Solo cursos deportivos", "Educación preescolar gratuita"], correcta: 0, dificultad: 1 },
      { enunciado: "El registro calificado de una institución de educación superior lo lleva...", opciones: ["El Ministerio de Educación Nacional", "La inspección de policía del municipio", "Una empresa privada del barrio", "La tienda del colegio"], correcta: 0, dificultad: 1 },
      { enunciado: "El formato ICFES de una pregunta de proyecto de vida pide...", opciones: ["Leer el caso, analizar opciones y marcar una sola respuesta", "Escribir un cuento inventado", "Marcar varias respuestas válidas", "Dejar la pregunta en blanco"], correcta: 0, dificultad: 2 },
      { enunciado: "La tarea de reflexión sobre el plan de vida busca...", opciones: ["Que argumentes tus decisiones con coherencia", "Que memorices una sola profesión", "Que copies la vida de un famoso", "Que elijas sin pensar en nada"], correcta: 0, dificultad: 2 },
      { enunciado: "Una ruta técnica o tecnológica tras el bachillerato...", opciones: ["Forma para el trabajo pronto sin cerrar el paso a la universidad", "Impide siempre estudiar más adelante", "No entrega ningún título válido", "Solo sirve en el extranjero"], correcta: 0, dificultad: 2 },
      { enunciado: "La beca estudiantil en Colombia suele...", opciones: ["Apoyar económicamente a quien cumple requisitos de ingreso", "Regalar dinero sin ningún trámite", "Reemplazar la prueba Saber 11", "Exigir una afiliación política"], correcta: 0, dificultad: 2 },
      { enunciado: "La coherencia de un proyecto de vida se nota cuando...", opciones: ["Las metas, las acciones y los valores apuntan al mismo rumbo", "Cada decisión contradice tus valores", "Todo se deja al azar cada semana", "Nada se revisa ni se planea"], correcta: 0, dificultad: 3 },
      { enunciado: "Elegir carrera solo por el salario futuro es riesgoso porque...", opciones: ["Ignora intereses y aptitudes que sostienen la vocación", "Garantiza la felicidad del estudiante", "Es el único criterio válido hoy", "Asegura el éxito sin esfuerzo"], correcta: 0, dificultad: 3 },
      { enunciado: "Un examen de selección de una institución de educación superior, como el FES, sirve para...", opciones: ["Evaluar requisitos de ingreso a un programa concreto", "Reemplazar el registro calificado", "Cancelar la prueba Saber 11", "Definir la matrícula del colegio"], correcta: 0, dificultad: 3 },
      { enunciado: "Una crítica válida a comparar colegios solo por el puntaje Saber 11 es que...", opciones: ["El puntaje no mide contexto, esfuerzo ni proyecto personal", "Es el único dato del que fiarse siempre", "No depende en nada del colegio", "Lo inventa cada estudiante del curso"], correcta: 0, dificultad: 3 }
    ],
    retos: [
      { titulo: "Plan posgrado realista", descripcion: "Ordena los pasos para armar un plan de estudios posterior.", pasos: ["Defino mi meta profesional con claridad", "Investigo rutas técnica, tecnológica y universitaria", "Consulto requisitos y registro calificado", "Reviso costos y opciones de beca", "Comparo y elijo una ruta coherente", "Pongo fechas y primeros pasos"], dificultad: 2 },
      { titulo: "Argumentar mi decisión", descripcion: "Ordena cómo argumentar una decisión de tu futuro.", pasos: ["Elijo una duda sobre mi futuro", "Reúno información de fuentes confiables", "Identifico mis intereses y aptitudes", "Pongo mis valores sobre la mesa", "Contrasto las opciones con sus consecuencias", "Redacto una decisión coherente y la defiendo"], dificultad: 3 }
    ]
  },

  "orientacion--convivencia-academica--c1": {
    id: "orientacion--convivencia-academica--c1",
    nombre: "Reglas del curso y buen trato",
    preguntas: [
      { enunciado: "Las reglas del salón sirven para...", opciones: ["Que todos podamos convivir tranquilos", "Molestar a los niños buenos", "Llenar el cuaderno de tareas", "Castigar al más pequeño"], correcta: 0, dificultad: 1 },
      { enunciado: "El buen trato se nota cuando...", opciones: ["Hablamos con respeto en el salón", "Gritamos para ganar", "Empujamos en la fila", "Nos reímos de un amigo"], correcta: 0, dificultad: 1 },
      { enunciado: "Pedir permiso para tomar algo es...", opciones: ["Una forma de respetar a los demás", "Una pérdida de tiempo", "Un juego del patio", "Una orden obligatoria"], correcta: 0, dificultad: 1 },
      { enunciado: "Un compañero habla mientras la profe explica. ¿Qué haces?", opciones: ["Le pido en voz baja que escuche", "También hablo más fuerte", "Le tiro un borrador", "Me pongo a gritar"], correcta: 0, dificultad: 2 },
      { enunciado: "Llegas tarde y la puerta está cerrada. ¿Qué es lo correcto?", opciones: ["Saludar y pedir entrar con calma", "Empujar la puerta fuerte", "Sentarme sin decir nada", "Echarle la culpa a otro"], correcta: 0, dificultad: 2 },
      { enunciado: "En la fila todos empujan. ¿Qué ayuda a convivir?", opciones: ["Esperar tu turno sin empujar", "Pasar al frente a empujones", "Salir corriendo del salón", "Pelear con el primero"], correcta: 0, dificultad: 2 },
      { enunciado: "¿Por qué una regla acordada se cumple más?", opciones: ["Porque todos ayudaron a ponerla", "Porque el profe grita más", "Porque es más larga", "Porque no tiene sentido"], correcta: 0, dificultad: 3 },
      { enunciado: "Un amigo rompe una regla y nadie lo ve. El buen trato pide...", opciones: ["Tratarlo con respeto, sin burlarte", "Reírte y señalarlo mucho", "Castigarlo tú mismo ya", "Dejar de hablarle siempre"], correcta: 0, dificultad: 3 },
      { enunciado: "Dos reglas del salón parecen chocar. ¿Qué se puede hacer?", opciones: ["Hablar con la profe para ordenarlas", "Romper las dos ya mismo", "Fingir no saberlas nunca", "Elegir solo la divertida"], correcta: 0, dificultad: 3 }
    ],
    retos: [
      { titulo: "Formar la fila", descripcion: "Ordena los pasos para formar la fila en calma.", pasos: ["Escuchar la señal", "Ponerme en mi lugar", "Esperar sin empujar"], dificultad: 1 },
      { titulo: "Pedir el turno", descripcion: "Ordena los pasos para participar sin interrumpir.", pasos: ["Levantar mi mano", "Escuchar al compañero", "Hablar cuando me toca"], dificultad: 2 },
      { titulo: "Resolver sin pelear", descripcion: "Ordena cómo resolver un enojo sin pelear.", pasos: ["Parar y respirar", "Decir con calma qué pasó", "Buscar un acuerdo juntos"], dificultad: 3 }
    ]
  },

  "orientacion--convivencia-academica--c2": {
    id: "orientacion--convivencia-academica--c2",
    nombre: "Cómo organizar mi tiempo de estudio",
    preguntas: [
      { enunciado: "Hacer la tarea primero sirve para...", opciones: ["Terminar tranquilo y luego jugar", "Olvidarte de estudiar", "Llegar tarde a casa", "Copiar todo después"], correcta: 0, dificultad: 1 },
      { enunciado: "Un lugar ordenado para estudiar ayuda a...", opciones: ["Concentrarte mejor un rato", "Perder el tiempo", "Dormir en la mesa", "Distraerte más"], correcta: 0, dificultad: 1 },
      { enunciado: "Guardar los cuadernos en su sitio evita...", opciones: ["Perder trabajos y llegar sin nada", "Aprender demasiado rápido", "Llegar temprano al colegio", "Hacer amigos nuevos"], correcta: 0, dificultad: 1 },
      { enunciado: "Tienes tarea y también entrenamiento. ¿Qué haces?", opciones: ["Hacer la tarea antes de entrenar", "Dejar la tarea para el domingo", "Irme a jugar sin hacer nada", "Copiar la tarea en el salón"], correcta: 0, dificultad: 2 },
      { enunciado: "Para no olvidar una fecha de examen, sirve...", opciones: ["Anotarla en la agenda cada semana", "Confiar solo en la memoria", "Borrar toda la agenda", "Esperar que te lo recuerden"], correcta: 0, dificultad: 2 },
      { enunciado: "Estudias mejor si...", opciones: ["Haces pausas cortas y guardas el celular", "Estudias hasta la madrugada", "Ves televisión mientras lees", "Dejas todo para el final"], correcta: 0, dificultad: 2 },
      { enunciado: "¿Por qué un horario simple se cumple más?", opciones: ["Porque es claro y fácil de seguir", "Porque lo impone otro curso", "Porque es muy largo y confuso", "Porque nadie lo revisa"], correcta: 0, dificultad: 3 },
      { enunciado: "Un amigo nunca termina la tarea. ¿Qué le sugieres?", opciones: ["Dividirla en partes y poner una hora", "Que la copie de otro niño", "Que no la haga nunca", "Que espere al final del año"], correcta: 0, dificultad: 3 },
      { enunciado: "Si tu horario no funciona, lo maduro es...", opciones: ["Cambiarlo y probar una forma nueva", "Abandonar todo el estudio", "Culpar al profesor siempre", "Hacer exactamente igual otra vez"], correcta: 0, dificultad: 3 }
    ],
    retos: [
      { titulo: "Mi hora de tarea", descripcion: "Ordena los pasos para estudiar tu hora de tarea.", pasos: ["Elijo una hora fija", "Guardo el celular lejos", "Termino una tarea", "Reviso qué falta mañana"], dificultad: 2 },
      { titulo: "Organizar mis días", descripcion: "Ordena los pasos para organizar tus días de estudio.", pasos: ["Miro qué tengo que entregar", "Ordeno primero lo más difícil", "Dejo pausas cortas", "Reviso al final si cumplí"], dificultad: 3 }
    ]
  },

  "orientacion--convivencia-academica--c3": {
    id: "orientacion--convivencia-academica--c3",
    nombre: "Hábitos de estudio y trabajo en equipo",
    preguntas: [
      { enunciado: "Un hábito de estudio es...", opciones: ["Una práctica constante que mejora tu aprendizaje", "Una excusa para no estudiar", "Un juego del tiempo libre", "Una regla del manual escolar"], correcta: 0, dificultad: 1 },
      { enunciado: "El trabajo en equipo pide antes que nada...", opciones: ["Acordar roles y metas claras desde el inicio", "Que uno solo haga todo el trabajo", "Dejar todo para el último día", "Copiar el trabajo de otro curso"], correcta: 0, dificultad: 1 },
      { enunciado: "Tomar apuntes mientras el profesor explica sirve para...", opciones: ["Registrar ideas clave y repasarlas después", "Llenar el cuaderno sin ningún sentido", "Distraer a los demás compañeros", "Evitar tener que escuchar"], correcta: 0, dificultad: 1 },
      { enunciado: "La técnica de repasar el tema en varias sesiones se llama...", opciones: ["Estudio distribuido", "Estudio de última hora", "Copiar y pegar", "Dormir la materia"], correcta: 0, dificultad: 1 },
      { enunciado: "En un trabajo grupal un compañero no aporta. Lo adecuado es...", opciones: ["Hablarlo con respeto y repartir de nuevo las tareas", "Hacer todo tú sin decir absolutamente nada", "Sacarlo del grupo a gritos fuertes", "Dejarlo sin nota por venganza"], correcta: 0, dificultad: 2 },
      { enunciado: "Organizar un cronograma de estudio implica...", opciones: ["Distribuir temas y tiempos según la fecha de entrega", "Dejar todo al azar según el día", "Estudiar solo el tema que es fácil", "Copiar el de un compañero listo"], correcta: 0, dificultad: 2 },
      { enunciado: "El mapa conceptual es útil porque...", opciones: ["Ordena ideas y muestra relaciones entre conceptos", "Solo llena de dibujos el cuaderno", "Reemplaza por completo leer el texto", "Asegura siempre la mejor nota"], correcta: 0, dificultad: 2 },
      { enunciado: "Un equipo con buenas notas pero sin cooperación real muestra...", opciones: ["Aprendizaje individual que no garantiza un trabajo conjunto", "Un equipo perfecto en todo momento", "Que el estudio personal no importa", "Que el profesor se equivocó mucho"], correcta: 0, dificultad: 3 },
      { enunciado: "El estudio pasivo, que es solo releer, es débil porque...", opciones: ["No obliga a evocar y aplicar lo aprendido", "Consume mucho tiempo valioso", "Es el método más difícil de todos", "Produce las mejores notas siempre"], correcta: 0, dificultad: 3 },
      { enunciado: "¿Por qué una meta de estudio debe poder medirse?", opciones: ["Porque sin medir no sabes si avanzas de verdad", "Porque medir siempre cansa mucho", "Porque las notas no importan nada", "Porque así copias más rápido"], correcta: 0, dificultad: 3 }
    ],
    retos: [
      { titulo: "Preparar un trabajo en equipo", descripcion: "Ordena los pasos para preparar un trabajo en equipo.", pasos: ["Leemos juntos las instrucciones", "Repartimos roles por fortalezas", "Ponemos una fecha de entrega interna", "Unimos y revisamos el producto"], dificultad: 2 },
      { titulo: "Plan de estudio semanal", descripcion: "Ordena los pasos para armar tu plan de estudio semanal.", pasos: ["Listo mis evaluaciones de la semana", "Calculo el tiempo real que necesito", "Distribuyo temas en varios días", "Dejo un espacio para repasar"], dificultad: 3 }
    ]
  },

  "orientacion--convivencia-academica--c4": {
    id: "orientacion--convivencia-academica--c4",
    nombre: "Rutas de atención del convivencia escolar",
    preguntas: [
      { enunciado: "La Ley 1620 de 2013 en Colombia regula...", opciones: ["La convivencia escolar y los mecanismos para proteger derechos", "El tránsito de la ciudad", "El comercio en la tienda escolar", "El pago de las matrículas privadas"], correcta: 0, dificultad: 1 },
      { enunciado: "Los cuatro componentes de la Ruta de Atención Integral son promoción, prevención, atención y...", opciones: ["Seguimiento", "Castigo", "Matrícula", "Recreo"], correcta: 0, dificultad: 1 },
      { enunciado: "Según el Decreto 1965 de 2013, las situaciones en el colegio se clasifican en tipo...", opciones: ["I, II y III según su gravedad", "A, B y C por el curso", "Alta y baja por el barrio", "Uno y dos por la fecha"], correcta: 0, dificultad: 1 },
      { enunciado: "El Comité Escolar de Convivencia se encarga de...", opciones: ["Vigilar y dar seguimiento a las acciones de convivencia escolar", "Organizar solo las fiestas del colegio", "Definir el menú de la cafetería", "Contratar a los docentes nuevos"], correcta: 0, dificultad: 1 },
      { enunciado: "Una situación Tipo I en el colegio corresponde a...", opciones: ["Un conflicto leve que se maneja con pedagogía y acuerdo", "Un delito con lesiones graves", "Un caso que exige denuncia penal", "Una falta que solo ve la rectoría"], correcta: 0, dificultad: 2 },
      { enunciado: "La situación Tipo II es más grave que la Tipo I porque...", opciones: ["Puede causar daño repetido o ausentismo y pide protocolos", "Es apenas un malentendido leve y rápido", "No requiere informar a nadie del caso", "Se resuelve sola sin ningún seguimiento"], correcta: 0, dificultad: 2 },
      { enunciado: "Una situación Tipo III se caracteriza por...", opciones: ["Ser posible delito contra la integridad y obligar a denunciar", "Ser un juego brusco entre amigos", "No afectar a ninguna persona", "Resolverse con una simple llamada"], correcta: 0, dificultad: 2 },
      { enunciado: "¿Por qué la mediación se privilegia en las situaciones Tipo I?", opciones: ["Porque forma ciudadanía y resuelve el conflicto con diálogo", "Porque castiga más rápido a los culpables", "Porque evita documentar lo que sucedió", "Porque el comité decide sin escuchar"], correcta: 0, dificultad: 3 },
      { enunciado: "La diferencia entre promoción y prevención en la ruta es que...", opciones: ["La promoción fortalece factores protectores y la prevención actúa antes del daño", "Son dos nombres para la misma acción", "La promoción llega tarde y la prevención a tiempo", "Ninguna de las dos se aplica en el colegio"], correcta: 0, dificultad: 3 },
      { enunciado: "Ocultar un caso de acoso para «no complicar» vulnera la ruta porque...", opciones: ["Impide el protocolo y pone en riesgo a la víctima", "Acelera la justicia dentro del colegio", "Protege mejor al estudiante afectado", "Fortalece la convivencia de todos"], correcta: 0, dificultad: 3 }
    ],
    retos: [
      { titulo: "Aplicar la ruta de atención", descripcion: "Ordena los pasos para aplicar la ruta de atención integral.", pasos: ["Clasifico la situación según su tipo", "Informo al comité y a las familias", "Activo el protocolo de atención", "Registro acuerdos y medidas", "Hago seguimiento al caso"], dificultad: 2 },
      { titulo: "Analizar un caso de convivencia", descripcion: "Ordena los pasos para analizar un caso de convivencia escolar.", pasos: ["Leo los hechos sin emitir juicios", "Identifico el tipo de situación", "Reviso la norma que la regula", "Propongo acciones según la ruta", "Argumento por qué protege los derechos"], dificultad: 3 }
    ]
  },

  "orientacion--convivencia-academica--c5": {
    id: "orientacion--convivencia-academica--c5",
    nombre: "Mediación escolar y liderazgo",
    preguntas: [
      { enunciado: "El personero estudiantil en Colombia es...", opciones: ["Un estudiante elegido para defender los derechos de los alumnos", "El rector del colegio público", "Un padre de familia voluntario", "Un inspector enviado por la alcaldía"], correcta: 0, dificultad: 1 },
      { enunciado: "El consejo de estudiantes busca...", opciones: ["Organizar la participación y el liderazgo de los cursos", "Reemplazar las funciones de los profesores", "Cancelar el manual de convivencia", "Decidir las notas de cada materia"], correcta: 0, dificultad: 1 },
      { enunciado: "La mediación entre pares es...", opciones: ["Un estudiante capacitado que ayuda a dos partes a dialogar sin imponer", "Un castigo puesto por el rector del colegio", "Una pelea que gana siempre el más fuerte", "Un trámite reservado solo para adultos"], correcta: 0, dificultad: 1 },
      { enunciado: "El liderazgo pedagógico en el aula se apoya sobre todo en...", opciones: ["El ejemplo, la escucha y la responsabilidad compartida", "El grito y la autoridad impuesta", "La popularidad en las redes sociales", "El castigo aplicado de inmediato"], correcta: 0, dificultad: 1 },
      { enunciado: "La diferencia entre un mediador y un juez escolar es que el mediador...", opciones: ["Facilita que las partes lleguen a su propio acuerdo", "Imponga siempre la sanción final", "Decida los culpables sin escuchar a nadie", "Actúe a escondidas del manual de convivencia"], correcta: 0, dificultad: 2 },
      { enunciado: "El personero puede actuar legítimamente cuando...", opciones: ["Recibe un reclamo y lo canaliza por la ruta del gobierno escolar", "Castiga por su cuenta a un compañero", "Divulga datos privados sin ningún permiso", "Sustituye al comité de convivencia escolar"], correcta: 0, dificultad: 2 },
      { enunciado: "Un buen acuerdo de mediación se sostiene porque...", opciones: ["Lo construyeron las partes y es posible de cumplir", "Lo firmó solo un estudiante del curso", "Lo impuso la mayoría del grupo", "No se puede revisar en ningún momento"], correcta: 0, dificultad: 2 },
      { enunciado: "La veeduría estudiantil aporta al colegio porque...", opciones: ["Da seguimiento a los compromisos de convivencia y a los recursos", "Reemplaza por completo a las autoridades", "Se queda solo en quejas sin propuesta", "Oculta los problemas reales del curso"], correcta: 0, dificultad: 2 },
      { enunciado: "El liderazgo sin escucha falla porque...", opciones: ["Ignora necesidades reales y termina imponiéndose al grupo", "Escucha demasiado y siempre decide rápido", "Fortalece en todo momento la convivencia", "Evita cualquier responsabilidad compartida"], correcta: 0, dificultad: 3 },
      { enunciado: "La mediación pierde validez si el mediador...", opciones: ["Toma partido por una de las dos partes", "Guarda la confidencialidad del proceso", "Respeta el acuerdo que se firmó", "Mantiene una postura neutral"], correcta: 0, dificultad: 3 },
      { enunciado: "La participación estudiantil fortalece la convivencia porque...", opciones: ["Vincula a los estudiantes con las normas que ayudan a crear", "Elimina por completo cualquier conflicto", "Quita autoridad a docentes y directivos", "Decide las notas de todas las materias"], correcta: 0, dificultad: 3 },
      { enunciado: "Un proyecto de liderazgo escolar se evalúa mejor cuando...", opciones: ["Mide efectos reales en convivencia y ajusta según la retroalimentación", "Presume resultados sin ningún dato", "Busca solo la fama de sus autores", "Evita informar al gobierno escolar"], correcta: 0, dificultad: 3 }
    ],
    retos: [
      { titulo: "Mediar un conflicto entre compañeros", descripcion: "Ordena los pasos para mediar un conflicto entre compañeros.", pasos: ["Escucho a cada parte por separado", "Reúno a las dos con reglas de respeto", "Ayudo a nombrar el problema real", "Pregunto opciones de solución", "Acuerdo pasos que ambos cumplen", "Hago seguimiento al pacto"], dificultad: 2 },
      { titulo: "Plan de gobierno estudiantil", descripcion: "Ordena los pasos para construir un plan de gobierno estudiantil.", pasos: ["Leo las necesidades reales del colegio", "Priorizo dos o tres problemas", "Diseño acciones con roles claros", "Defino metas medibles", "Presento el plan al consejo y la comunidad", "Evalúo resultados cada mes"], dificultad: 3 }
    ]
  },

  "orientacion--cuidado-integral--c1": {
    id: "orientacion--cuidado-integral--c1",
    nombre: "Rutas del cuidado personal",
    preguntas: [
      { enunciado: "Lavarse las manos antes de comer cuida tu...", opciones: ["Salud y evita los gérmenes", "Ropa nueva del colegio", "Cuaderno bien limpio", "Hora de la salida"], correcta: 0, dificultad: 1 },
      { enunciado: "Dormir bien por la noche ayuda a...", opciones: ["Llegar con energía al colegio", "Llegar tarde todos los días", "Olvidar todas las clases", "Sentirse muy cansado"], correcta: 0, dificultad: 1 },
      { enunciado: "Guardar tu botella de agua en la mochila evita...", opciones: ["Quedarte sin beber en el día", "Aprender a nadar rápido", "Perder el bus de la casa", "Hacer toda la tarea"], correcta: 0, dificultad: 1 },
      { enunciado: "Un compañero te ofrece algo raro que no conoces. ¿Qué haces?", opciones: ["Digo que no y aviso a un adulto", "Lo pruebo para ver qué pasa", "Me lo guardo sin decir nada", "Lo reparto a otros niños"], correcta: 0, dificultad: 2 },
      { enunciado: "Al cruzar la calle hacia el colegio, lo seguro es...", opciones: ["Mirar a los lados y usar el paso peatonal", "Correr sin mirar alrededor", "Cruzar jugando con los amigos", "Empujar al que va lento"], correcta: 0, dificultad: 2 },
      { enunciado: "Si te sientes mal en clase, lo correcto es...", opciones: ["Decirlo al profesor o a un adulto de confianza", "Aguantar todo sin avisar nada", "Salir sin decir a dónde vas", "Reírte para que no te noten"], correcta: 0, dificultad: 2 },
      { enunciado: "¿Por qué es importante contarle a un adulto lo que te preocupa?", opciones: ["Porque puede ayudarte a cuidarte a tiempo", "Porque el adulto luego lo cuenta", "Porque así no tienes que estudiar", "Porque nadie te escucha nunca"], correcta: 0, dificultad: 3 },
      { enunciado: "Cuidar tu cuerpo y cuidarte de otros daños se parecen en que...", opciones: ["Ambos piden reconocer riesgos y pedir ayuda", "Son dos cosas sin ninguna relación", "Solo importan cuando eres grande", "No tienen absolutamente nada que ver"], correcta: 0, dificultad: 3 },
      { enunciado: "Un amigo se siente solo en el recreo. El cuidado también es...", opciones: ["Invitarlo y acompañarlo con respeto", "Dejarlo siempre solo", "Burlarse de él un ratito", "Hacer que se vaya lejos"], correcta: 0, dificultad: 3 }
    ],
    retos: [
      { titulo: "Lavarme las manos", descripcion: "Ordena los pasos para lavarte las manos bien.", pasos: ["Abrir la llave del agua", "Frotar con jabón", "Secar bien mis manos"], dificultad: 1 },
      { titulo: "Avisar si me siento mal", descripcion: "Ordena los pasos para avisar cuando te sientes mal.", pasos: ["Decir qué me duele", "Buscar a la profesora", "Sentarme tranquilo"], dificultad: 2 },
      { titulo: "Cuidarme de un desconocido", descripcion: "Ordena los pasos para cuidarte ante un desconocido.", pasos: ["No aceptar cosas de extraños", "Alejarme poco a poco", "Contar a un adulto de confianza"], dificultad: 3 }
    ]
  },

  "orientacion--cuidado-integral--c2": {
    id: "orientacion--cuidado-integral--c2",
    nombre: "Prevención del acoso escolar",
    preguntas: [
      { enunciado: "El acoso escolar es cuando...", opciones: ["Un niño trata muy mal a otro una y otra vez", "Dos amigos juegan un solo día", "Un niño pierde su borrador", "Todos estudian juntos en clase"], correcta: 0, dificultad: 1 },
      { enunciado: "Si ves que molestan a un compañero, puedes...", opciones: ["Avisar a un adulto del colegio", "Reírte junto con los demás", "Grabar todo con el celular", "Unirte a las burlas"], correcta: 0, dificultad: 1 },
      { enunciado: "El buen trato entre compañeros se nota cuando...", opciones: ["Nadie queda solo por culpa de otros", "El más fuerte siempre gana", "Todos se gritan mucho", "Nadie escucha nada"], correcta: 0, dificultad: 1 },
      { enunciado: "Un compañero repite apodos que molestan. Esto es...", opciones: ["Una forma de acoso que hay que reportar", "Un juego que todos disfrutan", "Algo que se arregla solo", "Una broma sin ninguna importancia"], correcta: 0, dificultad: 2 },
      { enunciado: "A un niño le mandan mensajes feos. La ayuda correcta es...", opciones: ["Contarlo en casa o al colegio con calma", "Responder con otros mensajes peores", "Borrar todo sin decir absolutamente nada", "Aguantar para no molestar a nadie"], correcta: 0, dificultad: 2 },
      { enunciado: "¿Qué hace un buen amigo ante un caso de acoso?", opciones: ["Se pone del lado de quien sufre y avisa", "Se queda mirando muy tranquilo", "Ayuda a esconder todo lo que pasa", "Cambia de tema siempre"], correcta: 0, dificultad: 2 },
      { enunciado: "El acoso es distinto de una pelea de un día porque...", opciones: ["El acoso es repetido y con desequilibrio de poder", "Las dos cosas son siempre iguales", "El acoso dura menos tiempo", "La pelea es peor que el acoso"], correcta: 0, dificultad: 3 },
      { enunciado: "Silenciar un acoso por miedo puede...", opciones: ["Dejar sola a la víctima y agrandar el daño", "Resolverlo mucho más rápido", "Proteger a quien ya sufre", "Enseñar buenas costumbres"], correcta: 0, dificultad: 3 },
      { enunciado: "¿Por qué las normas del colegio importan contra el acoso?", opciones: ["Porque dan una ruta para proteger a todos", "Porque solo llenan el manual", "Porque castigan a los mejores", "Porque no sirven para nada"], correcta: 0, dificultad: 3 }
    ],
    retos: [
      { titulo: "Pedir ayuda por un acoso", descripcion: "Ordena los pasos para pedir ayuda ante un acoso.", pasos: ["Noto que algo anda muy mal", "Se lo cuento a un adulto", "Me quedo cerca de mi amigo"], dificultad: 1 },
      { titulo: "Acompañar a un compañero acosado", descripcion: "Ordena los pasos para acompañar a un compañero acosado.", pasos: ["Me acerco y lo escucho", "No me río ni grabo nada", "Aviso a un adulto del colegio", "Camino con él en el recreo"], dificultad: 3 }
    ]
  },

  "orientacion--cuidado-integral--c3": {
    id: "orientacion--cuidado-integral--c3",
    nombre: "Prevención del consumo de sustancias",
    preguntas: [
      { enunciado: "El alcohol y el cigarrillo son sustancias que en menores de edad...", opciones: ["Dañan el cuerpo y el cerebro que aún está creciendo", "Ayudan a estudiar mucho mejor", "Dan ventaja en los deportes", "No tienen ningún efecto"], correcta: 0, dificultad: 1 },
      { enunciado: "La presión de grupo lleva a consumir cuando...", opciones: ["Se acepta algo malo por no sentirse excluido", "Se decide con calma y con información", "Se consulta a un adulto de confianza", "Se pone un límite muy claro"], correcta: 0, dificultad: 1 },
      { enunciado: "Una fuente confiable de ayuda frente al consumo es...", opciones: ["Las líneas del Ministerio y los servicios de salud", "La tienda de la esquina", "Un vecino mayor del barrio", "Un anuncio suelto de internet"], correcta: 0, dificultad: 1 },
      { enunciado: "La prevención del consumo en el colegio trabaja con...", opciones: ["Información, habilidades para decir no y redes de apoyo", "Solo el castigo sin ninguna charla", "El miedo como única estrategia", "La total indiferencia"], correcta: 0, dificultad: 1 },
      { enunciado: "Un joven mayor ofrece algo dudoso en la puerta del colegio. Lo adecuado es...", opciones: ["Decir que no y avisar a un adulto del colegio", "Aceptarlo por no quedar mal", "Probarlo y botarlo después", "Venderlo a otros amigos"], correcta: 0, dificultad: 2 },
      { enunciado: "Distinguir un riesgo real de uno imaginario ayuda a...", opciones: ["Tomar decisiones informadas sobre tu salud", "Consumir sin conocer los daños", "Ignorar todo aviso de los adultos", "Seguir a quien te presiona"], correcta: 0, dificultad: 2 },
      { enunciado: "Las habilidades para rechazar sustancias incluyen...", opciones: ["Decir no de forma firme y alejarte con calma", "Aceptarlo y luego arrepentirte", "Negociar una cantidad más pequeña", "Guardar el secreto completo"], correcta: 0, dificultad: 2 },
      { enunciado: "¿Por qué el consumo temprano puede afectar más el aprendizaje?", opciones: ["Porque interfiere con memoria y atención en un cerebro en desarrollo", "Porque da más ganas de estudiar", "Porque mejora mucho la concentración", "Porque no toca el cerebro joven"], correcta: 0, dificultad: 3 },
      { enunciado: "Una campaña escolar de prevención funciona mejor cuando...", opciones: ["Da voz a los estudiantes y no solo sermones de adultos", "Usa únicamente miedo y castigos", "Omite los datos y riesgos reales", "Prohíbe preguntar cualquier duda"], correcta: 0, dificultad: 3 },
      { enunciado: "La diferencia entre probar una vez y un consumo problemático suele verse en...", opciones: ["Que aparece necesidad, tolerancia o daño en la vida diaria", "Que basta una vez para ser adicto", "Que solo importa la cantidad exacta", "Que nadie te puede ayudar"], correcta: 0, dificultad: 3 }
    ],
    retos: [
      { titulo: "Decirle no a la presión", descripcion: "Ordena los pasos para decirle no a la presión.", pasos: ["Reconozco que me están presionando", "Respondo con un no firme", "Doy una razón de mi decisión", "Me alejo sin sentir culpa"], dificultad: 2 },
      { titulo: "Buscar ayuda a tiempo", descripcion: "Ordena los pasos para buscar ayuda a tiempo.", pasos: ["Noto algo que me preocupa en un amigo", "Hablo con un adulto de confianza", "Busco la línea o el servicio de salud", "Sigo acompañando el proceso"], dificultad: 3 }
    ]
  },

  "orientacion--cuidado-integral--c4": {
    id: "orientacion--cuidado-integral--c4",
    nombre: "Sexualidad, afectividad y prevención",
    preguntas: [
      { enunciado: "La educación sexual integral busca...", opciones: ["Conocimiento responsable del cuerpo, la afectividad y el consentimiento", "Tabúes y secretos sobre el cuerpo", "Burlas hacia los demás estudiantes", "Solo el miedo al contagio"], correcta: 0, dificultad: 1 },
      { enunciado: "El consentimiento significa que...", opciones: ["Ambas personas dicen que sí libremente y pueden cambiar de opinión", "Basta con el silencio de una sola", "La presión del grupo decide todo", "No hace falta preguntar nada"], correcta: 0, dificultad: 1 },
      { enunciado: "La afectividad en la adolescencia se refiere a...", opciones: ["Cómo vives y expresas tus sentimientos y relaciones", "Solo el aspecto físico del cuerpo", "Un juego de las redes sociales", "La moda entre compañeros"], correcta: 0, dificultad: 1 },
      { enunciado: "La salud sexual y reproductiva se atiende en Colombia a través de...", opciones: ["Servicios de salud y programas de promoción y prevención", "Solo remedios comprados en la tienda", "Conversaciones de los vecinos", "El reglamento interno del colegio"], correcta: 0, dificultad: 1 },
      { enunciado: "Una pareja se respeta cuando...", opciones: ["Ambos ponen y aceptan límites sin presión", "Uno de los dos decide siempre por los dos", "Se cede para no perder al otro", "Se guardan los acuerdos entre los dos"], correcta: 0, dificultad: 2 },
      { enunciado: "La prevención de un embarazo no planeado en la adolescencia incluye...", opciones: ["Información, proyectos de vida y acompañamiento familiar y escolar", "Solo el miedo sin ninguna charla", "Ocultar toda la información a los jóvenes", "Dejar todo librado a la suerte"], correcta: 0, dificultad: 2 },
      { enunciado: "Ante una presión para una relación sexual, una respuesta responsable es...", opciones: ["Reafirmar tu límite y hablar con un adulto de confianza", "Ceder por el miedo a quedarte solo", "Aislarte sin contarle a nadie", "Actuar igual que tus amigos"], correcta: 0, dificultad: 2 },
      { enunciado: "El consentimiento se vuelve un problema cuando...", opciones: ["La edad, la presión o el alcohol impiden una decisión libre", "Dos personas dialogan con total claridad", "Se acuerdan límites con mucho respeto", "Se informa a quien corresponde"], correcta: 0, dificultad: 3 },
      { enunciado: "¿Por qué la educación sexual integral protege también la salud mental?", opciones: ["Porque reduce la culpa, el miedo y la desinformación", "Porque impone un único modelo de vida", "Porque evita toda relación afectiva", "Porque reemplaza a la familia"], correcta: 0, dificultad: 3 },
      { enunciado: "Distinguir entre deseo, presión y decisión ayuda a...", opciones: ["Actuar según tus valores y no por impulso ajeno", "Copiar siempre lo que hace el grupo", "Ocultar tus verdaderos sentimientos", "Evitar toda información de salud"], correcta: 0, dificultad: 3 }
    ],
    retos: [
      { titulo: "Poner límites con respeto", descripcion: "Ordena los pasos para poner límites con respeto.", pasos: ["Reconozco cómo quiero ser tratado", "Lo digo con calma y claridad", "Escucho el límite del otro", "Acordamos un trato bueno para ambos"], dificultad: 2 },
      { titulo: "Ante una situación de riesgo", descripcion: "Ordena los pasos ante una situación que te pone en riesgo.", pasos: ["Identifico qué me pone en riesgo", "Digo que no con firmeza", "Busco a un adulto de confianza", "Acudo a un servicio de salud si hace falta", "Cuento lo que pasó en el colegio"], dificultad: 3 }
    ]
  },

  "orientacion--cuidado-integral--c5": {
    id: "orientacion--cuidado-integral--c5",
    nombre: "Salud mental, violencia y redes de apoyo",
    preguntas: [
      { enunciado: "La Ley 1620 de 2013 y su Decreto 1965 buscan proteger en el colegio...", opciones: ["La convivencia y los derechos frente a la violencia escolar", "Solo el rendimiento académico del curso", "El comercio dentro del plantel", "El transporte escolar municipal"], correcta: 0, dificultad: 1 },
      { enunciado: "Una red de apoyo escolar puede incluir...", opciones: ["Docentes, familias, gobierno escolar y entidades como la línea de apoyo del ICBF", "Solo a los amigos más cercanos", "A nadie, porque todo es un secreto", "Únicamente al vigilante del colegio"], correcta: 0, dificultad: 1 },
      { enunciado: "La violencia basada en género en el colegio se previene con...", opciones: ["Educación en igualdad, respeto y rutas claras de atención", "El silencio para no exponer a nadie", "La culpa puesta sobre quien sufre", "La burla usada como correctivo"], correcta: 0, dificultad: 1 },
      { enunciado: "El acoso escolar sistemático puede afectar la salud mental generando...", opciones: ["Ansiedad, aislamiento o ideas de autolesión", "Mejor concentración en el estudio", "Un mayor fortalecimiento de la amistad", "Ninguna consecuencia real"], correcta: 0, dificultad: 1 },
      { enunciado: "El acoso cibernético se distingue del cara a cara porque...", opciones: ["Se difunde por redes y puede ser anónimo y constante", "Solo ocurre dentro del salón de clase", "Nunca deja ninguna clase de evidencia", "Termina al apagarse el teléfono"], correcta: 0, dificultad: 2 },
      { enunciado: "Frente a un compañero que habla de autolesionarse, una respuesta adecuada es...", opciones: ["Tomarlo en serio y avisar de inmediato a un adulto de confianza", "Guardar el secreto por lealtad", "Restarle importancia con un chiste", "Tratarlo uno mismo como terapeuta"], correcta: 0, dificultad: 2 },
      { enunciado: "La ruta de atención ante una violencia sexual dentro del colegio inicia con...", opciones: ["Detectar, proteger a la víctima y activar la denuncia y el acompañamiento", "Confrontar al agresor con mucha violencia", "Evitar el caso para no complicar las cosas", "Ocultar los hechos entre los compañeros"], correcta: 0, dificultad: 2 },
      { enunciado: "La promoción de la salud mental en la media es efectiva cuando...", opciones: ["Combina educación emocional, detección temprana y acceso real a ayuda", "Confía solo en castigos y en las notas", "Evita hablar del tema dentro del aula", "Depende de una sola confesión religiosa"], correcta: 0, dificultad: 2 },
      { enunciado: "El estigma frente a la salud mental daña porque...", opciones: ["Impide pedir ayuda por el miedo a ser juzgado", "Fomenta el acceso temprano a los servicios", "Reduce el aislamiento del estudiante", "Mejora la convivencia escolar"], correcta: 0, dificultad: 3 },
      { enunciado: "La línea de atención del ICBF y la línea de salud mental funcionan como...", opciones: ["Canales de orientación y de reporte de situaciones de riesgo", "Canales para denuncias de tránsito", "Canales de reclamos de notas", "Solo líneas de emergencias médicas"], correcta: 0, dificultad: 3 },
      { enunciado: "La responsabilidad de un joven ante un amigo en crisis, según la ruta, es...", opciones: ["No cargar solo, activar la red de apoyo y acompañar", "Resolverlo en un total secreto", "Hacerse cargo él mismo de la terapia", "Ignorar todas las señales de alarma"], correcta: 0, dificultad: 3 },
      { enunciado: "Una política de convivencia con enfoque de cuidado se evalúa por...", opciones: ["Su capacidad de prevenir, atender y dar seguimiento real a los casos", "La cantidad de castigos aplicados", "La rapidez para cerrar y negar los problemas", "El silencio sostenido entre todos"], correcta: 0, dificultad: 3 }
    ],
    retos: [
      { titulo: "Construir mi red de apoyo", descripcion: "Ordena los pasos para construir tu red de apoyo.", pasos: ["Identifico a quién acudo en el colegio", "Nombro a un adulto de mi casa", "Conozco la ruta de atención escolar", "Anoto un canal externo de ayuda", "Practico pedir ayuda antes de la crisis", "Reviso mi red cada cierto tiempo"], dificultad: 2 },
      { titulo: "Protocolo ante una señal de riesgo", descripcion: "Ordena los pasos ante una señal de riesgo en alguien.", pasos: ["Reconozco una señal de alarma en un compañero", "Escucho sin juzgar ni prometer silencio", "Aviso de inmediato a un adulto responsable", "Sigo la ruta de atención del colegio", "Verifico que reciba ayuda profesional", "Cuido mi propio bienestar en el proceso"], dificultad: 3 }
    ]
  },


  "orientacion--vocacion--c3": {
    id: "orientacion--vocacion--c3",
    nombre: "Los oficios y profesiones de mi entorno",
    preguntas: [
      { enunciado: "Una vocación se relaciona con...", opciones: ["La combinación de intereses, aptitudes y valores de una persona", "La suerte de nacer en un buen lugar", "El sueldo más alto del mercado", "La moda de cada temporada"], correcta: 0, dificultad: 1 },
      { enunciado: "Las aptitudes son...", opciones: ["Las habilidades que se te facilitan y puedes desarrollar", "Los gustos que nadie más conoce", "Las notas de todas las materias", "Los juegos del tiempo libre"], correcta: 0, dificultad: 1 },
      { enunciado: "Un oficio se distingue de una profesión porque suele...", opciones: ["Requerir formación práctica más corta que una carrera universitaria", "No aportar nada a la comunidad", "Cobrar siempre el mismo sueldo", "No necesitar ninguna habilidad"], correcta: 0, dificultad: 1 },
      { enunciado: "Las familias de profesiones agrupan oficios y carreras según...", opciones: ["El tipo de actividad y las áreas del conocimiento", "El color del uniforme de trabajo", "La ciudad donde se estudian", "La hora en que se trabaja"], correcta: 0, dificultad: 1 },
      { enunciado: "Para explorar tus intereses vocacionales ayuda...", opciones: ["Probar actividades y anotar cuáles te atrapan", "Elegir lo que decidió un familiar sin pensar", "Copiar la carrera de tu mejor amigo", "Decidir solamente por el dinero"], correcta: 0, dificultad: 2 },
      { enunciado: "Un ejercicio de autoevaluación de intereses, como los que usan los orientadores, sirve para...", opciones: ["Conocer qué actividades te motivan antes de elegir", "Definir tu vida entera sin retorno", "Reemplazar a todo el colegio", "Asegurar una nota muy alta"], correcta: 0, dificultad: 2 },
      { enunciado: "Conocer los oficios de tu barrio, como panadero o carpintero, sirve para...", opciones: ["Valorar rutas de trabajo cercanas y reales", "Descartar de antemano todo lo manual", "Soñar solo con profesiones famosas", "Evitar cualquier estudio futuro"], correcta: 0, dificultad: 2 },
      { enunciado: "Elegir una ocupación solo por imitar a otros es riesgoso porque...", opciones: ["Puede ignorar tus intereses y aptitudes reales", "Garantiza un éxito inmediato", "Es la única forma segura de decidir", "Nunca trae ninguna consecuencia"], correcta: 0, dificultad: 3 },
      { enunciado: "El registro calificado de las instituciones lo vigila el Ministerio de Educación para...", opciones: ["Asegurar que los programas cumplan condiciones de calidad", "Prohibir todas las carreras técnicas", "Fijar el sueldo de los profesionales", "Reemplazar las notas del colegio"], correcta: 0, dificultad: 3 },
      { enunciado: "Una aptitud que nunca se practica suele...", opciones: ["Quedarse como potencial sin volverse un logro real", "Convertirse sola en una carrera", "Resultar inútil para siempre", "Bastar para elegir profesión"], correcta: 0, dificultad: 3 }
    ],
    retos: [
      { titulo: "Explorar mis intereses", descripcion: "Ordena los pasos para explorar tus intereses vocacionales.", pasos: ["Pruebo distintas actividades del colegio", "Anoto cuáles me gustan más", "Pregunto a quienes ya trabajan en eso", "Elijo un interés para seguir explorando"], dificultad: 2 },
      { titulo: "Conocer una profesión", descripcion: "Ordena los pasos para conocer una profesión del entorno.", pasos: ["Investigo qué hace esa profesión", "Reviso qué estudios la forman", "Identifico las aptitudes que pide", "Comparo con mis propios intereses"], dificultad: 3 }
    ]
  },

  "orientacion--vocacion--c4": {
    id: "orientacion--vocacion--c4",
    nombre: "Tendencias y áreas de interés profesional",
    preguntas: [
      { enunciado: "Las áreas de interés profesional, como salud o ingeniería, agrupan carreras según...", opciones: ["El tipo de problemas que resuelven y su campo de acción", "La letra con que empieza su nombre", "El país de origen de su fundador", "El uniforme que usan sus estudiantes"], correcta: 0, dificultad: 1 },
      { enunciado: "El bachillerato técnico en Colombia se apoya también en la...", opciones: ["Ley 749 de 2002 y su articulación con el SENA", "Ley de tránsito nacional", "Norma de la tienda escolar", "Ley del servicio doméstico"], correcta: 0, dificultad: 1 },
      { enunciado: "La articulación con el SENA permite a un estudiante de media...", opciones: ["Cursar estudios técnicos sin dejar el colegio", "Obtener de una vez un título de medicina", "Trabajar sin ninguna formación", "Abandonar el bachillerato"], correcta: 0, dificultad: 1 },
      { enunciado: "El SIA, herramienta de la orientación vocacional, ayuda a...", opciones: ["Registrar y analizar intereses y antecedentes vocacionales", "Sustituir las materias del currículo", "Definir el menú de la cafetería", "Pagar la matrícula del colegio"], correcta: 0, dificultad: 1 },
      { enunciado: "Antes de elegir una carrera conviene...", opciones: ["Contrastar tus intereses, aptitudes y valores con la realidad del campo", "Decidir solo por la moda profesional", "Copiar la elección de un familiar", "Escoger por el nombre bonito"], correcta: 0, dificultad: 2 },
      { enunciado: "Una tendencia laboral del futuro suele relacionarse con...", opciones: ["Áreas como tecnología, ambiente y salud en crecimiento", "Los oficios que están desapareciendo", "Un sector productivo cerrado sin cambios", "Las tareas que la gente ya no necesita"], correcta: 0, dificultad: 2 },
      { enunciado: "El plan de estudios de una carrera muestra...", opciones: ["Las materias y créditos que debes aprobar por semestre", "El precio exacto de la universidad", "La lista de los antiguos profesores", "Solo las notas que ya perdiste"], correcta: 0, dificultad: 2 },
      { enunciado: "Elegir carrera sin conocer sus materias reales puede...", opciones: ["Generar frustración al enfrentar las cargas del plan", "Asegurar que terminarás primero", "Mejorar tu nota de bachillerato", "Ahorrarte tiempo en el colegio"], correcta: 0, dificultad: 3 },
      { enunciado: "La orientación vocacional no debe verse como...", opciones: ["Un test mágico que decide solo tu destino", "Un proceso que acompaña al estudiante", "Un espacio para explorar intereses", "Un diálogo abierto con la familia"], correcta: 0, dificultad: 3 },
      { enunciado: "El bachillerato técnico articula saberes porque...", opciones: ["Une la formación media con competencias para el trabajo", "Reemplaza por completo la educación media", "Elimina las prácticas del estudiante", "Cierra el paso a la universidad"], correcta: 0, dificultad: 3 }
    ],
    retos: [
      { titulo: "Explorar áreas profesionales", descripcion: "Ordena los pasos para explorar áreas profesionales.", pasos: ["Listo tres áreas de interés", "Busco una carrera dentro de cada área", "Reviso qué materias tienen", "Comparo con mis aptitudes", "Elijo un área para indagar más"], dificultad: 2 },
      { titulo: "Comparar rutas de estudio", descripcion: "Ordena cómo comparar rutas de estudio después del colegio.", pasos: ["Defino mi meta profesional", "Investigo la ruta técnica y la universitaria", "Reviso requisitos y costos reales", "Comparo duración y salidas laborales", "Argumento la ruta más coherente"], dificultad: 3 }
    ]
  },

  "orientacion--vocacion--c5": {
    id: "orientacion--vocacion--c5",
    nombre: "Educación superior, pruebas Saber y proyecto posgrado",
    preguntas: [
      { enunciado: "La prueba Saber Pro en Colombia evalúa...", opciones: ["Competencias de los estudiantes al finalizar la educación superior", "Solo a los estudiantes de bachillerato", "La asistencia al colegio público", "Las notas de la primaria"], correcta: 0, dificultad: 1 },
      { enunciado: "El sistema que reúne la información de la educación superior colombiana, el SNIES, lo administra...", opciones: ["El Ministerio de Educación Nacional", "El ICBF", "Solo la gobernación del departamento", "La tienda del colegio"], correcta: 0, dificultad: 1 },
      { enunciado: "El registro calificado de un programa universitario acredita que...", opciones: ["Cumple condiciones de calidad para poder ofrecerse", "Es gratuito para todos los jóvenes", "Solo se dicta en la capital", "No necesita ningún profesor"], correcta: 0, dificultad: 1 },
      { enunciado: "Los resultados de la prueba Saber 11 pueden servir, entre otros fines, para...", opciones: ["Acceder a apoyos económicos y a procesos de admisión", "Reemplazar el título de bachiller", "Definir el reglamento interno del colegio", "Cancelar el registro calificado"], correcta: 0, dificultad: 1 },
      { enunciado: "Leer el plan de estudios de una carrera antes de matricularse sirve para...", opciones: ["Anticipar materias, créditos y cargas de cada semestre", "Calcular el precio del salón de clases", "Elegir el uniforme deportivo", "Evitar toda lectura posterior"], correcta: 0, dificultad: 2 },
      { enunciado: "Las becas y apoyos económicos para educación superior suelen exigir...", opciones: ["Cumplir requisitos académicos y resultados en las pruebas", "Ningún trámite ni requisito previo", "Solo la edad del estudiante", "Renunciar a presentar la Saber 11"], correcta: 0, dificultad: 2 },
      { enunciado: "La educación técnica y tecnológica frente a la profesional busca...", opciones: ["Formar para el trabajo en menos tiempo, con salida laboral temprana", "Otorgar siempre doctorados", "Evitar cualquier tipo de empleo", "Reemplazar al colegio entero"], correcta: 0, dificultad: 2 },
      { enunciado: "Al planear un posgrado, un estudiante debe sobre todo sopesar...", opciones: ["Costos, tiempo, financiamiento y proyección profesional real", "Solo el prestigio del nombre de la universidad", "Únicamente el horario de las clases", "La cercanía física del campus a su casa"], correcta: 0, dificultad: 2 },
      { enunciado: "Comparar instituciones de educación superior exige mirar el registro calificado porque...", opciones: ["Garantiza que el programa cumple estándares vigentes", "Asegura que la educación siempre sea gratis", "Define el sueldo de todos los egresados", "Reemplaza la vocación del estudiante"], correcta: 0, dificultad: 3 },
      { enunciado: "Una elección vocacional coherente en grado once implica...", opciones: ["Alinear intereses, aptitudes, valores y condiciones reales del entorno", "Decidir solo por el prestigio de la universidad", "Ignorar por completo las propias aptitudes", "Copiar la carrera del influencer de moda"], correcta: 0, dificultad: 3 },
      { enunciado: "El riesgo de endeudarse por una carrera sin plan es que...", opciones: ["El costo puede superar el beneficio si falta claridad profesional", "Garantiza graduarse mucho más rápido", "Mejora el promedio del estudiante", "No afecta la economía familiar"], correcta: 0, dificultad: 3 },
      { enunciado: "El proyecto de vida y la decisión de carrera se conectan cuando...", opciones: ["La formación elegida es un camino y no un fin sin sentido personal", "Se elige solo por la presión de la familia", "Se deja todo librado al azar del destino", "Se resuelve en una sola tarde"], correcta: 0, dificultad: 3 }
    ],
    retos: [
      { titulo: "Ruta pos secundaria", descripcion: "Ordena los pasos para planear tus estudios después del bachillerato.", pasos: ["Reviso mis intereses y aptitudes", "Comparo rutas técnica y universitaria", "Verifico requisitos y costo real", "Busco opciones de financiamiento", "Elijo una ruta coherente", "Defino fechas y próximos pasos"], dificultad: 2 },
      { titulo: "Argumentar mi elección de carrera", descripcion: "Ordena cómo argumentar tu elección de carrera.", pasos: ["Formulo mi duda sobre la carrera", "Reúno información de fuentes confiables", "Contrasto intereses, aptitudes y valores", "Analizo consecuencias de cada opción", "Redacto una decisión coherente", "La sustento con razones ante otros"], dificultad: 3 }
    ]
  },

};
