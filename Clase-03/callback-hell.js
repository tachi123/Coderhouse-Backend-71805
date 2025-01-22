function prepararHuevos(callback){
    console.log("Preparar los huevos...");
    setTimeout( () => {
        console.log("¡Huevos listos!");
        callback(null, "Huevos");
    },
    2000); //Simular el tiempo de cocción
}

function prepararTostadas(callback){
    console.log("Preparar las tostadas...");
    setTimeout( () => {
        console.log("¡Tostadas listas!");
        callback(null, "¡Tostadas");
    },
    2000); //Simular el tiempo de cocción
}

function exprimirJugo(callback){
    console.log("Exprimiendo el juego de naranja...");
    setTimeout( () => {
        console.log("¡Jugo de naranja listo!");
        callback(null, "Jugo de naranja");
    },
    2000); //Simular el tiempo de cocción
}

prepararHuevos( (error, huevos) =>  {
    if(error){
        console.error("Error con los huevos", error);
    } else{
        prepararTostadas( (error, tostadas) => {
            if(error){
                console.error("Error con las tostadas", error);
            } else{
                exprimirJugo( (error, jugo) => {
                    if(error){
                        console.error("Error con el jugo", error);
                    }else{
                        console.log("¡Desayuno completo! Tenemos: ",huevos, tostadas, jugos);
                    }
                })
            }
        })
    }
} )