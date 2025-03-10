import mongoose, { mongo } from "mongoose";

//Importo los modelos
import userModel from './models/user.model.js';
import petModel from "./models/pet.model.js";

const mongoURL = 'mongodb://localhost:27017/proyectoMascotas';

const environmentInit = async () => {
    await mongoose.connect(mongoURL);

    //Creo un usuario
    const newUser = new userModel({name: "Mauricio"});
    await newUser.save();

    //Creo dos mascotas
    const pet1 = new petModel({name: "Orejitas"});
    const pet2 = new petModel({name: "Patitas"});
    await pet1.save();
    await pet2.save();

    //Agregamos las mascotas al usuario (usando el _id de la mascota)
     /**
     * Nota que el curso loa gregamos en un campo llamado "pet", no directamente al _id
     */
    newUser.pets.push({pet: pet1._id});
    newUser.pets.push({pet: pet2._id});
    await newUser.save();

}

//environmentInit();

//Buscar al usuario con sus mascotas (utilizando populate)
const environmentTest = async () =>{
    await mongoose.connect(mongoURL);

    const userWithPets = await userModel.find(); //.populate('pets.pet'); saco populate porque lo agregamos como middleware
    console.log(JSON.stringify(userWithPets, null, 2));
}

environmentTest();