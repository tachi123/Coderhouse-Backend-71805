//Estructura de promesa
function crearPromesa(){
    return new Promise( (resolve, reject) => {
        //Las acciones a las que me comprometo
    })
}

function prepararHuevos(){
    return new Promise ( (resolve, reject) => {
        console.log("Preparar los huevos...");
        setTimeout( () => {
            console.log("¡Huevos listos!");
            resolve("Huevos");
        },
        10000); //Simular el tiempo de cocción
    })
}

function prepararTostadas(){
    return new Promise ( (resolve, reject) => {
        console.log("Preparar las tostadas...");
        setTimeout( () => {
            console.log("¡Tostadas listas!");
            if(true){
                resolve("Tostadas"); //Éxito, con resultado
            }else{
                reject("Error al preparar tostadas")
            }
        },
        5000); //Simular el tiempo de cocción
    })
}

function exprimirJugo(){
    return new Promise ( (resolve, reject) => {
        console.log("Exprimiendo el juego de naranja...");
        setTimeout( () => {
            console.log("¡Jugo de naranja listo!");
            resolve("Jugo de naranja");
        },
        2000); //Simular el tiempo de cocción
    })
}

const prepararDesayunoAsincronicamente = async () => {
    try{
        await prepararHuevos();
        await prepararTostadas();
        await exprimirJugo();
    }catch(error){
        console.log(error);
    }
}

console.log("HOLA");
prepararDesayunoAsincronicamente();
/** Si quisieramos que se ejecuten las tres funciones en paralelo sería así
 * prepararDesayunoAsincronicamente(prepararHuevos);
    prepararDesayunoAsincronicamente(prepararTostadas);
    prepararDesayunoAsincronicamente(exprimirJugo);
 */
console.log("CHAU");