const express = require('express'); // Requerimos express
const session = require ('express-session'); // Requerimos express-session para iniciar sesiones
const cookies = require ('cookie-parser');// requierimos cookie-parser para trabajar con cookies
const app = express(); // Llamamos express dentro de la constante app
const path = require('path');
const port = 3003; // Colocamos el puerto en una constante para que pueda modificarse facilmente
const cors = require('cors');
/******TEST */


//const routertest = require('./routers/testRoutes')

/******TEST */

const userRoutesSQL = require('./routers/userRoutesSQL'); // Rutas Usuario SQL
const routerMain = require('./routers/mainRoutes'); // importamos routers main

const productRoutes = require('./routers/productRoutes');
const productApiRoutes=require('./routers/API/productApiRoutes');
const userApiRoutes=require('./routers/API/userApiRoutes');
const categoryApiRoutes=require('./routers/API/categoryApiRoutes');


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

app.use(cors());

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

app.use('/product',productRoutes);
app.use ('/users', userRoutesSQL)
app.use('/product',productApiRoutes);
app.use ('/users', userApiRoutes);
app.use('/category',categoryApiRoutes);

/**************test*/
//app.use('/test',routertest)

/**********test****** */


app.use((req, res, next)=>{
    res.status(404).render('error404');
});


// app.use('users', usersRoutes);
// app.use('products', productsRoutes);