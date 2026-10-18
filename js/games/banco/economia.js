// js/games/banco/economia.js
// Banco de contenido de Ciencias Económicas para la media y la transición de
// noveno (grados octavo a once, ciclos c4 y c5, Ley 115 de 1994, artículo 31).
// Cubre los nueve nodos del catálogo: fundamentos microeconómicos,
// macroeconomía, economía colombiana, finanzas personales y del sistema, y
// escuelas del pensamiento económico. El contexto institucional es Colombia:
// DANE, Banco de la República, Superintendencia Financiera de Colombia,
// Congreso, DIAN y normas de educación financiera.
// Convenciones del formato:
// - La opción correcta va siempre primero y correcta es cero; el juego baraja.
// - Los números y las operaciones se escriben en palabras en los enunciados
//   y en los pasos ("por ciento", "pesos", "mayor que").
// - Las cifras de los ejercicios son ejemplos hipotéticos, nunca datos
//   oficiales atribuidos a una fuente.
// - Retos: pasos en el orden real del proceso, máximo c4 cinco y c5 seis.

export const BANCO = {
  "economia--fundamentos-economia--c4": {
    id: "economia--fundamentos-economia--c4",
    nombre: "Necesidades, bienes, oferta y demanda",
    preguntas: [
      {
        enunciado: "Desde la idea de escasez, la economía estudia:",
        opciones: [
          "Cómo las sociedades administran recursos limitados para satisfacer necesidades que no tienen fin",
          "Cómo imprimir más billetes para que todas las personas tengan dinero",
          "Cómo lograr que las familias dejen de necesitar bienes y servicios",
          "Cómo repartir exactamente el mismo ingreso a cada hogar del país"
        ],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "Alimentarse, vestirse y tener un sitio donde dormir son ejemplos de:",
        opciones: ["necesidades", "bienes libres", "externalidades", "bienes públicos"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "Un bien económico se reconoce porque:",
        opciones: [
          "Es escaso y para obtenerlo hay que asumir un costo",
          "Existe en cantidad ilimitada en la naturaleza y nadie lo paga",
          "Ninguna persona puede quedar excluida de su uso",
          "Solo el Estado puede producirlo y repartirlo"
        ],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "La ley de la demanda afirma que, en condiciones normales, cuando el precio de un bien sube:",
        opciones: [
          "La cantidad que las personas quieren comprar disminuye",
          "La cantidad que las personas quieren comprar aumenta en la misma proporción",
          "El precio deja de influir en las decisiones de compra",
          "Los vendedores ofrecen menos unidades al mismo precio"
        ],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "En la plaza de mercado el precio de la papa sube y doña Rosa compra menos bultos. Este comportamiento muestra:",
        opciones: [
          "La relación inversa entre precio y cantidad demandada",
          "Una falla del sistema financiero vigilado por la Superintendencia Financiera",
          "El efecto de una decisión de política monetaria sobre los salarios",
          "Que la papa es un bien público del municipio"
        ],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Si el costo del transporte sube y los floricultores de la Sabana de Bogotá deben pagar más por llevar las flores, en el corto plazo la oferta de flores:",
        opciones: [
          "Se desplaza hacia arriba y se ofrece menos cantidad al mismo precio",
          "Se desplaza hacia abajo porque el transporte no hace parte de los costos",
          "Se vuelve perfectamente elástica frente al precio",
          "No cambia, pues solo la demanda se afecta con los costos"
        ],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "El precio en el que la cantidad que los compradores piden coincide con la cantidad que los vendedores ofrecen se llama:",
        opciones: [
          "Precio de equilibrio",
          "Costo de transacción",
          "Tasa de cambio de referencia",
          "Excedente del productor"
        ],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Un cuadro de la plaza muestra tres casos: arroz, cuyo precio sube y cuyas ventas casi no bajan; cine, cuyo precio sube y cuyas ventas caen mucho; y sal, con precio estable todo el año. La lectura más defendible del caso del arroz es que:",
        opciones: [
          "Es un bien de primera necesidad con pocos sustitutos cercanos, así que la demanda reacciona poco al precio",
          "Es un artículo de lujo, porque las personas lo compran aunque cueste mucho",
          "Es un bien público, por lo tanto el precio no influye en su consumo",
          "Su demanda es perfectamente elástica frente al ingreso"
        ],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Dos panaderías de un mismo barrio bajan el precio el mismo día: una conserva clientes porque la otra descuida la calidad, y la otra pierde clientes. Esta comparación permite concluir que la demanda de cada panadería:",
        opciones: [
          "Depende también de los precios y la calidad de otros bienes que compiten con el suyo",
          "Solo depende del precio del propio pan y de ninguna otra variable",
          "No obedece a la ley de la demanda porque el pan es un bien básico",
          "La fija la alcaldía para proteger a los consumidores del barrio"
        ],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Un estudiante afirma: si sube el salario mínimo, la demanda de todos los bienes sube exactamente igual. La evaluación más precisa de esa afirmación es que:",
        opciones: [
          "Es imprecisa, porque el mayor ingreso afecta más la compra de unos bienes que la de otros",
          "Es correcta, porque todas las familias gastan su ingreso en las mismas cosas",
          "No se puede analizar, porque el salario mínimo no tiene relación con la demanda",
          "Solo aplica para los bienes importados, que son los más caros"
        ],
        correcta: 0,
        dificultad: 3
      }
    ],
    retos: [
      {
        titulo: "Clasificar las necesidades y los bienes de un hogar",
        descripcion: "Ordena los pasos para distinguir necesidades, bienes y servicios en el presupuesto de la casa.",
        pasos: [
          "Anoto las necesidades del hogar, como alimentarse, desplazarse y estudiar",
          "Distingo cuáles se satisfacen con bienes y cuáles con servicios",
          "Reviso cuáles bienes son de uso duradero y cuáles se consumen de inmediato",
          "Marco los que son escasos y tienen un costo, es decir, los bienes económicos"
        ],
        dificultad: 1
      },
      {
        titulo: "Dibujar el equilibrio entre oferta y demanda de limón",
        descripcion: "Ordena los pasos para construir el gráfico de un producto de la plaza de mercado.",
        pasos: [
          "Anoto los precios posibles y la cantidad que los compradores piden a cada precio",
          "Registro la cantidad que los vendedores ofrecen en cada uno de esos precios",
          "Trazo las dos curvas en un mismo gráfico, con el precio en el eje vertical",
          "Marco el punto donde se cruzan las dos curvas",
          "Escribo el precio y la cantidad de equilibrio y los comparo con la plaza real"
        ],
        dificultad: 2
      },
      {
        titulo: "Explicar por qué sube el precio del aguacate",
        descripcion: "Ordena los pasos de un análisis de precios con oferta, demanda y causas concretas.",
        pasos: [
          "Formulo la pregunta: qué está moviendo el precio del aguacate",
          "Reviso si creció la demanda o si cayó la oferta disponible",
          "Busco dos o tres causas concretas, como el clima, la cosecha o las modas de consumo",
          "Comparo lo que pasa con otros frutos parecidos que pueden reemplazarlo",
          "Escribo una conclusión sobre quién paga y quién gana con ese precio"
        ],
        dificultad: 3
      }
    ]
  },

  "economia--fundamentos-economia--c5": {
    id: "economia--fundamentos-economia--c5",
    nombre: "Elasticidades, mercados y fallo de mercado",
    preguntas: [
      {
        enunciado: "La elasticidad precio de la demanda mide:",
        opciones: [
          "Cuánto cambia la cantidad comprada cuando cambia el precio",
          "Cuánto produce una empresa durante un año completo",
          "El número de empresas que participan en un mercado",
          "La tasa de interés que fija el banco central"
        ],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "Un mercado de competencia perfecta se caracteriza porque:",
        opciones: [
          "Hay muchos compradores y muchos vendedores que toman el precio como dado",
          "Una sola empresa decide el precio del bien y nadie puede entrar",
          "Existen barreras legales de entrada para proteger a los productores",
          "Pocos vendedores se ponen de acuerdo para fijar el precio"
        ],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "Un bien público puro, como la iluminación de un parque, se reconoce porque:",
        opciones: [
          "Nadie puede quedar excluido de su uso y el disfrute de una persona no reduce el de las demás",
          "Solo lo usa quien paga una tarifa mensual al municipio",
          "Lo produce únicamente una empresa privada en competencia",
          "Su cantidad demandada cambia mucho con el precio"
        ],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "Una externalidad negativa se presenta cuando:",
        opciones: [
          "Producir un bien impone costos a terceros que no aparecen reflejados en el precio",
          "El precio del bien baja y con ello mejoran todos los consumidores",
          "El Estado transfiere recursos a los hogares de menores ingresos",
          "Una empresa aumenta su publicidad y vende más unidades"
        ],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "Si dos bienes son sustitutos, la elasticidad cruzada de la demanda indica que al subir el precio de uno:",
        opciones: [
          "Aumenta la cantidad demandada del otro bien",
          "Disminuye en la misma proporción la cantidad demandada del otro",
          "No se presenta ningún efecto sobre el otro bien",
          "Los dos bienes se convierten en bienes públicos"
        ],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "El monopolio natural se justifica económicamente cuando:",
        opciones: [
          "Una sola empresa puede abastecer a todo el mercado a menor costo que varias compitiendo",
          "El producto es tan escaso que ninguna persona quiere comprarlo",
          "La autoridad prohíbe las redes de servicios públicos domiciliarios",
          "Existen cientos de vendedores que ofrecen productos idénticos"
        ],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "La diferencia entre un oligopolio y un monopolio está en que el oligopolio:",
        opciones: [
          "Reúne pocas empresas que observan las decisiones de las demás, mientras el monopolio tiene una sola",
          "No presenta ningún tipo de barrera de entrada en su sector",
          "Solo se observa en las actividades agropecuarias del país",
          "Vende exclusivamente bienes públicos y servicios estatales"
        ],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Un acuerdo entre vendedores para fijar precios y repartirse clientes preocupa a la autoridad de competencia porque:",
        opciones: [
          "Reduce la oferta real y traslada al comprador un precio mayor que el del mercado competido",
          "Baja tanto los precios que todas las empresas del sector quiebran",
          "Aumenta la cantidad ofrecida y beneficia por igual a productores y hogares",
          "Es la única manera de financiar la investigación de las empresas"
        ],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Un cuadro compara cuatro productos y la reacción de su demanda ante una subida de precio: medicina básica, energía domiciliaria, cine y ropa de marca. La ordenación de menor a mayor elasticidad que se puede defender es:",
        opciones: [
          "Medicina básica, energía domiciliaria, cine, ropa de marca",
          "Ropa de marca, cine, energía domiciliaria, medicina básica",
          "Cine, medicina básica, ropa de marca, energía domiciliaria",
          "Energía domiciliaria, ropa de marca, medicina básica, cine"
        ],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Frente a la contaminación de una fábrica sobre un río, dos políticas posibles son un impuesto por cada tonelada contaminada y un límite máximo de vertimiento. Al compararlas, es correcto afirmar que:",
        opciones: [
          "Las dos corrigen el fallo de mercado, pero el impuesto deja a la empresa decidir cuánto contaminar según su costo de limpiar",
          "Solo el límite máximo puede considerarse una política de tipo económico",
          "El impuesto aumenta la contaminación, porque abarata la producción sucia",
          "Ninguna de las dos modifica los costos internos de la fábrica"
        ],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Un columnista sostiene que toda intervención del Estado es un fallo de gobierno y que el mercado sin reglas siempre asigna bien. La crítica más sólida a esa afirmación señala que:",
        opciones: [
          "Los mercados también fallan ante externalidades y bienes públicos, y cada intervención debe evaluarse caso por caso",
          "Los fallos de mercado solo existen en los países de ingreso alto",
          "La información es siempre perfecta, así que no hay nada que corregir",
          "El precio de equilibrio elimina por sí solo toda externalidad"
        ],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Una cafetería está en un aeropuerto y otra en un barrio con veinte opciones cercanas. Si las dos suben el precio diez por ciento, la del barrio pierde muchos clientes y la del aeropuerto pierde pocos. La comparación muestra que la elasticidad de la demanda:",
        opciones: [
          "Depende de cuántos sustitutos pueda encontrar ese comprador en esa situación",
          "Es la misma para todos los compradores porque el producto es idéntico",
          "En el aeropuerto es perfectamente elástica por tratarse de viajeros",
          "No obedece al precio, sino al tamaño de los locales comerciales"
        ],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Cuando una empresa conoce la calidad real de un usado que vende y el comprador no, el mercado presenta:",
        opciones: [
          "Asimetría de información, que puede expulsar a los buenos productos del mercado",
          "Competencia perfecta, porque cada parte fija su propio precio",
          "Una externalidad positiva a favor del vendedor",
          "Un bien público puro con acceso sin exclusión"
        ],
        correcta: 0,
        dificultad: 2
      }
    ],
    retos: [
      {
        titulo: "Comparar las estructuras de mercado de dos productos",
        descripcion: "Ordena los pasos para clasificar dos mercados reales del municipio.",
        pasos: [
          "Elijo dos productos de consumo frecuente en el barrio",
          "Cuento los vendedores y reviso si el producto es idéntico o diferenciado",
          "Analizo qué tan fácil o difícil es entrar a vender cada uno",
          "Reviso quién fija el precio en cada mercado",
          "Clasifico cada mercado y justifico la clasificación con evidencias"
        ],
        dificultad: 2
      },
      {
        titulo: "Calcular e interpretar una elasticidad precio",
        descripcion: "Ordena los pasos del cálculo con una subida de precio del transporte escolar.",
        pasos: [
          "Anoto el precio inicial, el precio nuevo y las cantidades correspondientes",
          "Calculo el cambio porcentual del precio",
          "Calculo el cambio porcentual de la cantidad demandada",
          "Divido el cambio de la cantidad entre el cambio del precio",
          "Interpreto el resultado: si es mayor que uno, la demanda es elástica",
          "Redacto una conclusión aplicada al producto que analicé"
        ],
        dificultad: 3
      },
      {
        titulo: "Detectar un fallo de mercado en el barrio",
        descripcion: "Ordena los pasos para identificar y corregir un fallo de mercado cercano.",
        pasos: [
          "Elijo un problema real, como basuras en el parque o ruido nocturno",
          "Identifico quién contamina o quién usa el bien sin pagar por él",
          "Explico por qué el precio del mercado no refleja el daño causado",
          "Clasifico el problema como externalidad, bien público o información incompleta",
          "Propongo una corrección: regulación, impuesto o acuerdo vecinal"
        ],
        dificultad: 3
      }
    ]
  },

  "economia--macroeconomia--c4": {
    id: "economia--macroeconomia--c4",
    nombre: "PIB, inflación y desempleo",
    preguntas: [
      {
        enunciado: "El producto interno bruto de un país mide:",
        opciones: [
          "El valor de los bienes y servicios finales producidos dentro del territorio en un periodo",
          "La cantidad de dinero que guardan los bancos en sus bóvedas",
          "La suma de todos los ahorros de las familias del país",
          "El total de impuestos que la nación cobra en un año"
        ],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "El índice de precios al consumidor, que publica el DANE para seguir la inflación, se construye con:",
        opciones: [
          "Una canasta de bienes y servicios representativa del gasto de los hogares",
          "Únicamente los precios internacionales del petróleo y del carbón",
          "Las reservas internacionales que tiene el Banco de la República",
          "Los salarios de los empleados del sector público nacional"
        ],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "La tasa de desempleo pone en relación a las personas que buscan trabajo y no lo encuentran con:",
        opciones: [
          "La población económicamente activa",
          "El total de habitantes del país, incluidos los niños",
          "El número de empresas matriculadas en la cámara de comercio",
          "La cantidad de viviendas nuevas entregadas en el año"
        ],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "Cuando el nivel general de precios sube de manera sostenida durante varios meses se habla de:",
        opciones: ["inflación", "deflación", "estancamiento", "superávit"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "Para saber si un país realmente produjo más que el año anterior, cuando los precios también subieron, se debe consultar el PIB:",
        opciones: [
          "Real, corregido por inflación",
          "Nominal, con los precios del año nuevo",
          "Deuda pública neta del gobierno central",
          "Agropecuario, que es el único confiable"
        ],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Si los aumentos de salario y el costo de la energía llevan a las empresas a subir sus precios, el tipo de inflación descrito es:",
        opciones: [
          "Inflación de costos",
          "Inflación por exceso de gasto de las familias",
          "Deflación importada por el comercio exterior",
          "Hiperinflación por emisión monetaria"
        ],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Una persona deja su trabajo porque encontró una oferta mejor y tarda dos meses en conseguir otro empleo. Ese caso corresponde a desempleo:",
        opciones: ["friccional", "estructural", "cíclico", "estacional"],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Un cuadro de un país imaginario muestra tres años: en el primero el PIB nominal crece ocho por ciento con inflación de nueve; en el segundo crece cinco por ciento con inflación de dos; en el tercero crece uno por ciento con inflación de seis. La lectura correcta del cuadro es que:",
        opciones: [
          "El segundo año es el de mayor crecimiento real de la producción",
          "El primer año es el mejor, porque su cifra nominal es la más alta",
          "El tercer año muestra expansión de la producción con precios estables",
          "Los tres años tienen el mismo crecimiento del producto real"
        ],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Si en un ejemplo la canasta familiar sube veinte por ciento en el año y el salario de una familia sube solo cinco por ciento, la conclusión válida sobre su ingreso es que:",
        opciones: [
          "El ingreso real cayó, aunque el ingreso nominal sea más alto",
          "La familia es más rica, porque recibe más cantidad de billetes",
          "El ingreso real no cambia mientras el trabajo sea formal",
          "La inflación no afecta el poder adquisitivo de los hogares"
        ],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Un alcalde afirma que abrir un centro comercial reduce siempre el desempleo del municipio porque crea puestos de trabajo. Para evaluar esa afirmación hay que tener en cuenta que:",
        opciones: [
          "Los puestos nuevos pueden desplazarse con cierres de negocios pequeños, y el efecto neto depende de cuánta actividad se trae de fuera",
          "Todo empleo creado en un comercio reduce la tasa de desempleo sin importar lo demás",
          "El empleo del centro comercial pertenece siempre al sector industrial del municipio",
          "La construcción de obras no tiene ningún efecto sobre el mercado laboral local"
        ],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Dos países con el mismo producto interno bruto tienen PIB por habitante muy distintos. La comparación obliga a concluir que el PIB por habitante depende de:",
        opciones: [
          "La población del país, además del tamaño de su producción",
          "La cantidad de billetes que imprime el banco central cada mes",
          "El número de feriados decretados en el año",
          "La tasa de interés que cobra la banca comercial"
        ],
        correcta: 0,
        dificultad: 3
      }
    ],
    retos: [
      {
        titulo: "Calcular la tasa de desempleo de un pueblo",
        descripcion: "Ordena los pasos para pasar de los datos del municipio a una tasa de desempleo.",
        pasos: [
          "Cuento las personas ocupadas del pueblo",
          "Cuento quienes buscan trabajo y no lo encuentran",
          "Sumo los dos grupos para hallar la población económicamente activa",
          "Divido los cesantes entre la población activa y expreso el resultado en por ciento"
        ],
        dificultad: 2
      },
      {
        titulo: "Construir un índice de precios de una canasta de cuatro productos",
        descripcion: "Ordena los pasos de una simulación de índice de precios con productos de la tienda del barrio.",
        pasos: [
          "Elijo los productos que la familia del barrio compra todos los meses",
          "Registro precio y cantidad de cada producto en el año base",
          "Sumo el costo total de la canasta en el año base y en el año actual",
          "Divido el costo actual entre el costo base y multiplico el resultado por cien",
          "Comparo el número obtenido con la variación de los ingresos del hogar"
        ],
        dificultad: 3
      },
      {
        titulo: "Distinguir los tipos de desempleo en el municipio",
        descripcion: "Ordena los pasos para clasificar casos reales de personas que buscan trabajo.",
        pasos: [
          "Reviso la situación de varias personas que están buscando trabajo",
          "Miro si el paro viene de un cambio voluntario entre dos empleos",
          "Reviso si la maquinaria o el software reemplazaron el oficio de la persona",
          "Consulto si el paro coincide con una crisis o con el cambio de temporada",
          "Clasifico cada caso y explico qué tipo de política le corresponde"
        ],
        dificultad: 3
      }
    ]
  },

  "economia--macroeconomia--c5": {
    id: "economia--macroeconomia--c5",
    nombre: "Política fiscal, monetaria y modelos macro",
    preguntas: [
      {
        enunciado: "La política fiscal del gobierno nacional se ejecuta principalmente mediante:",
        opciones: [
          "Los impuestos, el gasto público y el endeudamiento",
          "La tasa de interés de referencia que fija el banco central",
          "La compra y venta de dólares en el mercado cambiario",
          "El volumen de las reservas internacionales del país"
        ],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "El Banco de la República es una entidad administrativa independiente cuyo objetivo principal es:",
        opciones: [
          "Mantener el poder adquisitivo de la moneda y velar por la estabilidad del sistema financiero",
          "Administrar el presupuesto general de la nación cada año",
          "Recaudar los impuestos nacionales y aduaneros",
          "Proyectar las leyes que aprueba el Congreso de la República"
        ],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "Cuando el gasto de la nación es mayor que sus ingresos corrientes, el resultado se llama:",
        opciones: ["déficit fiscal", "superávit", "balance neutro", "excedente de colocación"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "En Colombia la meta de inflación se fija en un rango que va de:",
        opciones: [
          "Dos a cuatro por ciento",
          "Cero a uno por ciento",
          "Ocho a doce por ciento",
          "Quince a veinte por ciento"
        ],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "Para frenar una inflación alta, la junta directiva del banco central normalmente:",
        opciones: [
          "Sube la tasa de interés de referencia para encarecer el crédito y enfriar la demanda",
          "Reduce el impuesto sobre las ventas para que las familias compren más",
          "Ordena imprimir billetes para financiar el gasto público",
          "Fija por resolución el precio de todos los bienes de la canasta familiar"
        ],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "La política monetaria llega a los hogares y a las empresas sobre todo a través del canal del:",
        opciones: [
          "Crédito y de las tasas que cobra y paga la banca",
          "Clima y del resultado de las cosechas agropecuarias",
          "Precio internacional de la canasta de exportaciones",
          "Sistema general de participaciones con las regiones"
        ],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "El presupuesto general de la nación se autoriza por medio de:",
        opciones: [
          "Una ley que presenta el gobierno nacional y estudia el Congreso de la República",
          "Un decreto del banco central, sin necesidad de debate público",
          "Una resolución de la Superintendencia Financiera de Colombia",
          "Una consulta popular que se realiza todos los años"
        ],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "En el modelo del flujo circular de la economía, las familias cumplen un doble papel porque son:",
        opciones: [
          "Dueñas de los factores productivos y al mismo tiempo compradoras de bienes y servicios",
          "Las únicas productoras de bienes de capital del país",
          "Las que fijan el precio internacional del petróleo",
          "Las encargadas de emitir la moneda de curso legal"
        ],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Un análisis compara dos salidas frente a una recesión: ampliar el gasto en obra pública financiado con deuda, o reducir impuestos a los hogares de mayores ingresos. Frente al efecto sobre la demanda y sobre la distribución, la afirmación mejor fundamentada es que:",
        opciones: [
          "La obra pública suele reactivar más rápido la demanda con empleo local, mientras la rebaja a altos ingresos se gasta menos porque su propensión a consumir es menor",
          "Las dos medidas producen exactamente el mismo crecimiento y el mismo efecto redistributivo",
          "Reducir impuestos a los ingresos altos es la única política fiscal contracíclica válida",
          "El gasto en obra pública no hace parte de la demanda agregada del país"
        ],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Si el banco central sube la tasa de referencia en un año de bajas exportaciones petroleras, el efecto esperable sobre la economía interna es:",
        opciones: [
          "Menos crédito y menos consumo, con una demanda agregada más débil en el corto plazo",
          "Un aumento automático del gasto público por el solo hecho de subir la tasa",
          "Una expansión inmediata de las ventas externas de café y flores",
          "La eliminación del desempleo de tipo estructural del país"
        ],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Un estudiante afirma que la deuda pública siempre es mala porque ningún país debe deber nada. La evaluación más precisa de esa afirmación es que:",
        opciones: [
          "La deuda puede ser útil cuando financia inversión con retorno social, y el problema está en su sostenibilidad y su costo",
          "La deuda pública nunca afecta a las generaciones que vienen después",
          "Ningún país del mundo puede financiarse con títulos de deuda interna",
          "El endeudamiento es la única fuente permanente de recursos del Estado"
        ],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Un cuadro de dos economías muestra que en la primera la inflación está por encima del rango meta y la tasa de referencia sigue baja, y en la segunda la inflación está dentro del rango con la tasa estable. La lectura correcta del primer caso es que:",
        opciones: [
          "El banco central tendría que subir la tasa para anclar las expectativas de inflación",
          "Conviene bajar todavía más la tasa, precisamente porque la inflación es alta",
          "No existe ninguna relación posible entre la tasa de referencia y los precios",
          "La tasa de referencia no es un instrumento de la política monetaria"
        ],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Dos gobiernos con el mismo déficit fiscal uno lo financia con títulos de deuda interna y otro con creación de dinero del banco central. La comparación permite anticipar que el segundo caso:",
        opciones: [
          "Tiene mayor riesgo de presionar los precios y la inflación en el corto plazo",
          "Garantiza precios estables porque no aumenta la cantidad de dinero",
          "Reduce el gasto público obligatorio por mandato constitucional",
          "Traslada todo el costo del déficit al comercio exterior del país"
        ],
        correcta: 0,
        dificultad: 3
      }
    ],
    retos: [
      {
        titulo: "Comparar la política fiscal y la política monetaria",
        descripcion: "Ordena los pasos para confrontar las dos grandes políticas macroeconómicas en Colombia.",
        pasos: [
          "Identifico quién decide cada política en el país",
          "Anoto los instrumentos que utiliza cada autoridad",
          "Explico el objetivo que persigue cada una de ellas",
          "Reviso un ejemplo de choque y qué haría cada autoridad",
          "Escribo una conclusión sobre sus diferencias y sus complementariedades"
        ],
        dificultad: 2
      },
      {
        titulo: "Simular una decisión de la junta directiva del banco central",
        descripcion: "Ordena los pasos técnicos que anteceden a la decisión sobre la tasa de interés de referencia.",
        pasos: [
          "Leo los datos de inflación esperada y de crecimiento del producto",
          "Comparo la inflación observada con el rango de la meta de inflación",
          "Reviso qué está moviendo los precios, si la demanda o los costos",
          "Decido si subo, bajo o mantengo la tasa de interés de referencia",
          "Anticipo el efecto sobre el crédito, el consumo y la inversión",
          "Comunico la decisión con una justificación técnica y un horizonte de tiempo"
        ],
        dificultad: 3
      },
      {
        titulo: "Seguir el trámite del presupuesto general de la nación",
        descripcion: "Ordena las etapas reales del proceso presupuestal colombiano.",
        pasos: [
          "El gobierno nacional formula el proyecto con sus metas de ingresos y de gastos",
          "El Ministerio de Hacienda lo presenta al Congreso dentro de los tiempos legales",
          "Las comisiones económicas de Senado y Cámara estudian las cifras y proponen cambios",
          "El pleno de cada cámara debate y aprueba la ley anual de presupuesto",
          "Sancionada la ley, las entidades programan y ejecutan su gasto",
          "Los organismos de control revisan la ejecución y rinden cuentas a la ciudadanía"
        ],
        dificultad: 3
      }
    ]
  },

  "economia--economia-colombia--c4": {
    id: "economia--economia-colombia--c4",
    nombre: "Estructura productiva y regiones de Colombia",
    preguntas: [
      {
        enunciado: "En la estructura productiva de Colombia, la mayor parte del producto interno bruto proviene del sector:",
        opciones: [
          "Terciario, con comercio, transporte y servicios",
          "Primario, dedicado a agricultura y minería",
          "Secundario, de industria manufacturera y construcción",
          "Los tres sectores pesan exactamente igual"
        ],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "La agricultura, la ganadería, la pesca y la extracción de minerales clasifican como actividades del sector:",
        opciones: ["primario", "secundario", "terciario", "de servicios financieros"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "Uno de los productos tradicionales de exportación del país, cultivado en laderas de montaña por pequeñas familias cafeteras, es el:",
        opciones: ["café", "carbón a cielo abierto", "petróleo crudo", "ferroníquel"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "El comercio, el turismo y los servicios financieros hacen parte del sector:",
        opciones: ["terciario", "primario", "secundario", "extractivo"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "Las flores de exportación que se cultivan en la Sabana de Bogotá y en el oriente antioqueño se venden principalmente a mercados de:",
        opciones: [
          "Norteamérica y algunos países de Europa",
          "Asia oriental, donde se consume la mayor parte",
          "Interior de la región Andina colombiana",
          "África del Norte y Medio Oriente"
        ],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "El puerto de Buenaventura es estratégico para la economía colombiana porque:",
        opciones: [
          "Comunica el centro y el suroccidente del país con el océano Pacífico y con el comercio asiático",
          "Es el único puerto del país con aguas profundas en el Caribe",
          "Está destinado solo al transporte de pasajeros internos",
          "Su carga principal es el café que se exporta al Atlántico"
        ],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "La minería de carbón a cielo abierto en La Guajira y la extracción de petróleo en los llanos del Meta y Casanare son actividades del sector primario porque:",
        opciones: [
          "Extraen recursos naturales que luego se transforman o se venden al exterior",
          "Transforman materias primas en productos terminados dentro de una fábrica",
          "Prestan servicios de transporte y comercio a las regiones",
          "Dependen solo del consumo final de los hogares colombianos"
        ],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "El banano de exportación se produce en zonas como el Urabá y el norte del país, lo que se explica por:",
        opciones: [
          "Sus condiciones de clima y suelo y su cercanía a puertos del Caribe",
          "La altitud de la páramo andino y sus suelos fríos",
          "Las vías terciarias del sur de la región Pacífica",
          "El bajo costo de la mano de obra en la alta montaña"
        ],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Un cuadro compara tres municipios: uno de café de ladera con finca pequeña, uno de minería de gran escala y uno de comercio y turismo. La lectura correcta sobre el empleo en esos tres casos es que:",
        opciones: [
          "El café ocupa a más personas por unidad de producción, la minería genera menos empleo directo y el turismo depende del ingreso de quienes visitan el municipio",
          "Los tres municipios crean la misma cantidad de empleos formales y estables",
          "La minería es siempre la actividad que más personas ocupa en el territorio",
          "El comercio y el turismo no producen empleo porque no transforman materia prima"
        ],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Un estudiante afirma: Colombia exporta materias primas, entonces el país no tiene industria ni servicios. La evaluación correcta de esa afirmación es que:",
        opciones: [
          "Es falsa, porque la estructura productiva combina extractivas y agropecuarias con manufactura y un sector servicios de gran peso",
          "Es cierta, porque las exportaciones mineras y agropecuarias son las más visibles del país",
          "Es cierta, porque la industria desapareció por completo con la apertura económica",
          "Es falsa, pero solo porque el café se transforma todo dentro del país"
        ],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "El puerto de Cartagena, la zona franca del oriente antioqueño y el aeropuerto de la zona metropolitana del Valle de Aburrá se analizan juntos en clase porque:",
        opciones: [
          "Son infraestructuras que reducen los costos de transporte y de transacción de las empresas de su región",
          "Son los únicos lugares donde el Estado fija los precios de exportación",
          "Pertenecen al sector primario de la economía colombiana",
          "Funcionan solo con recursos del Sistema General de Participaciones"
        ],
        correcta: 0,
        dificultad: 3
      }
    ],
    retos: [
      {
        titulo: "Comparar la economía de dos regiones colombianas",
        descripcion: "Ordena los pasos para comparar dos regiones y explicar sus diferencias de ingreso.",
        pasos: [
          "Elijo dos regiones y anoto sus actividades económicas principales",
          "Reviso en qué sector trabaja más gente en cada una de ellas",
          "Comparo la infraestructura de transporte y portuaria de cada región",
          "Explico cómo esa diferencia influye sobre los ingresos de las familias",
          "Propongo una medida que aproveche las ventajas de cada región"
        ],
        dificultad: 2
      },
      {
        titulo: "Construir un mapa de la canasta exportadora de Colombia",
        descripcion: "Ordena los pasos para ubicar en el mapa los productos que el país vende al exterior.",
        pasos: [
          "Reviso la lista de productos que Colombia vende al mercado externo",
          "Ubico en el mapa las regiones donde se producen esos bienes",
          "Distingo los productos agropecuarios, como café y banano, de los extractivos, como petróleo y carbón",
          "Trazo las rutas hacia los puertos de Cartagena, Santa Marta, Buenaventura y Puerto Bolívar",
          "Escribo una conclusión sobre las regiones que dependen de un solo producto"
        ],
        dificultad: 3
      },
      {
        titulo: "Explicar cómo un choque externo llega a un municipio colombiano",
        descripcion: "Ordena los pasos para seguir el efecto de un cambio del precio internacional del petróleo.",
        pasos: [
          "Identifico el cambio externo, por ejemplo una caída del precio del petróleo",
          "Reviso qué municipios reciben regalías e impuestos de esa actividad",
          "Analizo el efecto sobre el empleo local y sobre el comercio del pueblo",
          "Consulto qué parte del ingreso del municipio depende de ese sector",
          "Propongo dos acciones para reducir esa dependencia en el mediano plazo"
        ],
        dificultad: 3
      }
    ]
  },

  "economia--economia-colombia--c5": {
    id: "economia--economia-colombia--c5",
    nombre: "Desarrollo, desigualdad y política económica actual",
    preguntas: [
      {
        enunciado: "El coeficiente de Gini se usa para medir:",
        opciones: [
          "La distribución del ingreso, donde cero equivale a igualdad perfecta y uno a concentración extrema",
          "El tamaño total de la producción de un país en un año",
          "La variación mensual del índice de precios al consumidor",
          "La proporción de exportaciones mineras del comercio exterior"
        ],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "La medición de la pobreza multidimensional en Colombia tiene en cuenta privaciones en:",
        opciones: [
          "Educación, salud, empleo, condiciones de vivienda y acceso a servicios",
          "Únicamente el ingreso mensual declarado por el hogar",
          "El número de vehículos y celulares de cada familia",
          "La cantidad de hectáreas que posee cada productor"
        ],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "La Ley 100 de 1995 organizó en Colombia:",
        opciones: [
          "El sistema de seguridad social en salud, pensiones y riesgos laborales",
          "El sistema de educación preescolar y básica obligatoria",
          "El presupuesto anual de las asambleas departamentales",
          "El control oficial de precios de los combustibles"
        ],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "El Sistema General de Participaciones corresponde a:",
        opciones: [
          "Las transferencias que la nación hace a departamentos y municipios para financiar sectores como salud y educación",
          "Los aportes voluntarios que las empresas hacen a los hospitales universitarios",
          "El fondo de ahorros individuales de los trabajadores del sector privado",
          "Los créditos externos que el Banco de la República concede a los municipios"
        ],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "El capítulo de reforma rural integral del acuerdo de paz firmado en 2016 busca principalmente:",
        opciones: [
          "Ampliar el acceso a la tierra y cerrar la brecha de servicios y bienestar entre el campo y la ciudad",
          "Proteger la propiedad de la gran industria urbana del país",
          "Vender las tierras baldías a los compradores que ofrezcan más precio",
          "Trasladar a la población rural hacia las ciudades intermedias"
        ],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "La diferencia entre territorios que venden productos con alto contenido tecnológico y los que solo exportan materias primas se estudia como un problema de:",
        opciones: [
          "Estructura productiva y capacidad de agregar valor",
          "Exceso de regulación cambiaria interna",
          "Falta de meta de inflación en el banco central",
          "Bajo coeficiente de Gini en las regiones"
        ],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Una ocupación se considera informal cuando:",
        opciones: [
          "El trabajador no tiene contrato ni acceso pleno a la seguridad social",
          "El salario supera el mínimo legal vigente en el año",
          "La empresa está vigilada por la Superintendencia Financiera",
          "El empleo se presta en el sector de la construcción de obras"
        ],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Colombia hizo parte de la OCDE a partir de 2020. Pertenecer a ese organismo implica para el país:",
        opciones: [
          "Revisar sus políticas frente a estándares y buenas prácticas comparadas con otras economías",
          "Renunciar por tratado a tener banco central independiente",
          "Aceptar que otro organismo fije la tasa de interés colombiana",
          "Eliminar el Sistema General de Participaciones"
        ],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "En un periodo el producto interno bruto por habitante sube, pero el coeficiente de Gini también sube. La combinación de los dos indicadores indica que:",
        opciones: [
          "El ingreso del país aumenta, pero su distribución se deteriora",
          "El país crece y al mismo tiempo reparte mejor ese crecimiento",
          "El crecimiento del ingreso por habitante es imposible con un Gini alto",
          "Los dos indicadores miden exactamente lo mismo"
        ],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Un gobierno propone reducir la pobreza con transferencias monetarias condicionadas a asistencia escolar y controles de crecimiento, y otro prioriza la inversión en la primera infancia. La comparación correcta es que:",
        opciones: [
          "Las transferencias actúan sobre el ingreso inmediato, mientras la primera infancia construye capacidades cuyos efectos tardan más en verse",
          "Las dos políticas tienen idéntico efecto y se pueden sustituir entre sí",
          "Las transferencias monetarias solo benefician a los hogares de mayores ingresos",
          "La inversión en primera infancia no se considera política económica"
        ],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Un columnista sostiene que el crecimiento económico corrige solo la desigualdad. La crítica más sólida a esa afirmación señala que:",
        opciones: [
          "El crecimiento es necesario, pero el reparto depende del mercado laboral, la educación y la política fiscal",
          "La desigualdad siempre disminuye cuando el producto interno bruto crece",
          "La política fiscal no tiene ninguna relación con la distribución del ingreso",
          "Los países con alto Gini no pueden crecer en ningún escenario"
        ],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Un cuadro compara dos departamentos con el mismo nivel de pobreza multidimensional: uno presenta más hogares sin acueducto y el otro más hogares sin empleo. La lectura correcta del cuadro es que:",
        opciones: [
          "La misma cifra agregada esconde privaciones distintas y por eso se requieren políticas diferentes",
          "Las dos regiones necesitan exactamente la misma intervención pública",
          "La pobreza multidimensional no permite comparar territorios entre sí",
          "El empleo nunca forma parte de la medición de la pobreza multidimensional"
        ],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "El catastro multipropósito se considera una herramienta de la política de tierras porque:",
        opciones: [
          "Identifica predios, linderos y avalúos, lo que permite aplicar impuestos territoriales y decisiones de tierras con información confiable",
          "Fija por decreto el precio de la hectárea en todas las regiones del país",
          "Sustituye al Registro Nacional de Avales de Estado en los municipios pequeños",
          "Reparte la tierra de manera automática entre las familias rurales"
        ],
        correcta: 0,
        dificultad: 3
      }
    ],
    retos: [
      {
        titulo: "Comparar dos conceptos de desarrollo",
        descripcion: "Ordena los pasos para distinguir crecimiento económico de desarrollo.",
        pasos: [
          "Distingo el crecimiento del producto interno bruto del desarrollo económico",
          "Agrego la idea de capacidades y de calidad de vida de las personas",
          "Reviso un ejemplo del municipio para cada uno de los dos conceptos",
          "Concluyo por qué un país puede crecer sin resolver sus privaciones"
        ],
        dificultad: 2
      },
      {
        titulo: "Analizar la desigualdad de un departamento con dos indicadores",
        descripcion: "Ordena los pasos para leer juntos la pobreza multidimensional y la distribución del ingreso.",
        pasos: [
          "Reviso la pobreza multidimensional del departamento y sus componentes",
          "Consulto la distribución del ingreso del territorio",
          "Comparo las dos cifras con el promedio nacional",
          "Identifico si la privación es de ingreso, de educación o de salud",
          "Busco la política pública que corresponde a cada privación detectada",
          "Escribo una conclusión sobre qué medida tendría más impacto en el departamento"
        ],
        dificultad: 3
      },
      {
        titulo: "Evaluar una política de desarrollo rural",
        descripcion: "Ordena los pasos para juzgar una política pública aplicada en una zona rural del país.",
        pasos: [
          "Defino el problema que la política quiere resolver, como las vías terciarias",
          "Reviso los recursos y las instituciones encargados de ejecutarla",
          "Identifico quiénes ganan y quiénes quedan por fuera del beneficio",
          "Comparo el costo de la política con indicadores de bienestar antes y después",
          "Recomiendo mantener, ajustar o reemplazar la política con argumentos"
        ],
        dificultad: 3
      }
    ]
  },

  "economia--finanzas--c4": {
    id: "economia--finanzas--c4",
    nombre: "Presupuesto, ahorro e interés",
    preguntas: [
      {
        enunciado: "Un presupuesto familiar bien elaborado empieza por:",
        opciones: [
          "Registrar todos los ingresos y todos los gastos del mes",
          "Pedir un préstamo para aumentar el consumo de la casa",
          "Calcular únicamente el gasto en alimentos del hogar",
          "Guardar los recibos sin sumar cuánto se gastó"
        ],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "El dinero que queda disponible después de cubrir los gastos y que se destina al futuro se llama:",
        opciones: ["ahorro", "impuesto", "cuota de manejo", "préstamo"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "Los gastos que se repiten cada mes con un valor parecido, como el arriendo y los servicios públicos, se clasifican como gastos:",
        opciones: ["fijos", "eventuales", "hormiga", "de inversión"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "El interés que una entidad cobra por prestar dinero se expresa normalmente como:",
        opciones: [
          "Un porcentaje del capital prestado en cada periodo",
          "Una cantidad fija de pesos sin relación con el monto prestado",
          "El número de cuotas que el cliente debe firmar",
          "La tarifa anual de la tarjeta de crédito del hogar"
        ],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "Si una familia paga siempre la cuota mínima de la tarjeta de crédito, lo esperable es que:",
        opciones: [
          "La deuda crezca por el efecto del interés compuesto sobre el saldo pendiente",
          "La deuda se elimine en pocos meses sin pagar intereses",
          "El saldo quede congelado mientras se pague la cuota mínima",
          "La entidad devuelva el dinero gastado en el periodo anterior"
        ],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Un CDT, certificado de depósito a término, se caracteriza porque:",
        opciones: [
          "El dinero queda depositado por un plazo fijo y devuelve un interés acordado desde el inicio",
          "Se puede retirar en cualquier momento sin ninguna consecuencia",
          "Lo emite el Banco de la República para controlar los precios",
          "Su rendimiento depende del precio internacional del café"
        ],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "El interés simple se diferencia del compuesto en que el simple se calcula sobre:",
        opciones: [
          "Solo el capital inicial, mientras el compuesto también incluye los intereses ya ganados",
          "Únicamente la cuota de manejo del producto financiero",
          "El monto total de los gastos del hogar del mes anterior",
          "El salario mínimo legal vigente del año respectivo"
        ],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "La estrategia nacional de educación financiera, conocida como saber financiero y respaldada por la Ley 1896 de 2018, busca principalmente:",
        opciones: [
          "Que las personas tomen mejores decisiones con su dinero y usen bien los servicios financieros",
          "Que el banco central fije el monto del ahorro de cada hogar",
          "Obligar a todas las familias a invertir en la bolsa de valores",
          "Eliminar el ahorro privado para favorecer el consumo"
        ],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Antes de tomar una inversión, la recomendación de sentido común que repiten los programas de educación financiera es:",
        opciones: [
          "Tener un fondo de emergencia que cubra varios meses de gastos obligatorios",
          "Invertir todo el ingreso disponible en el producto de mayor moda",
          "Pedir un crédito de consumo para financiar la inversión",
          "Dejar el dinero en gastos variables hasta el final del mes"
        ],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Una tienda ofrece un electrodoméstico de dos formas: pago de contado o cuatro cuotas con un recargo. Para decidir cuál conviene, el análisis correcto es:",
        opciones: [
          "Comparar el costo total de las cuotas con el precio de contado y revisar si el ahorro propio rinde menos que el recargo",
          "Elegir siempre las cuotas, porque se paga más tarde",
          "Elegir el contado sin mirar el precio total, solo el valor del abono",
          "Comparar únicamente la cantidad de letras que firma cada cliente"
        ],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "En un ejemplo, una familia destina el treinta por ciento de su ingreso al arriendo, el veinte por ciento a pagar deudas y el diez por ciento al ahorro. La lectura correcta de esa distribución es que:",
        opciones: [
          "Una quinta parte del ingreso se va en deudas, lo que deja poco margen frente a un imprevisto",
          "La familia tiene un presupuesto holgado porque su ahorro es positivo",
          "El arriendo es el gasto más pequeño del hogar del ejemplo",
          "La deuda nunca afecta la capacidad de ahorro de una familia"
        ],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Un vendedor afirma que su inversión rinde siempre mucho y no tiene ningún riesgo. La evaluación correcta de esa afirmación es que:",
        opciones: [
          "Es inconsistente, porque a mayor rentabilidad esperada suele corresponder mayor riesgo",
          "Es cierta, pues las entidades vigiladas garantizan todos los rendimientos",
          "Es cierta, mientras la inversión esté en pesos y no en dólares",
          "No puede evaluarse, porque el riesgo no se puede mencionar en clase"
        ],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Un cuadro compara dos ahorros con el mismo capital inicial: uno queda en una cuenta que no paga rendimiento y otro en una cuenta que paga intereses cada mes. La diferencia entre los dos crece con el tiempo porque:",
        opciones: [
          "Los intereses ganados se suman al capital y también generan intereses nuevos",
          "La cuenta sin rendimiento aumenta su saldo por el solo paso de los meses",
          "El interés compuesto aplica solo a los créditos de consumo del banco",
          "La inflación convierte el dinero guardado en un ahorro automático"
        ],
        correcta: 0,
        dificultad: 3
      }
    ],
    retos: [
      {
        titulo: "Elaborar el presupuesto mensual del hogar",
        descripcion: "Ordena los pasos para construir un presupuesto familiar realista.",
        pasos: [
          "Sumo todos los ingresos del hogar del mes",
          "Registro los gastos fijos, como arriendo y servicios públicos",
          "Anoto los gastos variables que se pueden recortar",
          "Aparto el ahorro antes de gastar en lo demás",
          "Reviso al final del mes en qué se fue el dinero"
        ],
        dificultad: 2
      },
      {
        titulo: "Comparar dos ofertas de crédito para comprar una moto",
        descripcion: "Ordena los pasos para decidir entre dos créditos con cuotas parecidas.",
        pasos: [
          "Anoto el monto, el plazo y la cuota de cada una de las ofertas",
          "Comparo el costo total que se paga al finalizar el préstamo",
          "Reviso las comisiones y el seguro que exige cada entidad",
          "Verifico si la cuota cabe en el presupuesto mensual del hogar",
          "Decido con base en el costo total y no solo en el valor de la cuota"
        ],
        dificultad: 3
      },
      {
        titulo: "Simular el crecimiento de un ahorro con interés compuesto",
        descripcion: "Ordena los pasos de una simulación con un capital inicial y una tasa mensual de ejemplo.",
        pasos: [
          "Elijo un capital inicial y una tasa de interés mensual para el ejemplo",
          "Calculo el interés del primer mes y lo sumo al capital inicial",
          "Uso el nuevo total como base para calcular el interés del mes siguiente",
          "Repito la operación durante varios meses en una tabla",
          "Comparo el resultado con el del interés simple y explico por qué el tiempo importa"
        ],
        dificultad: 3
      }
    ]
  },

  "economia--finanzas--c5": {
    id: "economia--finanzas--c5",
    nombre: "Sistema financiero, bolsa y riesgo",
    preguntas: [
      {
        enunciado: "En Colombia, la entidad que vigila y controla a los bancos, las compañías de seguros y los fondos de pensiones es:",
        opciones: [
          "La Superintendencia Financiera de Colombia",
          "La Superintendencia de Industria y Comercio",
          "El Departamento Nacional de Planeación",
          "La Dirección de Impuestos y Aduanas Nacionales"
        ],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "El mercado de valores cumple una función económica porque permite que las empresas:",
        opciones: [
          "Consigan financiamiento emitiendo acciones y deuda, y que las personas compren esos títulos",
          "Fijen por acuerdo el precio de sus productos en la plaza local",
          "Soliciten al banco central la impresión de moneda para sus proyectos",
          "Reemplacen los impuestos de la nación con sus utilidades anuales"
        ],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "Una acción del mercado bursátil representa:",
        opciones: [
          "Una parte del capital de una sociedad anónima, con derechos sobre sus resultados",
          "Un préstamo que un banco hace a la empresa emisora",
          "Un certificado de depósitos a término con plazo fijo",
          "Un seguro obligatorio sobre los bienes de la compañía"
        ],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "El riesgo que puede afectar a todo el mercado y que no se elimina comprando activos de empresas distintas se llama riesgo:",
        opciones: ["sistemático", "no sistemático", "operativo", "de crédito"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "La diversificación de una cartera reduce principalmente el riesgo:",
        opciones: [
          "No sistemático, propio de una empresa o de un sector particular",
          "Sistemático, que depende de la coyuntura de todo el país",
          "De liquidez, que se refiere a la rapidez para convertir un título en efectivo",
          "Legal, asociado al incumplimiento de las normas del país"
        ],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Los títulos de deuda interna que emite la nación para financiarse se conocen como TES y su colocación se hace mediante subastas que organiza:",
        opciones: [
          "El Banco de la República por cuenta del Ministerio de Hacienda y Crédito Público",
          "La Bolsa de Valores de Colombia por encargo de las asambleas",
          "Cada banco comercial de forma independiente y sin coordinación",
          "La Superintendencia de Industria y Comercio"
        ],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Dentro del sistema financiero colombiano, las sociedades comisionistas de bolsa cumplen la función de:",
        opciones: [
          "Intermediar la compra y la venta de títulos valores en el mercado bursátil",
          "Administrar los recursos del presupuesto general de la nación",
          "Fijar la tasa de interés de referencia de la economía",
          "Cobrar los impuestos de rentas de las personas naturales"
        ],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "El encaje que deben mantener los bancos corresponde a:",
        opciones: [
          "Una parte de los depósitos que la regulación obliga a reservar, y que influye en cuánto pueden prestar",
          "El impuesto que las entidades financieras pagan a la nación cada año",
          "La utilidad que la entidad reparte entre sus accionistas",
          "El seguro voluntario que compra el ahorrador por su cuenta"
        ],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Un cuadro compara dos carteras: la primera concentra la mitad del dinero en una sola empresa de un mismo sector, y la segunda lo reparte entre varios sectores. La lectura correcta es que la primera cartera:",
        opciones: [
          "Está más expuesta al riesgo no sistemático de esa empresa y de ese sector",
          "Tiene menos riesgo porque conoce mejor a su única emisora",
          "Elimina por completo el riesgo del mercado colombiano",
          "Está obligada por la regulación a reportar ante la bolsa"
        ],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Los intereses de un crédito de consumo no pueden superar el límite que se fija a partir del interés bancario corriente certificado por la Superintendencia Financiera. Aun así, el costo real de usar una tarjeta depende de:",
        opciones: [
          "La tasa, las comisiones y los seguros obligatorios, es decir, del costo financiero total",
          "Únicamente del valor de la cuota mínima pactada con el banco",
          "El número de comercios afiliados al plástico del usuario",
          "La variación del precio del café en la bolsa de Nueva York"
        ],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Un asesor afirma que como un título subió mucho el año anterior, este año también va a subir. La evaluación correcta de esa afirmación indica que:",
        opciones: [
          "El desempeño pasado no garantiza el futuro y la decisión debe revisar riesgo, plazo y liquidez",
          "La tendencia de un año es suficiente para predecir el precio de todos los títulos",
          "La bolsa funciona con certezas y por eso el asesor no comete error",
          "El riesgo de mercado desaparece cuando un activo sube de precio"
        ],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "En una crisis de confianza, muchas personas de un mismo banco quieren retirar sus depósitos el mismo día. El problema que enfrenta la entidad es de:",
        opciones: [
          "Liquidez, porque sus activos no se convierten en efectivo con suficiente rapidez",
          "Inflación, porque los precios suben por la demanda de billetes",
          "Distribución del ingreso entre sus accionistas y sus clientes",
          "Encaje legal, porque la reserva técnica es demasiado alta"
        ],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Una familia compara tres decisiones: mantener el dinero en una cuenta corriente, comprar un CDT o comprar acciones de una empresa. El criterio correcto para ordenarlas según la relación entre riesgo y rendimiento es:",
        opciones: [
          "La cuenta corriente es la más líquida y de menor rendimiento esperado, y las acciones son las más riesgosas",
          "Las acciones son las más seguras, porque la bolsa siempre sube",
          "El CDT es más riesgoso que la acción por tener un plazo fijo",
          "Las tres alternativas tienen exactamente el mismo perfil de riesgo"
        ],
        correcta: 0,
        dificultad: 3
      }
    ],
    retos: [
      {
        titulo: "Seguir la compra de una acción desde la casa",
        descripcion: "Ordena los pasos de una operación bursátil simulada con fines educativos.",
        pasos: [
          "Abro una cuenta en una sociedad comisionista de bolsa vigilada",
          "Reviso la información financiera de la empresa emisora del título",
          "Defino el monto máximo que estoy dispuesto a perder en la prueba",
          "Registro la orden de compra y verifico las comisiones cobradas",
          "Guardo el extracto y reviso el resultado en el tiempo"
        ],
        dificultad: 2
      },
      {
        titulo: "Armar una cartera de ahorro con distintos niveles de riesgo",
        descripcion: "Ordena los pasos para construir una cartera diversificada de ejemplo.",
        pasos: [
          "Defino el objetivo del ahorro y el plazo en que lo voy a necesitar",
          "Reviso cuánto dinero puedo inmovilizar y cuánto debo mantener líquido",
          "Comparo los productos disponibles según riesgo, rendimiento y costo",
          "Divido el dinero entre alternativas de bajo, medio y alto riesgo",
          "Elijo solo entidades vigiladas por la Superintendencia Financiera",
          "Reviso la cartera cada cierto tiempo y ajusto lo que no cumple el objetivo"
        ],
        dificultad: 3
      },
      {
        titulo: "Evaluar el riesgo de un préstamo que otorga una entidad",
        descripcion: "Ordena los pasos del análisis de riesgo crediticio de una empresa pequeña.",
        pasos: [
          "Reviso la historia de pagos de la empresa que pide el crédito",
          "Analizo su flujo de caja para ver si la cuota cabe en sus ingresos",
          "Identifico las garantías que puede ofrecer si llega a incumplir",
          "Considero el riesgo del sector y de la región donde opera",
          "Comparo la probabilidad de incumplimiento con la tasa que se le cobraría",
          "Decido si el préstamo se aprueba, se ajusta o se rechaza"
        ],
        dificultad: 3
      }
    ]
  },

  "economia--pensamiento-economico--c5": {
    id: "economia--pensamiento-economico--c5",
    nombre: "Clásicos, marxismo, neoclásicos, keynesianos y alternativos",
    preguntas: [
      {
        enunciado: "La imagen de la mano invisible, según la cual los precios pueden coordinar decisiones individuales, se asocia con:",
        opciones: ["Adam Smith", "Karl Marx", "Alfred Marshall", "John Maynard Keynes"],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "En su crítica al capitalismo, Karl Marx sostuvo que la ganancia del capitalista proviene de:",
        opciones: [
          "La plusvalía, es decir, la parte del trabajo del obrero que no le es pagada",
          "La paciencia de los ahorradores que prestan su dinero",
          "El riesgo que asumen los comerciantes al transportar mercancías",
          "La decisión del Estado de fijar el precio de los salarios"
        ],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "John Maynard Keynes argumentó que en una recesión profunda el Estado debe:",
        opciones: [
          "Sostener la demanda agregada con gasto público, porque el mercado no se recupera solo con rapidez",
          "Equilibrar el presupuesto recortando el gasto en plena crisis",
          "Dejar que la tasa de interés ajuste todo por sí misma sin intervención",
          "Eliminar la moneda nacional y adoptar una extranjera"
        ],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "La explicación del precio por el juego conjunto de la oferta y la demanda, comparado con las dos hojas de una tijera, se atribuye a:",
        opciones: [
          "Los neoclásicos, como Alfred Marshall",
          "Los mercantilistas del siglo XVII",
          "El marxismo ortodoxo del siglo XIX",
          "El estructuralismo de la CEPAL"
        ],
        correcta: 0,
        dificultad: 1
      },
      {
        enunciado: "La teoría de la ventaja comparativa de David Ricardo explica por qué los países:",
        opciones: [
          "Se especializan en lo que producen con menor costo relativo y luego intercambian",
          "Deben prohibir toda importación para proteger su industria naciente",
          "Solo comercian cuando tienen la misma tecnología que su socio",
          "Fijan el precio de exportación mediante planes centrales"
        ],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "El monetarismo de Milton Friedman sostiene que una expansión sostenida de la cantidad de dinero tiende a producir:",
        opciones: [
          "Presión sobre los precios y aumento de la inflación",
          "Caída permanente del desempleo sin ningún efecto de precios",
          "Congelamiento automático de las tasas de interés del mercado",
          "Redistribución del ingreso hacia los hogares más pobres"
        ],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Joseph Schumpeter explicó el dinamismo del capitalismo con la idea de:",
        opciones: [
          "Destrucción creativa, por la que las innovaciones reemplazan actividades antiguas",
          "Lucha de clases entre propietarios y asalariados",
          "Demanda efectiva determinada por la propensión a consumir",
          "Plena competencia de un mercado con información perfecta"
        ],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "El estructuralismo latinoamericano de la CEPAL explicó el subdesarrollo señalando que los países que exportan materias primas:",
        opciones: [
          "Sufren un deterioro de sus términos de intercambio frente a los que venden manufacturas",
          "Siempre logran mayor ingreso que los países industrializados",
          "No necesitan políticas de industrialización ni de comercio",
          "Controlan la inflación con su propia política monetaria"
        ],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Amartya Sen desplazó el foco del análisis económico desde el ingreso hacia:",
        opciones: [
          "Las capacidades reales de las personas para lograr una vida que valoran",
          "La cantidad de dinero en circulación de cada país",
          "El saldo neto de la balanza comercial anual",
          "La tasa de interés de referencia del banco central"
        ],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Frente a una crisis de desempleo, un país ejecuta un plan de obras públicas y otro reduce impuestos a las empresas. La comparación correcta entre las dos salidas es que:",
        opciones: [
          "El plan de obras actúa sobre la demanda agregada con un efecto multiplicador, mientras la rebaja a empresas busca incentivar la inversión y la oferta",
          "Las dos medidas actúan exactamente sobre la misma variable del modelo macroeconómico",
          "El plan de obras pertenece al pensamiento clásico y la rebaja impositiva al keynesianismo",
          "Ninguna de las dos puede analizarse con las escuelas económicas estudiadas"
        ],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Dos estudiantes discuten si el ahorro se convierte automáticamente en inversión. La afirmación que recoge bien la diferencia entre clásicos y Keynes es:",
        opciones: [
          "Los clásicos confían en que la tasa de interés coordina ahorro e inversión, y Keynes advierte que el ahorro puede quedar como liquidez sin gastarse",
          "Los clásicos negaban la existencia del ahorro y Keynes lo consideraba el motor de la inflación",
          "Ambos coinciden en que el ahorro nunca afecta el nivel de producción",
          "Keynes sostenía que el ahorro se transforma en inversión sin ninguna mediación del sistema financiero"
        ],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Un cuadro atribuye tres explicaciones de una misma crisis: para los clásicos hay distorsiones de precios y salarios; para Marx hay contradicciones de la acumulación de capital; para Keynes falta de demanda efectiva. La lectura correcta del cuadro es que:",
        opciones: [
          "Cada escuela parte de una causa distinta y por eso propone una política diferente",
          "Las tres explicaciones son idénticas y solo cambian de vocabulario",
          "La crisis no puede explicarse con teorías económicas rivales",
          "Solo la explicación clásica admite políticas públicas"
        ],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "Un director de cine afirma: la economía es una sola ciencia neutral, sin escuelas ni supuestos. La evaluación más sólida de esa afirmación desde el pensamiento económico es que:",
        opciones: [
          "Es falsa, porque las escuelas difieren en sus supuestos sobre el mercado, el Estado y el reparto del ingreso",
          "Es cierta, porque todas las corrientes comparten el mismo objeto y las mismas conclusiones",
          "Es cierta, porque la economía dejó de discutir sus fundamentos en el siglo XX",
          "Es falsa, pero solo porque la economía no se ocupa de problemas sociales"
        ],
        correcta: 0,
        dificultad: 3
      },
      {
        enunciado: "La economía del comportamiento de Daniel Kahneman y Richard Thaler aporta a la tradición neoclásica la evidencia de que las personas:",
        opciones: [
          "Deciden con atajos mentales, aversión a la pérdida y contabilidad mental, no solo maximizando",
          "Actúan siempre de forma perfectamente racional cuando hay suficiente información",
          "Ignoran los precios relativos en todas sus decisiones de consumo",
          "No pueden comparar alternativas aunque reciban asesoría financiera"
        ],
        correcta: 0,
        dificultad: 2
      },
      {
        enunciado: "Elinor Ostrom estudió el manejo de bosques, páramos y sistemas de riego comunitarios y mostró que los bienes comunes:",
        opciones: [
          "Pueden ser gobernados por las propias comunidades con reglas locales, sin depender solo del Estado o del mercado",
          "Están condenados al agotamiento en todo caso y sin excepción",
          "Solo pueden administrarse si se privatizan por completo",
          "Corresponden exactamente a los bienes públicos puros de las finanzas"
        ],
        correcta: 0,
        dificultad: 2
      }
    ],
    retos: [
      {
        titulo: "Explicar con un ejemplo el multiplicador keynesiano",
        descripcion: "Ordena los pasos de una simulación de obra pública en el municipio.",
        pasos: [
          "Imagino que la alcaldía invierte en la remodelación de un parque",
          "Reviso cuánto gastan las familias que reciben ese dinero",
          "Miro cómo ese gasto se vuelve ingreso de otros vendedores del barrio",
          "Cuento las rondas de gasto decreciente que se producen",
          "Comparo el aumento final del ingreso local con la inversión inicial"
        ],
        dificultad: 2
      },
      {
        titulo: "Montar un debate entre Adam Smith y Karl Marx",
        descripcion: "Ordena los pasos para enfrentar las dos lecturas sobre una plataforma de trabajo por aplicación.",
        pasos: [
          "Reviso las ideas centrales de Smith sobre el mercado y la división del trabajo",
          "Reviso la crítica de Marx al salario, la explotación y la acumulación",
          "Elijo un caso actual, como los repartidores de una aplicación",
          "Formulo qué diría cada autor sobre ese caso concreto",
          "Contrasto las soluciones que cada autor propondría",
          "Cierro con mi posición argumentada y con lo que aporta cada lectura"
        ],
        dificultad: 3
      },
      {
        titulo: "Comparar dos explicaciones de una crisis financiera",
        descripcion: "Ordena los pasos para contrastar lecturas keynesiana y de la escuela austriaca.",
        pasos: [
          "Reviso los hechos: qué cayó, quién perdió empleo y cómo respondieron los Estados",
          "Leo la lectura keynesiana, que subraya la caída de la demanda y del crédito",
          "Leo la lectura de los austriacos, que subraya el crédito barato y el endeudamiento previo",
          "Contrasto las medidas que cada lectura recomendó en los países afectados",
          "Identifico qué evidencia apoya o limita a cada una de las dos lecturas",
          "Escribo una conclusión propia sobre cuál explicación es más completa"
        ],
        dificultad: 3
      }
    ]
  }
};
