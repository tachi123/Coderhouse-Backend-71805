import mongoose from "mongoose";
import courseModel from "./models/course.model.js";
import studentModel from "./models/student.model.js";

const mongoURL = 'mongodb://localhost:27017/tuBaseDeDatos';

const environmentInit = async () => {
    await mongoose.connect(mongoURL);

    //Creamos nuestro curso de pruebas en la base
    await courseModel.create({
        title: "Curso de Backend",
        description: "Es un curso que permite desarrollar servidores bien bonitos",
        difficulty: 5,
        topics: ["Javascript", "Servidores", "Motores de plantilla", "Middlewares", "Base de datos"],
        professor: "Nahuel"
    })

    //Creamos nuestro estudiante de prueba base
    await studentModel.create({
        first_name: "Hilda",
        last_name: "Coruño",
        email: "correoHilda@corre.com",
        gender: "Female"
    })
}

//Va a vincular un estudiante a un curso
const environmentTest = async () => {
    await mongoose.connect(mongoURL);

    let student = await studentModel.find({_id: '67c845c1341b6445d4c7fbe8'});
    console.log(student);
    /**
     * Nota que el curso loa gregamos en un campo llamado "course", no directamente al _id
     */
    let courses = [{course: '67c845c1341b6445d4c7fbe6'}]; //Agrego
    student.courses.push({course: '67c845c1341b6445d4c7fbe6'});

    let result = await studentModel.updateOne({_id: '67c845c1341b6445d4c7fbe8'}, student);
}

//environmentInit();
environmentTest();