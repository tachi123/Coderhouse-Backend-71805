import express from 'express';
import handlebars from 'express-handlebars';
import __dirname from './utils.js'; //La ubicación del directorio actual donde este alojado el archivo utils.js

//Importar los routers
import viewsRouter from './routes/views.router.js';

//Importamos el constructor de un servidor de sockets
import { Server } from 'socket.io';

const app = express();
const httpServer = app.listen(8080, () => console.log(`Listening on PORT 8080`));
//Creamos un servidor de sockets que VIVE dentro de nuestro servidor HTTP
const io = new Server(httpServer); //io será un servidor para trabajar con sockets y por convención se lo llama así

//Configuramos todo lo referente a plantillas
app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');
//Cargamos la carpeta 'public' como nuestra carpeta de archivos estáticos
app.use(express.static(__dirname + '/public'));

//Implementamos los routers
app.use('/', viewsRouter);


/**
 * Empezamos a trabajar con el servidor socket
 * Nos ponemos a escuchar conexiones
 */
let messages = []; //Los mensajes se almacenarán aquí
io.on('connection', socket => {
    console.log(`Nuevo cliente conectado: ${socket.id}`);

    socket.on('userAuthenticated', user  => {
        //Emitir los logs del chat al usuario que se acaba de autenticar
        socket.emit('messageLogs', messages);
        //Emitir una notificación a todos los demás usuarios
        socket.broadcast.emit('newUserConnected', user);
    })

    //Recibir mensajes y enviarlos a todos los clientes
    socket.on('message', (data) => {//Escuchamos el evento con el mismo nombre que emite el cliente: "message"
        messages.push(data); //Guardamos el mensaje en la "base"
        io.emit('messageLogs', messages); //Reenviamos instántaneamente los logs actualizados a TODOS los clientes
    })



})