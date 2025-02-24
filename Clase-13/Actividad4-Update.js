/**
 * U (Update)
 * 
 * .updateOne(  query , updateAction,  options(Opcional)  )
 * .updateMany( query , updateAction,  options(Opcional) )
 * 
 * update actions:
    $set: Asigna un nuevo valor a un campo existente.
    $unset: Elimina un campo existente.
    $inc: Incrementa o decrementa el valor de un campo numérico.
    $rename: Cambia el nombre de un campo.
    $mul: Multiplica el valor de un campo numérico por un número.
    $min: Establece el valor de un campo si es menor que el valor actual.
    $max: Establece el valor de un campo si es mayor que el valor actual.
 */

//Aumentar 2 puntos la nota de los alumnos del curso de Matemática que tengan más de 20 años
db.estudiantes.updateMany(
    { edad: { $gt: 20}, curso: "Matemáticas"},
    {$inc: { nota: 2}}
)
//Reescribo y establezco un máximo a los datos
db.estudiante.updateMany( {} , { $max: {nota : 10}} )

//Cambiamos el curso a Química al primer Pedro que encuentre
db.estudiantes.updateOne( { nombre: "Pedro"} , { $set: {curso: "Química"}})

//Elimino el campo edad al primer documento que encuentro con el filtro nombre: Ana
db.estudiantes.updateOne( { nombre: "Ana"}, {$unset: {edad: ""}})