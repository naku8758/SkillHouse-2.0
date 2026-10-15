# SkillHouse 2.0

Plataforma web estática (HTML + CSS + JavaScript, sin compilador) para practicar
Matemáticas, Español e Inglés mediante juegos, con tres roles: **estudiante**,
**profesor** (incluido el **director de curso**) y **administrador**.
El backend es Firebase (Authentication + Firestore); no hay servidor propio.

## 1. Estructura

```
index.html                  Página pública: portada + modal de inicio de sesión
invitado.html               Jugar sin cuenta (materia, tema, dificultad)
ayuda.html / ayuda.css      Centro de ayuda y formulario de sugerencias
firestore.rules             Reglas de seguridad (hay que publicarlas, ver §6)

css/
  tokens.css                Variables de diseño, tipografía, botones
  style.css                 Estilos de la portada y de la página de invitado
  juegos.css                Componentes compartidos por los 3 paneles y los juegos

imag/                       Logo y avatares

js/
  firebase.js               Configuración y arranque de Firebase (app única)
  auth.js                   Inicio de sesión, redirección según rol y, si ya hay
                            sesión abierta, el botón "Ingreso" pasa a "Ir a mi panel"
  sesion.js                 "Quién está conectado": índice + documento del rol
  guard.js                  Protege una página de panel (rol esperado, menú, saludo)
  catalogo.js               MATERIAS, MATERIAS_PROXIMAS y JUEGOS
  cursos.js                 CRUD de cursos (601, 602, ...) y su director
  credenciales.js           Correo autogenerado + PIN de 6 dígitos + crear cuentas
                            (guarda el PIN ofuscado en usuarios/{uid}.clave)
  claves.js                 Ver el PIN de cualquiera, generar uno nuevo y la
                            bandeja de solicitudes de cambio
  cambiar-clave.js          Formulario "cambiar mi contraseña" (perfil propio)
  lista-credenciales.js     Registro de credenciales en sesión: tabla, copiar, CSV
  grupos.js                 Clases: crear, unirse por código, solicitudes, resultados
  sala.js                   La sala de clase: en espera / abierta / cerrada y la
                            lista de asistentes (onSnapshot, no pausas de lectura)
  espera.js                 Las pantallas que comparten los juegos cuando el
                            estudiante llega antes de que el profe abra la clase
  nota.js                  Escala de 1,0 a 5,0: cómo se calcula, se promedia y se
                            lee (4,7 · Superior/Alto/Básico/Inferior)
  panel-configuracion.js    Página de configuración (perfil, cambio de clave y
                            "no recuerdo mi contraseña")
  portada.js                Números y tarjetas reales de la página de inicio
  invitado.js               Selector de práctica sin cuenta
  ayuda.js                  Buscador de FAQ + envío de sugerencias a Firestore
  ui.js / scripts.js        Animaciones, contadores, modal
  games/contenido-temas.js  Banco de contenido: 27 temas, 810 preguntas, 162 retos

interfaz-administrador/     homepagec (resumen), usuarios (todas las cuentas),
                            crear-cuenta, claves, cursos,
                            clases, materias, reportes, configuracion
interfaz-profesor/          homepageb (sus cursos), materia (crear/gestionar
                            clases), sala (la pantalla que se proyecta),
                            curso (solo director), biblioteca, perfil,
                            configuracion
interfaz-estudiante/        homepagea (materias), materia (unirse y jugar),
                            sala (sala de espera),
                            mis-clases, biblioteca, perfil, configuracion
juegos/                     quiz, puzzle, carrera (HTML + su motor JS)
```

Cada carpeta de panel tiene su propio CSS (`stylea.css`, `styleb.css`,
`stylec.css`) y todas comparten `css/juegos.css` para tarjetas, formularios,
tablas y estadísticas.

## 2. Datos en Firestore

```
usuarios/{uid}                       índice ligero: { username, email, rol, clave }
estudiantes/{uid}                    perfil de estudiante: curso, creadoPorUid, avatar...
  /resultados/{id}                   historial personal de partidas
profesores/{uid}                     tipoProfesor (estandar|director), materias[], curso
administradores/{uid}                perfil de administrador
cursos/{codigo}                      { codigo, nombre, anio, directorUid, directorNombre }
grupos/{id}                          { nombre, codigo, juego, materia, curso, tema,
                                       dificultad, profesorId, activo, sala,
                                       miembrosUids[] }
  /miembros/{uid}                    estudiante aceptado
  /solicitudes/{uid}                 pedido de ingreso pendiente
  /sala/{uid}                        el estudiante que está hoy en la sala
                                     { uid, nombre, enSala, desde }
  /resultados/{id}                   partida jugada en esa clase
                                     { uid, username, juego, puntaje, total,
                                       porcentaje, nota, fecha, ... }
solicitudes_clave/{id}               pedido de "no recuerdo mi PIN":
                                     { uid, nombre, email, rol, motivo, estado, creadoEn }
sugerencias/{id}                     opiniones que llegan desde ayuda.html
```

