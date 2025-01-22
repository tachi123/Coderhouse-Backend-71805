import fs from 'fs';

class UserManager {

    constructor(){
        this.filePath = './usuarios.json';
    }

    //Almacenar el usuario en el archivo
    async createUser(usuario){
        try{
            //Leer el archivo y obtenemos un objeto de los usuarios
            let usuarios = await this.getUsuarios();
            //Agregar el usuario al listado de usuarios
            usuarios.push(usuario);
            //Escribir el archivo
            await fs.promises.writeFile(this.filePath, JSON.stringify(usuarios,null,2)); //Guardamos con identación
            console.log("Usuario creado exitosamente");
        }catch(error){
            console.error("Error al crear usuario. ", error)
        }
    }

    //Leer los usuarios del archivo
    async getUsuarios(){
        try{
            const data = await fs.promises.readFile(this.filePath, 'utf-8');
            return JSON.parse(data) || [];
        }catch(error){
            console.error("Error al leer usuarios: ", error)
        }
    }
}

export default UserManager;