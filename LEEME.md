# SkillHouse 2.0 — Plataforma de práctica de 1° a 11°

Esta es la versión estándar, la de la marca SkillHouse. La desarrollamos Sara
Tovar y yo para el proyecto de técnico y es la que se vende tal cual: cuando un
colegio la pide con su propia identidad, de acá sale una copia con sus colores, su
logo y sus datos (así está montada la versión del Colegio Manuel Cepeda Vargas).

La página sirve para que los muchachos de **1° a 11°** practiquen las
**catorce áreas** jugando, con cuatro caras en la misma cuenta: estudiante,
profesor, **director de curso** (un profesor al que le ponen un curso encima) y
**administrador**. El rol que manda se llama igual en la pantalla y por dentro:
`administrador` es el valor que vive en Firestore y en las reglas.

Cada grado juega distinto. Eso no es un adorno: un niño de 1° apenas está
aprendiendo a leer y un de 11° ya lee y razona en abstracto, así que el grado
decide cuántas opciones tiene una pregunta, cuántas preguntas trae la ronda, si
hay reloj, si la pantalla le lee la pregunta en voz alta y de qué tamaño se
pinta la letra. Está explicado en el §2, y la nota de 1,0 a 5,0 en el §6.

No es una app con servidor propio. Es HTML, CSS y JavaScript puro, sin
compilador ni nada que instalar, y lo que hace de base de datos es Firebase
(Authentication para entrar y Firestore para guardar todo). O sea que el código
son archivos planos y la "nube" es Firebase, que en el plan gratis da de sobra
para un colegio pequeño.

Este archivo está escrito para que alguien que no ha visto el proyecto lo prenda,
lo mueva y entienda qué está pasando por debajo. Si te pierdes, el §2 y el §8 son
los que resuelven el 90 % de las dudas.

## 1. Prenderlo en tu PC

Clonas (o descomprimes el zip), entras a la carpeta y levantas un servidorito
cualquiera. No sirve abrir el `index.html` con doble clic (los archivos son
módulos ES y el navegador los bloquea por `file://`), tiene ser por `http`:

```bash
git clone https://github.com/naku8758/SkillHouse-2.0.git
cd SkillHouse-2.0
git checkout main                       # todo el trabajo está acá
python3 -m http.server 5500
```

Y abres `http://127.0.0.1:5500`. Con eso ya está: no hay `npm install`, no hay
build y no hay `package.json` que instalar. El SDK de Firebase se carga desde el
CDN de Google en cada archivo (`js/firebase.js` y los `import` de las páginas),
así que la carpeta funciona sola con cualquier servidor estático.

Si lo que quieres es ver la portada sin cuenta, con eso basta. Para entrar con
una cuenta necesitas que Firebase esté configurado y con las reglas publicadas
(§10), si no el login te bota error.

## 2. Qué pasa cuando uno entra (el flujo completo)

Te lo cuento seguido, seguido, porque es la parte que uno no ve en el código:

1. Abres `index.html`. Sale la portada con las materias, los juegos y cuatro
   números. Esos números no son inventados, los cuenta `js/portada.js` leyendo el
   catálogo real (`js/catalogo.js`): 14 áreas con práctica, 319 temas
   disponibles, 11 grados con contenido propio y 3 modalidades de juego. Por eso
   si mañana agregas un tema, el número de la portada sube solo.
2. Tocas "Ingreso". Se abre el modal de login y escribes correo + PIN.
   `js/auth.js` llama a `signInWithEmailAndPassword` de Firebase Auth. Ahí
   Firebase Auth solo responde "esa contraseña sí es de ese usuario" o "no es".
   Firebase Auth no sabe nada de roles.
3. Si la clave pegó, el código hace UNA lectura a Firestore: el documento
   `usuarios/{uid}`. Ese documento es como un índice liviano que trae
   `username`, `email` y `rol`. Con el `rol` se decide a dónde te manda:
   - `estudiante` → `interfaz-estudiante/homepagea.html`
   - `profesor` → `interfaz-profesor/homepageb.html`
   - `administrador` → `interfaz-administrador/homepagec.html`
4. Ya en tu panel, cada página que abres pasa por `js/guard.js`. El guard hace
   tres cosas: se fija de nuevo quién eres (`js/sesion.js` lee `usuarios/{uid}` y
   en paralelo tu ficha de rol, que es `estudiantes/{uid}`, `profesores/{uid}` o
   `administradores/{uid}`), te manda a la portada si no hay sesión o si el rol
   no es el de esa carpeta, y arma el menú lateral y el saludo. Por eso un
   profesor que escriba a mano la URL del panel del administrador vuelve a la
   portada en vez de verse en una pantalla vacía.
5. Si ya tenías sesión abierta y vuelves a la portada, el botón "Ingreso" cambia
   a "Ir a mi panel". Es un detalle, pero evita que la gente se cree una segunda
   sesión por error.

El paso 4 tiene una cosa que me costó arreglar. `sesion.js` hace dos lecturas, y
a veces fallan (el wifi del colegio es lo que es, o la pestaña estaba dormida).
Antes el guard interpretaba cualquier fallo como "aquí no hay nadie" y te
sacaba a la portada. Eso era el bug de "navego rápido por el menú y me tumba".
Ahora distingue tres casos: no hay sesión (te saca), rol equivocado (te saca), y
no se pudo leer (reintenta dos veces, 500 ms y 1,2 s, y si sigue fallando te
deja en la página con un cartel de "Reintentar"). La sesión no se toca.

### El grado decide cómo se juega

Es la regla que hace que una sola plataforma sirva para los once grados, y está
en `js/malla.js`: **el código del curso dice el grado, el grado dice el ciclo y el
ciclo dice cómo se juega**. Los ciclos no son invento nuestro, son los tramos en
que el Ministerio de Educación agrupa los Estándares Básicos de Competencias.

| Ciclo | Grados | Opciones | Preguntas por ronda | Reloj | Voz | Letra | Pasos del Puzzle |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `c1` | 1° y 2° | 2 | hasta 6 | sin reloj | lee la pregunta | 1,35 | 3 |
| `c2` | 3° a 5° | 3 | hasta 8 | 24 s | lee la pregunta | 1,2 | 4 |
| `c3` | 6° y 7° | 4 | hasta 10 | 18 s | no | 1,05 | 4 |
| `c4` | 8° y 9° | 4 | hasta 10 | 14 s | no | 1 | 5 |
| `c5` | 10° y 11° | 4 | hasta 12 | 11 s | no | 1 | 6 |

Dónde se nota cada una en la pantalla:

- **Opciones y ronda**: `js/games/banco.js` recorta la ronda al tamaño del ciclo.
  El recorte **nunca quita la respuesta correcta**: conserva esa y descarta
  distractores de atrás hacia delante, que es donde el banco tiene los menos
  plausibles. Después baraja, para que la correcta no salga siempre arriba.
- **Reloj**: en 1° y 2° no hay tiempo (`tiempo: 0`), y la Carrera Espacial de esos
  grados se juega sin cuenta regresiva.
- **Voz**: en 1° a 5° aparece el botón 🔊 Escuchar, que lee el enunciado en
  español con la voz del navegador (`js/games/ajustes.js`). Si el computador no
  tiene voz en español, el botón ni aparece; no se rompe nada.
- **Letra y botones**: `.juego-caja.ciclo-c1` sube la variable `--fuente-juego`, y
  en 1°-2° y 3°-5° las opciones salen en una sola columna, porque apuntar a dos
  botones grandes es más fácil que elegir entre cuatro en rejilla.

Un tema lleva su ciclo dentro del identificador (`matematicas--numeracion--c3`),
así que el juego no necesita saber el curso del niño: con el tema ya sabe cómo
tratarse. El campo `abstracto` de la tabla no lo lee la interfaz: es la regla con
la que se escribió el banco (en 1°-5° enunciados concretos y cortos, desde 6° ya
con variables y texto largo).

## 3. Los tres roles, qué hace cada uno

### Administrador

Es el dueño de la plataforma. Se llama igual en la pantalla y por dentro:
`administrador` es el valor de `usuarios/{uid}.rol`, el nombre de la carpeta
(`interfaz-administrador/`) y el de la colección de fichas
(`administradores/{uid}`).

Lo que hace:

- **Crear los cursos** y ponerle un director a cada uno. Ya no se teclea el
  código: se escoge **grado + número de grupo + año** y la plataforma arma el
  código sola (6 + 1 = `601`, 6 + 11 = `611`, 11 + 3 = `1103`...), que es como se
  numeran los grupos en los colegios colombianos: los últimos dos dígitos son el
  grupo y lo de antes es el grado, así que caben grupos del 1 al 99 y grados del
  1 al 11. La letra también sirve y equivale al número (A = 1, B = 2 … K = 11),
  así que los cursos creados con "6 + A" siguen siendo `601`. O sea que el
  administrador puede crear el grado entero (601 a 607) y ponerle a cada grupo su
  propio director. El botón **Copiar código** de cada fila es para pasárselo al
  director.
- **Crear cuentas**: estudiante, profesor, director o administrador, con materia y
  curso. Le autogenera el correo y el PIN, y le muestra la clave para copiarla o
  descargar el CSV; después esa clave sigue visible para el administrador en Claves y
  en el padrón de Usuarios. A un estudiante también se lo puede crear el
  director de su curso (es lo único que lo diferencia de un profesor normal, §3).
