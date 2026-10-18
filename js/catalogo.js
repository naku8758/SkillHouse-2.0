// js/catalogo.js
// Malla curricular de la plataforma.
//
// Las áreas son las que dicta un colegio colombiano: los nueve grupos
// obligatorios del artículo 23 de la Ley 115 de 1994 y los tres que el
// artículo 31 añade en la media (Filosofía, Ciencias Económicas y Ciencias
// Políticas), más Orientación, que en los colegios distritales se dicta como
// área aunque no tenga prueba escrita de contenido.
//
// Cada área tiene CINCO EJES. Los ejes no cambian de grado en grado: lo que
// cambia es la profundidad del mismo hilo. "Sentido numérico" es eje en 1°
// (contar hasta 20) y en 11° (logaritmos y progresiones). Así la plataforma
// cubre los once grados sin duplicar el área once veces.
//
// Los ejes de Matemáticas son los cinco pensamientos de los EBC del MEN
// (numérico, espacial, métrico, variacional y aleatorio) y los de Lengua
// Castellana son sus cinco factores. No es una coincidencia: es la malla
// oficial.
//
// Los CICLOS (js/malla.js) son los tramos en que el MEN agrupa los estándares:
//   c1 = 1° y 2° · c2 = 3° a 5° · c3 = 6° y 7° · c4 = 8° y 9° · c5 = 10° y 11°
// Un eje que no se dicta en un ciclo no aparece en `ciclos` y por lo tanto no
// aparece en los selectores de ese grado: un profe de 4° no ve Filosofía.
//
// Identificador de tema: `${materia}--${eje}--${ciclo}`. Viaja en
// grupos/{id}.tema y en la URL del juego, y carga el ciclo sin leer más datos.
// Los temas sin sufijo ("productos-notables") son los históricos del sexto
// grado original; siguen funcionando y están declarados en LEGADO.

import { CICLOS, cicloDeGrado, gradoDeCurso, idDeTema } from "./malla.js";

