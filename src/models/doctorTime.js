import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const departments = [
    "ANAESTH",
    "BIOCHEM",
    "CARDIAC",
    "DERMAT",
    "EMERGENCY",
    "ENDOCRINE",
    "ENT",
    "GASTRO",
    "GM",
    "MICRO",
    "NEPHRO",
    "NEURO",
    "OBGYN",
    "ONCO",
    "OPTHAL",
    "ORTHO",
    "PATHO",
    "PEDIATRICS",
    "PLASTIC",
    "PSYCHIATRY",
    "PULMO",
    "RADIOLOGY",
    "SURGERY"
]

const doctorTimeSchema = new Schema({
    email: String,
    place: String,
    department: String,
    time: Date,
    totalPeople: Number
});

const doctorTime = mongoose.model('doctorTime', doctorTimeSchema);

export { doctorTime, departments };