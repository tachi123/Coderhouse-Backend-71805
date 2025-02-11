//Ejemplos del uso de let y const limitado al bloque
let nombre = "Juan";
console.log(nombre); //Mostrar "Juan"

if(true){
    let nombre = "Pedro"; //Esta variable solo es válida dentro del bloque
    console.log(nombre); //Mostrar "Pedro"
}

console.log(nombre);

let i = 0;
function foo(){
    i = 1;
    let j = 2;
    if(true){
        console.log(i);//1
        console.log(j);//2
    }
}
foo();
console.log(i);

function foo1(){
    if(true){
        let k = 1;
    }
    console.log(k); //Error - ReferenceError k is not defined
}

const pi = 3.14159;


const miArray = [1, 2, 3];
console.log(miArray); // [1, 2, 3]

miArray[0] = 5; // ¡Esto sí funciona!
console.log(miArray); // [5, 2, 3]

miArray = [4, 5, 6]; // ¡Esto NO funciona! Error TypeError
