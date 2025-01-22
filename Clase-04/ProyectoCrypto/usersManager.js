import crypto from 'crypto';

export class UsersManager{
    static usuarios = []; //Atributo estático para almacenar usuarios

    static crearUsuario(nombre, apellido, username, contrasena){
        //Hash la contraseña
        const hash = crypto.createHmac('sha256', 'clave_secreta').update(contrasena).digest('hex');

        UsersManager.usuarios.push({nombre, apellido, username, contrasena: hash });
        console.log("Usuario creado exitosamente");
    }

    static mostrarUsuarios(){
        console.log('Lista de usuarios:');
        UsersManager.usuarios.forEach( usuario => 
            console.log(`- Nombre: ${usuario.nombre}, Apellido: ${usuario.apellido}, Usuario: ${usuario.username}`)
        )
    }

    static validarUsuario(username, contraseniaIngresada){
        const usuarioEncontrado = UsersManager.usuarios.find( u => u.username === username);
        if(!usuarioEncontrado){
            console.error("Usuario no encontrado");
            return;
        }
        const hashGuardado = usuarioEncontrado.contrasena;
        const hashIngresado = crypto.createHmac('sha256', 'clave_secreta').update(contraseniaIngresada).digest('hex');
        if(hashGuardado === hashIngresado){
            console.log('Login exitoso');
        }else{
            console.error("Contraseña incorrecta");
        }
    }

}
