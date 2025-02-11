import fs from 'fs';

let pathArchivo = './ejemplo.txt';

//Nota la función debe ser asincronica para trabajar con promesas
const operacionesAsincronicas = 
    async () => {
        try{
            //Escribimos un archivo
            await fs.promises.writeFile(pathArchivo, "¡Hola, Coders, estoy en un archivo!");
            //Utilizar el módulo de promises nos facilita la operación para no requerir estar dentro de un callback
            let resultado = await fs.promises.readFile(pathArchivo,'utf-8')  
            console.log(resultado) 
            //Modificamos el archivo
            await fs.promises.appendFile(pathArchivo, " Contenido adicional")
            //Releemos el archivo
            resultado = await fs.promises.readFile(pathArchivo,'utf-8')  
            console.log(resultado) 
            //Finalmente, borramos el archivo
            await fs.promises.unlink(pathArchivo);
        }catch(error){
            console.error("Error durante las operaciones con archivos", error);
        }
    }

operacionesAsincronicas();
//Tenemos un código mucho mas limpio, mucho más simple y mucho más entendible.