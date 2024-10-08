import axios from 'axios'
import Cookies from 'js-cookie';


export const login=async(user,id)=>{
    try {

    const response = await axios.post(`https://heliverse-assignment-pd44.onrender.com/api/v1/${id}/login`, 
    user ,
    {
        withCredentials: true,
        headers: {
            "Content-Type": "application/json",
        },
    }
);


if (response.headers['set-cookie']) {
   const cookiesFromResponse = response.headers['set-cookie'];

   cookiesFromResponse.forEach(cookie => {
       const [cookieName, cookieValue] = cookie.split(';')[0].split('=');
       Cookies.set(cookieName, cookieValue, { path: '/' , sameSite: 'None', secure: true });
   });
}
const userData = response.data[id];
console.log("user data", userData);
localStorage.setItem('user', JSON.stringify(userData));

return { status: true, user: userData };
} catch (error) {
console.log("error logging in", error);
alert(error)
return {status : false };
}
}


export const getUserData = async () => {
    try {
        const user = localStorage.getItem('user');
        if (user) {
            return JSON.parse(user); // Convert the JSON string back to an object
        } else {
            throw new Error('No user data found');
        }
    } catch (error) {
        console.log("Error getting user data:", error);
        alert("Error getting user data. Please try again.");
        return null;
    }
};

export const getAllClassrooms=async()=>{
    try {
        const response = await axios.get(`https://heliverse-assignment-pd44.onrender.com/api/v1/principal/viewAllClassrooms`, {
            withCredentials: true,
            headers: {
                "Content-Type": "application/json",
            },
        });
        return response.data.classrooms;
    }catch(error){
        console.log("error getting classrooms", error);
        alert("Error getting classrooms. Please try again.");
    }
}

export const addClassroom=async(classroom)=>{
    try {
        const response = await axios.post(`https://heliverse-assignment-pd44.onrender.com/api/v1/principal/createclassroom`, 
        classroom,
        {
            withCredentials: true,
            headers: {
                "Content-Type": "application/json",
            },
        });
        return response.data;
    }catch(error){
        console.log("error adding classroom", error);
        alert("Error adding classroom. Please try again.");
    }
}

export const getAllStudents=async()=>{
    try {
        const response = await axios.get(`https://heliverse-assignment-pd44.onrender.com/api/v1/principal/viewAllStudents`, {
            withCredentials: true,
            headers: {
                "Content-Type": "application/json",
            },
        });
        return response.data.students;
    }catch(error){
        console.log("error getting students", error);
        alert("Error getting students. Please try again.");
    }
}

export const addStudent=async(student)=>{
    try {
        const response = await axios.post(`https://heliverse-assignment-pd44.onrender.com/api/v1/principal/createstudent`, 
        student,
        {
            withCredentials: true,
            headers: {
                "Content-Type": "application/json",
            },
        });
        return response.data;
    }catch(error){
        console.log("error adding student", error);
        alert("Error adding student. Please try again.");
    }
};

export const getAllTeachers=async()=>{
    try {
        const response = await axios.get(`https://heliverse-assignment-pd44.onrender.com/api/v1/principal/viewAllTeachers`, {
            withCredentials: true,
            headers: {
                "Content-Type": "application/json",
            },
        });
        return response.data.teachers;
    }catch(error){
        console.log("error getting teachers", error);
        alert("Error getting teachers. Please try again.");
    }
}

export const addTeacher=async(teacher)=>{
    try {
        const response = await axios.post(`https://heliverse-assignment-pd44.onrender.com/api/v1/principal/createteacher`, 
        teacher,
        {
            withCredentials: true,
            headers: {
                "Content-Type": "application/json",
            },
        });
        return response.data;
    }catch(error){
        console.log("error adding teacher", error);
        alert("Error adding teacher. Please try again.");
    }
};

