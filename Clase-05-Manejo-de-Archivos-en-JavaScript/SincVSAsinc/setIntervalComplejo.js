const contador = (callback)  => {
    let counter = 1;
    console.log("Inicia el intervalo");
    let timer = setInterval(
        () => {
            callback(counter++);
            if(counter>5){
                clearInterval(timer); //Se apaga después de contar 5
            }
        }
        ,1000)    
}
let operacion = (counter)  => console.log(`Realizando operación ${counter}`);
let otraOperacion = (counter)  => console.log(`Realizando otra operación ${counter}`);

console.log("¡Iniciando tarea!");
contador(operacion);
contador(otraOperacion);
console.log("¡Tarea finalizada!");