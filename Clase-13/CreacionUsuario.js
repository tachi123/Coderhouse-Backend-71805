//Crear roles
db.createRole({
    role: "rolname",
    privileges: [
        { resource: { db: "database", collection: "collectionName"},
            actions: ["find", "insert", "update", "delete"]
        }
    ]
})
//Creación de un usuario en la base de datos
db.createUser({
    user: "username",
    pwd: "password",
    roles: []
})
//Agregando roles ya existentes a un usuario
db.grantRolesToUser( 
    "username",
    [ { role: "rolname", db: "database"} ]
)
