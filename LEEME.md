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
  panel-configuracion.js    Página de configuración (perfil, cambio de clave y
                            "no recuerdo mi contraseña")
  portada.js                Números y tarjetas reales de la página de inicio
  invitado.js               Selector de práctica sin cuenta
  ayuda.js                  Buscador de FAQ + envío de sugerencias a Firestore
  ui.js / scripts.js        Animaciones, contadores, modal
  games/contenido-temas.js  Banco de contenido: 27 temas, 810 preguntas, 162 retos

interfaz-administrador/     homepagec (resumen), crear-cuenta, claves, cursos,
                            clases, materias, reportes, configuracion
interfaz-profesor/          homepageb (sus cursos), materia (crear/gestionar
                            clases), curso (solo director), biblioteca, perfil,
                            configuracion
interfaz-estudiante/        homepagea (materias), materia (unirse y jugar),
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
                                       dificultad, profesorId, activo, miembrosUids[] }
  /miembros/{uid}                    estudiante aceptado
  /solicitudes/{uid}                 pedido de ingreso pendiente
  /resultados/{id}                   partida jugada en esa clase
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
- **El Inicio pinta en dos tiempos.** Las tarjetas de curso cuestan una lectura;
  el resumen (clases, estudiantes, partidas, promedio) cuesta una lectura por
  cada clase creada. Se pintan primero los cursos para que se pueda crear de
  inmediato y el resumen llega después.
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
- *Crear cuenta*: estudiante / profesor / director / administrador, con materia,
  curso y credenciales autogeneradas. Un director no puede asignarse a un curso
  que ya tiene director.
- *Cursos*: alta y baja de grados; no deja borrar un curso con estudiantes o
  clases.
- *Clases*: inventario filtrable de todas las clases de la plataforma.
- *Materias*: catálogo real con temas, preguntas por nivel, retos, cuántas clases
  usan cada tema y qué profesores lo dictan; avisa de temas sin contenido.
- *Reportes*: promedios por materia y por curso, y top 15 de estudiantes.
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
- *Estudiantes* (directores): crear estudiantes del curso, exportar credenciales,
  ver su lista y las clases del curso. Cambiarles una clave ya no se hace aquí:
  lo hace el administrador desde Claves (§4).
- *Biblioteca / Perfil / Configuración*: sus clases, estadísticas y ajustes. En
  Configuración está el botón "No recuerdo mi contraseña".

**Estudiante**

- *Materias*: tarjetas del catálogo + "Próximamente" (Ciencias, Sociales,
  Tecnología) y su resumen real (clases, materias con clase, partidas, promedio).
- *Materia* (`materia.html?m=`): unirse con código a las clases de esa materia y
  de su curso, práctica libre por tema y dificultad, y sus clases de esa materia.
- *Mis clases*: todas sus clases, con materia, curso, profesor y botón de jugar.
- *Biblioteca*: historial completo de partidas y promedios.
- *Perfil / Configuración*: sus datos, cambiar la clave con la actual y el botón
  "No recuerdo mi contraseña" (§4).

**Juegos**: Quiz de Lógica (opción múltiple), Puzzle de Código (ordenar pasos) y
Carrera Espacial (contrarreloj). Los tres son motores: reciben el tema y la
dificultad de la clase. En modo clase el resultado se guarda; en práctica no.
Las opciones de cada pregunta se barajan al cargar la ronda, así que la respuesta
correcta ya no está siempre en la primera posición.

## 6. Puesta a punto en Firebase

1. **Proyecto**: `skillhouse-64b02`, la configuración está en `js/firebase.js`.
2. **Authentication** → *Sign-in method* → activar **Email/Password**.
   Sin esto, `crearCuenta()` falla con `auth/operation-not-allowed`.
3. **Firestore** → *Reglas* → pegar el contenido de `firestore.rules` y
   **publicar**. Las reglas están en el zip pero no se aplican solas.
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