- **👥 Usuarios**: el padrón de todas las cuentas. Cruza la colección `usuarios`
  con la ficha de rol, así que es la única que te dice si una cuenta está de
  verdad lista para entrar. No es una tabla plana: los estudiantes salen
  **agrupados por curso** (el título dice nombre del curso, **año** y quién es el
  director) y los profesores **agrupados por la materia que dan**. Si un profe da
  dos materias aparece en los dos bloques, que es como se lee un directorio de
  colegio real. Cada fila muestra el **PIN** de esa cuenta, y tiene
  un botón para ocultarlos (por si compartes pantalla en una reunión), un botón
  "Nueva clave" para resetearla sin irse a otra página, un **selector de curso**
  para reasignar a un estudiante, el botón **Materias y grados** y un botón
  **Ficha**. Filtros por **rol, año, curso y materia** —los selectores se acomodan
  a lo que escogiste, así que con "Administradores" ya no aparece un selector de
  curso que daría cero resultados—, buscador, "solo con fallas" y exportar CSV.
  Ojo con el CSV: trae las claves, no lo mandes por chat.
- **Materias y grados** (botón en cada fila de profesor): acá le dices a un
  profesor **qué áreas dicta y en qué grados**. Los grados marcados son los únicos
  cursos donde puede crear clases; sin marcar ninguno, puede usar todos, que es
  como funcionaba antes. El director de curso siempre tiene además el curso que
  dirige, aunque no le marques el grado. Se guarda en `profesores/{uid}` como
  `materias: []` y `grados: []`, y las reglas de Firestore (`dictaEseCurso`) son
  las que lo hacen cumplir: un profe de 6° que escriba a mano una clase para 11°
  recibe `permission-denied`, no un formulario que se lo permite.
- **Ficha de cualquier persona** (botón **Ficha**): el acceso a todos los datos de
  una cuenta, en una sola pantalla, con el mismo encabezado
  para los tres roles (correo, curso y año, quién creó la cuenta, cuándo se creó)
  y el contenido según el rol:
  - **Estudiante**: partidas guardadas, promedio de aciertos, nota definitiva de
    1 a 5, materias jugadas, las clases de su curso frente a las que realmente
    tiene una partida, su tabla de notas por clase y sus últimas 25 partidas con
    fecha, juego, materia, puntaje y nota. Además el promedio del curso entero,
    para que la ficha no muestre al niño aislado.
  - **Profesor**: clases creadas y activas, cursos donde dicta, estudiantes
    matriculados en esos cursos, partidas jugadas en sus clases y nota promedio,
    con la tabla de sus clases y el rendimiento de cada uno de sus muchachos. No
    tiene notas propias: no hay nada de rendimiento personal que mostrar, así que
    la ficha muestra lo que sí aplica, que es su trabajo.
  - **Administrador**: el alcance de su cuenta (cuántas cuentas administra,
    cuántos estudiantes, profesores, cursos, clases y salas abiertas ahora), que
    es lo que le corresponde. Se leen las 200 partidas más recientes del
    estudiante y las de hasta 15 clases de un profesor, con un aviso en pantalla
    cuando el historial es más largo: una ficha no puede congelar el panel.
- **Borrar cualquier cuenta, incluidos otros administradores.** Es la acción más
  grande del panel y está en cada fila de Usuarios. Pide confirmación y que se
  escriba `SI`. Qué se va: el usuario de Firebase Auth, la ficha del rol, el
  documento `usuarios/{uid}`, sus filas en las clases (miembro y presencia en la
  sala), sus notas de partidas y su historial, y se limpia el curso que dirigía.
  Si el borrado es un profesor, se borran también sus clases. Dos salvavidas: no
  deja borrar al **último administrador** (si no, nadie vuelve a entrar al panel),
  y si te borras a ti mismo la sesión se cierra sola.
- **🔑 Claves**: la misma información pero en tabla plana, y acá está la bandeja
  de **solicitudes de cambio** (los pedidos de "no recuerdo mi PIN"). Cuando
  atiendes un pedido le generas el PIN nuevo y se lo entregas en persona.
- **Cursos, Clases, Materias y Reportes**: altas y bajas de grados, inventario de
  todas las clases, el catálogo con cuántas clases usan cada tema, y promedios por
  materia, por curso y por estudiante con la nota de 1 a 5. El libro de notas de un
  curso completo (`Notas por curso`) está en el panel del profesor (§6), y el
  administrador no lo necesita como página aparte: ya ve lo mismo desde dos ángulos,
  el promedio del curso en Reportes y la ficha individual en Usuarios.
- **Borrar un curso** ya no se niega si el curso tiene contenido: el botón abre un
  recuadro en la misma página con lo que se va a perder y pide escribir `SI`. Al
  confirmar se borran sus clases con las fichas de miembro, la sala y las notas; los
  estudiantes **no se borran**, quedan sin curso y el administrador los reasigna
  desde Usuarios; y el profesor que lo dirigía vuelve a profesor estándar. Un curso
  vacío se borra sin más. No deja asignarse a él mismo como director si el curso ya
  tiene uno.

### Profesor (y director de curso)

El profesor ya tiene sus materias asignadas por el administrador (`materias` en
su ficha, y pueden ser más de una), así que la plataforma nunca se las vuelve a
preguntar.

- **Inicio** (`homepageb.html`): la lista de cursos se divide sola en dos bloques.
  Si eres director aparece arriba **🏠 Tu curso de dirección** con su código y un
  atajo a "👥 Estudiantes y claves del curso 601 →"; debajo sale **Otros cursos**
  (si no diriges ninguno, el primer título es simplemente "Cursos que dictas").
  Dentro de cada curso va una tarjeta por materia —si dictas dos materias, te
  salen los cursos de las dos—, con las clases y los estudiantes reales de cada
  una. Cada tarjeta dice "＋ Crear clase" y te lleva al formulario ya con ese curso
  puesto.
- **Mis clases** (`materia.html`): crear, editar, desactivar o eliminar clases;
  **duplicar una clase en otros cursos** (el profe de Inglés que dicta a los
  siete sextos la crea una vez y la copia marcando los cursos, cada copia sale
  con su propio código); probar el juego antes de mandarlo; **el código de cada
  clase está siempre visible en la tarjeta**, con su botón Copiar, sin tener que
  abrir la sala; quitar estudiantes; y ver resultados agrupados por estudiante
  (partidas, mejor porcentaje y promedio de cada uno). **Ya no hay solicitudes que
  aceptar**: el niño que escribe el código entra derecho, así que la lista de la
  tarjeta es el registro de quién ha jugado, no un permiso.
- **Notas por curso** (`notas-curso.html`): el libro de notas, la tabla que el
  colegio pide al cierre del periodo. Cada fila es un estudiante matriculado en el
  curso y cada columna una clase tuya en ese curso, con la nota definitiva al
  final y un resumen del curso. Se puede bajar. La lectura va por curso y en
  paralelo, y por eso la materia es un filtro recomendado: en un grado con varias
  asignaturas propias, "todas" pueden ser media centena de clases. Está explicado
  en el §6.
- **Sala de clase** (`sala.html`): la pantalla para proyectar. Código gigante,
  quiénes van entrando, marcador en vivo con la mejor nota y el promedio de cada
  uno, e Iniciar / En espera / Cerrar / Vaciar sala / Copiar código.
- **Estudiantes** (`curso.html`, esto solo lo ve un **director de curso**): crear
  las cuentas de los estudiantes de su curso, exportar credenciales y ver las
  clases del curso. Arriba de todo le muestra en grande el **código de su curso**
  con un botón de copiar: es el mismo código que ve el administrador en Cursos, y es
  el "plan b" de sus estudiantes (ver más abajo). Las cuentas que crea el
  administrador no salen en esta lista: solo las que creó él.

La diferencia entre un profesor normal y un director:

- **El director crea las cuentas de sus estudiantes** (`curso.html`). Es la única
  diferencia real de permisos con un profesor normal.
- Los **cursos donde puede crear clases** son los grados que le marcó el
  administrador. Un director tiene además **siempre** el curso que dirige, aunque no
  le hayan marcado ese grado, porque ahí es donde matricula a sus muchachos. Con
  un solo curso en la lista no aparece el botón **Duplicar en...**: no hay dónde
  duplicar.
- El profesor normal no ve la pantalla de Estudiantes y no puede crear cuentas.
- Al cambiar el director de un curso desde **Cursos**, el saliente vuelve a
  profesor normal en el mismo movimiento, y si el que llega ya dirigía otro
  curso ese otro queda sin director. Nadie dirige dos cursos a la vez.

### Estudiante

- **Materias** (`homepagea.html`): las tarjetas de las **catorce áreas** del
  catálogo, cada una con los temas que le tocan a su grado, y su resumen real:
  clases, partidas jugadas, nota definitiva y promedio.
- **Materia** (`materia.html?m=ingles`): adentro está la sección **Agregar grupo**,
  donde escribe el **código de 6 caracteres** que le pasa el profe y entra al
  instante (sin aprobación, §4). También ve en la lista las clases activas de su
  curso, a las que entra **sin código** con solo tocar la tarjeta, y puede
  practicar libremente por tema y dificultad sin clase. Cada tarjeta de clase le
  dice si está ⏳ en espera, 🟢 lista para jugar o 🔒 cerrada.