export const assignStudentToTeacher=async(data)=>{
    console.log("data", data);
    try{
        const response=await axios.post(`https://heliverse-assignment-pd44.onrender.com/api/v1/principal/assignStudentToTeacher`,data,
            {
                withCredentials: true,
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
    }catch(error){
        console.log("error assigning student to teacher", error);
        alert("Error assigning student to teacher. Please try again.");
    }
}

export const deleteStudent=async(studentId)=>{
    try{
        const response=await axios.post(`https://heliverse-assignment-pd44.onrender.com/api/v1/principal/deleteStudent/${studentId}`,{},
            {
                withCredentials: true,
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
    }catch(error){
        console.log("error deleting student", error);
        alert("Error deleting student. Please try again.");
    }
}

export const deleteTeacher=async(teacherId)=>{
    try{
        const response=await axios.post(`https://heliverse-assignment-pd44.onrender.com/api/v1/principal/deleteTeacher/${teacherId}`,{},
            {
                withCredentials: true,
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
    }catch(error){
        console.log("error deleting teacher", error);
        alert("Error deleting teacher. Please try again.");
    }
}

export const deleteClassroom=async(classroomId)=>{
    try{
        const response=await axios.post(`https://heliverse-assignment-pd44.onrender.com/api/v1/principal/deleteClassroom/${classroomId}`,{},
            {
                withCredentials: true,
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
    }catch(error){
        console.log("error deleting classroom", error);
        alert("Error deleting classroom. Please try again.");
    }
}



export const viewclassroom=async()=>{

    try {
        const response = await axios.post(`https://heliverse-assignment-pd44.onrender.com/api/v1/teacher/viewclassroom`,{},
        {
            withCredentials: true,
            headers: {
                "Content-Type": "application/json",
            },
        });
        return response.data.classroom;
    }catch(error){
        console.log("error getting students", error);
        alert("Error getting students. Please try again.");
    }

}

export const viewClassroomStudents=async()=>{
    try {
        const response = await axios.get(`https://heliverse-assignment-pd44.onrender.com/api/v1/teacher/students`,
        {
            withCredentials: true,
            headers: {
                "Content-Type": "application/json",
            },
        });
        return response.data.students;
    }catch(error){
        console.log("error getting students", error);
        alert("Error getting students. Please try again.");
    }
}   

export const createTimetable=async(timetable)=>{
    try {
        const response = await axios.post(`https://heliverse-assignment-pd44.onrender.com/api/v1/teacher/timetable`, 
        {timetable},
        {
            withCredentials: true,
            headers: {
                "Content-Type": "application/json",
            },
        });
        return response.data;
    }catch(error){
        console.log("error creating timetable", error);
        alert("Error creating timetable. Please try again.");
    }
}

export const viewClassroomfriends=async()=>{
    try{
        const response=await axios.get(`https://heliverse-assignment-pd44.onrender.com/api/v1/student/students`,{
            withCredentials: true,
            headers: {
                "Content-Type": "application/json",
            },
        });
        return response.data.students;
    }catch(error){
        console.log("error getting students", error);
        alert("Error getting students. Please try again.");
    }
}

export const fetchTimetable=async()=>{
    try{
        const response=await axios.get(`https://heliverse-assignment-pd44.onrender.com/api/v1/student/timetable`,{
            withCredentials: true,
            headers: {
                "Content-Type": "application/json",
            },
        });
        return response.data;
    }catch(error){
        console.log("error getting timetable", error);
        alert("Error getting timetable. Please try again.");
    }
}

export const singleClassroom=async(classroomId)=>{
    try{
        const response=await axios.get(`https://heliverse-assignment-pd44.onrender.com/api/v1/principal/singleClassroom/${classroomId}`,{
            withCredentials: true,
            headers: {
                "Content-Type": "application/json",
            },
        });
        return response.data.classroom;
    }catch(error){
        console.log("error getting classroom", error);
        alert("Error getting classroom. Please try again.");
    }
}
export const updateClassroom=async(classroomId, classroom)=>{
    try{
        const response=await axios.post(`https://heliverse-assignment-pd44.onrender.com/api/v1/principal/updateClassroom/${classroomId}`,classroom,
            {
                withCredentials: true,
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        return response.data;
    }catch(error){
        console.log("error updating classroom", error);
        alert("Error updating classroom. Please try again.");
    }
}

export const singleTeacher=async(teacherId)=>{
    try{
        const response=await axios.get(`https://heliverse-assignment-pd44.onrender.com/api/v1/principal/singleTeacher/${teacherId}`,{
            withCredentials: true,
            headers: {
                "Content-Type": "application/json",
            },
        });
        return response.data.teacher;
    }catch(error){
        console.log("error getting teacher", error);
        alert("Error getting teacher. Please try again.");
    }
}

export const updateTeacher=async(teacherId, teacher)=>{
    try{
        const response=await axios.post(`https://heliverse-assignment-pd44.onrender.com/api/v1/principal/updateTeacher/${teacherId}`,teacher,
            {
                withCredentials: true,
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        return response.data;
    }catch(error){
        console.log("error updating teacher", error);
        alert("Error updating teacher. Please try again.");
    }
}

export const singleStudent=async(studentId)=>{
    try{
        const response=await axios.get(`https://heliverse-assignment-pd44.onrender.com/api/v1/principal/singleStudent/${studentId}`,{
            withCredentials: true,
            headers: {
                "Content-Type": "application/json",
            },
        });
        return response.data.student;
    }catch(error){
        console.log("error getting student", error);
        alert("Error getting student. Please try again.");
    }
}

export const updateStudent=async(studentId, student)=>{
    try{
        const response=await axios.post(`https://heliverse-assignment-pd44.onrender.com/api/v1/principal/updateStudent/${studentId}`,student,
            {
                withCredentials: true,
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        return response.data;
    }catch(error){
        console.log("error updating student", error);
        alert("Error updating student. Please try again.");
    }
}

export const viewSingleStudent=async(studentId)=>{
    try{
        const response=await axios.get(`https://heliverse-assignment-pd44.onrender.com/api/v1/student/students/${studentId}`,{
            withCredentials: true,
            headers: {
                "Content-Type": "application/json",
            },
        });
        return response.data.student;
    }catch(error){
        console.log("error getting student", error);
        alert("Error getting student. Please try again.");
    }
}

export const updateSingleStudent=async(studentId, student)=>{
    try{
        const response=await axios.post(`https://heliverse-assignment-pd44.onrender.com/api/v1/student/updateStudent/${studentId}`,student,
            {
                withCredentials: true,
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        return response.data;
    }catch(error){
        console.log("error updating student", error);
        alert("Error updating student. Please try again.");
    }
}   

