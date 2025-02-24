/**
 * Filesystem: Aumentar la edad de todos los usuarios femeninos en 1 año
 */
import fs from 'fs';

const nombreArchivo = 'usuarios.json';
//Leer el archivo
fs.readFile(nombreArchivo, 'utf8', (err, data) => {
    if(err){
        console.error(err);
        return;
    }
    //Mapear los usuarios 1 a 1, actualizando la propiedad para aumentar en 1 año a los usuarios que cumplan con el género femenino
    //Parear el JSON
    const usuarios = JSON.parse(data);

    //Actualizar las edades
    usuarios.forEach(usuario => {
        if(usuario.genero === 'femenino'){
            usuario.edad++;
        }
    })
    //Sobreescribir todo el archivo (INCLUYENDO los usuarios no actualizados)
    fs.writeFile('usuarios.json', JSON.stringify(usuarios), err => {
        if(err){
            console.error(err);
        }
    })
})