`usuarios/{uid}.clave` guarda el PIN **ofuscado** (XOR contra una semilla fija +
base64). No es cifrado: es un candado para que no se lea de un vistazo en la
consola de Firebase. Está ahí porque el administrador necesita firmar el cambio
ante Firebase Auth, y desde un navegador no se puede imponer una clave a otra
persona sin escribirla primero. Consecuencia honesta: quien controle el panel de
administrador puede ver todos los PINes. Es lo que se pidió; si algún día se
usaran correos reales y claves serias, ese campo tendría que desaparecer y el
restablecerse pasar a una función de servidor con el Admin SDK.

## 3. Roles, cursos y aislamiento (modelo tipo Teams)

- El **administrador** crea los cursos (601, 602...) y les asigna un **director**.
- El **director de curso** es un profesor con `tipoProfesor: "director"` atado a
  un único curso. Desde "Estudiantes" crea las cuentas de los estudiantes de ese
  grado, y solo puede crear clases de ese curso.
- El **profesor normal** solo ve, en su inicio y en el formulario de clase, las
  materias que el administrador le asignó (`profesores/{uid}.materias`). A
  cambio, ese profesor puede abrir clases de su materia **en cualquiera de los
  cursos**: el profe de Inglés ve 601, 602, ... 607 y crea su grupo de actividad
  en cada uno. Lo que no puede es dar de alta cuentas de estudiante: eso lo hace
  el administrador o el director del grado.
- El **estudiante** pertenece a un curso (`estudiantes/{uid}.curso`) y entra a un
  grupo con el **código de 6 caracteres** que se genera al crear la clase, estilo
  Teams: el profesor comparte el código, el estudiante lo escribe en su materia,
  queda una solicitud y el profesor la acepta antes de que pueda jugar.

Doble comprobación al unirte a una clase (`js/grupos.js`, `unirseAGrupo`):

1. el código debe ser de **la materia de la página** que estás usando;
2. el código debe ser de **tu curso**.

Antes solo se miraba que el código existiera, así que un código de Matemáticas
funcionaba en la página de Inglés. Ahora la plataforma lo rechaza con un mensaje
que explica por qué. Las reglas de Firestore refuerzan lo mismo al crear la clase
(`materia in docProfesor().materias` y, si eres director, `curso` debe ser el
tuyo), y **también al unirse**: una solicitud solo se escribe si el curso del
estudiante es el mismo de la clase y la clase sigue activa, y un resultado solo
se guarda a nombre de un miembro aceptado. Lo que antes era solo un filtro de
interfaz ahora lo niega el servidor, aunque alguien escriba por su cuenta.

**Mover un director** (`interfaz-administrador/cursos.html`) escribe las dos
caras de la relación en un solo lote de Firestore: `cursos/{codigo}.directorUid`
y `profesores/{uid}.curso`, y limpia el `curso` del director saliente. Se hace
por lote porque el panel antes solo movía la primera, así quien deja de dirigir
seguía viendo su curso viejo en el Inicio y Firestore le negaba crear clases
en él. Si un escrito del lote falla, fallan los dos y no quedan mitades.

### El menú del profesor

Tres opciones que suenan igual hicieron perder al profesor el hilo de dónde se
creaba una clase. Los nombres ahora son distintos entre sí:

| Menú | Página | Qué hace |
| --- | --- | --- |
| **Inicio** | `homepageb.html` | Sus materias y, dentro de cada una, **los cursos** donde dicta. Cada tarjeta de curso dice "＋ Crear clase" y abre el formulario ya con ese curso puesto. |
| **Mis clases** | `materia.html` | Todas sus clases, curso por curso, con el formulario arriba. Con `?m=` filtra la materia y con `?c=` fija el curso. |
| **Sala de clase** | `sala.html` | La pantalla para proyectar: código en grande, quiénes entraron, marcador en vivo y los botones Iniciar / En espera / Cerrar. |
| **Estudiantes** (solo directores) | `curso.html` | Matricular estudiantes del curso que dirige, exportar sus claves y ver las clases abiertas de ese curso. |

Lo que se arregló en el flujo de crear clase:

