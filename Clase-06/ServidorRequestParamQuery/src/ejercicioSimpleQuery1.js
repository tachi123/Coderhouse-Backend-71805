import express from 'express';

const app = express();

app.use(express.urlencoded({extended: true}));

app.get('/ejemploQueries', (req, res) =>{
    /**
     * Nota algo interesante: Aquí no es necesario adelantarnos al parámetro que tiene que meter el cliente.
     * Con el simple hecho de llamar al endpoint, el cliente puede meter
     * los queries que necesite desde la url con el símbolo ?
     */
    let consultas = req.query;
    /**
     * A diferencia de req.params, acá no tengo contemplaco qué tipo de cosas me pueden pedir
     * aunque si podemos delimitarlo haciendo un destructuring
     */
    let {nombre, apellido, edad} = req.query;
    /**
     * No nos importa que llegue del query, solo extraeremos el nombre, el apellido y la edad
     * Nos aumenta la seguridad del servidor porque evitamos recbiir elementos extraños en la url
     */
    res.send({consultas});
})

app.listen(8080, () => console.log("Listo para probar caso práctico"))