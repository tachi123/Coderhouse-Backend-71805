const people = [ 
    {id: 1, first_name: "Nahuel", last_name: "Ramírez", age: 33, gender: "M"},
    {id: 2, first_name: "Marina", last_name: "Rodriguez", age: 22, gender: "F"},
    {id: 3, first_name: "Tomás", last_name: "Alfaro", age: 11, gender: "M"},
];

//Object.freeze(people);
people.push({id: 4, first_name: "Marina", last_name: "Rodriguez", age: 22, gender: "F"})

let unaPersona = people.find( unElemento =>{
    let personaBuscada;
    personaBuscada = unElemento.id === 3;
    return personaBuscada;
})

let personasConAlgunFiltro = 
    people.filter(unaPersona  => unaPersona.gender === "M");

let nombresDePersona = people.map( unaPersona => unaPersona.first_name);

console.log(people);
