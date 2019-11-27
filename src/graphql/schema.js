import {buildSchema} from 'graphql';

const schema = buildSchema(`
    scalar Date
    input doctorTimeInput{
        email: String
        place: String
        department: String
        time: Date
        totalPeople: Int
    }
    type doctorTime{
        _id: String
        email: String
        place: String
        department: String
        time: Date
        totalPeople: Int
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