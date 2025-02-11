/** 
 * FUNCIONES
 */
/**
 * FUNCIONES DEFINIDAS - No se reasignan para mantener la coherencia y evitar confusiones de código
 */
//Funciones tradicionales
function suma(a,b){
    return a + b;
}

//Funciones flecha
const sumarFlecha = (a,b) => a + b;

/**
 * FUNCIONES ANÓNIMAS - No tienen nombre. 
 * Se definen y se ejecutan de inmediato
 * O se mandan como argumento de las funciones (callback)
 */
(
    function(){
        console.log("Soy una función anónima");
    }
)(); //Se ejecuta inmediatamente

(
    () => console.log("También soy una función anónima")
)();

/**
 * Las funciones flechas no pueden usar la palabra reserva this
 */
let unArray = [1,2,3,4,5];

let elDobleDeCadaNumero = unArray.map(unNumero => unNumero * 2);

/**
 * Funciones flecha - Modificar el comportamiento de funciones
 */
//Actualizar comportamiento dinámicamente
let generarEnemigos = () => {
    //Lógica para generar enemigos en el nivel 1
}
generarEnemigos = () => {
    //Lógica para generar enemigos en el nivel 2
}

/** Usamos funciones solo para ser mas claros */
//PREPARAR UN DESAYUNO
servirCafe();
servirMedialunas();
servirAzucar();