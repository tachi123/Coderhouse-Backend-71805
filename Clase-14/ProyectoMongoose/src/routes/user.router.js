import { Router } from 'express';
import {userModel} from '../models/user.model.js';

const router = Router();
//READ
router.get('/', async (req, res) => {
    try{
        let users = await userModel.find(); //Es un find idéntico al que hacíamos en el cliente CLI
        res.send({result: "success", payload: users})
    }catch(error){
        console.log("Cannot get users with mongoose: "+ error)
    }
})
//CREATE Crear un nuevo recurso - User
router.post('/', async (req ,res) => {
    //Primero obtenemos los datos que necesitamos
    let { first_name, last_name, email } = req.body;
    //Evaluamos que los valores existen
    if(!first_name || !last_name || !email ) return res.send({status: "error", error: "Incomplete values"});
    //Persistir la información en la base de datos
    let result = await userModel.create({
        first_name,
        last_name,
        email
    })
    //Devolvemos el usuario recién creado
    res.send({status: "success", payload:result})
})
//UPDATE
router.put('/:uid', async (req ,res) => {
    //Obtenemos el userId (uid) de los params
    let uid = req.params.uid;
    //Tomamos los campos del usuario a reemplazar
    let userToPlace = req.body; //Asumimos que en req.body tenemos los 3 campos del usuario: first_name, last_name, email
    //Evaluamos que los valores existen
    if(!userToPlace.first_name || !userToPlace.last_name || !userToPlace.email ) return res.send({status: "error", error: "Incomplete values"});
    //Actualizar el usuario - Que buscamos por un _id porque MongoDB internamente usa _id
    let result = await userModel.updateOne(
        {_id: uid}, //Primer argumento establezco el filtro
        userToPlace
    ); 
    res.send({status: "success", payload:result})
})

router.delete('/:uid', async (req ,res) => {
    //Obtenemos el userId (uid) de los params
    let uid = req.params.uid;

    let result = await userModel.deleteOne({_id: uid});
    res.send({status: "success", payload: result});
})

export default router;