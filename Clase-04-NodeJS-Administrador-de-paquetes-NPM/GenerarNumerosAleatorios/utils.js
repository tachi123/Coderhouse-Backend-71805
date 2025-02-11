//Generar números aleatorios y almacenarlos en una variable
const generarUnNumeroAleatorio = (min, max) => Math.floor(Math.random() * (max-min)) + 1;
const generarNumerosAleatorios = cantidad => {
    return new Promise((resolve, reject) =>  {
        let numeros = [];
        //Ejecutar la función generarUnNumeroAleatorio la cantidad de veces recibida
        for(let i = 0; i < cantidad; i++){
            numeros.push(generarUnNumeroAleatorio(1,20));
        }
        resolve(numeros);
    }) 
}
//Generar una función que calcule la frecuencia
const contarFrecuencia = numeros => {
    return new Promise((resolve, reject ) => {
        let frecuencia = {};
        numeros.forEach(
            numero => {
                if(frecuencia[numero]){
                    frecuencia[numero]++;
                }else{
                    frecuencia[numero] = 1;
                }
            }
        )
        resolve(frecuencia);
    })
}

module.exports = { generarNumerosAleatorios, contarFrecuencia };