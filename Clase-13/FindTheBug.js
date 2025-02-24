//#FindTheBug

//Consulta 1: Insertar múltiples mascotas
db.pets.insertOne([{name:"aletas",specie:"fish"},{name:"Doby",{specie:"dog"}])
/**
 * Error 1: 
 * Error es porque insertOne se usa para insertar un solo documento
 * Si quiero insertar múltiples documentos, es decir, un array -- uso insertMany
 * Error 2:
 * En el segundo objeto del array, hay un { que hace la sintaxis incorrecta
 */
db.pets.insertMany([{name:"aletas",specie:"fish"},{name:"Doby",specie:"dog"}])

// Consulta 2: Obtener solo las últimas 5 mascotas que sean peces
db.pets.find({specie:"fish}).limit(5)

/**
 * Errores:
 * - Falta el cierre de comillas del valor fish
 * - No esta claro que se entiende por "últimas 5 mascotas", MongoDB no almacena automáticamente un orden
 * Podemos suponer un campo para ordenar el orden de creación: createdAt
 */
db.pets.find({specie:"fish"}).sort({ createdAt: -1}).limit(5)

// Consulta 3: Obtener solo el nombre de las últimas 5 mascotas cuya edad sea menor de 10 años
db.pets.find(age:{ $gte:{10}}},{name:1}).sort(age:1).limit(5)

/**
 * El operador $gte (greater than or equals) no tiene el propósito pedido.
 * Si buscamos menor a 10 años tenemos que usar $lt  (less than)
 * Y además hay un cierré de paréntesis demás
 */
db.pets.find(age:{ $lt:{10}},{name:1}).sort(age:1).limit(5)

/**
 * Resumen de errores:
 * Sintaxis: comas, paréntesis y llaves deben estar correctamente balanceados
 * Uso de métodos: insertOne es para un solo documento, insertMany es para múltiples
 * Faltas de comillas: los valores de cadenas deben estar entre comillas
 * Operadores: prestar atención a la lógica de cada operador
 */