export const MATERIAS = [
  {
    id: "matematicas",
    nombre: "Matemáticas",
    icono: "📐",
    color: "card1",
    descripcion: "Los cinco pensamientos del MEN: numérico, variacional, espacial, métrico y aleatorio.",
    ejes: [
      {
        id: "numeracion",
        nombre: "Pensamiento numérico",
        ciclos: {
          c1: "Contar, comparar y ordenar números hasta 20",
          c2: "Fracciones y decimales: partes de una unidad",
          c3: "Números enteros, divisibilidad y jerarquía de operaciones",
          c4: "Potencias, raíces y notación científica",
          c5: "Logaritmos, progresiones y sucesiones"
        }
      },
      {
        id: "variacional",
        nombre: "Pensamiento variacional y álgebra",
        ciclos: {
          c1: "Patrones y series con figuras y números",
          c2: "Patrones numéricos, equivalencias y la balanza",
          c3: "Expresiones algebraicas y ecuaciones de un paso",
          c4: "Productos notables, factorización y ecuaciones cuadráticas",
          c5: "Funciones, límites y derivadas"
        }
      },
      {
        id: "espacial",
        nombre: "Pensamiento espacial y geometría",
        ciclos: {
          c1: "Formas del entorno: lados, vértices y conteo",
          c2: "Perímetro y área de rectángulos y cuadrados",
          c3: "Ángulos, triángulos y cuadriláteros",
          c4: "Teorema de Pitágoras y figuras compuestas",
          c5: "Geometría analítica y trigonometría"
        }
      },
      {
        id: "medida",
        nombre: "Pensamiento métrico y proporcionalidad",
        ciclos: {
          c1: "Comparaciones y medidas con el cuerpo",
          c2: "Unidades de longitud, tiempo y dinero",
          c3: "Razón, proporción y porcentaje",
          c4: "Proporcionalidad inversa, escala e interés simple",
          c5: "Modelación, optimización e interés compuesto"
        }
      },
      {
        id: "datos",
        nombre: "Pensamiento aleatorio y datos",
        ciclos: {
          c1: "Tablas de conteo y pictogramas",
          c2: "Gráficos de barras y promedio",
          c3: "Media, mediana, moda y rango",
          c4: "Probabilidad clásica y diagramas de árbol",
          c5: "Probabilidad condicional y distribuciones"
        }
      }
    ]
  },

  {
    id: "espanol",
    nombre: "Lengua Castellana",
    icono: "📖",
    color: "card2",
    descripcion: "Los cinco factores de los EBC de Lengua Castellana del MEN.",
    ejes: [
      {
        id: "comprension",
        nombre: "Comprensión e interpretación textual",
        ciclos: {
          c1: "Leer imágenes, palabras cercanas y oraciones cortas",
          c2: "Nivel inferencial: deducir lo que el texto no dice",
          c3: "Idea principal, información implícita y propósito del autor",
          c4: "Tesis, argumentos y conclusión en textos argumentativos",
          c5: "Lectura crítica: voces, sesgos e intertextualidad"
        }
      },
      {
        id: "produccion",
        nombre: "Producción textual y gramática",
        ciclos: {
          c1: "Escribir oraciones completas con sentido",
          c2: "Párrafo con idea principal y detalles",
          c3: "Texto expositivo con conectores y cohesión",
          c4: "Oración compuesta, concordancia y ortografía",
          c5: "Ensayo académico: estructura, citación y paráfrasis"
        }
      },
      {
        id: "literatura",
        nombre: "Estética de la literatura",
        ciclos: {
          c1: "Cuentos, rimas y rondas",
          c2: "Cuento popular, narrador y personajes",
          c3: "Figuras literarias y géneros narrativos",
          c4: "Géneros literarios y comentario de texto",
          c5: "Movimientos literarios y obras latinoamericanas"
        }
      },
      {
        id: "medios",
        nombre: "Medios de comunicación y otros sistemas simbólicos",
        ciclos: {
          c1: "Señales, íconos y mensajes cortos",
          c2: "La noticia: qué pasó, quién y cuándo",
          c3: "Fuentes confiables e información en pantalla",
          c4: "Publicidad, desinformación y sesgos",
          c5: "Análisis del discurso y ecosistema digital"
        }
      },
      {
        id: "etica-comunicacion",
        nombre: "Ética de la comunicación",
        ciclos: {
          c1: "Escuchar y esperar el turno para hablar",
          c2: "Respeto al hablar y al escribir",
          c3: "Censura, estereotipos y lenguaje inclusivo",
          c4: "Discurso de odio y responsabilidad del emisor",
          c5: "Ética de la información y libertad de expresión"
        }
      }
    ]
  },

  {
    id: "ingles",
    nombre: "Inglés",
    icono: "🔤",
    color: "card4",
    descripcion: "Inglés por niveles del Marco Curricular del MEN: pre-A1 en los iniciales hasta B1+ en undécimo.",
    ejes: [
      {
        id: "gramatica-ingles",
        nombre: "Grammar in use",
        ciclos: {
          c1: "Verb to be, this/that and plurals (pre-A1)",
          c2: "Present simple, there is/are (A1)",
          c3: "Present vs. continuous and past simple (A1+/A2)",
          c4: "Present perfect, modals and comparatives (A2/B1)",
          c5: "Conditionals, passive and reported speech (B1+)"
        }
      },
      {
        id: "vocabulario-ingles",
        nombre: "Vocabulary",
        ciclos: {
          c1: "Colours, numbers, family and animals",
          c2: "School, food and daily routines",
          c3: "Health, free time and feelings",
          c4: "Word formation and phrasal verbs",
          c5: "Academic vocabulary and collocations"
        }
      },
      {
        id: "reading-ingles",
        nombre: "Reading comprehension",
        ciclos: {
          c1: "Signs, labels and short dialogues",
          c2: "Short texts with pictures",
          c3: "Short narratives and descriptions",
          c4: "Informational and mixed texts",
          c5: "Authentic articles and literary texts"
        }
      },
      {
        id: "listening-ingles",
        nombre: "Listening and pronunciation",
        ciclos: {
          c1: "Letter and number sounds",
          c2: "Word stress and syllables",
          c3: "Listening for gist in conversations",
          c4: "Listening for specific information",
          c5: "Connected speech and inference"
        }
      },
      {
        id: "writing-ingles",
        nombre: "Writing and speaking",
        ciclos: {
          c1: "Copy and say simple phrases",
          c2: "Sentences about yourself",
          c3: "Short paragraphs about routines",
          c4: "Emails and short descriptions",
          c5: "Argumentative texts and presentations"
        }
      }
    ]
  },

  {
    id: "ciencias-naturales",
    nombre: "Ciencias Naturales",
    icono: "🔬",
    color: "card3",
    descripcion: "Biología, química, física y educación ambiental con enfoque de indagación.",
    ejes: [
      {
        id: "seres-vivos",
        nombre: "La vida y la biodiversidad",
        ciclos: {
          c1: "Los seres vivos y lo que necesitan",
          c2: "Cómo se clasifican animales y plantas",
          c3: "Célula, tejidos y niveles de organización",
          c4: "División celular y genética mendeliana",
          c5: "Evolución, ADN y biotecnología"
        }
      },
      {
        id: "cuerpo-humano",
        nombre: "Cuerpo humano y salud",
        ciclos: {
          c1: "Los sentidos, la higiene y el cuidado",
          c2: "Sistemas digestivo y respiratorio",
          c3: "Sistemas circulatorio, nervioso y endocrino",
          c4: "Defensas, enfermedades y sexualidad responsable",
          c5: "Genética humana, salud pública y sustancias"
        }
      },
      {
        id: "materia-energia",
        nombre: "Materia y energía",
        ciclos: {
          c1: "El agua y sus estados",
          c2: "Mezclas, propiedades y separación",
          c3: "Átomos, elementos y enlaces",
          c4: "Reacciones químicas, estequiometría y pH",
          c5: "Termoquímica, equilibrios y disoluciones"
        }
      },
      {
        id: "fisica-quimica",
        nombre: "Física y química del entorno",
        ciclos: {
          c1: "Objetos: por qué flotan, caen y se mueven",
          c2: "Fuerzas simples, luz y sonido",
          c3: "Movimiento, fuerza y máquinas simples",
          c4: "Leyes de Newton, trabajo, energía y calor",
          c5: "Campos, ondas y termodinámica"
        }
      },
      {
        id: "ambiente",
        nombre: "Ambiente y sostenibilidad",
        ciclos: {
          c1: "Cuidar el agua y el patio escolar",
          c2: "Residuos, reciclaje y contaminación local",
          c3: "Ecosistemas y biodiversidad colombiana",
          c4: "Cambio climático y ciclos biogeoquímicos",
          c5: "Desarrollo sostenible, ODS y gestión del riesgo"
        }
      }
    ]
  },

  {
    id: "ciencias-sociales",
    nombre: "Ciencias Sociales",
    icono: "🌎",
    color: "card5",
    descripcion: "Historia, geografía, Constitución, economía y culturas, del barrio al mundo.",
    ejes: [
      {
        id: "geografia",
        nombre: "Espacio geográfico y cartografía",
        ciclos: {
          c1: "Mi barrio, mi colegio y el plano sencillo",
          c2: "Colombia: regiones naturales y relieves",
          c3: "Relieve, clima, agua y recursos de Colombia",
          c4: "Geografía física mundial y placas tectónicas",
          c5: "Geopolítica mundial y cartografía temática"
        }
      },
      {
        id: "historia",
        nombre: "Tiempo histórico",
        ciclos: {
          c1: "Antes, ahora y después: mi línea de tiempo",
          c2: "Pueblos indígenas de Colombia y sus fuentes",
          c3: "Independencia, República y Guerra de los Mil Días",
          c4: "Siglo XX: guerras mundiales, violencia y Frente Nacional",
          c5: "Conflicto armado colombiano, paz y memoria histórica"
        }
      },
      {
        id: "ciudadania",
        nombre: "Estado, Constitución y ciudadanía",
        ciclos: {
          c1: "Normas de convivencia del curso",
          c2: "Símbolos patrios, derechos y deberes",
          c3: "Constitución de 1991 y derechos fundamentales",
          c4: "Ramas del poder y mecanismos de participación",
          c5: "Derecho constitucional, DIH y justicia transicional"
        }
      },
      {
        id: "economia-sociedad",
        nombre: "Economía y sociedad",
        ciclos: {
          c1: "Trueque, moneda y mercado del barrio",
          c2: "Necesidades, oferta y demanda",
          c3: "Producción, trabajo, inflación y consumo",
          c4: "Indicadores macroeconómicos de Colombia",
          c5: "Desarrollo, desigualdad y comercio mundial"
        }
      },
      {
        id: "culturas",
        nombre: "Culturas y diversidad",
        ciclos: {
          c1: "Las familias y sus costumbres",
          c2: "Festividades y tradiciones de Colombia",
          c3: "Regiones, poblaciones y diversidad cultural",
          c4: "Culturas del mundo y colonialidad",
          c5: "Historiografía y pensamiento crítico en ciencias sociales"
        }
      }
    ]
  },

  {
    id: "tecnologia",
    nombre: "Tecnología e Informática",
    icono: "💻",
    color: "card6",
    descripcion: "Pensamiento algorítmico, herramientas, dispositivos, ciudadanía digital y diseño.",
    ejes: [
      {
        id: "algoritmos",
        nombre: "Pensamiento algorítmico y programación",
        ciclos: {
          c1: "Secuencias: primero, después, al final",
          c2: "Algoritmos con pasos y repeticiones",
          c3: "Pseudocódigo y diagramas de flujo",
          c4: "Variables, condiciones y ciclos",
          c5: "Estructuras de datos, depuración y complejidad"
        }
      },
      {
        id: "herramientas-digitales",
        nombre: "Herramientas digitales y producción",
        ciclos: {
          c1: "Manejar el mouse y dibujar en pantalla",
          c2: "Procesador de textos: escribir y formatear",
          c3: "Presentaciones y hoja de cálculo básica",
          c4: "Fórmulas, funciones y gráficos en hoja de cálculo",
          c5: "Datos, automatización y trabajo colaborativo"
        }
      },
      {
        id: "dispositivos",
        nombre: "Tecnología, dispositivos y robótica",
        ciclos: {
          c1: "Máquinas y objetos de mi casa",
          c2: "Hardware, periféricos y circuitos simples",
          c3: "Redes, sensores y placas electrónicas",
          c4: "Robótica, microcontroladores e IoT",
          c5: "Electrónica digital e inteligencia artificial"
        }
      },
      {
        id: "ciudadania-digital",
        nombre: "Ciudadanía digital",
        ciclos: {
          c1: "Uso responsable de la pantalla",
          c2: "Contraseñas, respeto en línea y derechos de autor",
          c3: "Privacidad, licencias y datos personales",
          c4: "Seguridad digital e ingeniería social",
          c5: "Ética de datos, IA y regulación tecnológica"
        }
      },
      {
        id: "diseno",
        nombre: "Diseño y solución de problemas",
        ciclos: {
          c1: "Trazar, recortar y construir",
          c2: "Objetos: qué necesidad resuelven",
          c3: "Planos, prototipos y materiales",
          c4: "Experimentación y control de variables",
          c5: "Design thinking e innovación"
        }
      }
    ]
  },

  {
    id: "educacion-artistica",
    nombre: "Educación Artística",
    icono: "🎨",
    color: "card7",
    descripcion: "Artes plásticas, música, escena, patrimonio y estética.",
    ejes: [
      {
        id: "artes-plasticas",
        nombre: "Artes plásticas y visuales",
        ciclos: {
          c1: "Colores primarios, líneas y formas",
          c2: "Color, textura y composición",
          c3: "Perspectiva y claroscuro",
          c4: "Teoría del color y composición",
          c5: "Movimientos artísticos y análisis de obra"
        }
      },
      {
        id: "musica",
        nombre: "Música",
        ciclos: {
          c1: "Sonido, silencio y pulso",
          c2: "Ritmo, notas y escalas",
          c3: "Lenguaje musical, compás e intervalos",
          c4: "Armonía, acordes y forma musical",
          c5: "Acústica, historia de la música y composición"
        }
      },
      {
        id: "escena",
        nombre: "Teatro, danza y expresión corporal",
        ciclos: {
          c1: "Expresar con el cuerpo y la voz",
          c2: "Juego dramático e imitación",
          c3: "Elementos del teatro y de la escena",
          c4: "Danza colombiana y composición escénica",
          c5: "Dirección escénica y teoría del teatro"
        }
      },
      {
        id: "patrimonio",
        nombre: "Patrimonio cultural",
        ciclos: {
          c1: "Tradiciones de mi familia",
          c2: "Festividades de mi ciudad",
          c3: "Patrimonio cultural colombiano",
          c4: "Patrimonio inmaterial y culturas del mundo",
          c5: "Industrias culturales y patrimonio global"
        }
      },
      {
        id: "estetica",
        nombre: "Estética y crítica",
        ciclos: {
          c1: "Me gusta y por qué",
          c2: "Describir una obra con palabras",
          c3: "Analizar una imagen",
          c4: "Crítica de arte y semiótica",
          c5: "Filosofía del arte y análisis cultural"
        }
      }
    ]
  },

  {
    id: "educacion-fisica",
    nombre: "Educación Física, Recreación y Deportes",
    icono: "⚽",
    color: "card8",
    descripcion: "Motricidad, juegos deportivos, expresión corporal, salud y deporte.",
    ejes: [
      {
        id: "motricidad",
        nombre: "Motricidad y condición física",
        ciclos: {
          c1: "Correr, saltar y lanzar",
          c2: "Coordinación, equilibrio y lateralidad",
          c3: "Habilidades motrices combinadas",
          c4: "Fuerza, resistencia y flexibilidad",
          c5: "Biomecánica y entrenamiento"
        }
      },
      {
        id: "juegos-deportivos",
        nombre: "Juegos y deportes",
        ciclos: {
          c1: "Juegos con reglas simples",
          c2: "Predeportivos: pasar, recibir y lanzar",
          c3: "Reglamento de fútbol y baloncesto",
          c4: "Táctica deportiva y sistemas de juego",
          c5: "Reglamento federativo y periodización"
        }
      },
      {
        id: "expresion-corporal",
        nombre: "Expresión corporal y ritmo",
        ciclos: {
          c1: "Imitar movimientos y animales",
          c2: "Coreografías sencillas",
          c3: "Ritmo, espacio y coreografía",
          c4: "Composición de movimientos",
          c5: "Análisis del movimiento y creación escénica"
        }
      },
      {
        id: "salud-bienestar",
        nombre: "Salud, higiene y bienestar",
        ciclos: {
          c1: "Higiene, descanso y movimiento",
          c2: "Comida sana, agua y actividad física",
          c3: "Calentamiento y prevención de lesiones",
          c4: "Fisiología del ejercicio y nutrición",
          c5: "Salud pública, dopaje y prevención"
        }
      },
      {
        id: "deporte-contexto",
        nombre: "Deporte, recreación y contexto",
        ciclos: {
          c1: "Juegos de mi barrio",
          c2: "Recreación activa en el tiempo libre",
          c3: "Deportes en Colombia y sus figuras",
          c4: "Sistema deportivo colombiano",
          c5: "Economía y política del deporte"
        }
      }
    ]
  },

  {
    id: "etica-valores",
    nombre: "Ética y Valores Humanos",
    icono: "🤝",
    color: "card9",
    descripcion: "Convivencia, identidad, derechos humanos, ética digital y construcción de paz.",
    ejes: [
      {
        id: "convivencia",
        nombre: "Convivencia y resolución de conflictos",
        ciclos: {
          c1: "Normas del curso y empatía",
          c2: "Resolver conflictos conversando",
          c3: "Acoso escolar y respeto por la diferencia",
          c4: "Dilemas morales y argumentación ética",
          c5: "Teorías éticas y justicia social"
        }
      },
      {
        id: "identidad",
        nombre: "Identidad y proyecto de vida",
        ciclos: {
          c1: "Cómo soy y qué siento",
          c2: "Emociones y autoestima",
          c3: "Identidad, autonomía y decisiones",
          c4: "Proyecto de vida y metas",
          c5: "Sentido de la vida y alteridad"
        }
      },
      {
        id: "derechos-humanos",
        nombre: "Derechos humanos y diversidad",
        ciclos: {
          c1: "Derechos de los niños",
          c2: "Derechos y deberes en casa y en el colegio",
          c3: "Derechos humanos y grupos de atención prioritaria",
          c4: "Diversidad, igualdad de género y no discriminación",
          c5: "Justicia transicional y derechos humanos"
        }
      },
      {
        id: "etica-digital",
        nombre: "Ética en lo digital",
        ciclos: {
          c1: "Pedir permiso y usar con cuidado",
          c2: "Trato respetuoso en línea",
          c3: "Huella digital y ciberacoso",
          c4: "Ética en redes sociales y viralidad",
          c5: "Desinformación, IA y bioética"
        }
      },
      {
        id: "cultura-paz",
        nombre: "Cultura de paz y ciudadanía",
        ciclos: {
          c1: "Acordar y pedir perdón",
          c2: "Diálogo y acuerdo en el curso",
          c3: "Participación y cultura de paz",
          c4: "Justicia restaurativa y normas de convivencia",
          c5: "Cátedra de la Paz y posacuerdo"
        }
      }
    ]
  },

  {
    id: "religion",
    nombre: "Educación Religiosa Escolar",
    icono: "🕊️",
    color: "card3",
    descripcion: "Historia de las religiones, valores, cultura religiosa, ética e interioridad.",
    ejes: [
      {
        id: "textos-simbolos",
        nombre: "Textos, símbolos y tradiciones",
        ciclos: {
          c1: "Historias y símbolos de mi familia",
          c2: "Personajes y símbolos religiosos",
          c3: "Textos sagrados y su simbolismo",
          c4: "Historia de las religiones del mundo",
          c5: "Hermenéutica y comparación de tradiciones"
        }
      },
      {
        id: "valores-religion",
        nombre: "Valores y vida en comunidad",
        ciclos: {
          c1: "Compartir y perdonar",
          c2: "Respeto, gratitud y solidaridad",
          c3: "Dignidad humana y comunidad",
          c4: "Doctrinas sociales y servicios",
          c5: "Libertad religiosa y diálogo interreligioso"
        }
      },
      {
        id: "cultura-religiosa",
        nombre: "Cultura religiosa y arte",
        ciclos: {
          c1: "Festividades de mi entorno",
          c2: "Calendario religioso y celebraciones",
          c3: "Festividades religiosas en Colombia",
          c4: "Patrimonio religioso y arte sacro",
          c5: "Religión, política y sociedad contemporánea"
        }
      },
      {
        id: "etica-religiosa",
        nombre: "Ética y conciencia",
        ciclos: {
          c1: "Distinguir lo que está bien y mal",
          c2: "Reglas, conciencia y perdón",
          c3: "Conciencia moral y deberes",
          c4: "Ética aplicada: vida, ambiente y tecnología",
          c5: "Bioética y libertad de conciencia"
        }
      },
      {
        id: "interioridad",
        nombre: "Interioridad y sentido",
        ciclos: {
          c1: "Sentir, agradecer y asombrarse",
          c2: "Poner en palabras lo que siento",
          c3: "Silencio, escucha y meditación",
          c4: "Sentido y espiritualidad",
          c5: "Vocación, trascendencia y preguntas últimas"
        }
      }
    ]
  },

  {
    id: "filosofia",
    nombre: "Filosofía",
    icono: "🦉",
    color: "card5",
    descripcion: "Área de la media (Ley 115, art. 31): historia de la filosofía, lógica, conocimiento, ética y existencia.",
    ejes: [
      {
        id: "historia-filosofia",
        nombre: "Historia de la filosofía",
        ciclos: {
          c5: "Del mito al logos: antigua, medieval, moderna y contemporánea"
        }
      },
      {
        id: "logica",
        nombre: "Lógica y argumentación",
        ciclos: {
          c5: "Lógica formal, proposiciones, falacias y contraargumentos"
        }
      },
      {
        id: "epistemologia",
        nombre: "Teoría del conocimiento",
        ciclos: {
          c5: "Verdad, racionalismo, empirismo y crítica científica"
        }
      },
      {
        id: "etica-politica",
        nombre: "Ética y filosofía política",
        ciclos: {
          c5: "Justicia, poder, Estado y libertad"
        }
      },
      {
        id: "existencia",
        nombre: "Filosofía de la existencia",
        ciclos: {
          c5: "Condición humana, sentido, libertad y alteridad"
        }
      }
    ]
  },

  {
    id: "economia",
    nombre: "Economía",
    icono: "📊",
    color: "card6",
    descripcion: "Ciencias económicas de la media y transición de noveno: mercado, macro, Colombia, finanzas y escuelas.",
    ejes: [
      {
        id: "fundamentos-economia",
        nombre: "Fundamentos microeconómicos",
        ciclos: {
          c4: "Necesidades, bienes, oferta y demanda",
          c5: "Elasticidades, mercados y fallo de mercado"
        }
      },
      {
        id: "macroeconomia",
        nombre: "Macroeconomía",
        ciclos: {
          c4: "PIB, inflación y desempleo",
          c5: "Política fiscal, monetaria y modelos macro"
        }
      },
      {
        id: "economia-colombia",
        nombre: "Economía colombiana",
        ciclos: {
          c4: "Estructura productiva y regiones de Colombia",
          c5: "Desarrollo, desigualdad y política económica actual"
        }
      },
      {
        id: "finanzas",
        nombre: "Finanzas personales y del sistema",
        ciclos: {
          c4: "Presupuesto, ahorro e interés",
          c5: "Sistema financiero, bolsa y riesgo"
        }
      },
      {
        id: "pensamiento-economico",
        nombre: "Escuelas del pensamiento económico",
        ciclos: {
          c5: "Clásicos, marxismo, neoclásicos, keynesianos y alternativos"
        }
      }
    ]
  },

  {
    id: "ciencias-politicas",
    nombre: "Ciencias Políticas",
    icono: "🏛️",
    color: "card7",
    descripcion: "Ciencias políticas de la media (Ley 115, art. 31): Estado, Constitución, participación, poder y mundo.",
    ejes: [
      {
        id: "estado",
        nombre: "Teoría del Estado",
        ciclos: {
          c5: "Origen, elementos, formas de Estado y soberanía"
        }
      },
      {
        id: "constitucion-derecho",
        nombre: "Constitución y derecho",
        ciclos: {
          c5: "Constitucionalismo, estructura de la Constitución y control de constitucionalidad"
        }
      },
      {
        id: "participacion",
        nombre: "Democracia y participación",
        ciclos: {
          c5: "Partidos, elecciones, opinión pública y mecanismos de participación"
        }
      },
      {
        id: "poder",
        nombre: "Poder y organizaciones políticas",
        ciclos: {
          c5: "Separación de poderes, pesas y contrapesos, y movimientos sociales"
        }
      },
      {
        id: "relaciones-internacionales",
        nombre: "Relaciones internacionales",
        ciclos: {
          c5: "Sistema internacional, organismos multilaterales y derecho internacional humanitario"
        }
      }
    ]
  },

  {
    id: "orientacion",
    nombre: "Orientación",
    icono: "🧭",
    color: "card8",
    descripcion: "Autoconocimiento, proyecto de vida, convivencia académica, cuidado integral y orientación vocacional.",
    ejes: [
      {
        id: "autoconocimiento",
        nombre: "Autoconocimiento y emociones",
        ciclos: {
          c1: "Cómo soy y qué me gusta hacer",
          c2: "Reconocer y nombrar emociones",
          c3: "Fortalezas, debilidades y autoconcepto",
          c4: "Autoestima, autocuidado y gestión emocional",
          c5: "Identidad, autoconcepto y salud mental"
        }
      },
      {
        id: "proyecto-de-vida",
        nombre: "Proyecto de vida",
        ciclos: {
          c1: "Mis metas pequeñas",
          c2: "Sueños y metas de mi año",
          c3: "Proyecto personal: metas y pasos",
          c4: "Proyecto de vida y toma de decisiones",
          c5: "Proyecto de vida, plan profesional y coherencia"
        }
      },
      {
        id: "convivencia-academica",
        nombre: "Convivencia y hábitos de estudio",
        ciclos: {
          c1: "Reglas del curso y buen trato",
          c2: "Cómo organizar mi tiempo de estudio",
          c3: "Hábitos de estudio y trabajo en equipo",
          c4: "Rutas de atención del convivencia escolar",
          c5: "Mediación escolar y liderazgo"
        }
      },
      {
        id: "cuidado-integral",
        nombre: "Cuidado integral y prevención",
        ciclos: {
          c1: "Rutas del cuidado personal",
          c2: "Prevención del acoso escolar",
          c3: "Prevención del consumo de sustancias",
          c4: "Sexualidad, afectividad y prevención",
          c5: "Salud mental, violencia y redes de apoyo"
        }
      },
      {
        id: "vocacion",
        nombre: "Orientación vocacional",
        ciclos: {
          c3: "Los oficios y profesiones de mi entorno",
          c4: "Tendencias y áreas de interés profesional",
          c5: "Educación superior, pruebas Saber y proyecto posgrado"
        }
      }
    ]
  }
];

