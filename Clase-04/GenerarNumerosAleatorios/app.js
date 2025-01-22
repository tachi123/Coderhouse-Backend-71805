import { generarNumerosAleatorios, contarFrecuencia } from './utils.js';

//Función para generar números aleatorios y contar su frecuencia
async function main(){
    try{
        let numeros = await generarNumerosAleatorios(1000);
        console.log("Números aleatorios generados exitosamente");
        let frecuencia = await contarFrecuencia(numeros);
        console.log("Termino la generacion de frecuencia");
        console.log(frecuencia);
    }catch (error){
        console.error("Error al generar números aleatorios");
    }
}

console.log("--- APLICACIÓN QUE GENERA NÚMEROS ALEATORIOS ---");
main();


