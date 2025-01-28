import express from 'express';

const app = express();
const productos = [
    {id: "1", nombre: "Martillo"},
    {id: "2", nombre: "Pala"}
]
app.use(express.urlencoded({extended: true}));

app.get('/productos', (req, res)  =>{
    const idProducto = req.query.idProducto;
    console.log(idProducto);
    let producto = productos.find(prod => prod.id === idProducto);
    if(!producto) return res.send({error: "Producto no encontrado"});
     res.send({producto});
})


app.listen(8080, () => console.log("Listo para probar caso práctico"))