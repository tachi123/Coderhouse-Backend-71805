/**
 * En este router tengo las operaciones CRUD pero devuelvo respuestas con vistas renderizadas
 */
import { Router } from 'express';
import ProductModel from '../models/product.model.js';

const router = Router();

//C: Create
router.post('/', async (req,res) =>{
    try{
        const newProduct = new ProductModel(req.body);
        console.log('Info del body: ', req.body);

        await newProduct.save();

        res.json({newProduct});
    }catch(error){
        return res.send({message: "error"})
    }

})

//R: Read

//U: Update

//D: Delete

export default router;