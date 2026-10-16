# SkillHouse 2.0 — cómo funciona esto

Esto es lo que hicimos Sara y yo para el proyecto de técnico. Es una página web
para que los muchachos de sexto practiquen Matemáticas, Español e Inglés jugando,
con tres tipos de cuenta: estudiante, profesor (y dentro del profesor, el
director de curso) y administrador.

No es una app con servidor propio. Es HTML, CSS y JavaScript puro, sin
compilador ni nada que instalar, y lo que hace de base de datos es Firebase
(Authentication para entrar y Firestore para guardar todo). O sea que el código
son archivos planos y la "nube" es Firebase, que en el plan gratis da de sobra
para un colegio pequeño.

Este archivo está escrito para que alguien que no ha visto el proyecto lo prenda,
lo mueva y entienda qué está pasando por debajo. Si te pierdes, el §2 y el §8 son
los que resuelven el 90 % de las dudas.

## 1. Prenderlo en tu PC

Clonas, entras a la carpeta y levantas un servidorito cualquiera. No sirve
abrir el `index.html` con doble clic (los archivos son módulos ES y el navegador
los bloquea por `file://`), tiene ser por `http`:

```bash
git clone https://github.com/naku8758/SkillHouse-2.0.git
cd SkillHouse-2.0
git checkout main                       # todo el trabajo está acá
python3 -m http.server 5500
```

Y abres `http://127.0.0.1:5500`. Con eso ya está, no hay `npm install` ni build.

Si lo que quieres es ver la portada sin cuenta, con eso basta. Para entrar con
una cuenta necesitas que Firebase esté configurado y con las reglas publicadas
(§9), si no el login te bota error.

## 2. Qué pasa cuando uno entra (el flujo completo)

Te lo cuento seguido, seguido, porque es la parte que uno no ve en el código:

1. Abres `index.html`. Sale la portada con las materias, los juegos y cuatro
   números. Esos números no son inventados, los cuenta `js/portada.js` leyendo el
   catálogo real (`js/catalogo.js`): 3 materias, 27 temas, 3 formas de jugar y
   3 materias que vienen. Por eso si mañana agregas un tema, el número de la
   portada sube solo.
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

## 3. Los tres roles, qué hace cada uno

### Administrador

Es el dueño de la plataforma. Lo que hace:

- **Crear los cursos**: solo pone grado, letra de grupo y año. El código lo arma
  la plataforma (6 + A = **601**, 6 + B = **602**…) porque es el ID del documento
  y a la vez la referencia que usan estudiantes y clases; nadie lo teclea y por
  eso no se puede escribir un curso repetido o con otra forma. En la tabla de
  Cursos cada fila tiene su botón **Copiar código**, que es el que se le pasa al
  director. Ponerle un director a cada curso también se hace ahí.
- **Crear cuentas**: estudiante, profesor, director o administrador, con materia
  y curso. Le autogenera el correo y el PIN, y le muestra la clave una sola vez
  para copiarla o descargar el CSV.
- **👥 Usuarios**: el padrón de todas las cuentas. Cruza la colección `usuarios`
  con la ficha de rol, así que es la única que te dice si una cuenta está de
  verdad lista para entrar. No es una tabla plana: los estudiantes salen
  **agrupados por curso** (y el título de cada bloque dice quién es el director
  de ese curso) y los profesores **agrupados por la materia que dan**. Si un
  profe da dos materias aparece en los dos bloques, que es como se lee un
  directorio real. Cada fila muestra el **PIN** de esa cuenta, y tiene
  un botón para ocultarlos (por si compartes pantalla en una reunión) y un botón
  "Nueva clave" para resetearla sin irse a otra página. Filtros por **rol, año,
  curso y materia**, buscador, "solo con fallas" y exportar CSV. El filtro de
  año y el de curso se reordenan solos según el rol que elijas, y un curso que
  acabas de crear —aunque no tenga nadie— aparece igual en la lista.
  En la fila de un estudiante el **Curso** es un selector: desde ahí lo mueves
  de curso sin borrar la cuenta. Ojo con el CSV: trae las claves, no lo mandes
  por chat.
