/**
 * Calculadora de números positivos
 */
//Operación tiene que dar como resultado un número positivo
//Si uno de los dos números es 0, porque justamente es indempotente, no hacemos nada.
function suma(a,b){
    return new Promise( (resolve, reject) => {
        if(a === 0 || b === 0){
            reject("Operación innecesaria");
        } else if( (a + b) < 0){
            reject("La calculadora solo puede devolver números positivos");
        }else{ 
            resolve(a+b);
        }
    })
}

function resta(a,b){
    return new Promise( (resolve, reject) => {
        if(a === 0 || b === 0){
            reject("Operación innecesaria");
        } else if( (a - b) < 0){
            reject("La calculadora solo puede devolver números positivos");
        }else{ 
            resolve(a - b);
        }
    })
}

function multiplicacion(a,b){
    return new Promise( (resolve, reject) => {
        if(a < 0 || b < 0){
            reject("La calculadoar solo puede devolver números positivos");
        }else{ 
            resolve(a * b);
        }
    })
}

function division(a,b){
    return new Promise( (resolve, reject) => {
        if(b === 0){
            reject("No existe la división por cero");
        }else{ 
            resolve(a / b);
        }
    })
}

const calculos = async () => {
    try{
        const resultadoSuma = await suma(5,0);
        console.log(`Resultado de la suma: ${resultadoSuma}`);

        const resultadoResta = await resta(5,5);
        console.log(`Resultado de la resta: ${resultadoResta}`);

        const resultadoMultiplicacion = await multiplicacion(5,5);
        console.log(`Resultado de la multiplicación: ${resultadoMultiplicacion}`);

        const resultadoDivision = await division(5,5);
        console.log(`Resultado de la división: ${resultadoDivision}`);
    }catch(error){
        console.log(error);
    }
}

calculos();
