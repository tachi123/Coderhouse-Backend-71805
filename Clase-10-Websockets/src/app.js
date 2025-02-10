import express from 'express';
import handlebars from 'express-handlebars';
import __dirname from './utils.js';

//Importo los routers
import viewsRouter from './routes/views.router.js';

//Importamos el constructor de un servidor de sockets
import { Server } from 'socket.io';

const app = express();

//Midleware para analizar el cuerpo de las solicitudes
app.use(express.json());
app.use(express.urlencoded({encoded: true}));

//Configurar el motor de plantillas handlebars
app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');

//Cargamos la carpeta 'public' como nuestra carpeta de archivos estáticos
app.use(express.static(__dirname + '/public'));


//Implemente los routers cargados
app.use('/', viewsRouter);

//Creo mi servidor http
const httpServer = app.listen(8080, () => {console.log("Listening on PORT 8080")}); //Servidor HTTP
//Creamos un servidor de sockets que vive dentro de nuestro servidor HTTP
const socketServer = new Server(httpServer);

const messages = [];
//Escuchamos conexiones entrantes
socketServer.on('connection', socket => {
    console.log("Nuevo cliente conectado");

    /**
     * socket.on("nombre del evento a escuchar", callback con la data enviada)
     */
    socket.on('message', data => {
        console.log(data);
    })

    //socket.emit: envía un mensaje a un socket específico (el actual)
    socket.emit('evento_para_socket_individual', "Este mensaje solo lo debe recibir el socket");
    //socket.broadcast.emit: Envía un mensaje a todos los sockets excepto el que lo emitió
    socket.broadcast.emit('evento_para_todos_menos_el_socket_actual',"Este evento los verán todos los sockets conectados menos el socket actual");
    //socketServer.emit: Envía un mensaje a todos los sockets conectados al servidor
    socketServer.emit('evento_para_todos', 'Este mensaje lo reciben todos los sockets conectados');


    /** Ejercicio para enviar mensajes */
    socket.emit('loadMessages', messages);

    socket.broadcast.emit('newUser', socket.id);

    socket.on('newMessage', message => {
        const newMessage = { socketid: socket.id, message};
        messages.push(newMessage);
        console.log(messages);
        socketServer.emit('newMessage', newMessage);
    })

})