//Ejemplo de operación sincrónica
let contador = 0;

console.log("¡Iniciando tarea!");

setInterval(
    //unaFunción
    function(){
        console.log("Contador: ", contador++);
        if(contador >= 5){
            clearInterval();
            console.log("Se ha detenido el intervalo")
        }
    }
    , 2000 //se ejecuta cada 2 segundos
)

