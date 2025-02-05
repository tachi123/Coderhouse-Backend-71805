import { Router } from 'express';
import { uploader } from '../utilsMulter.js';

const router = Router();

//Array para almacenar
let users = [];

//MÉTODO GET: Obtener todos los recursos (EN ESTE CASO users)
router.get('/', (req, res) => {
    res.json(users);
})

//MÉTODO POST: Para crear un nuevo recurso (EN ESTE CASO un usuario)
router.post('/', uploader.single('file') , (req, res) => {
    if(!req.file){ //Si no existe req.file, significa que hubo un error al subir el archivo
        //queda en nosotros si continuamos el proceso o no
        return res.status(400).send({status: "error", error: "No se pudo guardar la imagen"})
    }
    console.log(req.file); //Revisar los campos que vienen en req.file por parte de multer
    const newUser = req.body; //La info del usuario va a venir en req.body
    newUser.thumbnail = req.file.path; //Agregamos al usuario la ruta de su respectiva imagen
    users.push(newUser);
    res.json({message: "Usuario creado exitosamente"});
})

export default router;