- **El formulario ya no se queda en blanco.** `materia.html` necesita dos
  lecturas (los cursos y tus clases). Mientras no llegan, los selectores muestran
  "Cargando cursos..." y el botón **Crear clase está apagado**. Antes pasaba lo
  contrario: las cajas salían vacías, uno le daba al botón y la respuesta era un
  "Selecciona el curso" que parecía un botón roto.
- **Corte de red ≠ falta de cursos.** Si la lectura de cursos falla, ahora se
  ofrece un botón *Reintentar* en vez de esconder el formulario, y la lista de
  clases se carga igual (es otra lectura).
- **Con varios cursos hay que elegir.** Antes, entrando por el menú sin `?c=`, se
  auto-seleccionaba el primer curso y la clase podía nacer para 601 cuando se
  quería crear para 602. Ahora aparece "Selecciona un curso"; con un solo curso
  se elige solo.
- **El Inicio pinta en dos tiempos y no gasta una lectura por clase.** Las
  tarjetas de curso cuestan una lectura; los contadores por curso, otra. Antes el
  resumen de partidas y promedio se calculaba aquí y costaba **una lectura por
  cada clase creada** (con sus resultados completos), así que un profesor de
  varios cursos pagaba decenas de lecturas solo por abrir la portada. Ese resumen
  ahora vive en "Mi Biblioteca", que se entra a propósito; el Inicio solo muestra
  cuántas clases tiene abiertas la sala en este momento.
- **Duplicar en otros cursos** (`materia.html`, botón en cada tarjeta). El profe
  de Inglés que dicta a los siete sextos crea la clase una vez y la copia
  marcando los cursos: cada copia lleva su tema, dificultad y juego, y sale con
  su propio código.
- **Probar el juego** abre el juego de la clase en modo práctica (sin `grupo`),
  para que el profesor vea el ejercicio antes de mandarlo. Esa partida no se
  guarda en ningún lado.
- **Copiar código** pone el código de la clase en el portapapeles para
  proyectarlo o pegarlo en el chat del grado.
- **Resultados por estudiante.** "Ver resultados" ya no es solo la lista de
  partidas: primero sale una tabla por estudiante (partidas, mejor porcentaje y
  promedio) y cuántos de los matriculados han jugado; el detalle de las últimas
  20 partidas queda debajo.

Al **jugar** pasa lo mismo por el otro lado: `grupoJugable()` (en `js/grupos.js`)
valida antes de cargar la ronda que la clase exista, siga activa, sea del juego
de esa pantalla y que el estudiante esté **aceptado** como miembro. Así, escribir
a mano `juegos/quiz.html?grupo=ID` de una clase ajena ya no deja jugar; sale el
aviso "No puedes jugar esta clase".

### La sala de clase (estilo Kahoot!)

Un curso real no puede jugar desordenado: los 30 niños entran cuando el profesor
lo dice. `grupos/{id}.sala` guarda un semáforo de tres estados y `js/sala.js` es
el único que lo lee o lo mueve:

| Estado | Quién puede jugar | Lo que ve el estudiante |
| --- | --- | --- |
| `esperando` (el que trae toda clase nueva) | nadie | "⏳ Tu profesor todavía no ha iniciado la clase" |
| `abierta` | sí | botón ▶ Entrar al juego encendido |
| `cerrada` | nadie, y ya no se reabre en la sesión | "🔒 Esta clase ya terminó" |

El bloqueo está en **tres lados**, no solo en la pantalla:

1. `grupoJugable()` devuelve el grupo marcado con `sinEmpezar` / `claseCerrada`
   en vez de dejar jugar, así que escribir la URL del juego a mano tampoco sirve;
2. `guardarResultado()` vuelve a leer el grupo antes de escribir y rechaza la
   partida si la sala sigue en espera (un error que se ve en el juego, no un
   resultado que se pierde en silencio);
3. las pantallas de `js/espera.js` explican qué esperar, con un `onSnapshot` que
   recarga la página justo cuando el profesor abre la clase.

Una clase antigua que no tiene el campo `sala` se toma como **abierta**: las
reglas del juego no cambian para lo que ya estaba creado.

**Los asistentes** viven en `grupos/{id}/sala/{uid}`, un documento por niño, y no
en un arreglo dentro del grupo. Con 30 estudiantes entrando al mismo tiempo, un
solo documento no aguanta (Firestore admite ~1 escritura por segundo por
documento) y se pisarían entre ellos. Cada quien escribe el suyo; la pantalla
los lee juntos con un `onSnapshot` sobre la subcolección.

