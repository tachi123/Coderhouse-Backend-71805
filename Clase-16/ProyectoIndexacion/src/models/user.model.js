import mongoose from 'mongoose';

const userCollection = 'users';

const userSchema = mongoose.Schema({
    first_name: {
        type: String,
        index: true //Índice simple: índice creado por defecto de manera ascendente
    },
    last_name: {
        type: String,
        index: -1 //Similar a un índice simple, pero descendente
    },
    email: String,
    gender: String
});

//Índice simple: otra forma de crearlo
userSchema.index({email: 1}); //Es igual que poner index: TRUE

//Índice compuesto: cueando necesitamos ordenar los datos por más de un campo
userSchema.index({last_name: 1, first_name: -1}); //Creamos un índice compuesto con "last_name" ascendente y "first_name" descendente

//Índice múltiple llave (multikey): cuando queremos buscar valores dentro de una "array"
//Si hubiera un campo por ejemplo --- hobbies : [String]
//userSchema.index({hobbies: 1}); //Crea un índice multikey para el campo hobbies que es un array

//Índice de texto
//userSchema.index({resumen: 'text'}); //Crear un índice de texto para el campo 'resumen'

//índice geoespacial (Geospatial): Para trabajar con datos de ubicación, como coordenadas geográficas
/**
 * location: {
 * type: {type: String, default: 'Point'}
 * coordinates: [Number] // [Longitud, Latitud]
 * }
 * 
 * Creación del índice
 * userSchema.index({location: '2dsphere'}); //Crea un índice geoespacial 2dsphere para el campo 'location'
 */

const userModel = mongoose.model(userCollection, userSchema);

export default userModel;