class Contador {

    static totalContadores = 0;
    static cuentaTotal = 0;

    constructor(nombre){
        this.nombre = nombre;
        this.cuenta = 0;
        Contador.totalContadores++;
    }

    getResponsable(){
        return this.nombre;
    }

    contar(){
        this.cuenta++;
        Contador.cuentaTotal++;
    }

    obtenerCuenta(){
        return this.cuenta;
    }

    static obtenerCuentaGlobal(){
        return Contador.cuentaTotal;
    }

    static obtenerTotalContadores(){
        return Contador.totalContadores;
    }

}

//Casos de prueba
const contador1 = new Contador("Nahuel");
const contador2 = new Contador("María");

contador1.contar();
contador1.contar();
contador2.contar();

console.log(`El contador ${contador1.nombre} tiene de cuenta ${contador1.obtenerCuenta()}`);
console.log(`El contador ${contador2.nombre} tiene de cuenta ${contador2.obtenerCuenta()}`);

console.log(`Total contadores: ${Contador.obtenerTotalContadores()}`);

console.log(`Cuenta total: ${Contador.obtenerCuentaGlobal()}`);