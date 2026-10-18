// js/games/banco/etica-valores.js
// Banco de Ética y Valores Humanos para la plataforma escolar, con los cinco ejes del área en los ciclos c1 (1°-2°) a c5 (10°-11°).
// Marco: Estándares Básicos de Competencias Ciudadanas (MEN, 2006), Ley 1620
// de 2013 y Decreto 1965 de 2013 (convivencia escolar), Ley 1098 de 2006,
// Ley 1732 de 2015 (Cátedra de la Paz) y Constitución de 1991.
// La respuesta correcta se escribe SIEMPRE en la posición 0; el juego baraja.
// Los retos traen los pasos en ORDEN CORRECTO; el juego los desordena.

export const BANCO = {
  "etica-valores--convivencia--c1": {
    id: "etica-valores--convivencia--c1",
    nombre: "Normas del curso y empatía",
    preguntas: [
      { enunciado: "Las normas del salón sirven para:", opciones: ["convivir mejor entre todos", "que solo juegue el más rápido", "trabajar siempre en silencio", "que la profesora descanse"], correcta: 0, dificultad: 1 },
      { enunciado: "Para hablar en clase debemos:", opciones: ["levantar la mano", "gritar el nombre", "salir del salón", "esperar de pie"], correcta: 0, dificultad: 1 },
      { enunciado: "Si un amigo está triste conviene:", opciones: ["preguntarle qué le pasa", "burlarme de su cara", "contar su secreto", "hacer como si no lo viera"], correcta: 0, dificultad: 1 },
      { enunciado: "Llega un compañero sin colores. Yo tengo una caja llena. ¿Qué hago?", opciones: ["compartir los colores con él", "esconder la caja en la mochila", "pintar rapidísimo para terminar", "pedirle que traiga después"], correcta: 0, dificultad: 2 },
      { enunciado: "Dos amigos pelean por el columpio. La mejor idea es:", opciones: ["proponer turnos para los dos", "empujar al más pequeño", "unirme a los gritos", "quitar el columpio para mí"], correcta: 0, dificultad: 2 },
      { enunciado: "Cuando una compañera cuenta algo triste, mostramos empatía si:", opciones: ["la miramos y le hablamos con cariño", "nos reímos de ella", "le contamos a los demás", "le decimos que no llore"], correcta: 0, dificultad: 2 },
      { enunciado: "Diego no está de acuerdo con la norma de no correr. Él puede:", opciones: ["hablar con la profesora y dar sus razones", "correr igual por el pasillo", "empujar a los demás niños", "dejar de venir al colegio"], correcta: 0, dificultad: 3 },
      { enunciado: "Tomás rompió el dibujo de Sara. Sara siente mucho enojo. Lo más justo es:", opciones: ["que Tomás pida perdón y ayude a rehacerlo", "que Sara grite más fuerte", "que nadie diga nada del tema", "que Tomás esconda sus colores"], correcta: 0, dificultad: 3 },
      { enunciado: "Un niño nuevo no tiene amigos en el recreo. Pensando en él debería:", opciones: ["invitarlo a mi juego", "dejarlo solo todo el año", "contarle a otros que es nuevo", "correr para que no me alcance"], correcta: 0, dificultad: 3 }
    ],
    retos: [
      { titulo: "Pedir perdón después de un enredo", pasos: ["Aceptar que me equivoqué", "Decirle perdón a mi amigo", "Proponer cómo arreglarlo"], dificultad: 1 },
      { titulo: "Hacer un acuerdo para jugar todos", pasos: ["Escuchar qué quiere cada niño", "Pensar un plan para todos", "Probar el plan y conversarlo"], dificultad: 3 }
    ]
  },

  "etica-valores--convivencia--c2": {
    id: "etica-valores--convivencia--c2",
    nombre: "Resolver conflictos conversando",
    preguntas: [
      { enunciado: "Resolver un conflicto conversando empieza por:", opciones: ["escuchar al otro con calma", "gritar más fuerte", "ganar la discusión", "irme sin hablar"], correcta: 0, dificultad: 1 },
      { enunciado: "Cuando hablamos de un problema debemos:", opciones: ["decir lo que sentimos sin insultar", "contar mentiras del otro", "usar apodos graciosos", "buscar el culpable"], correcta: 0, dificultad: 1 },
      { enunciado: "Una disculpa sincera sirve para:", opciones: ["arreglar la relación", "ganar tiempo de juego", "evitar la tarea", "hacer enojar más"], correcta: 0, dificultad: 1 },
      { enunciado: "Un compañero me molestó. Antes de responder conviene:", opciones: ["respirar profundo y calmarme", "contarle a todo el curso", "devolverle la misma burla", "esconder sus cosas"], correcta: 0, dificultad: 2 },
      { enunciado: "Dos compañeros pelean por el mismo asiento del cine. La profe puede:", opciones: ["sortear con reglas claras conversadas", "quitarles el cine a los dos", "dar el puesto al que grite", "decidir sin explicar a nadie"], correcta: 0, dificultad: 2 },
      { enunciado: "Para negociar un acuerdo debemos estar dispuestos a:", opciones: ["escuchar la propuesta del otro", "pedir siempre todo", "imponer con gritos", "terminar la conversación rápido"], correcta: 0, dificultad: 2 },
      { enunciado: "Valentina está enojada porque le cambiaron el turno sin avisar. Lo mejor:", opciones: ["pedir explicaciones y proponer un plan de turnos", "gritar en plena clase", "cambiar todos los turnos otra vez", "no volver a hablar con nadie"], correcta: 0, dificultad: 3 },
      { enunciado: "Dos grupos quieren la misma cancha. Un mediador neutral primero debe:", opciones: ["escuchar a cada grupo por separado", "dar la cancha al grupo más fuerte", "quitar la cancha para todos", "suspender el recreo completo"], correcta: 0, dificultad: 3 },
      { enunciado: "Mi amigo me cuenta que otro amigo habla mal de él. Para resolver sin violencia:", opciones: ["hablar con los dos y buscar un acuerdo", "repetir el chisme a más gente", "pelear con el que habla mal", "dejar de hablarles para siempre"], correcta: 0, dificultad: 3 }
    ],
    retos: [
      { titulo: "Conversar para resolver un enredo", pasos: ["Me calmo antes de hablar", "Digo qué siento sin insultar", "Escucho lo que dice el otro", "Busco con él una solución"], dificultad: 1 },
      { titulo: "Ser mediador entre dos compañeros", pasos: ["Reúno a los dos en un lugar tranquilo", "Escucho a cada uno sin interrumpir", "Pido propuestas de solución", "Ayudo a escribir el acuerdo elegido"], dificultad: 3 }
    ]
  },

  "etica-valores--convivencia--c3": {
    id: "etica-valores--convivencia--c3",
    nombre: "Acoso escolar y respeto por la diferencia",
    preguntas: [
      { enunciado: "El acoso escolar (bullying) se caracteriza por:", opciones: ["agresiones intencionales, repetidas y con desequilibrio de poder", "una pelea aislada entre dos amigos", "un malentendido aclarado en clase", "un juego brusco durante un recreo"], correcta: 0, dificultad: 1 },
      { enunciado: "Según el Decreto 1965 de 2013, una situación tipo III es aquella en la que:", opciones: ["la agresión reviste características de un delito", "dos compañeros discuten por un puesto", "un estudiante llega tarde esporádicamente", "un niño grita una vez en el pasillo"], correcta: 0, dificultad: 1 },
      { enunciado: "El ciberacoso se diferencia del acoso presencial porque:", opciones: ["usa pantallas, redes o aplicaciones y puede seguir todo el día", "solo pasa dentro del salón de clases", "nunca deja pruebas ni huellas", "afecta únicamente a los adultos"], correcta: 0, dificultad: 1 },
      { enunciado: "Respetar la diferencia significa aceptar que:", opciones: ["los compañeros piensan y viven de manera distinta", "todos debemos pensar igual", "las diferencias se deben esconder", "quien es distinto vale menos"], correcta: 0, dificultad: 1 },
      { enunciado: "En el grupo del curso publican burlas sobre tu forma de hablar, y se repite cada semana. Eso es:", opciones: ["ciberacoso que debe atender el comité de convivencia", "una broma normal entre compañeros", "un problema que se resuelve callando", "una situación que no afecta a nadie"], correcta: 0, dificultad: 2 },
      { enunciado: "Si presencias una agresión sin participar, la actitud correcta es:", opciones: ["avisar a un adulto de confianza y acompañar a la víctima", "grabar para mostrarlo después", "esperar a que otro se decida", "reírte para no quedar mal"], correcta: 0, dificultad: 2 },
      { enunciado: "El mayor riesgo de que una víctima de acoso guarde silencio es que:", opciones: ["las agresiones continúen y aumenten", "el grupo se vuelva más unido", "los profesores se distraigan", "el acosador cambie de humor"], correcta: 0, dificultad: 2 },
      { enunciado: "La Ley 1620 de 2013 crea el Sistema Nacional de Convivencia Escolar para:", opciones: ["promover la prevención y atención de la violencia escolar", "aumentar las notas de los estudiantes", "reemplazar el manual de convivencia", "regular las calificaciones de cada periodo"], correcta: 0, dificultad: 3 },
      { enunciado: "Los compañeros que ríen las burlas del acosador terminan:", opciones: ["reforzando la agresión y dejando sola a la víctima", "ayudando a detener el acoso", "mostrando solidaridad", "cumpliendo el manual de convivencia"], correcta: 0, dificultad: 3 },
      { enunciado: "Ante una acusación de acoso, el debido proceso exige:", opciones: ["escuchar a los implicados, investigar y aplicar el manual", "suspender de inmediato sin oír a nadie", "decidir según quién sea más popular", "exponer el caso en redes para avisar"], correcta: 0, dificultad: 3 }
    ],
    retos: [
      { titulo: "Ayudar a un compañero acosado", pasos: ["Me acerco y lo escucho sin juzgar", "Le propongo avisar a un adulto", "Lo acompaño a contar lo que pasa", "Evito difundir lo que lo señala"], dificultad: 2 },
      { titulo: "Activar la ruta escolar ante un caso de acoso", pasos: ["Reporto la situación a coordinación o al comité", "Se protege a la víctima mientras se investiga", "Se escucha a los implicados con debido proceso", "Se hace seguimiento con las familias"], dificultad: 3 }
    ]
  },

  "etica-valores--convivencia--c4": {
    id: "etica-valores--convivencia--c4",
    nombre: "Dilemas morales y argumentación ética",
    preguntas: [
      { enunciado: "Un dilema moral se distingue de un simple problema porque exige:", opciones: ["elegir entre valores que se contradicen", "obedecer sin pensar al profesor", "recordar siempre las mismas normas", "resolver una cuenta rápida"], correcta: 0, dificultad: 1 },
      { enunciado: "Según Kohlberg, quien obedece las normas solo para evitar un castigo se ubica en el nivel:", opciones: ["preconvencional", "convencional", "postconvencional", "argumentativo"], correcta: 0, dificultad: 1 },
      { enunciado: "La autonomía moral significa actuar bien:", opciones: ["por convicción propia, tras reflexionar", "solo cuando alguien vigila", "por miedo al castigo", "siguiendo a la mayoría sin pensar"], correcta: 0, dificultad: 1 },
      { enunciado: "Los antivalores como la mentira o la envidia se definen como:", opciones: ["actitudes que dañan a otros y a uno mismo", "valores que aún no practicamos", "normas del manual de convivencia", "emociones pasajeras sin consecuencias"], correcta: 0, dificultad: 1 },
      { enunciado: "Tu amigo copia en la prueba y la docente pregunta si alguien lo notó. Un razonamiento postconvencional te llevaría a:", opciones: ["hablar con tu amigo y, si persiste, informar con respeto", "guardar silencio para no perderlo", "contar lo ocurrido a todo el curso", "copiar también para sentirte igual"], correcta: 0, dificultad: 2 },
      { enunciado: "Evaluar una acción según principios, no según la emoción del momento, implica:", opciones: ["contrastar la decisión con valores antes de actuar", "guiarse por la rabia del momento", "hacer siempre lo más cómodo", "esperar el castigo y después cambiar"], correcta: 0, dificultad: 2 },
      { enunciado: "Al argumentar una postura ética conviene evitar:", opciones: ["descalificar a la persona en vez de rebatir sus ideas", "citar ejemplos concretos", "reconocer los límites del argumento", "escuchar la posición contraria"], correcta: 0, dificultad: 2 },
      { enunciado: "La ética del cuidado, asociada a Carol Gilligan, propone que:", opciones: ["importan las relaciones y las necesidades de las personas concretas", "lo único válido son las leyes abstractas", "cuidar es tarea exclusiva del hogar", "la moral depende solo del castigo"], correcta: 0, dificultad: 2 },
      { enunciado: "Devolver una billetera únicamente para recibir aplausos corresponde, según Kohlberg,", opciones: ["a la etapa de aprobación social, nivel convencional", "a la etapa de castigo y obediencia", "a la etapa del contrato social", "a la ética de principios universales"], correcta: 0, dificultad: 3 },
      { enunciado: "Una escuela que busca formar el juicio moral, más que la obediencia, debería:", opciones: ["presentar dilemas reales y permitir el debate respetuoso", "dictar las respuestas correctas", "evitar cualquier conflicto", "sancionar las dudas de los estudiantes"], correcta: 0, dificultad: 3 },
      { enunciado: "Para distinguir el soploneo del reporte responsable ante un daño, debemos evaluar:", opciones: ["la intención y el efecto sobre el bien común", "la edad de quien informa", "si los docentes se molestan", "la popularidad del acusado"], correcta: 0, dificultad: 3 }
    ],
    retos: [
      { titulo: "Analizar un dilema moral en clase", pasos: ["Identifico los valores en conflicto", "Considero a las personas afectadas", "Pienso en las opciones disponibles", "Elijo la opción más defendible", "Explico mis razones al grupo"], dificultad: 2 },
      { titulo: "Ubicar una acción en los niveles de Kohlberg", pasos: ["Pregunto por el motivo de la acción", "Si teme el castigo: preconvencional", "Si busca aprobación: convencional", "Si sigue principios elegidos: postconvencional", "Comparo el juicio con casos parecidos"], dificultad: 3 }
    ]
  },

  "etica-valores--convivencia--c5": {
    id: "etica-valores--convivencia--c5",
    nombre: "Teorías éticas y justicia social",
    preguntas: [
      { enunciado: "El utilitarismo, defendido por Bentham y Mill, evalúa una acción según:", opciones: ["sus consecuencias en el mayor bienestar para el mayor número", "el respeto a la intención del deber", "las virtudes del personaje histórico", "la jerarquía social establecida"], correcta: 0, dificultad: 1 },
      { enunciado: "Para Kant, el imperativo categórico manda actuar de modo que:", opciones: ["la máxima de tu acción pueda ser ley universal para todos", "la acción traiga el mayor placer a la mayoría", "la acción imite las costumbres del entorno", "la acción asegure la aprobación del grupo"], correcta: 0, dificultad: 1 },
      { enunciado: "En Aristóteles, la virtud se alcanza mediante:", opciones: ["el hábito de elegir el término medio entre dos extremos", "el miedo constante al castigo divino", "la obediencia ciega a la autoridad", "la búsqueda del placer inmediato"], correcta: 0, dificultad: 1 },
      { enunciado: "La teoría de la justicia de John Rawls propone definir las reglas:", opciones: ["bajo un velo de ignorancia, sin conocer la propia posición", "según la fuerza de la mayoría", "siguiendo los intereses del gobernante", "conforme a la tradición religiosa"], correcta: 0, dificultad: 1 },
      { enunciado: "La ética de la convicción y la de la responsabilidad, según Max Weber, exigen al ciudadano:", opciones: ["actuar por principios y responder por los efectos reales", "perseguir solo convicciones personales", "dejar las consecuencias a otros", "obedecer sin comprender"], correcta: 0, dificultad: 2 },
      { enunciado: "Un razonamiento postconvencional frente a una ley injusta lleva a:", opciones: ["cuestionar la ley y participar en transformarla", "violarla en silencio sin consecuencias", "acatarla sin reflexionar jamás", "imponer la ley propia a los demás"], correcta: 0, dificultad: 2 },
      { enunciado: "La integridad moral se demuestra cuando una persona:", opciones: ["actúa igual con o sin testigos, según sus principios", "cambia de valores según la conveniencia", "aparece solo en actos públicos", "obedece solo a quien le cae bien"], correcta: 0, dificultad: 2 },
      { enunciado: "El bien común en una comunidad educativa implica:", opciones: ["garantizar condiciones para que todos desarrollen su proyecto", "beneficiar primero a los de mejor promedio", "priorizar la popularidad del grupo", "reservar las oportunidades para algunos"], correcta: 0, dificultad: 2 },
      { enunciado: "Una institución que expone a un estudiante para escarmiento incumple, sobre todo, la idea kantiana de:", opciones: ["tratar a la persona como fin y nunca solo como medio", "maximizar el bienestar del número", "cultivar la virtud del ahorro", "cumplir el contrato mercantil"], correcta: 0, dificultad: 3 },
      { enunciado: "La diferencia entre moral y ética es que:", opciones: ["la moral son prácticas de un grupo y la ética su reflexión", "ambas significan lo mismo exactamente", "la ética es solo cosa de religiones", "la moral es universal e inmutable"], correcta: 0, dificultad: 3 },
      { enunciado: "El principio de justicia distributiva en la escuela se aplica al:", opciones: ["repartir apoyos según la necesidad de cada estudiante", "dar premios por sorteo ciego siempre", "entregar recursos a los más populares", "ocultar las diferencias de logro"], correcta: 0, dificultad: 3 },
      { enunciado: "La justicia restaurativa supera al simple castigo porque:", opciones: ["repara el daño, involucra a la comunidad y transforma el conflicto", "suspende y olvida el problema", "esconde los casos de agresión", "aplica la misma sanción a todo el mundo"], correcta: 0, dificultad: 3 }
    ],
    retos: [
      { titulo: "Analizar una decisión con tres teorías éticas", pasos: ["Describo la acción y a los afectados", "Calculo las consecuencias de cada opción", "Reviso si respeta la dignidad de las personas", "Considero las virtudes involucradas", "Comparo los tres enfoques", "Defiendo la opción más ética"], dificultad: 3 },
      { titulo: "Diseñar un proyecto de justicia social en la escuela", pasos: ["Investigo una problemática real del entorno", "Identifico a los afectados y sus derechos", "Defino metas orientadas al bien común", "Diseño acciones con participación estudiantil", "Acuerdo roles y recursos para actuar", "Evalúo los resultados y ajusto el plan"], dificultad: 2 }
    ]
  },

  "etica-valores--identidad--c1": {
    id: "etica-valores--identidad--c1",
    nombre: "Cómo soy y qué siento",
    preguntas: [
      { enunciado: "Decir mi nombre en clase me ayuda a:", opciones: ["que los demás me reconozcan", "esconderme del grupo", "confundir a mis amigos", "perder el cuaderno"], correcta: 0, dificultad: 1 },
      { enunciado: "Cuando alguien me abraza siento:", opciones: ["cariño y seguridad", "mucho frío", "ganas de correr", "sueño todo el día"], correcta: 0, dificultad: 1 },
      { enunciado: "La carita feliz del cartel de emociones dibuja:", opciones: ["la alegría", "el enojo", "el miedo", "el hambre"], correcta: 0, dificultad: 1 },
      { enunciado: "Mis gustos dicen quién soy porque:", opciones: ["muestran cómo disfruto la vida", "cambian cada cinco minutos", "los deciden solo los amigos", "son un secreto de la profe"], correcta: 0, dificultad: 2 },
      { enunciado: "Perdí mi regalo favorito. Siento enojo. Lo primero es:", opciones: ["decir en voz alta: estoy enojado", "tirar los cuadernos al piso", "golpear al primero que pase", "fingir que no pasó nada"], correcta: 0, dificultad: 2 },
      { enunciado: "Si siento miedo a la oscuridad, lo recomendable es:", opciones: ["contarle a una persona de confianza", "quedarme callado por vergüenza", "burlarme de otros con miedo", "apagar la luz del cuarto entero"], correcta: 0, dificultad: 2 },
      { enunciado: "Un compañero es más bajo que yo. Su estatura significa que:", opciones: ["crecemos distinto y ninguno vale menos", "él mandará siempre", "no puede jugar", "debe comer menos"], correcta: 0, dificultad: 3 },
      { enunciado: "Mi amiga cambió de gustos este año. Lo justo es:", opciones: ["respetarla aunque piense distinto", "dejar de hablarle", "contar sus cambios a otros", "obligarla a jugar como antes"], correcta: 0, dificultad: 3 },
      { enunciado: "Siento celos del dibujo elegido para el cartel. Debo:", opciones: ["decir lo que siento sin lastimarla", "esconder su dibujo", "decirle que su dibujo es feo", "pedir que la saquen del cartel"], correcta: 0, dificultad: 3 }
    ],
    retos: [
      { titulo: "Contar lo que siento", pasos: ["Pienso en lo que siento", "Le pongo un nombre", "Se lo digo a alguien"], dificultad: 1 },
      { titulo: "Respetar a quien es distinto a mí", pasos: ["Escucho cómo piensa mi amigo", "Busco algo que nos une", "Juego con él sin cambiarlo"], dificultad: 3 }
    ]
  },

  "etica-valores--identidad--c2": {
    id: "etica-valores--identidad--c2",
    nombre: "Emociones y autoestima",
    preguntas: [
      { enunciado: "La autoestima es:", opciones: ["el aprecio y la confianza que tengo en mí", "la lista de tareas de la semana", "el miedo a jugar en el recreo", "la vergüenza de los errores"], correcta: 0, dificultad: 1 },
      { enunciado: "Cuando tengo miedo, mi cuerpo suele avisar con:", opciones: ["el corazón rápido y los puños cerrados", "ganas de dormir temprano", "hambre repentina", "risas sin motivo"], correcta: 0, dificultad: 1 },
      { enunciado: "Celebrar mis logros ayuda a:", opciones: ["fortalecer mi confianza", "presumir de los demás", "ganar regalos", "evitar las tareas"], correcta: 0, dificultad: 1 },
      { enunciado: "Reprocharme un solo error no es cuidarme. Mejor:", opciones: ["reconocer el error y aprender de él", "olvidar todos mis trabajos", "creer que todo me sale mal", "compararme con un campeón"], correcta: 0, dificultad: 2 },
      { enunciado: "Cuando siento mucha rabia, una técnica útil es:", opciones: ["respirar profundo y contar hasta diez", "gritar en plena clase", "golpear el pupitre fuerte", "salir del colegio sin avisar"], correcta: 0, dificultad: 2 },
      { enunciado: "Se burlan de mi letra al escribir. Cuidar mi autoestima implica:", opciones: ["recordar mis cualidades y pedir respeto", "creerles y callar siempre", "burlarme de él después", "dejar de escribir en clase"], correcta: 0, dificultad: 2 },
      { enunciado: "Ana perdió el partido. Llora. Su autoestima se apoya si le digo:", opciones: ["que una derrota no borra lo bueno que hace", "que no vuelva a jugar nunca", "que es la peor del equipo", "que llore escondido"], correcta: 0, dificultad: 3 },
      { enunciado: "Siento celos cuando eligen a otro para el acto; lo sano es:", opciones: ["reconocerlo sin humillar al elegido", "hacerlo sentir mal", "inventar chismes de él", "pedir que lo cambien"], correcta: 0, dificultad: 3 },
      { enunciado: "Nadie es perfecto ni siempre gana. Por eso debo:", opciones: ["aceptar mis límites y seguir intentando", "rendirme ante la primera", "compararme con todo el curso", "esperar aplausos de todos"], correcta: 0, dificultad: 3 }
    ],
    retos: [
      { titulo: "Calmar la rabia en clase", pasos: ["Detengo mis manos", "Respiro despacio", "Cuento hasta diez", "Explico qué me molestó"], dificultad: 1 },
      { titulo: "Fortalecer mi autoestima día a día", pasos: ["Reconozco un logro del día", "Pido ayuda en lo que me cuesta", "Celebro mi esfuerzo", "Trato con cariño mis errores"], dificultad: 3 }
    ]
  },

  "etica-valores--identidad--c3": {
    id: "etica-valores--identidad--c3",
    nombre: "Identidad, autonomía y decisiones",
    preguntas: [
      { enunciado: "La identidad de una persona se construye con:", opciones: ["la cultura, la familia y las experiencias propias", "solo el aspecto físico del rostro", "los gustos copiados de internet", "la suerte que le toca vivir"], correcta: 0, dificultad: 1 },
      { enunciado: "Actuar con autonomía es:", opciones: ["decidir con criterio propio asumiendo las consecuencias", "hacer siempre lo que dicen los demás", "ignorar todas las normas sin más", "esquivar cualquier responsabilidad"], correcta: 0, dificultad: 1 },
      { enunciado: "La presión de grupo se nota cuando alguien:", opciones: ["renuncia a sus ideas para que lo acepten", "propone un acuerdo", "explica su opinión", "escucha antes de decidir"], correcta: 0, dificultad: 1 },
      { enunciado: "Conocer mis fortalezas y mis defectos sirve para:", opciones: ["tomar decisiones acordes a quien soy", "creerme mejor que los demás", "esconder mi personalidad", "copiar siempre modelos ajenos"], correcta: 0, dificultad: 1 },
      { enunciado: "Tus amigos van a faltar a la última hora. Tú entras porque la materia te importa. Ahí se nota:", opciones: ["autonomía al actuar según tus principios", "timidez", "rebeldía gratuita", "falta de personalidad propia"], correcta: 0, dificultad: 2 },
      { enunciado: "Te ponen un apodo con el que no te sientes cómodo. Lo más sano es:", opciones: ["decir con respeto que prefieres tu nombre", "aceptar para que no se molesten", "enojarte y pelear con todos", "poner apodos a los demás"], correcta: 0, dificultad: 2 },
      { enunciado: "Antes de elegir una actividad extraclase, una decisión informada exige:", opciones: ["conocer horarios, costos y riesgos reales", "decir que sí sin preguntar nada", "seguir la corriente del curso", "dejar que otros decidan por ti"], correcta: 0, dificultad: 2 },
      { enunciado: "La identidad cultural de un compañero se refleja en:", opciones: ["su música, su comida y su forma de hablar", "solo en su ropa nueva", "en las notas del periodo", "en el teléfono que usa"], correcta: 0, dificultad: 3 },
      { enunciado: "Sara quiere estudiar música y su familia prefiere otra carrera. La actitud ética sería:", opciones: ["dialogar con respeto sobre sueños y tiempos", "renunciar a su sueño sin hablar", "pelear sin escuchar a nadie", "ocultar su gusto por la música siempre"], correcta: 0, dificultad: 3 },
      { enunciado: "Vestirse distinto a la mayoría incomoda. Quien respeta su identidad y la ajena:", opciones: ["defiende su forma de ser sin atacar a otros", "obliga a todos a vestirse igual", "esconde sus gustos por miedo", "se burla de quien no lo imita"], correcta: 0, dificultad: 3 }
    ],
    retos: [
      { titulo: "Tomar una decisión con autonomía", pasos: ["Identifico qué debo decidir", "Reúno información sobre opciones", "Pienso en las consecuencias", "Elijo y asumo la decisión"], dificultad: 2 },
      { titulo: "Resistir la presión de grupo", pasos: ["Reconozco que me están presionando", "Me detengo antes de reaccionar", "Recuerdo mis valores", "Respondo con firmeza y busco aliado"], dificultad: 3 }
    ]
  },

  "etica-valores--identidad--c4": {
    id: "etica-valores--identidad--c4",
    nombre: "Proyecto de vida y metas",
    preguntas: [
      { enunciado: "El proyecto de vida es:", opciones: ["un plan que ordena metas personales, escolares y familiares", "un sueño pasajero sin acción alguna", "una lista de deseos sin plazos", "una moda que cambian los amigos"], correcta: 0, dificultad: 1 },
      { enunciado: "Una meta bien formulada en el proyecto de vida resulta:", opciones: ["clara, medible, con un plazo definido", "imposible y secreta", "prestada de otro compañero", "solo imaginada"], correcta: 0, dificultad: 1 },
      { enunciado: "Las metas a corto plazo en el proyecto de vida son las que:", opciones: ["se logran pronto, en días o semanas", "tardan veinte años", "dependen solo de otros", "nunca se revisan"], correcta: 0, dificultad: 1 },
      { enunciado: "La resiliencia ayuda al proyecto de vida porque permite:", opciones: ["reponerse ante las dificultades", "evitar todo esfuerzo", "olvidar los sueños", "culpar a los demás"], correcta: 0, dificultad: 1 },
      { enunciado: "Los sueños sin acción, en un proyecto de vida, se quedan en:", opciones: ["deseos incumplidos", "metas", "paso a paso", "valores"], correcta: 0, dificultad: 2 },
      { enunciado: "Las metas de una persona se basan en valores porque:", opciones: ["los valores guían las decisiones importantes", "los valores reemplazan las acciones", "los valores son reglas de tránsito", "los valores solo importan a adultos"], correcta: 0, dificultad: 2 },
      { enunciado: "En el componente escolar del proyecto de vida conviene:", opciones: ["fijar metas de aprendizaje con rutinas y seguimiento", "copiar el plan del compañero", "esperar al fin de año sin hacer nada", "saltar las dificultades"], correcta: 0, dificultad: 2 },
      { enunciado: "El proyecto de vida y la presión de grupo a veces chocan porque:", opciones: ["el grupo puede desviar a la persona de sus metas", "las metas solo se cumplen sin amigos", "la presión siempre ayuda", "los planes nunca cambian"], correcta: 0, dificultad: 3 },
      { enunciado: "Una meta que choca con los valores de mi familia muestra:", opciones: ["un conflicto de prioridades que exige dialogar", "una razón para rendirse", "una prueba de fracaso", "un camino imposible"], correcta: 0, dificultad: 3 },
      { enunciado: "Evaluar si una meta realmente es propia exige preguntar:", opciones: ["si refleja mis valores, no solo la presión externa", "si la alcanzan todos en el curso", "si la aplauden en redes sociales", "si me toma muy poco tiempo"], correcta: 0, dificultad: 3 }
    ],
    retos: [
      { titulo: "Formular una meta del proyecto de vida", pasos: ["Elijo un sueño importante", "Lo convierto en meta concreta", "Defino cómo la mediré", "Pongo fechas y pasos", "Reviso lo aprendido"], dificultad: 2 },
      { titulo: "Superar un obstáculo del proyecto de vida", pasos: ["Reconozco el obstáculo", "Reviso alternativas del plan", "Pido orientación a un aliado", "Pruebo la alternativa elegida", "Ajusto la meta o el camino"], dificultad: 3 }
    ]
  },

  "etica-valores--identidad--c5": {
    id: "etica-valores--identidad--c5",
    nombre: "Sentido de la vida y alteridad",
    preguntas: [
      { enunciado: "Para Viktor Frankl, la pregunta por el sentido de la vida:", opciones: ["tiene una respuesta distinta en cada situación concreta", "se resuelve con dinero", "no aplica a los jóvenes", "depende solo del éxito"], correcta: 0, dificultad: 1 },
      { enunciado: "La alteridad, pensada por Levinas, reconoce que:", opciones: ["el rostro del otro me pide responsabilidad", "el otro es un medio para mis planes", "solo importan mis deseos", "la diferencia se debe eliminar"], correcta: 0, dificultad: 1 },
      { enunciado: "La vocación, dentro de un proyecto de vida, combina:", opciones: ["talento, interés y servicio a los demás", "el deseo de fama", "la moda laboral del momento", "solo el ingreso económico"], correcta: 0, dificultad: 1 },
      { enunciado: "La libertad humana se ejercita realmente con:", opciones: ["responsabilidad frente a las consecuencias", "ausencia total de límites", "espontaneidad sin pensar", "indiferencia ante los otros"], correcta: 0, dificultad: 1 },
      { enunciado: "Según Frankl, ante una limitación que no puedo cambiar encuentro sentido mediante:", opciones: ["la actitud que decido tomar", "el reclamo permanente", "la culpa hacia otros", "el humor burlón"], correcta: 0, dificultad: 2 },
      { enunciado: "El altruismo y la responsabilidad social se relacionan porque:", opciones: ["el bien hacia el otro se vuelve compromiso sostenido", "dar una sola vez lo cambia todo", "ayudar siempre da fama", "el deber es solo cosa de leyes"], correcta: 0, dificultad: 2 },
      { enunciado: "Conciencia moral es saber discernir:", opciones: ["entre el bien y el mal al elegir", "normas de tránsito", "trucos para no ser descubierto", "debates entre amigos"], correcta: 0, dificultad: 2 },
      { enunciado: "La empatía y la compasión se distinguen en que la compasión:", opciones: ["reconoce el dolor ajeno y se compromete a aliviarlo", "siente pena sin actuar", "compara sufrimientos", "regala dinero por quedar bien"], correcta: 0, dificultad: 2 },
      { enunciado: "Cuidar el propio proyecto y abrirse al bien común se expresa en:", opciones: ["vincular el crecimiento personal con el de la comunidad", "servir solo por reconocimiento", "vivir a la defensiva", "guardar los dones para uno mismo"], correcta: 0, dificultad: 3 },
      { enunciado: "El concepto de 'sociedad del cansancio', de Byung-Chul Han, describe el malestar por:", opciones: ["el exceso de exigencia y autoexplotación", "la falta de metas", "el miedo a los otros", "el poco uso del tiempo libre"], correcta: 0, dificultad: 3 },
      { enunciado: "Una ética del sentido, aplicada a la vida cotidiana:", opciones: ["ordena las metas según el bien propio y el común", "prioriza la autorrealización sobre los demás", "se centra solo en emociones", "busca la aprobación de todos"], correcta: 0, dificultad: 3 },
      { enunciado: "En una sociedad compleja, elegir vocación implica:", opciones: ["conectar los sueños propios con necesidades colectivas", "escuchar a otros y actuar solo", "priorizar el sueldo y la fama", "seguir la tendencia del mercado"], correcta: 0, dificultad: 3 }
    ],
    retos: [
      { titulo: "Pasar de un sueño a un proyecto con sentido", pasos: ["Reconozco lo que me apasiona", "Reviso mis valores y talentos", "Identifico una necesidad del entorno", "Formulo metas con pasos concretos", "Acuerdo tiempos y aliados", "Evalúo el camino y el impacto"], dificultad: 2 },
      { titulo: "Alinear el proyecto de vida con la alteridad", pasos: ["Pregunto a quién afecta mi decisión", "Considero la voz de los afectados", "Ajusto mis metas al bien común", "Acuerdo acciones con otras personas", "Reviso lo aprendido en equipo"], dificultad: 3 }
    ]
  },

  "etica-valores--derechos-humanos--c1": {
    id: "etica-valores--derechos-humanos--c1",
    nombre: "Derechos de los niños",
    preguntas: [
      { enunciado: "Mi nombre y mi apellido propio son:", opciones: ["un derecho que me identifica", "un adorno para documentos", "un juego del curso", "un invento de la familia"], correcta: 0, dificultad: 1 },
      { enunciado: "Estudiar en el colegio es un derecho porque:", opciones: ["me permite crecer y aprender", "es un castigo frecuente", "solo sirve para adultos", "es un gasto familiar"], correcta: 0, dificultad: 1 },
      { enunciado: "Jugar en el recreo también es un derecho porque:", opciones: ["ayuda a mi cuerpo y a mis emociones", "me quita tiempo de tarea", "es perder el tiempo", "solo es para grandes"], correcta: 0, dificultad: 1 },
      { enunciado: "El derecho a la familia significa:", opciones: ["vivir cuidado por personas que me quieren", "no tener ninguna regla", "que me compren todo", "que otros hablen por mí"], correcta: 0, dificultad: 2 },
      { enunciado: "Si un adulto me grita, mi derecho al respeto implica que:", opciones: ["un adulto de confianza me escuche", "deba quedarme callado siempre", "grite yo también más fuerte", "nadie se entere nunca"], correcta: 0, dificultad: 2 },
      { enunciado: "El derecho de participación significa que:", opciones: ["puedo dar ideas y me escuchan", "debo callar por ser niño", "mando yo en toda la casa", "decido sin pensar nunca"], correcta: 0, dificultad: 2 },
      { enunciado: "Comer, dormir, estudiar:", opciones: ["protegen mi vida y mi desarrollo", "son premios que se pagan", "son cosas del futuro", "son castigos justos"], correcta: 0, dificultad: 3 },
      { enunciado: "Un deber que cuida mi derecho a la educación es:", opciones: ["hacer mis tareas con dedicación", "ir al colegio solo los viernes", "copiar las tareas del amigo", "llegar tarde y no preguntar"], correcta: 0, dificultad: 3 },
      { enunciado: "Que respeten mi forma de pensar me enseña a:", opciones: ["respetar la de los demás", "pensar que soy el jefe", "no escuchar nunca", "cambiar siempre de opinión"], correcta: 0, dificultad: 3 }
    ],
    retos: [
      { titulo: "Conocer mis derechos", pasos: ["Miro el cartel del curso", "Leo cada derecho con calma", "Pienso quién lo cuida"], dificultad: 1 },
      { titulo: "Pedir ayuda ante un problema", pasos: ["Reconozco lo que me pasa", "Hablo con un adulto de confianza", "Acordamos qué hacer"], dificultad: 3 }
    ]
  },

  "etica-valores--derechos-humanos--c2": {
    id: "etica-valores--derechos-humanos--c2",
    nombre: "Derechos y deberes en casa y en el colegio",
    preguntas: [
      { enunciado: "Un deber de los estudiantes es:", opciones: ["cumplir las normas del manual de convivencia", "elegir las notas del curso", "suspender el recreo", "mandar en la casa"], correcta: 0, dificultad: 1 },
      { enunciado: "El manual de convivencia se cumple porque:", opciones: ["protege los derechos de todos", "lo dicen los más populares", "es solo una sugerencia", "lo firmé en vacaciones"], correcta: 0, dificultad: 1 },
      { enunciado: "Las libertades que tenemos traen consigo:", opciones: ["responsabilidades", "permisos totales", "castigos", "vacaciones"], correcta: 0, dificultad: 1 },
      { enunciado: "Reclamar mi derecho al juego sin cumplir el deber de estudiar es:", opciones: ["incompleto: derechos y deberes caminan juntos", "lo correcto para un niño", "permitido siempre", "otro deber escolar"], correcta: 0, dificultad: 2 },
      { enunciado: "El derecho a la libertad de cultos en el curso significa:", opciones: ["respetar las creencias de cada compañero", "obligar a rezar", "burlarse de las religiones", "prohibir toda creencia"], correcta: 0, dificultad: 2 },
      { enunciado: "Votar por el personero estudiantil es un ejemplo de:", opciones: ["participación en el gobierno escolar", "un deber de la casa", "un juego del recreo", "una sanción escolar"], correcta: 0, dificultad: 2 },
      { enunciado: "Mi deber de estudiar se apoya en el derecho a la educación. Por eso debo:", opciones: ["aprovechar el colegio y participar", "reclamar derechos sin aportar", "esperar notas sin estudiar", "dejar el colegio si me aburro"], correcta: 0, dificultad: 3 },
      { enunciado: "Los deberes acompañan a los derechos porque:", opciones: ["ejercer derechos exige responder por los demás", "son exactamente lo mismo", "los deberes valen más", "los derechos se compran"], correcta: 0, dificultad: 3 },
      { enunciado: "En casa, el derecho a la participación se vive cuando:", opciones: ["decido junto a mi familia", "solo hablan los adultos", "reclamo con gritos", "obedezco sin opinar nunca"], correcta: 0, dificultad: 3 }
    ],
    retos: [
      { titulo: "Cumplir mis deberes en el aula", pasos: ["Reviso el manual", "Identifico qué me toca", "Cumplo sin que me recuerden", "Verifico el resultado"], dificultad: 1 },
      { titulo: "Ejercer un derecho con responsabilidad", pasos: ["Reclamo mi derecho", "Escucho los derechos ajenos", "Busco una solución justa", "Asumo el acuerdo"], dificultad: 3 }
    ]
  },

  "etica-valores--derechos-humanos--c3": {
    id: "etica-valores--derechos-humanos--c3",
    nombre: "Derechos humanos y grupos de atención prioritaria",
    preguntas: [
      { enunciado: "La dignidad humana significa que toda persona:", opciones: ["vale por sí misma, sin condiciones", "vale según su dinero", "debe ganarse el respeto", "solo vale cuando está en público"], correcta: 0, dificultad: 1 },
      { enunciado: "Los derechos humanos son universales porque:", opciones: ["pertenecen a todas las personas", "son regalos temporales", "aplican solo a adultos", "dependen del buen comportamiento"], correcta: 0, dificultad: 1 },
      { enunciado: "El preámbulo de la Constitución de 1991 afirma:", opciones: ["la dignidad e identidad de las personas en Colombia", "la historia de Colombia", "la ubicación del país", "el escudo nacional"], correcta: 0, dificultad: 1 },
      { enunciado: "Son grupos de atención prioritaria:", opciones: ["la niñez, las personas mayores, las mujeres embarazadas", "los turistas del año", "los estudiantes destacados", "los vecinos antiguos"], correcta: 0, dificultad: 1 },
      { enunciado: "El Código de la Infancia y la Adolescencia es la Ley:", opciones: ["1098 de 2006", "1620 de 2013", "1732 de 2015", "115 de 1994"], correcta: 0, dificultad: 2 },
      { enunciado: "Cuando un derecho fundamental se amenaza y no hay otro medio, el ciudadano puede acudir a:", opciones: ["la acción de tutela", "el recreo ampliado", "la asamblea del curso", "el boletín escolar"], correcta: 0, dificultad: 2 },
      { enunciado: "Las personas con discapacidad tienen derecho a:", opciones: ["accesibilidad y apoyos para participar en igualdad", "la lástima de la comunidad", "espacios reservados permanentes", "esperar su turno en silencio"], correcta: 0, dificultad: 2 },
      { enunciado: "Los derechos de la niñez se protegen de manera prioritaria porque:", opciones: ["son personas en desarrollo que requieren cuidado especial", "los niños siempre mandan", "así conviene al colegio", "la ley elimina sus deberes"], correcta: 0, dificultad: 3 },
      { enunciado: "El derecho a la igualdad del artículo 13 de la Constitución exige que:", opciones: ["el Estado proteja a todas las personas sin discriminación", "todos ganemos los mismos premios", "los niños valgan menos", "nadie pueda reclamar nada"], correcta: 0, dificultad: 3 },
      { enunciado: "El colegio debe actuar de oficio ante un caso de acoso porque:", opciones: ["los adultos garantizan los derechos de los estudiantes", "así evita una multa", "los profesores lo deciden ese día", "el Estado no interviene"], correcta: 0, dificultad: 3 }
    ],
    retos: [
      { titulo: "Proteger mis derechos de estudiante", pasos: ["Reviso el manual de convivencia", "Identifico el derecho afectado", "Hablo con un adulto de confianza", "Solicito la protección del colegio"], dificultad: 2 },
      { titulo: "Apoyar a un grupo de atención prioritaria", pasos: ["Reconozco la situación del grupo", "Pregunto qué apoyo necesita", "Coordinemos acciones con el colegio", "Seguimos cómo avanzamos"], dificultad: 3 }
    ]
  },

  "etica-valores--derechos-humanos--c4": {
    id: "etica-valores--derechos-humanos--c4",
    nombre: "Diversidad, igualdad de género y no discriminación",
    preguntas: [
      { enunciado: "La Constitución de 1991, en su artículo 7:", opciones: ["reconoce y protege la diversidad étnica y cultural de Colombia", "declara una identidad única mestiza", "prohíbe la educación religiosa", "elimina las lenguas nativas"], correcta: 0, dificultad: 1 },
      { enunciado: "La igualdad de género significa que:", opciones: ["las personas, sin importar su género, tenemos los mismos derechos", "las mujeres mandan sobre los hombres", "los hombres deciden primero", "solo aplica dentro del colegio"], correcta: 0, dificultad: 1 },
      { enunciado: "Los roles de género son:", opciones: ["expectativas sociales sobre cómo deben actuar hombres y mujeres", "aficiones personales de cada quien", "cargos de una empresa", "reglas de etiqueta en la mesa"], correcta: 0, dificultad: 1 },
      { enunciado: "La Ley 70 de 1993 reconoce derechos de las comunidades:", opciones: ["negras, palenqueras y raizales", "solo de los ciudadanos urbanos", "europeas en Colombia", "exclusivamente femeninas"], correcta: 0, dificultad: 1 },
      { enunciado: "Un compañero trans se identifica con el nombre elegido. En el colegio, eso demuestra:", opciones: ["respeto por su identidad", "una falta de seriedad", "un problema ajeno", "un mal ejemplo"], correcta: 0, dificultad: 2 },
      { enunciado: "La orientación sexual se refiere a:", opciones: ["la atracción afectiva y romántica de cada persona", "la ropa preferida", "la carrera elegida", "el país de residencia"], correcta: 0, dificultad: 2 },
      { enunciado: "Cuando no dejan a una niña jugar fútbol en el recreo hay:", opciones: ["discriminación por género", "un juego normal", "una medida justa", "una tradición correcta"], correcta: 0, dificultad: 2 },
      { enunciado: "En una escuela que respeta la diversidad, la orientación sexual de un estudiante:", opciones: ["es un aspecto personal digno de respeto", "es un tema de burlas", "no existe en el colegio", "es una moda pasajera"], correcta: 0, dificultad: 2 },
      { enunciado: "Una empresa paga menos a una mujer por el solo hecho de serlo. Eso es:", opciones: ["discriminación por género", "discriminación por edad", "desigualdad justa", "segregación escolar"], correcta: 0, dificultad: 3 },
      { enunciado: "El acoso por la apariencia física de un compañero vulnera su derecho a:", opciones: ["un ambiente escolar libre de violencia", "la educación bilingüe", "la jornada nocturna", "la libertad de empresa"], correcta: 0, dificultad: 3 },
      { enunciado: "La afirmación 'los hombres son mejores en matemáticas' se sostiene en:", opciones: ["un estereotipo de género aprendido, no en hechos biológicos", "una evidencia científica comprobada", "la falta de esfuerzo de las niñas", "lo que dicta el manual de convivencia"], correcta: 0, dificultad: 3 }
    ],
    retos: [
      { titulo: "Promover la igualdad de género en el curso", pasos: ["Detecto discriminaciones cotidianas", "Reviso cómo se reparten los turnos", "Propongo un acuerdo equitativo", "Aplico las reglas del diálogo", "Verifico que nadie quede excluido"], dificultad: 2 },
      { titulo: "Denunciar un acto discriminatorio", pasos: ["Reconozco la discriminación", "Escucho a la persona afectada", "Reporto al docente o al comité de convivencia", "Solicito garantías de no repetición", "Acompaño el seguimiento"], dificultad: 3 }
    ]
  },

  "etica-valores--derechos-humanos--c5": {
    id: "etica-valores--derechos-humanos--c5",
    nombre: "Justicia transicional y derechos humanos",
    preguntas: [
      { enunciado: "El propósito central de la justicia transicional es:", opciones: ["responder por graves violaciones y construir una paz estable", "sancionar todas las faltas menores", "preservar privilegios del pasado", "reducir impuestos nacionales"], correcta: 0, dificultad: 1 },
      { enunciado: "La Ley 1448 de 2011 es conocida como:", opciones: ["Ley de Víctimas y Restitución de Tierras", "Ley de Conciliación en Derecho", "Ley General de Contratación", "Ley de Ciudadanía"], correcta: 0, dificultad: 1 },
      { enunciado: "La JEP hace parte del Sistema Integral de Verdad, Justicia, Reparación y:", opciones: ["No Repetición", "Sanción Económica", "Amnistía Tributaria", "Reforma Escolar"], correcta: 0, dificultad: 1 },
      { enunciado: "La Comisión para el Esclarecimiento de la Verdad busca principalmente:", opciones: ["recoger testimonios y explicar años de conflicto armado", "reemplazar a la Fiscalía", "destruir archivos clasificados", "juzgar militares en servicio"], correcta: 0, dificultad: 1 },
      { enunciado: "Los cuatro ejes de la justicia transicional en Colombia son:", opciones: ["verdad, justicia, reparación y no repetición", "fama, poder, silencio y castigo", "juicio, multa, cárcel y vigilancia", "verdad, castigo, silencio y olvido"], correcta: 0, dificultad: 2 },
      { enunciado: "La Unidad de Búsqueda de Personas dadas por Desaparecidas (UBPD) es:", opciones: ["una unidad humanitaria y extrajudicial que busca a desaparecidos", "un tribunal que condena a culpables", "una ONG extranjera de presión", "una oficina de registro civil"], correcta: 0, dificultad: 2 },
      { enunciado: "La 'verdad judicial' se distingue porque se construye:", opciones: ["con pruebas y sentencias dentro de procesos", "a partir de memorias y testimonios", "según las noticias del día", "por opiniones en redes sociales"], correcta: 0, dificultad: 2 },
      { enunciado: "La reparación integral a las víctimas incluye:", opciones: ["restitución, indemnización, rehabilitación y satisfacción", "una disculpa breve", "trabajo comunitario forzado", "solo dinero en efectivo"], correcta: 0, dificultad: 2 },
      { enunciado: "El Acuerdo Final de Paz con las FARC-EP fue firmado en:", opciones: ["noviembre de 2016", "junio de 1991", "marzo de 2002", "julio de 2022"], correcta: 0, dificultad: 3 },
      { enunciado: "La justicia restaurativa en el posacuerdo se centra en:", opciones: ["la responsabilidad de los comparecientes frente a las víctimas", "el encarcelamiento sin juicio previo", "la reclusión como único camino", "el castigo a las familias"], correcta: 0, dificultad: 3 },
      { enunciado: "Las garantías de no repetición dependen sobre todo de:", opciones: ["transformaciones estructurales que cierren el paso a la violencia", "archivar los casos judiciales", "silenciar a las organizaciones de víctimas", "dejar el conflicto en el olvido"], correcta: 0, dificultad: 3 },
      { enunciado: "La Cátedra de la Paz en el posacuerdo busca en el aula:", opciones: ["comprensión crítica del conflicto y reafirmación de valores ciudadanos", "cultivar la desconfianza", "repetir consignas oficiales", "impulsar el olvido colectivo"], correcta: 0, dificultad: 3 }
    ],
    retos: [
      { titulo: "Recorrer el Sistema Integral de Verdad, Justicia, Reparación y No Repetición", pasos: ["Reviso los componentes del Sistema Integral", "Ubico qué hace la JEP y qué la Comisión de la Verdad", "Distingo la búsqueda humanitaria de la UBPD", "Comparo los cuatro ejes entre sí", "Conecto cada eje con las víctimas", "Presento conclusiones al grupo"], dificultad: 2 },
      { titulo: "Explicar el paso de la justicia transicional al posacuerdo", pasos: ["Defino qué es la justicia transicional", "Reuno verdad, justicia, reparación y no repetición", "Identifico los componentes del acuerdo de paz", "Contrasto con la justicia ordinaria", "Analizo medidas de reparación a las víctimas", "Argumento cómo se construye la no repetición"], dificultad: 3 }
    ]
  },

  "etica-valores--etica-digital--c1": {
    id: "etica-valores--etica-digital--c1",
    nombre: "Pedir permiso y usar con cuidado",
    preguntas: [
      { enunciado: "Antes de usar el celular de mi mamá debo:", opciones: ["pedirle permiso", "esconderlo", "prenderlo rápido", "cargarlo yo solo"], correcta: 0, dificultad: 1 },
      { enunciado: "La tableta del colegio sirve para:", opciones: ["aprender con las actividades", "jugar todo el día", "llevárla a la casa", "prestarla sin preguntar"], correcta: 0, dificultad: 1 },
      { enunciado: "Si un líquido cae sobre el teclado, debo:", opciones: ["avisar a un adulto", "ocultar el daño", "seguir escribiendo", "soplar fuerte"], correcta: 0, dificultad: 1 },
      { enunciado: "Quiero tomarle una foto a mi amigo. Lo correcto es:", opciones: ["pedirle permiso antes", "tomársela sin que se dé cuenta", "publicarla enseguida", "mandarla a otros grupos"], correcta: 0, dificultad: 2 },
      { enunciado: "Terminar la tarea antes de usar el celular ayuda a:", opciones: ["organizar mi tiempo", "saltar las normas", "olvidarme de estudiar", "dormir menos"], correcta: 0, dificultad: 2 },
      { enunciado: "El televisor de la sala lo cuidamos cuando:", opciones: ["lo usamos con moderación", "lo dejamos encendido", "lo movemos solos", "lo limpiamos con agua"], correcta: 0, dificultad: 2 },
      { enunciado: "Un juego en línea pide dinero para avanzar. Lo correcto es:", opciones: ["hablar primero con mis padres", "comprar sin decir nada", "pedir la tarjeta de mamá", "seguir jugando a escondidas"], correcta: 0, dificultad: 3 },
      { enunciado: "Perdí el borrador de mi tarea en la tableta. Con calma debo:", opciones: ["avisar al docente a tiempo", "copiar la del amigo", "hacer cuenta que no pasó", "no entregar nada"], correcta: 0, dificultad: 3 },
      { enunciado: "En el recreo, el celular de un compañero cae al piso. Debo:", opciones: ["ayudarlo y avisar a un adulto", "mirarlo y devolverlo después", "seguir de largo", "guardarlo como mío"], correcta: 0, dificultad: 3 }
    ],
    retos: [
      { titulo: "Pedir permiso antes de usar", pasos: ["Pienso qué voy a usar", "Pregunto si me dejan", "Lo devuelvo bien cuidado"], dificultad: 1 },
      { titulo: "Cuidar la tecnología del salón", pasos: ["Usar el equipo con calma", "Avisar si algo falla", "Apagar todo al final"], dificultad: 3 }
    ]
  },

  "etica-valores--etica-digital--c2": {
    id: "etica-valores--etica-digital--c2",
    nombre: "Trato respetuoso en línea",
    preguntas: [
      { enunciado: "El saludo y la cortesía en los chats demuestran:", opciones: ["respeto por los demás", "prisa por salir", "aburrimiento", "ganas de molestar"], correcta: 0, dificultad: 1 },
      { enunciado: "Si algo me molesta de un mensaje debo:", opciones: ["decirlo sin ofender", "enviar emojis de enojo", "difundir la captura", "responder gritando"], correcta: 0, dificultad: 1 },
      { enunciado: "Los insultos en una partida de videojuegos:", opciones: ["hacen daño y dañan el juego", "divierten a todos", "son parte del juego", "son gratis"], correcta: 0, dificultad: 1 },
      { enunciado: "No comparto fotos de un compañero sin su permiso porque:", opciones: ["cada quien decide sobre su imagen", "se ven feas", "ocupan memoria", "el celular las borra"], correcta: 0, dificultad: 2 },
      { enunciado: "Al escribirle un correo al docente, lo adecuado es:", opciones: ["saludar y explicar con respeto", "escribir solo la nota", "mandar emojis sueltos", "exigir respuesta urgente"], correcta: 0, dificultad: 2 },
      { enunciado: "Si veo una injusticia en el chat del curso debo:", opciones: ["responder con respeto y proponer diálogo", "compartir el chisme", "decir groserías", "reírme del afectado"], correcta: 0, dificultad: 2 },
      { enunciado: "Un compañero envía audios que ridiculizan a otro. El trato respetuoso pide:", opciones: ["no reír ni reenviar, y acompañar al afectado", "quedarme callado", "responder con otro audio", "salir del chat sin decir nada"], correcta: 0, dificultad: 3 },
      { enunciado: "Antes de contestar un mensaje que me enfurece conviene:", opciones: ["leerlo otra vez con calma", "responder de una vez", "subir una captura", "llamar a mis amigos"], correcta: 0, dificultad: 3 },
      { enunciado: "Un desconocido por chat me pide fotos mías. Debo:", opciones: ["contarle a un adulto de confianza", "responderle solo a veces", "mandarle una foto normal", "no contar nada"], correcta: 0, dificultad: 3 }
    ],
    retos: [
      { titulo: "Escribir con respeto en un chat", pasos: ["Pienso qué voy a decir", "Leo antes de enviar", "Quito palabras que duelan", "Saludo y espero la respuesta"], dificultad: 1 },
      { titulo: "Manejar un conflicto en línea", pasos: ["Me calmo antes de responder", "Hablo con el compañero", "Evito difundir el problema", "Busco un acuerdo respetuoso"], dificultad: 3 }
    ]
  },

  "etica-valores--etica-digital--c3": {
    id: "etica-valores--etica-digital--c3",
    nombre: "Huella digital y ciberacoso",
    preguntas: [
      { enunciado: "La huella digital es:", opciones: ["el rastro de datos que dejamos al usar las tecnologías", "una aplicación para fotos", "la clave de acceso", "un juego de redes"], correcta: 0, dificultad: 1 },
      { enunciado: "La huella digital de una persona:", opciones: ["suele permanecer y otros pueden consultarla", "se borra cuando queramos", "solo dura segundos", "no existe en redes"], correcta: 0, dificultad: 1 },
      { enunciado: "El ciberacoso consiste en:", opciones: ["agresiones por pantallas, intencionales y repetidas", "un malentendido digital esporádico", "compartir fotos con permiso", "jugar en línea con amigos"], correcta: 0, dificultad: 1 },
      { enunciado: "La contraseña de mis cuentas la comparto con:", opciones: ["nadie, salvo un adulto de confianza", "mi amigo cercano", "un compañero del curso", "el tutor del videojuego"], correcta: 0, dificultad: 1 },
      { enunciado: "Difundir una foto privada de un compañero sin su consentimiento es:", opciones: ["vulnerar su intimidad y ejercer ciberacoso", "una broma inofensiva", "una forma de popularidad", "un acto de confianza"], correcta: 0, dificultad: 2 },
      { enunciado: "Si alguien crea un perfil falso con mi nombre debo:", opciones: ["avisar a un adulto y reportar la plataforma", "borrar todas mis cuentas", "responder con insultos", "esperar a ver qué pasa"], correcta: 0, dificultad: 2 },
      { enunciado: "Antes de publicar algo íntimo de otros conviene recordar que:", opciones: ["la información privada se puede difundir sin control", "solo la verán los amigos", "se elimina sola", "es un chisme cualquiera"], correcta: 0, dificultad: 2 },
      { enunciado: "Borrar una publicación no borra del todo la huella porque:", opciones: ["pudo ser copiada, guardada o difundida", "internet reinicia sus datos", "la plataforma restaura todo", "nadie guarda capturas"], correcta: 0, dificultad: 3 },
      { enunciado: "El acoso en línea pasa de situación tipo II a tipo III cuando:", opciones: ["la conducta reviste características de delito", "la víctima se desconecta", "el agresor borra su perfil", "los docentes investigan"], correcta: 0, dificultad: 3 },
      { enunciado: "Publicar el domicilio o el teléfono de un compañero es grave porque:", opciones: ["lo expone a riesgos y vulnera su intimidad", "solo afecta la batería del celular", "es una moda digital", "aumenta los seguidores"], correcta: 0, dificultad: 3 }
    ],
    retos: [
      { titulo: "Cuidar mi huella digital", pasos: ["Pienso antes de publicar", "Evito contenido que me dañe", "Configuro la privacidad", "Reviso lo que he subido"], dificultad: 2 },
      { titulo: "Actuar ante un caso de ciberacoso", pasos: ["Guardo capturas como evidencia", "Bloqueo a quien agrede", "Cuento lo que pasa a un adulto", "Denuncio con el colegio o la familia"], dificultad: 3 }
    ]
  },

  "etica-valores--etica-digital--c4": {
    id: "etica-valores--etica-digital--c4",
    nombre: "Ética en redes sociales y viralidad",
    preguntas: [
      { enunciado: "La viralidad de una publicación significa que:", opciones: ["llega a muchísimas personas en poco tiempo", "se queda entre amigos", "cuesta dinero", "no se puede copiar"], correcta: 0, dificultad: 1 },
      { enunciado: "Antes de compartir una noticia debo:", opciones: ["revisar la fuente y la fecha", "creer solo el titular", "esperar a que otros la compartan", "compartirla rápido"], correcta: 0, dificultad: 1 },
      { enunciado: "Las noticias falsas dañan porque:", opciones: ["difunden desinformación que afecta personas reales", "parecen largas", "vienen en video", "llegan de madrugada"], correcta: 0, dificultad: 1 },
      { enunciado: "La reputación digital es:", opciones: ["lo que internet muestra y dice de una persona", "el número de seguidores", "la clave maestra", "el plan de datos"], correcta: 0, dificultad: 1 },
      { enunciado: "Compartir el video de un compañero tropezando, sin su permiso, afecta:", opciones: ["su honra y su imagen", "la batería del celular", "el plan de datos del colegio", "el horario de clases"], correcta: 0, dificultad: 2 },
      { enunciado: "Usar mi foto personal para un meme sin consultarme vulnera:", opciones: ["el habeas data sobre mis datos", "mi derecho al recreo", "el manual de convivencia", "la libertad de expresión ajena"], correcta: 0, dificultad: 2 },
      { enunciado: "Un reto de internet expone el rostro de una compañera. La ética frente a la viralidad pide:", opciones: ["evaluar el daño posible antes de amplificar", "buscar más vistas", "reír por no quedarse fuera", "ignorar todo siempre"], correcta: 0, dificultad: 2 },
      { enunciado: "Difundir los datos de un profesor en un reto en línea puede volverse:", opciones: ["hostigamiento con consecuencias legales", "un juego inocente", "una broma normal", "una simple tendencia"], correcta: 0, dificultad: 3 },
      { enunciado: "La Ley 1581 de 2012 protege los datos personales porque exige:", opciones: ["consentimiento previo para tratarlos", "anonimato total siempre", "publicidad gratuita", "registro obligatorio en redes"], correcta: 0, dificultad: 3 },
      { enunciado: "Un perfil suplanta a una estudiante para exigirle cosas. Esa conducta muestra:", opciones: ["suplantación de identidad con intención de daño", "sentido del humor", "confianza digital", "colaboración entre cuentas"], correcta: 0, dificultad: 3 }
    ],
    retos: [
      { titulo: "Decidir antes de publicar", pasos: ["Reviso el contenido", "Pienso en los afectados", "Evito exponer a nadie", "Elijo el momento", "Publico y respondo"], dificultad: 2 },
      { titulo: "Frenar contenido viral que daña", pasos: ["No lo comparto", "Verifico si es cierto", "Pienso en la víctima", "Reporto la publicación", "Acompaño a la persona afectada"], dificultad: 3 }
    ]
  },

  "etica-valores--etica-digital--c5": {
    id: "etica-valores--etica-digital--c5",
    nombre: "Desinformación, IA y bioética",
    preguntas: [
      { enunciado: "Las 'fake news' son:", opciones: ["informaciones falsas difundidas para inducir al error", "noticias oficiales del gobierno", "reportajes de investigación", "bromas entre amigos"], correcta: 0, dificultad: 1 },
      { enunciado: "El sesgo de un algoritmo aparece cuando:", opciones: ["reproduce injusticias presentes en los datos que aprendió", "funciona sin ningún dato", "borra todas las opiniones", "tarda en cargar"], correcta: 0, dificultad: 1 },
      { enunciado: "La burbuja de filtros en redes:", opciones: ["encierra a la persona en información afín a sus gustos", "protege cuentas ajenas", "acelera la conexión", "cifra los mensajes"], correcta: 0, dificultad: 1 },
      { enunciado: "El consentimiento informado en investigación biomédica protege:", opciones: ["la autonomía de las personas participantes", "la duración del estudio", "el prestigio del laboratorio", "el precio de la vacuna"], correcta: 0, dificultad: 1 },
      { enunciado: "Ante un mensaje sospechoso, leer de forma crítica exige:", opciones: ["evaluar la fuente y buscar evidencia adicional", "creer la imagen del post", "revisar solo el titular", "preguntar a los amigos"], correcta: 0, dificultad: 2 },
      { enunciado: "Los deepfakes son:", opciones: ["videos sintéticos creados con IA para suplantar a alguien", "memes de moda", "tutoriales de edición", "juegos en línea"], correcta: 0, dificultad: 2 },
      { enunciado: "La bioética estudia:", opciones: ["los dilemas morales de las ciencias de la vida y la salud", "la crianza de animales", "el cuidado del jardín", "la astronomía moderna"], correcta: 0, dificultad: 2 },
      { enunciado: "Los cuatro principios de la bioética (Beauchamp y Childress) son:", opciones: ["autonomía, beneficencia, no maleficencia y justicia", "verdad, justicia, reparación, no repetición", "fe, esperanza, caridad, prudencia", "libertad, igualdad, fraternidad, seguridad"], correcta: 0, dificultad: 2 },
      { enunciado: "Compartir sin verificar una imagen falsa de un político puede:", opciones: ["amplificar desinformación con efectos electorales", "mejorar el debate escolar", "proteger al personaje", "generar ahorro digital"], correcta: 0, dificultad: 3 },
      { enunciado: "En una app de IA que replica prejuicios y los oculta ante los usuarios, la responsabilidad es de:", opciones: ["quienes diseñaron y entrenaron el modelo", "el primero que la usó", "el usuario final", "nadie, la máquina decide sola"], correcta: 0, dificultad: 3 },
      { enunciado: "El Código de Núremberg de 1947 nació para exigir en la experimentación con personas:", opciones: ["el consentimiento voluntario de la persona participante", "mayor rapidez en los ensayos", "el secreto de laboratorio", "la financiación estatal"], correcta: 0, dificultad: 3 },
      { enunciado: "La ética en el desarrollo de la IA propone:", opciones: ["centrar los sistemas en la dignidad y los derechos humanos", "dejar a los algoritmos decidir todo", "maximizar ganancias del software", "priorizar la velocidad sobre la vida"], correcta: 0, dificultad: 3 }
    ],
    retos: [
      { titulo: "Verificar una noticia sospechosa", pasos: ["Reviso quién la publica", "Comparo con otras fuentes", "Verifico la fecha", "Analizo las imágenes", "Evito difundir si es falsa", "Aporto la información cierta"], dificultad: 2 },
      { titulo: "Evaluar un dilema ético sobre inteligencia artificial", pasos: ["Describo la situación con la IA", "Identifico los valores implicados", "Reviso a las personas afectadas", "Consulto normas y derechos digitales", "Comparo las opciones de decisión", "Defiendo una postura responsable"], dificultad: 3 }
    ]
  },

  "etica-valores--cultura-paz--c1": {
    id: "etica-valores--cultura-paz--c1",
    nombre: "Acordar y pedir perdón",
    preguntas: [
      { enunciado: "Cuando un juego me toca perder debo:", opciones: ["aceptarlo con calma", "tirar las fichas al piso", "dejar de hablar con mi amigo", "llorar hasta que me dejen ganar"], correcta: 0, dificultad: 1 },
      { enunciado: "Acordar en el curso significa que todos podemos:", opciones: ["dar nuestra opinión", "gritar más fuerte", "pelear por el premio", "salir del salón"], correcta: 0, dificultad: 1 },
      { enunciado: "Las palabras mágicas para convivir son:", opciones: ["por favor y gracias", "aquí y allá", "uno y dos", "temprano y tarde"], correcta: 0, dificultad: 1 },
      { enunciado: "Si prometí cuidar las plantas debo:", opciones: ["cumplir mi promesa", "olvidarme pronto", "dejar que otro lo haga", "arrancarlas para ver cómo están"], correcta: 0, dificultad: 2 },
      { enunciado: "Un amigo no me presta la cuerda de saltar. Yo puedo:", opciones: ["proponer un turno para los dos", "quitársela", "gritarle", "acabar el recreo enojado"], correcta: 0, dificultad: 2 },
      { enunciado: "Tras pelear con mi profe, decir perdón muestra:", opciones: ["ganas de arreglar las cosas", "cobardía", "que perdí", "sueño"], correcta: 0, dificultad: 2 },
      { enunciado: "Acordar en el recreo es bueno porque:", opciones: ["todos pueden jugar sin tristezas", "ganan los más fuertes", "los juegos duran menos", "suena la campana antes"], correcta: 0, dificultad: 3 },
      { enunciado: "Me enojé y rompí un lápiz. Lo correcto es:", opciones: ["pedir perdón y ayudar a recoger", "esconder los pedazos", "culpar a mi amigo", "sentarme a esperar"], correcta: 0, dificultad: 3 },
      { enunciado: "Un compañero me perdonó un error. Debo mostrarlo:", opciones: ["tratándolo igual de bien", "repitiendo la travesura", "haciendo como que nada pasó", "tomándolo de broma"], correcta: 0, dificultad: 3 }
    ],
    retos: [
      { titulo: "Acordar en el recreo", pasos: ["Escucho la idea de cada uno", "Elijo la idea más justa", "Juego y reviso si funcionó"], dificultad: 1 },
      { titulo: "Pedir perdón de verdad", pasos: ["Reconozco mi error", "Digo lo siento mirándolo", "Propongo cómo repararlo"], dificultad: 3 }
    ]
  },

  "etica-valores--cultura-paz--c2": {
    id: "etica-valores--cultura-paz--c2",
    nombre: "Diálogo y acuerdo en el curso",
    preguntas: [
      { enunciado: "Votar por mayoría significa respetar:", opciones: ["la decisión que escogieron más compañeros", "mi idea siempre", "la voz más fuerte", "al último que habló"], correcta: 0, dificultad: 1 },
      { enunciado: "Pedir la palabra sirve para:", opciones: ["no interrumpir a los demás", "gritar más", "salir corriendo", "evitar aprender"], correcta: 0, dificultad: 1 },
      { enunciado: "Un acuerdo del curso debe ser:", opciones: ["claro y posible para todos", "secreto", "imposible", "solo para unas personas"], correcta: 0, dificultad: 1 },
      { enunciado: "El docente propone, el curso conversa y entre todos:", opciones: ["llegan a un consenso", "lo ignoran", "decide uno solo", "votan en secreto"], correcta: 0, dificultad: 2 },
      { enunciado: "Cuando mi idea no sale elegida debo actuar con:", opciones: ["respeto por la decisión colectiva", "rabia constante", "indiferencia", "venganza"], correcta: 0, dificultad: 2 },
      { enunciado: "En un trabajo grupal, la responsabilidad es:", opciones: ["cumplir mi parte a tiempo", "esperar a otros", "dejar todo sin hacer", "ver un video"], correcta: 0, dificultad: 2 },
      { enunciado: "Antes de votar una salida, el curso organiza una tertulia para:", opciones: ["conocer ventajas y riesgos de cada opción", "imponer una sola idea", "perder el tiempo", "castigar al que opine"], correcta: 0, dificultad: 3 },
      { enunciado: "Si un compañero se molesta porque su idea perdió, lo mejor es:", opciones: ["valorar su aporte y explicar las razones", "burlarme", "discutir toda la semana", "fingir que no existe"], correcta: 0, dificultad: 3 },
      { enunciado: "El consenso del curso aparece cuando:", opciones: ["todos aceptan apoyar lo acordado", "solo el docente está de acuerdo", "gana quien grita", "la mayoría calla a los demás"], correcta: 0, dificultad: 3 }
    ],
    retos: [
      { titulo: "Realizar una votación en el curso", pasos: ["Leemos la propuesta", "Todos escuchan", "Votamos en secreto", "Respetamos el resultado"], dificultad: 1 },
      { titulo: "Construir un acuerdo de curso", pasos: ["Exponemos el problema", "Recogemos ideas de todos", "Evaluamos las opciones", "Acordamos y nos comprometemos"], dificultad: 3 }
    ]
  },

  "etica-valores--cultura-paz--c3": {
    id: "etica-valores--cultura-paz--c3",
    nombre: "Participación y cultura de paz",
    preguntas: [
      { enunciado: "El gobierno escolar está integrado por:", opciones: ["rector, consejo académico, consejo directivo, consejo de estudiantes, asociaciones de padres y personero", "solo los profesores", "solo los estudiantes", "únicamente la policía escolar"], correcta: 0, dificultad: 1 },
      { enunciado: "El personero estudiantil es:", opciones: ["un estudiante elegido que promueve y defiende los derechos de los estudiantes", "un acudiente del curso", "el inspector de policía", "el asistente del rector"], correcta: 0, dificultad: 1 },
      { enunciado: "El consejo de estudiantes se compone de:", opciones: ["estudiantes elegidos en cada salón", "las cocineras del colegio", "los guardianes de la sede", "los niños del barrio"], correcta: 0, dificultad: 1 },
      { enunciado: "La ONU celebra el día mundial de la paz el:", opciones: ["21 de septiembre", "1 de enero", "20 de julio", "7 de diciembre"], correcta: 0, dificultad: 1 },
      { enunciado: "En clase, la acción sin violencia se expresa:", opciones: ["respetando la opinión y rechazando la agresión", "gritando", "imponiendo", "ignorando a todos"], correcta: 0, dificultad: 2 },
      { enunciado: "La cultura de paz busca prevenir los conflictos mediante:", opciones: ["la convivencia y el diálogo", "el castigo físico", "el silencio", "la ley del más fuerte"], correcta: 0, dificultad: 2 },
      { enunciado: "Para ser elegido jefe de curso conviene:", opciones: ["proponer compromisos alcanzables", "amenazar a los compañeros", "prometer regalos", "exigir obediencia"], correcta: 0, dificultad: 2 },
      { enunciado: "Una propuesta aprobada por mayoría que afecta a una minoría:", opciones: ["debe ajustarse para respetar sus derechos", "es perfectamente válida", "equivale a consenso total", "debe ejecutarse en secreto"], correcta: 0, dificultad: 3 },
      { enunciado: "El personero es clave en el gobierno escolar porque:", opciones: ["integra el comité de convivencia y promueve la garantía de derechos", "dicta las clases de sociales", "asigna las notas definitivas", "maneja la cafetería del colegio"], correcta: 0, dificultad: 3 },
      { enunciado: "Si un compañero se opone a tu idea, la actitud ciudadana es:", opciones: ["escucharlo y buscar puntos de acuerdo", "discutir sin parar", "excluirlo del grupo", "quejarme con el director"], correcta: 0, dificultad: 3 }
    ],
    retos: [
      { titulo: "Organizar una consulta del curso", pasos: ["Convocamos la reunión", "Presentamos las propuestas", "Votamos con respeto", "Publicamos la decisión"], dificultad: 1 },
      { titulo: "Lanzar una propuesta para el curso", pasos: ["Identifico una necesidad del grupo", "Reúno ideas entre compañeros", "Presento la propuesta al gobierno escolar", "Negocio mejoras y hago seguimiento"], dificultad: 3 }
    ]
  },

  "etica-valores--cultura-paz--c4": {
    id: "etica-valores--cultura-paz--c4",
    nombre: "Justicia restaurativa y normas de convivencia",
    preguntas: [
      { enunciado: "El manual de convivencia es:", opciones: ["el conjunto de normas que orientan la relación entre estudiantes y docentes", "una lista de castigos", "un reglamento de tránsito", "un acuerdo opcional"], correcta: 0, dificultad: 1 },
      { enunciado: "El debido proceso en el manual garantiza:", opciones: ["ser oído y defenderse antes de sancionar", "juicio inmediato sin testigos", "castigar a todos por igual", "guardar silencio ante la acusación"], correcta: 0, dificultad: 1 },
      { enunciado: "El enfoque restaurativo busca principalmente:", opciones: ["reparar el daño causado a la víctima y a la comunidad", "imponer el castigo más severo", "olvidar el conflicto velozmente", "expulsar al agresor"], correcta: 0, dificultad: 1 },
      { enunciado: "La Ruta de Atención Integral en convivencia incluye los momentos de:", opciones: ["prevención, respuesta y seguimiento", "denuncia, juicio, condena", "castigo, silencio, olvido", "sanción, exclusión, archivo"], correcta: 0, dificultad: 1 },
      { enunciado: "Tras un daño, una práctica restaurativa organiza:", opciones: ["un círculo de diálogo con los afectados", "un castigo secreto", "una asamblea de aplausos", "una multa económica"], correcta: 0, dificultad: 2 },
      { enunciado: "El comité escolar de convivencia se encarga de:", opciones: ["asesorar, analizar y dar seguimiento a las situaciones de convivencia", "dictar clase a los estudiantes", "asignar las notas de periodo", "revisar solo los partes de reporte"], correcta: 0, dificultad: 2 },
      { enunciado: "Ante una falta, el manual debe aplicar medidas que:", opciones: ["respeten la dignidad y busquen corregir", "humillen frente al curso", "excluyan a los padres de familia", "omitán el debido proceso"], correcta: 0, dificultad: 2 },
      { enunciado: "La justicia restaurativa se diferencia de la punitiva porque:", opciones: ["hace responsable al agresor reparando el daño, no solo sufriendo", "castiga sin escuchar a nadie", "busca venganza", "elimina siempre la sanción"], correcta: 0, dificultad: 3 },
      { enunciado: "El seguimiento de la Ruta de Atención Integral sirve para:", opciones: ["verificar que los acuerdos perduren y el caso no se repita", "archivar documentos", "revocar derechos estudiantiles", "evitar informar a las familias"], correcta: 0, dificultad: 3 },
      { enunciado: "El derecho a la defensa en un proceso del manual implica que el estudiante puede:", opciones: ["presentar descargos y testigos", "aceptar la acusación sin hablar", "renunciar a sus garantías", "ser sancionado dos veces"], correcta: 0, dificultad: 3 }
    ],
    retos: [
      { titulo: "Participar en un círculo de reparación", pasos: ["Se expone el daño ocurrido", "Cada quien cuenta cómo le afectó", "El agresor reconoce su responsabilidad", "Todos acuerdan acciones de reparación", "Se revisa si la reparación se cumplió"], dificultad: 2 },
      { titulo: "Activar la Ruta de Atención Integral", pasos: ["Prevenimos con planes de convivencia", "Atendemos el caso con protocolos", "Se valora y decide la medida", "Hacemos seguimiento a los acuerdos", "Documentamos el proceso"], dificultad: 3 }
    ]
  },

  "etica-valores--cultura-paz--c5": {
    id: "etica-valores--cultura-paz--c5",
    nombre: "Cátedra de la Paz y posacuerdo",
    preguntas: [
      { enunciado: "La Cátedra de la Paz es obligatoria por la Ley:", opciones: ["1732 de 2015", "115 de 1994", "1620 de 2013", "1098 de 2006"], correcta: 0, dificultad: 1 },
      { enunciado: "La Cátedra de la Paz debe implementarse en:", opciones: ["todos los establecimientos educativos oficiales y no oficiales", "solo colegios privados", "solo universidades", "únicamente la educación no formal"], correcta: 0, dificultad: 1 },
      { enunciado: "La Constitución de 1991 organiza a Colombia como:", opciones: ["Estado social y democrático de derecho", "monarquía constitucional", "dictadura presidencial", "confederación de estados"], correcta: 0, dificultad: 1 },
      { enunciado: "Los contenidos de la Cátedra de la Paz incluyen:", opciones: ["historia de Colombia y del conflicto armado, los derechos humanos, la participación y la tolerancia", "astronáutica y robótica", "bolsa de valores", "tácticas militares"], correcta: 0, dificultad: 1 },
      { enunciado: "La seguridad ciudadana se entiende como:", opciones: ["responsabilidad de todos, para la cual el Estado cuenta con instituciones", "tarea exclusiva de la policía", "privilegio de ciertos barrios", "asunto solo militar"], correcta: 0, dificultad: 2 },
      { enunciado: "En el uso pedagógico del Acuerdo Final, el aula debe:", opciones: ["promover el conocimiento del proceso de paz con información plural", "hacer proselitismo político", "prohibir el tema", "evitar todo debate"], correcta: 0, dificultad: 2 },
      { enunciado: "Una escuela que forma cultura de paz en el posacuerdo fomenta:", opciones: ["el diálogo, la participación y el respeto por la diferencia", "la revancha", "la polarización", "el olvido"], correcta: 0, dificultad: 2 },
      { enunciado: "El Día Nacional de la Memoria y la Solidaridad con las Víctimas se conmemora el:", opciones: ["3 de abril", "1 de mayo", "20 de julio", "9 de junio"], correcta: 0, dificultad: 2 },
      { enunciado: "El uso pedagógico del Acuerdo Final sirve para que los estudiantes:", opciones: ["comprendan el conflicto y las vías negociadas de solución", "repitan consignas", "olviden a las víctimas", "imiten a los actores armados"], correcta: 0, dificultad: 3 },
      { enunciado: "El mayor reto de la educación para la convivencia en el posacuerdo es:", opciones: ["convertir la verdad del conflicto en enseñanza sin polarizar", "ocultar la historia reciente", "tratar el tema como partidista", "dejarlo solo en una asignatura"], correcta: 0, dificultad: 3 },
      { enunciado: "La ciudadanía activa en el posacuerdo se expresa al:", opciones: ["participar en lo local y exigir cumplimiento de los compromisos de paz", "abstenerse de opinar", "guardar silencio ante la violencia", "quejarse solo en redes sociales"], correcta: 0, dificultad: 3 },
      { enunciado: "Evaluar una política pública de posacuerdo en el aula exige:", opciones: ["consultar fuentes diversas y separar hechos de opiniones", "memorizar comunicados oficiales", "limitarse a las redes sociales", "rechazarlo todo sin argumentos"], correcta: 0, dificultad: 3 }
    ],
    retos: [
      { titulo: "Organizar una jornada escolar por la paz", pasos: ["Formamos el equipo de trabajo", "Investigamos el conflicto y su historia", "Planemos actividades inclusivas", "Compartimos con la comunidad", "Evaluamos lo aprendido"], dificultad: 2 },
      { titulo: "Diseñar una propuesta ciudadana de convivencia", pasos: ["Diagnosticamos problemas de convivencia con datos", "Priorizamos las necesidades de los afectados", "Comparamos las normas vigentes", "Definimos objetivos y acciones", "Presentamos al gobierno escolar", "Acordamos un seguimiento"], dificultad: 3 }
    ]
  }
};
