const express = require('express');
const app = express();

app.listen(3003, () => 
console.log('Servidor corriendo Grupo 10 DH')
);

app.get('/home', (req, res) => {
    res.send('Hola, estamos en el home');
   });