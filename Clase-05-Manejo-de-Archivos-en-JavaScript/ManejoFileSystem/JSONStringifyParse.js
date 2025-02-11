//Creamos un objeto
const myObject = {name: "Nahuel", age: 33};

//Transformar el objeto a un string
const jsonString = JSON.stringify(myObject);
console.log(jsonString);

//Transformar un string a un objeto
const myObjectParseado = JSON.parse(jsonString);
console.log(myObjectParseado);