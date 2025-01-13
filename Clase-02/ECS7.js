/**
 * Función exponencial
*/
//Antes de EcmaScript7
let dosAlCubo = Math.pow(2,3); //SIGUE SIENDO VÁLIDO
console.log(dosAlCubo);

//Antes de EcmaScript7
dosAlCubo = 2**3; // base ** exponente
console.log(dosAlCubo);

//Exponential ** 
/**
 * Tomamos un array de valores base y, con ayuda del operador map,
 * implementamos el operador exponencial para elevar el valor base por su índice
 */
let valoresBase = [1,2,3,4,5,6]; //Tenemos un conjunto de valores base
const indice = 3;
let nuevosValores = valoresBase.map( numero => numero ** indice);

console.log(`Valores base: ${valoresBase}`);
console.log(`Resultado de potencias utilizando MAP: ${nuevosValores}`);

/**
 * Includes: corrobora si existe un elemento dentro del arreglo
*/
let nombres = ['Juan', 'Camilo', 'María', 'Ana', 'Humberto'];

//Antes de ECS7
let existe = false;
let nombreABuscar = 'Camilo';
for(let i = 0; i < nombres.length; i++){
    if(nombres[i] === nombreABuscar){
        existe = true;
    }
}
if(existe){

}

if(nombres.includes('Camilo')){//Includes devolverá sólo true o false según sea el caso
    console.log("Camilo si se encuentra dentro del array de nombres");
}else{
    console.log("Nombre no encontrado en la base de nombres");
}


