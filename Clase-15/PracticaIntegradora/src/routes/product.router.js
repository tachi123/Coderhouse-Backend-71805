/**
 * En este router tengo las operaciones CRUD pero devuelvo respuestas con vistas renderizadas
 */
import { Router } from 'express';
import ProductModel from '../models/product.model.js';
import { uploader } from '../utilsMulter.js';

const router = Router();

//C: Create
router.post('/', uploader.single('file') ,async (req,res) =>{
    try{
        const newProduct = new ProductModel(req.body);
        console.log('Info del body: ', req.body);
        if(req.file){
            console.log(req.file); //Revisar que campos vienen por parte de multer
            newProduct.thumbnail = req.file.filename; //Agrego al usuario la ruta de su respectiva imagen
        }        
        await newProduct.save();
        res.render('product', { product: newProduct.toObject()});
    }catch(error){
        return res.render('error', {error: "Error al insertar el producto"})
    }
})

//R: Read
router.get('/:cod', async (req,res) =>{
    try{
        const product = await ProductModel.findOne({cod: req.params.cod});
        if(!product){
            return res.render('error', {error: "Producto no encontrado"})
        }
        res.render('product', { product: product.toObject()});
    }catch(error){
        return res.render('error', {error: "Error al obtener el producto solicitado"})
    }
})
//Listado de productos
router.get('/', async (req,res) =>{
    try{
        let products = await ProductModel.find();
        products = products.map( product => product.toObject());
        res.render('products', { products: products});
    }catch(error){
        return res.render('error', {error: "Error al obtener todos los productos"})
    }
})

//U: Update

//D: Delete
router.delete('/:pid', async (req,res) =>{
    try{
        const productoAEliminar = await ProductModel.findByIdAndDelete(req.params.pid);
        if(!productoAEliminar){//Si la variable sigue vacía, es que no encontro el producto y no lo elimino
            return res.render('error', {error: "No se encontró el producto a eliminar"})
        }
        res.redirect('/product'); //Redirecciono al listado de productos
    }catch(error){
        return res.render('error', {error: "Error al borrar el producto"})
    }
})

export default router;