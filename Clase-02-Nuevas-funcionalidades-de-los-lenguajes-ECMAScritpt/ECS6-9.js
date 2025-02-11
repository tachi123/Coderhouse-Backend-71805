const objetos = [ 
    { manzanas: 3, peras: 2, carne: 1, jugos: 5, dulces: 2 },
    { manzanas: 1, sandias: 1, huevos: 6, jugos: 1, panes: 4 } 
];

//Me quedo solo con los nombres
let listaNombresCompleta = [];
objetos.forEach( 
    unaCompra => 
        listaNombresCompleta = {...listaNombresCompleta , ...Object.keys(unaCompra)} 
);
console.log(listaNombresCompleta);

//Me quedo solo con los valores
let soloCantidades = objetos.map(
    cadaCompra => 
        Object.values(cadaCompra).reduce( 
            (valorElemento, valorAcumlado) => valorElemento+valorAcumlado
        )
);
const totalProductos = soloCantidades.reduce( (num, acum) => num+acum);
console.log(totalProductos);


