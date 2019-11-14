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
    startTime: Date,
    endTime: Date,
    history: { type: Date, default: null },
    examination: { type: Date, default: null },
    prescription: { type: Date, defualt: null }
});

const doctorTime = mongoose.model('doctorTime', doctorTimeSchema);

export { doctorTime, departments };