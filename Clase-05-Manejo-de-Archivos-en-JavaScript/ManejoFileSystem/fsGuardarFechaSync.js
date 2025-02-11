import fs from 'fs';

const pathArchivo = "./fechaHora.txt";

function guardarFechaHora(){
    let fechaHoraActual = new Date().toLocaleString();
    fs.writeFileSync(pathArchivo, fechaHoraActual);
}

function leerFechaHora(){
    let contenidoFile = fs.readFileSync(pathArchivo, 'utf-8');
    console.log(contenidoFile);
}

guardarFechaHora();
leerFechaHora();