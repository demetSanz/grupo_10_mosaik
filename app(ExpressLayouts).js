//Conservamos este archivo para el momento que empecemos a analizar la funcionalidad de expressLayouts


const express = require('express'); // Requerimos express
const app = express(); // Llamamos express dentro de la constante app
const port = 3003; // Colocamos el puerto en una constante para que pueda modificarse facilmente
const expressLayouts = require('express-ejs-layouts'); // Llamamos a Express JS Layouts dentro de la contante expressLayouts (ver  https://www.npmjs.com/package/express-ejs-layouts)

// Advertimos en la consola que el servidor se encuentra activo sobre el puerto determinado en la constante 'port'
app.listen(port, () => 
console.log('Servidor corriendo Grupo 10 DH en el puerto '+port) 
);

// Procedemos a setear app para que el view engine (motor de visualizacion) sea ejs (Express JS Layouts) tal como se señala en el repositorio npm
app.use(expressLayouts);
app.set('view engine', 'ejs'); 

// Navegacion (utilizamos res.render() y este buscará en la carpeta de views las distintas vistas)
app.get('/', function(req, res) {
    res.render('paginas/index');
});