Por eso también todo lo de la sala es **escucha en vez de pausa**: un
`setInterval` que recargue la pantalla cada 2 segundos son 30 lecturas por
minuto en cada uno de los tableros del colegio. Con `onSnapshot` el costo es de
una lectura inicial y deltas después.

"Vaciar sala" borra los documentos de asistencia entre una sesión y otra. No
quita a nadie de la clase: la matrícula sigue en `miembrosUids`.

### La nota: de 1,0 a 5,0

La escala del colegio (`js/nota.js`) es lineal: **cada 25 % de acierto vale 1
punto**, de modo que 0 % → 1,0 y 100 % → 5,0, con un decimal y coma.

| Aciertos | 0 % | 25 % | 50 % | 75 % | 100 % |
| --- | --- | --- | --- | --- | --- |
| Nota | 1,0 | 2,0 | 3,0 | 4,0 | 5,0 |

Los cortes de desempeño caen casi redondos: 60 % → 3,4 (Básico), 75 % → 4,0
(Alto), 90 % → 4,6 (Superior). Las bandas son Superior ≥ 4,5 · Alto ≥ 4,0 ·
Básico ≥ 3,0 · Inferior < 3,0, que es como se lee en un boletín.

Se calcula sobre `puntaje / total` y **no** sobre el porcentaje redondeado, para
que 1 de 3 no salga 2,4 por un redondeo doble. El resultado guarda
`porcentaje` y `nota`, pero la nota siempre se puede reconstruir a partir de
`puntaje`/`total`, así que las partidas jugadas antes de este módulo también se
muestran en escala de 5: no hubo que migrar nada.

La **nota definitiva** de un estudiante es el promedio de sus notas (no el
promedio de porcentajes convertido después), y aparece en el mismo número en la
Biblioteca y el Perfil del estudiante, en "Ver resultados" del profesor, en las
estadísticas de su Biblioteca y en los Reportes del administrador (total, por
materia, por curso y por estudiante).

### Sesión y cortes de red

`js/sesion.js` escucha `onAuthStateChanged` y decide quién es el usuario leyendo
dos documentos de Firestore. Ese par de lecturas a veces falla (el Wi-Fi del
colegio, una pestaña dormida, Firebase tardando): antes `guard.js` interpretaba
cualquier fallo como "aquí no hay nadie" y mandaba a la portada, que es el bug
que se veía al moverse rápido por el menú lateral — te sacaba al inicio y al
volver a entrar funcionaba, porque la sesión nunca se había caído.

Ahora `suscribirSesion` distingue tres resultados (`MOTIVO`): sin sesión, rol
equivocado y **no se pudo leer**. Los dos primeros sí redirigen; el tercero
reintenta la lectura dos veces (500 ms y 1,2 s) y, si sigue fallando, muestra un
aviso con botón "Reintentar" sin tocar la sesión. Además el listener ignora las
reemisiones del mismo `uid`, así que un refresco de token ya no vuelve a cablear
los botones de la página.

## 4. Cuentas y contraseñas autogeneradas

Al crear cualquier cuenta (administrador o director):

- **Correo**: se deriva del nombre completo, sin tildes ni espacios.
  `Andrés Felipe Perdomo Cangrejo` → `AndresFC@skillhouse.edu.co`; si está
  ocupado se prueban `AndresFC1@`, `AndresFC2@`... hasta el 30.
- **Contraseña**: PIN de 6 dígitos generado con `crypto.getRandomValues`
  (no `Math.random`, que es predecible). Se muestra **una sola vez** en la
  pantalla de creación, en la tabla de credenciales de la sesión, y se puede
  copiar o descargar en CSV.
- El campo de la clave está en `readonly` y tiene un botón ↻ para regenerarla
  antes de crear la cuenta.

### Quien olvida el PIN

- **Administrador** → página **🔑 Claves** (`interfaz-administrador/claves.html`).
  Ve una tabla con el PIN de todas las cuentas (filtrable y descargable en CSV)
  y, en cada fila, **Nueva clave**: genera un PIN al azar, lo aplica y lo
  devuelve en pantalla. No le piden la clave anterior ni tiene que escribirla:
  el panel toma el PIN registrado en `usuarios/{uid}.clave` y firma el cambio él
  mismo en una app Firebase secundaria, así que su propia sesión no se cierra.
  Arriba tiene la bandeja de **solicitudes de cambio** pendientes.
- **Profesor, director y estudiante** → *Configuración → No recuerdo mi
  contraseña*. Se abre un documento en `solicitudes_clave` con `estado:
  "pendiente"`; si ya tiene uno abierto, el botón queda bloqueado y no crea
  duplicados. El administrador lo atiende desde Claves y le entrega el PIN nuevo.