- **Sala de espera** (`sala.html?g=`): entra por la tarjeta de la clase o por el
  código, ve a sus compañeros que ya llegaron y el botón ▶ Entrar al juego está
  apagado hasta que el profe abra la clase. Se prende solo, sin recargar la
  página.
- **Mis clases**, **Biblioteca** (historial de partidas con porcentaje y nota de
  cada una), **Perfil** y **Configuración**.
- **El "plan b" del curso** (está en **Perfil**): la cuenta de un estudiante ya
  nace matriculada en su curso, pero si ese vínculo se pierde —le movieron la
  ficha, borraron el curso, lo crearon a mano en Firebase Console— el niño se
  queda fuera de todas las clases y ni siquiera ve sus materias. Cuando su curso
  está vacío, Perfil le muestra un cuadro para escribir el **código del curso**
  (tres dígitos, o cuatro en 10° y 11°) que le dio su director, y se reengancha
  solo.
  Lo importante: **solo sirve para rellenar un curso vacío**, no para cambiarse
  de grado. Si un estudiante está en 602 y quiere irse a 601 porque se sabe el
  código, Firestore le niega la escritura (`firestore.rules`, `estudiantes`);
  ese cambio lo hace el administrador desde el selector de la fila en Usuarios.
  Tampoco es una puerta de registro: aquí no se crean cuentas escribiendo un
  código, la cuenta siempre la crea el director o el administrador.

### Invitado

`invitado.html` deja jugar sin cuenta: se escoge **grado**, materia, tema y
dificultad y se abre el juego. El grado no es decorado: es lo que trae el ciclo, y
por eso un invitado de 2° ve dos opciones y sin reloj, mientras que uno de 11° ve
cuatro y once segundos por pregunta. Es para que el colegio muestre la plataforma
en una feria sin crear cuentas. Esa partida no se guarda en ninguna parte.

## 4. Cómo entra un estudiante a una clase (y por qué a veces no)

Hay dos puertas, y la segunda es la que se usa en el salón:

**Puerta 1 — sin código.** La página de la materia le lista las clases activas
**de su curso**. Como la pertenencia a la clase es simplemente "está en el mismo
curso", toca la tarjeta y entra: se anota en la lista de la clase él solo
(`anotarParticipacion`, en `js/grupos.js`) y queda en la sala esperando a que el
profe inicie. En un salón de 30 niños esto es lo que hace que la clase arranque
en un minuto en vez de quedarse esperando que el profe acepte 30 solicitudes.

**Puerta 2 — con el código de la clase.** En **Agregar grupo** escribe los 6
caracteres que le dio el profe. `unirseAGrupo()` busca el código, valida y lo
mete en `miembrosUids`. **No queda ninguna solicitud pendiente**: en cuanto el
código es válido ya está dentro. Si su cuenta no tenía curso, el mismo movimiento
lo matricula en el curso de esa clase (solo rellena un curso vacío, §3).

Al escribir el código se revisan cuatro cosas, no una:

1. Que el código exista.
2. Que sea de **la materia de la página** donde estás.
3. Que la clase siga **activa**.
4. Que la clase sea **de tu curso**.

Antes solo se miraba que el código existiera, así que un código de Matemáticas
funcionaba en la página de Inglés. Ahora cada rechazo sale con un mensaje que te
dice cuál de las cuatro fue. Y no es solo un filtro de interfaz: las reglas de
Firestore niegan la escritura en el servidor (`puedeParticipar`), así que alguien
que escriba el `fetch` a mano tampoco pasa. Lo mismo al guardar una partida: solo
se escribe a nombre de alguien del curso.

Lo que **no** cambió: la lista de estudiantes de la clase (`miembrosUids`) sigue
siendo el registro de los que jugaron, no un permiso. Si un niño aparece ahí, no
significa que el profe lo aceptó; significa que entró.

## 5. La sala de clase estilo Kahoot

Un curso real no puede jugar desordenado: los 30 muchachos entran cuando el
profesor lo dice. Por eso cada clase tiene un semáforo en `grupos/{id}.sala`, y
`js/sala.js` es el único que lo lee o lo mueve:

| Estado | Quién puede jugar | Qué ve el estudiante |
| --- | --- | --- |
| `esperando` (el que trae toda clase nueva) | nadie | "⏳ Tu profesor todavía no ha iniciado la clase" |
| `abierta` | sí | el botón ▶ Entrar al juego encendido |
| `cerrada` | nadie | "🔒 Esta clase ya terminó" |

El bloqueo está en tres lados para que no se pase de lista:

1. `grupoJugable()` (en `js/grupos.js`) valida antes de cargar la ronda que la
   clase exista, siga activa, sea del juego de esa pantalla y que el estudiante
   sea del curso de la clase o ya esté anotado en ella. Con eso, escribir
   `juegos/quiz.html?grupo=ID` a mano tampoco sirve.
2. `guardarResultado()` vuelve a leer el grupo antes de escribir y rechaza la
   partida si la sala sigue en espera. Sale un error en el juego, no un resultado
   que se pierde en silencio.
3. Las pantallas de `js/espera.js` explican qué esperar, con un `onSnapshot` que
   recarga justo cuando el profe abre la clase.

Dos decisiones de arquitectura acá, que no son de gusto sino de cupo:

- **La asistencia es un documento por niño** (`grupos/{id}/sala/{uid}`), no un
  arreglo dentro del grupo. Firestore aguanta como 1 escritura por segundo por
  documento; 30 muchachos entrando al mismo tiempo contra un solo arreglo se
  pisarían y se perderían tarjetas.
- **Todo es escucha en vez de pausa.** Un `setInterval` que recargue la sala cada
  2 segundos son 30 lecturas por minuto en cada tablero del colegio. Con
  `onSnapshot` pagas una lectura inicial y deltas después.

Una clase vieja que no tenga el campo `sala` se toma como **abierta**, así lo que
ya estaba creado no cambia de comportamiento. Y "Vaciar sala" borra los documentos
de asistencia entre sesión y sesión, pero no quita a nadie de la clase: la
matrícula sigue en `miembrosUids`.

**Cómo se ve la clase completa, del lado del salón.** El profe proyecta
`sala.html`, escoge la clase y la deja en "En espera". Los muchachos entraron ya
por la tarjeta de su curso, sin código (§4), y ven sus nombres aparecer en la
lista de la sala. Cuando él pulsa **Iniciar clase**, el `onSnapshot` de cada
teléfono prende el ▶ solo, sin recargar. Terminado el juego, el marcador del
tablero ya tiene la mejor nota y el promedio de cada uno. Cuando pulsa **Cerrar
clase**, a los que quedaron abiertos les sale "🔒 Esta clase ya terminó" y
`guardarResultado` deja de aceptar partidas.

## 6. La nota, de 1,0 a 5,0

Como en el colegio. Está en `js/nota.js` y la regla se dice en una frase:
**cada 25 % de acierto vale 1 punto**. 0 % → 1,0, 100 % → 5,0, siempre con un
decimal y con coma.

| Aciertos | 0 % | 25 % | 50 % | 75 % | 100 % |
| --- | --- | --- | --- | --- | --- |
| Nota | 1,0 | 2,0 | 3,0 | 4,0 | 5,0 |

Con esa recta los cortes caen casi redondos: 60 % da 3,4 (Básico), 75 % da 4,0
(Alto), 90 % da 4,6 (Superior). Las bandas son Superior ≥ 4,5, Alto ≥ 4,0,
Básico ≥ 3,0, Inferior < 3,0.

Se calcula sobre `puntaje / total` crudo, no sobre el porcentaje redondeado, para
que 1 de 3 no salga con error por redondear dos veces. La **nota definitiva** de
un estudiante es el promedio de sus notas (no el promedio de porcentajes y luego
convertido), y sale con el mismo número en la Biblioteca y el Perfil del
estudiante, en "Ver resultados" del profe y en Reportes del administrador.

Importante si siguen trabajando sobre datos viejos: la nota siempre se puede
reconstruir a partir de `puntaje`/`total`, así que las partidas guardadas antes de
este módulo también se muestran en escala de 5. **No hubo que migrar nada.**

### El curso como base de datos (`js/libro-curso.js`)

Es lo que pide cualquier colegio: que cada curso tenga su propia base de datos,
con sus estudiantes y sus notas, y que el profesor vea esos datos. Se lee por
curso en una
sola pasada y en paralelo: el padrón de `estudiantes` filtrado por `curso`, mis
clases de ese curso (`obtenerGruposDelCurso`) y los resultados de cada clase. Con
eso arma la tabla: una fila por estudiante, una columna por clase, la nota
definitiva al final y el promedio del curso.

Por qué se arma en el cliente y no en el servidor: el proyecto está en plan Spark,
sin Cloud Functions ni Admin SDK, así que **no hay dónde correr agregación del
lado del servidor**. Para que eso no dispare la cuota, cada clase lee un máximo de
resultados y las lecturas van en paralelo, y la pantalla solo se carga cuando el
profesor pulsa Cargar libro.

Quién puede ver qué, según `firestore.rules`:

- El **profesor** lista `estudiantes` solo cuando el **grado del curso está entre
  los que le asignaron** (`allow list ... dictaEseCurso`), y solo lee las notas de
  sus propias clases. Es decir: el profe de Matemáticas de 6° ve el libro de 601 a
  607 en Matemáticas, no el de 11°, y no ve las notas que ese niño sacó con otro
  profesor.
- El **administrador** lo ve todo: cualquier ficha de Usuarios con el historial
  completo (§3).
