//Crear una función que tenga como una caja de recuerdos
function crearContador(){
    let contador = 0;
    return function(){
        contador++;
        return contador;
    }
}

const miContador = crearContador();
console.log(miContador());
console.log(miContador());
console.log(miContador());