const express = require('express');
const app = express();

const path = require('path'); //Para la ruta de carpetas
const isDev = process.env.NODE_ENV !== 'production';

let contadorVisitas = 0;
const mensajes = []; //Para inciso 8

if (isDev) {
  app.use((req, res, next) => {
    console.log(`[DEV] ${req.method} ${req.originalUrl}`);
    next();
  });
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    contadorVisitas++;

    // 1. Creamos una cabecera personalizada (X- es estándar para las nuestras)
    res.set('X-Visits-Count', contadorVisitas.toString());

    // 2. Mandamos el archivo físico que ya tenés en public
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/cuestionario', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'cuestionario', 'index.html'));
});

app.get('/mensaje', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'mensaje', 'index.html'));
});

// Ruta raíz
/*
app.get('/', (req, res) => {
  res.send('Hola mundo!');
});
*/

// Middleware básico para manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: '¡Algo salió mal!' });
});

//Ruta que escucha el metodo POST
app.post('/formulario-enviado', (req, res) => {
    const { nombre, mensaje } = req.body;

    // Respondemos con un HTML simple mostrando los datos
    res.send(`
        <h1>¡Gracias por tu mensaje, ${nombre}!</h1>
        <p>Recibimos lo siguiente: "${mensaje}"</p>
        <a href="/">Volver al inicio</a>
    `);
});

app.post('/cuestionario', (req, res) => {
    const { lenguaje } = req.body;

    res.send(`
        <h1>¡Gracias por tu respuesta!</h1>
        <p>Seleccionaste: <strong>${lenguaje || 'ninguna opción'}</strong></p>
        <a href="/cuestionario">Volver al formulario</a>
    `);
});

app.post('/mensaje', (req, res) => {
  const { mensaje } = req.body;
  if (!mensaje) {
    return res.send('No enviaste ningún mensaje.');
  }

  mensajes.push(mensaje);

  res.send(`
    <h1>Mensajes recibidos</h1>
    <ul>
      ${mensajes.map(m => `<li>${m}</li>`).join('')}
    </ul>
    <a href="/mensaje">Volver</a>
  `);
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});