- **Borrar cualquier cuenta, incluidos otros administradores.** El botón
  **Borrar** está en cada fila de 👥 Usuarios, pide dos confirmaciones (la
  segunda escribe `SI`) y borra de una: el usuario de Firebase Auth, su ficha de
  rol, su documento de índice, sus clases si era profesor, su asistencia e
  historial, y los pedidos de clave pendientes. Dos seguridades: si es el último
  administrador que queda, se niega; y si te borras a ti mismo, la sesión se
  cierra sola. Cómo lo hace sin Admin SDK está explicado en §7.
- **🔑 Claves**: la misma información pero en tabla plana, y acá está la bandeja
  de **solicitudes de cambio** (los pedidos de "no recuerdo mi PIN"). Cuando
  atiendes un pedido le generas el PIN nuevo y se lo entregas en persona. Aquí no
  se borra nadie: el borrado vive solo en Usuarios, para que haya un único sitio.
- **Cursos, Clases, Materias, Reportes**: altas y bajas de grados, inventario de
  todas las clases, el catálogo con cuántas clases usan cada tema, y promedios
  por materia, por curso y por estudiante con la nota de 1 a 5.
- No puede borrar un curso que tenga estudiantes o clases, y no deja asignarse a
  él mismo como director si el curso ya tiene uno.

### Profesor (y director de curso)

El profesor ya tiene materia asignada por el administrador (`materias` en su
ficha), así que la plataforma nunca se la vuelve a preguntar.

- **Inicio** (`homepageb.html`): abre su materia y dentro le lista los cursos
  donde dicta, con las clases y los estudiantes reales de cada uno. Cada tarjeta
  dice "＋ Crear clase" y te lleva al formulario ya con ese curso puesto.
- **Mis clases** (`materia.html`): crear, editar, desactivar o eliminar clases;
  **duplicar una clase en otros cursos** (el profe de Inglés que dicta a los
  siete sextos la crea una vez y la copia marcando los cursos, cada copia sale
  con su propio código); probar el juego antes de mandarlo; copiar el código;
  aceptar solicitudes de ingreso; quitar estudiantes; y ver resultados
  agrupados por estudiante (partidas, mejor porcentaje y promedio de cada uno).
- **Sala de clase** (`sala.html`): la pantalla para proyectar. Código gigante,
  quiénes van entrando, marcador en vivo con la mejor nota y el promedio de cada
  uno, e Iniciar / En espera / Cerrar / Vaciar sala / Copiar código.
- **Estudiantes** (esto solo lo ve un **director de curso**): matricular
  estudiantes de su grado, exportar credenciales y ver las clases del curso.
  Arriba le aparece la tarjeta **Código de tu curso** con el código grande y un
  botón Copiar: es el que reparte entre sus estudiantes, y es el mismo que ve el
  administrador en Cursos. Sirve de "plan b" (ver §3, Estudiante).

La diferencia entre un profesor normal y un director:

- El director está atado a UN curso y solo puede crear clases de ese curso. Sí
  puede dar de alta estudiantes de ese grado.
- El profesor normal puede crear clases de su materia en CUALQUIER curso
  (ve 601, 602... 607), pero no puede crear cuentas de estudiante. Eso lo hace
  el administrador o el director del grado.

### Estudiante

- **Materias** (`homepagea.html`): las tarjetas del catálogo, las tres que dicen
  "próximamente" (Ciencias, Sociales, Tecnología), y su resumen real: clases,
  partidas jugadas, nota definitiva y promedio.
- **Materia** (`materia.html?m=ingles`): acá se une a las clases con el **código
  de 6 caracteres** que le pasa el profe, y también puede practicar libremente
  por tema y dificultad sin clase. Cada tarjeta de clase le dice si está
  ⏳ en espera, 🟢 lista para jugar o 🔒 cerrada.