Cambiar la propia contraseña sigue pidiendo la actual (eso confirma que eres
tú). Lo que se quitó es el requisito de la clave actual para cambiar la de
**otra** persona.

Las reglas de `firestore.rules` son las que sostienen todo esto: solo el
administrador puede LISTAR `usuarios` (por tanto, ver los PINes), solo él o el
dueño de la cuenta pueden escribir el campo `clave`, y `solicitudes_clave` solo
se crea con el `uid` propio, con `estado: "pendiente"`, con los campos justos y
con el motivo limitado a 300 caracteres; solo el administrador puede cerrarla.
Las sugerencias de "Ayuda" tienen el mismo tope (1000 caracteres y solo los
cuatro campos que escribe `js/ayuda.js`). Un profesor que escriba a mano el
código de Claves no obtiene nada: Firestore le responde `permission-denied`.

Como el administrador ahora también corrige altas, puede escribir en
`profesores/{uid}` los campos `curso`, `materias` y `tipoProfesor` (antes estaba
prohibido, así que cambiar el curso de un director desde "Cursos" no tenía forma
de reflejarse en su ficha). `uid`, correo, nombre y rol siguen inmutables desde
el cliente.

**Estas reglas hay que volver a publicarlas** en Firebase → Firestore → Reglas
después de actualizar el código; mientras no se publiquen, el administrador no
podrá escribir `usuarios/{uid}.clave` y la página Claves saldrá vacía.

Cuentas creadas **antes** de este cambio no tienen `clave` registrada: en la
tabla aparecen como "sin registro" y el botón de nueva clave avisa de que hay
que cambiarlas desde Firebase Console → Authentication una sola vez. A partir de
ahí, todo queda sincronizado (también cuando el usuario cambia su clave desde su
Configuración, que actualiza el registro).

## 5. Qué hace cada panel

**Administrador**

- *Resumen*: conteos reales de estudiantes, profesores, clases activas y cursos,
  más las últimas sugerencias (con "Marcar atendida").
- *Usuarios*: **el padrón completo**. Cruza el índice `usuarios` con la ficha del
  rol, así que es la única pantalla que dice si una cuenta está realmente lista
  para entrar: rol, curso o materias, quién la creó, y si está "Listo para
  entrar", "Sin PIN" o "Registro incompleto" (creada a mano en Firebase Console).
  Filtro por rol y curso, búsqueda, "Solo con fallas", copiar los datos de una
  cuenta, CSV, y una tabla de clases y partidas por curso con cuántas salas están
  abiertas ahora.
- *Crear cuenta*: estudiante / profesor / director / administrador, con materia,
  curso y credenciales autogeneradas. Un director no puede asignarse a un curso
  que ya tiene director.
- *Cursos*: alta y baja de grados; no deja borrar un curso con estudiantes o
  clases.
- *Clases*: inventario filtrable de todas las clases de la plataforma.
- *Materias*: catálogo real con temas, preguntas por nivel, retos, cuántas clases
  usan cada tema y qué profesores lo dictan; avisa de temas sin contenido.
- *Reportes*: promedios por materia y por curso, y top 15 de estudiantes. Además
  del porcentaje, cada tabla trae su **nota de 1 a 5** (total, por materia, por
  curso y por estudiante).
- *Claves*: los PINes de todas las cuentas (filtro por rol, búsqueda y CSV), el
  botón de generar una nueva a cualquiera y la bandeja de solicitudes.
- *Configuración*: su perfil y cambiar su clave, con un acceso directo a Claves.

**Profesor**

- *Inicio*: la plataforma ya sabe qué materia dictas, así que no te la pregunta
  otra vez: abre la materia y **dentro salen sus cursos** (601, 602...) con las
  clases y los estudiantes reales de cada uno. Cada tarjeta dice "＋ Crear clase".
  Un director solo ve el curso que dirige; un profesor normal, todos los que
  existan.
- *Mis clases*: crear/editar/desactivar/eliminar clases, **duplicar una clase en
  otros cursos**, probar el juego antes de mandarlo, copiar el código, aceptar
  solicitudes, quitar estudiantes y ver resultados **agrupados por estudiante**.
  Con `?m=` abre una materia y con `?m=&c=` abre la materia **y** el curso (el
  selector de curso queda fijado y la lista filtrada); es como llega uno desde la
  tarjeta del curso.
