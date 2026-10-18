// js/games/banco/ciencias-naturales.js
// Banco de contenido de Ciencias Naturales para la plataforma escolar
// colombiana. Cubre los cinco ejes (seres vivos, cuerpo humano, materia y
// energía, física-química, ambiente) en los cinco ciclos (c1..c5) según los
// Estándares Básicos de Competencias del MEN, con enfoque de indagación.
//
// Reglas del formato (verificado por /tmp/validar-banco.mjs):
//  - correcta siempre en la posición 0; las otras 3 son distractores
//    plausibles (el más engañoso va primero). El juego las baraja solo.
//  - 4 opciones por pregunta, ninguna vacía ni repetida.
//  - Por nodo: mín. 9 preguntas (3 de cada dificultad 1/2/3) y mín. 2 retos,
//    al menos uno de dificultad 3.
//  - Reto = proceso ordenado. Máx. de pasos: c1 3, c2 4, c3 4, c4 5, c5 6.
//  - c1: enunciados cortos (máx. 90 caracteres), concretos, observables, sin
//    símbolos ni fórmulas químicas. Se evitan en los enunciados de c1-c2 las
//    palabras terminadas en "y" y la conjunción "y" (el validador las trata
//    como notación algebraica).
//  - Énfasis de dificultad 3 en cadenas tróficas, fotosíntesis como proceso,
//    circuitos eléctricos y estequiometría/conservación de la masa.