- El **estudiante** solo lee su propia ficha y su propio historial.

Ojo con esto si son abogados o rectoría: el libro de notas **ensancha quién ve
datos de un menor**, porque ahora un profesor distinto al director puede ver sus
notas y su nombre. Está acotado por grado y por materia en las reglas, pero la
autorización para tratar esos datos la tiene que dar el colegio (§13).

## 7. Las cuentas, los correos y los PINes

Cuando el administrador o un director crean una cuenta:

- **Correo**: se arma del nombre completo, sin tildes ni espacios y **todo en
  minúscula**, porque así es como Firebase Auth lo guarda y lo compara.
  `Andrés Felipe Perdomo Cangrejo` → `andresfpc@skillhouse.edu.co` (el primer nombre va
  completo y del resto solo la inicial). Si está ocupado prueba `andresfpc1@`,
  `andresfpc2@`... hasta el 30.
- **PIN**: 6 dígitos con `crypto.getRandomValues` (no `Math.random`, que es
  predecible). Sale en la pantalla de creación y sigue visible después en
  Claves y en el padrón de Usuarios, que son páginas del administrador. Se
  puede copiar o descargar en CSV. Se guarda ofuscado, no encriptado: si se
  borra el documento `usuarios/{uid}` la clave se pierde con él y hay que
  generar una nueva.
- El campo de la clave está en `readonly` y tiene un ↻ para regenerarla antes de
  crear la cuenta.

**Quién olvida el PIN:**

- El **administrador** no pide nada: entra a Claves o al padrón de Usuarios, ve la
  clave de cualquiera y le genera una nueva. No tiene que escribir la anterior.
- El **profesor, el director y el estudiante** van a *Configuración → No recuerdo
  mi contraseña*. Eso abre un documento en `solicitudes_clave` con
  `estado: "pendiente"`. Si ya tiene uno abierto, el botón se bloquea y no crea
  duplicados. El administrador lo atiende desde su bandeja.

Cambiar la **propia** contraseña sí sigue pidiendo la actual, porque eso es lo que
confirma que eres tú. Lo que quitamos fue el requisito de la clave actual para
cambiar la de **otra** persona, que era lo que no se podía cumplir en una app sin
servidor.

### Cómo demonios hace el administrador para cambiar la clave de otro

Firebase Auth no deja imponerle una contraseña a otro usuario desde el navegador.
Lo único que funciona es iniciar sesión como ese usuario y cambiársela. Por eso
`usuarios/{uid}` guarda el PIN con un campo `clave`, **ofuscado** (XOR contra una
semilla fija + base64), y `js/claves.js` abre una app Firebase secundaria, inicia
sesión con ese PIN, firma el cambio y cierra esa sesión. Así la sesión del
administrador no se cae en el proceso.

Dejo esto claro porque es el punto flaco del proyecto y no quiero que nadie lo
descubra pensando que es cifrado: **ofuscación no es encriptación**. Sirve para
que el PIN no se lea de un vistazo en la consola de Firebase. No sirve contra
alguien que tenga acceso real al proyecto. Si algún día esto se usa con correos
reales y claves serias, el campo `clave` tiene que desaparecer y el restablecerse
tiene que pasar a una función de servidor con el Admin SDK.

### Y cómo la borra: el mismo truco, aplicado al revés

Borrar el documento de Firestore es fácil, pero el usuario de **Firebase Auth**
no se puede borrar desde el navegador sin el Admin SDK —y este proyecto está en
el plan gratuito (Spark), que no tiene Cloud Functions—. Se resuelve igual que
el cambio de clave: como el PIN guardado **es** la contraseña real de Auth,
`js/credenciales.js:eliminarCuenta` abre una app secundaria, firma como el
interesado con su PIN y llama a `deleteUser()`. `deleteUser()` sí procede porque
esa sesión es la del propio usuario.

Después vienen los documentos, en lotes de 400 operaciones: la ficha del rol, el
índice `usuarios/{uid}`, sus filas en `grupos/*/miembros`, `sala` y
`resultados`, su ficha en `grupos/*/resultados`, su historial en
`estudiantes/{uid}/resultados`, sus `solicitudes_clave`, el `miembrosUids` de
cada clase (se saca con `arrayRemove`) y el `directorUid` de los cursos que
dirigía. **Firestore no borra subdocumentos en cascada**, así que eso está
escrito a mano y hay que mantenerlo a la par si aparece una colección nueva.

Tres cosas que conviene saber:

- Si el PIN guardado ya no es la contraseña de Auth (alguien la cambió a mano en
  Firebase Console), la firma falla: la plataforma **avisa en pantalla** y sigue
  borrando lo de Firestore. El correo queda ocupado hasta que esa cuenta se borre
  también en Console.
- Un profesor borrado se lleva **sus clases** (los grupos y todo lo de adentro).
  Es la única forma de no dejar clases sin profesor.
- El **último administrador no se puede borrar**. Si no, nadie podría volver a
  crear cuentas ni restaurar claves. Con dos administradores sí se puede borrar
  cualquiera, incluido uno mismo: en ese caso la sesión se cierra sola.

### Las reglas de seguridad, en cristiano

`firestore.rules` es lo que sostiene todo el tema de permisos. Lo que hace:

- Solo el **administrador** puede hacer `list` de `usuarios`. Es la razón de que el
  padrón con los PINes funcione solo para él: un profesor que escriba el código de
  Claves a mano recibe `permission-denied` de Firestore, no una tabla vacía por un
  bug de la interfaz.
- Solo el administrador o el dueño de la cuenta pueden escribir el campo `clave`.
- `solicitudes_clave` solo se crea con el `uid` propio, con `estado: "pendiente"`,
  con los campos justos y con el motivo limitado a 300 caracteres. Solo el
  administrador puede cerrarla.
- `sugerencias` (las de ayuda.html) tiene el mismo tope: 1000 caracteres y solo
  los cuatro campos que escribe el código.
- **Al crear una clase**: el dueño tiene que ser el profesor que la crea, la lista
  de miembros tiene que nacer vacía, la materia tiene que estar entre las que le
  asignaron y el curso tiene que existir. Y solo en los **grados que le
  asignaron**: si `profesores/{uid}.grados` está vacío, puede usar cualquier curso
  (así siguen las cuentas creadas antes de este cambio). El grado se saca **del
  propio código del curso** con `gradoDelCurso`: a `601` le quita los dos dígitos
  del grupo y quedan 6, y a `1103` le quedan 11. No se saca de un campo del
  documento porque `cursos/{codigo}` no guarda el grado, guarda `anio`, que es el
  año lectivo: un `anio` de 2026 jamás iba a aparecer en una lista de grados, así
  que con las reglas anteriores un profesor al que el administrador le marcó sus grados
  no podía abrir el libro de notas ni crear una clase. Al leerse del código
  funciona igual con los cursos que ya están creados, sin migrar nada.
- **Al entrar un estudiante a una clase**: puede agregarse a sí mismo, y nada más.
  La regla (`soloSeAgregaASiMismo`) exige que los únicos cambios sean
  `miembrosUids`, que no quite a nadie y que el único uid añadido sea el suyo, y
  además que **él sea del curso de la clase** (`comparteCursoConElGrupo`). Con eso
  la entrada sin código del §4 es segura: el niño no necesita que nadie lo
  acepte, pero tampoco puede meterse donde no es su curso.
- **Guardar una partida**: `grupos/{id}/resultados` solo acepta la escritura si el
  `uid` es el propio y `puedeParticipar` se cumple en el servidor. Antes bastaba
  con conocer el ID de una clase para meterle resultados falsos desde la consola.
- **Leer el libro de notas**: un profesor puede listar y leer `estudiantes` solo
  de los cursos de los grados que le asignaron, y solo lee las notas de sus propias
  clases. Las notas de un niño en la clase de otro profesor no las ve.
- **Permisos de borrado para el administrador**, que son los que hacen posible el
  botón Borrar: `delete` en `usuarios`, `estudiantes`, `profesores`, `grupos` y sus
  tres subcolecciones (`miembros`, `sala`, `resultados`), en
  `estudiantes/{uid}/resultados` y en `solicitudes_clave`. Antes todos esos estaban
  en `if false`. Un estudiante o un profe sigue sin poder borrar ninguna colección
  ajena. Son los mismos permisos que necesita el borrado en cascada de un curso
  (Cursos → Borrar), así que publicar las reglas una vez cubre los dos botones: no
  hace falta ninguna regla nueva para ese botón.
- El **"plan b" del curso** también está en las reglas: un estudiante puede
  escribir `curso` en su propia ficha **solo si estaba vacío** y solo si el curso
  que escribe existe en `cursos`. Mover a un estudiante de un curso lleno a otro es
  un permiso exclusivo del administrador.

El administrador además puede escribir en `profesores/{uid}` los campos `curso`,
`materias`, `tipoProfesor` y `grados`, que es lo que hacen las páginas Cursos y
"Materias y grados". Antes solo estaban los tres primeros, y por eso cambiar el
director desde Cursos no se reflejaba en la ficha del profesor. `uid`, correo,
nombre y rol siguen inmutables desde el cliente, y en las fichas el dueño solo se
puede tocar el avatar y el color de fondo.