- *Sala de clase* (`sala.html`): la pantalla para proyectar. Elige una de sus
  clases activas y muestra el código en grande, los asistentes que van entrando,
  el marcador en vivo con la mejor nota y el promedio de cada uno, y los botones
  **Iniciar clase / Poner en espera / Cerrar clase / Vaciar sala / Copiar
  código**. Todo llega solo por `onSnapshot`: no se recarga nada.
- *Estudiantes* (directores): crear estudiantes del curso, exportar credenciales,
  ver su lista y las clases del curso. Cambiarles una clave ya no se hace aquí:
  lo hace el administrador desde Claves (§4).
- *Biblioteca / Perfil / Configuración*: sus clases, estadísticas (partidas,
  **nota promedio de 1 a 5** y porcentaje) y ajustes. En Configuración está el
  botón "No recuerdo mi contraseña".

**Estudiante**

- *Materias*: tarjetas del catálogo + "Próximamente" (Ciencias, Sociales,
  Tecnología) y su resumen real (clases, materias con clase, partidas, **nota
  definitiva** y promedio).
- *Materia* (`materia.html?m=`): unirse con código a las clases de esa materia y
  de su curso, práctica libre por tema y dificultad, y sus clases de esa materia.
  Cada tarjeta dice si está ⏳ En espera, 🟢 lista para jugar o 🔒 cerrada.
- *Sala de espera* (`sala.html?g=`): entra con el código de la clase, ve a sus
  compañeros que ya llegaron (el propio resaltado), y el botón ▶ Entrar al juego
  se enciende solo cuando el profesor abre la clase.
- *Mis clases*: todas sus clases, con materia, curso, profesor, estado de la sala
  y botón de entrar a la sala o de jugar.
- *Biblioteca*: historial completo de partidas, con el porcentaje y la nota de
  cada una, y la nota definitiva arriba.
- *Perfil / Configuración*: sus datos, cambiar la clave con la actual y el botón
  "No recuerdo mi contraseña" (§4).

**Juegos**: Quiz de Lógica (opción múltiple), Puzzle de Código (ordenar pasos) y
Carrera Espacial (contrarreloj). Los tres son motores: reciben el tema y la
dificultad de la clase. En modo clase el resultado se guarda; en práctica no.
Las opciones de cada pregunta se barajan al cargar la ronda, así que la respuesta
correcta ya no está siempre en la primera posición. Al terminar muestran el
porcentaje y la **nota de 1,0 a 5,0** con su desempeño (§3). Si la clase sigue en
espera, no dejan jugar y explican la espera; si ya se cerró, invitan al modo
práctica.

## 6. Puesta a punto en Firebase

1. **Proyecto**: `skillhouse-64b02`, la configuración está en `js/firebase.js`.
2. **Authentication** → *Sign-in method* → activar **Email/Password**.
   Sin esto, `crearCuenta()` falla con `auth/operation-not-allowed`.
3. **Firestore** → *Reglas* → pegar el contenido de `firestore.rules` y
   **publicar**. Las reglas están en el zip pero no se aplican solas.
   Hay que volver a publicarlas después de cada cambio: la sala de clase
   (`grupos/{id}/sala/{uid}`) es una subcolección nueva y, mientras las reglas no
   estén publicadas, el estudiante no puede anotarse en la sala y el profesor no
   puede abrir ni cerrar la clase (sale "permission-denied").
4. **Base de datos**: crear la colección (modo producción o de prueba da igual,
   las reglas mandan).
5. **Primer administrador** (no se puede crear desde la app, porque la app la
   controla un administrador que aún no existe):
   1. Authentication → *Agregar usuario* → `juan@skillhouse.edu.co` y una clave
      de 6 dígitos.
   2. Copiar el **UID** y crear en Firestore el documento
      `usuarios/<UID>` con `{ username: "Juan Garzon", email: "juan@skillhouse.edu.co", rol: "administrador" }`.
   3. Crear también `administradores/<UID>` con `{ uid: "<UID>", username: "Juan Garzon", email: ..., rol: "administrador", creadoEn: <marca de tiempo> }`.
   4. Entrar desde la portada: te lleva al panel de administrador, donde ya
      puedes crear cursos, profesores, directores y estudiantes.
6. **Índices**: no hace falta crear ninguno a mano. Las consultas con `orderBy`
   van sobre una sola colección y, si Firebase las rechaza, el código reintenta
   sin ordenar.

## 7. Probar en local

Abrir los archivos con `file://` no funciona (son módulos ES). Desde la carpeta
del proyecto:

```
python3 -m http.server 8099
# y entrar a http://localhost:8099/index.html
```

