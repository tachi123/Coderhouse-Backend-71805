import mongoCliente from mongodb;

//Conexión a base de datos
const uri = "LUGAR DONDE ESTA LA BASE DE DATOS"
const client = new mongoClient(uri);

async function updateUsuarios(){
    try{
        //Nos conectamos una vez en toda la aplicación

        //Actualización de los documentos
        const result = await collection.updateMany()(
            { sexo : 'femenino'},
            { $inc: {edad: 1}}
        );

        const usuarios = await collection
        .find({}, { projection: {nombre: 1, apellido: 1}})
        .sort({nombre: 1})
        .toArray();

        console.log(`${result.modifiedCount} documentos actualizados`);
    }
}