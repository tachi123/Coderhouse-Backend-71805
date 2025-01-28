import express from 'express';

const app = express();
const port = 8080;

//Endpoinrt para la bienvenida
app.get( '/bienvenida', (request, response) => {
    response.send('<h1 style="color: blue">¡Bienvenido a mi aplicación express!</h1>')
})

//Endpoinrt para obtener datos de un usuario
app.get( '/usuario', (req, res) => {
    const usuario = {
        nombre: "Nahuel",
        apellido: "Ramírez",
        edad: 33,
        correo: "example@gmail.com"
    }
    res.json(usuario);
})

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
})