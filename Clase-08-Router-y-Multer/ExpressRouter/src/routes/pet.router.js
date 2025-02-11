import { Router } from 'express';

const router = Router();

//Funciones ejemplo de middleware a nivel endpoint
function mid1 (req, res, next){
    req.dato1 = 'un dato';
    next();
}
function mid2 (req, res, next){
    req.dato2 = req.dato1 + 'otro dato';
    next();
}

//Array para almacenar
let pets = [];

//Middleware para registrar todas las peticiones a nivel router
router.use( (req, res, next) => {
    console.log(`Logs de mascotas: ${req.method} ${req.path} - ${new Date()}`);
    next();
})

//MÉTODO GET: Obtener todos los recursos (EN ESTE CASO pets)
router.get('/', mid1, mid2, (req, res) => {
    console.log(`Datos recibidos de los middlewares: ${req.dato1} -  ${req.dato2}`)
    res.json(pets);
})

//MÉTODO POST: Para crear un nuevo recurso (EN ESTE CASO una mascota)
router.post('/', (req, res) => {
    const newPet = req.body; //La info del usuario va a venir en req.body
    pets.push(newPet);
    res.json({message: "Mascota creada exitosamente"});
})

export default router;