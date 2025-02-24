import express from 'express';
import userRouter from './routes/user.router.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const app = express();

//Cargamos las variables de entorno
dotenv.config();
const urlMongo = process.env.URL_MONGO;

//Midleware para analizar el cuerpo de las solicitudes
app.use(express.json());
app.use(express.urlencoded({encoded: true}));

const server = app.listen(8080, () => console.log("Listening on PORT: 8080"));

mongoose.connect( urlMongo)
    .then()
    .catch();

app.use('/api/user',userRouter);