// ---------------------------------------------------------------------------
// Temas históricos del sexto grado
// ---------------------------------------------------------------------------
// El banco original (js/games/contenido-temas.js) fue escrito para grado 6°,
// tres áreas y nueve temas por área. Esas clases ya existen en Firestore con
// esos identificadores, así que los temas siguen válidos y aquí se declaran
// para que la pantalla y los selectores los muestren junto con los de la malla.
// El identificador no lleva sufijo porque no es de un ciclo: es un tema suelto.

export const LEGADO = [
  { id: "productos-notables", materia: "matematicas", eje: "variacional", nombre: "Productos notables", grado: 8 },
  { id: "factorizacion", materia: "matematicas", eje: "variacional", nombre: "Factorización de expresiones algebraicas", grado: 8 },
  { id: "ecuaciones-lineales", materia: "matematicas", eje: "variacional", nombre: "Ecuaciones lineales de primer grado", grado: 7 },
  { id: "sistemas-ecuaciones", materia: "matematicas", eje: "variacional", nombre: "Sistemas de ecuaciones con dos incógnitas", grado: 9 },
  { id: "funciones-lineales", materia: "matematicas", eje: "variacional", nombre: "Funciones lineales y su gráfica", grado: 9 },
  { id: "funciones-cuadraticas", materia: "matematicas", eje: "variacional", nombre: "Funciones cuadráticas y parábolas", grado: 10 },
  { id: "potenciacion-radicacion", materia: "matematicas", eje: "numeracion", nombre: "Potenciación, radicación y propiedades", grado: 7 },
  { id: "teorema-pitagoras", materia: "matematicas", eje: "espacial", nombre: "Teorema de Pitágoras y aplicaciones", grado: 8 },
  { id: "probabilidad-conteo", materia: "matematicas", eje: "datos", nombre: "Probabilidad y técnicas de conteo", grado: 11 },

  { id: "analisis-sintactico", materia: "espanol", eje: "produccion", nombre: "Análisis sintáctico: sujeto y predicado", grado: 8 },
  { id: "clases-palabras", materia: "espanol", eje: "produccion", nombre: "Clases de palabras y categorías gramaticales", grado: 6 },
  { id: "tildes-acentuacion", materia: "espanol", eje: "produccion", nombre: "Tildes y reglas de acentuación", grado: 6 },
  { id: "conectores-textuales", materia: "espanol", eje: "produccion", nombre: "Conectores textuales", grado: 6 },
  { id: "tipos-textos", materia: "espanol", eje: "comprension", nombre: "Tipos de texto: narrativo, descriptivo, expositivo y argumentativo", grado: 6 },
  { id: "figuras-literarias", materia: "espanol", eje: "literatura", nombre: "Figuras literarias", grado: 6 },
  { id: "oracion-compuesta", materia: "espanol", eje: "produccion", nombre: "Análisis de la oración compuesta", grado: 10 },
  { id: "cohesion-coherencia", materia: "espanol", eje: "produccion", nombre: "Cohesión y coherencia textual", grado: 9 },
  { id: "interpretacion-critica", materia: "espanol", eje: "comprension", nombre: "Interpretación crítica y comprensión lectora avanzada", grado: 11 },

  { id: "tiempos-presentes", materia: "ingles", eje: "gramatica-ingles", nombre: "Present Simple vs. Present Continuous", grado: 6 },
  { id: "pasado-simple", materia: "ingles", eje: "gramatica-ingles", nombre: "Pasado simple: regulares e irregulares", grado: 6 },
  { id: "verbos-modales", materia: "ingles", eje: "gramatica-ingles", nombre: "Verbos modales (can, could, should, must)", grado: 8 },
  { id: "comparativos-superlativos", materia: "ingles", eje: "gramatica-ingles", nombre: "Comparativos y superlativos", grado: 7 },
  { id: "pronombres-relativos", materia: "ingles", eje: "gramatica-ingles", nombre: "Pronombres relativos (who, which, that)", grado: 9 },
  { id: "futuro", materia: "ingles", eje: "gramatica-ingles", nombre: "Futuro con will y going to", grado: 7 },
  { id: "comprension-lectura-ingles", materia: "ingles", eje: "reading-ingles", nombre: "Comprensión de lectura en textos cortos", grado: 8 },
  { id: "wh-questions", materia: "ingles", eje: "gramatica-ingles", nombre: "Preguntas con Wh-", grado: 6 },
  { id: "preposiciones", materia: "ingles", eje: "vocabulario-ingles", nombre: "Preposiciones de tiempo y lugar", grado: 6 }
];

