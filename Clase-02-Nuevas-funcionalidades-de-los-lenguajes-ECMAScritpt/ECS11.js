/**
 * El operador nullish difiere del operador || 
 * || ignora valores falsey
 */
let variable = "";

//Operador OR ||    ---- falsey: false, 0, "", null, undefined, NaN
console.log(variable || "Sin valor");

//Operador Nullish ??          ----- null , undefined
console.log(variable ?? "Sin valor");