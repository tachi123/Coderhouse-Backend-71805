//Crear una base de datos llama "baseCRUD"
use baseCRUD
//Crear una colección llamada "mascotas"
db.createCollection("mascotas")
//Agregar 3 mascotas con las propiedades: nombre, especie, edad
db.mascotas.insertOne( { nombre: "Firulais", especie: "perro", edad: 3 } )
db.mascotas.insertMany( [ {nombre: "Michi", especie: "gato", edad: 2}, { nombre: "Loro", especie: "ave", edad: 5} , { nombre: "Rocky", especie: "perro", edad: 5}]) 
//Buscar mascotas por especie
db.mascotas.find({ "especie": "perro"})
//Contar el número total de mascotas agregadas
db.mascotas.countDocuments()
//Contar el número de mascotas que tengan especie: perro
db.mascotas.countDocuments( { "especie": "perro"})