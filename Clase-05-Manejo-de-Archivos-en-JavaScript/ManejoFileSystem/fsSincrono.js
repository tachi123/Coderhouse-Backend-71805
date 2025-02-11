import fs from 'fs';
import path from 'path';

let pathArchivo = './ejemplo.txt';

//FS nos permitirá acceder a las operaciones para archivos
fs.writeFileSync(pathArchivo, "¡Hola, Coders, estoy en un archivo!");
/**
 * Primera operación para escribir un archivo
 * El primer parametro es la ruta y el nombre del archivo
 * Y el segundo es el contenido
 */

if(fs.existsSync(pathArchivo)){ //existsSync devuelve true o false si el archivo existe o no
    let contenido = fs.readFileSync(pathArchivo,'utf-8')  
    /**
     * readFileSync lee el contenido del archivo, es importante el segundo parametro donde ponemos la codificación
     * que usaremos para leerlo. En este curso sólo abarcaremos utf-8
     */
    console.log(contenido) 
    fs.appendFileSync(pathArchivo, "Más contenido")
    /**
     * appendFileSync buscará primero la ruta del archivo, si no encuentra ningún archivo, lo va a crear
     * y si lo encuentra, en lugar de sobreescribir el archivo, va a agregar el contenido al final
     */
    contenido = fs.readFileSync(pathArchivo,'utf-8')  
    console.log(contenido) 
    //Esta vez el contenido será: ¡Hola, Coders, estoy en un archivo!Más contenido
    fs.unlinkSync(pathArchivo);
    //Por último, esta línea de código eliminará el archivo, independientemente de todo el contenido que esté tenga
}