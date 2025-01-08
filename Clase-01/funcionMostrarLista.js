const frutas = ["manzana", "banana", "pera"];

function mostrarLista(lista){
    //Valido que no este vacía
    if(lista.length === 0){
        console.log("Lista vacía");
    }else{
        //Usando ciclo for
        //for(let i = 0; i < lista.length; i++){
        //    console.log(lista[i]);
        //}
        lista.map(unaFruta => console.log(unaFruta));
    }

    return `Longitud de la lista: ${lista.length}`;
}

console.log(mostrarLista(frutas));