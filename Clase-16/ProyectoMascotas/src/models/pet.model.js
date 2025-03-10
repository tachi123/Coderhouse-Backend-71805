import mongoose from 'mongoose';

const petCollection = 'pets';

const petSchema = mongoose.Schema({
    name: {type: String, required: true},
    // ... otros campos para la mascota
})

const petModel = mongoose.model(petCollection, petSchema);

export default petModel;