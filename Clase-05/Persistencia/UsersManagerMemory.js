class UserManager {

    constructor(){
        this.usuarios = [];
    }

    //Almacenar el usuario en el archivo
    async createUser(usuario){
        try{
            this.usuarios.push(usuario);
            console.log("Usuario creado exitosamente");
        }catch(error){
            console.error("Error al crear usuario. ", error)
        }
    }

    //Leer los usuarios del archivo
    async getUsuarios(){
        try{
            return this.usuarios;
        }catch(error){
            console.error("Error al leer usuarios: ", error)
        }
    }
}

export default UserManager;