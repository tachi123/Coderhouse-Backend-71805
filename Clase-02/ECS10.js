//String.trim()
//Remover espacios innecesarios de una cadena.
//Validar si las cadenas recibidas vienen vacías o para eliminar espacios innecesarios (adelante y atrás)
let username = `         `;
console.log(username.trim());
if(username.trim().length>0){//Por lo menos hay un caracter (no espacio)
    //CREO EL USUARIO
}else{
    //arrojo un error y digo que ingrese un username válido
}

//Uso de flat
//Array.flat(): remover anidaciones internas en arrays
let arrayAnidado = [1132,10,15,[10,5,2,3],[22]];
console.log(arrayAnidado.flat()); //[1132, 10, 15, 10,5,  2, 3, 22]