export const JUEGOS = [
  {
    id: "quiz",
    icono: "🎮",
    nombre: "Quiz de Lógica",
    nombreCorto: "Quiz",
    archivo: "quiz.html",
    descripcion: "Pon a prueba tu razonamiento con preguntas rápidas y desafiantes."
  },
  {
    id: "puzzle",
    icono: "🧩",
    nombre: "Puzzle de Código",
    nombreCorto: "Puzzle",
    archivo: "puzzle.html",
    descripcion: "Ordena los pasos de un proceso en el orden correcto."
  },
  {
    id: "carrera",
    icono: "🚀",
    nombre: "Carrera Espacial",
    nombreCorto: "Carrera",
    archivo: "carrera.html",
    descripcion: "Compite contra el reloj resolviendo retos antes de que despegue tu nave."
  }
];

// ---------------------------------------------------------------------------
// Índices
// ---------------------------------------------------------------------------
// Se construyen una sola vez al cargar el módulo: los paneles necesitan buscar
// por id de tema miles de veces (cada tarjeta de cada lista) y un .find() sobre
// el arreglo completo sería un barrido por cada búsqueda.

const POR_ID = new Map();
const POR_MATERIA = new Map();
const LEGADO_POR_ID = new Map(LEGADO.map((t) => [t.id, t]));

