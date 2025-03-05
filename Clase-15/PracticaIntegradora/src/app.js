import express from 'express';
import handlebars from 'express-handlebars'; //Motor de plantillas para las vistas
import __dirname from './utils.js';
import mongoose from 'mongoose'; //Client app para conectarme con la base de datos MongoDB
import { config } from './config/config.js'; //Variable que almacena las variables de entorno
import methodOverride from 'method-override';

//Importación de los routers
import viewsRouter from './routes/views.router.js';
import productRouter from './routes/product.router.js';

const app = express(); //Inicializo la constante app para utilizar express

//Configurar mi servidor para poder trabajar por json
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Inicializo mi motor de plantillas y lo configuro
app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');

//Seteo de manera estática la carpeta public 
app.use(express.static(__dirname + '/public'));

//Conexión a la base de datos
mongoose.connect(config.URL_MONGODB)
    .then( () => console.log(`Conexión realizada con éxito a la base: ${config.URL_MONGODB}`))
    .catch( (error) => {
        console.error("Error en la conexión ", error);
        process.exit();
    })

//Para poder reescribir e interpetar el valor del campo _method en un formulario y poder hacer DELETE
app.use(methodOverride('_method'));

app.listen(config.PORT, ()=> console.log(`Listening on PORT ${config.PORT}`));

//Implemento los routers
app.use('/', viewsRouter); //Voy a tener todas las vistas, es decir, devuelvo con res.render()
app.use('/product', productRouter); //Voy a tener las operaciones CRUD pero con renderizaciones