- **Sala de espera** (`sala.html?g=`): entra con el código, ve a sus compañeros
  que ya llegaron y el botón ▶ Entrar al juego está apagado hasta que el profe
  abra la clase. Se prende solo, sin recargar la página.
- **Mis clases**, **Biblioteca** (historial de partidas con porcentaje y nota de
  cada una), **Perfil** y **Configuración**.
- **El "plan b" del curso** (Mi Perfil): si a un estudiante se le queda el curso
  vacío —porque le movieron la ficha, porque el curso se borró y se volvió a
  crear, o porque alguien lo tocó a mano en Firebase Console—, en su Perfil
  aparece el bloque *¿Tu curso desapareció?*. Escribe ahí el código de tres
  dígitos que le dio su director y vuelve a matricularse solo, sin esperar al
  administrador. Esto **no** es un registro abierto: la plataforma no deja que
  nadie se cree cuenta ni se una a un curso ajeno, y el campo solo funciona si su
  curso estaba vacío. Si lo que está mal es el curso que ya tiene (se equivocaron
  de 601 a 602), eso lo corrige el administrador con el selector de la fila, en
  👥 Usuarios. Las reglas de Firestore repiten la misma condición en el servidor,
  así que escribirlo directo en la consola tampoco lo deja.

### Invitado

`invitado.html` deja jugar sin cuenta: se escoge materia, tema y dificultad y se
abre el juego. Es para que el colegio muestre la plataforma en una feria sin
crear cuentas. Esa partida no se guarda en ninguna parte.

## 4. Cómo se une un estudiante a una clase (y por qué te rechaza)

El profe crea la clase → Firestore le genera un código de 6 caracteres → el profe
lo comparte (lo copia del botón o lo proyecta) → el estudiante lo escribe en la
página de su materia → queda una **solicitud pendiente** en
`grupos/{id}/solicitudes/{uid}` → el profe la acepta en "Mis clases" → el
estudiante pasa a `miembrosUids` y ya puede jugar.

Al escribir el código se revisan dos cosas, no una:

1. Que el código sea de **la materia de la página** donde estás.
2. Que el código sea de **tu curso**.

Antes solo se miraba que el código existiera, así que un código de Matemáticas
funcionaba en la página de Inglés. Ahora sale un mensaje que te dice por qué lo
rechazó. Y no es solo un filtro de interfaz: las reglas de Firestore niegan la
escritura en el servidor, así que alguien que escriba el `fetch` a mano tampoco
pasa. Lo mismo al guardar una partida, solo se escribe a nombre de un miembro
aceptado.

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
   esté aceptado. Con eso, escribir `juegos/quiz.html?grupo=ID` a mano tampoco
   sirve.
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

## 7. Las cuentas, los correos y los PINes

Cuando el administrador o un director crean una cuenta:

- **Correo**: se arma del nombre completo, sin tildes ni espacios.
  `Andrés Felipe Perdomo Cangrejo` → `AndresFC@skillhouse.edu.co`. Si está ocupado
  prueba `AndresFC1@`, `AndresFC2@`... hasta el 30.
- **PIN**: 6 dígitos con `crypto.getRandomValues` (no `Math.random`, que es
  predecible). Se muestra **una sola vez** en la pantalla de creación y en la
  tabla de credenciales de esa sesión. Se puede copiar o descargar en CSV.
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

### Cómo demonios hace el admin para cambiar la clave de otro

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
`solicitudes`, su ficha en `grupos/*/resultados`, su historial en
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

- Solo el **administrador** puede hacer `list` de `usuarios`. Es la razón de que
  el padrón con los PINes funcione solo para él: un profesor que escriba el
  código de Claves a mano recibe `permission-denied` de Firestore, no una tabla
  vacía por un bug de la interfaz.
