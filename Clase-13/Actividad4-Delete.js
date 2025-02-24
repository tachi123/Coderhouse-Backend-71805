/**
 * D (Delete) : Eliminar un recurso
 * .deleteOne( query)    .deleteMany( query)
 * 
 * query: {key: val}
 */

db.estudiantes.deleteMany( {curso: "Historia"})

//Eliminar todos los estudiantes con una edad menor a 18
db.estudiantes.deleteMany( {edad: { $lt: 18}})
