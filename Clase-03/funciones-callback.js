/**
 * Funciones callback - Pasamos una función como argumento
 */
function ejecutarTarea(callback){
    //..
    callback(); //Ejecutar callback
    //..
}
//let tareaActual =  () => console.log("Realizando tarea") ;
ejecutarTarea( () => console.log("Paso 1")  );
ejecutarTarea( () => console.log("Paso 2")  );

//Al aplicar metodos en array estamos aplicando "callback" a cada elemento
let nombres = [ "Ana" , "Nahuel", "Mariano"];
nombres.forEach(
    //Callback con una función flecha
    nombre => console.log(nombre) 
);
nombres.forEach(
    //Callback con una función tradicional
    function(nombre) { console.log(nombre) }
);

//Agregamos comportamiento a un botón
//let button = document.getElementById("boton1");
//button.addEventListener( "click" , () => console.log("Alguien apreto el botón"));


/**
 * Actividad - Ejemplo map con callback
 */


//Utilizaremos este arreglo de prueba
let valoresOriginales = [1,2,3,4,5];

//Estamos acostumbrados a ver una función map de la siguiente forma:
let nuevosValores = valoresOriginales.map( x => x + 1  ); //nuevos valores tendrá: [2,3,4,5,6]

/**
 * Sin embargo, lo que metemos dentro de la función map es una función (flecha, más específicamente), que indica que se sume en 1 el valor
 * del número que esté en el arreglo.
 * ¿Siempre tenemos que sumar 1? ¡No! Nosotros podemos meter la operación que querramos, ¡y map la ejecutará de manera interna!
 */
let otrosValores = valoresOriginales.map( x => x * 2 ); //otrosValores tendrá: [2,4,6,8,10]
let masValroes = valoresOriginales.map(x => "a"); //masValores tendrá: ["a","a","a","a","a","a"]

/**
 * Notamos que, no importa cuánto cambie la función que esté metiendo dentro de map, map está hecho para RECIBIR UNA FUNCIÓN COMO PARÁMETRO
 * y poder eecutarla cuando lo considere pertinente. Ahora. Si estructuramos el callback por fuera
 */

const funcionCallback = (valor) => { //Función que evalúa si el valor del arreglo es un número par
	if(valor % 2 === 0 ){
		return valor
	}
	else{
		return "no es par"
	}
}

const evaluacionesDePares = valoresOriginales.map(funcionCallback); //Estoy pasando la función completa como argumento de la función map
console.log(evaluacionesDePares) // el resulatdo será: ["no es par",2,"no es par",4,"no es par"]

/**
 * FUNCIONES MAP
 */
const miFuncionMap = (array , callback) => {
    let nuevoArray = [];
    for(let i = 0; array.length > i; i++ ){
        let nuevoValor = callback(array[i]); //El callback que recibí arriba lo estoy ejecutando mandando cada elemento
        nuevoArray.push(nuevoValor);
    }
    return nuevoArray;
}

//Pongemos en comparación nuestra función map frente a la función map original
/**
 * Recreamos el funcionamiento interno de la función MAP
 */
let valoresPrueba = [1,2,3,4,5];
let nuevoArregloPropio = miFuncionMap(valoresPrueba, x => x * 2 ); //El resultado será: [2,4,6,8,10]
let nuevoArregloConMap = valoresPrueba.map( x => x * 2); //El resultado será: [2,4,6,8,10]
console.log(nuevoArregloConMap);
console.log(nuevoArregloPropio);

/**
 * EXTRA: Si queremos crear una función que se ejecute sobre un array 
 * y no tener que pasarlo como parámetro
 */
Array.prototype.miPropiaFuncionMap = (callback) => {
    let nuevoArray = [];
    for(let i = 0; this.length > i; i++ ){
        let nuevoValor = callback(this[i]); //El callback que recibí arriba lo estoy ejecutando mandando cada elemento
        nuevoArray.push(nuevoValor);
    }
    return nuevoArray;
}

let valoresPor2 = valoresPrueba.miPropiaFuncionMap( x => x * 2 );