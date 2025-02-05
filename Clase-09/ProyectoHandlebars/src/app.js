import express from 'express';
import handlebars from 'express-handlebars';
import __dirname from './utils.js';

//Importamos los routers
import viewsRouter from './routes/views.router.js';
import userRouter from './routes/user.router.js';

const app = express();

//Midleware para analizar el cuerpo de las solicitudes
app.use(express.json());
app.use(express.urlencoded({encoded: true}));

//Para convertir nuestra carpeta PUBLIC en recurso estático
app.use(express.static( __dirname + '/public'));

//Inicializamos el motor indicando con app.engine('Que motor utilizaremos', el motor instanciado)
app.engine('handlebars', handlebars.engine());
/**
 * luego, con app.set('views',ruta) Indicamos en qué parte del proyecto estarán las vistas
 * Recordamos que es mejor utilizar rutas absolutas para evitar asuntos de ruteo relativo
 */
app.set('views', __dirname + '/views');
/**
 * Finalmente, con app.set('view engine','handlebars') inidicamos que el motor que ya inicializamos arriba,
 * es el que queremos utilizar. 
 */
app.set('view engine','handlebars');

app.use('/', viewsRouter);
app.use('/api/user', userRouter);

//Ponemos a escuchar el servidor
app.listen(8080, () => {
    console.log("El servidor se encuentra escuchando en el puerto 8080");
})