import { Router } from 'express';
import {userModel} from '../models/user.model.js';

const router = Router();

router.get('/', async (req, res) => {
    try{
        let users = await userModel.find(); //Es un find idéntico al que hacíamos en el cliente CLI
        res.send({result: "success", payload: users})
    }catch(error){
        console.log("Cannot get users with mongoose: "+ error)
    }
})

export default router;