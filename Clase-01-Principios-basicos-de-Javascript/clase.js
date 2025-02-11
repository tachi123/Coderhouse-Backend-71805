class nombreDeClase {

    constructor(parametros){
        console.log("Cree una instancia");
        this.unAtributo = 2;
    }

    static variableCompartida = 0;

    metodo1(){
        console.log("Soy el método uno y tengo como atributo: ",this.unAtributo);
    }

    metodo2 = () => console.log("Soy el método 2");

    cambiarVariableCompartida = (nuevoValor) => nombreDeClase.variableCompartida = nuevoValor;

    mostrarVariableCompartida = () => console.log("La variable compartida es: "+nombreDeClase.variableCompartida);
}

const unaInstancia = new nombreDeClase();
const otraInstancia = new nombreDeClase();

unaInstancia.cambiarVariableCompartida(3);

unaInstancia.mostrarVariableCompartida();
otraInstancia.mostrarVariableCompartida();