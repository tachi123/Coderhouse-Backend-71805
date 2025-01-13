//Operador spread (...) 
//Unir objetos
let persona = {nombre: "Nahuel", edad: 33};
let direccion = {calle: 'Av Siempreviva', numero: 123};

let personaCompleta = {...persona, ...direccion};
console.log(personaCompleta);

let nombreNuevo = {nombre: "Jaime Nahuel", apellido: "Ramírez Lorca"};
personaCompleta = {...personaCompleta, ...nombreNuevo  };
console.log(personaCompleta);

//Operador REST
let frutas = {manzana: 5, banana: 3, pera: 2, naranja: 4};

let {manzana, ...otrasFrutas } = frutas;
console.log(otrasFrutas);



//Dados los siguientes objetos

let objeto1 = {

    propiedad1:2,

    propiedad2:"b",

    propiedad3:true

}

let objeto2 = {

    propiedad1:"c",

    propiedad2:[2,3,5,6,7]

}

//SPREAD OPERATOR Nos sirve para hacer una desctructuración del objeto, para poder utilizar sólo para las propiedades que queremos.

let {propiedad1,propiedad2} = objeto1; //Tomamos el objeto1 y lo “rompemos” para obtener sólo las primeras dos propiedades.

let objeto3 = {...objeto1,...objeto2} //Spread operator también se puede utilizar para vaciar propiedades de un objeto en otro objeto nuevo.


console.log(objeto3); //resultado :{pripiedad1: ‘c’, propiedad2: [2,3,5,6,7], propiedad3: true}

//Notamos cómo, si dos elementos comparten el mismo nombre de propiedad, se superponen, por lo que propiedad1 y propiedad2 del objeto uno ya

//no existen dentro del objeto 3, sino que fueron “superpuestos” por propiedad1 y propiedad2 del objeto2.


//REST OPERATOR nos servirá para obtener un objeto SÓLO con las propiedades RESTANTES del objeto que hayamos destructurado, por ejemplo:

let objeto4 = {

    a : 1,

    b : 2,

    c : 3

}

let {a,...rest} = objeto4; //Indicamos que queremos trabajar con la propiedad a, y guardar en un objeto el resto de las propiedades de ese

//objeto, en caso de que los necesitemos más adelante

console.log(rest); //resultado: {b :2,c:3}