- Solo el admin o el dueño de la cuenta pueden escribir el campo `clave`.
- `solicitudes_clave` solo se crea con el `uid` propio, con `estado: "pendiente"`,
  con los campos justos y con el motivo limitado a 300 caracteres. Solo el admin
  puede cerrarla.
- `sugerencias` (las de ayuda.html) tiene el mismo tope: 1000 caracteres y solo
  los cuatro campos que escribe el código.
- Al crear una clase: la materia tiene que estar en la lista del profesor y, si
  eres director, el curso tiene que ser el tuyo.
- Al unirse: solo se escribe la solicitud si el curso del estudiante es el mismo
  de la clase y la clase sigue activa.
- Un profesor que ya no dirige un curso no puede seguir creando clases en él
  (esto se arregló junto con el lote de "Mover director", más abajo).
- El admin puede **borrar** (`allow delete: if esAdmin()`) en `usuarios`,
  `estudiantes`, `profesores`, `administradores`, `grupos` y sus subcolecciones,
  `solicitudes_clave` y los resultados de cada cuenta. Sin esas líneas el botón
  Borrar se cae a mitad del lote y deja la cuenta a medias.
- El `curso` de `estudiantes/{uid}` lo puede escribir el propio estudiante
  **solo para rellenar un curso vacío** y solo si ese curso existe de verdad; el
  admin lo puede cambiar sin esa restricción. Es la parte de servidor del
  "plan b": sin ella, saberse el código de otro grado bastaría para matricularse
  en él.
- `estudiantes/{uid}/resultados` ahora también lo lee el admin, porque es la
  única forma de borrar el historial junto con la cuenta.

El admin además ya puede escribir en `profesores/{uid}` los campos `curso`,
`materias` y `tipoProfesor`, que antes estaban bloqueados. Antes por eso cambiar
el director desde "Cursos" no se reflejaba en la ficha del profesor. `uid`,
correo, nombre y rol siguen inmutables desde el cliente.

**Estas reglas hay que volver a publicarlas** después de actualizar el código. No
se aplican solas por estar en el zip. Si no las publicas, el admin no puede
escribir `usuarios/{uid}.clave`, la página Claves sale vacía, la sala de clase no
funciona (subcolección nueva) y, lo más visible, **fallan con `permission-denied`
el botón Borrar, el selector de curso de cada fila y el reingreso del estudiante
desde Mi Perfil**.

## 8. Dónde está cada cosa en el código

```
index.html                  portada + modal de login
invitado.html               jugar sin cuenta
ayuda.html / ayuda.css      preguntas frecuentes y formulario de sugerencias
firestore.rules             reglas de seguridad (publicarlas, ver §9)

css/
  tokens.css                ÚNICO archivo con colores: variables de diseño y tipografía
  style.css                 portada e invitado (la cara lúdica de la marca)
  panel.css                 carcasa de los 3 paneles: barra lateral, cabecera, pie
  juegos.css                componentes que comparten los paneles y los juegos

imag/                       logo y avatares

js/
  firebase.js               configuración y arranque de Firebase (app única)
  auth.js                   login y a dónde te manda según rol
  sesion.js                 "quién está conectado": índice + ficha de rol
  guard.js                  protege las páginas de panel (rol, menú, saludo)
  catalogo.js               MATERIAS, MATERIAS_PROXIMAS y JUEGOS
  cursos.js                 CRUD de cursos (el código se arma con grado+grupo) y su director
  credenciales.js           correo + PIN de 6 dígitos + crear y borrar cuentas
  claves.js                 ver el PIN de cualquiera, generar uno nuevo, bandeja de pedidos
  cambiar-clave.js          el "cambiar mi contraseña" del perfil propio
  lista-credenciales.js     tabla de credenciales de la sesión, copiar y CSV
  grupos.js                 clases: crear, unirse por código, solicitudes, resultados
  sala.js                   la sala: en espera / abierta / cerrada y los asistentes
  espera.js                 las pantallas que ven los juegos si llegan temprano
  nota.js                   la escala de 1,0 a 5,0
  panel-configuracion.js    la página de configuración
  portada.js                los números y tarjetas reales de la portada
  invitado.js               el selector de práctica sin cuenta
  ayuda.js                  buscador de FAQ y envío de sugerencias
  ui.js / scripts.js        animaciones, contadores, modal
  games/contenido-temas.js  el banco de preguntas: 27 temas, 810 preguntas, 162 retos

interfaz-administrador/     homepagec, usuarios, crear-cuenta, claves, cursos,
                            clases, materias, reportes, configuracion
interfaz-profesor/          homepageb, materia, sala, curso, biblioteca,
                            perfil, configuracion
interfaz-estudiante/        homepagea, materia, sala, mis-clases, biblioteca,
                            perfil, configuracion
juegos/                     quiz, puzzle, carrera (HTML + su motor JS)
```

