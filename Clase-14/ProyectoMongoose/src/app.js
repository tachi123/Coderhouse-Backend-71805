import express from 'express';
import userRouter from './routes/user.router.js';
import mongoose from 'mongoose';

const app = express();
const server = app.listen(8080, () => console.log("Listening on PORT: 8080"));

const urlMongo = 'mongodb+srv://coderuser:coderuser123@cluster0.zdw0s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect( urlMongo , (error) =>  {
    if(error){
        console.log("Cannot connect to database: "+error)
        process.exit()
    }
})

app.use('/api/user',userRouter);