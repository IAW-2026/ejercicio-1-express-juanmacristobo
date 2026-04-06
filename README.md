[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-2972f46106e565e64193e422d61a12cf1da4916b45550586e14ef0a7c637dd04.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=23434595)
# Ejercicios Iniciales - Desarrollo Web con Express

Esta es una plantilla básica de proyecto Express.js con Node.js y Express.

## Requisitos

- Node.js >= 22.0.0
- pnpm (`npm install -g pnpm`)

## Configuración

1. Instalar dependencias:
```bash
pnpm install
```

2. Iniciar el servidor de desarrollo:
```bash
pnpm dev
```

3. Iniciar el servidor de producción:
```bash
pnpm start
```

## Estructura del Proyecto

- `app.js` - Archivo principal de la aplicación
- `package.json` - Configuración del proyecto y dependencias

---

# Ejercicios

Estos ejercicios están pensados para introducirte en el desarrollo web utilizando Node.js y Express. También practicarás HTML, CSS, JavaScript y el modelo cliente-servidor. Todos los ejercicios pueden resolverse sin base de datos ni herramientas avanzadas.

Cada ejercicio debe realizarse en un branch separado con el formato `ejercicio/<numero>` (por ejemplo: `ejercicio/1`, `ejercicio/2`, etc.) y desplegarse en [Vercel](https://vercel.com).

---

## 🟢 Nivel 1 – Fundamentos (Servidor + Archivos Básicos)

### 1. Servidor Hello World
Crear un servidor con Express que responda con el texto "Hola mundo" cuando se accede a la ruta raíz (`/`).

- Objetivo: Aprender a levantar un servidor con Express y manejar una ruta básica.

---

### 2. Servidor de archivos estáticos
Crear un servidor Express que sirva archivos estáticos desde una carpeta `public`. Debe incluir al menos:

- Un archivo HTML
- Un archivo CSS
- Un archivo JavaScript

- Objetivo: Aprender a servir contenido estático utilizando `express.static`.

---

### 3. Servidor con varias rutas
Crear un servidor que tenga al menos tres rutas diferentes:

- `/` – Página principal
- `/acerca` – Información sobre el sitio
- `/contacto` – Formulario o datos de contacto

Cada ruta debe devolver un contenido HTML distinto. Se pueden enlazar entre sí con etiquetas `<a>`.

- Objetivo: Aprender a manejar múltiples rutas y conectar páginas HTML.

---

### 4. Página con estilos
Servir una página HTML con estilos personalizados mediante CSS. El diseño puede ser libre (colores, tipografía, disposición), y debe estar vinculado a un archivo `.css` externo.

- Objetivo: Integrar HTML + CSS + servidor Express.

---

## 🟡 Nivel 2 – Interacción básica (Formularios y POST)

### 5. Formulario con POST
Crear una página HTML con un formulario que envíe datos (nombre y mensaje) mediante POST a la ruta `/contacto`.

El servidor debe responder con un HTML que muestre los datos enviados.

- Objetivo: Usar formularios HTML y procesar datos en el servidor con `req.body`.

---

### 6. Contador de visitas
Contar cuántas veces se accedió a la ruta `/` desde que se inició el servidor. Mostrar ese número al usuario.

- Objetivo: Usar variables en memoria en el servidor y entender la persistencia temporal.

---

### 7. Encuesta simple
Crear una página con un formulario que tenga una pregunta de selección (por ejemplo: "¿Cuál es tu lenguaje favorito?" con opciones como JavaScript, Python, etc.).

El formulario debe enviarse por POST y el servidor debe mostrar la opción elegida.

- Objetivo: Procesar distintos tipos de inputs desde el servidor.

---

### 8. Mostrar mensajes enviados
Agregar un formulario con campo "mensaje". Cada vez que se envía, mostrar en pantalla el mensaje junto con los anteriores (almacenados en memoria).

- Objetivo: Practicar acumulación de datos temporales y mostrar múltiples respuestas.

---

## 🟠 Nivel 3 – Comunicación dinámica (fetch + JSON)

### 9. Simulación de API con JSON
Crear una ruta `/api/productos` que devuelva un array de productos en formato JSON.

Desde una página HTML, usar `fetch` para obtener esa información y mostrarla dinámicamente en la pantalla.

- Objetivo: Practicar con JSON, APIs simuladas, y consumo desde el frontend.

---

### 10. Envío de datos con fetch()
Crear un formulario en HTML que envíe los datos mediante `fetch` (POST) a una ruta `/api/contacto`.

El servidor debe responder con un mensaje personalizado, y este debe mostrarse en la misma página sin recargarla.

- Objetivo: Comunicación fluida entre cliente y servidor con JavaScript.

---

### 11. Generador de frases aleatorias

El servidor debe tener una ruta `/frase` que devuelva una frase aleatoria en formato JSON.

Desde el cliente, hacer un `fetch` a esa ruta al hacer clic en un botón, y mostrar la frase en pantalla.

- Objetivo: Entender cómo usar fetch GET y procesar respuestas dinámicas.

---

### 12. Formulario dinámico sin recarga

Crear un formulario que al enviarse con `fetch` POST, reciba una respuesta del servidor y la muestre en pantalla sin recargar.

Por ejemplo, enviar tu nombre y recibir un saludo como "Hola, [nombre]".

-