Los tres paneles comparten un solo CSS: `css/panel.css` para la carcasa (menú
lateral, cabecera, pie) y `css/juegos.css` para los componentes (tarjetas,
formularios, tablas, estadísticas). Antes cada rol tenía su hoja
(`stylea.css`, `styleb.css`, `stylec.css`); se eliminaron porque las tres estaban
empezando a divergir y lo único que las diferenciaba era el menú. Si cambias un
componente en `juegos.css`, cambia en los tres lados.

**Ningún archivo de CSS escribe un color literal salvo `tokens.css`**, y los
paneles no usan los nombres de la marca sino alias (`--sh-accent` para la acción,
`--sh-rojo` solo para lo destructivo, `--sh-verde`/`--sh-oro` para estados). Por
eso la portada puede seguir con su forma redondeada y sus degradados mientras los
paneles van en radio corto y botones de 34 px: el radio apretado se redefine
dentro de `body` en `panel.css`, y solo alcanza a las páginas que lo cargan.
Para cambiar de identidad se toca `tokens.css` y nada más.

Los tres juegos son motores: reciben el tema y la dificultad de la clase, no
tienen preguntas propias hardcodeadas. Son Quiz de Lógica (opción múltiple),
Puzzle de Código (ordenar pasos) y Carrera Espacial (contrarreloj). En modo clase
el resultado se guarda; en práctica no. Las opciones de cada pregunta se barajan
al cargar la ronda, así que la respuesta correcta no está siempre en la primera
posición.

## 9. Datos en Firestore, qué guarda cada colección

```
usuarios/{uid}                       índice liviano: { username, email, rol, clave }
estudiantes/{uid}                    perfil: curso, creadoPorUid, avatar...
  /resultados/{id}                   historial personal de partidas
profesores/{uid}                     tipoProfesor (estandar|director), materias[], curso
administradores/{uid}                perfil de administrador
cursos/{codigo}                      { codigo, nombre, anio, directorUid, directorNombre }
grupos/{id}                          { nombre, codigo, juego, materia, curso, tema,
                                       dificultad, profesorId, activo, sala, miembrosUids[] }
  /miembros/{uid}                    estudiante aceptado
  /solicitudes/{uid}                 pedido de ingreso pendiente
  /sala/{uid}                        el que está hoy en la sala { uid, nombre, enSala, desde }
  /resultados/{id}                   partida jugada { uid, username, juego, puntaje,
                                       total, porcentaje, nota, fecha }
solicitudes_clave/{id}               pedido de "no recuerdo mi PIN"
sugerencias/{id}                     opiniones que llegan desde ayuda.html
```

Lo que **no** está en Firestore: el contenido de las preguntas. Vive en
`js/games/contenido-temas.js` y se baja una vez con la página. Por eso una partida
no lee la base por cada pregunta; lo que cuesta es entrar a la clase, anotarse en
la sala y guardar el resultado.

Cursos, materias y temas nuevos tampoco se cargan desde la interfaz: se agregan
editando `js/catalogo.js` y `js/games/contenido-temas.js`. Son parte del código.

