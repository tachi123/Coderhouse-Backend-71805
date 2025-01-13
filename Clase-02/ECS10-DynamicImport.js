//CONFIGURAR EL PROYECTO NODE COMO  "type":"module"
/**
 * UN ARCHIVO QUE GUARDA EL MÓDULO
 */
//Crear una calculadora como módulo
export default class Calculadora{
    sumar = (num1,num2) => num1+num2;
    restar = (num1,num2) => num1-num2;
}

/**
 * ARCHIVO PRINCIPAL DE NUESTRA APLICACIÓN
 */
import Calculadora from 'calculadora';

if(PASA ALGO){
    const {default: Calculadora} = await import('calculadora')
}
