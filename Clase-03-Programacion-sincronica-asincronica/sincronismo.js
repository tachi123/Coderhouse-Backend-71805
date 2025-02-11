function funA(){
    console.log(1);
    funB();
    console.log(2);
}
function funB(){
    console.log(3);
    setTimeout( //Simular la tardanza en la ejecución de una tarea
        funC,
        8000
    )    
    console.log(4);
}
function funC(){
    console.log(5);
}

funA();