## 10. Puesta a punto en Firebase (la primera vez)

1. El proyecto es `skillhouse-64b02` y la configuración está en `js/firebase.js`.
   Si creas tu propio proyecto, se cambia ese archivo y ya, es el único lugar.
2. **Authentication → Sign-in method → activar Email/Password.** Sin esto, crear
   una cuenta falla con `auth/operation-not-allowed` y uno se vuelve loco
   buscando el error en el código.
3. **Firestore → Reglas**: pegar el contenido de `firestore.rules` y darle
   **Publicar**. Cada vez que cambien las reglas hay que volver a publicarlas.
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

Con esto recorres todos los roles y te deja de quedar ninguna pantalla sin ver:

1. Crea el administrador (§10) → entra y crea el curso con grado **6** y
   grupo **A**: el código `601` sale solo en la vista previa.
2. Crea un **director de Inglés** del 601.
3. Entra con ese director y crea **3 estudiantes** del 601. Anota los PINes.
4. Crea una **clase de Inglés del 601**. Entra a **📺 Sala de clase** con ella:
   sale el código en grande y "En espera".
5. Entra con un estudiante, únete con el código. El profe acepta la solicitud.
6. El estudiante abre la sala de la clase: se ve a sí mismo en la lista y el
   botón de jugar está apagado.
7. Escribe a mano `juegos/quiz.html?grupo=ID` con la sala todavía en espera: tiene
   que salir "⏳ Tu profesor todavía no ha iniciado la clase", no el aviso de
   acceso.
8. El profe pulsa **Iniciar clase**. La pantalla del estudiante se actualiza sola
   y el ▶ se prende.
9. El estudiante juega y termina: ve el porcentaje y su nota (1,0 a 5,0 con coma).
   El marcador del tablero del profe muestra esa partida sin recargar.
10. El profe pulsa **Cerrar clase**: el estudiante ve "🔒 Esta clase ya terminó" y
    no puede guardar otra partida, pero lo anterior se conserva.
11. Mira la misma nota en **Ver resultados** del profe, **Biblioteca** y **Perfil**
    del estudiante y **Reportes** del admin. Tienen que dar el mismo número.

Y estas cuatro, que son de los arreglos recientes:

- En **👥 Usuarios** del admin, el estudiante tiene que salir "Listo para entrar"
  dentro del bloque de **su curso**, y el profesor dentro del bloque de **la
  materia que dicta**. La columna PIN trae la clave de 6 dígitos, "Ocultar PINes"
  la tapa y "Nueva clave" deja el padrón y la página Claves de acuerdo con el
  mismo PIN. Una cuenta creada a mano en Firebase Console sale en "Sin curso" con
  "Registro incompleto", que es exactamente como debe verse.
- Con una cuenta de **profesor**, escribe a mano la URL de 👥 Usuarios: te devuelve
  a la portada (guard.js) y aunque te la saltaras, la lectura de `usuarios` sale
  `permission-denied`. Esa es la prueba de que los PINes son solo del admin.
- Con un estudiante, *Configuración → No recuerdo mi contraseña*, manda el pedido,
  volve al admin, atendelo desde Claves y entra con el PIN que sale. Con el pedido
  abierto, el botón del estudiante tiene que estar bloqueado.
- Navega rápido por el menú lateral con el wifi apagado un segundo: tiene que
  quedar el aviso de "Reintentar", no devolverte a la portada.

Para la parte de cursos y directores: al **mover el director** de un curso en
*Cursos*, el que sale pierde ese curso en su inicio y el que entra lo ve. Se
escriben las dos caras en un solo lote de Firestore (`cursos/{codigo}.directorUid`
y `profesores/{uid}.curso`), así que si un escrito falla fallan los dos y no
quedan mitades. Antes el panel solo movía una cara y el director saliente seguía
viendo el curso viejo, pero Firestore le negaba crear clases ahí.

