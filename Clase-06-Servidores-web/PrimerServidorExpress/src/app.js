import express from 'express';

/**
 * Express es el módulo ya instalado, para poder tener andando nuestra "app"
 * necesitamos inicializarlo
 */
const app = express(); //A partir de aca la variable app contendrá todas las funcionaldes de express

const PORT = 3000;

/** app.get realizar una apertura de un "endpoint"
 * El cual indica al protocolo HTTTP que en la ruta "/saludo" espera una petición GET
 * Si se llama a otra ruta u otro método, no lo va a reconocer
 */
app.get('/saludo', (req, res) => {//req = request (petición) ; res = response (respuesta)
    res.send("¡Hola a todos, pero ahora desde express!")
    //res.send sirve para "Responder" a la petición con contenido dentro
})

/**
 * app.get configura el endpoint, sin embargo, si el servidor no se levanto para escuchar en algún puerto
 * No va a suceder nada. Por eso recurrimos a app.listen
 */

//por defecto usa localhost o 127.0.0.1
//el segundo argumento es un callback que muestra un console.log indicando que el servidor esta activo o esta levantado o esta arriba
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})