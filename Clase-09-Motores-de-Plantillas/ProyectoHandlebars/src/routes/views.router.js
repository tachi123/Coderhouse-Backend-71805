import { Router } from 'express';
const router = Router();

let food = [
    {name: "Hamburguesa", price: "100"},
    {name: "Banana" , price: "20"},
    {name: "Soda" , price: "40"},
    {name: "Ensalada" , price: "120"},
    {name: "Pizza" , price: "150"}
]
//Usuario de prueba para sustituir los campos en la plantilla
const user = {
    name: "Nahuel",
    last_name: "Ramírez",
    age: 33,
    role: "user"
}

router.get('/', (req, res) => {
    //Usamos un objeto de prueba para sustituir los campos en la plantilla
    let testUser = user;
    //res.render es nuestro nuevo método para renderizar plantillas
    //Se compone de: (nombre de la plantilla, objeto para reemplazar campos)
    res.render('index', {user: testUser})
})

router.get('/despedida', (req, res) => {
    let testUser = user;
    res.render('despedida', {user: testUser})
})

router.get('/indexfood', (req, res) => {
    //Usamos otro objeto de prueba, en el que meteremos a la plantilla para sustituir los campos
    let testUser = user;
    res.render('indexfood', {
        user: testUser,
        style: 'index.css',
        isAdmin: testUser.role === "admin",
        food
    })
})

//Array de usuarios

let users = [
    {name: 'Nahuel', lastName: 'Ramirez', age: 33},
    {name: 'Fernando', lastName: 'Cabral', age: 44},
    {name: 'Roberto', lastName: 'Rodriguez', age: 13},
    {name: 'Andres', lastName: 'Aguilar', age: 53},
    {name: 'Matias', lastName: 'Fazzito', age: 44}
]

//Punto de acceso para renderizar información de UN usuario de manera aleatoria
router.get('/datos-personales', (req,res) => {
    //Seleccionar un usuario aleatorio
    const randomIndex = Math.floor(Math.random() * users.length)
    const randomUser = users[randomIndex];

    res.render('datospersonales', {user: randomUser})
})

//Renderizar formulario de registración
router.get('/register', (req,res)  => {
    res.render('register')
})


export default router;