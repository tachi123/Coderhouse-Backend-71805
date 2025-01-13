//Poder trabajar con objetos clave valor
let impuestos = { 
    impuestoGas: 2000,
    impuestoLuz: 3000
};
console.log(impuestos);

//Object entries
let parLlaveValor = Object.entries(impuestos); //[ [ 'impuestoGas', 2000 ], [ 'impuestoLuz', 3000 ] ]
console.log(parLlaveValor);

//Object keys
let soloPropiedades = Object.keys(impuestos); //[ 'impuestoGas', 'impuestoLuz' ]
console.log(soloPropiedades);

//Object values
let soloValores = Object.values(impuestos);
console.log(soloValores);
let impuestosTotales = soloValores.reduce( (valorInicial, valorAcumulado) => valorAcumulado+valorInicial);

impuestosTotales = Object.values(impuestos).reduce( (valorInicial, valorAcumulado) => valorAcumulado+valorInicial);


console.log(`Impuestos totales: ${impuestosTotales}`);


//OPERADOR NULLISH ??
//Para asignar valores por defecto
let nombre = "Nahuel";

//let saludo = nombre ? nombre : "Invitado"; //condición ? TRUE : FALSE

let saludo = `¡Bienvenido ${nombre ?? "Invitado"}!`;
console.log(saludo);

//PROPIEDADES PRIVADAS
class Persona{

    #dni; 

    constructor(nombre, apellido, dni){
        //Atributos de instancia
        this.nombre = nombre;
        this.apellido = apellido ?? "Sin apellido";
        this.#dni = dni ?? "Sin DNI";
    }

    get dni(){
        return this.#dni;
    }

}

const unaPersona = new Persona("Nahuel","Ramirez","36363636");
//unaPersona.dni = "123124";
console.log(`${unaPersona.nombre} ${unaPersona.apellido} tiene como dni: ${unaPersona.dni}`);

//console.log(`${unaPersona.nombre} ${unaPersona.apellido} tiene como dni: ${unaPersona.getDNI()}`);

class Circulo{
    #radio = 0;

    constructor(radio){
        this.#radio = radio;
    }

    get radio(){
        return this.#radio;
    }

    get diametro(){
        return this.#radio * 2;
    }

    get area(){
        return Math.PI * this.#radio**2;
    }

    #metodoPrivado(){
        
    }

}

const miCirculo = new Circulo(5);
console.log(`El diametro de mi círculo es: ${miCirculo.diametro}`);
console.log(`El área de mi círculo es: ${miCirculo.area}`);
console.log(`El radio de mi círculo es: ${miCirculo.radio}`);