**Estas reglas hay que volver a publicarlas** después de actualizar el código (§10).
No se aplican solas por estar en el zip. Si no las publicas, el administrador no
puede escribir `usuarios/{uid}.clave`, la página Claves sale vacía, la sala de clase
no funciona, el botón **Materias y grados** no guarda, el libro de notas del
profesor sale en blanco (es la lectura de `estudiantes` por curso), los muchachos
no pueden entrar a su clase sin código, y **los tres botones del padrón fallan**:
Borrar sale `permission-denied`, el selector de curso de la fila no guarda, y el
estudiante no puede reenganchar su curso desde Mi Perfil.

## 8. Dónde está cada cosa en el código

```
index.html                  portada + modal de login
invitado.html               jugar sin cuenta
ayuda.html / ayuda.css      preguntas frecuentes y formulario de sugerencias
firestore.rules             reglas de seguridad (publicarlas, ver §10)

css/
  tokens.css                ÚNICO archivo con colores literales: variables de
                            diseño, tipografía y animaciones de entrada
  style.css                 portada e invitado
  juegos.css                componentes que comparten los 3 paneles, los juegos
                            y la adaptación por ciclo (.ciclo-c1 ... .ciclo-c5)
  panel.css                 sidebar, tarjetas de panel y encabezados de sección

imag/                       logo de la marca, las capturas de la portada y los
                            avatares de los perfiles

js/
  firebase.js               configuración y arranque de Firebase (app única)
  auth.js                   login y a dónde te manda según rol
  sesion.js                 "quién está conectado": índice + ficha de rol
  guard.js                  protege las páginas de panel (rol, menú, saludo)
  catalogo.js               las 14 MATERIAS, sus ejes, JUEGOS y los temas del grado
  malla.js                  los 11 grados, los 5 ciclos del MEN y los AJUSTES
  cursos.js                 CRUD de cursos (601, 602... 1103) y su director
  credenciales.js           correo autogenerado + PIN de 6 dígitos + crear cuentas
  claves.js                 ver el PIN de cualquiera, generar uno nuevo, bandeja
  cambiar-clave.js          el "cambiar mi contraseña" del perfil propio
  lista-credenciales.js     tabla de credenciales de la sesión, copiar y CSV
  grupos.js                 clases: crear, entrar con o sin código, resultados
  sala.js                   la sala: en espera / abierta / cerrada y los asistentes
  espera.js                 las pantallas que ven los juegos si llegan temprano
  nota.js                   la escala de 1,0 a 5,0
  libro-curso.js            el libro de notas: padrón del curso x sus clases
  panel-configuracion.js    la página de configuración
  portada.js                los números y tarjetas reales de la portada
  invitado.js               el selector de práctica sin cuenta (grado primero)
  ayuda.js                  buscador de FAQ y envío de sugerencias
  ui.js / scripts.js        animaciones, contadores, modal
  games/
    banco.js                la única puerta de contenido: filtra por ciclo,
                            recorta opciones, baraja y manda la ronda
    ajustes.js               lo que se ve y se oye por ciclo (letra, voz, reloj)
    banco/<materia>.js        un archivo por área (14): sus temas por ciclo
    contenido-temas.js        el banco viejo de las 3 primeras áreas, que sigue
                              sirviendo a los temas heredados

interfaz-administrador/     homepagec, usuarios, crear-cuenta, claves, cursos,
                            clases, materias, reportes, configuracion
interfaz-profesor/          homepageb, materia, sala, curso, notas-curso,
                            biblioteca, perfil, configuracion
interfaz-estudiante/        homepagea, materia, sala, mis-clases, biblioteca,
                            perfil, configuracion
juegos/                     quiz, puzzle, carrera (HTML + su motor JS)
```

Las tres carpetas de panel ya no tienen cada una su CSS: las tres cargan
`css/panel.css` para el sidebar y las tarjetas, y `css/juegos.css` para
componentes, formularios, tablas y estadísticas. Antes eran `stylea.css`,
`styleb.css` y `stylec.css`, casi iguales, y por eso las tres pantallas se veían
un poco distinta cada una. Si cambias un componente en cualquiera de los dos
archivos compartidos, cambia en los tres lados a la vez.

Los paneles no usan los nombres de la marca sino alias (`--sh-accent` para la
acción, `--sh-rojo` solo para lo destructivo, `--sh-verde` y `--sh-oro` para
estados), y todos esos alias apuntan a morado, azul o blanco: así la portada
puede seguir con su forma redondeada y sus degradados mientras los paneles van en
radio corto y botones de 34 px (el radio apretado se redefine dentro de `body` en
`panel.css`, y solo alcanza a las páginas que lo cargan). Para cambiar de
identidad se toca `css/tokens.css` y nada más; el §14 explica el detalle.

Los tres juegos son motores: reciben el tema y la dificultad de la clase, no
tienen preguntas propias hardcodeadas. Son Quiz de Lógica (opción múltiple),
Puzzle de Código (ordenar pasos) y Carrera Espacial (contrarreloj de 3° en adelante; en 1° y 2° juega sin reloj). En modo clase
el resultado se guarda; en práctica no. Las opciones de cada pregunta se barajan
al cargar la ronda, así que la respuesta correcta no está siempre en la primera
posición.

El contenido se pide siempre por la misma puerta, `js/games/banco.js`, y eso es lo
que hizo posible pasar de 3 áreas a 14 sin que la página pese más:

- Cada área tiene su archivo en `js/games/banco/` y se baja **solo cuando se juega
  un tema de esa área** (`import()` dinámico). Un curso de 2° de Matemáticas no
  descarga Filosofía de 11°.
- La dificultad es acumulativa: el nivel 2 trae también las preguntas del nivel 1 y
  el 3 trae las tres, barajadas, y la ronda se corta al tamaño del ciclo.
- Si un tema no tiene nada en el nivel pedido, se juega con lo más cercano que
  exista en ese tema antes que mostrar una pantalla vacía.
- Los temas de las tres áreas originales (`LEGADO`, 27) siguen vivos en
  `contenido-temas.js`: `banco.js` detecta si el identificador trae ciclo y, si no
  lo trae, cae en el banco viejo. Por eso las clases creadas antes de la malla de
  14 áreas no quedaron rotas.

## 9. Datos en Firestore, qué guarda cada colección

```
usuarios/{uid}                       índice liviano: { username, email, rol, clave }
estudiantes/{uid}                    perfil: curso, username, creadoPorUid,
                                     creadoPorNombre, avatar, colorFondo...
  /resultados/{id}                   historial personal de partidas
profesores/{uid}                     tipoProfesor (estandar|director), materias[],
                                     grados[], curso (el que dirige)
administradores/{uid}                perfil del administrador
cursos/{codigo}                      { codigo, nombre, anio, directorUid,
                                     directorNombre, creadoEn }
grupos/{id}                          { nombre, codigo, juego, materia, curso, tema,
                                     dificultad, profesorId, profesorNombre, activo,
                                     sala, miembrosUids[], creadoEn }
  /miembros/{uid}                    el registro del niño en esa clase
  /sala/{uid}                        el que está hoy en la sala { uid, nombre, enSala, desde }
  /resultados/{id}                   partida jugada { uid, username, juego, puntaje,
                                     total, porcentaje, nota, fecha }
solicitudes_clave/{id}               pedido de "no recuerdo mi PIN"
sugerencias/{id}                     opiniones que llegan desde ayuda.html
```

La subcolección `grupos/{id}/solicitudes` **ya no existe**: se eliminó cuando el
ingreso a clase dejó de requerir aprobación del profesor (§4). Las cuentas viejas
que tenían solicitudes pendientes simplemente las perdieron; no queda nada que
aceptar. El borrado de cuentas tampoco la toca.

Lo que **no** está en Firestore: el contenido de las preguntas. Vive en
`js/games/banco/*.js` (un archivo por área) y se baja solo el archivo de la materia
que se juega. Por eso una partida no lee la base por cada pregunta; lo que cuesta
es entrar a la clase, anotarse en la sala y guardar el resultado.

Cursos, materias, temas y preguntas nuevos tampoco se cargan desde la interfaz: se
agregan editando `js/catalogo.js` (las áreas y sus ejes por ciclo) y el banco de la
materia en `js/games/banco/`. Son parte del código.

## 10. Puesta a punto en Firebase (la primera vez)

1. El proyecto es **`skillhouse-64b02`** y la configuración está
   en `js/firebase.js`, que es el único lugar donde viven las llaves. Si algún día
   se mueve de proyecto, se cambia solo ese archivo: no hay que tocar nada más.
2. **Authentication → Sign-in method → activar Email/Password.** Sin esto, crear
   una cuenta falla con `auth/operation-not-allowed` y uno se vuelve loco
   buscando el error en el código.
3. **Firestore → Reglas**: pegar el contenido de `firestore.rules` y darle
   **Publicar**. Cada vez que cambien las reglas hay que volver a publicarlas.
   **Esto es acción tuya, no del zip**: en el plan gratuito las reglas se publican
   desde la consola web de Firebase (o con `firebase deploy --only firestore:rules`
   si instalas la CLI y haces login con la cuenta del proyecto). Mientras no las
   publiques, la consola sigue sirviendo las reglas anteriores, y los síntomas son
   los del final del §7: páginas vacías y `permission-denied` en botones que en el
   código están bien.
