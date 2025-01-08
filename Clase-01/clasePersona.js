class Persona{

    constructor(nombre, apellido, dni){
        //Atributos de instancia
        this.nombre = nombre;
        this.apellido = apellido ? apellido : "Sin apellido";
        this.dni = dni ? apellido : "Sin DNI";
    }

    //Atributo de clase
    static especie = "humano";

    saludar = () => console.log(`Hola, soy ${this.nombre} ${this.apellido} con dni: ${this.dni}`);

    getEspecie = () => console.log(`Soy de la especie: ${Persona.especie}`);

    setEspecie = nuevaEspecie => Persona.especie = nuevaEspecie;
}

//Creación de instancias
const persona0 = new Persona("Jorge");
const persona1 = new Persona("Jorge", undefined, 1234123);
const persona2 = new Persona("Nahuel","Ramirez", "1234123");

//Ejecución de los metodos
persona0.saludar();
persona1.saludar();
persona2.saludar();

persona1.getEspecie();
persona2.getEspecie();

persona0.setEspecie("Extraterrestre");

persona1.getEspecie();
persona2.getEspecie();