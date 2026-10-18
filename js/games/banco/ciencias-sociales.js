// js/games/banco/ciencias-sociales.js
// Banco de contenido de Ciencias Sociales para la plataforma escolar.
// Cubre los cinco ejes del catálogo
// (espacio geográfico, tiempo histórico, ciudadanía, economía y culturas)
// en los cinco ciclos, de 1° a 11°.
//
// Reglas de autoría del banco:
// - La respuesta correcta siempre va escrita primero (`correcta: 0`); el
//   juego baraja las opciones en pantalla.
// - Los `pasos` de un reto están en el orden correcto; el juego los mezcla.
// - Nivel 1 recuerda, nivel 2 aplica, nivel 3 analiza o compara.
// - Los enunciados son diferentes entre sí dentro del nodo y entre los nodos
//   de esta materia, para que una partida nunca repita una pregunta.

export const BANCO = {
  // ==========================================================================
  // EJE 1 · Espacio geográfico y cartografía
  // ==========================================================================
  "ciencias-sociales--geografia--c1": {
    id: "ciencias-sociales--geografia--c1",
    nombre: "Mi barrio, mi colegio y el plano sencillo",
    preguntas: [
      {
        enunciado: "El dibujo de las calles de tu barrio, con sus lugares, se llama:",
        opciones: ["plano del barrio", "foto del barrio", "cartel del barrio", "correo del barrio"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "En un plano, la flecha de arriba suele indicar el:",
        opciones: ["norte", "sur", "recreo", "portón"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "Un cuadrito dibujado en el plano representa:",
        opciones: ["una casa de la calle", "una hora del día", "un sonido del barrio", "un premio"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "Los nombres de las calles se escriben en el plano con:",
        opciones: ["una letra clara", "un número grande", "un color raro", "una canción"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "Para no perderte yendo de la casa al colegio debes mirar:",
        opciones: ["el plano del recorrido", "la hora del reloj", "el grado del salón", "la lista de útiles"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "La tienda queda a la derecha del colegio. En el plano se dibuja:",
        opciones: ["al lado derecho de la escuela", "encima de la escuela", "debajo de las casas", "lejos del mapa"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Tu amigo dibuja la calle más grande que la escuela. Para corregirlo debe:",
        opciones: ["medir los dos con la misma cinta", "borrar la escuela", "cerrar los ojos", "usar otro color"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Tanto un plano como una foto tomada desde lo alto:",
        opciones: ["los dos muestran los lugares vistos desde arriba", "los dos tienen las mismas letras", "los dos cuentan personas", "los dos marcan la hora"],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "El plano de tu barrio y el mapa de Colombia se diferencian sobre todo en:",
        opciones: ["el tamaño del lugar que muestran", "el color del papel", "la letra del título", "el número de dibujos"],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "¿Cuál plano deja entender mejor el barrio?",
        opciones: ["el que tiene pocos dibujos grandes y letras claras", "el que tiene muchísimas rayas", "el que no tiene nombres", "el que solo tiene colores"],
        correcta: 0,
        dificultad: 3
      }
    ],
    retos: [
      {
        titulo: "Dibujar el camino de la casa al colegio",
        pasos: ["Dibujo mi casa en un cuadrito", "Dibujo el colegio en otro cuadrito", "Trazo una línea que une los dos dibujos"],
        dificultad: 1
      },
      {
        titulo: "Hacer el plano del salón",
        pasos: ["Marco la puerta del salón", "Dibujo las mesas y la tabla", "Pongo el nombre a cada sitio"],
        dificultad: 2
      },
      {
        titulo: "Comparar dos planos del mismo barrio",
        pasos: ["Miro los dos dibujos con calma", "Encierro los sitios que salen en ambos", "Anoto lo que cambió en uno de los planos"],
        dificultad: 3
      }
    ]
  },

  "ciencias-sociales--geografia--c2": {
    id: "ciencias-sociales--geografia--c2",
    nombre: "Colombia: regiones naturales y relieves",
    preguntas: [
      {
        enunciado: "¿Cuántas regiones naturales estudiamos en Colombia?",
        opciones: ["Seis", "Tres", "Cinco", "Diez"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "La región natural de Colombia formada por islas se llama:",
        opciones: ["Insular", "Caribe", "Pacífica", "Andina"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "¿En cuál región natural queda Bogotá?",
        opciones: ["Andina", "Caribe", "Orinoquía", "Amazonía"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "La región de grandes llanuras inundables del oriente se llama:",
        opciones: ["Orinoquía", "Amazonía", "Pacífica", "Insular"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "¿Cuáles son las tres cordilleras que cruzan Colombia?",
        opciones: ["Occidental, Central y Oriental", "Andina, Caribe y Orinoquía", "Magdalena, Cauca y Sinú", "Sumapaz, Quindío y Santa Marta"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "El río Magdalena es importante para el país porque:",
        opciones: ["comunica el interior con el mar Caribe", "divide a Colombia en dos regiones naturales", "nace en la Sierra Nevada de Santa Marta", "seca los llanos del oriente"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "El Páramo de Sumapaz, cerca de Bogotá, es clave porque:",
        opciones: ["guarda el agua de la lluvia y la entrega a las ciudades de la sabana", "produce carbón para las industrias", "da terrenos para sembrar arroz", "forma playas sobre el mar"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "En la región Caribe se ubican la Sierra Nevada de Santa Marta, el desierto de La Guajira, las ciénagas del Magdalena. ¿Qué se concluye de su relieve?",
        opciones: ["es muy variado, va del mar a la montaña alta", "solo tiene playas bajas", "está todo bajo el agua", "no tiene ninguna elevación"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Si un mapa del relieve pinta las zonas con nevados del país, ¿qué región debe quedar más marcada?",
        opciones: ["la Andina, porque allí están las cordilleras", "la Insular, porque son islas de coral", "la Orinoquía, por sus llanuras", "la región Caribe, por sus ciénagas"],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Los suelos del valle del río Cauca son fértiles. ¿Qué explicación es la más razonable?",
        opciones: ["el río arrastra lodos de la cordillera y los deposita en el valle", "el valle está cerca de la línea del ecuador", "el valle nunca recibe lluvias fuertes", "el valle fue nivelado con maquinaria pesada"],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Tanto Buenaventura como Barranquilla tienen puerto sobre el mar. ¿Qué elemento del relieve lo explica?",
        opciones: ["quedan sobre la costa, frente a un cuerpo de agua", "quedan en el centro del territorio nacional", "las dos están a gran altura sobre el mar", "las dos están sobre un antiguo cráter"],
        correcta: 0,
        dificultad: 3
      }
    ],
    retos: [
      {
        titulo: "Ubicar las regiones naturales en el mapa de Colombia",
        pasos: [
          "Extiendo el mapa con el norte hacia arriba",
          "Pinto la región Insular en las islas del mar",
          "Encierro la región Andina en el centro del país",
          "Marco la región Caribe al norte y la Orinoquía al oriente"
        ],
        dificultad: 1
      },
      {
        titulo: "Explicar por qué Bogotá tiene clima frío",
        pasos: [
          "Observo la altura de Bogotá en el mapa del relieve",
          "Recuerdo que a mayor altura el aire es más frío",
          "Contrasto esa información con Barranquilla, junto al mar",
          "Escribo la conclusión sobre el clima de la sabana"
        ],
        dificultad: 2
      },
      {
        titulo: "Analizar el riesgo de una ciudad construida en la montaña",
        pasos: [
          "Ubico la ciudad sobre la ladera de una cordillera",
          "Reviso las quebradas que bajan del nevado",
          "Consulto el registro de las lluvias intensas del año",
          "Anoto las medidas de prevención para la comunidad"
        ],
        dificultad: 3
      }
    ]
  },

  "ciencias-sociales--geografia--c3": {
    id: "ciencias-sociales--geografia--c3",
    nombre: "Relieve, clima, agua y recursos de Colombia",
    preguntas: [
      {
        enunciado: "¿Qué son los pisos térmicos en Colombia?",
        opciones: [
          "Franjas de temperatura que cambian con la altitud",
          "Pisos de un edificio construido en la sabana",
          "Capas de roca que forman una cordillera",
          "Zonas de Colombia divididas por sus fronteras"
        ],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "Bogotá está a unos 2.600 metros sobre el nivel del mar. Según los pisos térmicos, su clima es:",
        opciones: ["frío", "cálido", "templado", "de nevado perpetuo"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "El río que nace en el macizo colombiano, recorre el valle central y desemboca cerca de Barranquilla es:",
        opciones: ["el río Magdalena", "el río Cauca", "el río Sinú", "el río Ranchería"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "Los páramos son importantes para el agua porque:",
        opciones: ["los musgos y el suelo esponjoso retienen la lluvia y la sueltan poco a poco", "producen hielo para enfriar las ciudades", "sirven de cauce para grandes ríos navegables", "impiden la formación de quebradas"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "La mina de carbón a cielo abierto más grande del país, situada en La Guajira, se llama:",
        opciones: ["El Cerrejón", "Muzo", "Coveñas", "Zaragoza"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "El fenómeno de El Niño se manifiesta en Colombia, sobre todo, como:",
        opciones: ["sequías en unas regiones y lluvias intensas en otras", "descenso permanente de las temperaturas del país", "aumento de la actividad de todos los volcanes", "desaparición temporal de las estaciones de lluvia"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "La vertiente del Pacífico recibe muchas más lluvias que la del Caribe porque:",
        opciones: ["el aire húmedo del océano choca contra el Baudó y la cordillera Occidental y descarga allí", "el Pacífico está más cerca de la línea del ecuador que el Caribe", "las aguas del Pacífico corren hacia el norte sin encontrar montañas", "en el Pacífico no hay vientos alisios durante el invierno"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Las esmeraldas más reconocidas del mundo se explotan en Muzo y Coscuez, municipios del departamento de:",
        opciones: ["Boyacá", "Antioquia", "Nariño", "Caldas"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Compara la cuenca del río Magdalena-Cauca con la cuenca del Amazonas. ¿Cuál afirmación es correcta?",
        opciones: [
          "La primera concentra la mayor parte de la población y de la economía del país",
          "La primera tiene menos agua, pero más densidad de selva tropical",
          "La del Amazonas es la de mayor número de ciudades industriales",
          "Las dos vierten sus aguas al océano Pacífico"
        ],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Colombia se cuenta entre los países megadiversos. ¿Qué evidencia geográfica lo explica mejor?",
        opciones: [
          "Su variedad de relieves, pisos térmicos y dos vertientes marinas crea muchos hábitats",
          "Su territorio está atravesado por la línea del ecuador y por el trópico de Capricornio",
          "Su población es la más numerosa de Suramérica",
          "Sus suelos son todos volcánicos y muy fértiles"
        ],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Un municipio de la cordillera Central siembra café en ladera y ha talado el bosque para ampliar las parcelas. ¿Qué consecuencia es más probable?",
        opciones: ["Aumentan las avenidas de agua y los deslizamientos en época de lluvias", "Disminuye la temperatura media del municipio durante todo el año", "El río de la vereda cambia de curso hacia la cordillera Occidental", "Crece el número de páramos en las partes altas del municipio"],
        correcta: 0,
        dificultad: 3
      }
    ],
    retos: [
      {
        titulo: "Explicar por qué cambia la temperatura al subir una montaña",
        pasos: [
          "Ubico en el mapa el pueblo de la base y el del alto de la montaña",
          "Reviso la altitud de los dos pueblos en metros sobre el nivel del mar",
          "Relaciono la altitud con el piso térmico que les corresponde",
          "Escribo una conclusión sobre la ropa y los cultivos de cada pueblo"
        ],
        dificultad: 1
      },
      {
        titulo: "Analizar la distribución del agua en Colombia",
        pasos: [
          "Observa el mapa hidrográfico e identifica las cuatro vertientes del país",
          "Localiza las regiones con mayor cantidad de ríos y lluvias",
          "Localiza las ciudades con mayor consumo de agua",
          "Explica por qué hay escasez en zonas donde llueve mucho"
        ],
        dificultad: 3
      },
      {
        titulo: "Estudiar la relación entre relieve y economía de una región",
        pasos: [
          "Describo el relieve de la región que voy a estudiar",
          "Reviso los recursos naturales que allí se explotan",
          "Relaciono el relieve con los cultivos y con las vías de transporte",
          "Anoto un problema ambiental causado por esa actividad"
        ],
        dificultad: 3
      }
    ]
  },

  "ciencias-sociales--geografia--c4": {
    id: "ciencias-sociales--geografia--c4",
    nombre: "Geografía física mundial y placas tectónicas",
    preguntas: [
      {
        enunciado: "¿Cómo se llama la teoría de que los continentes estuvieron unidos y se fueron separando?",
        opciones: ["Deriva continental", "Teoría heliocéntrica", "Evolución de las especies", "Equilibrio puntuado"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "El nombre del supercontinente que existió hace millones de años fue:",
        opciones: ["Pangea", "Gondwana", "Laurasia", "Atlántida"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "La capa rígida de la Tierra que está fragmentada en placas se llama:",
        opciones: ["Litosfera", "Astenosfera", "Magnetosfera", "Troposfera"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "El cinturón de volcanes y sismos que rodea el océano Pacífico se conoce como:",
        opciones: ["Cinturón de Fuego del Pacífico", "Cinturón de vientos del Pacífico", "Anillo de hielo del Pacífico", "Cinturón de corrientes ecuatoriales"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "La cordillera más extensa del mundo, formada por la subducción de la placa de Nazca, es la:",
        opciones: ["Cordillera de los Andes", "Cordillera del Himalaya", "Sistema de los Apeninos", "Gran Cordillera Divisoria"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "En una dorsal oceánica, dos placas:",
        opciones: ["se separan y el magma crea nueva corteza", "chocan y forman una fosa abisal", "se deslizan en sentido contrario generando sismos", "se hunden una debajo de otra"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "El sismo de 2010 en Chile y los tsunamis del océano Índico se explican mejor por:",
        opciones: ["una zona de subducción que liberó energía de golpe", "la acción combinada del viento sobre el mar abierto", "el paso del país de una zona templada a una tórrida", "la erosión costera provocada por las mareas"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "La corriente fría de Humboldt, frente a las costas de Perú y Chile, favorece:",
        opciones: ["una gran actividad pesquera", "el clima ecuatorial de la zona", "las nieves perpetuas de la costa", "la formación de arrecifes de coral"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Colombia tiene alta sismicidad porque su territorio está en:",
        opciones: [
          "el borde de las placas de Nazca, Caribe y Sudamericana, con fallas activas",
          "el centro de una placa muy estable y antigua",
          "una zona de dorsales atlánticas sin fallas cercanas",
          "el único punto del planeta donde hay subducción"
        ],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Compara la cordillera del Himalaya con la cordillera de los Andes. ¿Qué tienen en común?",
        opciones: ["ambas se formaron por el choque de placas tectónicas", "ambas están sobre una dorsal que se separa", "ambas se levantaron por erosión del hielo continental", "ambas nacen de un mismo tipo de roca sedimentaria"],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "¿Por qué la costa de Japón y la de Ecuador comparten un riesgo sísmico parecido?",
        opciones: ["ambas están frente a una placa oceánica que subduce bajo otra", "ambas se ubican sobre una dorsal atlántica", "ambas tienen el mismo clima y vegetación", "las dos fueron separadas por el mismo estrecho"],
        correcta: 0,
        dificultad: 3
      }
    ],
    retos: [
      {
        titulo: "Ubicar las placas tectónicas en un mapamundi",
        pasos: [
          "Extiende el mapamundi con las placas coloreadas",
          "Identifica la placa sobre la que está América del Sur",
          "Traza el borde donde la placa de Nazca se hunde bajo la Sudamericana",
          "Pega una etiqueta a cada placa grande del planeta",
          "Reviso mi mapa con el atlas y corrijo los bordes dibujados"
        ],
        dificultad: 2
      },
      {
        titulo: "Explicar cómo se forma una cordillera de choque",
        pasos: [
          "Reviso el mapa de corrientes y placas para ver qué se mueve hacia dónde",
          "Identifico dos placas que avanzan una contra otra",
          "Describo el levantamiento de la corteza y los pliegues que resultan",
          "Añado los volcanes y las fallas que aparecen en la zona",
          "Escribo un texto que relacione el modelo con los Andes"
        ],
        dificultad: 3
      },
      {
        titulo: "Analizar las causas de un desastre natural",
        pasos: [
          "Anoto el evento ocurrido y el lugar exacto",
          "Reviso el relieve y el clima de esa zona",
          "Consulto el registro de amenazas y alertas",
          "Distingo la causa natural de la responsabilidad humana",
          "Propongo dos medidas de prevención para la comunidad"
        ],
        dificultad: 3
      }
    ]
  },

  "ciencias-sociales--geografia--c5": {
    id: "ciencias-sociales--geografia--c5",
    nombre: "Geopolítica mundial y cartografía temática",
    preguntas: [
      {
        enunciado: "La proyección de Mercator, creada en 1569, representa muy bien la dirección de los rumbos, pero:",
        opciones: ["dibuja enormes los territorios cercanos a los polos", "invierte el norte con el sur", "omite todos los océanos", "solo sirve para ciudades pequeñas"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "La línea que separa el territorio de dos Estados y aparece en los mapas se llama:",
        opciones: ["frontera internacional", "meridiano de Greenwich", "paralelo", "huso horario"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "La Corte Internacional de Justicia, que resuelve litigios entre Estados, tiene su sede en:",
        opciones: ["La Haya", "Ginebra", "Nueva York", "Washington"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "El mapa que representa Estados, capitales y límites se clasifica como mapa:",
        opciones: ["político", "físico", "topográfico", "climático"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "Las aguas que bañan las costas de San Andrés, Providencia y Santa Catalina están en el:",
        opciones: ["mar Caribe", "océano Pacífico", "río Magdalena", "golfo de Venezuela"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "La geopolítica estudia, sobre todo, la relación entre:",
        opciones: ["el territorio y el poder de los Estados", "la altitud media del relieve", "la antigüedad de las rocas y los fósiles", "las mareas y las corrientes oceánicas"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "El carbón de El Cerrejón viaja en ferrocarril hasta un puerto de La Guajira, desde donde sale a otros continentes. ¿Qué lo explica?",
        opciones: ["el mineral se exporta por vía marítima hacia mercados lejanos", "la escasez de lluvias en la alta Guajira", "el bajo costo de la mano de obra en la región", "la cercanía de La Guajira con el océano Pacífico"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Una organización que agrupa a Arabia Saudita y a otros Estados exportadores de petróleo es:",
        opciones: ["OPEP", "OTAN", "ALCA", "BRICS"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "En un mapa coroplético que muestra la pobreza por departamento, cada tono de color representa:",
        opciones: ["una franja de valores del indicador", "el número exacto de personas", "la superficie del departamento", "el año del censo"],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "¿Por qué se dice que la cartografía temática es una forma de interpretar el territorio y no solo de dibujarlo?",
        opciones: [
          "porque el autor selecciona qué datos mostrar y cómo agruparlos",
          "porque el mapa se imprime en colores diferentes",
          "porque los límites de los países nunca cambian",
          "porque todas las proyecciones conservan el área real"
        ],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Al contrastar el mapa político del mundo de 1914 con el actual, ¿qué transformación geopolítica es la más evidente?",
        opciones: [
          "la desaparición de los grandes imperios y la aparición de nuevos Estados nacionales",
          "el aumento del área de todos los países de Europa",
          "la eliminación de las fronteras en el continente africano",
          "la extensión de los imperios coloniales hasta hoy"
        ],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Colombia está entre los países con mayor número de personas desplazadas dentro de su propio territorio. ¿Qué condición geopolítica explica ese dato?",
        opciones: [
          "la prolongación del conflicto armado en zonas de frontera, de minería y de cultivos ilícitos",
          "la ubicación del país en una zona de clima ecuatorial",
          "la baja población de la región Amazonía",
          "el crecimiento del comercio marítimo del Pacífico"
        ],
        correcta: 0,
        dificultad: 3
      }
    ],
    retos: [
      {
        titulo: "Construir un mapa temático de densidad de población",
        pasos: [
          "Defino el fenómeno que voy a representar",
          "Consigo los datos oficiales de población por departamento",
          "Agrupo los valores en franjas de densidad",
          "Elijo los tonos de color y escribo la leyenda",
          "Añado el título, la fuente y la fecha del mapa",
          "Reviso que los límites y el norte estén bien dibujados"
        ],
        dificultad: 3
      },
      {
        titulo: "Analizar la posición geopolítica de Colombia",
        pasos: [
          "Reviso los países con los que Colombia comparte frontera",
          "Ubico los dos océanos y los principales puertos del país",
          "Reviso las rutas de comercio que pasan por el Caribe y el Pacífico",
          "Contrasto la posición de Colombia con la de sus países vecinos",
          "Concluyo sobre las ventajas y los riesgos de esa posición",
          "Ilustro la conclusión con un mapa político de la región"
        ],
        dificultad: 3
      },
      {
        titulo: "Leer una caricatura geopolítica",
        pasos: [
          "Identifico los personajes y los símbolos del dibujo",
          "Leo los textos y las fechas que aparecen",
          "Relaciono el dibujo con el hecho histórico que comenta",
          "Distingo la crítica o la postura del autor",
          "Escribo una interpretación con apoyo en fuentes"
        ],
        dificultad: 2
      }
    ]
  },

  // ==========================================================================
  // EJE 2 · Tiempo histórico
  // ==========================================================================
  "ciencias-sociales--historia--c1": {
    id: "ciencias-sociales--historia--c1",
    nombre: "Antes, ahora y después: mi línea de tiempo",
    preguntas: [
      {
        enunciado: "Una línea de tiempo sirve para mostrar los sucesos en:",
        opciones: ["el orden en que pasaron", "el lugar donde pasaron", "el color de cada semana", "el nombre de quien los contó"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "Lo primero que aparece en tu línea de tiempo personal es:",
        opciones: ["cuando eras un bebé", "el día de tu grado once", "cuando te gradúes", "el viaje del año pasado"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "Ayer llovió mucho. Ese suceso va en la parte del:",
        opciones: ["antes", "ahora", "después", "mañana"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "¿Cuál suceso ocurre primero en un día de colegio?",
        opciones: ["despertar en la casa", "salir al descanso", "volver a la casa", "almorzar con mi gente"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "Para saber cómo era la calle del barrio hace muchos años, lo mejor es:",
        opciones: ["mirar una foto antigua de esa calle", "prender la televisión de hoy", "contar las casas que hay ahora", "dibujar el mapa del salón"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "El timbre suena después de la clase. En tu línea del día, el timbre va:",
        opciones: ["después de la clase", "antes de llegar al colegio", "en la noche del domingo", "el año que viene"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "¿Cuál de estos sucesos va en el 'después' de tu línea de este año?",
        opciones: ["las vacaciones que vienen", "el cumpleaños pasado", "el primer día de clases", "la fiesta del año viejo"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Una foto antigua del barrio, otra foto actual. ¿Qué se concluye al mirarlas?",
        opciones: ["el barrio cambió con el pasar del tiempo", "el barrio es exactamente igual", "la foto antigua está mal tomada", "las dos fotos son de otra ciudad"],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Tu hermanito dice que el abuelo fue niño al mismo tiempo que él. ¿Qué respondes?",
        opciones: ["cada persona vive su propio tiempo", "él tiene razón, los dos son niños", "el abuelo nunca fue niño", "los dos nacieron este año"],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "¿Por qué la línea de tu día no puede empezar en la noche?",
        opciones: ["porque los sucesos siguen un orden en el tiempo", "porque la noche es más divertida", "porque el sol no sale nunca", "porque la línea no tiene principio"],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Dos amigos ordenan los mismos sucesos de dos maneras distintas. ¿Qué deben hacer?",
        opciones: ["volver a leer las tarjetas y ponerse de acuerdo", "borrar la línea de tiempo", "copiar lo del compañero", "echar una moneda al aire"],
        correcta: 0,
        dificultad: 3
      }
    ],
    retos: [
      {
        titulo: "Mi línea de tiempo personal",
        pasos: ["Dibujo cuando era un bebé", "Dibujo mi día de hoy", "Dibujo lo que haré cuando crezca"],
        dificultad: 1
      },
      {
        titulo: "Ordenar los sucesos de un día",
        pasos: ["Leo las tres tarjetas de sucesos", "Busco cuál pasa primero en la mañana", "Pego las tarjetas en el orden correcto"],
        dificultad: 2
      },
      {
        titulo: "Comparar dos fotos del mismo lugar",
        pasos: ["Miro primero la foto de hace años", "Miro después la foto reciente", "Anoto lo que cambió y lo que sigue igual"],
        dificultad: 3
      }
    ]
  },

  "ciencias-sociales--historia--c2": {
    id: "ciencias-sociales--historia--c2",
    nombre: "Pueblos indígenas de Colombia y sus fuentes",
    preguntas: [
      {
        enunciado: "El pueblo indígena que habitó la sabana de Bogotá se llama:",
        opciones: ["Muisca", "Tairona", "Wayuu", "Zenú"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "El zipa era uno de los dos grandes jefes Muiscas. ¿En qué parte de la sabana gobernaba?",
        opciones: ["en el sur, con sede en Bacatá", "en la costa del océano Pacífico", "en los llanos del oriente", "en la Sierra Nevada de Santa Marta"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "El pueblo wayuu vive principalmente en el departamento de:",
        opciones: ["La Guajira", "Putumayo", "Santander", "Córdoba"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "La mola, tela bordada con figuras, es una prenda del pueblo:",
        opciones: ["Wayuu", "Muisca", "Tairona", "Inga"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "El lago de Guatavita está ligado a una ceremonia de oro que dio origen a la leyenda de:",
        opciones: ["El Dorado", "La Dorada", "Páez", "El Cabrero"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "Escuchas a un mayor del resguardo contar la historia de su pueblo. Esa información es una fuente:",
        opciones: ["oral", "escrita", "arqueológica", "fotográfica"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Para saber cómo vivían los Tairona en la Sierra Nevada, la fuente más directa es:",
        opciones: ["los restos de sus pueblos de piedra y sus piezas de oro", "las novelas escritas en Europa", "el noticiero de la televisión", "las canciones modernas de la costa"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "El Museo del Oro de Bogotá sirve para estudiar a los pueblos indígenas porque:",
        opciones: ["guarda piezas originales de orfebrería precolombina", "vende las joyas que usan las comunidades", "reconstructó las casas completas de los pueblos", "conserva los periódicos de la Colonia"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Tenemos una crónica antigua, un testimonio oral, unos pedazos de cerámica. ¿Qué se gana al usar los tres?",
        opciones: ["una explicación más completa, porque cada fuente aporta una parte", "una explicación más corta y sin dudas", "la certeza de que ninguna fuente falla", "el descarte de los testimonios orales"],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "¿Por qué no alcanza con leer solo a los cronistas españoles para conocer a los pueblos indígenas?",
        opciones: ["porque escribieron desde su propia mirada, no desde la de los pueblos", "porque los cronistas no sabían escribir", "porque en la Colonia no existían pueblos indígenas", "porque las crónicas solo hablaban de animales"],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "En San Agustín (Huila) quedan esculturas de piedra, en la Sierra Nevada quedan pueblos de piedra. ¿Qué muestran los dos sitios?",
        opciones: ["sociedades organizadas que trabajaron el territorio antes de la Colonia", "obras construidas por los españoles en la Colonia", "sitios naturales sin intervención humana", "centros comerciales de las ciudades nuevas"],
        correcta: 0,
        dificultad: 3
      }
    ],
    retos: [
      {
        titulo: "Organizar una visita al museo",
        pasos: [
          "Llevo preparadas tres preguntas por escribir",
          "Observo con calma las vitrinas del salón",
          "Dibujo la pieza que más me interesa",
          "Cuento en clase lo que aprendí"
        ],
        dificultad: 1
      },
      {
        titulo: "Aprovechar una fuente oral del resguardo",
        pasos: [
          "Preparo las preguntas con respeto y claridad",
          "Escucho al mayor sin interrumpir el relato",
          "Escribo lo que contaron con sus propias palabras",
          "Agradezco y reviso lo que entendí"
        ],
        dificultad: 2
      },
      {
        titulo: "Contrastar varias fuentes sobre un mismo pueblo",
        pasos: [
          "Elijo el pueblo indígena que voy a estudiar",
          "Reviso la crónica escrita por un español",
          "Examino las piezas del museo y los restos hallados",
          "Contrasto las fuentes y escribo en qué coinciden"
        ],
        dificultad: 3
      }
    ]
  },

  "ciencias-sociales--historia--c3": {
    id: "ciencias-sociales--historia--c3",
    nombre: "Independencia, República y Guerra de los Mil Días",
    preguntas: [
      {
        enunciado: "El 20 de julio de 1810 ocurrió en Bogotá el incidente conocido como:",
        opciones: ["el Florero de Llorente", "la rebelión de los Comuneros", "la Noche Septembrina", "el desembarco de Bolívar en Carúpano"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "La batalla del 7 de agosto de 1819 que selló la independencia se libró en:",
        opciones: ["el puente de Boyacá", "la sabana de Bogotá", "el Pantano de Vargas", "la ciudad amurallada de Cartagena"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "Entre 1819 y 1830, los territorios de hoy Colombia, Venezuela, Ecuador y Panamá formaron el Estado llamado:",
        opciones: ["la Gran Colombia", "la Nueva Granada", "las Provincias Unidas", "la Confederación Granadina"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "¿Qué dos bandos se enfrentaron en la Guerra de los Mil Días?",
        opciones: ["liberales y conservadores", "centralistas y federalistas", "patriotas y realistas", "gomistas y rojistas"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "El periodo entre 1810 y 1816, lleno de peleas entre centralistas y federalistas, se conoce como:",
        opciones: ["la Patria Boba", "la Regeneración", "el Bogotazo", "el Frente Nacional"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "La derrota final del poder español en la Campaña Libertadora fue posible porque Bolívar:",
        opciones: ["cruzó los llanos inundados y el páramo de Pisba y tomó por sorpresa al bando realista", "recibió una flota por el océano Pacífico", "contó con el apoyo abierto de la Corona española", "esperó diez años el retiro voluntario de las tropas realistas"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Policarpa Salavarriata, 'La Pola', fue ejecutada en 1817 durante:",
        opciones: ["la Reconquista española", "la Guerra de los Mil Días", "la Regeneración", "la Patria Boba"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "La guerra civil de 1899 a 1902 debilitó tanto al país que, en 1903, se separó:",
        opciones: ["el istmo de Panamá", "la provincia de Pamplona", "el territorio de la Guajira", "la provincia de Chocó"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "¿Qué permite afirmar que la independencia no se resolvió en 1810?",
        opciones: [
          "que después vinieron la Reconquista y once años más de guerra",
          "que Bolívar llegó al país recién en 1819",
          "que la Primera República fue reconocida por España",
          "que el territorio de hoy es mucho más grande"
        ],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Bolívar buscaba un poder fuerte y unido; Santander defendía las leyes y el Congreso. ¿Qué muestra ese choque?",
        opciones: [
          "dos modelos de gobierno para un mismo país",
          "una discusión sobre el precio del café",
          "la pelea entre dos bandos de la Guerra de los Mil Días",
          "la diferencia entre costeños y bogotanos"
        ],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "La Constitución de 1886 centralizó el poder y creó un ejército nacional. ¿Qué problema buscaba resolver?",
        opciones: [
          "las guerras civiles y los caudillos regionales del siglo XIX",
          "el atraso en la exportación de carbón y petróleo",
          "la separación de Panamá de 1903",
          "la ausencia de partidos políticos en el país"
        ],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "¿Por qué la Gran Colombia terminó separándose entre 1829 y 1831?",
        opciones: [
          "porque el proyecto centralista no resolvió las diferencias regionales",
          "porque España volvió a tomar el territorio con un ejército grande",
          "porque Venezuela y Ecuador nunca participaron en la independencia",
          "porque Bolívar renunció por razones de salud en 1821"
        ],
        correcta: 0,
        dificultad: 3
      }
    ],
    retos: [
      {
        titulo: "Ordenar los hechos de la independencia",
        pasos: [
          "El 20 de julio de 1810 se forma una nueva junta en Bogotá",
          "Entre 1815 y 1819 la Corona española reconquista el territorio",
          "El 7 de agosto de 1819 ganan los patriotas en el puente de Boyacá",
          "En 1821 el Congreso de Cúcuta da una Constitución a la Gran Colombia"
        ],
        dificultad: 1
      },
      {
        titulo: "Explicar las causas de la Guerra de los Mil Días",
        pasos: [
          "Reviso la elección presidencial de 1898 y el fraude denunciado por los liberales",
          "Observo la división entre liberales y conservadores",
          "Miro la crisis fiscal y el bajo precio del café de exportación",
          "Anoto cómo terminó el conflicto y qué perdió el país en 1903"
        ],
        dificultad: 2
      },
      {
        titulo: "Explicar por qué se fragmentó la Gran Colombia",
        pasos: [
          "Reviso el proyecto centralista de Bolívar",
          "Reviso la resistencia regionalista en Venezuela y Ecuador",
          "Observo la crisis financiera y las guerras por el poder",
          "Explico por qué la separación se hizo entre 1830 y 1831"
        ],
        dificultad: 3
      }
    ]
  },

  "ciencias-sociales--historia--c4": {
    id: "ciencias-sociales--historia--c4",
    nombre: "Siglo XX: guerras mundiales, violencia y Frente Nacional",
    preguntas: [
      {
        enunciado: "La Primera Guerra Mundial ocurrió entre los años:",
        opciones: ["1914 y 1918", "1939 y 1945", "1918 y 1939", "1945 y 1953"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "El hecho que encendió la Primera Guerra Mundial fue el asesinato del archiduque Francisco Fernando en:",
        opciones: ["Sarajevo", "Viena", "Berlín", "París"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "La ONU se creó en 1945 con el propósito principal de:",
        opciones: ["evitar una nueva guerra mundial", "repartir las colonias de África", "organizar el comercio del petróleo", "fundar un solo Estado mundial"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "El Frente Nacional colombiano acordó que el poder sería:",
        opciones: ["alternado y compartido entre liberales y conservadores", "entregado a las fuerzas armadas por diez años", "elegido por voto directo de los analfabetos", "repartido con la guerrilla de las FARC"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "La Declaración Universal de los Derechos Humanos de 1948 responde, ante todo, a:",
        opciones: ["el horror del Holocausto y de la guerra mundial", "la creación del Estado de Israel", "la guerra de Corea en Asia", "el surgimiento de los bloques económicos"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "La crisis económica de 1929 golpeó a Colombia principalmente porque:",
        opciones: ["cayó el precio del café de exportación", "se detuvo la llegada de petróleo importado", "bajó el precio de la esmeralda boyacense", "cesaron las remesas de los emigrantes"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "La masacre de los trabajadores de la United Fruit, en 1928, ocurrió en:",
        opciones: ["Ciénaga, Magdalena", "Turbo, Antioquia", "Barrancabermeja, Santander", "Quibdó, Chocó"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "El asesinato de Jorge Eliécer Gaitán, el 9 de febrero de 1948, produjo en Bogotá:",
        opciones: ["el Bogotazo: un estallido popular con incendios en el centro", "la renuncia inmediata del presidente de la República", "el fin de la Guerra de los Mil Días", "una revolución agraria en el campo"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "El Frente Nacional (1958-1974) dejó por fuera de la vida política a:",
        opciones: ["los movimientos distintos a los dos partidos tradicionales", "los militares de alto rango", "los sindicatos obreros de las ciudades", "los grandes propietarios de tierras"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "¿Por qué 1948 es un parte aguas en la historia colombiana del siglo XX?",
        opciones: [
          "porque une el fin de un modelo político, la muerte de Gaitán y el arranque de La Violencia",
          "porque ese año se firmó el primer tratado de libre comercio del país",
          "porque ese año terminó la Guerra de los Mil Días",
          "porque ese año se eligió al primer presidente liberal"
        ],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Compara el Frente Nacional con la Constitución de 1991 en materia de participación:",
        opciones: [
          "el acuerdo bipartidista cerraba los caminos; la Carta de 1991 creó mecanismos nuevos de participación",
          "los dos abrieron la política a todos los partidos por igual",
          "el Frente Nacional amplió la participación y 1991 la restringió",
          "los dos prohibieron la inscripción de movimientos nuevos"
        ],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "¿Qué relación puede establecerse entre la exclusión del Frente Nacional y el surgimiento del M-19?",
        opciones: [
          "la falta de caminos electorales empujó a unos grupos a la vía armada urbana",
          "el M-19 nació por el apoyo del Frente Nacional a la guerrilla rural",
          "no hay relación: el M-19 aparece en 1985 con el Palacio de Justicia",
          "el M-19 surgió del movimiento sindical de las ciudades industriales"
        ],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "La participación colombiana en la Guerra de Corea (1951-1953) se distingue porque:",
        opciones: [
          "fue la única fuerza latinoamericana desplegada en ese conflicto",
          "Colombia fue el primer país del continente en pelear fuera de América",
          "se hizo sin autorización del Congreso de la República",
          "terminó con una pérdida de territorio nacional"
        ],
        correcta: 0,
        dificultad: 3
      }
    ],
    retos: [
      {
        titulo: "Ordenar hechos de la primera mitad del siglo XX en Colombia",
        pasos: [
          "Ocurre la masacre bananera de diciembre de 1928",
          "Llega la gran crisis económica de 1929",
          "Comienza la República Liberal en 1930",
          "Asesinan a Jorge Eliécer Gaitán en 1948"
        ],
        dificultad: 1
      },
      {
        titulo: "Explicar por qué estalló el Bogotazo",
        pasos: [
          "Reviso la tensión política de 1948 en el país",
          "Ubico el asesinato de Gaitán en el centro de Bogotá",
          "Narro la reacción popular de la tarde del 9 de febrero",
          "Observo los incendios y los daños en la ciudad",
          "Anoto los efectos políticos de las semanas siguientes"
        ],
        dificultad: 2
      },
      {
        titulo: "Comparar las dos guerras mundiales",
        pasos: [
          "Identifico las causas de cada guerra mundial",
          "Reviso los países que participaron en cada una",
          "Miro las organizaciones creadas al terminar",
          "Contrasto el saldo de muertos y de destrucción",
          "Escribo las diferencias y los parecidos hallados"
        ],
        dificultad: 3
      }
    ]
  },

  "ciencias-sociales--historia--c5": {
    id: "ciencias-sociales--historia--c5",
    nombre: "Conflicto armado colombiano, paz y memoria histórica",
    preguntas: [
      {
        enunciado: "Las FARC surgieron en 1964 a partir de:",
        opciones: [
          "grupos de autodefensa liberal en Marquetalia, sur del Tolima",
          "la Asamblea Nacional Constituyente de ese año",
          "la guerrilla que había peleado la Guerra de los Mil Días",
          "el movimiento estudiantil de las ciudades principales"
        ],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "El M-19 tomó su nombre de:",
        opciones: [
          "las elecciones del 19 de abril de 1970, que sus fundadores consideraron fraude",
          "la fecha de la toma del Palacio de Justicia",
          "el día del acuerdo de paz con la Unión Patriótica",
          "la fecha de creación del Centro Nacional de Memoria Histórica"
        ],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "El golpe al Palacio de Justicia, con once magistrados muertos, se dio en:",
        opciones: ["noviembre de 1985", "marzo de 1990", "agosto de 2002", "febrero de 1948"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "La Ley de Víctimas y Restitución de Tierras se expidió en el año:",
        opciones: ["2011", "1991", "2002", "2016"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "La Unión Patriótica, creada en 1985 como partido legal, terminó arrasada por:",
        opciones: [
          "los asesinatos sistemáticos contra sus miembros, hoy investigados por la justicia transicional",
          "la decisión interna de disolverse tras el fracaso electoral",
          "el exterminio físico de sus dirigentes por parte de las FARC",
          "una sanción de la Corte Constitucional por violar el régimen de partidos"
        ],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "El Sistema Integral de Verdad, Justicia, Reparación y No Repetición incluye una unidad cuya misión es encontrar a las personas desaparecidas. ¿Cuál es?",
        opciones: [
          "la Unidad de Búsqueda de Personas dadas por Desaparecidas",
          "la Jurisdicción Especial para la Paz",
          "la Comisión Nacional de Reparación e Historia",
          "la Unidad de Restitución de Tierras"
        ],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Las zonas más golpeadas por el conflicto armado coinciden, en general, con regiones de:",
        opciones: [
          "frontera, vocación agraria y débil presencia del Estado",
          "gran industria y puerto marítimo",
          "alta densidad urbana con tres universidades",
          "clima frío y cultivos de papa y hortalizas"
        ],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "La erupción del Nevado del Ruiz, el 13 de noviembre de 1985, que destruyó Armero, dejó en evidencia:",
        opciones: [
          "las fallas del Estado para prevenir y atender la emergencia",
          "la inexistencia de un servicio geológico en el país",
          "la imposibilidad técnica de evacuar un pueblo entero",
          "la ausencia total de alertas antes de la erupción"
        ],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "¿Qué diferencia se puede establecer entre la justicia ordinaria y la justicia transicional de la JEP?",
        opciones: [
          "la transicional combina sanciones con verdad, reparación a las víctimas y garantías de no repetición",
          "la ordinaria castiga con más severidad los delitos de los combatientes",
          "la transicional perdona a los responsables sin exigirles comparecencia",
          "no hay diferencia: las dos aplican el mismo Código Penal"
        ],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "¿Por qué el resultado del plebiscito del 2 de octubre de 2016 obligó a renegociar el acuerdo de paz?",
        opciones: [
          "porque el 'No' ganó por un margen estrecho y se pedían ajustes a la justicia y a la participación política",
          "porque la participación en la votación fue nula según la Registraduría",
          "porque el acuerdo no había sido firmado por las partes en La Habana",
          "porque la Corte Constitucional derogó el acuerdo esa misma semana"
        ],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "El informe '¡Basta ya!' del Centro Nacional de Memoria Histórica recogió los relatos de las víctimas. ¿Qué agrega esa memoria a los archivos oficiales?",
        opciones: [
          "la experiencia de quienes sufrieron el conflicto, que los balances militares suelen omitir",
          "las cifras exactas de los gastos del presupuesto nacional",
          "el listado de los tratados firmados por Colombia en el siglo XX",
          "la versión de los comandantes sobre cada operación militar"
        ],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Compara una explicación del conflicto centrada en el narcotráfico con otra centrada en la tierra. ¿Qué cambia en la política de paz?",
        opciones: [
          "la segunda exige reforma rural y presencia del Estado, no solo persecución penal",
          "la segunda lleva a concentrar todos los esfuerzos en la fumigación aérea",
          "la primera resuelve el problema de la propiedad en el campo",
          "las dos explicaciones conducen a la misma política pública"
        ],
        correcta: 0,
        dificultad: 3
      }
    ],
    retos: [
      {
        titulo: "Construir una línea de tiempo del conflicto armado",
        pasos: [
          "Reviso los hechos de La Violencia a partir de 1948",
          "Marco el surgimiento de las guerrillas en los años sesenta",
          "Ubico la entrada del narcotráfico y de las autodefensas",
          "Añado las tentativas de paz y el cambio constitucional de 1991",
          "Coloco la Ley de Víctimas de 2011 y el Acuerdo de 2016",
          "Verifico cada fecha en una fuente confiable del museo"
        ],
        dificultad: 2
      },
      {
        titulo: "Analizar una noticia sobre memoria histórica",
        pasos: [
          "Distingo los hechos de las opiniones del texto",
          "Identifico los actores nombrados y sus posiciones",
          "Consulto el informe de la Comisión de la Verdad sobre el caso",
          "Reviso si existen cifras oficiales que respalden la noticia",
          "Contrasto la versión de la prensa con los testimonios de las víctimas",
          "Escribo una conclusión con todas las fuentes citadas"
        ],
        dificultad: 3
      },
      {
        titulo: "Diferenciar las causas estructurales de las coyunturales del conflicto",
        pasos: [
          "Anoto los hechos disparadores que aparecen en la cronología",
          "Reviso los problemas de tierra y de presencia estatal en el campo",
          "Identifico el papel de las drogas ilícitas y del armamento",
          "Contrasto las dos listas y explico cuáles se repiten en el tiempo"
        ],
        dificultad: 3
      }
    ]
  },

  // ==========================================================================
  // EJE 4 · Economía y sociedad
  // ==========================================================================
  "ciencias-sociales--economia-sociedad--c1": {
    id: "ciencias-sociales--economia-sociedad--c1",
    nombre: "Trueque, moneda y mercado del barrio",
    preguntas: [
      {
        enunciado: "Antes de existir la moneda, la gente conseguía lo que necesitaba:",
        opciones: ["cambiando unas cosas por otras", "robando en la tienda", "imprimiendo papel", "esperando regalos"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "Las monedas y los billetes sirven para:",
        opciones: ["comprar cosas en el mercado", "contar las estrellas", "pintar las casas", "regalar el tiempo"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "El lugar del barrio donde compramos el pan es:",
        opciones: ["la tienda", "la clínica", "la cancha", "la oficina del correo"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "¿Qué reciben las personas grandes por su trabajo?",
        opciones: ["un dinero llamado salario", "una medalla de la tienda", "un pase para el bus", "una carta del colegio"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "Para comprar un cuaderno necesito saber cuánto cuesta. Ese dato se llama:",
        opciones: ["el precio", "el vuelto", "el ahorro", "el gasto"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Quiero cambiar mis huevos por pan. ¿A quién debo buscar?",
        opciones: ["a quien tenga pan y quiera huevos", "a quien venda solo pan", "a la persona del dinero", "a quien no tenga nada"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Cuando pago con una moneda más grande, la tienda me devuelve:",
        opciones: ["la vuelta", "el vuelto", "el gasto", "el pedido"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "¿Qué hacemos con el dinero que no gastamos?",
        opciones: ["lo guardamos para después", "lo botamos a la calle", "lo prestamos sin apuntar", "lo pintamos de colores"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "¿Por qué es más fácil comprar con moneda que cambiar gallinas por zapatos?",
        opciones: ["porque todos aceptan la moneda y el valor se cuenta rápido", "porque las gallinas cuestan más caras", "porque los zapatos no se venden", "porque el trueque está prohibido"],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Dos tiendas venden el mismo cuaderno a precios distintos. ¿Qué conviene para ahorrar?",
        opciones: ["comparar los precios antes de comprar", "comprar en la más cara", "comprar dos cuadernos", "comprar sin mirar el precio"],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Llevas tu canasta a cambiar, pero nadie la quiere. ¿Qué pasa con el trueque?",
        opciones: ["el intercambio no se logra, por eso se inventó la moneda", "el intercambio se hace igual, por costumbre", "la tienda te presta el dinero", "el trueque se cancela con un recibo"],
        correcta: 0,
        dificultad: 3
      }
    ],
    retos: [
      {
        titulo: "Hacer un cambio en el trueque",
        pasos: ["Llevo lo que puedo dar", "Busco a quien tenga lo que necesito", "Nos ponemos de acuerdo en el cambio"],
        dificultad: 1
      },
      {
        titulo: "Comprar en la tienda del barrio",
        pasos: ["Miro el precio del producto", "Entrego las monedas en la caja", "Recibo la vuelta y el producto"],
        dificultad: 2
      },
      {
        titulo: "Cuidar el dinero ahorrado",
        pasos: ["Aparto el dinero que no voy a usar", "Lo guardo en un lugar seguro", "Reviso cada semana si sigo ahorrando"],
        dificultad: 3
      }
    ]
  },

  "ciencias-sociales--economia-sociedad--c2": {
    id: "ciencias-sociales--economia-sociedad--c2",
    nombre: "Necesidades, oferta y demanda",
    preguntas: [
      {
        enunciado: "El alimento, el agua, la ropa: lo que necesitamos para vivir se llama:",
        opciones: ["necesidades", "antojos", "regalos", "juegos"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "El deseo de la gente de comprar un producto se llama:",
        opciones: ["la demanda", "la oferta", "el ahorro", "el impuesto"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "Las tiendas, los cosecheros, los panaderos que ponen productos a la venta forman:",
        opciones: ["la oferta", "la demanda", "el ahorro", "el salario"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "¿Qué se usa para medir el valor de las cosas en el mercado?",
        opciones: ["el dinero", "la cinta métrica", "el reloj", "la radio comunitaria"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "¿Cuál de estas cosas es una necesidad para una familia?",
        opciones: ["la ropa para el invierno", "un celular del último modelo", "una estatua para el jardín", "una caja de dulces importados"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "Muchas personas quieren comprar mangos, el puesto tiene pocos mangos. El precio suele:",
        opciones: ["subir", "bajar", "quedar igual", "desaparecer"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "En la plaza llegaron muchas sandías al mismo tiempo. El precio de la sandía suele:",
        opciones: ["bajar", "subir", "quedar fijo todo el año", "no cambiar nunca"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "El precio del café en el mercado mundial le sirve al cosechero para:",
        opciones: ["decidir cuánto sembrar y a quién vender", "saber la hora del día", "conocer el nombre de su vereda", "calcular el tamaño de su casa"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "En Semana Santa sube el precio del pescado. ¿Qué lo explica?",
        opciones: ["la mayor demanda de pescado sin más pescado a la venta", "la desaparición de las piscigranjas del país", "el cierre de las tiendas durante esa semana", "la llegada del pescado desde otro continente"],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "La panadería de la esquina subió el precio del pan y perdió clientes. ¿Qué se concluye?",
        opciones: ["cuando sube el precio, parte de la demanda se va", "el precio no tiene efecto sobre la venta", "los clientes compran más pan al subir el precio", "la panadería perdió clientes por el horario"],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Un pueblo necesita agua, el río está lejos. ¿Qué hace el campesino con ese problema?",
        opciones: ["gasta dinero y tiempo en resolverlo, por eso el agua tiene valor", "espera que el agua llegue sola al pueblo", "vende el río a otra comunidad", "cambia de necesidad por un antojo"],
        correcta: 0,
        dificultad: 3
      }
    ],
    retos: [
      {
        titulo: "Seguir el recorrido de un producto",
        pasos: [
          "Sale de la finca del cosechero",
          "Viaja en camión hasta la plaza de mercado",
          "Se ofrece en el puesto del vendedor",
          "Llega cocinado a la mesa de la casa"
        ],
        dificultad: 1
      },
      {
        titulo: "Explicar por qué sube el precio de algo",
        pasos: [
          "Cuento cuántas personas quieren comprar el producto",
          "Cuento la cantidad que hay a la venta",
          "Observo qué pasa con el precio cuando hay poca cantidad",
          "Escribo la relación entre las dos cantidades"
        ],
        dificultad: 2
      },
      {
        titulo: "Comparar dos puestos de la plaza de mercado",
        pasos: [
          "Anoto los precios del primer puesto",
          "Anoto los precios del segundo puesto",
          "Pongo en una tabla los datos de los dos puestos",
          "Explico por qué un puesto resulta más barato"
        ],
        dificultad: 3
      }
    ]
  },

  "ciencias-sociales--economia-sociedad--c3": {
    id: "ciencias-sociales--economia-sociedad--c3",
    nombre: "Producción, trabajo, inflación y consumo",
    preguntas: [
      {
        enunciado: "La agricultura, la ganadería y la pesca hacen parte de cuál sector de la economía?",
        opciones: ["del sector primario", "del sector secundario", "del sector terciario", "del sector financiero"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "Las fábricas que transforman materias primas en productos pertenecen al sector:",
        opciones: ["secundario", "primario", "de servicios", "informal"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "El comercio, el transporte, la educación forman parte del sector:",
        opciones: ["de servicios", "extractivo", "industrial", "agropecuario"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "La institución que produce las estadísticas oficiales de Colombia es:",
        opciones: ["el DANE", "la DIAN", "el ICFES", "el IDEAM"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "¿Qué es el producto interno bruto (PIB)?",
        opciones: ["la suma de los bienes y servicios producidos por un país en un periodo", "el total de los impuestos recaudados por el gobierno", "el conjunto de los salarios pagados en el año", "el valor de las máquinas de las fábricas"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "La canasta familiar de una ciudad se calcula con:",
        opciones: ["los precios de los bienes y servicios que consume una familia típica", "los gastos del gobierno central en un año", "las utilidades de los grandes almacenes", "el promedio de los sueldos de los alcaldes"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Para proteger a los compradores de prácticas abusivas existe en Colombia:",
        opciones: ["la Superintendencia de Industria y Comercio", "la Contraloría General de la República", "el Servicio Nacional de Aprendizaje", "la Defensoría del Espacio Público"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "La inflación se define correctamente como:",
        opciones: ["el aumento general y sostenido de los precios de la economía", "la subida del precio de un producto muy demandado", "la pérdida de un empleo formal en la ciudad", "el aumento del salario mínimo decretado"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "¿Qué herramienta usa el Banco de la República para controlar la inflación?",
        opciones: ["la tasa de interés de intervención", "el precio oficial del dólar de cada día", "el decreto del salario mínimo anual", "el presupuesto de inversión de los ministerios"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "El panadero sube el precio del pan porque subió la harina. ¿Qué se observa en ese caso?",
        opciones: ["un traslado de costos que contribuye a la inflación", "un aumento del salario mínimo del panadero", "una política de la tasa de interés del emisor", "un efecto del IVA sobre el pan"],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Un país con mucho desempleo suele tener menos consumo. ¿Por qué?",
        opciones: ["porque menos hogares tienen ingreso para gastar en el mercado", "porque el desempleo aumenta los precios de los productos", "porque las fábricas dejan de producir por orden legal", "porque los bancos suben la tasa de interés del país"],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Dos personas tienen el mismo salario, una vive en una ciudad con arriendos costosos. ¿Qué se puede afirmar?",
        opciones: ["su poder de compra es distinto según el costo de la vida del lugar", "las dos compran exactamente lo mismo en el mercado", "el salario de la ciudad vale más por ley", "la inflación se mide solo en las ciudades grandes"],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "En Colombia gran parte del empleo no tiene contrato ni prestación social. ¿Cómo se le llama a ese empleo?",
        opciones: ["informal", "público", "temporal", "calificado"],
        correcta: 0,
        dificultad: 2
      }
    ],
    retos: [
      {
        titulo: "Explicar la cadena productiva del pan",
        pasos: [
          "El agricultor siembra y cosecha el trigo",
          "El molino convierte el grano en harina",
          "El panadero transforma la harina en pan",
          "La tienda vende el pan a la gente"
        ],
        dificultad: 1
      },
      {
        titulo: "Explicar qué pasa cuando sube la inflación",
        pasos: [
          "Reviso los precios de la canasta familiar del mes",
          "Contrasto esos precios con los del mes anterior",
          "Anoto qué productos subieron más de precio",
          "Explico cómo el aumento afecta el gasto del hogar"
        ],
        dificultad: 2
      },
      {
        titulo: "Analizar el efecto del trabajo informal en las familias",
        pasos: [
          "Reviso si el empleo tiene contrato, horario, salud y pensión",
          "Calculo el ingreso mensual de ese hogar en un año",
          "Comparro ese ingreso con el costo de la canasta",
          "Explico la vulnerabilidad de esa familia ante una enfermedad"
        ],
        dificultad: 3
      }
    ]
  },

  "ciencias-sociales--economia-sociedad--c4": {
    id: "ciencias-sociales--economia-sociedad--c4",
    nombre: "Indicadores macroeconómicos de Colombia",
    preguntas: [
      {
        enunciado: "El PIB per cápita se obtiene de:",
        opciones: ["dividir el producto interno bruto entre el número de habitantes", "sumar los ingresos de los salarios de un año", "multiplicar el PIB por el número de empresas", "restar el déficit fiscal del PIB nacional"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "El Banco de la República, creado en 1923, cumple la función de:",
        opciones: ["autorizar la emisión de dinero y administrar las reservas internacionales", "recaudar los impuestos nacionales de la Nación", "aprobar el presupuesto general de la República", "fijar el salario mínimo de cada año"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "La entidad que recauda los impuestos nacionales en Colombia es:",
        opciones: ["la DIAN", "el DANE", "la Superintendencia Financiera", "el Fondo Nacional del Ahorro"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "La tasa de cambio expresa:",
        opciones: ["el precio de una moneda extranjera en pesos", "el costo del transporte de carga por carretera", "el interés que pagan los bancos comerciales", "el aumento anual del salario mínimo"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "¿Qué mide la tasa de desempleo que publica el DANE?",
        opciones: ["el porcentaje de personas que buscan trabajo y no lo encuentran", "el total de personas que trabajan sin contrato en el país", "los ingresos promedio de los hogares urbanos", "el número de jóvenes que estudian sin trabajar"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Si la inflación anual fue positiva y el salario no subió igual, la familia puede comprar:",
        opciones: ["menos que antes, porque su ingreso real perdió poder", "más que antes, porque hay más dinero en la calle", "exactamente lo mismo que el año anterior", "solo bienes importados más baratos"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "El déficit fiscal de la Nación significa que:",
        opciones: ["el gobierno gasta más de lo que recauda y debe endeudarse", "los hogares gastan más de lo que ganan en el año", "las empresas exportan más de lo que importan", "el banco central emite dinero sin autorización del Congreso"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Las remesas que llegan a Colombia son:",
        opciones: ["los dineros que los colombianos en el exterior envían a sus familias", "el impuesto que cobra el país por las divisas recibidas", "las utilidades de las empresas extranjeras en Colombia", "el subsidio del gobierno a los hogares pobres"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Colombia depende mucho del carbón y del petróleo para exportar. ¿Qué riesgo trae esa concentración?",
        opciones: [
          "cuando bajan los precios internacionales, caen los ingresos y el recaudo fiscal",
          "el país deja de producir alimentos por completo",
          "las reservas internacionales se vuelven infinitas",
          "el salario mínimo sube solo, sin negociación"
        ],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "En Colombia la tasa de desempleo urbano bajó, pero aumentó el trabajo sin contrato. ¿Qué concluimos?",
        opciones: [
          "el empleo mejora en cantidad, no en calidad ni en protección social",
          "el país salió de la pobreza en ese mismo año",
          "la informalidad se cuenta dentro del desempleo",
          "el DANE dejó de medir el mercado laboral"
        ],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Compara el PIB con el ingreso promedio de los hogares: ¿qué permite ver cada uno?",
        opciones: [
          "el primero mide la producción total; el segundo muestra cuánto llega a las familias",
          "los dos miden lo mismo, cambia solo la fuente de los datos",
          "el PIB se calcula con encuestas de hogares, el ingreso con impuestos",
          "ninguno sirve para comparar países de la región"
        ],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "El dólar subió mucho en un año. ¿Qué efecto es más probable en los precios internos?",
        opciones: [
          "suben los productos importados y los insumos que compran las fábricas",
          "bajan todos los precios por la competencia extranjera",
          "no hay efecto, el dólar solo afecta a los viajeros",
          "aumenta la producción nacional de café automáticamente"
        ],
        correcta: 0,
        dificultad: 3
      }
    ],
    retos: [
      {
        titulo: "Leer un boletín de noticias económicas",
        pasos: [
          "Identifico los indicadores mencionados en la nota",
          "Reviso quién publica la cifra",
          "Miro qué periodo cubre el dato",
          "Comparro el dato con el del periodo anterior",
          "Escribo el efecto que ese dato puede tener en mi casa"
        ],
        dificultad: 2
      },
      {
        titulo: "Explicar por qué sube o baja la tasa de cambio",
        pasos: [
          "Reviso cuántos dólares entran al país por exportaciones",
          "Miro cuántos dólares se necesitan para importar",
          "Observo la confianza de los inversionistas extranjeros",
          "Contrasto el comportamiento del dólar en el último año",
          "Escribo dos consecuencias para los precios del mercado"
        ],
        dificultad: 3
      },
      {
        titulo: "Construir un cuadro de indicadores de un departamento",
        pasos: [
          "Reviso los datos de población en el DANE",
          "Añado las cifras de pobreza, informalidad, desempleo",
          "Comparro los datos del departamento con el promedio nacional",
          "Verifico los años de cada cifra",
          "Explico qué departamentos presentan mejores indicadores"
        ],
        dificultad: 3
      }
    ]
  },

  "ciencias-sociales--economia-sociedad--c5": {
    id: "ciencias-sociales--economia-sociedad--c5",
    nombre: "Desarrollo, desigualdad y comercio mundial",
    preguntas: [
      {
        enunciado: "El Índice de Desarrollo Humano, creado por el PNUD, además del ingreso tiene en cuenta:",
        opciones: ["la salud y la educación de la población", "el número de vehículos del país", "el saldo de la balanza comercial", "la cantidad de reservas en oro"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "El coeficiente de Gini mide:",
        opciones: ["la desigualdad en la distribución del ingreso", "el crecimiento anual del producto interno bruto", "la inflación promedio de los alimentos", "la deuda externa de un país"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "La organización internacional que regula el comercio entre países es:",
        opciones: ["la Organización Mundial del Comercio", "el Fondo Monetario Internacional", "la Organización Internacional del Trabajo", "el Banco Mundial"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "El IDH clasifica a los países como:",
        opciones: ["muy alto, alto, medio, bajo", "rico, pobre, endeudado, emergente", "desarrollado, subdesarrollado, en vías", "del norte, del sur, del este, del oeste"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "Un arancel a la importación de zapatos busca, según sus defensores:",
        opciones: ["proteger la producción nacional frente a la competencia externa", "aumentar el consumo de productos extranjeros", "reducir el recaudo de impuestos de la Nación", "bajar el precio interno del calzado importado"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Colombia firma tratados de libre comercio con varios países. ¿Qué cambia con esos acuerdos?",
        opciones: ["las reglas y los aranceles para vender productos entre esos países", "el salario mínimo legal de cada uno de los países firmantes", "la moneda oficial de las partes del acuerdo", "el número de departamentos del país exportador"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "¿Qué es la brecha de productividad entre el campo y la ciudad?",
        opciones: [
          "la diferencia en lo que produce un trabajador según su acceso a tierras, capital, tecnología",
          "el número de campesinos que se trasladan a la ciudad cada año",
          "la diferencia de precios entre el mercado de la plaza y el supermercado",
          "el tiempo que tarda un producto en llegar de la finca a la mesa"
        ],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "La 'trampa del ingreso medio' describe a países que:",
        opciones: [
          "crecen en indicadores, pero no logran avanzar hacia una economía sofisticada e igualitaria",
          "pierden por completo sus exportaciones en una década",
          "dejan de registrar información estadística confiable",
          "se vuelven ricos con solo vender materias primas"
        ],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Colombia tiene crecimiento del PIB y al mismo tiempo uno de los Gini más altos de la región. ¿Qué se puede concluir?",
        opciones: [
          "el crecimiento económico no distribuye el ingreso por sí solo",
          "la desigualdad desaparece cuando el PIB sube",
          "el Gini mide cosas distintas al ingreso de la Nación",
          "el coeficiente no sirve para países de renta media"
        ],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Compara el PIB per cápita con el IDH de un mismo país. ¿Qué muestra la comparación?",
        opciones: [
          "el primero habla de ingreso agregado, el segundo incluye educación y salud",
          "los dos indicadores se construyen con la misma información",
          "el IDH es una medida de ingreso, el PIB una medida de bienestar",
          "ninguno se puede calcular para países de Suramérica"
        ],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "¿Cuál es la principal crítica decolonial a los indicadores clásicos de desarrollo?",
        opciones: [
          "toman la experiencia europea y norteamericana como modelo universal de vida buena",
          "están mal calculados en las agencias de Naciones Unidas",
          "miden la pobreza pero ignoran el Producto Interno Bruto",
          "excluyen deliberadamente a los países de idioma español"
        ],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Un campesino pierde su cosecha porque el producto importado llegó más barato. ¿Qué expresa ese caso?",
        opciones: [
          "la apertura comercial puede afectar a los productores con menores escalas",
          "la importación siempre baja los costos de producción nacional",
          "el agro colombiano es competitivo en todos sus cultivos",
          "el comercio mundial no tiene efectos sobre el campo"
        ],
        correcta: 0,
        dificultad: 3
      }
    ],
    retos: [
      {
        titulo: "Comparar dos regiones del país por su IDH",
        pasos: [
          "Busco los datos de IDH en la página del PNUD",
          "Reviso qué variables usa el índice",
          "Contrasto las dos regiones en cada variable",
          "Anoto las diferencias de cada región",
          "Explico con qué problema se corresponde cada diferencia",
          "Verifico mis conclusiones con otro dato oficial"
        ],
        dificultad: 3
      },
      {
        titulo: "Analizar el efecto de un tratado de libre comercio sobre el agro",
        pasos: [
          "Leo el capítulo del acuerdo sobre productos agrícolas",
          "Reviso qué aranceles se eliminan y en cuánto tiempo",
          "Identifico qué cultivos compiten con los importados",
          "Reviso los apoyos previstos para pequeños productores",
          "Comparro la situación antes y después del acuerdo",
          "Concluyo quién gana y quién pierde en el caso"
        ],
        dificultad: 3
      }
    ]
  },

  // ==========================================================================
  "ciencias-sociales--ciudadania--c1": {
    id: "ciencias-sociales--ciudadania--c1",
    nombre: "Normas de convivencia del curso",
    preguntas: [
      {
        enunciado: "¿Para qué sirven las normas del salón?",
        opciones: ["para convivir mejor todos", "para tener más tareas", "para jugar solos", "para salir primero"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "Cuando quiero hablar en clase, primero:",
        opciones: ["levanto la mano", "grito la respuesta", "me paro en la silla", "salgo del salón"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "Si un compañero está hablando, yo debo:",
        opciones: ["escucharlo con calma", "hablar más fuerte", "taparme los oídos", "llamar a la profesora"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "¿Quiénes acordamos las normas del salón?",
        opciones: ["todos los del curso", "solo la profesora", "solo los más grandes", "solo las visitas"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "Dos compañeros empujan la puerta al mismo tiempo. ¿Quién actúa según la norma?",
        opciones: ["el que espera su turno", "el que empuja más fuerte", "el que grita primero", "el que cierra los ojos"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "En el recreo un niño bota al suelo la bolsa de basura. ¿Qué norma está rompiendo?",
        opciones: ["cuidar el aseo del patio", "cuidar el propio cuaderno", "saludar al llegar", "sentarse en su sitio"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "¿Qué norma se cumple cuando devuelvo un borrador prestado?",
        opciones: ["cuidar lo que es de los demás", "hablar en voz baja", "llegar temprano", "compartir el recreo"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "¿Qué pasa en un salón que no tiene ninguna norma?",
        opciones: ["nadie sabe cómo actuar y los conflictos crecen", "todos trabajan más contentos", "la profesora descansa tranquila", "el salón se vuelve más grande"],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Una norma dice que nadie grita en clase. ¿Qué entendemos con ella?",
        opciones: ["hay que hablar bajo para que todos escuchen", "está prohibido hablar en la clase", "los niños no pueden preguntar", "la profesora habla siempre sola"],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "El grupo acordó cómo se forma la fila. ¿Por qué se hizo entre todos?",
        opciones: ["para que todos la respetemos mejor", "para gastar más tiempo", "para que decida uno solo", "para no volver a formarla"],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Si el salón estrena una norma, ¿qué debe pasar para que funcione?",
        opciones: ["que todos la conozcamos y la cumplamos", "que la escriba el más grande", "que se cambie cada semana", "que la firme solo el rector"],
        correcta: 0,
        dificultad: 3
      }
    ],
    retos: [
      {
        titulo: "Formar la fila sin empujar",
        pasos: ["Escuchamos el pito del maestro", "Salimos del salón sin empujar", "Nos ubicamos en la fila por orden"],
        dificultad: 1
      },
      {
        titulo: "Escribir una norma del salón",
        pasos: ["Pensamos el problema que queremos evitar", "Escribimos la norma con palabras claras", "La leemos en voz alta y la pegamos en el muro"],
        dificultad: 2
      },
      {
        titulo: "Arreglar un conflicto del recreo",
        pasos: ["Escucho lo que le pasó a mi compañero", "Digo lo mío sin gritar ni empujar", "Los dos buscamos un acuerdo justo"],
        dificultad: 3
      }
    ]
  },

  "ciencias-sociales--ciudadania--c2": {
    id: "ciencias-sociales--ciudadania--c2",
    nombre: "Símbolos patrios, derechos y deberes",
    preguntas: [
      {
        enunciado: "¿Cuáles son los tres colores de la bandera de Colombia?",
        opciones: ["amarillo, azul y rojo", "rojo, verde y blanco", "azul, blanco y rojo", "amarillo, verde y azul"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "El ave que aparece en la parte alta del escudo de Colombia es:",
        opciones: ["un cóndor de los Andes", "un águila harpía", "una guacharaca", "un colibrí"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "¿Quién escribió la letra del himno nacional de Colombia?",
        opciones: ["Rafael Núñez", "Oreste Sindici", "José María Córdova", "Camilo Torres"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "En la cinta que sostiene el ave del escudo se lee:",
        opciones: ["Libertad y Orden", "Paz y Trabajo", "Dios y Patria", "Unidad, Progreso"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "Cuando entonamos el himno en el acto cívico, debemos:",
        opciones: ["quedar en posición de firme y cantar con respeto", "bailar al ritmo de la música", "saludar con la mano al público", "guardar silencio sin mirar la bandera"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "¿Qué derecho se cumple cuando voy todos los días al colegio?",
        opciones: ["la educación", "la propiedad privada", "el libre tránsito", "la libertad de empresa"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Los deberes de la persona y del ciudadano en Colombia están escritos en:",
        opciones: ["la Constitución, en el artículo 95", "el manual de convivencia del colegio", "el reglamento de tránsito colombiano", "los estatutos de una empresa privada"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "El derecho al nombre y a la nacionalidad es:",
        opciones: ["de toda persona desde que nace", "solo de las familias con recursos", "solo de quienes viven en ciudades", "una concesión del colegio"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Cuidar el ambiente del colegio es:",
        opciones: ["un deber que la Constitución nos impone", "una tarea del personal de aseo", "un castigo para los niños", "un derecho del grado menor"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Un derecho del niño, como la educación, viene acompañado de un deber propio. ¿Cuál es?",
        opciones: ["aprovechar el tiempo de clase y cuidarme a mí mismo", "enseñar la clase a los demás estudiantes", "cobrar por estudiar en el colegio", "escribir la Constitución del país"],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "¿En qué se diferencia una norma de casa de un derecho protegido por la Constitución?",
        opciones: ["el derecho lo protege la ley, se le puede exigir al Estado", "la norma de casa la puede pedir cualquier juez", "el derecho solo aplica a los niños pequeños", "la norma de casa obliga a todo el país"],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Si un derecho de la niñez no se cumple, ¿a quién podemos pedir ayuda?",
        opciones: ["a la familia, al colegio o a la Defensoría del Pueblo", "solo al compañero de banco", "a la tienda de la esquina", "al conductor del bus del barrio"],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Derechos y deberes de la Constitución son para todas las personas porque:",
        opciones: ["los tenemos al mismo tiempo desde que nacemos", "los gana quien pague primero los impuestos", "los entrega el colegio al graduarse", "los decide una votación cada cuatro años"],
        correcta: 0,
        dificultad: 3
      }
    ],
    retos: [
      {
        titulo: "Preparar el acto de izada de la bandera",
        pasos: [
          "Llegar a la formación con el uniforme",
          "Recibir la bandera sin correr ni empujar",
          "Cantar el himno en posición de firme",
          "Guardar la bandera al terminar el acto"
        ],
        dificultad: 1
      },
      {
        titulo: "Escribir los deberes del curso",
        pasos: [
          "Identificamos los derechos de nuestro salón",
          "Pensamos el deber que le toca a cada derecho",
          "Escribimos los deberes con verbos claros",
          "Los pegamos donde todos puedan leerlos"
        ],
        dificultad: 2
      },
      {
        titulo: "Diferenciar derechos y deberes en un caso",
        pasos: [
          "Leo el caso de la niña que falta al colegio",
          "Busco el derecho que no se está cumpliendo",
          "Busco el deber incumplido por alguna de las partes",
          "Escribo a quién se le puede pedir la solución"
        ],
        dificultad: 3
      }
    ]
  },

  "ciencias-sociales--ciudadania--c3": {
    id: "ciencias-sociales--ciudadania--c3",
    nombre: "Constitución de 1991 y derechos fundamentales",
    preguntas: [
      {
        enunciado: "La Constitución que rige hoy en Colombia fue aprobada en el año:",
        opciones: ["1991", "1886", "1968", "2005"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "El organismo que redactó la Constitución de 1991 fue:",
        opciones: ["la Asamblea Nacional Constituyente", "el Congreso de la República", "la Corte Suprema de Justicia", "el Consejo de Estado"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "El derecho a la vida, a la igualdad y a la privacidad son derechos:",
        opciones: ["fundamentales", "económicos", "colectivos", "de familia"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "La acción que protege los derechos fundamentales de manera rápida se llama:",
        opciones: ["la tutela", "el concejo", "el debate", "el cabildo"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "¿Qué institución vigila la promoción y defensa de los derechos humanos en Colombia?",
        opciones: ["la Defensoría del Pueblo", "el Consejo Gremial", "la Contraloría", "el Ejército Nacional"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "Si una EPS niega una cirugía urgente, el derecho a la salud se puede pedir por:",
        opciones: ["acción de tutela ante un juez", "querella ante el concejo municipal", "solicitud de audiencia ante la empresa", "reclamación ante la Junta de Acción Comunal"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Un joven publica en redes su opinión sobre la política del país. ¿Qué derecho está usando?",
        opciones: ["la libertad de expresión", "el derecho de petición", "la libertad de tránsito", "el derecho al hábeas corpus"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "La libertad de conciencia protege el derecho de cada persona a:",
        opciones: ["creer o no creer, según su propia decisión", "cobrar un subsidio religioso del Estado", "obligar a otros a practicar su religión", "elegir al presidente sin tener edad"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "El artículo 7 de la Constitución de 1991 protege:",
        opciones: ["la diversidad étnica y cultural de la Nación colombiana", "el monopolio del Estado sobre el oro de la Patria", "la unidad de una sola lengua oficial en el territorio", "el registro civil de las personas mayores de edad"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Castigan a un estudiante por su manera de peinarse. ¿Qué derecho se está afectando?",
        opciones: ["el libre desarrollo de la personalidad", "la libertad de empresa", "el derecho de petición", "la autonomía universitaria"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "¿Qué diferencia hay entre un derecho fundamental y un derecho colectivo?",
        opciones: ["el colectivo pertenece a todos, como el ambiente sano", "el fundamental solo lo tienen los adultos mayores", "el colectivo se puede modificar con un decreto", "no hay diferencia: los dos son del mismo tipo"],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "La Constitución de 1991 se conoce como la Constitución de los derechos porque:",
        opciones: ["pone los derechos de la persona en el centro del Estado", "fue la primera que habló de derechos en América", "elimina los deberes de los ciudadanos", "concede derechos solo a los mayores de edad"],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Dos jueces fallan de forma distinta tutelas iguales. ¿Qué debe revisar el país?",
        opciones: ["la unificación de criterios que hace la Corte Constitucional", "el archivo de todas las tutelas del país", "la eliminación de los juzgados municipales", "la creación de un nuevo ministerio de Justicia"],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "La educación es un derecho social. ¿Por qué también se puede pedir por tutela?",
        opciones: ["porque está conectada con la dignidad y con derechos fundamentales", "porque la tutela cubre todos los derechos de la Constitución", "porque la educación es un servicio público domiciliario", "porque el juez de tutela es el ministro de Educación"],
        correcta: 0,
        dificultad: 3
      }
    ],
    retos: [
      {
        titulo: "Ordenar los pasos de una tutela escolar",
        pasos: [
          "Señalamos el derecho que está siendo violado",
          "Escribimos qué pasó, con nombre, fecha y lugar",
          "Pedimos al juez que proteja ese derecho",
          "Entregamos la solicitud en el juzgado"
        ],
        dificultad: 1
      },
      {
        titulo: "Clasificar los tipos de derechos de la Constitución",
        pasos: [
          "Leemos un derecho en la Constitución",
          "Preguntamos a quién protege: a una persona o a todos",
          "Lo clasificamos por su tipo en la tabla",
          "Busco un ejemplo de la vida del colegio"
        ],
        dificultad: 2
      },
      {
        titulo: "Analizar un caso de derechos en el colegio",
        pasos: [
          "Leo el caso y subrayo los hechos principales",
          "Ubico los derechos que están en juego",
          "Reviso qué debe hacer la institución según la Constitución",
          "Propongo una solución que respete a todas las partes"
        ],
        dificultad: 3
      }
    ]
  },

  "ciencias-sociales--ciudadania--c4": {
    id: "ciencias-sociales--ciudadania--c4",
    nombre: "Ramas del poder y mecanismos de participación",
    preguntas: [
      {
        enunciado: "¿Cuál rama del poder público crea las leyes en Colombia?",
        opciones: ["la legislativa", "la ejecutiva", "la judicial", "la electoral"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "El Congreso de Colombia está compuesto por:",
        opciones: ["el Senado y la Cámara de Representantes", "las cortes y los tribunales", "los ministerios y los departamentos", "los concejos y las asambleas"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "¿Qué entidad organiza las elecciones en Colombia?",
        opciones: ["la Registraduría Nacional del Estado Civil", "el Ministerio del Interior", "la Contraloría General", "el Consejo de Estado"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "Las mujeres obtuvieron en Colombia el derecho al voto en el año:",
        opciones: ["1954", "1930", "1991", "1910"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "El Ministerio Público, que defiende los derechos de la ciudadanía, está conformado principalmente por:",
        opciones: ["la Procuraduría y la Defensoría del Pueblo", "el Consejo Nacional Electoral y la Registraduría", "la Corte Suprema y el Consejo de Estado", "los ministerios de Justicia y de Gobierno"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "Un grupo de ciudadanos quiere que un alcalde termine su periodo antes de tiempo. ¿Qué mecanismo puede usar?",
        opciones: ["la revocatoria del mandato", "el cabildo abierto", "el paro cívico", "la consulta interna del partido"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "La Corte Constitucional se ocupa, sobre todo, de:",
        opciones: ["vigilar que las leyes respeten la Constitución", "juzgar a los militares en retiro", "administrar los procesos electorales del país", "controlar las cuentas fiscales de la Nación"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "El mecanismo mediante el cual los ciudadanos eligen delegados para dictar una nueva Constitución es:",
        opciones: ["la asamblea nacional constituyente", "el referendo reformatorio", "el cabildo abierto", "la consulta popular"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Según la Constitución, el voto en Colombia es:",
        opciones: ["personal, igual, libre, secreto y directo", "obligatorio para todos los residentes", "delegable en un familiar", "público, para control de vecinos"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Un concejo municipal aprobó un impuesto que afecta a todo el municipio. Para que la gente discuta el caso con la autoridad se abre:",
        opciones: ["un cabildo abierto", "un consejo de guerra", "una asamblea constituyente", "un juzgado de paz"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "¿Qué diferencia se puede establecer entre el referendo y la consulta popular?",
        opciones: ["el referendo reforma normas; la consulta pregunta sobre un tema de la autoridad", "la consulta reforma la Constitución; el referendo solo pregunta", "los dos son lo mismo, cambia solo el nombre", "el referendo lo decide el presidente sin el pueblo"],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Compara el cabildo abierto con el concejo municipal. ¿En qué se distinguen?",
        opciones: ["el concejo es una corporación electa que decide; el cabildo es una reunión de la gente para participar", "los dos deciden en nombre del municipio con las mismas funciones", "el cabildo reúne solo concejales; el concejo reúne solo vecinos", "los dos son convocados por el presidente de la República"],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "¿Por qué la Contraloría y el Consejo Nacional Electoral no hacen parte de la rama ejecutiva?",
        opciones: [
          "porque la Constitución creó órganos autónomos para controlar sin depender del gobierno",
          "porque el Congreso no quiso darle más poder al presidente",
          "porque son entes privados que contratan con el Estado",
          "porque solo existen cuando hay estado de excepción"
        ],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "La Corte Constitucional declaró inexequible una ley aprobada por el Congreso. ¿Qué ocurre con esa ley?",
        opciones: ["no puede aplicarse por ser contraria a la Constitución", "sigue en vigor hasta que el presidente la derogue", "vuelve al Congreso para que la apruebe otra vez", "queda en suspenso por un año y luego entra"],
        correcta: 0,
        dificultad: 3
      }
    ],
    retos: [
      {
        titulo: "Identificar la rama que resuelve un problema",
        pasos: [
          "Leo el caso y busco la acción que se pide",
          "Reviso qué rama del poder realiza esa acción",
          "Miro si es un juez, un congresista o un administrador",
          "Escribo la rama con su justificación"
        ],
        dificultad: 1
      },
      {
        titulo: "Organizar la elección del personero estudiantil",
        pasos: [
          "Acordamos las reglas del proceso con el docente",
          "Publicamos la convocatoria y las candidaturas",
          "Cada estudiante vota en su mesa",
          "Contamos los votos delante de los testigos",
          "Publicamos los resultados y posesionamos al elegido"
        ],
        dificultad: 2
      },
      {
        titulo: "Elegir el mecanismo de participación para un caso",
        pasos: [
          "Formulo con claridad el problema público del municipio",
          "Reviso los mecanismos previstos en la Constitución",
          "Contrasto cada mecanismo con lo que pide el caso",
          "Miro las condiciones que se necesitan para convocarlo",
          "Elijo un mecanismo y escribo mis razones"
        ],
        dificultad: 3
      }
    ]
  },

  "ciencias-sociales--ciudadania--c5": {
    id: "ciencias-sociales--ciudadania--c5",
    nombre: "Derecho constitucional, DIH y justicia transicional",
    preguntas: [
      {
        enunciado: "El derecho internacional humanitario busca, ante todo:",
        opciones: ["proteger a quienes no participan o ya no participan en las hostilidades", "regular el comercio de armas entre Estados", "definir las fronteras de los países en guerra", "limitar el tamaño de los ejércitos nacionales"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "El tribunal internacional que juzga el genocidio, los crímenes de guerra y los de lesa humanidad es:",
        opciones: ["la Corte Penal Internacional", "la Comisión Interamericana de Derechos Humanos", "el Tribunal Internacional del Mar", "la Corte Internacional de Justicia"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "Los tres estados de excepción de la Constitución de 1991 son:",
        opciones: ["guerra exterior, conmoción interior, emergencia económica y social", "emergencia climática, alteración del orden, calamidad pública", "rebelión, sedición, motín", "interrupción del servicio, toque de queda, censura previa"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "La jurisdicción que juzga las infracciones más graves del conflicto armado colombiano es:",
        opciones: ["la Jurisdicción Especial para la Paz", "la Justicia Penal Militar", "la Corte Suprema de Justicia", "los juzgados de convivencia municipal"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "Un grupo armado recluta a un joven de trece años para combatir. ¿Qué norma del DIH se viola?",
        opciones: ["la prohibición de reclutar a menores de quince años", "la norma sobre el trabajo de los adolescentes civiles", "la libertad de conciencia de los menores", "el principio de no discriminación laboral"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "¿Qué exige el principio de distinción del DIH?",
        opciones: ["distinguir siempre entre población civil y combatientes u objetivos militares", "distinguir entre enemigos internos y externos del conflicto", "distinguir a los soldados según el rango que tengan", "distinguir entre combatientes regulares y reserva"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "La reparación integral a las víctimas incluye restitución, indemnización, rehabilitación, satisfacción y:",
        opciones: ["garantías de no repetición", "beneficios penales para los victimarios", "indemnizaciones solo en dinero", "compensas a las Fuerzas Militares"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "¿Qué significa que los tratados de derechos humanos integren el bloque de constitucionalidad?",
        opciones: [
          "que integran el corpus constitucional: mandan sobre las leyes y no se suspenden ni en estados de excepción",
          "que cualquier ley puede desconocerlos si tiene mayoría en el Congreso",
          "que solo aplican cuando el juez lo autorice en cada caso",
          "que entran al orden interno con solo firmar la presidencia de la República"
        ],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Una amnistía por delitos políticos es posible, pero no cubre los crímenes de lesa humanidad. ¿Qué principio lo explica?",
        opciones: [
          "el derecho internacional prohíbe la impunidad ante violaciones graves de derechos humanos",
          "la Constitución colombiana no permite amnistías de ningún tipo",
          "solo el presidente puede perdonar los delitos de guerra",
          "la amnistía es una figura del derecho privado, no del penal"
        ],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "¿Por qué la justicia transicional acepta sanciones que no son solo privativas de la libertad?",
        opciones: [
          "porque la verdad, la reparación y la no repetición se consideran indispensables para terminar el conflicto",
          "porque los tribunales transicionales no tienen competencia para condenar a nadie",
          "porque las víctimas renuncian a la reparación cuando hay acuerdo de paz",
          "porque el DIH prohíbe cualquier sanción a los combatientes"
        ],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "El DIH se aplica a todos los actores armados, estatales y no estatales. ¿Qué se deduce?",
        opciones: [
          "la responsabilidad depende de la conducta, no del bando ni de la legitimidad del actor",
          "solo las Fuerzas Militares quedan sujetas a esas reglas",
          "los grupos armados quedan excluidos mientras no firmen un acuerdo",
          "el DIH cambia según la ideología de cada parte"
        ],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "¿Por qué se afirma que la Corte Constitucional tuvo un papel central en el proceso de paz colombiano?",
        opciones: [
          "porque revisó la constitucionalidad de las normas que crearon el sistema de justicia transicional",
          "porque firmó el acuerdo de paz con los grupos armados en La Habana",
          "porque reemplazó a la JEP cuando esta agotó su capacidad carcelaria",
          "porque eligió a los magistrados de paz mediante votación popular"
        ],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Compara el derecho a la paz con el derecho de acceso a la justicia de las víctimas:",
        opciones: [
          "una paz sin verdad ni reparación es frágil, porque deja el conflicto sin resolver",
          "los dos derechos se excluyen: hay que elegir uno de los dos",
          "la paz exige renunciar a la justicia en todos los casos",
          "la justicia solo compete a los jueces, no al Estado"
        ],
        correcta: 0,
        dificultad: 3
      }
    ],
    retos: [
      {
        titulo: "Aplicar el DIH a un caso hipotético",
        pasos: [
          "Reviso si en el caso existe un conflicto armado",
          "Identifico quiénes son los combatientes",
          "Verifico quiénes son personas civiles y qué bienes son civiles",
          "Busco la norma del DIH que protege a esa categoría",
          "Escribo la conducta que el DIH prohíbe al actor armado"
        ],
        dificultad: 2
      },
      {
        titulo: "Analizar la constitucionalidad de una reforma",
        pasos: [
          "Leo el texto de la reforma aprobada por el Congreso",
          "Contrasto el texto con la Constitución",
          "Reviso la jurisprudencia de la Corte en casos parecidos",
          "Miro si la reforma afecta derechos fundamentales o la estructura del Estado",
          "Formulo una conclusión sobre la constitucionalidad",
          "Cito la norma y la sentencia en que me basé"
        ],
        dificultad: 3
      },
      {
        titulo: "Comparar la justicia ordinaria con la transicional",
        pasos: [
          "Reviso los principios de cada sistema de justicia",
          "Identifico el tipo de conductas que cada una puede conocer",
          "Reviso los derechos de las víctimas en cada sistema",
          "Contrasto el resultado que se espera de uno y de otro",
          "Escribo en qué caso conviene la vía transicional"
        ],
        dificultad: 3
      }
    ]
  },

  // ==========================================================================
  // EJE 5 · Culturas y diversidad
  // ==========================================================================
  "ciencias-sociales--culturas--c1": {
    id: "ciencias-sociales--culturas--c1",
    nombre: "Las familias y sus costumbres",
    preguntas: [
      {
        enunciado: "Las personas que viven contigo, te cuidan y te quieren forman:",
        opciones: ["tu familia", "tu salón de clase", "la tienda del barrio", "el parque de la esquina"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "Una costumbre de familia es algo que:",
        opciones: ["se hace muchas veces en la casa", "se compra en la papelería", "se pierde en el parque", "se firma en la Alcaldía"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "Las familias de tus compañeros son diferentes porque:",
        opciones: ["cada una vive y come a su manera", "todas tienen el mismo apellido", "ninguna tiene costumbres", "todas viven en la misma casa"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "En casa, el cuidado de los niños y las niñas lo dan:",
        opciones: ["las personas adultas que viven con ellos", "los juguetes del salón", "las llaves del apartamento", "los papeles de la cocina"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "Almorzar todos juntos un domingo en la casa es una:",
        opciones: ["costumbre familiar", "tarea de colegio", "multa de tránsito", "hora de clase"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Un compañero vive con su abuela y su tía. Su familia son:",
        opciones: ["las personas que se cuidan en esa casa", "solo su mamá biológica", "ninguna persona mayor", "el señor que reparte el pan"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Para saber cómo era la familia de tu abuela de niña, lo mejor es:",
        opciones: ["escucharla contar esa historia", "adivinar sin preguntar", "mirar la hora del reloj", "cerrar los ojos un rato"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Si en tu casa guardan comida del campo para la semana, esa costumbre ayuda a:",
        opciones: ["planear la comida de los días", "vender la casa del barrio", "olvidar el colegio", "cerrar la tienda"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "En casa de Laura comen de noche y en la tuya al mediodía. ¿Qué se nota?",
        opciones: ["que cada familia tiene su costumbre", "que una costumbre está mal", "que nadie come en su casa", "que las dos familias son iguales"],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "¿Cuál de estas frases habla de la familia de otro sin burlarse?",
        opciones: ["cada familia vive a su manera", "las demás familias son raras", "solo mi familia vale", "esa familia es un chiste"],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Una foto antigua de tu familia y una foto de hoy te dejan ver:",
        opciones: ["cómo cambiaron las personas y las costumbres", "el precio del lote", "la hora del recreo", "el nombre del colegio"],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Tu amigo dice que solo una clase de familia es buena. ¿Qué le respondes?",
        opciones: ["las familias son distintas y todas se respetan", "tiene razón, las otras no valen", "las familias no importan", "eso da igual en clase"],
        correcta: 0,
        dificultad: 3
      }
    ],
    retos: [
      {
        titulo: "Contar una costumbre de mi familia",
        descripcion: "Comparte con tu curso una costumbre de tu casa y explica qué hacen allí.",
        pasos: [
          "Pienso en una costumbre de mi casa",
          "Dibujo a las personas que participan",
          "Cuento en clase qué hacemos juntos"
        ],
        dificultad: 1
      },
      {
        titulo: "Hacer el mapa de las personas de mi casa",
        descripcion: "Dibuja quiénes viven contigo y cómo se cuidan entre ellos.",
        pasos: [
          "Escribo los nombres de mi casa",
          "Dibujo a cada persona en un cuadrito",
          "Uno los cuadritos con líneas suaves"
        ],
        dificultad: 2
      },
      {
        titulo: "Comparar dos costumbres de familia",
        descripcion: "Mira dos láminas del curso y encuentra lo que cambia entre ellas.",
        pasos: [
          "Miro las dos láminas con calma",
          "Encierro lo que hacen igual",
          "Digo en qué son diferentes"
        ],
        dificultad: 3
      }
    ]
  },

  "ciencias-sociales--culturas--c2": {
    id: "ciencias-sociales--culturas--c2",
    nombre: "Festividades y tradiciones de Colombia",
    preguntas: [
      {
        enunciado: "El Carnaval de Barranquilla es famoso porque:",
        opciones: ["reúne danzas, músicas y disfraces de la costa Caribe", "prohíbe bailar en la calle", "solo admite artistas extranjeros", "se hace dentro de una biblioteca"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "La Marimonda y el Monito son personajes del:",
        opciones: ["Carnaval de Barranquilla", "Festival Petronio Álvarez", "Carnaval de Negros y Blancos", "Festival de la Leyenda Vallenata"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "El Festival Petronio Álvarez, que se hace en Cali, celebra:",
        opciones: ["las músicas y tradiciones del Pacífico colombiano", "la siembra de café del Eje cafetero", "las ferias de ganado del Llano", "la pesca del río Magdalena"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "En la Feria de las Flores de Medellín, los silleteros llevan sobre la espalda:",
        opciones: ["silletas llenas de flores cultivadas", "cajas de herramientas", "neumáticos viejos", "ollas de barro pesadas"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "Una fiesta que se transmite de generación en generación hace parte del:",
        opciones: ["patrimonio cultural inmaterial del país", "reglamento interno del colegio", "presupuesto de la gobernación", "diccionario de la lengua"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "En Pasto, el Carnaval de Negros y Blancos se caracteriza por:",
        opciones: ["pintar las caras con talco y armar carrozas y comparsas", "apagar las luces del pueblo entero", "prohibir los tambores y las máscaras", "correr toros por la plaza principal"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "La gaita, instrumento de la música del Caribe colombiano, se fabrica con:",
        opciones: ["caña de millo, cera de abeja y una pieza de hueso", "plástico y pilas pequeñas", "hierro y cemento", "vidrio y pegante"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "En Valledupar, cada mes de abril se celebra:",
        opciones: ["el Festival de la Leyenda Vallenata", "el Festival Petronio Álvarez", "la Feria de las Flores", "el Carnaval de Negros y Blancos"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "El siete de diciembre muchas casas ponen alumbritos en las ventanas para:",
        opciones: ["celebrar el Día de las Velitas", "anunciar el inicio de la cosecha", "marcar el pago de los servicios", "recordar la fundación del pueblo"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "El Carnaval de Barranquilla está inscrito en las listas de patrimonio de la UNESCO. ¿Qué ayuda trae esa inscripción?",
        opciones: ["da reconocimiento y apoyo para que la comunidad la conserve", "obliga a dejar de celebrar la fiesta", "prohíbe los disfraces tradicionales", "entrega la fiesta a una empresa privada"],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Compara el Festival Petronio Álvarez con el Festival de la Leyenda Vallenata:",
        opciones: ["el primero recoge músicas del Pacífico y el segundo, el vallenato Caribe", "los dos difunden solo músicas extranjeras", "los dos se celebran en el mismo parque de Bogotá", "ninguno tiene relación con la cultura"],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "En San Basilio de Palenque se cuidan la lengua criolla, el bullerengue y el tambor. ¿Qué muestra ese caso?",
        opciones: ["que la comunidad afrocolombiana mantiene un patrimonio vivo", "que en Colombia ya no hay músicas de tambor", "que las lenguas propias desaparecieron todas", "que la costa Caribe no tiene tradiciones"],
        correcta: 0,
        dificultad: 3
      }
    ],
    retos: [
      {
        titulo: "Investigar una fiesta de mi región",
        descripcion: "Escoje una festividad de tu región y reúnde información con tu familia.",
        pasos: [
          "Elijo una fiesta tradicional de mi región",
          "Pregunto en casa cuándo se celebra",
          "Dibujo un baile o un plato de esa fiesta"
        ],
        dificultad: 1
      },
      {
        titulo: "Preparar el programa de una fiesta local",
        descripcion: "Organiza los actos de una fiesta del municipio en el orden en que ocurren.",
        pasos: [
          "Reviso qué actos tiene la fiesta",
          "Los pongo en orden de la mañana a la noche",
          "Ubico el sitio donde ocurre cada acto",
          "Presento el programa a mi curso"
        ],
        dificultad: 2
      },
      {
        titulo: "Comparar dos festividades colombianas",
        descripcion: "Pon lado a lado dos fiestas del país y busca cómo se parecen y cómo se distinguen.",
        pasos: [
          "Escribo el nombre y el lugar de cada fiesta",
          "Anoto la música y el baile de cada una",
          "Busco la historia que cada fiesta cuenta",
          "Explico una semejanza y una diferencia"
        ],
        dificultad: 3
      }
    ]
  },

  "ciencias-sociales--culturas--c3": {
    id: "ciencias-sociales--culturas--c3",
    nombre: "Regiones, poblaciones y diversidad cultural",
    preguntas: [
      {
        enunciado: "El pueblo nasa habita principalmente el departamento de:",
        opciones: ["Cauca", "Atlántico", "Santander", "Vaupés"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "El pueblo misak, también llamado guambiano, se reconoce por:",
        opciones: ["sus prendas bordadas y su tradición textil", "sus astilleros de barcos", "sus plantas de ensamblaje", "sus clubes de natación"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "Los raizales son la población nativa del archipiélago de:",
        opciones: ["San Andrés, Providencia y Santa Catalina", "el Caribe nicaragüense", "las islas de Malpelo y Gorgona", "el delta del Orinoco"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "La Ley 70 de 1993 reconoce derechos de:",
        opciones: ["las comunidades negras o afrocolombianas", "las empresas de servicios públicos", "los partidos con personería jurídica", "los clubes deportivos profesionales"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "Las regiones socioculturales de Colombia se distinguen sobre todo por:",
        opciones: ["su historia, su población y sus prácticas compartidas", "el color de sus edificios", "el número de semáforos", "la fecha de creación de la policía"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "El Convenio 169 de la OIT, aprobado en Colombia por la Ley 21 de 1991, obliga a:",
        opciones: ["consultar a los pueblos indígenas antes de adoptar medidas que los afecten", "registrar a las empresas mineras del país", "fijar el salario de los docentes rurales", "controlar el precio del petróleo crudo"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "El Decreto 4631 de 2011 sirve para:",
        opciones: ["reglamentar la consulta previa con las comunidades afrocolombianas", "crear un impuesto a los combustibles", "nombrar los consejos municipales de cultura", "regular las líneas de crédito agrícola"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Una minga del pueblo nasa en el Cauca es, sobre todo:",
        opciones: ["una jornada de trabajo y decisión colectiva del resguardo", "un torneo de fútbol entre veredas", "una feria de ganado de fin de año", "un trámite personal ante la notaría"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Un resguardo indígena se define correctamente como:",
        opciones: ["un territorio colectivo administrado por la autoridad propia del pueblo", "un predio fiscal arrendado a particulares", "una zona industrial del municipio", "un lote urbano sin servicios públicos"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "En La Guajira, ante la falta de agua, muchas familias wayúu han tenido que:",
        opciones: ["migrar y organizarse para exigir el abastecimiento del acueducto", "abandonar por completo su idioma", "vender su territorio a otro país", "dejar de tejer sus mochilas"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Un estudiante de familia gitana o rrom es señalado en el salón por un rumor. ¿Qué se vulnera?",
        opciones: ["su derecho a la igualdad y a no ser discriminado por su cultura", "el deber de pagar los recibos de la casa", "la norma de aseo del colegio", "la ley de tránsito del municipio"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "¿Por qué la escasez de agua en La Guajira se estudia como un problema de justicia ambiental?",
        opciones: ["porque la carencia golpea más a las comunidades pobres y excluidas", "porque el agua es un recurso inagotable", "porque la sequía afecta por igual a todos los habitantes", "porque el clima no influye en el consumo humano"],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Colombia tiene más de cien pueblos indígenas con lenguas propias. ¿Qué se puede afirmar?",
        opciones: ["el país es pluriétnico y multilingüe, no homogéneo", "todas las lenguas indígenas desaparecieron", "la diversidad cultural es solo un asunto rural", "los pueblos indígenas abandonaron sus territorios"],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Compara la Ley 70 de 1993 con el Convenio 169 de la OIT en materia de tierra:",
        opciones: ["los dos reconocen derechos colectivos a poblaciones históricamente excluidas", "la ley anula todo lo dispuesto por el convenio", "los dos ignoran el tema del territorio", "solo el convenio menciona las consultas previas"],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "¿Por qué el Pacífico colombiano se describe como una región donde el agua organiza la cultura?",
        opciones: ["porque la pesca, los platos de batea y las músicas se apoyan en ríos y mar", "porque allí no se cultiva ningún alimento", "porque la región está completamente despoblada", "porque el mar sustituye todas las vías de transporte"],
        correcta: 0,
        dificultad: 3
      }
    ],
    retos: [
      {
        titulo: "Presentar la diversidad cultural del curso",
        descripcion: "Muestren de qué regiones vienen las familias del salón, sin etiquetas ni burlas.",
        pasos: [
          "Anoto de qué región viene cada familia",
          "Busco una palabra o un plato de esa región",
          "Expongo el resultado con respeto"
        ],
        dificultad: 1
      },
      {
        titulo: "Mapear los pueblos indígenas de la región",
        descripcion: "Usa un mapa oficial de resguardos para ubicar tres pueblos y sus autoridades.",
        pasos: [
          "Consulto un mapa de resguardos reconocido",
          "Ubico tres resguardos de mi región",
          "Anoto el pueblo, su cabildo y su lengua",
          "Explico por qué el territorio les importa"
        ],
        dificultad: 2
      },
      {
        titulo: "Analizar un caso de consulta previa",
        descripcion: "Aplica las normas de consulta previa a una obra que afecta a una comunidad.",
        pasos: [
          "Identifico la comunidad afectada por la obra",
          "Reviso la norma que exige la consulta",
          "Verifico si fue previa, libre e informada",
          "Propongo una salida que respete la decisión comunitaria"
        ],
        dificultad: 3
      }
    ]
  },

  "ciencias-sociales--culturas--c4": {
    id: "ciencias-sociales--culturas--c4",
    nombre: "Culturas del mundo y colonialidad",
    preguntas: [
      {
        enunciado: "La colonialidad del poder, idea desarrollada por Aníbal Quijano, sostiene que:",
        opciones: ["el patrón de dominación colonial sobrevivió al fin de las colonias en el poder, el saber y el racismo", "la colonia nunca dejó huellas en América", "la historia se explica solo por el comercio", "las fronteras actuales son un hecho natural"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "La noción de hibridación cultural, usada por Néstor García Canclini, describe:",
        opciones: ["las mezclas entre tradiciones locales y culturas globales en las sociedades de hoy", "la pureza original de las culturas", "la prohibición de las migraciones", "el fin definitivo de las lenguas indígenas"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "La Declaración de las Naciones Unidas sobre los derechos de los pueblos indígenas se aprobó en:",
        opciones: ["2007", "1492", "1810", "1948"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "Frantz Fanon, autor de Los condenados de la tierra, escribió desde:",
        opciones: ["la experiencia antillana y argelina contra el colonialismo", "la universidad prusiana del siglo XIX", "la corte española del siglo XVI", "el sindicalismo norteamericano"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "El Convenio sobre la Diversidad Cultural de la UNESCO, adoptado en 2005, reconoce que:",
        opciones: ["las culturas se renuevan y merecen protección frente a la concentración de los medios globales", "solo las lenguas europeas son patrimonio", "el comercio elimina toda diferencia cultural", "las tradiciones locales deben desaparecer"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "Un colegio premia los peinados llamados formales y sanciona los trenzados afro. ¿Qué explica el problema?",
        opciones: ["una jerarquía racial que heredó la escuela y confunde estética con disciplina", "una norma neutral sin efectos sociales", "el régimen de contrato de los docentes", "la autonomía curricular de la institución"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "En el siglo XVI, la Junta de Valladolid enfrentó a Bartolomé de las Casas y a Juan Ginés de Sepúlveda en torno a:",
        opciones: ["si los pueblos indígenas debían ser considerados libres o esclavizados", "la partición de las Capitanías Generales", "el precio del azúcar en los puertos andaluces", "la construcción de la catedral de Sevilla"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "En su declaración sobre la raza de 1950, la UNESCO estableció que:",
        opciones: ["la idea de razas humanas biológicas es una construcción social, no un hallazgo científico", "existen razas humanas superiores e inferiores", "la genética justifica la segregación escolar", "el racismo es un invento de los medios"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "La noción de colonialismo interno, de Pablo González Casanova, se refiere a:",
        opciones: ["la dominación que el Estado nacional y las élites mantienen sobre los pueblos originarios", "la deuda externa de los países del sur", "la migración colombiana hacia España", "el control oficial de precios de la canasta familiar"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Una estudiante compara el candombe, la samba y la marimba del Pacífico. ¿Qué conclusión es más sólida?",
        opciones: ["los tres tienen matrices africanas que se transformaron en cada contexto americano", "son danzas europeas sin ninguna raíz africana", "aparecieron aislados y sin contacto entre pueblos", "son coreografías creadas para la televisión"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Compara el relato nacional del mestizaje con la crítica decolonial:",
        opciones: ["el relato mezcla a los pueblos, pero oculta las jerarquías de raza y tierra que dejó la colonia", "los dos cuentan exactamente la misma historia", "la crítica decolonial niega que existan pueblos indígenas", "el mestizaje demuestra que en América no hubo colonia"],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "¿Por qué se afirma que en América también se colonizó el conocimiento?",
        opciones: ["porque se presentó una razón particular como universal y se descalificaron otros saberes", "porque en el continente no existía ningún saber antes de 1492", "porque todas las lenguas indígenas se tradujeron", "porque la escuela pública enseña en español"],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "El sumak kawsay o Buen Vivir de los pueblos kichwas del Ecuador se usa para:",
        opciones: ["cuestionar la idea de desarrollo entendida solo como crecimiento económico", "justificar la concentración de la tierra", "promover la libre exportación de materias primas", "medir el ingreso per cápita de un país"],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "¿Qué señala Boaventura de Sousa Santos al hablar de epistemicidio?",
        opciones: ["la destrucción de los saberes de los pueblos dominados por la expansión colonial", "la eliminación de las bibliotecas universitarias", "el cierre de los canales públicos de televisión", "la crisis de empleo de los historiadores"],
        correcta: 0,
        dificultad: 3
      }
    ],
    retos: [
      {
        titulo: "Ubicar las culturas del mundo en el mapa",
        descripcion: "Compara tres culturas de continentes distintos y reconoce rasgos compartidos.",
        pasos: [
          "Elijo tres culturas de distintos continentes",
          "Ubico cada una en el mapamundi",
          "Anoto una práctica cultural de cada una",
          "Reviso qué semejanzas encuentro"
        ],
        dificultad: 1
      },
      {
        titulo: "Rastrear una herencia africana en Colombia",
        descripcion: "Sigue el camino de un bien cultural desde África hasta su práctica actual.",
        pasos: [
          "Elijo una música, un plato o una palabra de uso diario",
          "Busco su origen en las regiones africanas de la esclavización",
          "Reviso cómo llegó al territorio y dónde se practica hoy",
          "Explico qué conservó la comunidad y qué transformó"
        ],
        dificultad: 2
      },
      {
        titulo: "Leer un texto desde la perspectiva decolonial",
        descripcion: "Aplica las categorías de colonialidad y punto de cero a un texto académico.",
        pasos: [
          "Leo el texto y anoto su tesis central",
          "Identifico quién habla y quién queda silenciado",
          "Reviso si toma una experiencia europea como universal",
          "Contrasto con un autor del sur global",
          "Escribo una relectura propia sustentada en fuentes"
        ],
        dificultad: 3
      },
      {
        titulo: "Organizar un debate sobre patrimonio y colonialidad",
        descripcion: "Prepara un debate de curso sobre la exhibición de objetos indígenas en museos.",
        pasos: [
          "Formulo la pregunta que se va a discutir",
          "Reúno dos fuentes con posturas distintas",
          "Escucho las intervenciones sin interrumpir",
          "Cierro con una conclusión sustentada"
        ],
        dificultad: 3
      }
    ]
  },

  "ciencias-sociales--culturas--c5": {
    id: "ciencias-sociales--culturas--c5",
    nombre: "Historiografía y pensamiento crítico en ciencias sociales",
    preguntas: [
      {
        enunciado: "La crítica extrínseca de una fuente histórica sirve para:",
        opciones: ["verificar la autenticidad material del documento, su autoría, su fecha y su procedencia", "resumir el contenido del documento en tres líneas", "opinar sobre la escritura del autor", "contar cuántas personas aparecen en el texto"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "El relato de una persona que vivió un hecho, grabado por el investigador, es una fuente:",
        opciones: ["primaria y oral", "secundaria y escrita", "estadística oficial", "arqueológica menor"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "El concepto de longue durée, trabajado por Fernand Braudel, se refiere a:",
        opciones: ["las estructuras que cambian muy lentamente, frente a los acontecimientos inmediatos", "la biografía de un solo protagonista", "el relato de un día en la vida de la ciudad", "la historia militar de una sola batalla"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "La obra Apología para el oficio de historiador, sobre los oficios de la historia, fue escrita por:",
        opciones: ["Marc Bloch", "Edward Gibbon", "Leopold von Ranke", "Benedetto Croce"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "En Colombia, el trabajo historiográfico sobre la memoria del conflicto armado se adelantó, sobre todo, desde:",
        opciones: ["el Centro Nacional de Memoria Histórica, creado por la Ley de Víctimas", "la Academia Colombiana de Historia, fundada a comienzos del siglo XX", "la Comisión Nacional de Televisión", "el Archivo General de Indias, en España"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "¿Qué exige el principio de reflexividad al investigar un tema social?",
        opciones: ["que el investigador examine su propia posición y los efectos de esa posición en el conocimiento", "que se elimine toda fuente de segunda mano", "que se confíe solo en la memoria de los mayores", "que se evite citar fuentes archivísticas"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Un estudiante copia tres párrafos de un libro sin cita y los presenta como suyos. ¿Qué rompió?",
        opciones: ["la honestidad intelectual y las reglas de citación del trabajo académico", "la regla que obliga a escribir a mano", "el deber de usar solo fuentes orales", "la norma de extensión del informe final"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "¿Cómo actúa el problema del anacronismo al estudiar el pasado?",
        opciones: ["juzgando con valores de hoy prácticas cuya explicación exige el contexto que les dio sentido", "fechando con exactitud los hechos antiguos", "clasificando las fuentes por su soporte material", "comparando dos archivos de la misma época"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "¿Qué hace la microstoria, como la que practica Carlo Ginzburg, para conocer el pasado?",
        opciones: ["analiza un caso o una aldea pequeños para iluminar estructuras sociales más amplias", "renuncia a las fuentes para dejar solo las cifras", "describe exclusivamente los grandes personajes nacionales", "resume siglos de historia en un solo párrafo"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "¿Qué aporta la historia oral a la memoria de un territorio?",
        opciones: ["registra las voces de quienes no dejaron archivos escritos", "sustituye por completo los documentos de archivo", "elimina cualquier fuente secundaria del trabajo", "exige que el investigador participe en los hechos"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "¿Qué diferencia se puede establecer entre una historia regional y una historia puramente política?",
        opciones: ["la primera interroga las fuentes y sus silencios; la segunda suele repetir el relato oficial", "ambas se apoyan solo en las actas del Congreso", "las dos descartan la memoria de las víctimas", "la historia regional no necesita crítica de fuentes"],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "¿Qué crítica hace Michel-Rolph Trouillot al oficio de historiador?",
        opciones: ["muestra que el silencio entra en la historia desde la producción misma de las fuentes", "demuestra que todo relato del pasado es inventado", "propone cerrar los archivos nacionales", "sostiene que solo importan los grandes personajes"],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "¿Por qué Germán Colmenares, en Las convenciones contra la cultura, pide historizar los relatos nacionales?",
        opciones: ["porque las narras fundacionales responden a intereses y momentos políticos concretos", "porque la historia debe enseñar valores patrios fijos", "porque el pasado no puede conocerse en absoluto", "porque los archivos coloniales siempre dicen la verdad"],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "¿En qué se diferencia el objeto de estudio de las ciencias sociales del de las ciencias naturales?",
        opciones: ["en las sociales el investigador y su objeto comparten historia, lo que exige métodos interpretativos", "ambas áreas verifican sus hipótesis del mismo modo exacto", "las sociales no necesitan datos, solo opiniones", "las naturales interpretan culturas y las sociales experimentan"],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Dos fuentes oficiales guardan silencio sobre las masacres de trabajadores del banano. ¿Qué debe hacer el investigador?",
        opciones: ["contrastar con testimonios, prensa y archivos judiciales, y explicar por qué callan", "descartar las dos fuentes por incompletas", "aceptar la versión oficial por ser la más autorizada", "elegir la fuente que coincida con su opinión"],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "¿Qué diferencia la disciplina de la verificación en una investigación en ciencias sociales?",
        opciones: ["la primera ordena el método y las citas; la segunda comprueba que los datos sean exactos", "ambas son lo mismo y se usan como sinónimos", "la verificación solo aplica a las fuentes orales", "la disciplina reemplaza la crítica de fuentes"],
        correcta: 0,
        dificultad: 3
      }
    ],
    retos: [
      {
        titulo: "Hacer la crítica de una fuente histórica",
        descripcion: "Aplica la crítica extrínseca e intrínseca a un documento sobre la historia local.",
        pasos: [
          "Identifico el tipo de fuente y su autor",
          "Reviso la fecha, el soporte y la procedencia del documento",
          "Interrogo qué dice, a quién se dirige y qué calla",
          "Contrasto la fuente con otras de la misma época",
          "Escribo mi conclusión sobre su valor y sus límites"
        ],
        dificultad: 2
      },
      {
        titulo: "Diseñar una entrevista de historia oral",
        descripcion: "Prepara una entrevista a un habitante mayor del barrio con ética y orden.",
        pasos: [
          "Defino la pregunta de investigación",
          "Elijo al testigo y le pido autorización informada",
          "Redacto las preguntas de lo general a lo específico",
          "Grabo la entrevista y tomo notas de contexto",
          "Transcribo, confronto con otras fuentes y cito"
        ],
        dificultad: 3
      },
      {
        titulo: "Releer un manual escolar desde la crítica decolonial",
        descripcion: "Aplica las categorías de colonialidad y punto cero a un capítulo del manual.",
        pasos: [
          "Ubico quién escribió el texto y en qué año",
          "Reviso qué concepto trata como universal",
          "Busco qué saberes o actores del territorio faltan",
          "Contrasto la idea con una autora o autor del sur global",
          "Reescribo el párrafo incorporando esa crítica",
          "Anoto lo que aprendí y lo que quedó sin resolver"
        ],
        dificultad: 3
      }
    ]
  },
};


