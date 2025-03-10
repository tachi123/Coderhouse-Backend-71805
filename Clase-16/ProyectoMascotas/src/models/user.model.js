import mongoose from 'mongoose';

const userCollection = 'users';

const userSchema = mongoose.Schema({
    name: {type: String, required: true},
    pets: {
        type: [
            {
                pet: {
                    type: mongoose.Schema.Types.ObjectId, 
                    ref: "pets"}
            }
        ],
        default: []
    }
    // ... otros campos para el usuario
})

//Middleware de mongoose: "pre" antes que se ejecute una operación específica o se complete como en nuestro caso con el find
userSchema.pre('find', function(next) {
    this.populate('pets.pet');
    //Agrego todas las acciones que quiero que se ejecuten antes que se complete el find
    next();
})

const userModel = mongoose.model(userCollection, userSchema);

export default userModel;