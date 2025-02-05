/**
 * Nos crea una variable __dirname que nos da la RUTA de nuestro archivo app.js
 */
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default __dirname;