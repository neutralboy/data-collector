import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const schema = new Schema({
    email: String,
    place: String,
    date: { type: Date, default: Date.now },
    startTime: { type: Date, default: null },
    endTime: { type: Date, default: null }
});

const pharmacyTime = mongoose.model('pharmacyTime', schema);

export default pharmacyTime;