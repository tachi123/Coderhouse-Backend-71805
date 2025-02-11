import express from 'express';

const app = express();

/**
 * Utilizamos los dos puntos ( : ) para indicar que queremos que ese sea el parámetro
 * Esto nos permite crear una ruta dinámica que pueda recibir cualquier parámetro, en lugar de tratar de adivinarlo
 * Ahora podemos ingresar cualquier nombre desde la url, en lugar de tener que registrar 1000 rutas con 1000 nombres diferentes
 */
app.get('/unparametro/:usuario', (req, res)  => {
    //:parametro ahora se encontrará dentro del objeto req.params
    console.log(req.params.usuario);
    res.send(`¡Bienvenid@, ${req.params.usuario}!`);
})

app.get('/dosparametros/:nombre/:apellido', (req, res)  => {
    //:nombre y :apellido ahora se encontrarán dentro del objeto req.params
    //¡Podemos definir nuestro endpoint cuantos parámetros necesitamos!
    res.send(`El nombre completo es: ${req.params.nombre} ${req.params.apellido}`);
})

app.listen(8080, () => console.log("Listo para recibir peticiones"));