Recorrido de prueba: crear un administrador (§6) → crear el curso 601 → crear un
director de Inglés del 601 → entrar con ese director y crear 3 estudiantes del
601 → crear una clase de Inglés del 601 → entrar con un estudiante y unirse con
el código → jugar y ver el resultado en "Mis clases" del profesor y en
"Biblioteca" del estudiante. Con un código de Matemáticas en la página de Inglés
tiene que salir el aviso de que es de otra materia, y con el de otro curso, que
no es el suyo.

Dos comprobaciones más de este recorrido, por si se prueba con datos viejos:
un profesor con **una sola** materia debe poder crear su primera clase desde el
menú "Mis clases" (sin entrar por la tarjeta de un curso), y al mover el director
de un curso en *Cursos*, el director saliente pierde ese curso en su inicio y el
entrante lo ve — ambas caras se escriben en el mismo lote.

Para el resto de lo nuevo: con el administrador, entrar a **Claves** y comprobar
que salen los PINes de esas cuentas y que "Nueva clave" cambia una; con un
estudiante, abrir *Configuración → No recuerdo mi contraseña*, mandar el pedido,
volver al administrador, atenderlo desde Claves y entrar con el PIN que sale.
Y para el corte de sesión: navegar rápido por el menú lateral con el Wi-Fi
apagado un segundo; debe quedar el aviso de "Reintentar", no devolverte a la
portada.

**La sala y la nota**, en este orden:

1. El profesor crea la clase y entra a **📺 Sala de clase** con ella. Sale el
   código en grande y "En espera".
2. Con un estudiante, unirse a la clase, aceptar la solicitud desde el profesor,
   y entrar a la sala del estudiante desde la tarjeta de la clase. Debe verse a
   sí mismo en la lista, con el botón de jugar apagado.
3. Escribir a mano `juegos/quiz.html?grupo=ID` con la sala en espera: tiene que
   salir "⏳ Tu profesor todavía no ha iniciado la clase", no el aviso de acceso.
4. El profesor pulsa **Iniciar clase**: la pantalla del estudiante se actualiza
   sola y el botón ▶ se enciende.
5. El estudiante juega y termina: ve el porcentaje y su nota (1,0 a 5,0 con
   coma). El marcador del tablero del profesor muestra esa partida sin recargar.
6. El profesor pulsa **Cerrar clase**: el estudiante ve "🔒 Esta clase ya
   terminó" y ya no puede guardar otra partida; lo anterior se conserva.
7. En **Mis clases → Ver resultados** del profesor, en **Biblioteca** y
   **Perfil** del estudiante, y en **Reportes** del administrador, la nota tiene
   que ser el mismo número en los cuatro lados.
8. En **👥 Usuarios** del administrador, la cuenta del estudiante debe salir
   "Listo para entrar"; una creada a mano en Firebase Console sale "Registro
   incompleto".

## 8. Límites conocidos

- El dominio `@skillhouse.edu.co` no existe: los correos son solo identificadores
  de acceso. Nunca llega un correo de recuperación automático.
- Crear o cambiar cuentas consume muchas lecturas/escrituras de Firestore para
  un curso grande; es un proyecto académico, no un multiusuario de producción.
- Las claves de 6 dígitos son PINes pensados para niños de sexto grado: son
  cómodos, no seguros frente a un ataque serio.
- El administrador ve los PINes de todos (§2 y §4). Es un requisito del
  proyecto, no una buena práctica: la ofuscación de `usuarios/{uid}.clave`
  esconde el PIN de un vistazo en la consola, no de alguien con acceso real.
- No hay servidor, así que no hay Admin SDK: cambiar la clave de otro exige
  iniciar sesión como ese usuario con su clave actual. Por eso hace falta que
  el PIN quede registrado; una cuenta creada a mano en Firebase Console no se
  puede restablecer desde la plataforma.
- Un estudiante cuya ficha no tenga `curso` (una cuenta escrita a mano en la
  consola) ya no puede unirse a ninguna clase: las reglas exigen que el curso del
  estudiante y el de la clase coincidan, y la app lo avisa en español antes de
  intentar la escritura.
- Los cursos, materias y temas nuevos se añaden editando `js/catalogo.js` y
  `js/games/contenido-temas.js`: son parte del código, no datos que un usuario
  pueda cargar desde la interfaz.

### Cuánto aguanta un colegio real

El contenido de las preguntas **no** está en Firestore: vive en
`js/games/contenido-temas.js`, que se descarga una vez con la página. Por eso una
partida no lee la base de datos por pregunta; lo que cuesta es entrar a la clase,
anotarse en la sala y guardar el resultado.

