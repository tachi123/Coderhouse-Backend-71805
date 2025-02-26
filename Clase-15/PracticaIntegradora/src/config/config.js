/**
 * Archivo de configuración que asume la responsabilidad de la carga de las variables de entorno
 * según el environment en el que se es te ejecutando la aplicación
 */
//Importar dotenv e inicializo las variables de entorno
import dotenv from 'dotenv';
dotenv.config(); //Nos permite poder trabajar con las variables de entorno

export const config = {
    PORT : process.env.PORT,
    URL_MONGODB: process.env.URL_MONGODB
}