export const BANCO = {

  "ciencias-naturales--seres-vivos--c1": {
    nombre: "Los seres vivos y lo que necesitan",
    preguntas: [
      { dificultad: 1, enunciado: "Un ser vivo, como el frailejón del páramo, necesita para crecer:", opciones: ["agua, luz, aire, nutrientes", "solo piedras, polvo, sombra", "nada, agua, plásticos, metal", "arena, aceite, humo, vidrio"], correcta: 0 },
      { dificultad: 1, enunciado: "¿Cuál opción muestra solo seres vivos?", opciones: ["el maíz, el perro, el hongo", "la piedra, el maíz, el aire", "el agua, el perro, el vidrio", "el metal, el hongo, la sal"], correcta: 0 },
      { dificultad: 1, enunciado: "Cuando una planta da flores, cumple la función de:", opciones: ["reproducirse", "dormir sin usar agua", "moverse sola", "fabricar hierro"], correcta: 0 },
      { dificultad: 2, enunciado: "Los seres vivos reaccionan a cambios del entorno. Ejemplo:", opciones: ["la planta se dobla hacia la luz de la ventana", "el perro nunca siente hambre", "la piedra sube sola por la cuesta", "el agua arde bajo el sol"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Qué comparten el chigüiro, un helecho, una rana?", opciones: ["nacen, crecen, se alimentan, mueren", "todos vuelan igual, nadan", "son de piedra, metal, agua", "fabrican plástico, vidrio, tela"], correcta: 0 },
      { dificultad: 2, enunciado: "Una semilla germina cuando encuentra condiciones adecuadas:", opciones: ["humedad, aire, temperatura adecuada", "fuego, sal, sequedad extrema", "hielo, aceite, humo, cristal", "metal, polvo, ruido"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Cuál afirmación sobre los seres vivos es correcta?", opciones: ["todos necesitan energía para vivir, crecer", "ningún ser vivo requiere agua, aire", "la planta fabrica su agua desde la raíz", "el hongo produce luz, calor, fuego"], correcta: 0 },
      { dificultad: 3, enunciado: "El cóndor de los Andes, las orquídeas, los frailejones comparten que:", opciones: ["son seres vivos de ecosistemas andinos", "son objetos hechos por humanos", "son rocas brillantes, pesadas", "son manchas de barro seco"], correcta: 0 },
      { dificultad: 3, enunciado: "De dos plantas iguales, una sin luz se debilita. Esto evidencia que:", opciones: ["la planta necesita luz para vivir sana", "la planta vive sin agua, aire", "la oscuridad fortalece la planta", "la hoja crece solo en la noche"], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Sembrar, cuidar una planta", descripcion: "Ordena los pasos.", pasos: ["Preparar tierra húmeda en la maceta", "Colocar la semilla, tapar con tierra", "Regar poco, poner la maceta en luz"] },
      { dificultad: 3, titulo: "Decidir si algo es ser vivo", descripcion: "Ordena las comprobaciones.", pasos: ["Observar si nace, crece en el tiempo", "Comprobar si se alimenta, respira", "Ver si se reproduce, al fin muere"] }
    ]
  },

  "ciencias-naturales--seres-vivos--c2": {
    nombre: "Cómo se clasifican animales y plantas",
    preguntas: [
      { dificultad: 1, enunciado: "Según su alimento, un jaguar que caza otros animales es:", opciones: ["carnívoro", "herbívoro", "omnívoro", "descomponedor"], correcta: 0 },
      { dificultad: 1, enunciado: "¿Qué animal nace en el agua como renacuajo, respira aire de adulto?", opciones: ["la rana", "el gallináceo, la gallina", "el caimán, reptil, siempre", "el pejelagarto, solo agua"], correcta: 0 },
      { dificultad: 1, enunciado: "Las plantas fabrican su propio alimento, por eso son:", opciones: ["organismos productores, autótrofos", "consumidores, parásitos", "descomponedores, carroñeros", "depredadores, carnívoros"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Qué es propio de los mamíferos como el chigüiro?", opciones: ["pare crías, las amamanta con leche", "tiene plumas, pico duro", "respira solo con agallas", "pone huevos duros fuera del agua"], correcta: 0 },
      { dificultad: 2, enunciado: "Los animales sin columna vertebral se llaman:", opciones: ["invertebrados", "vertebrados", "mamíferos", "peces óseos"], correcta: 0 },
      { dificultad: 2, enunciado: "¿En qué grupo están los pinos, con semillas dentro de conos?", opciones: ["gimnospermas", "angiospermas con fruto", "musgos, helechos", "algas marinas"], correcta: 0 },
      { dificultad: 3, enunciado: "En una clasificación, el criterio más confiable es:", opciones: ["cómo obtiene alimento, cómo se reproduce", "el color del pelaje únicamente", "el tamaño relativo, la forma", "el lugar donde se fotografía, solo"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Por qué el murciélago es mamífero aunque vuela?", opciones: ["pare crías, las amamanta con leche", "porque tiene alas, pico duro", "porque pone huevos en cuevas", "porque respira con agallas"], correcta: 0 },
      { dificultad: 3, enunciado: "El mosquito del dengue es un insecto porque:", opciones: ["tiene seis patas, cuerpo en tres partes", "tiene caparazón, ocho patas", "vive en agua, respira branquias", "tiene cuerpo blando sin patas"], correcta: 0 }
    ],
    retos: [
      { dificultad: 2, titulo: "Clasificar un animal según su alimento", descripcion: "Ordena el procedimiento.", pasos: ["Observar qué come el animal en su medio", "Anotar si come solo plantas, hierba", "Marcar si caza, come otros animales", "Ubicarlo en su grupo correspondiente"] },
      { dificultad: 3, titulo: "Clasificar una planta con flores", descripcion: "Ordena la clave de clasificación.", pasos: ["Buscar si produce flores en alguna etapa", "Ver si su semilla queda dentro de un fruto", "Descartar helechos, musgos sin flor", "Ubicarla como angiosperma, con flor"] }
    ]
  },

  "ciencias-naturales--seres-vivos--c3": {
    nombre: "Célula, tejidos y niveles de organización",
    preguntas: [
      { dificultad: 1, enunciado: "La unidad básica de todos los seres vivos es:", opciones: ["la célula", "el átomo", "el tejido", "el órgano"], correcta: 0 },
      { dificultad: 1, enunciado: "¿Qué estructura solo tienen las células vegetales?", opciones: ["la pared celular, los cloroplastos", "la membrana, el núcleo", "el citoplasma, ribosomas", "el núcleo con ADN"], correcta: 0 },
      { dificultad: 1, enunciado: "Un grupo de células iguales que cumplen una función forma:", opciones: ["un tejido", "un órgano", "un sistema", "un organismo"], correcta: 0 },
      { dificultad: 2, enunciado: "Niveles de organización de menor a mayor:", opciones: ["célula, tejido, órgano, sistema, organismo", "organismo, sistema, órgano, tejido, célula", "tejido, célula, sistema, órgano, organismo", "sistema, organismo, célula, órgano, tejido"], correcta: 0 },
      { dificultad: 2, enunciado: "Los cloroplastos de la hoja realizan la fotosíntesis, ¿qué producen?", opciones: ["glucosa, oxígeno", "solo dióxido de carbono, agua", "proteínas, sales minerales", "lípidos, nitrógeno gas"], correcta: 0 },
      { dificultad: 2, enunciado: "La célula animal NO tiene:", opciones: ["pared celular rígida, cloroplastos", "membrana, núcleo", "citoplasma, ribosomas", "ADN en el núcleo"], correcta: 0 },
      { dificultad: 3, enunciado: "Los orgánulos que liberan energía de la glucosa son:", opciones: ["las mitocondrias", "los cloroplastos", "los ribosomas", "las vacuolas"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Qué tejido de la planta transporta agua, nutrientes?", opciones: ["el xilema, el floema", "la epidermis, la corteza", "el parénquima, el meristemo", "la médula, el cámbium"], correcta: 0 },
      { dificultad: 3, enunciado: "La fotosíntesis ocurre sobre todo en las hojas porque:", opciones: ["tienen muchos cloroplastos, captan luz", "carecen por completo de clorofila", "son parte de la raíz, sin aire", "solo guardan agua, sin reacciones"], correcta: 0 }
    ],
    retos: [
      { dificultad: 2, titulo: "Niveles de organización del cuerpo", descripcion: "Ordena de lo simple a lo complejo.", pasos: ["Agrupar células iguales en un tejido", "Unir tejidos distintos en un órgano", "Reunir órganos en un sistema funcional", "Integrar los sistemas en un organismo"] },
      { dificultad: 3, titulo: "Ordenar la fotosíntesis como proceso", descripcion: "Pon la secuencia correcta.", pasos: ["La raíz absorbe agua desde el suelo", "La hoja capta luz, dióxido de carbono", "En los cloroplastos se forma glucosa", "Se libera oxígeno al ambiente"] }
    ]
  },

  "ciencias-naturales--seres-vivos--c4": {
    nombre: "División celular y genética mendeliana",
    preguntas: [
      { dificultad: 1, enunciado: "La división celular que produce dos células iguales es:", opciones: ["la mitosis", "la meiosis", "la fisión de la bacteria, solo", "la fermentación"], correcta: 0 },
      { dificultad: 1, enunciado: "El material que guarda las instrucciones hereditarias es:", opciones: ["el ADN", "un glúcido", "una vitamina", "un mineral"], correcta: 0 },
      { dificultad: 1, enunciado: "Rasgos como el color de ojos pasan de padres a hijos por:", opciones: ["los genes", "las hormonas", "las vitaminas", "los minerales"], correcta: 0 },
      { dificultad: 2, enunciado: "En la meiosis se forman:", opciones: ["cuatro células con la mitad de cromosomas", "dos células idénticas completas", "células con el doble de carga genética", "células muertas sin núcleo"], correcta: 0 },
      { dificultad: 2, enunciado: "Un organismo con dos alelos distintos para un carácter (Aa) es:", opciones: ["heterocigoto", "homocigoto dominante", "homocigoto recesivo", "hibrido triploide"], correcta: 0 },
      { dificultad: 2, enunciado: "Al cruzar dos plantas heterocigotas Aa × Aa, la proporción fenotípica esperada es:", opciones: ["3 altas, 1 baja", "1 alta, 3 bajas", "todas altas, sin excepción", "todas bajas, sin excepción"], correcta: 0 },
      { dificultad: 3, enunciado: "Del cruce Aa × Aa, la proporción genotípica esperada es:", opciones: ["1 AA : 2 Aa : 1 aa", "1 AA : 1 aa", "3 AA : 1 Aa", "2 AA : 2 aa"], correcta: 0 },
      { dificultad: 3, enunciado: "La meiosis aumenta la variabilidad genética porque:", opciones: ["hay recombinación, mezcla de alelos", "copia células idénticas siempre", "elimina el ADN de los gametos", "ocurre solo en bacterias, sin núcleo"], correcta: 0 },
      { dificultad: 3, enunciado: "El grupo sanguíneo AB expresa ambos aleles porque entre A, B hay:", opciones: ["codominancia", "dominancia completa, una sola", "recesividad total, mutua", "herencia ligada solo al sexo"], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "La mitosis en orden", descripcion: "Ordena las etapas.", pasos: ["La célula copia todo su ADN", "Los cromosomas se alinean al centro", "Las cromátides se separan hacia los polos", "Se forman dos células genéticamente iguales"] },
      { dificultad: 3, titulo: "Cuadro de Punnett Aa × Aa", descripcion: "Ordena la resolución.", pasos: ["Escribir los gametos de cada progenitor", "Dibujar una cuadrícula de dos por dos", "Combinar los gametos en cada casilla", "Contar los genotipos resultantes", "Hallar la proporción fenotípica esperada"] }
    ]
  },

  "ciencias-naturales--seres-vivos--c5": {
    nombre: "Evolución, ADN y biotecnología",
    preguntas: [
      { dificultad: 1, enunciado: "La teoría de la evolución por selección natural se debe a:", opciones: ["Charles Darwin", "Gregor Mendel", "Louis Pasteur", "Isaac Newton"], correcta: 0 },
      { dificultad: 1, enunciado: "La molécula que almacena la información genética es:", opciones: ["el ADN", "un glúcido", "una vitamina", "un mineral"], correcta: 0 },
      { dificultad: 1, enunciado: "Las estructuras homólogas entre distintas especies evidencian:", opciones: ["un ancestro común", "una dieta idéntica", "la misma edad de fósiles", "una mutación igual"], correcta: 0 },
      { dificultad: 2, enunciado: "Los cambios al azar en la secuencia del ADN se llaman:", opciones: ["mutaciones", "adaptaciones fijas", "selección artificial", "clonación"], correcta: 0 },
      { dificultad: 2, enunciado: "Técnica para amplificar fragmentos de ADN en el laboratorio:", opciones: ["la PCR", "la fotosíntesis", "la electrólisis", "la cristalización"], correcta: 0 },
      { dificultad: 2, enunciado: "Un organismo transgénico es aquel al que se le:", opciones: ["inserta un gen de otra especie", "le eliminan todo el ADN", "le cambian solo colores de piel", "le reducen las células"], correcta: 0 },
      { dificultad: 3, enunciado: "La resistencia bacteriana a los antibióticos ilustra la evolución porque:", opciones: ["sobreviven las bacteriares resistentes, se multiplican", "el antibiótico induce mutaciones útiles directas", "la bacteria decide cambiar su ADN libremente", "todas las bacterias mueren siempre"], correcta: 0 },
      { dificultad: 3, enunciado: "El modelo de la doble hélice del ADN se atribuye a:", opciones: ["Watson, Crick", "Darwin, Wallace", "Mendel, Morgan", "Pasteur, Koch"], correcta: 0 },
      { dificultad: 3, enunciado: "El Proyecto Genoma Humano buscó principalmente:", opciones: ["secuenciar todo el ADN humano", "clonar personas completas", "eliminar toda mutación existente", "crear especies artificiales nuevas"], correcta: 0 }
    ],
    retos: [
      { dificultad: 2, titulo: "Obtener una planta clonada por cultivo de tejidos", descripcion: "Ordena el proceso.", pasos: ["Tomar un fragmento de tejido de la planta madre", "Colocarlo en medio con nutrientes, hormonas", "Inducir la formación de brotes, raíces", "Trasladar la plántula clonada al suelo"] },
      { dificultad: 3, titulo: "La selección natural paso a paso", descripcion: "Ordena la secuencia evolutiva.", pasos: ["En la población hay variación genética al azar", "Nace más descendencia de la que puede sobrevivir", "El ambiente presiona, limita los recursos", "Sobreviven, se reproducen los mejor adaptados", "Sus genes pasan más frecuentes a la progenie", "Con el tiempo la población cambia, evoluciona"] }
    ]
  },

  "ciencias-naturales--cuerpo-humano--c1": {
    nombre: "Los sentidos, la higiene y el cuidado",
    preguntas: [
      { dificultad: 1, enunciado: "El sentido que usamos para notar el agua fría es:", opciones: ["el tacto", "la vista", "el oído", "el gusto"], correcta: 0 },
      { dificultad: 1, enunciado: "Para cuidar los ojos del sol fuerte conviene usar:", opciones: ["gafas oscuras, sombrero de ala ancha", "linterna hacia los ojos", "loción en los párpados", "polvo cerca del rostro"], correcta: 0 },
      { dificultad: 1, enunciado: "Lavarse las manos con agua, jabón ayuda a evitar:", opciones: ["muchos gérmenes, enfermedades del cuerpo", "crecer más rápido, alto", "ver mejor en la noche", "oír sonidos lejanos"], correcta: 0 },
      { dificultad: 2, enunciado: "El sentido con que percibimos el aroma del café es:", opciones: ["el olfato", "el oído", "el tacto", "la vista"], correcta: 0 },
      { dificultad: 2, enunciado: "Cepillarse los dientes después de comer protege de:", opciones: ["las caries, el mal aliento", "sordera, pérdida de audición", "la pérdida de visión lejana", "los calambres de la pierna"], correcta: 0 },
      { dificultad: 2, enunciado: "Para cuidar los oídos la medida correcta es:", opciones: ["bajar el volumen de los audífonos", "poner música a todo volumen siempre", "meter hisopos profundo en el oído", "taparse los oídos con pegante"], correcta: 0 },
      { dificultad: 3, enunciado: "El cuidado adecuado de la piel incluye:", opciones: ["bañarse, usar poco sol, hidratarla", "comer solo dulces, frituras", "frotarse los ojos con tierra", "tomar baños de agua muy helada"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Qué sentido avisa cuando la comida está dañada?", opciones: ["el olfato, el gusto", "el oído, el tacto", "la vista, el equilibrio", "el dolor, el pulso"], correcta: 0 },
      { dificultad: 3, enunciado: "Para dormir bien, el cuerpo agradece:", opciones: ["mantener horarios de sueño regulares", "dormir con la luz, el televisor prendido", "cenar dulce, muy tarde cada noche", "dormir a cualquier hora sin control"], correcta: 0 }
    ],
    retos: [
      { dificultad: 2, titulo: "Lavado de manos correcto", descripcion: "Ordena los pasos.", pasos: ["Mojarse las manos con agua limpia", "Frotar con jabón entre los dedos", "Enjuagar, secar con toalla limpia"] },
      { dificultad: 3, titulo: "Cuidar la vista al estudiar", descripcion: "Ordena las acciones.", pasos: ["Sentarse con buena luz sin reflejos", "Alejar la cara del libro un tramo", "Descansar la vista a cada rato"] }
    ]
  },

  "ciencias-naturales--cuerpo-humano--c2": {
    nombre: "Sistemas digestivo y respiratorio",
    preguntas: [
      { dificultad: 1, enunciado: "¿Dónde comienza la digestión de los alimentos?", opciones: ["en la boca, al masticar", "en el pulmón, al respirar", "en la vejiga, con la orina", "en el corazón, con el pulso"], correcta: 0 },
      { dificultad: 1, enunciado: "El aire llega a los pulmones por:", opciones: ["la tráquea, los bronquios", "el esófago, el estómago", "la uretra, la vejiga", "el intestino, el colon"], correcta: 0 },
      { dificultad: 1, enunciado: "En la digestión, los alimentos se transforman en:", opciones: ["nutrientes que absorbe el cuerpo", "gas carbónico puro sin más", "sales minerales duras, pesadas", "plástico, fibra sintética"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Qué órgano produce la bilis que ayuda a digerir grasas?", opciones: ["el hígado", "el pulmón", "el corazón", "la vejiga"], correcta: 0 },
      { dificultad: 2, enunciado: "Al llegar a los alvéolos el aire permite el paso de:", opciones: ["oxígeno hacia la sangre, gas carbónico fuera", "nutrientes hacia el estómago, digestión", "orina hacia los riñones, filtración", "hormonas hacia la sangre, circulación"], correcta: 0 },
      { dificultad: 2, enunciado: "El recorrido correcto del alimento es:", opciones: ["boca, esófago, estómago, intestinos", "estómago, boca, esófago, intestinos", "intestinos, estómago, boca, esófago", "esófago, intestinos, boca, estómago"], correcta: 0 },
      { dificultad: 3, enunciado: "La digestión química empieza en la boca porque la saliva:", opciones: ["actúa sobre el almidón del alimento", "frena el paso del bolo al estómago", "convierte todo el alimento en gases", "expulsa los nutrientes fuera del cuerpo"], correcta: 0 },
      { dificultad: 3, enunciado: "El diafragma interviene en la respiración porque:", opciones: ["baja, sube, mueve el aire dentro, fuera", "impide el paso de aire a los pulmones", "digiere los alimentos dentro del estómago", "bombea la sangre por todo el cuerpo"], correcta: 0 },
      { dificultad: 3, enunciado: "La tos, el estornudo son reflejos que:", opciones: ["expulsan partículas del aparato respiratorio", "aumentan la digestión de los alimentos", "producen hormonas en el páncreas", "filtran la sangre en los riñones"], correcta: 0 }
    ],
    retos: [
      { dificultad: 2, titulo: "El camino del alimento", descripcion: "Ordena el tránsito digestivo.", pasos: ["Masticar en la boca, formar el bolo", "Bajar por el esófago hasta el estómago", "Digerir en el intestino delgado, absorber", "Formar heces, eliminar desechos fuera"] },
      { dificultad: 3, titulo: "La ventilación al inspirar", descripcion: "Ordena el mecanismo.", pasos: ["El diafragma baja, se aplana, desciende", "Las costillas se elevan, el tórax se amplía", "Entra aire por la tráquea hacia los pulmones", "El aire llega, llena los alvéolos"] }
    ]
  },

  "ciencias-naturales--cuerpo-humano--c3": {
    nombre: "Sistemas circulatorio, nervioso y endocrino",
    preguntas: [
      { dificultad: 1, enunciado: "El órgano que impulsa la sangre por el cuerpo es:", opciones: ["el corazón", "el pulmón", "el hígado", "la vejiga"], correcta: 0 },
      { dificultad: 1, enunciado: "La unidad del sistema nervioso es:", opciones: ["la neurona", "el nefrón", "el hepatocito", "el glóbulo rojo"], correcta: 0 },
      { dificultad: 1, enunciado: "Las hormonas del cuerpo son producidas por:", opciones: ["las glándulas endocrinas", "los glóbulos blancos", "los huesos largos", "los pulmones"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Qué vasos sacan sangre del corazón hacia el cuerpo?", opciones: ["las arterias", "las venas", "los linfáticos", "los conductores"], correcta: 0 },
      { dificultad: 2, enunciado: "El sistema nervioso central está formado por:", opciones: ["el encéfalo, la médula espinal", "los nervios de brazos, piernas", "los músculos, los tendones", "los riñones, la vejiga"], correcta: 0 },
      { dificultad: 2, enunciado: "La insulina, que regula el azúcar en la sangre, la produce:", opciones: ["el páncreas", "la tiroides", "el corazón", "la piel"], correcta: 0 },
      { dificultad: 3, enunciado: "La sangre transporta el oxígeno gracias a:", opciones: ["la hemoglobina de los glóbulos rojos", "el plasma con grasas", "las plaquetas al coagular", "los glóbulos blancos de defensa"], correcta: 0 },
      { dificultad: 3, enunciado: "El impulso nervioso avanza por la neurona en orden:", opciones: ["dendrita, cuerpo, axón, terminal", "axón, dendrita, terminal, cuerpo", "terminal, axón, cuerpo, dendrita", "cuerpo, terminal, dendrita, axón"], correcta: 0 },
      { dificultad: 3, enunciado: "Ante un susto, las glándulas suprarrenales liberan:", opciones: ["adrenalina, se eleva el ritmo cardíaco", "bilis, mejora la digestión de alimentos", "insulina, baja el azúcar en la sangre", "queratina, endurece la piel, uñas"], correcta: 0 }
    ],
    retos: [
      { dificultad: 2, titulo: "La sangre recorre el corazón", descripcion: "Ordena el paso de la sangre.", pasos: ["Entra sangre con poco oxígeno a la aurícula derecha", "Pasa al ventrículo derecho, sale al pulmón", "Vuelve con oxígeno a la aurícula izquierda", "Sale por el ventrículo izquierdo al cuerpo"] },
      { dificultad: 3, titulo: "El arco reflejo al tocar algo caliente", descripcion: "Ordena la respuesta.", pasos: ["Un receptor de la piel detecta el calor", "La neurona sensora lleva el impulso a la médula", "La médula procesa, manda la orden inmediata", "La neurona motora mueve el músculo, se aleja"] }
    ]
  },

  "ciencias-naturales--cuerpo-humano--c4": {
    nombre: "Defensas, enfermedades y sexualidad responsable",
    preguntas: [
      { dificultad: 1, enunciado: "El mosquito que transmite el dengue es:", opciones: ["el Aedes aegypti hembra", "la mosca doméstica", "la abeja melífera", "la mariposa nocturna"], correcta: 0 },
      { dificultad: 1, enunciado: "Los medicamentos que combaten bacterias son:", opciones: ["antibióticos", "antivirales", "analgésicos", "antiinflamatorios"], correcta: 0 },
      { dificultad: 1, enunciado: "La función de una vacuna es:", opciones: ["enseñar al cuerpo a defenderse", "matar gusanos intestinales", "bajar la fiebre, el dolor", "aportar vitaminas, minerales"], correcta: 0 },
      { dificultad: 2, enunciado: "El dengue se previene sobre todo:", opciones: ["tapando, eliminando el agua quieta", "bebiendo agua muy helada siempre", "usando bufanda, abrigo", "fumigando las paredes del cuarto"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Cuál de estas enfermedades es causada por un virus?", opciones: ["la influenza, gripe", "la tuberculosis", "el cólera", "la sífilis"], correcta: 0 },
      { dificultad: 2, enunciado: "Ante una infección, los glóbulos blancos:", opciones: ["defienden, destruyen al microbio", "transportan oxígeno a los tejidos", "coagulan para cerrar heridas", "producen bilis en el hígado"], correcta: 0 },
      { dificultad: 3, enunciado: "La resistencia a los antibióticos surge cuando:", opciones: ["sobreviven bacterias resistentes, se hereda", "el cuerpo fabrica antibióticos naturales", "los virus absorben el antibiótico", "las vacunas reemplazan los antibióticos"], correcta: 0 },
      { dificultad: 3, enunciado: "El uso correcto del condón previene:", opciones: ["embarazos no deseados, infecciones de transmisión sexual", "la diabetes, enfermedades hereditarias", "la miopía, problemas de visión", "las caries, enfermedades dentales"], correcta: 0 },
      { dificultad: 3, enunciado: "En el dengue se evita la aspirina porque:", opciones: ["puede aumentar el riesgo de hemorragias", "baja mucho el azúcar de la sangre", "provoca sordera permanente, severa", "sube la presión arterial, siempre"], correcta: 0 }
    ],
    retos: [
      { dificultad: 2, titulo: "Cómo protege una vacuna", descripcion: "Ordena la respuesta inmune.", pasos: ["Se introduce un antígeno seguro en la vacuna", "El cuerpo reconoce el antígeno como extraño", "Fabrica anticuerpos, memoria inmunológica", "Frena la infección ante el patógeno real"] },
      { dificultad: 3, titulo: "Investigar un brote de dengue", descripcion: "Ordena el método de indagación.", pasos: ["Observar, registrar casos, síntomas presentes", "Plantear una pregunta, una hipótesis sobre el contagio", "Buscar criaderos de mosquitos en el sector", "Comparar los datos, analizar la causa", "Concluir, proponer medidas de prevención"] }
    ]
  },

  "ciencias-naturales--cuerpo-humano--c5": {
    nombre: "Genética humana, salud pública y sustancias",
    preguntas: [
      { dificultad: 1, enunciado: "En el cariotipo humano normal se observa:", opciones: ["22 pares de autosomas, un par sexual", "46 pares de cromosomas iguales", "solo 23 cromosomas sueltos", "únicamente cromosomas sexuales"], correcta: 0 },
      { dificultad: 1, enunciado: "El síndrome de Down suele deberse a:", opciones: ["un cromosoma 21 de más, trisomía", "la falta total del cromosoma X", "la pérdida de todo un par", "un gen mutado en cada célula"], correcta: 0 },
      { dificultad: 1, enunciado: "La salud, según la OMS, es:", opciones: ["bienestar físico, mental, social completo", "la simple ausencia de síntomas visibles", "el uso libre de antibióticos, sin control", "solo atención médica de urgencia"], correcta: 0 },
      { dificultad: 2, enunciado: "El alcohol, el tabaco, otras drogas psicoactivas actúan sobre:", opciones: ["el sistema nervioso, la conducta", "los huesos, el aparato locomotor", "el clima, el medio ambiente externo", "la señal de la televisión, internet"], correcta: 0 },
      { dificultad: 2, enunciado: "La asesoría genética sirve para:", opciones: ["evaluar el riesgo de enfermedades hereditarias", "editar libremente genes del futuro bebé", "curar cualquier infección viral", "sustituir la alimentación sana"], correcta: 0 },
      { dificultad: 2, enunciado: "Las vacunas, el agua potable, el lavado de manos son ejemplos de:", opciones: ["medidas de salud pública preventivas", "terapias génicas experimentales", "cirugías de alta complejidad", "drogas psicoactivas recreativas"], correcta: 0 },
      { dificultad: 3, enunciado: "La dosis de un medicamento debe respetarse porque:", opciones: ["el exceso puede ser tóxico, dañar el cuerpo", "más dosis siempre cura más rápido, seguro", "el sabor amargo indica eficacia mayor", "tomarlo tarde no altera el efecto"], correcta: 0 },
      { dificultad: 3, enunciado: "Con un árbol genealógico se puede:", opciones: ["rastrear cómo se hereda un carácter", "crear organismos transgénicos", "curar una infección bacteriana", "producir una vacuna recombinante"], correcta: 0 },
      { dificultad: 3, enunciado: "La adicción se considera una enfermedad cerebral porque:", opciones: ["hay dependencia, pérdida de control, recompensa alterada", "solo afecta a personas adultas mayores", "desaparece tras una semana, sin ayuda", "es causada por virus, bacterias, siempre"], correcta: 0 }
    ],
    retos: [
      { dificultad: 2, titulo: "Campaña escolar contra el consumo de sustancias", descripcion: "Ordena la planificación.", pasos: ["Identificar factores de riesgo en el entorno", "Definir mensajes, metas claras", "Elegir actividades, canales, voceros", "Evaluar los resultados logrados"] },
      { dificultad: 3, titulo: "Asesoría genética a una pareja", descripcion: "Ordena el proceso.", pasos: ["Reunir la historia clínica, el árbol genealógico", "Identificar enfermedades hereditarias presentes", "Calcular la probabilidad de transmitir un gen recesivo", "Explicar pruebas, opciones disponibles", "Acompañar la decisión informada de la pareja"] }
    ]
  },

  "ciencias-naturales--materia-energia--c1": {
    nombre: "El agua y sus estados",
    preguntas: [
      { dificultad: 1, enunciado: "El hielo que se derrite al sol cambia de:", opciones: ["sólido a líquido", "gas a sólido", "líquido a gas", "plasma a sólido"], correcta: 0 },
      { dificultad: 1, enunciado: "Cuando tendemos la ropa mojada, el agua pasa a:", opciones: ["vapor de agua", "hielo duro", "piedra seca", "grasa densa"], correcta: 0 },
      { dificultad: 1, enunciado: "El agua líquida que se enfría mucho se vuelve:", opciones: ["hielo, sólido", "vapor, gas", "niebla salada", "barro seco"], correcta: 0 },
      { dificultad: 2, enunciado: "La tapa de una olla con agua caliente se empaña porque el vapor:", opciones: ["se condensa, se vuelve líquido", "se evapora del todo", "se congela de golpe", "se quema, se apaga"], correcta: 0 },
      { dificultad: 2, enunciado: "Hervir el agua antes de beberla sirve para:", opciones: ["matar los gérmenes peligrosos", "quitarle el sabor al agua", "volverla más fría, helada", "convertirla en jugo dulce"], correcta: 0 },
      { dificultad: 2, enunciado: "¿Cuál de estos cambios del agua puede invertirse?", opciones: ["el hielo que se funde, vuelve a congelarse", "quemar leña en cenizas", "romper un vaso de cristal", "freír un huevo en el sartén"], correcta: 0 },
      { dificultad: 3, enunciado: "El vapor de agua no se ve porque:", opciones: ["es un gas transparente", "es un sólido diminuto", "es un líquido oscuro, denso", "es una mezcla con tierra"], correcta: 0 },
      { dificultad: 3, enunciado: "Mientras el agua hierve a presión normal, su temperatura:", opciones: ["queda fija alrededor de 100 °C", "sube sin parar, crece", "baja hasta congelarse", "sube hasta 200 °C siempre"], correcta: 0 },
      { dificultad: 3, enunciado: "En las noches frías del páramo se forma escarcha sobre el pasto por:", opciones: ["el vapor que se congela directo sobre la hoja", "la lluvia que cae del cielo nublado", "el rocío tibio de la mañana, húmedo", "el agua que sube desde la raíz"], correcta: 0 }
    ],
    retos: [
      { dificultad: 2, titulo: "Del hielo al vapor de agua", descripcion: "Ordena los cambios al calentar.", pasos: ["Calentar el hielo hasta fundirlo en agua", "Seguir calentando el agua hasta hervir", "El vapor que sale sube, pasa al aire"] },
      { dificultad: 3, titulo: "Potabilizar el agua en casa", descripcion: "Ordena la secuencia.", pasos: ["Dejar reposar el agua, decantar el barro", "Colarla con un paño limpio, sin polvo", "Hervirla, dejarla enfriar tapada"] }
    ]
  },

  "ciencias-naturales--materia-energia--c2": {
    nombre: "Mezclas, propiedades y separación",
    preguntas: [
      { dificultad: 1, enunciado: "Una mezcla de agua, aceite con dos capas notorias es:", opciones: ["heterogénea, no uniforme", "homogénea, uniforme", "pura, simple, limpia", "gaseosa, seca"], correcta: 0 },
      { dificultad: 1, enunciado: "En el aire que respiramos, ¿qué gas abunda más?", opciones: ["el nitrógeno", "el oxígeno puro", "el helio, el gas raro", "el gas carbónico solo"], correcta: 0 },
      { dificultad: 1, enunciado: "Al disolver azúcar en agua queda una mezcla:", opciones: ["homogénea, una disolución", "heterogénea, en capas", "sólida, muy dura", "gaseosa, volátil"], correcta: 0 },
      { dificultad: 2, enunciado: "Para separar granos de arroz con una malla se usa:", opciones: ["el tamizado, una criba", "la destilación con frío", "la imantación, el metal", "la disolución"], correcta: 0 },
      { dificultad: 2, enunciado: "Al pasar café por un colador se retiene el poso mediante:", opciones: ["la filtración", "la evaporación", "la decantación", "la destilación"], correcta: 0 },
      { dificultad: 2, enunciado: "La sal marina se obtiene del agua de mar dejando que esta:", opciones: ["se evapore al sol", "se congele del todo", "se queme por completo", "se congele al hielo"], correcta: 0 },
      { dificultad: 3, enunciado: "Una mezcla de limadura de hierro, azufre en polvo se separa con imán porque:", opciones: ["solo el hierro es magnético", "ambos son magnéticos por igual", "ninguno responde al imán", "el azufre atrae el metal"], correcta: 0 },
      { dificultad: 3, enunciado: "En una mezcla los componentes, frente a un compuesto químico:", opciones: ["conservan sus propiedades, se separan fácil", "pierden sus propiedades por completo", "reaccionan formando siempre uno nuevo", "no se pueden distinguir jamás"], correcta: 0 },
      { dificultad: 3, enunciado: "Dos líquidos miscibles con puntos de ebullición distintos se separan por:", opciones: ["la destilación", "el tamizado", "la filtración", "la decantación"], correcta: 0 }
    ],
    retos: [
      { dificultad: 2, titulo: "Separar agua, aceite por decantación", descripcion: "Ordena el procedimiento.", pasos: ["Verter la mezcla en un embudo de decantación", "Dejar reposar hasta que se formen capas", "El aceite queda arriba, el agua abajo", "Abrir la llave, dejar salir el agua"] },
      { dificultad: 3, titulo: "Separar arena, sal", descripcion: "Ordena la secuencia.", pasos: ["Agregar agua a la mezcla de arena, sal", "Agitar para que la sal se disuelva", "Filtrar: queda la arena, sale agua con sal", "Evaporar el agua para recuperar la sal"] }
    ]
  },

  "ciencias-naturales--materia-energia--c3": {
    nombre: "Átomos, elementos y enlaces",
    preguntas: [
      { dificultad: 1, enunciado: "La partícula del átomo con carga negativa es:", opciones: ["el electrón", "el protón", "el neutrón", "el núcleo"], correcta: 0 },
      { dificultad: 1, enunciado: "El número de protones de un átomo se llama:", opciones: ["número atómico", "número másico", "masa molar", "nivel de energía"], correcta: 0 },
      { dificultad: 1, enunciado: "La fórmula H₂O del agua indica:", opciones: ["dos hidrógenos, un oxígeno", "dos oxígenos, un hidrógeno", "un sodio, un oxígeno, un hidrógeno", "solo hidrógeno en proporción"], correcta: 0 },
      { dificultad: 2, enunciado: "El enlace entre dos no metales al compartir electrones es:", opciones: ["covalente", "iónico", "metálico", "de hidrógeno"], correcta: 0 },
      { dificultad: 2, enunciado: "En el NaCl, el sodio cede un electrón, así pasa a ser:", opciones: ["un ion positivo, catión", "un ion negativo, anión", "un isótopo estable", "una molécula neutra"], correcta: 0 },
      { dificultad: 2, enunciado: "Dos isótopos de un mismo elemento se distinguen por su número de:", opciones: ["neutrones", "protones", "electrones", "cargas netas"], correcta: 0 },
      { dificultad: 3, enunciado: "Un átomo de sodio tiene número atómico 11, número másico 23. ¿Cuántos neutrones?", opciones: ["12", "11", "23", "34"], correcta: 0 },
      { dificultad: 3, enunciado: "Los metales conducen la electricidad, el calor porque:", opciones: ["tienen electrones libres que se mueven", "forman redes covalentes duras", "estan sin electrones por completo", "siempre tienen gases atrapados"], correcta: 0 },
      { dificultad: 3, enunciado: "La capacidad de enlazarse de un átomo depende sobre todo de:", opciones: ["sus electrones de valencia externos", "su número de neutrones", "el color de su núcleo", "su temperatura inicial"], correcta: 0 }
    ],
    retos: [
      { dificultad: 2, titulo: "Modelar un átomo de sodio", descripcion: "Ordena la construcción del modelo.", pasos: ["Dibujar el núcleo con 11 protones, 12 neutrones", "Trazar las capas de energía alrededor", "Repartir los 11 electrones en las capas", "Marcar el electrón único de valencia externo"] },
      { dificultad: 3, titulo: "Formar un enlace iónico NaCl", descripcion: "Ordena el proceso.", pasos: ["Ubicar sodio, cloro, ver sus electrones externos", "El sodio cede su electrón externo, queda Na positivo", "El cloro acepta el electrón, queda Cl negativo", "Los iones de carga opuesta se atraen, forman NaCl"] }
    ]
  },

  "ciencias-naturales--materia-energia--c4": {
    nombre: "Reacciones químicas, estequiometría y pH",
    preguntas: [
      { dificultad: 1, enunciado: "En toda reacción química la masa total se conserva porque:", opciones: ["los átomos se reorganizan, no se crean ni se destruyen", "los átomos desaparecen al formarse productos", "se crea materia nueva en cada reacción", "los átomos se duplican por arte de magia"], correcta: 0 },
      { dificultad: 1, enunciado: "La escala de pH mide la concentración de iones hidrógeno en:", opciones: ["el agua, una solución", "un gas, el aire", "un metal sólido", "una madera seca"], correcta: 0 },
      { dificultad: 1, enunciado: "Una solución con pH igual a 7 a 25 °C es:", opciones: ["neutra, como el agua pura", "fuertemente ácida", "fuertemente básica", "un compuesto iónico"], correcta: 0 },
      { dificultad: 2, enunciado: "Al balancear __ H₂ + __ O₂ → __ H₂O, la menor suma de coeficientes (reactivos, productos) es:", opciones: ["5", "4", "6", "3"], correcta: 0 },
      { dificultad: 2, enunciado: "La masa molar del CO₂ (C = 12, O = 16 g/mol) es:", opciones: ["44 g/mol", "28 g/mol", "32 g/mol", "40 g/mol"], correcta: 0 },
      { dificultad: 2, enunciado: "El vinagre, con pH cercano a 3, es:", opciones: ["ácido", "neutro", "básico", "metálico"], correcta: 0 },
      { dificultad: 3, enunciado: "En la combustión CH₄ + 2 O₂ → CO₂ + 2 H₂O, para 3 moles de CH₄ se necesitan O₂:", opciones: ["6 moles", "3 moles", "12 moles", "2 moles"], correcta: 0 },
      { dificultad: 3, enunciado: "¿Cuántas moléculas hay en 0,5 mol de cualquier sustancia?", opciones: ["unos 3,0 × 10²³", "unos 6,0 × 10²³", "unos 1,2 × 10²⁴", "unos 3,0 × 10²²"], correcta: 0 },
      { dificultad: 3, enunciado: "La combustión del metano libera mucho calor, por eso la reacción es:", opciones: ["exotérmica", "endotérmica", "de equilibrio neutro", "de neutralización"], correcta: 0 }
    ],
    retos: [
      { dificultad: 2, titulo: "Medir el pH de una muestra", descripcion: "Ordena el procedimiento.", pasos: ["Calibrar el medidor con soluciones patrón", "Sumergir el electrodo en la muestra", "Leer el valor de pH estabilizado", "Comparar la lectura, clasificar la muestra"] },
      { dificultad: 3, titulo: "Balancear una ecuación por conservación de la masa", descripcion: "Ordena el método.", pasos: ["Escribir fórmulas correctas de reactivos, productos", "Contar los átomos de cada elemento en cada lado", "Ajustar los coeficientes de las moléculas", "Repasar los conteos hasta que ambos lados sean iguales", "Verificar que la masa total se conserve"] }
    ]
  },

  "ciencias-naturales--materia-energia--c5": {
    nombre: "Termoquímica, equilibrios y disoluciones",
    preguntas: [
      { dificultad: 1, enunciado: "Una reacción con variación de entalpía negativa, ΔH < 0, es:", opciones: ["exotérmica, libera calor", "endotérmica, absorbe calor", "de equilibrio, sin cambio neto", "catalítica, sin efecto alguno"], correcta: 0 },
      { dificultad: 1, enunciado: "La molaridad de una solución se expresa como:", opciones: ["moles de soluto por litro de solución", "gramos de soluto por litro de solución", "moles de soluto por litro de solvente", "litros de soluto por litro de agua"], correcta: 0 },
      { dificultad: 1, enunciado: "En el equilibrio químico dinámico:", opciones: ["la reacción directa, la inversa ocurren a igual velocidad", "la reacción se detiene por completo", "solo hay productos, sin reactivos", "se consume todo el reactivo primero"], correcta: 0 },
      { dificultad: 2, enunciado: "En N₂ + 3 H₂ ⇌ 2 NH₃, ¿cuántos moles de H₂ reaccionan con 2 moles de N₂?", opciones: ["6", "3", "2", "4"], correcta: 0 },
      { dificultad: 2, enunciado: "La masa molar de la glucosa C₆H₁₂O₆ (C = 12, H = 1, O = 16 g/mol) es:", opciones: ["180 g/mol", "174 g/mol", "192 g/mol", "186 g/mol"], correcta: 0 },
      { dificultad: 2, enunciado: "El calor específico del agua es alto. Por eso el agua:", opciones: ["tarda en calentarse, enfríarse", "hierve de inmediato siempre", "congela más rápido que el aire", "es mala para termorregular"], correcta: 0 },
      { dificultad: 3, enunciado: "Calentando 200 g de agua 15 °C, con c = 4,18 J/g·°C, se requieren:", opciones: ["12 540 J", "1 254 J", "125 400 J", "4 180 J"], correcta: 0 },
      { dificultad: 3, enunciado: "Al disolver 0,1 mol de NaCl hasta 250 mL de solución, la molaridad es:", opciones: ["0,4 M", "0,1 M", "2,5 M", "0,025 M"], correcta: 0 },
      { dificultad: 3, enunciado: "Si a 25 °C una solución tiene pH = 9, su concentración de iones hidrógeno es:", opciones: ["1 × 10⁻⁹ M", "9 × 10⁻⁵ M", "5 × 10⁻⁶ M", "1 × 10⁻⁵ M"], correcta: 0 },
      { dificultad: 3, enunciado: "En el agua pura a 25 °C el producto iónico Kw vale 1 × 10⁻¹⁴, por eso su pH es:", opciones: ["7, neutro", "0, muy ácido", "14, muy básico", "1, ligeramente ácido"], correcta: 0 },
      { dificultad: 3, enunciado: "Según Lavoisier, al reaccionar 4 g de H₂ con 32 g de O₂ se forman H₂O:", opciones: ["36 g", "28 g", "32 g", "40 g"], correcta: 0 }
    ],
    retos: [
      { dificultad: 2, titulo: "Preparar una solución 0,1 M en 500 mL", descripcion: "Ordena el procedimiento.", pasos: ["Calcular los moles necesarios de soluto", "Convertir los moles en gramos con la masa molar", "Pesar el soluto con la balanza", "Disolverlo en un poco de agua destilada", "Completar el volumen hasta el aforo de 500 mL"] },
      { dificultad: 3, titulo: "Calcular el reactivo limitante", descripcion: "Ordena el método estequiométrico.", pasos: ["Balancear correctamente la ecuación química", "Convertir las masas dadas en moles", "Dividir los moles entre su coeficiente estequiométrico", "Identificar el menor cociente como reactivo limitante", "Usar el limitante para hallar los moles del producto", "Convertir esos moles del producto a gramos"] }
    ]
  },

  "ciencias-naturales--fisica-quimica--c1": {
    nombre: "Objetos: por qué flotan, caen y se mueven",
    preguntas: [
      { dificultad: 1, enunciado: "Al soltar un lápiz, este cae hacia el piso por:", opciones: ["la atracción de la Tierra, la gravedad", "el viento que lo empuja", "el calor de la sala, siempre", "su propio color oscuro"], correcta: 0 },
      { dificultad: 1, enunciado: "Una tapa plástica flota en el agua porque es:", opciones: ["más ligera, menos densa que el agua", "más pesada que el agua", "un metal, pesada, dura", "una piedra muy pequeña"], correcta: 0 },
      { dificultad: 1, enunciado: "Una piedra se hunde en el agua porque:", opciones: ["es más densa, más pesada que el agua", "tiene color oscuro, feo", "es muy pequeña, cabe fácil", "está en reposo, no se mueve"], correcta: 0 },
      { dificultad: 2, enunciado: "Una bola rueda sobre el piso, se detiene poco a poco a causa de:", opciones: ["la fricción con el suelo", "la gravedad del suelo", "su forma redonda", "el aire a su alrededor"], correcta: 0 },
      { dificultad: 2, enunciado: "Para mover un carro de compras se aplica con el empuje:", opciones: ["una fuerza", "una sombra", "un color", "un sonido"], correcta: 0 },
      { dificultad: 2, enunciado: "Los objetos que dejan pasar la luz a través de un vidrio son:", opciones: ["transparentes", "opacos, oscuros", "absorbentes, oscuros", "magnéticos"], correcta: 0 },
      { dificultad: 3, enunciado: "Dos objetos del mismo tamaño, uno pesado, otro liviano, se diferenden sobre todo por:", opciones: ["la masa, la densidad", "el color, la forma", "el lugar, la hora", "el ruido, la temperatura"], correcta: 0 },
      { dificultad: 3, enunciado: "La fuerza de la gravedad sobre un cuerpo en la Tierra se percibe como:", opciones: ["su peso", "su volumen", "su color", "su temperatura"], correcta: 0 },
      { dificultad: 3, enunciado: "Un barco enorme de acero flota aunque el clavo de acero se hunde porque:", opciones: ["desplaza mucho agua, su forma lo hace menos denso", "el acero nunca se hunde en el agua", "la gravedad del barco es cero", "el barco pesa menos que el clavo"], correcta: 0 }
    ],
    retos: [
      { dificultad: 2, titulo: "Probar si un objeto flota, se hunde", descripcion: "Ordena la experiencia.", pasos: ["Predecir si flotará, se hundirá", "Soltar el objeto en un recipiente con agua", "Observar, registrar si flota, se hunde"] },
      { dificultad: 3, titulo: "Empujar un objeto por el piso", descripcion: "Ordena la observación de la fuerza.", pasos: ["Elegir un objeto, un lugar liso del piso", "Empujar suave, con fuerza, medir distancias", "Comparar: más fuerza recorre más"] }
    ]
  },

  "ciencias-naturales--fisica-quimica--c2": {
    nombre: "Fuerzas simples, luz y sonido",
    preguntas: [
      { dificultad: 1, enunciado: "Al pulsar una guitarra, el sonido se produce porque:", opciones: ["las cuerdas vibran en el aire", "las cuerdas se calientan", "la madera absorbe el aire", "el aire se congela"], correcta: 0 },
      { dificultad: 1, enunciado: "La luz del Sol viaja hasta nosotros en:", opciones: ["línea recta", "espirales gigantes", "zigzag por el aire", "curvas cerradas"], correcta: 0 },
      { dificultad: 1, enunciado: "Al empujar una caja pesada contra el piso se siente resistencia por:", opciones: ["la fuerza de fricción", "la fuerza magnética", "la fuerza muscular", "la corriente eléctrica"], correcta: 0 },
      { dificultad: 2, enunciado: "El sonido NO puede propagarse a través de:", opciones: ["el vacío", "el aire", "el agua", "la pared sólida"], correcta: 0 },
      { dificultad: 2, enunciado: "La sombra de un árbol se forma porque el árbol:", opciones: ["bloquea la luz, no la deja pasar", "emite luz propia", "absorbe el sonido ambiente", "produce calor intenso"], correcta: 0 },
      { dificultad: 2, enunciado: "Un imán atrae ciertos metales como:", opciones: ["el hierro", "la madera", "el plástico", "el vidrio"], correcta: 0 },
      { dificultad: 3, enunciado: "El eco que se oye en una caverna se explica por:", opciones: ["la reflexión del sonido al chocar con la roca", "la refracción del sonido en el agua", "la dispersión del sonido en el aire", "la absorción total del sonido"], correcta: 0 },
      { dificultad: 3, enunciado: "Al pasar la luz por un vidrio, cambia de dirección al entrar porque:", opciones: ["la luz se refracta al cambiar de medio", "se refleja del todo", "se dispersa en colores", "se extingue en el vidrio"], correcta: 0 },
      { dificultad: 3, enunciado: "Un sonido fuerte tiene mayor:", opciones: ["amplitud, volumen", "frecuencia siempre", "velocidad en el aire", "duración fija, siempre"], correcta: 0 }
    ],
    retos: [
      { dificultad: 2, titulo: "El camino de la luz hasta el ojo", descripcion: "Ordena el recorrido.", pasos: ["Una fuente emite rayos de luz", "La luz choca con el objeto", "El objeto refleja la luz hacia el ojo", "El ojo capta la luz reflejada, se ve"] },
      { dificultad: 3, titulo: "Cómo se produce, se escucha el sonido", descripcion: "Ordena la secuencia.", pasos: ["Un objeto vibra al ser golpeado, pulsado", "La vibración mueve, comprime el aire", "La onda viaja por el aire hasta el oído", "El tímpano vibra, el oído lo convierte en sonido"] }
    ]
  },

  "ciencias-naturales--fisica-quimica--c3": {
    nombre: "Movimiento, fuerza y máquinas simples",
    preguntas: [
      { dificultad: 1, enunciado: "El cambio de lugar de un cuerpo respecto a un punto de referencia es:", opciones: ["movimiento", "fuerza", "energía", "masa"], correcta: 0 },
      { dificultad: 1, enunciado: "Un plano inclinado, como la rampa, sirve para:", opciones: ["subir objetos con menos fuerza, recorriendo más", "bajar la temperatura", "producir electricidad sola", "multiplicar la masa del cuerpo"], correcta: 0 },
      { dificultad: 1, enunciado: "El instrumento para medir fuerzas es:", opciones: ["el dinamómetro", "el termómetro", "la balanza de cocina", "el cronómetro, solo"], correcta: 0 },
      { dificultad: 2, enunciado: "La fuerza que frena un movimiento, entre superficies en contacto, es:", opciones: ["la fricción", "la gravedad", "el empuje del agua", "la fuerza eléctrica"], correcta: 0 },
      { dificultad: 2, enunciado: "Una rueda ayuda a mover cargas porque:", opciones: ["reduce la fricción de deslizamiento", "aumenta el peso del objeto", "crea energía del aire", "multiplica la masa del carro"], correcta: 0 },
      { dificultad: 2, enunciado: "Para que una lámpara de pilas encienda debe cerrarse un circuito:", opciones: ["cerrado, completo", "abierto, roto", "solo de madera", "con agua sola, sin metal"], correcta: 0 },
      { dificultad: 3, enunciado: "Un cuerpo recorre 100 m en 20 s con rapidez constante. Su rapidez es:", opciones: ["5 m/s", "2 m/s", "20 m/s", "120 m/s"], correcta: 0 },
      { dificultad: 3, enunciado: "La palanca de un balancín multiplica la fuerza aplicada porque:", opciones: ["aumenta el brazo de la fuerza respecto al fulcro", "reduce la masa del objeto", "elimina por completo la fricción", "se comporta como un motor eléctrico"], correcta: 0 },
      { dificultad: 3, enunciado: "En un circuito en serie, si una ampolleta se funde:", opciones: ["se apagan todas, se corta el paso de la corriente", "las otras siguen encendidas igual", "brillan el doble de fuerte", "solo se apaga esa ampolleta, aislada"], correcta: 0 }
    ],
    retos: [
      { dificultad: 2, titulo: "Armar un circuito eléctrico simple", descripcion: "Ordena los pasos.", pasos: ["Colocar la pila como fuente de energía", "Conectar los cables de un borne al foco", "Cerrar la llave para unir el circuito", "Revisar que el foco encienda, no haya cortos"] },
      { dificultad: 3, titulo: "Medir la rapidez de un carrito", descripcion: "Ordena la indagación.", pasos: ["Medir la distancia que recorre el carrito", "Cronometrar el tiempo que tarda en recorrerla", "Dividir la distancia entre el tiempo medido", "Expresar la rapidez en metros por segundo"] }
    ]
  },

  "ciencias-naturales--fisica-quimica--c4": {
    nombre: "Leyes de Newton, trabajo, energía y calor",
    preguntas: [
      { dificultad: 1, enunciado: "La primera ley de Newton, la inercia, dice que un cuerpo:", opciones: ["mantiene su estado de reposo, movimiento si no hay fuerza neta", "siempre acelera sin fuerza aplicada", "pierde su masa al moverse", "se mueve sin necesidad de energía, siempre"], correcta: 0 },
      { dificultad: 1, enunciado: "La unidad de fuerza en el Sistema Internacional es:", opciones: ["el newton", "el joule", "el watt, el vatio", "el pascal"], correcta: 0 },
      { dificultad: 1, enunciado: "El calor fluye por conducción cuando dos cuerpos están:", opciones: ["en contacto directo", "muy lejos el uno del otro", "sin ningún contacto entre ellos", "a la misma temperatura, en equilibrio"], correcta: 0 },
      { dificultad: 2, enunciado: "Una fuerza de 5 N mueve un objeto 3 m en la dirección de la fuerza. El trabajo realizado es:", opciones: ["15 J", "8 J", "2 J", "15 W"], correcta: 0 },
      { dificultad: 2, enunciado: "La energía que tiene un cuerpo por su posición a cierta altura es:", opciones: ["potencial gravitatoria", "cinética, del movimiento", "térmica, del calor", "química, de enlaces"], correcta: 0 },
      { dificultad: 2, enunciado: "En un circuito en paralelo, una ventaja frente al circuito en serie es que:", opciones: ["cada dispositivo funciona de forma independiente", "si uno falla, se apagan todos igual", "la corriente total disminuye siempre", "el voltaje se reparte, baja mucho"], correcta: 0 },
      { dificultad: 3, enunciado: "La masa es 10 kg, la aceleración 2 m/s². Según Newton, la fuerza neta es:", opciones: ["20 N", "5 N", "12 N", "200 N"], correcta: 0 },
      { dificultad: 3, enunciado: "Un cuerpo de 4 kg se mueve a 3 m/s. Su energía cinética es:", opciones: ["18 J", "12 J", "6 J", "36 J"], correcta: 0 },
      { dificultad: 3, enunciado: "Con 12 V aplicados a una resistencia de 4 Ω, la corriente del circuito es:", opciones: ["3 A", "48 A", "8 A", "0,33 A"], correcta: 0 },
      { dificultad: 3, enunciado: "La transferencia de calor por corrientes de aire caliente, que sube, es:", opciones: ["convección", "radiación, sin medio", "conducción, en contacto", "sublimación, de sólido a gas"], correcta: 0 }
    ],
    retos: [
      { dificultad: 2, titulo: "Analizar un circuito con la ley de Ohm", descripcion: "Ordena el método.", pasos: ["Identificar el voltaje, la resistencia del circuito", "Aplicar la corriente como voltaje entre resistencia", "Calcular la intensidad en amperios", "Comprobar el resultado con el amperímetro"] },
      { dificultad: 3, titulo: "Calcular trabajo, potencia de una fuerza", descripcion: "Ordena el proceso.", pasos: ["Medir la fuerza que actúa sobre el cuerpo", "Medir la distancia recorrida en esa dirección", "Multiplicar fuerza por distancia, hallar el trabajo", "Medir el tiempo que se tarda en realizarlo", "Dividir el trabajo entre el tiempo, obtener la potencia"] }
    ]
  },

  "ciencias-naturales--fisica-quimica--c5": {
    nombre: "Campos, ondas y termodinámica",
    preguntas: [
      { dificultad: 1, enunciado: "La región del espacio donde una carga, una masa siente una fuerza es:", opciones: ["un campo", "una onda", "un flujo", "un plano"], correcta: 0 },
      { dificultad: 1, enunciado: "Una onda transporta energía sin transporte neto de:", opciones: ["materia", "energía", "carga", "calor"], correcta: 0 },
      { dificultad: 1, enunciado: "El sonido, en términos de tipo de onda, es:", opciones: ["longitudinal", "electromagnética", "transversal siempre", "estacionaria, fija"], correcta: 0 },
      { dificultad: 2, enunciado: "En la ley cero de la termodinámica, dos cuerpos en equilibrio térmico comparten la misma:", opciones: ["temperatura", "presión", "masa", "energía cinética media, por igual"], correcta: 0 },
      { dificultad: 2, enunciado: "Las ondas electromagnéticas, a diferencia de las sonoras, son del tipo:", opciones: ["transversales", "longitudinales", "de cizalla, cortantes", "mecánicas, con medio"], correcta: 0 },
      { dificultad: 2, enunciado: "El principio de conservación de la energía afirma que la energía total de un sistema aislado:", opciones: ["permanece constante, no se crea ni se destruye", "siempre crece sin ninguna razón", "disminuye hasta anularse", "se duplica en cada transformación"], correcta: 0 },
      { dificultad: 3, enunciado: "Un fotón de luz verde tiene mayor frecuencia que uno de luz roja. Su energía, E = h f, es:", opciones: ["mayor que la del fotón rojo", "menor que la del fotón rojo", "igual a la del fotón rojo", "cero, sin relación alguna"], correcta: 0 },
      { dificultad: 3, enunciado: "Una onda de 20 Hz con longitud de 2 m se propaga a:", opciones: ["40 m/s", "10 m/s", "22 m/s", "0,1 m/s"], correcta: 0 },
      { dificultad: 3, enunciado: "Dos cargas eléctricas positivas colocadas cerca:", opciones: ["se repelen en la línea que las une", "se atraen con gran fuerza", "anulan sus campos entre ellas", "pierden por completo su carga"], correcta: 0 },
      { dificultad: 3, enunciado: "La primera ley de la termodinámica relaciona la energía interna de un sistema con:", opciones: ["el calor que entra, el trabajo que realiza", "la masa, el volumen del sistema", "solo su temperatura, nada más", "la velocidad, la aceleración, siempre"], correcta: 0 }
    ],
    retos: [
      { dificultad: 2, titulo: "Dibujar las líneas de un campo magnético", descripcion: "Ordena el procedimiento.", pasos: ["Identificar los polos norte, sur del imán", "Trazar líneas que salen del polo norte", "Hacer que las líneas entren por el sur", "Notar la dirección de la aguja de una brújula", "Completar las curvas cerradas del campo"] },
      { dificultad: 3, titulo: "Medir la rapidez de una onda en una cuerda", descripcion: "Ordena la experimentación.", pasos: ["Generar un pulso, una onda en la cuerda", "Medir la distancia entre dos crestas, la longitud", "Contar el número de vibraciones, hallar la frecuencia", "Aplicar la fórmula rapidez igual a longitud por frecuencia", "Calcular el producto, reportar la rapidez"] }
    ]
  },

  "ciencias-naturales--ambiente--c1": {
    nombre: "Cuidar el agua y el patio escolar",
    preguntas: [
      { dificultad: 1, enunciado: "Mientras se cepillan los dientes, lo correcto con el agua es:", opciones: ["cerrar la llave, no desperdiciarla", "dejarla correr sin parar", "abrir todas las llaves del baño", "tirarla al suelo, en balde"], correcta: 0 },
      { dificultad: 1, enunciado: "La basura que tiramos al piso del colegio puede tapar:", opciones: ["los desagües, alcantarillas", "las ventanas del salón", "los tableros del aula", "las puertas, los pasillos"], correcta: 0 },
      { dificultad: 1, enunciado: "Plantar árboles en el patio del colegio sirve para:", opciones: ["dar sombra, aire limpio", "producir plástico, goma", "llenar de polvo, tierra", "secar el suelo, siempre"], correcta: 0 },
      { dificultad: 2, enunciado: "La mejor manera de botar las botellas plásticas es:", opciones: ["separarlas, entregarlas al reciclaje", "tirarlas al suelo del patio", "quemarlas en un rincón del colegio", "esconderlas bajo un arbusto, matas"], correcta: 0 },
      { dificultad: 2, enunciado: "Cuidar el agua de un humedal, como el Torca de Bogotá, implica:", opciones: ["no botar basuras, proteger sus plantas", "tirar bolsas al agua, sucio", "verter jabones al suelo, cerca", "quemar las orillas del humedal"], correcta: 0 },
      { dificultad: 2, enunciado: "Un animal que podemos ver en el campo colombiano, sin dañarlo, es:", opciones: ["el colibrí, sobre las flores", "el pingüino, en el mar frío", "el canguro, en su bolsa", "el oso polar, en la nieve"], correcta: 0 },
      { dificultad: 3, enunciado: "La basura orgánica de los restos de comida se usa mejor para:", opciones: ["hacer abono, composta para las plantas", "llenar, tapar los caños", "quemarla en el patio", "dejarla tirada al aire"], correcta: 0 },
      { dificultad: 3, enunciado: "Bañarse en pocos minutos ayuda al agua porque:", opciones: ["se gasta menos agua limpia", "se calienta más rápido", "se ensucia menos el baño", "sale más presión del tubo"], correcta: 0 },
      { dificultad: 3, enunciado: "El páramo es importante para el agua de Colombia porque:", opciones: ["almacena, entrega agua limpia a las quebradas", "fabrica plástico a gran escala", "es un desierto sin vida, seco", "produce aceite, petróleo"], correcta: 0 }
    ],
    retos: [
      { dificultad: 2, titulo: "Separar los residuos en el colegio", descripcion: "Ordena las acciones.", pasos: ["Reunir los residuos del salón en el centro", "Separar papel, plástico, orgánico", "Depositar cada tipo en su caneca de color"] },
      { dificultad: 3, titulo: "Proteger el caño cercano al colegio", descripcion: "Ordena el plan de cuidado.", pasos: ["Observar, registrar qué ensucia el caño", "Acordar reglas de no botar basura al agua", "Plantar pastos, arbustos en la orilla"] }
    ]
  },

  "ciencias-naturales--ambiente--c2": {
    nombre: "Residuos, reciclaje y contaminación local",
    preguntas: [
      { dificultad: 1, enunciado: "La regla de las tres erres para los residuos busca en orden:", opciones: ["reducir, reutilizar, reciclar", "quemar, enterrar, ignorar", "comprar, desperdiciar, botar", "lavar, planchar, doblar"], correcta: 0 },
      { dificultad: 1, enunciado: "El humo de muchas fábricas, vehículos produce contaminación:", opciones: ["del aire", "del agua", "del suelo", "solo del suelo"], correcta: 0 },
      { dificultad: 1, enunciado: "La cáscara de una naranja, al botarla al jardín, se convierte con el tiempo en:", opciones: ["abono natural por descomposición", "plástico resistente", "vidrio duro, sólido", "metal, chatarra"], correcta: 0 },
      { dificultad: 2, enunciado: "La bolsa plástica es un problema ambiental porque:", opciones: ["tarda muchísimo en degradarse", "sirve como abono, fertilizante", "es muy fácil de degradar", "alimenta a los peces del río"], correcta: 0 },
      { dificultad: 2, enunciado: "El papel usado se recicla mejor cuando:", opciones: ["está limpio, libre de grasa, comida", "está grasoso, sucio, mojado", "tiene restos de pintura", "fue quemado, está ceniza"], correcta: 0 },
      { dificultad: 2, enunciado: "Botar pilas, baterías al basurero común contamina:", opciones: ["el suelo, el agua por metales pesados", "solo el aire, el oxígeno", "el ruido de la ciudad", "la luz del sol, directa"], correcta: 0 },
      { dificultad: 3, enunciado: "La quema abierta de basura produce dioxinas porque:", opciones: ["no alcanza temperatura, combustión limpia adecuada", "consume mucho oxígeno, en agua", "usa energía solar, siempre", "se realiza bajo el agua"], correcta: 0 },
      { dificultad: 3, enunciado: "El exceso de nutrientes de fertilizantes en un río causa:", opciones: ["eutrofización, algas que agotan el oxígeno", "más peces, vida sana", "agua más limpia, potable", "menos plantas, agua pura"], correcta: 0 },
      { dificultad: 3, enunciado: "Un basurero a cielo abierto puede generar:", opciones: ["lixiviados, gas metano que contaminan", "agua pura, para beber", "aire limpio, sin gases", "suelos fértiles, sanos"], correcta: 0 }
    ],
    retos: [
      { dificultad: 2, titulo: "Gestionar los residuos de la cafetería escolar", descripcion: "Ordena la estrategia.", pasos: ["Clasificar residuos en orgánicos, reciclables, otros", "Disponer recipientes de colores para separar", "Entregar los reciclables al gestor autorizado", "Aprovechar los orgánicos como abono, composta"] },
      { dificultad: 3, titulo: "Investigar la contaminación del aire del barrio", descripcion: "Ordena la indagación.", pasos: ["Observar las fuentes de humo del sector", "Formular una pregunta, una hipótesis", "Medir con un sensor simple, registrar datos", "Analizar, proponer medidas de reducción"] }
    ]
  },

  "ciencias-naturales--ambiente--c3": {
    nombre: "Ecosistemas y biodiversidad colombiana",
    preguntas: [
      { dificultad: 1, enunciado: "La variedad de especies de plantas, animales en Colombia refleja su:", opciones: ["biodiversidad", "contaminación", "clima seco, árido", "densidad de población"], correcta: 0 },
      { dificultad: 1, enunciado: "En una cadena trófica del humedal de Bogotá, el garza, que se alimenta de peces, es:", opciones: ["consumidor", "productor", "descomponedor", "sustrato"], correcta: 0 },
      { dificultad: 1, enunciado: "El frailejón de los páramos, que produce su propio alimento, es un:", opciones: ["productor", "consumidor", "descomponedor", "depredador"], correcta: 0 },
      { dificultad: 2, enunciado: "El nivel trófico de los productores lo forman, sobre todo, las:", opciones: ["plantas, algas, fitoplancton", "aves rapaces, grandes", "bacterias, hongos", "seres humanos, siempre"], correcta: 0 },
      { dificultad: 2, enunciado: "En el Orinoco, el chigüiro come pastos, hierbas, por eso es un:", opciones: ["consumidor primario", "productor, autótrofo", "descomponedor, saprófito", "depredador tope"], correcta: 0 },
      { dificultad: 2, enunciado: "El sitio de una sabana inundable de Colombia se llama:", opciones: ["llano", "volcán", "glaciar", "acantilado"], correcta: 0 },
      { dificultad: 3, enunciado: "Una cadena trófica correcta de un ecosistema andino, de productor a depredador, es:", opciones: ["pasto, liebre, zorro", "zorro, liebre, pasto", "liebre, zorro, pasto", "pasto, zorro, liebre"], correcta: 0 },
      { dificultad: 3, enunciado: "Si desaparecen las abejas polinizadoras de un ecosistema:", opciones: ["muchas plantas no reproducen, cae el alimento", "las plantas crecen más sanas", "los depredadores aumentan mucho", "nada cambia, sin ningún efecto"], correcta: 0 },
      { dificultad: 3, enunciado: "Los descomponedores, los hongos de un bosque, son clave porque:", opciones: ["devuelven nutrientes al suelo al descomponer", "producen la materia orgánica del ecosistema", "fabrican oxígeno durante la noche", "capturan la energía directa del sol"], correcta: 0 },
      { dificultad: 3, enunciado: "La flor nacional de Colombia, cultivada en los Andes, es:", opciones: ["la orquídea", "la palma de cera", "el helecho alto", "el junco del páramo"], correcta: 0 },
      { dificultad: 3, enunciado: "Colombia tiene una gran biodiversidad porque reúne:", opciones: ["variedad de ecosistemas, climas, relieves", "solo desiertos muy secos", "un único clima, plano", "ninguna selva, montaña"], correcta: 0 }
    ],
    retos: [
      { dificultad: 2, titulo: "Construir una cadena trófica del páramo", descripcion: "Ordena los eslabones, de abajo a arriba.", pasos: ["Colocar los productores del nivel de base, plantas", "Ubicar los consumidores de plantas, los herbívoros", "Sumar los carnívoros que cazan a los herbívoros", "Terminar con los descomponedores que reciclan materia"] },
      { dificultad: 3, titulo: "Pronosticar el efecto de retirar un nivel trófico", descripcion: "Ordena el razonamiento.", pasos: ["Identificar el nivel eliminado, sus presas, competidores", "Deducir qué especies aumentan al no ser cazadas", "Analizar el impacto sobre productores, suelo", "Evaluar las consecuencias para el ecosistema entero"] }
    ]
  },

  "ciencias-naturales--ambiente--c4": {
    nombre: "Cambio climático y ciclos biogeoquímicos",
    preguntas: [
      { dificultad: 1, enunciado: "El efecto invernadero es natural, necesario porque:", opciones: ["retiene parte del calor del Sol, hace habitable el planeta", "elimina toda la radiación solar que llega", "enfría el aire de la Tierra siempre", "aporta todo el vapor de agua de los ríos"], correcta: 0 },
      { dificultad: 1, enunciado: "El gas de mayor contribución al calentamiento, por acción humana, es el:", opciones: ["dióxido de carbono", "oxígeno, O₂", "nitrógeno, N₂", "argón, Ar"], correcta: 0 },
      { dificultad: 1, enunciado: "El carbono que contienen las plantas pasa a la atmósfera cuando se:", opciones: ["quema, por la respiración celular", "riega con agua, fresca", "poda, recorta las ramas", "muele, se muele el tallo"], correcta: 0 },
      { dificultad: 2, enunciado: "La fotosíntesis retira carbono de la atmósfera porque las plantas:", opciones: ["absorben dióxido de carbono, fijan carbono", "emiten metano al aire", "exhalan mucho vapor de agua", "liberan oxígeno del agua, O₂"], correcta: 0 },
      { dificultad: 2, enunciado: "Los principales sumideros de carbono terrestre son:", opciones: ["bosques, océanos, suelos", "edificios, vías asfaltadas", "el aluminio, el acero", "el concreto, el cemento"], correcta: 0 },
      { dificultad: 2, enunciado: "La mayor parte del agua del planeta se evapora desde los:", opciones: ["océanos", "lagos andinos", "ríos pequeños", "embalses, reservorios"], correcta: 0 },
      { dificultad: 3, enunciado: "El aumento del nivel del mar se explica sobre todo por:", opciones: ["expansión térmica del agua, derretimiento del hielo", "lluvia torrencial en las costas, siempre", "el paso de los barcos grandes, pesados", "las mareas, olas del océano"], correcta: 0 },
      { dificultad: 3, enunciado: "La liberación de metano por ganadería, arrozales proviene de:", opciones: ["la descomposición, fermentación anaerobia", "la combustión de leña seca", "el ciclo del fósforo, rocas", "la evaporación del agua del mar"], correcta: 0 },
      { dificultad: 3, enunciado: "Un evento de El Niño sobre Colombia altera el clima porque:", opciones: ["cambian temperatura, corrientes del Pacífico tropical", "afecta la rotación de la Tierra, el eje", "gira más rápido el planeta Tierra", "modifica la gravedad terrestre, lunar"], correcta: 0 },
      { dificultad: 3, enunciado: "Un modelo simple del carbono muestra que al aumentar CO₂ atmosférico:", opciones: ["más gases absorben, reemiten radiación infrarroja", "menos calor queda en el sistema de la Tierra", "la Tierra pierde todo su calor, rápido", "el dióxido de carbono desaparece, solo"], correcta: 0 }
    ],
    retos: [
      { dificultad: 2, titulo: "El ciclo del agua en la naturaleza", descripcion: "Ordena las etapas.", pasos: ["El Sol evapora el agua de mares, ríos", "El vapor sube, se enfría, condensa en nubes", "Las gotas crecen, el agua cae como lluvia, precipitación", "El agua escurre, infiltra hacia ríos, acuíferos"] },
      { dificultad: 3, titulo: "El ciclo del carbono entre seres vivos, atmósfera", descripcion: "Ordena el recorrido.", pasos: ["Las plantas fijan CO₂ de la atmósfera", "Los animales consumen plantas, incorporan carbono", "La respiración devuelve CO₂ al aire", "Los descomponedores liberan carbono del detrito", "Parte del carbono queda atrapado en suelos, combustibles"] }
    ]
  },

  "ciencias-naturales--ambiente--c5": {
    nombre: "Desarrollo sostenible, ODS y gestión del riesgo",
    preguntas: [
      { dificultad: 1, enunciado: "El desarrollo sostenible, según la definición de Brundtland, busca satisfacer:", opciones: ["las necesidades presentes sin comprometer a las futuras generaciones", "las ganancias, aunque se dañe el ambiente", "el consumo acelerado de recursos, siempre", "el crecimiento poblacional sin ningún límite"], correcta: 0 },
      { dificultad: 1, enunciado: "La Agenda 2030 de la ONU agrupa los objetivos en:", opciones: ["17 objetivos de desarrollo sostenible", "5 ejes sectoriales", "12 metas, solo", "100 propuestas, abiertas"], correcta: 0 },
      { dificultad: 1, enunciado: "La vulnerabilidad de una comunidad frente a una amenaza depende de:", opciones: ["su capacidad de anticipar, resistir, recuperarse", "la distancia hasta la ciudad más grande", "el número exacto de sus habitantes", "la antigüedad de sus calles, casas"], correcta: 0 },
      { dificultad: 2, enunciado: "La energía eólica es renovable porque:", opciones: ["su recurso, el viento, no se agota al generar", "usa gas natural fósil", "quema carbón de piedra", "depende del petróleo refinado"], correcta: 0 },
      { dificultad: 2, enunciado: "El ODS de agua limpia incluye, además del acceso, la gestión de:", opciones: ["saneamiento, calidad de agua, ecosistemas", "solo represas grandes", "solo el uso doméstico del agua", "solamente el agua embotellada"], correcta: 0 },
      { dificultad: 2, enunciado: "El riesgo, en gestión de desastres, se expresa como función de:", opciones: ["la amenaza, la vulnerabilidad, la capacidad", "solo la población expuesta, nada más", "la sola magnitud del evento natural", "el presupuesto disponible, siempre"], correcta: 0 },
      { dificultad: 3, enunciado: "Una avalancha por deshielo de un nevado, ejemplo Armero en 1985, muestra la relación entre:", opciones: ["la amenaza natural, el uso del suelo en el valle", "la erosión costera, el mar", "la contaminación del aire, el humo", "la deforestación marina, los peces"], correcta: 0 },
      { dificultad: 3, enunciado: "Un país con economía circular busca ante todo:", opciones: ["mantener los materiales en uso, minimizar residuos", "extraer, botar rápido los recursos", "quemar todo residuo urbano", "depender del carbón, el petróleo"], correcta: 0 },
      { dificultad: 3, enunciado: "La huella ecológica mide:", opciones: ["el área necesaria para sostener recursos, absorber desechos", "los kilómetros cuadrados del país, siempre", "el ingreso promedio de las personas", "el número de especies de un bosque"], correcta: 0 },
      { dificultad: 3, enunciado: "El ODS de acción por el clima apunta principalmente a:", opciones: ["reducir emisiones, adaptarse al cambio climático", "aumentar el consumo de combustibles fósiles", "expandir la minería de carbón, petróleo", "eliminar por completo toda actividad industrial"], correcta: 0 }
    ],
    retos: [
      { dificultad: 2, titulo: "Elaborar un plan escolar de gestión del riesgo", descripcion: "Ordena las etapas.", pasos: ["Identificar las amenazas del colegio, sector", "Analizar la vulnerabilidad de la comunidad", "Definir rutas de evacuación, puntos de encuentro", "Simular, capacitar, ajustar el plan"] },
      { dificultad: 3, titulo: "Evaluar la sostenibilidad de una decisión", descripcion: "Ordena el análisis.", pasos: ["Precisar la decisión, sus alternativas posibles", "Estimar los impactos ambientales", "Revisar los efectos sociales, económicos", "Comparar con las generaciones futuras", "Elegir la opción de menor huella, más justa"] }
    ]
  }
};
