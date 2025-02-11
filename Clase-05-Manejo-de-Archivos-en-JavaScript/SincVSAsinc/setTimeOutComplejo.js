const temporizador = (callback)  => {
    setTimeout(
        () => callback()
        , 5000); //5 segundos en milisegundos
}
let operacion = ()  => console.log("Realizando operación");

console.log("¡Iniciando tarea!");
temporizador(operacion);
console.log("¡Tarea finalizada!");