for (const materia of MATERIAS) {
  POR_MATERIA.set(materia.id, materia);
  for (const eje of materia.ejes) {
    for (const cicloId of Object.keys(eje.ciclos)) {
      const id = idDeTema(materia.id, eje.id, cicloId);
      POR_ID.set(id, {
        id,
        nombre: eje.ciclos[cicloId],
        materiaId: materia.id,
        materiaNombre: materia.nombre,
        icono: materia.icono,
        ejeId: eje.id,
        ejeNombre: eje.nombre,
        cicloId
      });
    }
  }
}

for (const t of LEGADO) {
  const materia = POR_MATERIA.get(t.materia);
  POR_ID.set(t.id, {
    id: t.id,
    nombre: t.nombre,
    materiaId: t.materia,
    materiaNombre: materia?.nombre || "",
    icono: materia?.icono || "📘",
    ejeId: t.eje,
    ejeNombre: materia?.ejes.find((e) => e.id === t.eje)?.nombre || "",
    cicloId: cicloDeGrado(t.grado),
    legado: true,
    grado: t.grado
  });
}

// ---------------------------------------------------------------------------
// API pública
// ---------------------------------------------------------------------------

export function obtenerMateria(materiaId) {
  return POR_MATERIA.get(materiaId) || null;
}

