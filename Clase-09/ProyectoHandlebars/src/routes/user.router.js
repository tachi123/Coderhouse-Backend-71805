import { Router } from 'express';
const router = Router();

//Array de usuarios
let users = [];

router.get('/', (req,res) => {
    res.json({users});
})

router.post('/', (req,res) => {
    const {name, email, password} = req.body;
    //Guardamos en el array
    users.push({name, email, password});
    res.status(201).send("Usuario registrado exitosamente");
})


export default router;