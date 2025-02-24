// 1. Insertar documentos adicionales
db.clientes.insertMany([
    { nombre: "Pablo", edad: 25 },
    { nombre: "Juan", edad: 22 },
    { nombre: "Lucia", edad: 25 },
    { nombre: "Juan", edad: 29 },
    { nombre: "Fede", edad: 35 }
  ]);
 
// 2. Listar todos los documentos de la coleccion clientes ordenados por edad ascendente
db.clientes.find().sort({ edad: 1 });
// 3. Listar todos los clientes ordenados por edad descendente
db.clientes.find().sort({ edad: -1 });
// 4. Listar el cliente más joven
db.clientes.find().sort({ edad: 1 }).limit(1);
// 5. Listar los clientes llamados 'Juan'
db.clientes.find({ nombre: "Juan" });
// 6. Listar los clients llamados 'Juan' y que tengan 29 años
db.clientes.find({ nombre: "Juan", edad: 29 });
// 7. Listar los clientes llamados 'Juan' o 'Lucia'
db.clientes.find({ $or: [ { nombre: "Juan" }, { nombre: "Lucia" } ] });
// 8. Listar los clientes que tengan más de 25 años
db.clientes.find({ edad: { $gt: 25 } });
// 9. Listar los clientes que tengan 25 años o menos
db.clientes.find({ edad: { $lte: 25 } });
// 10. Listar los clientes que NO tengan 25 años
db.clientes.find({ edad: { $ne: 25 } });
// 11. Listar los clientes que estén entre los 26 y 35 años
db.clientes.find({ edad: { $gte: 26, $lte: 35 } });
// 12. Actualizar la edad de 'Fede' a 36 años y verificar
db.clientes.updateOne({ nombre: "Fede" }, { $set: { edad: 36 } });
db.clientes.find({ nombre: "Fede" });
// 13. Actualizar todas las edades de 25 años a 26 años y verificar
db.clientes.updateMany({ edad: 25 }, { $set: { edad: 26 } });
db.clientes.find({ edad: 26 });
// 14. Borrar los clientes que se llamen 'Juan' y listar el resultado
db.clientes.deleteMany({ nombre: "Juan" });
db.clientes.find();
// 15. Eliminar todos los documentos de estudiantes que hayan quedado con algún valor
db.estudiantes.deleteMany({});
db.estudiantes.find();