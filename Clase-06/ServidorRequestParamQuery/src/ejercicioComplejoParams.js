import express from 'express';

const app = express();
const usuarios = [
    {id: "1", nombre: "Mauricio", apellido: "Espinosa", edad: 25},
    {id: "2", nombre: "Natalia", apellido: "Cardozo", edad: 23},
    {id: "3", nombre: "Roberto", apellido: "Gómez", edad: 30}
]

//Endpoint raiz '/' devolver todos los usuarios
app.get('/', (req, res) => {
    res.json({usuarios}); //Se recomienda enormemente mandar los datos en formato objeto en lugar
    //de enviarlos como un array solo, esto permite que, si vamos a meter mas infor en el futuro
    //no tengamos que cambiar el tipo de respuesta del lado del cliente
})

app.get('/:idUsuario', (req,res) => {
    let idUsuario = req.params.idUsuario;//Obtenemos el id del usuario a trabajar
    //Procedemos a buscar el usuario que tenga el id pasado por params
    let usuario = usuarios.find(user => user.id === idUsuario);
    //Si no encuentra al usuario, debemos finalizar devolviendo un error
    if(!usuario) return res.send({error: "Usuario no encontrado"});
    //En caso que no haya finalizado la función, significa que el usuario sí se encontro y lo devolvemos en la respuesta
    res.send({usuario});
})



app.listen(8080, () => console.log("Listo para probar caso práctico"));