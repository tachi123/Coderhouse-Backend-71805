import fs from 'fs';
import path from 'path';

let pathArchivo = './ejemplo.txt';

//FS nos permitirá acceder a las operaciones para archivos
fs.writeFile(pathArchivo, "¡Hola desde Callback!", (error) => {
    /**
     * Notamos que la operación es similar, pero ahora estamos metiendo un callback para 
     * preguntar si algo salió mal durante la escritura del archivo
     */
    if(error) return console.log("Error al escribir el archivo")
    fs.readFile(pathArchivo,'utf-8', (error, resultado) => {
        /**
         * Los mismo argumentos del readFileSync, solo que esta vez al final mandamos un callback
         * un primer argumento para saber si hubo un error
         * y un segundo argumento para el resultado de esa lectura
         */
        if(error) return console.log("Error al leer el archivo")
        console.log(resultado)
        fs.appendFile(pathArchivo, "Más contenido", (error) => {
            /**
			 * Hasta este punto debes estar preocupándote... ¿Acaso estoy armando un callback Hell?
			 * ¡Mucho cuidado cuando trabajas con callbacks y con archivos!
			 */
            if(error) return console.log("Error al actualizar el archivo");
            fs.readFile(pathArchivo,'utf-8', (error, resultado) => {
                //Volvemos a leer el archivo para corroborar el cambio
                if(error) return console.log("Error al leer el archivo")
                console.log(resultado);
                fs.unlink(pathArchivo, (error) => {
                    if(error) return console.log("No se pudo eliminar el archivo")
                });
            })  

        })
    })  
}
);