4. Crear la base de datos (modo producción o de prueba da igual, las reglas mandan).
5. **El primer administrador no se puede crear desde la app**, porque la app la
   controla un administrador que todavía no existe. Se hace a mano:
   1. Authentication → *Agregar usuario* → un correo y una clave de 6 dígitos.
   2. Copiar el **UID** y crear en Firestore el documento `usuarios/<UID>` con
      `{ username: "Juan Garzon", email: "...", rol: "administrador" }`.
   3. Crear también `administradores/<UID>` con
      `{ uid, username, email, rol: "administrador", creadoEn: <marca de tiempo> }`.
   4. Entrar desde la portada. Ya puedes crear cursos, profes, directores y
      estudiantes desde el panel.
6. **Índices**: no hay que crear ninguno a mano. Las consultas con `orderBy` van
   sobre una sola colección y si Firebase las rechaza el código reintenta sin
   ordenar.

Las cuentas creadas **antes** de lo de la clave registrada no tienen `clave`, así
que salen en la tabla como "sin registro" y el botón de nueva clave te avisa que
esa hay que cambiarla una vez desde Firebase Console → Authentication.

## 11. Cómo probarlo de verdad (haz este orden)

Con esto recorres todos los roles y no te queda ninguna pantalla sin ver. Está
ordenado para que lo haga alguien del colegio sin leer el resto del archivo.

**A. El curso y la clase, del administrador al salón**

1. Crea el administrador (§10) → entra y crea un curso poniendo **grado 6, grupo
   1, año actual** (el código `601` sale solo y se ve en la vista previa). Crea
   también **602** con otro director, para ver el control de cursos.
2. Crea un **director de Inglés** del 601 y un **profesor de Matemáticas**. En la
   fila del profe de Matemáticas pulsa **Materias y grados** y márcale solo
   **6° y 7°**.
3. Entra con el director y crea **3 estudiantes** del 601 desde **Estudiantes**.
   Anota los PINes. Entra con el profesor y verifica que en su Inicio solo le
   salgan los cursos de 6° y 7°: con el código de un curso de 11° no puede crear
   clase, Firestore se lo niega.
4. El profesor crea una **clase de Matemáticas del 601** y entra a **📺 Sala de
   clase** con ella: sale el código en grande y "En espera". La clase queda en
   espera por defecto.
5. Entra con un estudiante del 601 → **Matemáticas**. La clase ya le aparece en la
   lista de su curso: la toca y entra **sin escribir ningún código** (§4). Si
   prefiere el código, en **Agregar grupo** le funciona igual y entra al instante;
   no hay nada que aceptar. Verifica que el código de una clase de 602 le salga a
   negativo.
6. El estudiante ve la sala de espera: se ve a sí mismo en la lista y el botón ▶
   está apagado.
7. Escribe a mano `juegos/quiz.html?grupo=ID` con la sala todavía en espera: tiene
   que salir "⏳ Tu profesor todavía no ha iniciado la clase", no el aviso de
   acceso.
8. El profe pulsa **Iniciar clase**. La pantalla del estudiante se actualiza sola y
   el ▶ se prende.
9. El estudiante juega y termina: ve el porcentaje y su nota (1,0 a 5,0 con coma).
   El marcador del tablero del profe muestra esa partida sin recargar.
10. El profe pulsa **Cerrar clase**: el estudiante ve "🔒 Esta clase ya terminó" y
    no puede guardar otra partida, pero lo anterior se conserva.
11. Mira la misma nota en **Ver resultados** del profe, **Biblioteca** y **Perfil**
    del estudiante, en **Notas por curso** del profesor y en **Reportes** y la
    **ficha** del administrador. Tienen que dar el mismo número.

**B. Las piezas que solo se ven desde un rol**

- **Administrador → 👥 Usuarios**: el estudiante tiene que salir "Listo para entrar"
  dentro del bloque de **su curso**, y el profesor dentro del bloque de **la
  materia que dicta**. La columna PIN trae la clave de 6 dígitos, "Ocultar PINes"
  la tapa y "Nueva clave" deja el padrón y la página Claves de acuerdo con el mismo
  PIN. Una cuenta creada a mano en Firebase Console sale en "Sin curso" con
  "Registro incompleto", que es exactamente como debe verse.
- **Administrador → Ficha**: abre la ficha de un estudiante que jugó (partidas,
  promedio, nota definitiva, notas por clase, promedio del curso) y la de un
  profesor (clases, cursos donde dicta, muchachos matriculados y rendimiento). Al
  abrir la ficha de otro administrador verás que no trae notas: trae el alcance de su
  cuenta, que es lo que le aplica.
- **Profesor → Notas por curso**: escoge el curso 601 y pulsa Cargar libro. Tiene
  que salir una fila por estudiante matriculado y una columna por cada clase tuya,
  con la nota definitiva y el promedio del curso. Con **Filtrar por materia** carga
  más rápido. Y baja el libro con el botón de descargar.
- **Profesor**: escribe a mano la URL de 👥 Usuarios: te devuelve a la portada
  (guard.js) y aunque te la saltaras, la lectura de `usuarios` sale
  `permission-denied`. Esa es la prueba de que los PINes son solo del administrador.
  Tampoco debería poder leer las notas de una clase de otro profe.
- **Estudiante**: *Configuración → No recuerdo mi contraseña*, manda el pedido,
  volve al administrador, atendelo desde Claves y entra con el PIN que sale. Con el
  pedido abierto, el botón del estudiante tiene que estar bloqueado.
- **Invitado**: entra a `invitado.html`, escoge **grado 2** y juega: dos opciones,
  ronda corta, sin reloj y con el botón 🔊. Cambia a **grado 11**: cuatro opciones,
  hasta 12 preguntas y reloj. Es la prueba rápida de la malla por grado.
- **Cualquiera**: navega rápido por el menú lateral con el wifi apagado un segundo:
  tiene que quedar el aviso de "Reintentar", no devolverte a la portada.

**C. Cursos, directores y borrado**

- **Cursos**: con grado 6 y grupo 2 tiene que salir `602` en la vista previa antes
  de guardar, y crear el mismo par otra vez tiene que responder "El curso 602 —grado
  6, grupo 2— ya existe" en vez de crear un duplicado. En 11° con grupo 3 sale
  `1103` (cuatro dígitos). El botón **Copiar código** de cada fila copia el código.
- **Mover el director**: al cambiar el director de un curso en *Cursos*, el que
  sale pierde ese curso en su inicio y el que entra lo ve. Se escriben las dos caras
  en un solo lote de Firestore (`cursos/{codigo}.directorUid` y
  `profesores/{uid}.curso`), así que si un escrito falla fallan los dos y no quedan
  mitades. Nadie puede dirigir dos cursos a la vez.
- **Usuarios por año**: crea un curso de otro año (o cámbiale el `anio` en la
  consola) y usa el filtro **Año**. Al elegir un año, el selector de curso se
  queda solo con los cursos de ese año, los bloques de estudiantes muestran el año
  en el título, y los profesores estándar (que no tienen curso) salen fuera: el año
  se hereda del curso, y quien no tiene curso tampoco tiene año.
