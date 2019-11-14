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
            startTime: input.startTime,
            endTime: input.endTime
        })
        await newdoc.save()
        return newdoc
    }
};

export default root;