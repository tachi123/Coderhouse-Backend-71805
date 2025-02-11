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
        2000); //Simular el tiempo de cocción
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
        2000); //Simular el tiempo de cocción
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

prepararHuevos()
    .then(huevos => {
        console.log("Huevos listos", huevos);
        return prepararTostadas();
    })
    .then(tostadas  => {
        console.log("Tostadas listas", tostadas);
        return exprimirJugo(); //Devuelve la promesa de jugo
    })
    .then(jugo  => {
        console.log("Jugo de naranja listo: ",jugo);
        console.log("¡Desayuno completo!. Tenemos: ", huevos, tostadas, jugo); //ERROR porque las variables estan definidas en otro contexto
    })
    .catch(error => {
        console.error("Hubo un error", error);
    })