- **Borrar**: borra un estudiante que ya jugó y verifica en Firestore que se
  fueron `usuarios/{uid}`, `estudiantes/{uid}`, su fila en `grupos/*/miembros`, su
  presencia en `sala`, sus `resultados` y su carpeta `estudiantes/{uid}/resultados`.
  Con el único administrador no deja borrarlo; con dos administradores borrarte a ti
  mismo cierra la sesión. Si a una cuenta le cambias la clave a mano en Firebase
  Console, Borrar tiene que mostrar el aviso de que Auth no se borró y aun así
  limpiar el padrón. El clic abre un recuadro dentro de la misma página (ya no es
  una ventana del navegador, que se puede bloquear y dejar el botón "sin hacer
  nada"): hay que escribir `SI` y pulsar **Borrar definitivamente**. Si algo
  falla, ese recuadro escribe el motivo en rojo y el código de Firebase, y el
  padrón lo repite abajo. Sale `permission-denied` casi siempre por lo mismo: las
  reglas publicadas en la consola son más antiguas que este botón.
- **Borrar curso** (página Cursos): borra el 601 teniendo estudiantes y clases. El
  recuadro dice cuántos son; con `SI` se van `grupos/*` del curso con sus
  `miembros`, `sala` y `resultados`, y desaparece `cursos/601`. Los muchachos
  siguen en `estudiantes` con `curso: ""` —en el padrón salen en "Sin curso" y en
  su Perfil pueden engancharse a otro código— y el director del curso queda en
  `tipoProfesor: "estandar"`. No se borra ninguna cuenta de estudiante: eso es
  deliberado. El historial personal del muchacho (`estudiantes/{uid}/resultados`)
  tampoco se toca: sigue mostrando la clase que ya no existe, porque esa nota pasó
  de verdad.
- **Plan b**: en el padrón, quítele el curso a un estudiante con el selector de su
  fila (queda en "Sin curso"). Entra con él → **Perfil** → escribe el código del
  curso y el botón lo devuelve; con un código inexistente o con 602 cuando ya está
  en 601 tiene que negarse. El director ve el código de su curso arriba de todo en
  **Estudiantes**.
- **Un profesor con una sola materia** tiene que poder crear su primera clase desde
  el menú "Mis clases", sin entrar por la tarjeta de un curso. Y si un código de
  Matemáticas se escribe en la página de Inglés tiene que salir el aviso de que es
  de otra materia.

## 12. Cuánto aguanta un colegio real

Estimación para un curso de 30 estudiantes, con una hora de clase jugada. Los
números salen de contar las lecturas que hace cada pantalla (`sesion.js` lee dos
documentos, `grupoJugable` uno, el juego guarda dos escrituras por partida):

| Paso | Lecturas | Escrituras |
| --- | --- | --- |
| 30 estudiantes abren la sala de su clase | ~30 × 7 = 210 | ~30 × 3 = 90 |
| 30 estudiantes juegan y guardan una partida | ~30 × 4 = 120 | ~30 × 2 = 60 |
| El profe proyecta la sala y ve el marcador | ~5 y luego deltas | 3 |
| **Una hora de clase** | **~335** | **~153** |

Doce horas de clase al día son ~4.000 lecturas y ~1.900 escrituras. El plan
**Spark** (gratis, 50.000 lecturas y 20.000 escrituras al día) alcanza de sobra
para un colegio entero de 11 grados jugando varios periodos, y el techo real antes
que la cuota es la regla de **una escritura por segundo por documento**.

Esa regla es la que hay que tener en la cabeza en el aula: cuando los 30 niños
entran a la sala al mismo tiempo, los 30 escriben en el mismo documento
(`grupos/{id}.miembrosUids`). `arrayUnion` hace que nadie pise a nadie —no se
pierden entradas—, pero Firestore los serializa y **la lista del profesor se llena
en varios segundos**, no de golpe. Por eso la asistencia es un documento por niño
(`grupos/{id}/sala/{uid}`) y no un arreglo: eso sí escala sin cola.

Lo que ya se dejó hecho para no gastar de más: `onSnapshot` en vez de
`setInterval`, un documento de asistencia por estudiante en vez de un arreglo, el
Inicio del profesor dejó de leer los resultados de cada clase (antes costaba una
lectura por clase creada, con todas sus partidas; ahora son 3 lecturas fijas y el
resumen se fue a "Mi Biblioteca", que se entra a propósito), `limit()` en las
consultas de resultados (500 por clase, 200 por estudiante) con aviso cuando se
corta, y el banco de preguntas **fuera de Firebase**: se baja por área y solo el
archivo del área que se juega, así que 14 materias × 11 grados no cuestan una
lectura por pregunta.

Si algún día el colegio la usa todo el día en todos los grados, se pasa a **Blaze**
(pago por uso) y el excedente son céntimos; no hay que cambiar ni una línea de
código, solo activar la facturación en Firebase.

## 13. Lo que está mal o sin probar, para que nadie se lleve sorpresas

Prefiero escribirlo yo antes de que lo encuentren en una sustentación o, peor, en
una reunión de padres.

**1. Lo que NO se corrió contra Firestore.** Con esta entrega pasaron tres cosas
nuevas que solo se comprueban de verdad con cuentas reales, y no las corro yo
porque no tengo las claves del proyecto:

- Entrar a clase **sin código** (el niño del curso se autoanota) y que le quede
  bien la ficha en `grupos/{id}/miembros`.
- **Notas por curso** con dos profesores del mismo grado: que cada uno vea solo las
  notas de sus clases y el padrón completo del curso.
- **Materias y grados**: que un profe al que le marcan solo 6° y 7° reciba
  `permission-denied` al intentar crear una clase de 11°.

Tampoco se volvieron a correr contra la base el **borrado de cuentas** (hace un
`deleteUser()` en una app secundaria y entre 5 y 300 escrituras en lote) ni el
**plan b del curso**. El recorrido del §11 con una cuenta real de cada rol es lo
que cierra eso. Si algo falla ahí, en el 90 % de los casos es que **faltó publicar
`firestore.rules`** (§10), no un bug del código. Y ojo con esta
entrega en concreto: **las reglas cambiaron** (lo del grado sacado del código del
curso, §7), así que actualizarlas en la consola no es opcional. Mientras la
consola siga con las reglas viejas, un profesor con grados asignados va a seguir
sin poder crear clases, y eso se ve como un fallo del panel cuando es solo una
regla sin publicar.

**2. Lo que sí se verificó**, y cómo: sintaxis de los 66 archivos `.js`
(`node --check`), que cada nombre importado exista en su módulo, que ningún
`href`/`src` apunte a un archivo inexistente, que a cada `getElementById` le
corresponda un `id` —en el HTML o en la plantilla del mismo archivo que lo
inyecta justo antes de usarlo—, el balance de llaves de `firestore.rules`, el cálculo de la nota
con un test propio, y las pantallas nuevas renderizadas en navegador real a
1440 px. En teléfono (390 px) se revisaron a fondo la portada, el modo invitado y
el centro de ayuda; las pantallas de panel necesitan cuenta para verse, así que ahí
lo que se comprobó es la hoja compartida: por debajo de 900 px la columna del menú
pasa a tira horizontal y toda tabla va dentro de un contenedor con
`overflow-x:auto`, o sea que en el teléfono se desplaza en vez de romper la
página. El contenido del banco se auditó con un script que recorre los 292 temas
por ciclo: 3.257 preguntas y 756 retos, cero temas sin contenido y cero preguntas
mal formadas.

**2 b. La verificación de esta entrega, que es mecánica.** Además de lo de arriba, cada
página de las tres interfaces se ejecutó contra un Firestore de mentira dentro de Node: un
arnés propio carga el módulo real de cada pantalla con un DOM mínimo y la fake Firestore, y
la recorre en los cuatro estados que pasan de verdad —todo bien, `permission-denied`, corte
de red con reintento y sin sesión—, más una pasada disparando los formularios y los botones.
Lo que se mira no es que la página se pinte, sino **qué lee y qué escribe**, y que lo que
escribe tenga la forma que `firestore.rules` acepta: crear la clase, matricularse con el
código del curso, entrarse a una clase, cambiar el PIN propio, guardar una partida, y el
panel de Usuarios cuando asigna materias y grados. También se prueban los frenos: borrar un
curso que todavía tiene estudiantes dentro, o borrar al último administrador, se niegan con
su mensaje en vez de borrar a medias. Los dos árboles dan el mismo reporte, pantalla por
pantalla y escritura por escritura, salvo el código aleatorio de la clase creada. Ninguna
promesa sin esperar, ningún `getElementById` sobre un nulo y ninguna excepción sin capturar
en las 30 pantallas de cada copia. Lo que esto **no** prueba: que la consola de Firebase
tenga publicadas estas reglas, y que un menor real entre con su PIN —eso es el recorrido del
§11.

**3. La pega de contenido que falta, dicha con números.** Cada tema del banco trae
**3 preguntas por nivel** (9 por tema en total). Con la dificultad acumulativa eso
hace que de **876 combinaciones tema-nivel-grado, 532 jueguen una ronda más corta
que la de su banda**: en 6°-7° una ronda de nivel 1 saca 3 preguntas en vez de 10.
Por grado: 51 en 1°-2°, 84 en 3°-5°, 121 en 6°-7°, 128 en 8°-9° y 148 en 10°-11°.
Y hay **113 niveles de tema sin retos de ordenar**, así que en esos el Puzzle de
Código ofrece menos pasos de lo que la banda permitiría.

Dónde se ve: en la ronda, no en un error. La pantalla dice "hasta N preguntas" en
los lugares donde se promete una cantidad, y si un nivel no tiene nada se juega con
lo más cercano que exista antes que mostrar una pantalla vacía. Para cerrar la
brecha hace falta contenido, no código: **~6 preguntas más por tema** en las bandas
de 6° en adelante, y 3 retos por nivel donde faltan. Es pega de un profe por área
durante un par de semanas; el formato está en cualquier archivo de
`js/games/banco/` y se copia tal cual.

**4. Datos personales de menores (Ley 1581 de 2012 y Decreto 1074 de 2015).** La
plataforma guarda nombre, correo de acceso, curso y notas de niños mayormente
menores de edad, y esto es lo que hay que tener claro antes de usarla:

- **No hay captura de consentimiento informado**. La ley exige autorización
  previa, expresa e informada del padre o acudiente. Hoy eso no existe en ningún
  lado del sistema: hay que montarlo (un formato físico del colegio firmado y
  guardado cuenta, pero conviene dejar constancia de cuál cuenta con cuál
  estudiante).
- El **libro de notas ensancha quién ve los datos**: un profesor con el grado
  asignado ve el padrón del curso (nombre y curso) y sus propias notas. Está
  acotado por `firestore.rules`, pero la autorización del colegio debe decirlo.
- El **administrador ve los PINes de todos** y la ficha completa de cualquier
  persona. Es requisito del proyecto, no buena práctica, y se apoya en una
  ofuscación que **no es cifrado** (§7).
- El **derecho de supresión sí está implementado**: Borrar cuenta limpia Auth,
  fichas, matrícula, asistencia, resultados e historial, y las reglas permiten
  borrar `grupos/*/resultados` y `estudiantes/{uid}/resultados` justamente para
  poder atender una solicitud de datos.
- Los correos `@skillhouse.edu.co` **no existen como dominio**: son
  identificadores de acceso y nunca llegará un correo de recuperación. Si el
  colegio monta su dominio, se cambia `DOMINIO_CORREO` en `js/credenciales.js`.
- Los PINes de 6 dígitos son cómodos para un niño y **no son seguros**. Con eso y
  con la ofuscación de `usuarios/{uid}.clave`, la protección real de la plataforma
  son las reglas de Firestore y que el padrón lo maneje solo el administrador.

**5. Lo que el plan gratuito no deja hacer.** Sin Cloud Functions ni Admin SDK no
existe forma de imponer una clave a otro usuario desde el navegador, y por eso el
PIN queda registrado y el cambio se hace firmando como ese usuario. Si algún día
esto se usa con correos reales, el campo `clave` tiene que desaparecer y el
restablecimiento tiene que pasar a una función de servidor. Publicar las reglas y
activar Blaze (si la uso se pasa de cuota) son acciones de quien administra el
proyecto en Firebase, no del código.

**6. Detalles menores que conviene saber.** Un estudiante cuya ficha no tenga
`curso` (cuenta escrita a mano en la consola) no puede entrar a ninguna clase: las
reglas exigen que el curso coincida y la app lo avisa en español antes de intentar
la escritura. La voz de los grados pequeños depende de que el navegador tenga una
voz en español instalada. Y sobre las imágenes que se empacan: son ilustraciones,
no fotos de personas, así que no hay derechos de imagen de terceros en el zip; el
detalle está en el §14.

## 14. La marca SkillHouse: morado, azul y blanco

La regla de la marca es estricta y es la primera cosa que se nota: **en SkillHouse
solo hay morado, azul y blanco**. Ni un verde de "bien", ni un rojo de "mal", ni
un naranja de adorno. Todo el color de la página sale de un solo archivo,
`css/tokens.css`, que es el único donde se escribe un color:

- Arriba están los tonos de marca (`--sh-indigo`, `--sh-indigo-light`, `--sh-cyan`,
  `--sh-pink`, `--sh-amber`, `--sh-mint`) y los cielos nocturnos
  (`--sh-navy-950` … `--sh-navy-700`) sobre los que van la portada y los paneles.
- Más abajo hay un bloque de **alias semánticos** que es el que usa la interfaz:
  `--sh-accent` para la acción, `--sh-rojo` solo para lo destructivo (borrar,
  cerrar, error), `--sh-verde` para lo positivo y `--sh-oro` para estados. Los
  nombres viejos se quedaron por historia del código, pero **todos los valores
  caen en morado, azul o blanco**: lo que antes se distinguía por color ahora se
  distingue además con un símbolo, así que sigue siendo legible sin depender del
  tono. Un botón "Borrar" es morado hondo con la papelera, no rojo.
- Con esa estructura se puede cambiar la identidad en una línea y que la página
  completa le siga: portada, los tres paneles, la sala, los juegos y el centro de
  ayuda.

Las hojas son cinco y ninguna pisa a las otras:

- `css/tokens.css` — variables, tipografías y las animaciones de entrada.
- `css/style.css` — la portada y la página de invitado.
- `css/juegos.css` — juegos, sala y perfiles (los tres roles), y las clases
  `.ciclo-c1` … `.ciclo-c5` que agrandan la letra de los grados pequeños.
- `css/panel.css` — el sidebar, las tarjetas de panel y los encabezados de sección
  ("Tu curso de dirección" / "Otros cursos"), **compartido** por estudiante,
  profesor y administrador. Antes eran tres archivos casi iguales (`stylea/b/c.css`)
  y por eso las tres pantallas se veían distinto; ahora una sola regla manda en los
  tres menús.
- `ayuda.css` — nada más el centro de ayuda.

Fuera de `tokens.css` solo quedan dos familias de colores literales, y las dos
están medidas: los acentos por área (`.card1` … `.card9` en `panel.css`, que
definen `--sh-accento` de cada tarjeta de materia) y los chips de nota y de estado
de sala, que son tintes claros de morado y azul sobre blanco.

Las imágenes están en `imag/`:

- `logo.png` es el isotipo de la marca (las estrellitas) y se carga desde 33
  lugares: favicon, barra lateral de los tres paneles, pies de página.
- Los avatares de perfil son 11 animalitos (`buho_1.png`, `zorro_2.png`…), dos
  versiones por animal. Son dibujos genéricos, sin ningún personaje de marca
  reconocible.
- `homepage1.PNG` y `homepage2.PNG` son las dos ilustraciones del hero de la
  portada. **Son ilustraciones, no fotos de personas**, así que no hay derechos de
  imagen de estudiantes ni de terceros en el zip.

Dos cosas honestas sobre ese material gráfico, para cuando esto se venda en serio:
la procedencia exacta de las ilustraciones no está documentada en ningún archivo
del repo, y los neones naranja y verde de esas dos imágenes se salen de la paleta
de la marca (el CSS sí la cumple toda). Si alguna vez un cliente pregunta, lo limpio
es regenerarlas o cambiarlas por capturas de la propia plataforma y dejar en el
repo una nota de dónde salieron.

## 15. Trabajo en pareja y el repo

Todo está en `github.com/naku8758/SkillHouse-2.0`, rama **`main`**. La rama
`skillhouse-2.0-mejorado` se quedó en el último commit antes de las mejoras nuevas
(la sala estilo Kahoot, la nota de 1 a 5 y el padrón de usuarios están en `main`),
así que no se trabaje ahí. Ojo: **el repo es público**, así que lo que se sube se
ve; las llaves de Firebase que están en `js/firebase.js` son la configuración web
pública (no son un secreto, quien administra el proyecto lo hace con su cuenta de
Firebase), pero un `LEEME.md` con correos y PINes reales nunca se sube.

Antes de tocar nada, `git pull`. Para subir hace falta un *Personal access
token* fine-grained (GitHub ya no acepta la contraseña de la cuenta): Settings →
Developer settings → Personal access tokens → Fine-grained token, con permiso de
escritura sobre ese repo. Se configura una vez en el gestor de credenciales de tu
máquina y no se vuelve a escribir. **Nada de `git push --force`**: es un repo de
dos y el force le pisa el trabajo a la otra persona.

Esta carpeta es la **versión estándar** del producto. Cuando un colegio la pide
con su marca, se copia y se le cambian cuatro cosas: `css/tokens.css` (los
colores), `imag/` (el logo), `index.html` e `invitado.html` (los textos y los
datos) y `DOMINIO_CORREO` en `js/credenciales.js`. La lógica —`js/`, los juegos y
`firestore.rules`— no se toca, y cada arreglo que se hace en una de las dos
versiones se lleva a la otra el mismo día.

## 16. Cosas que ya cambiaron de nombre y conviene saber

- Las carpetas se renombraron con guiones (`interfaz administrador/` →
  `interfaz-administrador/`) porque todo el código enlaza con guiones.
- El rol que manda se llama **Administrador** en la pantalla y `administrador` por
  dentro: `usuarios/{uid}.rol`, la carpeta `interfaz-administrador/`, la colección
  `administradores/{uid}` y `esAdmin()` en las reglas son la misma palabra. En la
  copia del Colegio Manuel Cepeda Vargas ese rol se muestra como **Coordinador**
  sin cambiar nada del código; acá no hace falta el cambio de nombre.
- **El ingreso a clase ya no tiene aprobación**: la subcolección
  `grupos/{id}/solicitudes` se eliminó y el botón "aceptar solicitud" se fue del
  panel del profesor. Si encuentran esa palabra en algún comentario viejo, es
  historia.
- `matematicas.html` se fue: ahora es `materia.html?m=matematicas`. Igual
  `grupos.html` y los dos `juegos-panel.js` viejos, que los reemplazaron páginas
  generales.
- `js/games/quiz-data.js`, `puzzle-data.js` y `carrera-data.js` se unificaron en
  `js/games/contenido-temas.js`. Hoy ese archivo quedó como el **banco heredado**
  de las tres primeras áreas; el contenido nuevo vive un archivo por área en
  `js/games/banco/` y todo entra por `js/games/banco.js`.
- El juego de ordenar pasos se sigue llamando **Puzzle de Código** en SkillHouse; en
  la copia del colegio lo renombramos a "Puzzle de pasos" porque ahí el juego no va
  de programar. El `id` interno es `puzzle` en las dos, que es el que viaja en las
  URLs y en Firestore.
- `stylea.css`, `styleb.css` y `stylec.css` se unificaron en `css/panel.css`.
- Los `id` de las áreas (`matematicas`, `espanol`, `ingles`, y los once que se
  agregaron) **no se cambian**: viven en documentos de Firestore, en las URLs de
  las clases ya creadas y en el nombre de su archivo de banco.

**Cómo se agrega una materia hoy** (cuatro toques, y ya):

1. El objeto en `MATERIAS` de `js/catalogo.js`, con sus **ejes**, y en cada eje su
   `ciclos` con el nombre del tema para `c1`…`c5`. Esa es la malla: grado → ciclo →
   tema.
2. Un archivo `js/games/banco/<id-de-la-materia>.js` que exporte `BANCO`, con una
   entrada por tema (`<materia>--<eje>--<ciclo>`) y sus `preguntas` (con
   `dificultad` 1, 2 o 3) y sus `retos`.
3. Opcional: si el área solo se cursa desde ciertos grados, se limita en
   `materiasDelGrado` (`js/catalogo.js`), que es lo que usan los formularios de
   clase y el modo invitado.
4. Nada más. La portada, los filtros, los temas del formulario de clase, el
   padrón de Usuarios y las fichas leen del catálogo, así que las tarjetas, los
   contadores y los menús salen solos.

Lo que no se hace desde la interfaz: crear materias, temas o preguntas. Son parte
del código y se despliegan con el zip.

---

Proyecto de grado — Técnico de Programación de Software.
Aprendiz Garzón Juan y Tovar Sara.
