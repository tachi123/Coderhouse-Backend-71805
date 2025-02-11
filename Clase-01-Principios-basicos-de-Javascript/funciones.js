function nombreDeLaFuncion(parametros){
    //Cuerpo de la función: todas las instrucciones internas
    let variableParaMiFuncion = 2;
    return variableParaMiFuncion; //Con la palabra return podes MANDAR FUERA DEL SCOPE alguna variable que se necesite la parte del código que invoco la función
}

//Suma de dos números
function sumarDosNumeros(num1, num2){
    let resultado;
    resultado = num1+num2;
    return resultado;
}

//console.log(sumarDosNumeros(1,2));

/* Una función con sintaxis flecha
 una función flecha es ANÓNIMA, que no tiene nombre */
const sumarDosNumerosFlecha = (num1, num2) => num1 + num2;

let operacionCompleja = (num1, num2) => num1 + num2;

console.log("Operación compleja original:",operacionCompleja(1,3));

operacionCompleja = (num1, num2) => num1 * num2;

console.log("Operación compleja modificada:",operacionCompleja(1,3));

//Funciones de orden superior son funciones que devuelven otras funciones
function crearMultiplicador(factor){
    return numero => numero * factor;
}

const multiplicadorPor3 = crearMultiplicador(3);

console.log(multiplicadorPor3(5)); //retornar 15