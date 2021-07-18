const express = require('express'); // Requerimos express
const session = require ('express-session'); // Requerimos express-session para iniciar sesiones
const cookies = require ('cookie-parser');// requierimos cookie-parser para trabajar con cookies
const app = express(); // Llamamos express dentro de la constante app
const path = require('path');
const port = 3003; // Colocamos el puerto en una constante para que pueda modificarse facilmente


const routerOrders= require('./routers/ordersRoutes')
const routerMain = require('./routers/mainRoutes'); // importamos routers main
const routersProducts = require('./routers/productsRoutes');
const routerUsers = require('./routers/userRoutes');
const methodOverride =  require('method-override'); // Pasar poder usar los métodos PUT y DELETE
const userLoggedMiddleware = require ('./middleware/userLoggedMiddleware'); //Middleware para poder mostrar registro y login segun si esta o no logueado



/* Configuraciones */
app.use(
    express.static(path.resolve(__dirname, '../public'))
);
app.use(methodOverride('_method')); // Pasar poder pisar el method="POST" en el formulario por PUT y DELETE
app.use(express.json());
app.use(express.urlencoded({extended: false}));
// Advertimos en la consola que el servidor se encuentra activo sobre el puerto determinado en la constante 'port'
app.listen(port, () =>
    console.log('Servidor corriendo Grupo 10 DH en el puerto ' + port)
);

//middleware de session (proximamente mover a middlewares)
//Lo que se coloca aqui es obligatorio para que no tire errores, no tiene funcionalidad per se para el uso de la sesion
app.use (session({ 
    secret: 'esto es secreto',
    resave: false,
    saveUninitialized:false
}));

//middleware  de aplicacion  --cookies
app.use(cookies());


//middleware de userlogged (proximamente mover a middlewares)
//Esto activa el userloggedMiddleware requerido en la parte superior

app.use(userLoggedMiddleware);

// Procedemos a setear app para que el view engine (motor de visualizacion) sea ejs (Express JS Layouts) tal como se señala en el repositorio npm
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));

app.use('/', routerMain);
app.use('/products',routersProducts);
app.use ('/user', routerUsers)

app.use('/orders',routerOrders)

app.use((req, res, next)=>{
    res.status(404).render('error404');
});


// app.use('users', usersRoutes);
// app.use('products', productsRoutes);