Estimación para un colegio de 12 cursos × 30 estudiantes (360 cuentas), con una
hora de clase jugada en un grupo:

| Paso | Lecturas | Escrituras |
| --- | --- | --- |
| 30 estudiantes entran a la sala (grupo + estado + lista de asistentes) | ~30 × 32 = 960 | 30 (una asistencia por documento propio) |
| 30 estudiantes juegan una partida y la guardan | ~30 × 2 = 60 | 30 |
| El profesor proyecta la sala y ve el marcador | ~40, una sola vez | 3 (cambiar el estado de la sala) |
| **Total de una hora de clase** | **~1.060** | **~63** |

Doce horas de clase al día son ~13.000 lecturas y ~750 escrituras, más el uso de
los paneles. Con eso:

- El plan **Spark** (gratis) da 50.000 lecturas y 20.000 escrituras al día:
  alcanza para unas 40 horas de clase jugada al día, o sea un colegio de este
  tamaño usando la plataforma un par de periods por grado. No es ilimitado, pero
  no se cae a la primera.
- Si el colegio la usa todo el día, se pasa a **Blaze** (pago por uso). Con las
  mismas cifras el excedente son céntimos al día; no hace falta cambiar ni una
  línea de código, solo activar la facturación en Firebase.

Lo que ya se hizo para no gastar de más, y por qué:

- **`onSnapshot` en vez de `setInterval`.** Recargar la sala cada 2 segundos
  desde 12 tableros son decenas de miles de lecturas al día en nada. Con
  escuchas, el costo es una lectura inicial y los cambios reales.
- **Un documento de asistencia por estudiante.** Firestore admite ~1 escritura por
  segundo por documento: 30 niños entrando a la vez contra un solo arreglo se
  pisarían y perderían tarjetas.
- **El Inicio del profesor dejó de leer los resultados.** Antes costaba una
  lectura por clase creada, con todas sus partidas; ahora son 3 lecturas fijas.
- **`limit()` en las consultas de resultados** (500 por clase, 200 por
  estudiante) y un aviso cuando se corta, para que una clase con años de historial
  no se trague la cuota de un día.

### Lo que quedó sin probar

La verificación de esta entrega fue estática (sintaxis de todos los `.js`, que
cada `import` nombre por nombre exista en su módulo, que ningún `href`/`src` de
los HTML apunte a un archivo inexistente, que cada `getElementById` tenga su `id`
en la página, y las llaves de `firestore.rules`) más una prueba en el navegador
de las pantallas nuevas con datos simulados y del cálculo de notas.

**No** se probó contra Firestore con sesiones reales — nadie se autenticó como
administrador, profesor ni estudiante — porque hace falta el PIN de una cuenta de
cada rol. Antes de entregarla al colegio hay que correr el recorrido de §7. Lo
que puede fallar ahí y no en una prueba estática es el permiso de Firestore:
sobre todo la subcolección nueva `grupos/{id}/sala/{uid}`, que exige publicar
`firestore.rules` de nuevo.

## 9. Repositorio y trabajo en pareja

El proyecto está en `github.com/naku8758/SkillHouse-2.0`. La carpeta de trabajo
es un clon del repositorio, así que se puede editar y commitear sin mover
archivos de sitio.

- Las carpetas del repositorio se renombraron con guiones
  (`interfaz administrador/` → `interfaz-administrador/`) porque todo el código
  enlaza con guiones. Git lo registra como renombrado, no como borrado.
- Desaparecieron, reemplazadas por páginas generales: `matematicas.html` (ahora
  `materia.html?m=matematicas`), `grupos.html`/`juegos-panel.js` del profesor y
  `juegos-panel.js` del estudiante.
- `js/games/quiz-data.js`, `puzzle-data.js` y `carrera-data.js` se unificaron en
  `js/games/contenido-temas.js`, que es la única fuente de preguntas.

Para la pareja que sigue trabajando:

```bash
git clone https://github.com/naku8758/SkillHouse-2.0.git
cd SkillHouse-2.0
git checkout skillhouse-2.0-mejorado   # la rama con estas mejoras
python3 -m http.server 5500            # y abrir http://127.0.0.1:5500
```

Antes de tocar nada, `git pull`. Para subir cambios hace falta un token de
acceso personal (GitHub ya no acepta la contraseña de la cuenta):
*Settings → Developer settings → Personal access tokens → Fine-grained token*,
con permiso de escritura sobre este repositorio.

---

Desarrollado por Aprendiz Garzón Juan y Tovar Sara — Técnico de Programación de
Software, CENIGRAF.