/** Tema completo a partir de su identificador, nuevo o histórico. */
export function obtenerTema(temaId) {
  return POR_ID.get(temaId) || null;
}

export function nombreDelTema(temaId) {
  return POR_ID.get(temaId)?.nombre || temaId || "Tema general";
}

export function cicloDelTema(temaId) {
  return POR_ID.get(temaId)?.cicloId || "";
}

export function existeTema(temaId) {
  return POR_ID.has(temaId);
}

export function obtenerJuego(juegoId) {
  return JUEGOS.find((juego) => juego.id === juegoId) || null;
}

/**
 * `prefijo` separa la raíz del sitio de las carpetas de panel: desde
 * interfaz-estudiante/ se usa "../", desde index.html se usa "".
 */
export function rutaDeJuego(juegoId, prefijo = "") {
  const juego = obtenerJuego(juegoId);
  return juego ? `${prefijo}juegos/${juego.archivo}` : "#";
}

/**
 * Temas que puede elegir un curso. Si el grado es 3°, se lista el eje de cada
 * área en su ciclo c2; si es 9°, c4. Un área sin contenido para ese ciclo no
 * aparece. `incluirLegado` suma los temas históricos que corresponden a ese
 * grado (los del antiguo sexto, y los de 8° a 11° cuando el curso es mayor).
 */
