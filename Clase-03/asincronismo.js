/**
 * Simulación de lectura de archivo asincrónica
 */
function escribirArchivo(ms, callback){
    console.log("Simulando escritura en archivo...");
    setTimeout(
        () => {
            console.log(`Escritura completada en ${ms/1000} segundos`);
            callback();
        }, ms); //Simulados la demora de la lectura del archivo
}

console.log('Inicio del programa');
escribirArchivo(4000, () => {
    console.log("Termine de escribir el archivo A")
});
escribirArchivo(1000, () => {
    console.log("Termine de escribir el archivo B")
});
console.log("Fin del programa");

/**
 * //Esta función fue creada como no bloqueante. Recibe un callback 
//que se ejecutará al finalizar la escritura.
escribirArchivo(10000, () => {
    console.log("Terminé de escribir el archivo");
})
 */