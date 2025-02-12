/** En este archivo, nos posicionamos como "clientes" */
const socket = io();

/**
 * socket hace referencia a "socket.io", se llama así por convención
 * Nos permite instanciar el socket y guardarlo en la constante "socket"
 * Este socket es el que vamos a utilizar para poder comunicarnos con el socket del servidor
 */

Swal.fire({
    title: "Hola, Coders",
    text: "Alerta básica con Sweetalert2",
    icon: "success"
})

socket.on('messages', data => {

});