También: un profesor con **una sola** materia tiene que poder crear su primera
clase desde el menú "Mis clases", sin entrar por la tarjeta de un curso. Y si un
código de Matemáticas se escribe en la página de Inglés tiene que salir el aviso
de que es de otra materia.

Y estas cuatro, que son de lo último que se agregó:

- **Cursos**: con grado 6 y grupo B tiene que salir `602` en la vista previa antes
  de guardar, y crear el mismo par otra vez tiene que responder "El curso 602
  —grado 6B— ya existe" en vez de crear un duplicado. El botón **Copiar código**
  de cada fila copia el código.
- **Usuarios por año**: crea un curso de otro año (o cámbiale el `anio` en la
  consola) y usa el filtro **Año**. Al elegir un año, el selector de curso se
  queda solo con los cursos de ese año, los bloques de estudiantes muestran el
  año en el título, y los profesores estándar (que no tienen curso) salen fuera:
  el año se hereda del curso, y quien no tiene curso tampoco tiene año.
- **Borrar**: borra un estudiante que ya jugó y verifica en Firestore que se
  fueron `usuarios/{uid}`, `estudiantes/{uid}`, su fila en `grupos/*/miembros`, su
  presencia en `sala`, sus `resultados` y su carpeta `estudiantes/{uid}/resultados`.
  Con el único administrador no deja borrarlo; con dos administradores borrarte a
  ti mismo cierra la sesión. Si a una cuenta le cambias la clave a mano en Firebase
  Console, Borrar tiene que mostrar el aviso de que Auth no se borró y aun así
  limpiar el padrón.
- **Plan b**: en el padrón, quítele el curso a un estudiante con el selector de su
  fila (queda en "Sin curso"). Entra con él → **Perfil** → escribe el código del
  curso y el botón lo devuelve; con un código inexistente o con 602 cuando ya está
  en 601 tiene que negarse. El director ve el código de su curso arriba de todo en
  **Estudiantes**.

## 12. Cuánto aguanta un colegio real

Estimación para 12 cursos × 30 estudiantes (360 cuentas), con una hora de clase
jugada en un grupo:

| Paso | Lecturas | Escrituras |
| --- | --- | --- |
| 30 estudiantes entran a la sala | ~30 × 32 = 960 | 30 |
| 30 estudiantes juegan y guardan una partida | ~30 × 2 = 60 | 30 |
| El profe proyecta la sala y ve el marcador | ~40, una sola vez | 3 |
| **Una hora de clase** | **~1.060** | **~63** |

Doce horas de clase al día son ~13.000 lecturas y ~750 escrituras, más el uso de
los paneles. Con eso el plan **Spark** (gratis, 50.000 lecturas y 20.000
escrituras al día) alcanza para unas 40 horas de clase jugada al día, o sea un
colegio de ese tamaño usando la plataforma un par de periods por grado. Si la usan
todo el día se pasa a **Blaze** (pago por uso) y el excedente son céntimos; no hay
que cambiar ni una línea de código, solo activar la facturación en Firebase.

Lo que ya se dejó hecho para no gastar de más: `onSnapshot` en vez de
`setInterval`, un documento de asistencia por estudiante en vez de un arreglo, el
Inicio del profesor dejó de leer los resultados de cada clase (antes costaba una
lectura por clase creada, con todas sus partidas; ahora son 3 lecturas fijas y el
resumen se fue a "Mi Biblioteca", que se entra a propósito), y `limit()` en las
consultas de resultados (500 por clase, 200 por estudiante) con un aviso cuando se
corta, para que un historial de años no se trague la cuota de un día.

## 13. Lo que está mal o sin probar, para que nadie se lleve sorpresas

Prefiero escribirlo yo antes de que lo encuentren en una sustentación:

- **Las cuatro funciones recién portadas (código autogenerado, filtro por año,
  plan b del curso y Borrar cuentas) no se han corrido contra Firestore.** Borrar
  es la que más riesgo tiene: hace un `deleteUser()` en una app secundaria y
  después entre 5 y 300 escrituras en lote, y solo se comprueba de verdad con una
  cuenta real. Hazlo primero con un estudiante de prueba, nunca con el padrón
  completo. Y antes de eso, publica `firestore.rules`: sin las reglas nuevas los
  cuatro botones fallan con `permission-denied`.

- **Ninguna prueba se corrió contra Firestore con sesiones reales.** La
  verificación de esta entrega fue estática (sintaxis de los `.js`, que cada
  nombre importado exista en su módulo, que ningún `href`/`src` apunte a un
  archivo inexistente, que cada `getElementById` tenga su `id`, y las llaves de
  `firestore.rules`), más pruebas en el navegador de las pantallas nuevas con
  datos simulados y el test del cálculo de notas. Antes de entregarla al colegio
  hay que correr el recorrido del §11 con una cuenta real de cada rol. Lo único
  que puede fallar ahí y no en una prueba estática es un permiso de Firestore,
  y eso casi siempre significa que faltó publicar `firestore.rules`.
- El dominio `@skillhouse.edu.co` **no existe**. Los correos son solo
  identificadores de acceso. Nunca va a llegar un correo de recuperación.
- Los PINes de 6 dígitos son para niños de sexto grado: cómodos, no seguros.
- El administrador ve los PINes de todos. Es un requisito del proyecto, no una
  buena práctica, y se apoya en la ofuscación de §7.
- No hay servidor, así que no hay Admin SDK: cambiar la clave de otro exige
  iniciar sesión como ese usuario con su clave actual. Por eso hace falta que el
  PIN quede registrado. Una cuenta creada a mano en Firebase Console no se puede
  restablecer desde la plataforma.
- Un estudiante cuya ficha no tenga `curso` (cuenta escrita a mano en la consola)
  no puede unirse a ninguna clase: las reglas exigen que el curso coincida, y la
  app lo avisa en español antes de intentar la escritura.

## 14. Trabajo en pareja y repo

Todo está en `github.com/naku8758/SkillHouse-2.0`, rama **`main`**. La rama
`skillhouse-2.0-mejorado` se quedó en el último commit antes de las mejoras
nuevas (la sala estilo Kahoot, la nota de 1 a 5 y el padrón de usuarios están en
`main`), así que no se trabaje ahí.

Antes de tocar nada, `git pull`. Para subir hace falta un *Personal access
token* fine-grained (GitHub ya no acepta la contraseña de la cuenta): Settings →
Developer settings → Personal access tokens → Fine-grained token, con permiso de
escritura sobre ese repo. Se configura una vez en el gestor de credenciales de tu
máquina y no se vuelve a escribir. **Nada de `git push --force`**: es un repo de
dos y el force le pisa el trabajo a la otra persona.

Cosas que ya cambiaron de nombre y conviene saber:

- Las carpetas se renombraron con guiones (`interfaz administrador/` →
  `interfaz-administrador/`) porque todo el código enlaza con guiones. Git lo
  registró como renombrado, no como borrado.
- `matematicas.html` se fue: ahora es `materia.html?m=matematicas`. Igual
  `grupos.html` y los dos `juegos-panel.js` viejos, que los reemplazaron páginas
  generales.
- `js/games/quiz-data.js`, `puzzle-data.js` y `carrera-data.js` se unificaron en
  `js/games/contenido-temas.js`, que hoy es la única fuente de preguntas.

Si vas a agregar una materia, son tres toques: el objeto en `MATERIAS`
(`js/catalogo.js`), sus 9 temas con contenido en `js/games/contenido-temas.js`, y
ya: la portada, los filtros, los formularios de clase y el padrón de Usuarios leen
de ahí, así que salen solos.

---

Proyecto de grado — Técnico de Programación de Software.
Aprendiz Garzón Juan y Tovar Sara.
