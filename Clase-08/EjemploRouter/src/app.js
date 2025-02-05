import express from 'express';
import indexRouter from './routes/index.router.js';

const app = express();

//Middleware para analizar el cuerpo de las solicitudes
app.use(express.json()); //Indicamos que ahora podemos recibir JSON al momento de recibir solicitudes
app.use(express.urlencoded({extended: true})); //Permite que se pueda enviar información también desde la URL

//Inicializar mi servidor
app.listen(8080, () => {
    console.log("El servidor se encuentra escuchando en el puerto 8080")
})

//Implementamos router
app.use('/', indexRouter); //Agrupo los métodos relacionados a inicio e informativos