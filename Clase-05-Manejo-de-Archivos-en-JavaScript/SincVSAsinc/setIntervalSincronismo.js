//Ejemplo de operación sincrónica

console.log("¡Iniciando tarea!");
console.log("Realizando operación");
for(let contador = 1; contador <= 5 ; contador++){
    console.log("Continuando operación ",contador);
}
console.log("¡Tarea finalizada!");

/**Orden de salida:
 * 
 * ¡Iniciando tarea!}
 * Realizando operación
 * Continuando operación  
 * Continuando operación  2
 * Continuando operación  3
 * Continuando operación  4
 * Continuando operación  5
 * ¡Tarea finalizada!
 */