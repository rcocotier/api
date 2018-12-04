import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const carModel = new Schema({
    _id: { type: Number },
    brand: { type: String },
    model: { type: String },
    price: { type: Number },
    km: { type: Number },
    location: { type: String },
    color: { type: String },
    clim: { type: Boolean }
})

export default mongoose.model('cars', carModel)