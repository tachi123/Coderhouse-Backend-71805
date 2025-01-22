import fs from 'fs';

const pathArchivo = './package.json';

async function procesarPackageJson(){
    try{
        //1. Leer el archivo package.json
        const packageString = await fs.promises.readFile(pathArchivo, 'utf-8');
        //2. Convertir el contenido del archivo a un objeto JSON
        const packageObj = JSON.parse(packageString); // Test: console.log(packageObj.license);
        //3. Obtener el tamaño del archivo package.json
        const size = (await fs.promises.stat(pathArchivo)).size;
        //4. Crear un objeto info
        const info = {
            packageString,
            packageObj,
            size,
        }
        //5. Mostrar el objeto info
        console.log("Objeto info: ", info)
        //6. Guardar el objeto info en 'info.json'
        const infoJson = JSON.stringify(info, null, 2); //Formato con identación
        await fs.promises.writeFile('./infoConIdentacion.json', infoJson);
        await fs.promises.writeFile('./info.json', JSON.stringify(info));
    }catch(error){
        console.error("Error durante el procesamiento", error);
    }
}

procesarPackageJson();