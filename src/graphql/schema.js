import {buildSchema} from 'graphql';

const schema = buildSchema(`
    scalar Date
    input doctorTimeInput{
        email: String
        place: String
        department: String
        startTime: Date
        endTime: Date
        history: Date
        examination: Date
        prescription: Date
        scheduled: Boolean
        waiting: Date
    }
    type doctorTime{
        _id: String
        email: String
        place: String
        department: String
        startTime: Date
        endTime: Date
        history: Date
        examination: Date
        prescription: Date
        scheduled: Boolean
        waiting: Date
    } 

    type Query {
        departments: [String]
        labDepartments: [String]
        doctorTimes: [doctorTime]
    }
    type Mutation{
        setDoctorTime(input: doctorTimeInput): doctorTime
    }
`);

export default schema;