// js/games/banco/filosofia.js
// Banco de contenido de Filosofía para la media académica (grados 10° y 11°)
// de la plataforma escolar, área obligatoria según la
// Ley 115 de 1994, artículo 31. Cubre los cinco ejes del catálogo, todos en
// el ciclo c5: historia de la filosofía, lógica formal, epistemología, ética
// y filosofía política, y filosofía de la existencia.
//
// Reglas de autoría del banco:
// - La respuesta correcta siempre va escrita primero (correcta: 0); el juego
//   baraja las opciones en pantalla.
// - Los pasos de un reto están en el orden correcto; el juego los mezcla.
// - Nivel 1 identifica, nivel 2 aplica o explica, nivel 3 analiza, compara o
//   reconstruye argumentos.
// - Las posiciones citadas son breves y verificables; se parafrasean los
//   textos con derechos vigentes y se evitan traducciones literales largas.
// - Los enunciados son diferentes entre sí dentro del nodo y entre los nodos
//   de esta materia, para que una partida nunca repita una pregunta.

export const BANCO = {
  // ==========================================================================
  // EJE 1 · Historia de la filosofía
  // ==========================================================================
  "filosofia--historia-filosofia--c5": {
    id: "filosofia--historia-filosofia--c5",
    nombre: "Del mito al logos: antigua, medieval, moderna y contemporánea",
    preguntas: [
      {
        enunciado: "En la Grecia antigua, la expresión paso del mito al logos designa:",
        opciones: [
          "que las explicaciones propias de los relatos sobre los dioses den paso a argumentaciones fundadas en principios naturales",
          "la sustitución de la lengua griega por el latín en los textos de las colonias de Occidente",
          "el abandono de la reflexión sobre la naturaleza cuando aparecen las escuelas retóricas",
          "la aparición de la escritura alfabética en Jonia, que hizo innecesaria la memoria oral"
        ],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "Los pensadores presocráticos buscaban el arché de todas las cosas. El arché es:",
        opciones: [
          "el principio originario del que todo procede y del que todo está compuesto",
          "el fin último al que tiende cada ser según su propia naturaleza",
          "la ley no escrita que los dioses dieron a los hombres para vivir en justicia",
          "el nombre primitivo con el que las cosas fueron creadas"
        ],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "La tesis de que el agua es el principio de todas las cosas se atribuye a un autor de Mileto. ¿Qué escuela representa?",
        opciones: [
          "la escuela milesia, que explica la naturaleza por un principio material único",
          "la escuela eleática, que afirma que el ser es uno e inmóvil",
          "la escuela pitagórica, que lo reduce todo al número y a la armonía",
          "la escuela atomista, que explica el mundo por vacío y partículas indivisibles"
        ],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "¿Cuál es el gesto característico del método de Sócrates en los diálogos de juventud de Platón?",
        opciones: [
          "preguntar al interlocutor sobre lo que cree saber, hasta mostrarle que sus definiciones se contradicen",
          "exponer doctrinas propias en largos discursos dirigidos a la asamblea de la polis",
          "escribir tratados sistemáticos que resumían la opinión de los sabios anteriores",
          "enseñar retórica cobrando honorarios, como hacían los sofistas"
        ],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "En la alegoría de la caverna de Platón, el prisionero que sale al exterior y soporta la luz del sol representa:",
        opciones: [
          "el alma que asciende al mundo inteligible y contempla la idea del bien",
          "el sabio que regresa a la caverna para gobernar a los prisioneros por la fuerza",
          "el cuerpo que se libera del alma gracias a la muerte del iniciado",
          "al poeta que imita las apariencias y persuade a la multitud con sus versos"
        ],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "Para Aristóteles, la disciplina que estudia el ser en cuanto ser y sus atributos propios se llama:",
        opciones: [
          "filosofía primera o metafísica",
          "dialéctica, el arte de argumentar desde opiniones verosímiles",
          "física, la ciencia del movimiento y del cambio",
          "lógica, la ciencia de las formas del razonamiento"
        ],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "En la filosofía medieval se atribuye a Anselmo de Canterbury el lema de la fe que busca entender. ¿Qué afirma?",
        opciones: [
          "que se cree para entender, de modo que la fe abre el camino a la inteligibilidad",
          "que se entiende para creer, de modo que nada puede creerse sin demostración",
          "que fe y razón pertenecen a dos verdades distintas y no deben mezclarse",
          "que la fe es un absurdo y por eso debe abandonarse el estudio de Dios"
        ],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "El aristotelismo llegó a la Europa latina del siglo XIII sobre todo a través de traducciones y comentarios. ¿De qué tradición provino esa mediación?",
        opciones: [
          "de la filosofía árabe y judía, con comentaristas como Averroes y Maimónides",
          "de las escuelas gnósticas del Próximo Oriente, leídas en griego por los monjes",
          "de la tradición estoica tardía, copiada en los scriptoria de Constantinopla",
          "de los Padres latinos, que habían conservado íntegro el cuerpo aristotélico"
        ],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "Descartes llama idea innata a aquella que:",
        opciones: [
          "el entendimiento posee por su propia constitución, antes de toda experiencia sensible",
          "los sentidos transmiten al alma desde el nacimiento de manera pasiva",
          "se forma por costumbre al repetir muchas veces una misma experiencia",
          "es aprendida en la escuela y luego olvidada por la duda metódica"
        ],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "Un empirista como Locke responde a esa doctrina sosteniendo que la mente al nacer es:",
        opciones: [
          "una hoja en blanco sobre la que solo escriben la sensación y la reflexión",
          "un espejo perfecto de las ideas eternas contempladas antes de nacer",
          "una sustancia pensante que ya se piensa a sí misma desde el primer instante",
          "un almacén de especies sensibles que los sentidos ordenan sin intervención del entendimiento"
        ],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "Marx formula su inversión de Hegel con la tesis de que no es la conciencia de los hombres la que determina su ser. ¿Qué la determina?",
        opciones: [
          "su ser social, es decir, las relaciones de producción en que se hallan",
          "su idea del bien, cuando llega a pensarla de manera científica",
          "la voluntad política de los filósofos que interpretan el mundo",
          "el desarrollo previo de la autoconciencia del espíritu absoluto"
        ],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "¿Qué reprocha Kierkegaard, considerado precursor del existencialismo, a la filosofía hegeliana?",
        opciones: [
          "que el sistema olvida al existente singular, de carne y hueso, que piensa y decide",
          "que parte de la duda y nunca logra demostrar la existencia del mundo exterior",
          "que confunde la fe con la razón y hace de la teología una rama de la lógica",
          "que exalta la libertad individual hasta disolver todo deber social"
        ],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "Un docente escribe en el tablero: los sofistas enseñaban virtud política por dinero, Sócrates sostenía que la virtud no se enseña. ¿Qué diferencia subyace?",
        opciones: [
          "para los sofistas la areté es una destreza convencional que se transmite; para Sócrates exige conocimiento verdadero del bien",
          "ambos coinciden en que la virtud es natural y nadie puede enseñarla ni aprenderla",
          "los sofistas niegan que exista la virtud; Sócrates la considera patrimonio de los dioses",
          "Sócrates cobra por enseñar retórica y los sofistas defienden la vida contemplativa"
        ],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Parménides sostiene que el ser es uno, ingenerado e inmóvil, y que el cambio es opinión falsa. Heráclito, en cambio, afirma que todo fluye y que la guerra es el padre de todas las cosas. ¿Qué objeto de debate inauguran?",
        opciones: [
          "si el principio de la realidad es la permanencia del uno o el devenir de los opuestos",
          "si el conocimiento sensible es más confiable que el conocimiento matemático",
          "si el alma es mortal o inmortal según el destino de cada individuo",
          "si la ciudad justa debe estar gobernada por reyes o por asambleas"
        ],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Platón, en el Parménides, y Aristóteles, en la Metafísica, formulan dificultades contra las Ideas separadas. ¿Cuál es la más conocida?",
        opciones: [
          "si la Idea es otra cosa junto a las cosas, hace falta un tercer término para explicar su semejanza, y así al infinito",
          "las Ideas serían inmutables y por eso no podrían ser conocidas por un alma que cambia",
          "las Ideas solo existirían mientras alguien las piense, lo que lleva al solipsismo",
          "la teoría exigiría una Idea de cada negación, incluidas las cosas inexistentes"
        ],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Aristóteles corrige a su maestro con la tesis de que la esencia no está separada. ¿Qué doctrina opera entonces en su explicación del ser natural?",
        opciones: [
          "la composición de materia y forma en la sustancia primera, con acto y potencia",
          "la participación de las cosas sensibles en Ideas trascendentes y eternas",
          "la emanación necesaria de lo Uno hacia la materia informe y el vacío",
          "la armonía matemática de los contrarios, que produce el cosmos por azar"
        ],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "¿Por qué rechaza Tomás de Aquino la demostración a priori de la existencia de Dios propuesta por Anselmo?",
        opciones: [
          "porque el ser de Dios no es evidente para nuestro entendimiento y hay que partir de sus efectos",
          "porque la noción de ser perfecto incluye siempre la existencia, pero solo en las cosas materiales",
          "porque la fe no admite ninguna mediación racional, so pena de volverse superstición",
          "porque Dios sería un ser entre otros y su existencia podría negarse sin contradicción"
        ],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "En el siglo XIII, la tesis de que una misma proposición puede ser verdadera en filosofía y falsa en teología fue condenada en París. ¿Con qué etiqueta se asoció esa posición?",
        opciones: [
          "con el averroísmo latino y la doctrina de la doble verdad",
          "con el agustinismo iluminista y la teoría de las razones eternas",
          "con el nominalismo de Ockham y la prioridad de los individuos",
          "con el misticismo renano y la negación de todo predicado divino"
        ],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Un estudiante afirma: la ciencia moderna empieza cuando Bacon y Descartes coinciden en que los sentidos son el único criterio de verdad. ¿Qué objeción filosófica es pertinente?",
        opciones: [
          "Descartes desconfía precisamente de los sentidos y busca un criterio en la evidencia del entendimiento",
          "Bacon rechaza toda inducción y defiende la deducción geométrica de las esencias",
          "ambos niegan que el método pueda aplicarse a las ciencias naturales",
          "la ciencia moderna comienza con Galileo, que no discutió el papel de la experiencia"
        ],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Hume sostiene que no percibimos ningún vínculo necesario entre causa y efecto, sino solo conjunción constante y costumbre. ¿Qué problema plantea para la inducción?",
        opciones: [
          "que la inferencia de lo no observado a partir de lo observado no puede justificarse sin presuponer la uniformidad de la naturaleza",
          "que los juicios necesarios de la matemática serían falsos porque no tienen objeto sensible",
          "que la experiencia sensible sería imposible si no existieran ideas innatas",
          "que toda creencia en el mundo exterior sería lógicamente contradictoria"
        ],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "¿Qué distingue la crítica trascendental de Kant del escepticismo de Hume, del que dice haberlo despertado de su sueño dogmático?",
        opciones: [
          "Kant acepta que el conocimiento se limita a la experiencia, pero sostiene que el entendimiento aporta formas a priori válidas para todo objeto de experiencia",
          "Kant restablece las ideas innatas y demuestra el principio de causalidad deduciéndolo de Dios",
          "Kant concluye con Hume que la metafísica es imposible y abandona toda pretensión de ciencia",
          "Kant defiende que la razón conoce las cosas en sí mismas cuando se libera de los sentidos"
        ],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Dos afirmaciones sobre el estado natural: Hobbes lo describe como guerra de todos contra todos; Rousseau lo describe como soledad pacífica y el pacto social como pérdida de libertad natural. ¿Qué explica mejor la diferencia?",
        opciones: [
          "sus antropologías: para Hobbes el deseo de poder y el miedo a la muerte violenta organizan el estado de naturaleza; para Rousseau la sociabilidad histórica corrompe al hombre",
          "que Hobbes escribe antes de la Revolución francesa y Rousseau después, cuando ya conocía el terror",
          "que solo Rousseau admite la necesidad de un soberano, mientras Hobbes defiende la asamblea",
          "que Hobbes niega el derecho natural y Rousseau lo funda en la ley divina"
        ],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Nietzsche critica la tradición que va de Sócrates a Kant por suponer un mundo verdadero detrás del aparente. ¿Qué hace con la idea de verdad?",
        opciones: [
          "la reinterpreta como un ejército móvil de metáforas que el uso olvida que lo es, al servicio de la vida",
          "la defiende como criterio absoluto frente al sentir, herencia legítima del logos",
          "la disuelve en la fe cristiana, de la que considera la voluntad de verdad una forma secreta",
          "la reduce a la coherencia interna del sistema hegeliano, que considera definitivo"
        ],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Se atribuye a Sócrates la convicción de que nadie obra mal a ciencia y verdad, pues el mal proceder es efecto de la ignorancia; Aristóteles objeta con la akrasía, la debilidad de la voluntad. ¿Qué está en disputa?",
        opciones: [
          "si el dominio del bien por el conocimiento basta para garantizar la acción recta o si existen deseos que actúan contra el juicio formado",
          "si la virtud puede enseñarse por escrito o exige únicamente la costumbre",
          "si el placer es el soberano bien al que debe ordenarse la deliberación práctica",
          "si la justicia es natural o puramente convencional, como sostuvieron los sofistas"
        ],
        correcta: 0,
        dificultad: 3
      }
    ],
    retos: [
      {
        titulo: "Reconstruir el paso del mito al logos",
        descripcion: "Explica con orden por qué los historiadores hablan de un cambio de tipo de explicación y no de un reemplazo súbito entre dos generaciones.",
        pasos: [
          "Leo los fragmentos de los poetas hesiódicos y Homero y señalo qué explican",
          "Reviso las tesis de los milesios sobre un principio material de la naturaleza",
          "Comparo ambas respuestas frente a un mismo fenómeno, por ejemplo las estaciones o el terremoto",
          "Identifico qué se conserva del lenguaje mítico en los primeros filósofos",
          "Formulo en un párrafo en qué sentido el cambio es de autoridad y no de tema",
          "Escribo una conclusión con la fecha aproximada y la región implicadas"
        ],
        dificultad: 3
      },
      {
        titulo: "Ordenar el debate medieval entre fe y razón",
        descripcion: "Sitúa en su orden histórico y conceptual las posiciones agustinista, tomista y averroísta.",
        pasos: [
          "Leo el lema de Anselmo y lo traduzco a una tesis sobre el orden del conocer",
          "Reviso la doctrina agustinista de la iluminación y el papel de la fe",
          "Contrasto con las cinco vías de Tomás y su distinción entre preámbulos y artículos",
          "Examino la lectura averroísta de Aristóteles y la noción de doble verdad",
          "Verifico qué posiciones fueron condenadas en París y en qué año",
          "Escribo una línea de tiempo con tres autores y su respuesta al mismo problema"
        ],
        dificultad: 3
      }
    ]
  },

  // ==========================================================================
  // EJE 2 · Lógica y argumentación
  // ==========================================================================
  "filosofia--logica--c5": {
    id: "filosofia--logica--c5",
    nombre: "Lógica formal, proposiciones, falacias y contraargumentos",
    preguntas: [
      {
        enunciado: "En lógica formal, una proposición es:",
        opciones: [
          "un enunciado declarativo al que puede atribuirse un valor de verdad",
          "cualquier frase que exprese un deseo, una orden o una pregunta",
          "el acto psicológico por el que alguien afirma algo con convicción",
          "una oración que se puede traducir a otro idioma sin perder sentido"
        ],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "En la condicional si la materia es divisible, entonces no es una sustancia simple, el fragmento que sigue a la palabra entonces se llama:",
        opciones: ["consecuente", "antecedente", "término medio", "contraejemplo"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "La conjunción estudio y apruebo es verdadera únicamente cuando:",
        opciones: [
          "los dos componentes son verdaderos",
          "al menos uno de los componentes es verdadero",
          "los dos componentes son falsos",
          "uno de los componentes implica al otro"
        ],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "La disyunción inclusiva o se paga la multa o se hace el servicio comunitario es falsa si:",
        opciones: [
          "ninguna de las dos alternativas se cumple",
          "se cumplen las dos alternativas a la vez",
          "se cumple solo la primera alternativa",
          "se cumple solo la segunda alternativa"
        ],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "La negación de la proposición Pedro es culpable y Marta es cómplice equivale a:",
        opciones: [
          "Pedro no es culpable o Marta no es cómplice",
          "Pedro no es culpable y Marta no es cómplice",
          "si Pedro es culpable entonces Marta es cómplice",
          "Pedro es culpable o Marta es cómplice, pero no ambos"
        ],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "La validez de un argumento depende de:",
        opciones: [
          "la forma que conecta premisas con conclusión, no de que las premisas sean verdaderas",
          "la verdad de cada una de sus premisas consideradas por separado",
          "el número de premisas, que debe ser siempre dos",
          "la aceptación que tenga la conclusión entre los especialistas"
        ],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "A un argumento cuya forma es válida y cuyas premisas son todas verdaderas se le llama:",
        opciones: [
          "correcto, porque su conclusión queda garantizada",
          "solo válido, pues la verdad de las premisas no cambia el juicio sobre la forma",
          "circular, porque la conclusión repite la primera premisa",
          "inductivo, porque ninguna premisa universal se da por verdadera"
        ],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "Todos los felinos son mamíferos; ningún pez es mamífero; luego ningún pez es felino. El argumento es:",
        opciones: [
          "un silogismo válido: las premisas no pueden ser verdaderas con una conclusión falsa",
          "válido solo si algún pez fuera felino en algún caso particular",
          "inválido, porque concluye de dos premisas universales una conclusión universal",
          "una falacia informal de apelación a la clasificación biológica"
        ],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "Un argumentador reduce las opciones posibles a dos y descarta todas las demás sin probar que sean improcedentes. ¿Qué falacia comete?",
        opciones: [
          "falso dilema o falso extremo",
          "petición de principio",
          "argumento ad populum",
          "falacia de composición"
        ],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "Se afirma: en el debate nadie pudo refutar mi tesis; por tanto mi tesis es verdadera. ¿Qué defecto tiene?",
        opciones: [
          "apela a la ignorancia del oponente como si fuera prueba de la tesis",
          "confunde una premisa particular con una premisa universal",
          "afirma el consecuente de una condicional verdadera",
          "niega el antecedente de una disyunción exclusiva"
        ],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "La ley lógica de no contradicción, formulada por Aristóteles como principio del ser en cuanto ser, dice que:",
        opciones: [
          "una misma proposición no puede ser verdadera y falsa en el mismo sentido y al mismo tiempo",
          "todo enunciado es verdadero o falso, sin término medio entre los dos valores",
          "dos proposiciones contrarias pueden ser verdaderas a la vez en distintos sentidos",
          "la negación de una proposición falsa es siempre una tautología"
        ],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Analiza la forma: si hay censura, entonces disminuye la participación; disminuyó la participación; luego hubo censura. ¿Qué ocurre?",
        opciones: [
          "es la falacia de afirmar el consecuente, porque la condicional admite otros antecedentes suficientes",
          "es modus ponens, una forma deductivamente válida",
          "es modus tollens, válido cuando el consecuente se niega",
          "es un silogismo categórico de la segunda figura, correcto en todos los modos"
        ],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Si no llueve, el partido se juega; no llueve; luego el partido se juega. ¿Qué forma se ilustra?",
        opciones: [
          "afirmar el antecedente, que da el consecuente: modus ponens",
          "negar el consecuente, que da la negación del antecedente: modus tollens",
          "una disyunción exclusiva, porque se mencionan dos alternativas",
          "un silogismo hipotético con dos conclusiones simultáneas"
        ],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "¿Qué regla del silogismo categórico viola la secuencia algunos estudiantes son lectores; algunos lectores son deportistas; luego algunos estudiantes son deportistas?",
        opciones: [
          "el término medio, lectores, no está distribuido en ninguna premisa",
          "la conclusión es particular cuando debería ser universal",
          "introduce cuatro términos cuando el silogismo admite exactamente tres",
          "una premisa negativa exige conclusión afirmativa"
        ],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Un estudiante propone: definir justicia como dar a cada uno lo que es suyo y luego concluir que un reparto justo es el que da a cada uno lo suyo. ¿Qué defecto argumentativo señala el profesor?",
        opciones: [
          "petición de principio, porque la conclusión presupone lo que había que mostrar",
          "falso dilema, porque oculta una tercera teoría de la justicia",
          "equivocidad, porque la palabra justicia cambia de categoría gramatical",
          "apelación a la autoridad de la definición, que no es una premisa"
        ],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "En la argumentación por analogía entre el Estado y el cuerpo orgánico, ¿cuándo se convierte en una analogía débil?",
        opciones: [
          "cuando las diferencias relevantes entre los términos superan a los parecidos invocados",
          "cuando los términos comparados pertenecen a ámbitos distintos de la realidad",
          "cuando la conclusión de la analogía puede refutarse con contraejemplo",
          "cuando la analogía se usa con fines ilustrativos y no demostrativos"
        ],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "¿Qué distingue el argumento ad hominem circunstancial del ad hominem abusivo?",
        opciones: [
          "el primero alega una dependencia del hablante con su posición; el segundo solo injuria a la persona",
          "el primero es deductivamente válido y el segundo es inductivamente fuerte",
          "el primero ataca al auditorio y el segundo ataca al adversario",
          "no hay diferencia: ambos son falacias de la misma clase"
        ],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Un profesor escribe: todas las proposiciones de este manual son falsas y esta afirmación es una proposición del manual. ¿Qué genera?",
        opciones: [
          "una autorreferencia paradójica que impide asignarle un valor de verdad estable",
          "una tautología, porque la conjunción de sus partes cubre todos los casos",
          "un silogismo válido con conclusión necesaria",
          "una negación externa que puede reescribirse como disyunción exclusiva"
        ],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Revisa la forma: o el contrato es libre o el contrato es justo; no es cierto que el contrato sea libre; luego es justo. ¿Es válida si la primera premisa se lee como disyunción exclusiva?",
        opciones: [
          "sí, porque negar uno de los miembros de una disyunción exclusiva afirma el otro",
          "no, porque la disyunción exclusiva nunca permite afirmar ninguno de sus miembros",
          "sí, pero solo si la segunda premisa niega también el segundo miembro",
          "no, porque la conclusión debería negar el primer miembro afirmado"
        ],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Ningún acto gratuito es obligatorio; algunos actos obligatorios son legalmente exigibles; luego algunos actos legalmente exigibles no son gratuitos. Para juzgarlo basta con preguntar:",
        opciones: [
          "si las premisas distribuyen los términos de modo que la conclusión no pueda ser falsa siendo ellas verdaderas",
          "si la conclusión coincide con lo que la mayoría de los juristas sostiene sobre los contratos",
          "si el enunciado de la conclusión es más largo que el de las premisas, como exige la forma",
          "si los tres términos aparecen en el mismo orden en la primera y la segunda premisa"
        ],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Dos argumentos: uno tiene forma válida y premisas falsas; otro tiene forma inválida y premisas verdaderas. ¿Qué se puede concluir sobre sus conclusiones?",
        opciones: [
          "el primero puede tener conclusión verdadera sin estar probada; el segundo no garantiza ninguna conclusión",
          "ambos están refutados, porque una deducción requiere premisas verdaderas y forma válida",
          "el segundo es preferible, pues premisas verdaderas siempre dan conclusiones verdaderas",
          "ninguno puede evaluarse sin conocer la cantidad de premisas de cada uno"
        ],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Alguien sostiene: la lógica de Aristóteles y la lógica matemática contemporánea son la misma ciencia, porque ambas estudian la consecuencia. ¿Qué objeción es más precisa?",
        opciones: [
          "comparten el propósito, pero difieren en el lenguaje formalizado y en el tratamiento de los cuantificadores y la condicional",
          "la lógica aristotélica no estudiaba la consecuencia, sino solo la retórica de la persuasión",
          "la lógica contemporánea renunció por completo a la noción de validez formal",
          "solo la lógica medieval puede considerarse antecedente de la lógica matemática actual"
        ],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Un columnista escribe: si legalizamos la medida, vendrán otras diez reformas radicales; por eso no hay que legalizarla. ¿Qué análisis filosófico es correcto?",
        opciones: [
          "es una falacia de pendiente resbaladiza mientras no se muestren los mecanismos que harían necesaria cada transición",
          "es un modus tollens válido, porque niega el consecuente de una condicional",
          "es una petición de principio, porque la conclusión repite la primera premisa",
          "es un argumento ad populum, porque apela al rechazo del lector por las reformas"
        ],
        correcta: 0,
        dificultad: 3
      }
    ],
    retos: [
      {
        titulo: "Diagnosticar y refutar una falacia informal",
        descripcion: "Toma un enunciado falaz de un debate real y construye el contraargumento mostrando qué premisa falta.",
        pasos: [
          "Transcribo el enunciado y separo sus premisas de su conclusión",
          "Identifico la clase de falacia que comete y le pongo nombre",
          "Escribo la premisa oculta que haría aceptable el paso inferido",
          "Cuestiono esa premisa con un contraejemplo de la misma forma",
          "Reformulo el argumento de mi adversario en su versión más fuerte",
          "Redacto mi respuesta en tres líneas sin atacar a la persona"
        ],
        dificultad: 3
      },
      {
        titulo: "Demostrar la invalidez con contraejemplo de forma",
        descripcion: "Prueba que una forma argumentativa es inválida construyendo un caso con premisas verdaderas y conclusión falsa.",
        pasos: [
          "Extraigo la forma del argumento y la escribo con letras",
          "Sustituyo los términos por otros de extensión conocida",
          "Hago un diagrama de dos círculos para controlar las relaciones",
          "Busco un caso en que las premisas sean verdaderas",
          "Verifico que en ese mismo caso la conclusión es falsa",
          "Concluyo que la forma no preserva la verdad"
        ],
        dificultad: 3
      }
    ]
  },

  // ==========================================================================
  // EJE 3 · Teoría del conocimiento
  // ==========================================================================
  "filosofia--epistemologia--c5": {
    id: "filosofia--epistemologia--c5",
    nombre: "Verdad, racionalismo, empirismo y crítica científica",
    preguntas: [
      {
        enunciado: "La teoría de la verdad por correspondencia sostiene que una proposición es verdadera cuando:",
        opciones: [
          "dice de lo que es que es y de lo que no es que no es, es decir, se ajusta a lo que hay",
          "se sigue sin contradicción de los demás enunciados del sistema",
          "ha sido acordada por la comunidad de investigadores en un momento dado",
          "resulta útil para organizar la conducta del grupo que la acepta"
        ],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "Para una teoría de la verdad por coherencia, es verdadero el juicio que:",
        opciones: [
          "encaja sin contradicción con el conjunto de creencias del sistema",
          "reproduce fielmente el aspecto de las cosas percibidas",
          "produce el mayor beneficio para el mayor número de personas",
          "fue demostrado por un autor de reconocida autoridad"
        ],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "La expresión gnoseología se reserva normalmente para:",
        opciones: [
          "la teoría del conocimiento en general, incluida la posibilidad y el alcance de conocer",
          "el estudio histórico de las escuelas filosóficas de cada época",
          "la reflexión sobre los valores morales de quien investiga",
          "la parte de la lógica dedicada a los términos de los juicios"
        ],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "El primer principio del que Descartes quiere hacer depender todo el saber, tras la duda metódica, es:",
        opciones: [
          "pienso, luego existo",
          "lo uno es lo que no tiene partes",
          "nada hay en el entendimiento que no haya pasado antes por los sentidos",
          "los sentidos nos engañan algunas veces"
        ],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "Para Hume, toda idea, aun la más abstracta, deriva en última instancia de:",
        opciones: [
          "una impresión de sensación o de reflexión",
          "una idea eterna contemplada por el entendimiento puro",
          "una convención lingüística fijada por la comunidad",
          "un esquema a priori del entendimiento"
        ],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "El escepticismo pirrónico busca la quietud del alma mediante:",
        opciones: [
          "la suspensión del juicio sobre todo lo que no es evidente en sí mismo",
          "la afirmación de que nada puede saberse, sostenida como doctrina cierta",
          "la fe en una revelación que corrige los engaños de los sentidos",
          "la reducción del conocimiento a las verdades matemáticas"
        ],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "El problema de la inducción, formulado por Hume, pregunta por:",
        opciones: [
          "la justificación de pasar de casos observados a afirmaciones sobre casos no observados",
          "la posibilidad de definir matemáticamente los términos de una ley",
          "el modo en que los sentidos producen alucinaciones en serie",
          "la diferencia entre verdad lógica y verdad material"
        ],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "¿Qué pregunta quiere responder el criterio de demarcación de Popper?",
        opciones: [
          "cuál es el criterio que permite distinguir la ciencia de lo que no lo es",
          "cómo se fabrican los instrumentos de laboratorio más confiables",
          "por qué la filosofía debe imitar el método de las matemáticas",
          "qué hace que una teoría sea más simple que su rival"
        ],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "En el sentido de Kuhn, un paradigma es:",
        opciones: [
          "la constelación de logros, valores y ejemplos compartidos por una comunidad que define una tradición de investigación",
          "la hipótesis aislada que se pone a prueba en un experimento crucial",
          "la refutación decisiva que hace caer a una teoría anterior",
          "un modelo matemático que representa un fenómeno sin describirlo"
        ],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "Para un fiabilista hay conocimiento cuando la creencia:",
        opciones: [
          "procede de un proceso fiable de formación de creencias, aunque el sujeto no sepa explicar sus razones",
          "es verdadera y se justifica por premisas evidentes encadenadas por deducción",
          "coincide con la opinión mayoritaria del grupo al que la persona pertenece",
          "se apoya en la autoridad reconocida del especialista que la enuncia"
        ],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Leibniz acepta la frase nada hay en el entendimiento que no haya pasado antes por los sentidos, pero le añade una reserva. ¿Cuál?",
        opciones: [
          "menos el propio entendimiento, pues hay ideas que no vienen de los sentidos",
          "que los sentidos no existen y que la experiencia es imposible",
          "que la frase vale para las verdades de razón y no para las de hecho",
          "que el lenguaje es anterior a todo conocimiento posible"
        ],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "En la fórmula kantiana intuiciones sin conceptos son ciegas; conceptos sin intuiciones son vacíos, ¿qué se afirma sobre el conocimiento humano?",
        opciones: [
          "requiere la aportación de la sensibilidad y del entendimiento, ninguno de los dos basta solo",
          "la sensibilidad es un obstáculo que el sabio debe superar para alcanzar la verdad",
          "el entendimiento puede conocer cosas en sí mismas cuando prescinde de toda experiencia",
          "los conceptos son meras etiquetas útiles sin validez objetiva"
        ],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Según Popper, una teoría científica debe ser refutable; por eso consideraba poco científicas a la psicología de Freud y a cierta lectura de la historia. ¿Qué objeción formulaba?",
        opciones: [
          "lo que puede explicar cualquier acontecimiento no arriesga nada y no prohíbe nada",
          "esas teorías eran falsas y la ciencia solo admite teorías verdaderas",
          "esas disciplinas no utilizaban nunca el lenguaje matemático",
          "esas teorías partían de experimentos mal diseñados, no de principios"
        ],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "¿Qué distingue una observación cargada de teoría de una observación puramente neutral?",
        opciones: [
          "que el observador describe lo que percibe con los conceptos que ya posee, sin que ello invalide su informe",
          "que la observación cargada de teoría es siempre falsa y debe eliminarse",
          "que la neutralidad observacional exige no usar instrumentos de medición",
          "que la teoría hace imposibles todos los acuerdos entre observadores"
        ],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Kuhn llama ciencia normal al período en que:",
        opciones: [
          "la comunidad resuelve acertijos dentro de un paradigma sin discutir sus fundamentos",
          "los científicos compiten por refutar públicamente su propio paradigma",
          "se acumulan anomalías que ponen en cuestión todos los supuestos aceptados",
          "la filosofía revisa el contenido empírico de cada ley física"
        ],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "¿Qué problema quiere resolver el argumento cartesiano del genio maligno llevado hasta la duda hiperbólica?",
        opciones: [
          "encontrar una certeza que sobreviva a la suposición de que toda la experiencia fuera engañosamente producida",
          "demostrar que Dios existe para poder confiar en la memoria de las demostraciones hechas",
          "refutar la idea de que los números y las figuras sean conocidos por el entendimiento puro",
          "probar que el cuerpo es la causa de todos los errores de los sentidos"
        ],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Un texto afirma: toda creencia verdadera y justificada es conocimiento, y luego describe el caso en que la justificación resulta correcta por pura casualidad. ¿Qué noción está en disputa?",
        opciones: [
          "si la definición clásica de conocimiento como creencia verdadera justificada es suficiente",
          "si la verdad de una creencia puede separarse de su justificación",
          "si la justificación debe ser siempre consciente y formulable",
          "si existe conocimiento de las cosas pasadas"
        ],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Compara el racionalismo de Leibniz con el empirismo de Hume respecto de las verdades de hecho. ¿En qué difieren?",
        opciones: [
          "para Leibniz podrían fundarse en razones, aunque de modo no deductivo; para Hume reposan en la costumbre fundada en la regularidad observada",
          "para ambos son analíticas y dependen únicamente del principio de no contradicción",
          "Leibniz las niega todas y Hume las considera necesarias bajo condiciones ideales",
          "Leibniz las reduce a percepciones sensibles y Hume las eleva a intuiciones puras"
        ],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "¿Por qué la respuesta de Kant al escepticismo humeano no puede leerse como un regreso al racionalismo dogmático?",
        opciones: [
          "porque acepta el límite empírico del conocimiento y solo busca las condiciones a priori que lo hacen posible y válido",
          "porque demuestra que el principio de causalidad vale también para las cosas en sí mismas",
          "porque abandona la pretensión de fundamentar la experiencia y se limita a la moral",
          "porque restablece la confianza en los sentidos frente a los juicios del entendimiento"
        ],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Feyerabend sostuvo que el progreso de la ciencia muestra la conveniencia de subvertir las reglas metodológicas en ciertos momentos. ¿Qué conclusión no se sigue de su tesis?",
        opciones: [
          "que existe un único método científico válido para toda época y toda disciplina",
          "que las reglas metodológicas deben juzgarse por su eficacia en casos concretos",
          "que la historia de la ciencia no es un desarrollo lineal conforme a normas fijas",
          "que la presión institucional puede retrasar el cambio teórico"
        ],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Dos teorías rivales describen el mismo fenómeno con vocabularios que no se traducen perfectamente entre sí. ¿Qué noción kuhniana describe mejor esa dificultad?",
        opciones: [
          "la inconmensurabilidad entre paradigmas",
          "la subdeterminación de la teoría por los datos, que equivale a lo mismo",
          "la refutación decisiva que dirime el conflicto",
          "la ciencia normal en estado de crisis"
        ],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Un grupo defiende una explicación de la salud con energías que ningún procedimiento podría detectar. ¿Cuál es el argumento epistemológico que mejor describe la objeción popperiana?",
        opciones: [
          "no es una teoría científica porque no indica qué observación la refutaría",
          "es falsa porque los instrumentos actuales no detectan esas energías",
          "es verdadera en otro plano, pues la ciencia no puede pronunciarse sobre la salud",
          "es mejor que la medicina porque se apoya en la tradición del grupo"
        ],
        correcta: 0,
        dificultad: 3
      }
    ],
    retos: [
      {
        titulo: "Aplicar el criterio de refutabilidad a dos teorías",
        descripcion: "Decide cuál de dos explicaciones rivales es científica mostrando qué podría falsearla.",
        pasos: [
          "Enuncio las dos explicaciones en términos comparables",
          "Señalo qué observación contradiría cada una",
          "Reviso si alguna admite toda observación posible",
          "Identifico los riesgos que sí asumen y sus predicciones arriesgadas",
          "Comparo el grado de contrastación efectivamente alcanzado",
          "Concluyo cuál es científica y en qué sentido la otra no lo es"
        ],
        dificultad: 3
      },
      {
        titulo: "Analizar un cambio de paradigma",
        descripcion: "Reconstruye una revolución científica a la manera de Kuhn con sus etapas.",
        pasos: [
          "Defino el paradigma vigente y sus logros ejemplares",
          "Describo la práctica de resolución de acertijos bajo ese paradigma",
          "Reviso las anomalías que resisten la corrección normal",
          "Muestro la crisis y la aparición de una alternativa rival",
          "Comparo el nuevo vocabulario con el anterior y su traductibilidad",
          "Explico por qué la elección entre paradigmas no es una decisión puramente lógica"
        ],
        dificultad: 3
      }
    ]
  },

  // ==========================================================================
  // EJE 4 · Ética y filosofía política
  // ==========================================================================
  "filosofia--etica-politica--c5": {
    id: "filosofia--etica-politica--c5",
    nombre: "Justicia, poder, Estado y libertad",
    preguntas: [
      {
        enunciado: "En la discusión de los sofistas atenienses, el nomos designa:",
        opciones: [
          "la ley o convención establecida por los hombres en una comunidad",
          "la justicia natural e inmutable que rige el cosmos entero",
          "la virtud que el sabio posee sin necesidad de la ciudad",
          "el destino que ni siquiera los dioses pueden cambiar"
        ],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "En esa misma discusión, la physis se opone al nomos como:",
        opciones: [
          "lo que vale por naturaleza y no por acuerdo humano",
          "lo que la costumbre de la familia enseña desde la infancia",
          "lo que la asamblea de la polis decide por mayoría de votos",
          "lo que los poetas narran en las fiestas religiosas"
        ],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "En el libro I de la República de Platón, Trasímaco sostiene que la justicia es:",
        opciones: [
          "lo que conviene al más fuerte, es decir a quien gobierna",
          "dar a cada uno lo que le corresponde según su naturaleza",
          "la disposición del alma que somete los deseos a la razón",
          "un bien que vale por sí mismo y también por sus consecuencias"
        ],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "Para Aristóteles, la eudaimonía es:",
        opciones: [
          "la vida lograda que consiste en la actividad conforme a la virtud",
          "la suma de placeres experimentados a lo largo de los años",
          "la ausencia de dolor y de perturbación en el alma",
          "el reconocimiento público que la ciudad concede al mejor"
        ],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "En la Ética a Nicómaco, la virtud ética se define como:",
        opciones: [
          "término medio entre dos vicios, determinado por la razón práctica",
          "un impulso natural que no depende del hábito contraído",
          "la ausencia absoluta de pasiones en el alma del sabio",
          "el cumplimiento de un deber reconocido por la voluntad pura"
        ],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "La primera formulación del imperativo categórico de Kant exige:",
        opciones: [
          "actuar según la máxima que se pueda querer al mismo tiempo como ley universal",
          "buscar el mayor bienestar agregado para el mayor número de personas",
          "obedecer sin discusión las leyes vigentes de la propia comunidad",
          "seguir la inclinación natural hacia la felicidad del propio carácter"
        ],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "Para Kant, un acto tiene valor moral propio cuando:",
        opciones: [
          "se hace por deber y no únicamente por inclinación o por interés",
          "produce consecuencias útiles para la mayoría de los afectados",
          "expresa el carácter noble de un agente bien educado",
          "es aprobado por la opinión mayoritaria de los contemporáneos"
        ],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "El principio de utilidad en Bentham define lo correcto como:",
        opciones: [
          "lo que produce la mayor felicidad del mayor número",
          "lo que respeta los derechos inherentes de cada individuo",
          "lo que un legislador prudente aprobaría bajo velo de ignorancia",
          "lo que manda la razón práctica sin atender a los resultados"
        ],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "El contractualismo, en todas sus variantes, sostiene que la obligatoriedad de las normas políticas depende de:",
        opciones: [
          "un acuerdo, real o hipotético, entre quienes están sometidos a ellas",
          "la conformidad de esas normas con el orden natural de las cosas",
          "la autoridad religiosa que interpreta la voluntad divina",
          "su antigüedad y la costumbre inmemorial del pueblo"
        ],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "En la definición clásica de Weber, el Estado moderno es la comunidad que reclama para sí:",
        opciones: [
          "el monopolio de la violencia física legítima dentro de un territorio",
          "la propiedad de los medios de producción de la nación",
          "el derecho exclusivo de interpretar las escrituras sagradas",
          "la dirección espiritual y moral de los ciudadanos"
        ],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "Según la distinción de Isaiah Berlin, la libertad negativa consiste en:",
        opciones: [
          "la ausencia de impedimentos o interferencias de otros para obrar",
          "la participación efectiva en las decisiones de la comunidad política",
          "la autonomía del sujeto que se da la ley a sí mismo",
          "la liberación material de la necesidad y de la ignorancia"
        ],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "En Rawls, el velo de ignorancia sirve para que quien elige los principios de justicia:",
        opciones: [
          "no conozca el lugar que ocupará en la sociedad ni sus ventajas naturales",
          "ignore también el contenido de las doctrinas religiosas existentes",
          "no pueda consultar los datos históricos de otras sociedades",
          "desconozca cuántos miembros tendrá la comunidad que se organiza"
        ],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "En el Gorgias de Platón, Calicles objeta a Sócrates que la ley convencional trata de esclavos a los mejores. ¿Qué invoca como criterio?",
        opciones: [
          "la naturaleza, que da al más fuerte el derecho de mandar",
          "la voluntad de los dioses transmitida por los sacerdotes",
          "el consentimiento de la multitud, única fuente del derecho",
          "la razón pura, que obliga a respetar toda norma vigente"
        ],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Epicuro considera la justicia un pacto de utilidad recíproca. ¿Qué se sigue de esa tesis?",
        opciones: [
          "que nada es injusto en sí mismo y que lo justo cambia según el lugar y la época",
          "que la justicia es una virtud eterna inscrita en el alma del sabio",
          "que transgredirla es injusto aunque nadie se entere ni reciba daño",
          "que la ciudad debe imponerla aunque dañe a quienes la aceptan"
        ],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "¿Qué objeta Mill al utilitarismo de Bentham en materia de placeres?",
        opciones: [
          "que difieren cualitativamente y que los placeres del entendimiento valen más que los del cuerpo",
          "que el placer no puede ser criterio de lo recto porque es siempre egoísta",
          "que la felicidad colectiva es inalcanzable y hay que renunciar a ella",
          "que solo los placeres de la virtud son reales y los demás imaginarios"
        ],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Kant llama heteronomía de la voluntad a:",
        opciones: [
          "el sometimiento del principio de acción a un objeto deseado antes que a la ley racional",
          "la obediencia a las leyes de un Estado distinto del propio",
          "la determinación de la voluntad por la opinión de la mayoría",
          "la inclinación natural a la compasión que coincide con el deber"
        ],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "¿Qué diferencia los estados de naturaleza de Hobbes y de Locke en lo relativo a la resistencia?",
        opciones: [
          "en Hobbes el pueblo solo resiste cuando su vida corre peligro directo; en Locke la vulneración de derechos abre un margen amplio de resistencia",
          "en ambos autores el pueblo conserva un derecho ilimitado de resistencia ante cualquier ley",
          "Locke niega todo derecho de resistencia porque el pacto social es irrevisable",
          "Hobbes defiende la división de poderes como remedio contra la arbitrariedad del soberano"
        ],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Marx y Engels formulan la tesis de que las ideas dominantes de cada época son las ideas de la clase dominante. ¿Qué concepto opera aquí?",
        opciones: [
          "la ideología, que presenta un interés particular como si fuera un interés universal",
          "la conciencia moral, que progresa con la historia de la técnica",
          "el contrato social, que funda la legitimidad de las instituciones",
          "la alienación religiosa, que solo afecta a las sociedades rurales"
        ],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Foucault propone pensar el poder no solo como ley que prohíbe, sino como:",
        opciones: [
          "relación productiva que recorre cuerpos, saberes e instituciones desde abajo",
          "atributo del soberano que se concentra en el aparato del Estado",
          "consentimiento tácito de la mayoría expresado en las urnas",
          "fuerza económica que se explica solo por la propiedad de los medios"
        ],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Weber distingue tres tipos puros de dominación legítima. ¿Cuáles son?",
        opciones: [
          "tradicional, carismática y legal racional",
          "económica, política e ideológica",
          "paternal, feudal y burocrática",
          "soberana, administrativa y judicial"
        ],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Para Gramsci, una clase se sostiene en el poder no solo por coerción, sino sobre todo por:",
        opciones: [
          "hegemonía, es decir dirección intelectual y moral conseguida en la sociedad civil",
          "la posesión exclusiva de los medios de producción materiales",
          "el mandato religioso recibido de la jerarquía eclesiástica",
          "el azar de una victoria militar en una guerra exterior"
        ],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Un gobernante sacrifica a un inocente para evitar un motín en el que morirían cien personas. ¿Qué objeción formula la ética kantiana al cálculo utilitarista de ese caso?",
        opciones: [
          "que la humanidad de la persona sacrificada es un fin en sí y no puede usarse como medio de otro fin",
          "que el motín no habría sido tan violento como el gobernante suponía",
          "que el cálculo de consecuencias nunca puede hacerse con datos suficientes",
          "que el gobernante debía consultar antes a la asamblea de la ciudad"
        ],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Rawls y Nozick discuten el reparto de la riqueza. ¿En qué consiste la objeción de Nozick a un principio de distribución con patrón?",
        opciones: [
          "que la justicia depende del origen de cada tenencia y de los intercambios voluntarios, no de que el resultado final encaje en un modelo",
          "que ningún criterio histórico es aplicable porque toda propiedad privada es un robo",
          "que el velo de ignorancia favorece siempre a los más ricos de la sociedad",
          "que solo un reparto exactamente igualitario es admisible por razones lógicas"
        ],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Berlin admite que la libertad positiva, llevada a su extremo, puede justificar la coerción. ¿Cómo lo explica?",
        opciones: [
          "porque se puede invocar un yo verdadero o racional del ciudadano que la autoridad afirma conocer mejor que él mismo",
          "porque toda libertad exige instituciones fuertes que la defiendan con la fuerza",
          "porque la no interferencia es imposible en cualquier sociedad compleja",
          "porque la participación política requiere mayorías calificadas y disciplina"
        ],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Schmitt define lo político por la distinción entre amigo y enemigo. ¿Qué le objeta una posición deliberativa como la de Habermas?",
        opciones: [
          "que reduce la vida política a un enfrentamiento existencial e impide someter el conflicto a normas aceptables para todos",
          "que la distinción es imposible, porque nadie conoce de antemano quiénes son sus enemigos",
          "que lo político debe definirse por el reparto de la renta nacional de cada año",
          "que el concepto de enemigo pertenece únicamente al derecho penal interno"
        ],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Arendt sostiene que poder y violencia no se identifican sino que se oponen. ¿Qué se sigue para un régimen que solo se sostiene por la fuerza?",
        opciones: [
          "que su poder, entendido como acción en común, se ha disuelto y la violencia aislada anticipa su debilitamiento",
          "que la violencia aumenta el poder siempre que se ejerza con mayor eficiencia técnica",
          "que el terror es la forma más estable y legítima de dominación moderna",
          "que la desobediencia civil es el único remedio que le queda a la oposición"
        ],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "En un debate estudiantil alguien afirma: esta medida es mala porque la propone el partido contrario. ¿Cuál es el análisis correcto?",
        opciones: [
          "desacredita al proponente en lugar de evaluar la medida por sus principios y sus efectos",
          "es un argumento por analogía legítimo dentro de la competencia electoral",
          "apela a la autoridad de la tradición partidaria, que basta como premisa",
          "demuestra la premisa universal de que todo adversario político se equivoca"
        ],
        correcta: 0,
        dificultad: 3
      }
    ],
    retos: [
      {
        titulo: "Diseñar una norma escolar desde la posición original",
        descripcion: "Aplica el artificio de Rawls a una decisión concreta sobre un recurso escaso del colegio.",
        pasos: [
          "Defino la decisión que hay que tomar sobre el reparto del recurso",
          "Asumo que no sé si seré estudiante, profesor, padre de familia o directivo",
          "Ignoro también mis capacidades, mi género, mi región y mi religión",
          "Propongo los principios que aceptaría en esa posición",
          "Examino cómo quedan los peor situados con cada propuesta",
          "Elijo la norma y justifico por qué es justa y no solo eficiente"
        ],
        dificultad: 3
      },
      {
        titulo: "Enjuiciar un caso con dos teorías rivales",
        descripcion: "Analiza un dilema moral con el imperativo categórico y con el principio de utilidad, y compara los resultados.",
        pasos: [
          "Enuncio el caso y las opciones de acción disponibles",
          "Formulo la máxima de cada opción en una sola frase",
          "Pruebo si esa máxima puede universalizarse sin contradicción",
          "Calculo las consecuencias de cada opción para todos los afectados",
          "Comparo los dos resultados y señalo donde coinciden o se contradicen",
          "Explico qué teoría considero más convincente y por qué"
        ],
        dificultad: 3
      },
      {
        titulo: "Reconocer tipos de dominación en el presente",
        descripcion: "Clasifica ejemplos colombianos de autoridad aceptada según los tipos puros de Weber.",
        pasos: [
          "Recojo tres ejemplos de autoridad que los gobernados aceptan",
          "Identifico en cada uno la fuente de legitimidad invocada",
          "Comparo esa fuente con la tradición, el carisma y la ley impersonal",
          "Clasifico cada ejemplo en un tipo puro de dominación",
          "Señalo qué ocurre cuando la legitimidad invocada se quebranta"
        ],
        dificultad: 2
      }
    ]
  },

  // ==========================================================================
  // EJE 5 · Filosofía de la existencia
  // ==========================================================================
  "filosofia--existencia--c5": {
    id: "filosofia--existencia--c5",
    nombre: "Condición humana, sentido, libertad y alteridad",
    preguntas: [
      {
        enunciado: "Decir que la existencia humana es finita significa que:",
        opciones: [
          "está limitada: el ser humano nace, es temporal y puede no ser",
          "está condicionada por el cuerpo y la cultura, pero no por la muerte",
          "solo puede conocer objetos materiales y no realidades espirituales",
          "carece de sentido en la medida en que termina"
        ],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "¿Qué distingue la angustia, en Heidegger, del miedo ordinario?",
        opciones: [
          "que el miedo tiene un objeto determinado dentro del mundo y la angustia no",
          "que la angustia es solo un síntoma corporal y el miedo es espiritual",
          "que el miedo se produce ante el peligro y la angustia ante la seguridad",
          "que ambas experiencias son idénticas y cambian solo de nombre"
        ],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "En Heidegger, el ser para la muerte designa:",
        opciones: [
          "la posibilidad más propia del Dasein, cierta e indeterminada en su cuándo",
          "el deseo de prolongar la vida mediante las técnicas de la medicina",
          "la creencia religiosa en una vida que continúa después de la muerte",
          "el temor patológico que conviene tratar con una terapia adecuada"
        ],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "Para Sartre, la tesis de que la existencia precede a la esencia afirma que:",
        opciones: [
          "el hombre primero existe, se encuentra a sí mismo y luego se define por sus elecciones",
          "el hombre tiene una naturaleza fija que debe desarrollar según un designio",
          "la esencia de las cosas depende del uso que cada persona les dé",
          "la especie humana fue concebida por un artesano que la hizo según un modelo"
        ],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "En el existencialismo de Sartre la libertad es absoluta porque:",
        opciones: [
          "el hombre está condenado a ser libre: aun no elegir es elegir",
          "ninguna circunstancia material influye nunca sobre la conducta humana",
          "todo lo que se desea puede alcanzarse con suficiente esfuerzo personal",
          "la libertad del individuo coincide siempre con la libertad de los demás"
        ],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "Para Camus, lo absurdo nace:",
        opciones: [
          "del enfrentamiento entre la nostalgia humana de sentido y el silencio irrazonable del mundo",
          "de la contradicción lógica que contienen los enunciados de la metafísica",
          "del deseo de novedades que caracteriza a las sociedades de consumo",
          "de la ignorancia de las multitudes frente a los avances de la ciencia"
        ],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "La analítica heideggeriana describe el mundo cotidiano dominado por el se dice, se hace, se piensa. ¿Qué nombra esa expresión?",
        opciones: [
          "la manera impersonal en que la conversación y la curiosidad dispersan la decisión propia",
          "el pronombre reflejo con el que el sujeto se constituye a sí mismo",
          "la primera persona del plural con que la comunidad formula sus votos",
          "el término con el que Husserl designa al yo trascendental"
        ],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "En la distinción de Martin Buber, la relación yo tú se caracteriza porque el otro es:",
        opciones: [
          "encontrado como presencia única, sin ser reducido a lo que se sabe o se puede usar de él",
          "clasificado según las propiedades que permiten explotarlo con ventaja",
          "un medio para los fines que el sujeto se propone alcanzar",
          "un ejemplar de una especie que la ciencia describe generalizando"
        ],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "La voluntad de sentido, en la antropología de Viktor Frankl, se define como:",
        opciones: [
          "la motivación fundamental del ser humano por hallar un contenido valioso para su vida",
          "el deseo de placer que busca reducir toda tensión psíquica",
          "la necesidad de dominio que explica las conductas de grupo",
          "la inclinación a imitar los valores del círculo al que se pertenece"
        ],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "En Heidegger, la facticidad y el arrojo designan que el Dasein:",
        opciones: [
          "se encuentra siempre ya arrojado a un mundo y a una situación que no eligió",
          "fue producido por un artesano divino según un plan determinado",
          "construye su situación desde cero mediante actos de voluntad sucesivos",
          "es un sujeto que primero se conoce y después conoce sus circunstancias"
        ],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "¿Qué distingue la autenticidad, para Heidegger, del modo inauténtico de existir?",
        opciones: [
          "que el Dasein asume su propia posibilidad en vez de perderse en lo que se dice y se hace",
          "que el sujeto obedece las normas de la ciudad sin discutir su origen",
          "que la vida auténtica se alcanza acumulando experiencias diversas",
          "que el sabio se aparta del mundo y deja de ocuparse de sus asuntos"
        ],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "¿Qué pregunta por el sentido distingue la búsqueda de propósitos en cada proyecto de la pregunta por el valor de la vida entera?",
        opciones: [
          "que la segunda pide un sentido global que ninguna suma de propósitos locales garantiza",
          "que la primera es psicológica y la segunda es puramente gramatical",
          "que ambas preguntas son imposibles porque el sentido lo da la sociedad",
          "que la segunda solo puede responderse con datos de la biología"
        ],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "En Kierkegaard, la angustia se compara con el mareo de quien mira un abismo. ¿Qué revela esa imagen?",
        opciones: [
          "la posibilidad de la libertad, que a la vez atrae y paraliza al existante",
          "el peligro real de caer y la necesidad de tomar precauciones físicas",
          "la insignificancia de los asuntos humanos vistos desde gran altura",
          "el deseo inconsciente de morir que acompaña a toda melancolía"
        ],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "En El mito de Sísifo, Camus examina salidas ante lo absurdo. ¿Cuáles rechaza?",
        opciones: [
          "el suicidio y el salto que instaura un sentido trascendente esperado",
          "la revuelta y la libertad que nacen de la ausencia de un porvenir cierto",
          "la pasión por el presente y la producción de obras humanas",
          "la lucidez con que Sísifo vuelve a bajar por la piedra"
        ],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Sartre describe al muchacho de café que exagera sus gestos mecánicos como si fuera un autómata del oficio. ¿Qué ilustra esa descripción?",
        opciones: [
          "la mala fe, que disimula la libertad fingiendo ser una cosa con naturaleza definida",
          "la autenticidad, que asume sin reservas el papel elegido por la sociedad",
          "la angustia, que paraliza toda posibilidad de acción en el sujeto",
          "el absurdo, que vuelve vanos todos los gestos humanos"
        ],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Se le reprocha al existencialismo encerrar al sujeto en la soledad de su decisión. ¿Qué recurso conceptual ofrece Heidegger para responder?",
        opciones: [
          "el ser con otros, que es constitutivo del Dasein incluso cuando el sujeto está solo",
          "la distinción entre uso teórico y uso práctico de las categorías del entendimiento",
          "la noción de espíritu objetivo, que realiza su libertad en las instituciones",
          "el concepto de sustancia pensante, evidente a cada individuo por sí misma"
        ],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Cuando Nietzsche declara que Dios ha muerto, ¿qué diagnóstico formula?",
        opciones: [
          "que los valores supremos que daban sentido a la vida han perdido su fuerza y se abre el nihilismo",
          "que el creyente debe ser vigilado porque su fe es peligrosa para el Estado",
          "que la ciencia empírica ha demostrado finalmente la inexistencia de Dios",
          "que la moral cristiana debe conservarse intacta como herencia cultural útil"
        ],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Para Karl Jaspers, las situaciones límite como la muerte, el sufrimiento, la lucha y la culpa son:",
        opciones: [
          "ámbitos en los que el proyecto humano choca con lo que no puede modificar ni evitar",
          "obstáculos técnicos que la investigación podrá resolver algún día",
          "pruebas morales que castigan los errores de una vida desordenada",
          "ilusiones producidas por el miedo, que la razón debe disolver"
        ],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Simone de Beauvoir sostiene que querer hacerse libre exige querer libre al otro. ¿Qué fundamento tiene esa tesis?",
        opciones: [
          "que la propia libertad solo se realiza en un mundo donde los demás también abren futuros",
          "que la solidaridad reduce el sufrimiento promedio de la comunidad entera",
          "que la ley natural ordena a todos buscar la misma felicidad",
          "que el reconocimiento del otro es la prueba empírica de la existencia del yo"
        ],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Merleau Ponty describe el cuerpo propio como nuestro medio general para tener un mundo. ¿Qué objeta con esa formulación?",
        opciones: [
          "que se trate al cuerpo como objeto entre objetos que el sujeto podría conocer desde fuera",
          "que la percepción sea siempre un acto de un alma sin extensión ninguna",
          "que la ciencia sea incapaz de producir conocimiento verdadero de la naturaleza",
          "que la experiencia estética tenga algún valor filosófico propio"
        ],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "En una pieza teatral de Sartre, dos personajes descubren que su cuerpo ha sido dispuesto como tortura del otro y uno concluye que el infierno son los otros. ¿Qué lectura es correcta?",
        opciones: [
          "el juicio del otro fija mi ser como una verdad que ya no puedo deshacer desde dentro",
          "la vida en común es siempre insoportable y hay que huir de toda compañía",
          "los seres humanos son naturalmente crueles y por eso la sociedad es imposible",
          "el otro solo puede conocer mi cuerpo, nunca mis decisiones ni mis actos"
        ],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Un personaje de Dostoievski sostiene que si Dios no existe todo está permitido. ¿Qué responde un existencialista ateo como Sartre a esa inquietud?",
        opciones: [
          "que sin un sentido dado el hombre no tiene excusas: debe inventar la ley de su acción y responder por ella",
          "que la afirmación es falsa, porque la moral sigue vigente aunque nadie crea en Dios",
          "que conviene conservar la creencia como ficción socialmente necesaria",
          "que la prohibición proviene de la naturaleza, que nadie puede alterar"
        ],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Sartre piensa el encuentro con el otro como amenaza de cosificación; Lévinas lo piensa como llamada ética que precede a toda elección. ¿Qué diferencia de método explica la oposición?",
        opciones: [
          "Sartre parte de la conciencia y de su proyecto; Lévinas parte de la responsabilidad por el otro como filosofía primera",
          "Sartre escribe narrativa y Lévinas tratados, de modo que no pueden entenderse",
          "ambos rechazan la intencionalidad de la conciencia, pero por razones distintas",
          "Lévinas adopta el método fenomenológico y Sartre abandona toda descripción"
        ],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Kierkegaard y Camus coinciden en que la reflexión sistemática no alcanza la existencia. ¿En qué se separan?",
        opciones: [
          "Kierkegaard asume el salto de la fe como camino del existante; Camus considera esa salida una renuncia que anula lo absurdo",
          "Kierkegaard sostiene que la existencia es inteligible y Camus que es caótica",
          "ambos concluyen que el suicidio es la única respuesta coherente del espíritu",
          "Camus propone la revuelta religiosa y Kierkegaard la resignación estética"
        ],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Un anuncio ofrece un seminario para alcanzar la autenticidad mediante técnicas de desapego. Desde la crítica de Adorno al lenguaje de la autenticidad, ¿qué análisis se impone?",
        opciones: [
          "que un estado del yo se vende como mercancía y el concepto idealiza las condiciones sociales que lo impiden",
          "que la autenticidad es un valor que no puede enseñarse en ninguna escuela",
          "que las técnicas de desapego son incompatibles con la vida en la ciudad",
          "que solo quien posee bienes materiales puede permitirse ser auténtico"
        ],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Pascal afirma que el universo aplasta al hombre como a una caña, pero que es una caña pensante y que su dignidad está en el pensamiento. ¿Qué comparación con Heidegger es la más precisa?",
        opciones: [
          "Pascal funda la grandeza en la conciencia de la debilidad; Heidegger la busca en asumir la propia finitud ante la muerte",
          "ambos consideran el pensamiento un engaño que impide aceptar la condición mortal",
          "Pascal niega la finitud del hombre y Heidegger defiende la inmortalidad del alma",
          "los dos reducen la existencia a la duración que el espacio puede medir"
        ],
        correcta: 0,
        dificultad: 3
      }
    ],
    retos: [
      {
        titulo: "Analizar un caso de mala fe",
        descripcion: "Identifica en una situación juvenil concreta la huida de la propia libertad.",
        pasos: [
          "Describo la conducta del caso sin juicios morales previos",
          "Señalo la libertad que la persona está negando",
          "Identifico el papel o la esencia con que se está confundiendo",
          "Reviso qué angustia hace comprensible esa confusión",
          "Distingo la mala fe de la debilidad de la voluntad y de la simple mentira",
          "Formulo qué cambiaría si la persona asumiera su proyecto"
        ],
        dificultad: 3
      },
      {
        titulo: "Distinguir angustia existencial y miedo ante un peligro",
        descripcion: "Compara la experiencia de decidir el propio camino con el temor a un resultado concreto.",
        pasos: [
          "Escribo dos situaciones vividas: una con objeto definido y otra sin objeto preciso",
          "Indico en cada una qué se teme y quién lo teme",
          "Reviso si la segunda dispara la pregunta por el sentido de la propia vida",
          "Comparo las dos experiencias con los textos de Kierkegaard y de Heidegger",
          "Concluyo qué clase de atención filosófica merece cada una"
        ],
        dificultad: 3
      },
      {
        titulo: "Pensar la finitud en un proyecto de vida",
        descripcion: "Elabora una reflexión escrita sobre el tiempo realmente disponible para los propios fines.",
        pasos: [
          "Calculo los años de estudio, de trabajo y de descanso que me quedan por mis cuentas",
          "Reviso qué decisiones postergo como si el tiempo fuera ilimitado",
          "Identifico lo que dejaría de hacer si la fecha fuera cercana",
          "Comparo esa lista con mis prioridades actuales",
          "Escribo tres ajustes concretos y su justificación"
        ],
        dificultad: 2
      }
    ]
  }
};
