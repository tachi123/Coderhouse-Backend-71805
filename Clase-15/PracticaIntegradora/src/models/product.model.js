import mongoose from 'mongoose';
const { Schema } = mongoose;

const productCollection = 'product'; //Seteamos el nombre de la colección
const productSchema = new Schema({ //Definimos el esquema para producto
    nombre: {type: String, required: true},
    precio: {type: Number, required: true},
    descripcion: {type: String, required: true}
})

const ProductModel = mongoose.model(productCollection, productSchema)

export default ProductModel;