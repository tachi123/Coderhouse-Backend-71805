/**
 * La variable __dirname me resuelve la ruta absoluta en la cual se encuentra mi proyecto, más específicamente mi archivo app.js
 * Es decir, en la carpeta src
 */
import {fileURLToPath} from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default __dirname;