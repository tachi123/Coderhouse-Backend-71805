import moment from 'moment';

//Fecha actual
let fechaActual = moment();

//Fecha de nacimiento del profe
const fechaNacimiento = moment('1991-03-26'); //AAAA-MM-DD

if(fechaNacimiento.isValid()){
    //Calcular la diferencia de días
    const diffDias = fechaActual.diff(fechaNacimiento, 'days');
    console.log(`Han pasado ${diffDias} días desde que naciste.`);
}else{
    console.error("La fecha de nacimiento tiene un formato inválido");
}