// .find(   { opts/filtros} ,   { loscampos que quiero traer})
// 1 es traer solo eso, y el 0 es excluir ese campo
db.estudiantes.find( {} , {correo: 1 })

//Dame los primeros 2 estudiantes ordenados alfabéticamente por el nombre de manera ascendente
db.estudiantes.find().sort({ nombre: 1 }).limit(2)
//Dame 2 estudiantes ordenados alfabéticamente por el nombre de manera ascendente pero salteame 2
db.estudiantes.find().sort({ nombre: 1 }).skip(2).limit(2)

//Ejemplo de paginación
db.estudiantes.find().sort({ nombre: 1 }).skip(cantElementosPorPagina * numeroPaginaPrev).limit(cantElementosPorPagina)
//Página 1 donde cantElementosPorPagina es 10
db.estudiantes.find().sort({ nombre: 1 }).skip(10 * 0).limit(10)
//Página 2 donde cantElementosPorPagina es 10
db.estudiantes.find().sort({ nombre: 1 }).skip(10 * 1).limit(10)

//Traer un documento aleatorio
db.estudiantes.find().skip( GENERARUNNUMEROALEATORIA ).limit(1)

//Agregamos estudiantes

db.estudiantes.insertMany([
    { nombre: "Juan", apellido: "Díaz", curso: "Música", instrumento: "Guitarra" },
    { nombre: "Laura", apellido: "Fernández", curso: "Arte", técnica: "Pintura" },
    { nombre: "Diego", apellido: "López", curso: "Deportes", deporte: "Fútbol" },
    { nombre: "Ana", apellido: "González", curso: "Informática", lenguaje: "Python" },
    { nombre: "Sofía", apellido: "Pérez", curso: "Literatura", autorFavorito: "Cervantes" }
  ])
  
db.estudiantes.insertOne( {nombre: "Marcos"})

//Proyecciones
//Obtener solo el nombre y el curso de todos los estudiantes
db.estudiantes.find( {} , {nombre:1, curso: 1})
//Obtener todos los datos de los estudiantes, excepto elc urso
db.estudiantes.find( {} , {curso: 0})
//Ordenar los estudiantes por nombre alfabético
db.estudiantes.find().sort( {apellido: 1, nombre: 1})
//Traer los 3 estudiantes más grandes
db.estudiantes.find().sort( {edad: -1 }).limit(3)


