const dividir = (dividendo, divisor)  => {
    return new Promise(
        (resolve, reject)  => {
            //División por 0 - Rechazamos la operación
            if(divisor === 0){
                reject('No se puede hacer divisiones entre cero');
            }else{
                //Si los valores son válidos, entonces si puedo cumplir la promesa que
                //hice al usuario de dividir sus números
                resolve(dividendo/divisor);
            }

        }
    )
}

/**
 * Una vez creada la promesa
 */
dividir(6,0)  //Invocamos la función
    .then( //Programamos el THEN para recibir cualquier RESOLVE
        //Cuando los valores son válidos, nos llega el resultado de la promesa cumplida
        resultado => {
            console.log(resultado); 
        }
    )
    .catch( //Programamos el CATCH cuando la promesa arroja errores. Cualquier REJECT recibido por parte de la promesa
        error => {
            console.log(error); 
        }
    );