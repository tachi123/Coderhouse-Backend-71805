const socket = io();
/**
 * io hace referencia a "socket.io", se llama así por convención. 
 * Instanciamos el socket y lo guardamos en la constante "socket"
 * Dicho socket es el que utilizaremos para poder comunicarnos con el SOCKET del servidor
 * (Nosotros en este arhicov, somos como "clientes", porque representamos una vista)
 */

socket.emit('message', "¡Hola, me estoy comunicando desde un websocket!");

socket.on('evento_para_socket_individual', data => console.log(data));

socket.on('evento_para_todos_menos_el_socket_actual', data => console.log(data));

socket.on('evento_para_todos', data => console.log(data));

/** Simulo un chat */
const messageButton = document.getElementById('sendMessage');
const messageInput = document.getElementById('messageInput');
const messageContainer = document.getElementById('messageContainer');

messageButton.addEventListener('click', () => {
    const message = messageInput.value;
    messageInput.value = '';
    socket.emit('newMessage', message);
})

socket.on('loadMessages', messages => {
    /** Cargar todos los mensajes cuando me conecto, los cargo en mi interfaz web */
    messages.forEach( unMensaje => cargarMensaje(unMensaje));
})

socket.on('newMessage', message => {
    /** Cargar mensaje nuevo */
    cargarMensaje(message);
})

socket.on('newUser', userId => {
    const messageElement = document.createElement('p');
    messageElement.textContent = `Se conecto el usuario con id: ${userId}`;
    messageContainer.appendChild(messageElement);
})

function cargarMensaje(unMensaje){
    const messageElement = document.createElement('p');
    messageElement.textContent = `${unMensaje.socketid} : ${unMensaje.message}`;
    messageContainer.appendChild(messageElement);
}