export function temasDelGrado(grado, { materiaId = "", incluirLegado = true } = {}) {
  const cicloId = cicloDeGrado(grado);
  if (!cicloId) return [];

  const nuevos = MATERIAS.filter((m) => !materiaId || m.id === materiaId).flatMap((materia) =>
    materia.ejes
      .filter((eje) => eje.ciclos[cicloId])
      .map((eje) => obtenerTema(idDeTema(materia.id, eje.id, cicloId)))
  );

  if (!incluirLegado) return nuevos;

  const legado = LEGADO.filter(
    (t) => (!materiaId || t.materia === materiaId) && t.grado === Number(grado)
  ).map((t) => obtenerTema(t.id));

  return [...nuevos, ...legado];
}

/** Los cinco ejes de un área en el ciclo de un código de curso (601 -> 6°). */
export function temasDelCurso(codigoCurso, materiaId) {
  return temasDelGrado(gradoDeCurso(codigoCurso), { materiaId });
}

/**
 * Todos los temas publicados de un área, ordenados por eje y por ciclo. Lo
 * necesitan quien aún no tiene curso asignado (invitado, estudiante sin
 * vincular) y el panel de materias del administrador.
 */
export function temasDeMateria(materiaId) {
  const materia = POR_MATERIA.get(materiaId);
  if (!materia) return [];
  return materia.ejes.flatMap((eje) =>
    CICLOS.filter((ciclo) => eje.ciclos[ciclo.id]).map((ciclo) =>
      obtenerTema(idDeTema(materiaId, eje.id, ciclo.id))
    )
  );
}

/** Todas las materias con su id, para validaciones y selectores. */
export const MATERIAS_IDS = MATERIAS.map((m) => m.id);

/** Materias que un grado puede cursar (las que tienen al menos un eje en su ciclo). */
export function materiasDelGrado(grado) {
  const cicloId = cicloDeGrado(grado);
  if (!cicloId) return [];
  return MATERIAS.filter((materia) => materia.ejes.some((eje) => Boolean(eje.ciclos[cicloId])));
}

/** Cuántos temas hay en total, por ciclo (para la portada y el panel de materias). */
export function conteoPorCiclo() {
  const conteo = {};
  for (const ciclo of CICLOS) conteo[ciclo.id] = 0;
  for (const tema of POR_ID.values()) {
    if (conteo[tema.cicloId] !== undefined) conteo[tema.cicloId] += 1;
  }
  return conteo;
}

export function totalTemas() {
  return POR_ID.size;
}
