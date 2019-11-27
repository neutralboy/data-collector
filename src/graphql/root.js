import {departments, labDepartments, doctorTime} from './../models';

const root = {
    departments: () => departments,
    labDepartments: () => labDepartments,
    doctorTimes: async () => await doctorTime.find(),
    setDoctorTime: async ({ input }) =>{
        let newdoc = new doctorTime({
            email: input.email,
            place: input.place,
            department: input.department,
            time: input.time,
            totalPeople: input.totalPeople
        })
        await newdoc.save()
        return newdoc
    }
};

export default root;