import express from 'express';
import __dirname from './utils.js';

//Importamos los routers
import userRouter from './routes/user.router.js';
import petRouter from './routes/pet.router.js';

const app = express();

//Middleware para registrar todas las peticiones a nivel aplicación
app.use( (req, res, next) => {
    console.log(`${req.method} ${req.path} - ${new Date()}`);
    next();
})

//Midleware para analizar el cuerpo de las solicitudes
app.use(express.json());
app.use(express.urlencoded({encoded: true}));

//Ponemos a escuchar el servidor
app.listen(8080, () => {
    console.log("El servidor se encuentra escuchando en el puerto 8080");
})

//Implementamos los routers que creamos
app.use('/api/user', userRouter);
app.use('/api/pet', petRouter);

//Para convertir nuestra carpeta PUBLIC en recurso estático
app.use('/static', express.static( __dirname + '/public'));