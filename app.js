const express = require('express'); // Requerimos express
const app = express(); // Llamamos express dentro de la constante app
const port = 3003; // Colocamos el puerto en una constante para que pueda modificarse facilmente

app.listen(port, () => 
console.log('Servidor corriendo Grupo 10 DH en el puerto '+port)
);

app.get('/home', (req, res) => {
    res.send('Hola, estamos en el home');
   });