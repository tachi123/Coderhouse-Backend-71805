import express from 'express';

const app = express();

//Filtraremos por género masculino (M) y femenino (F)
const usuarios = [
    {id: "1", nombre: "Dalia", apellido: "Gómez", genero: "F"},
    {id: "2", nombre: "Myrna", apellido: "Flores", genero: "F"},
    {id: "3", nombre: "Armando", apellido: "Mendoza", genero: "M"},
    {id: "4", nombre: "Dalia", apellido: "Gómez", genero: "F"},
    {id: "5", nombre: "Herminio", apellido: "Fuentes", genero: "M"},
    {id: "6", nombre: "Juan", apellido: "Zepeda", genero: "F"},
]

//Crear un endpoint que va a filtrar por género
app.get('/', (req,res) => {
    let genero = req.query.genero;//Agarro el params query genero
    //Si no se ingresó género, o el género no es M ni es F, el filtro no vale
    if(!genero||(genero!=="M"&&genero!=="F")) return res.send({usuarios})
    //En caso contrario, continuamos con el proceso del filtro
    let usuariosFiltrados = usuarios.filter(user => user.genero === genero);
    res.send({usuarios: usuariosFiltrados})
})

app.listen(8080, () => console.log("Preparado para hacer filtros"));