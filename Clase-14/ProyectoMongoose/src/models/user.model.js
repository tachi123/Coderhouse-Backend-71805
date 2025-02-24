import mongoose from 'mongoose';

const userCollection = "usuarios"; //Así es como se llamará la colección en nuestra base de datos

const userSchema = new mongoose.Schema({
    //Seteamos las propiedades que queremos que un usuario tenga en la aplicación
    first_name: String, //Si solo necesitamos setear el tipo de datos, con los : alcanza
    last_name: String,
    email: { //Si queremos especificar más detalles, usamos las {}
        type:String,
        unique: true
    }
})

/**
 * Ahora con mongoose.model generamos el modelo funcional de un usuario conectandose a la base de datos
 */
export const userModel = mongoose.model(userCollection, userSchema);