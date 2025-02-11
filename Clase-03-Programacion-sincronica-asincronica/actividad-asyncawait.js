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

const funcionAsincronica = async (dividendo, divisor) => {
    try{
        let resultado = await dividir(dividendo, divisor);
        console.log(resultado);
    }catch(error){
        //El bloque catch es obligatorio después de un try{}. Sirve para atrapar errores
        console.log(error);
    }
}

funcionAsincronica(10,0);
funcionAsincronica(10,2);