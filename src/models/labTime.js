import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const labDepartments = [
    "PATHO",
    "MICRO",
    "BIOCHEM",
    "RADIO"
]

const schema = new Schema({
    email: String,
    place: String,
    startTime: { type: Date, default: null },
    endTime: { type: Date, default: null },
    scheduled: Boolean,
    waiting: { type: Date, default: null }
})

const labTime = mongoose.model('labTime', schema);

export {
    labDepartments,
    labTime
}