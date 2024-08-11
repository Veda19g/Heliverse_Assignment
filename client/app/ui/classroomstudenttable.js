'use client'
import { useEffect, useState } from "react";
import { viewClassroomStudents,deleteStudent } from "@/actions";

export default function ClassroomTable() {
    const [students, setStudents] = useState([]);

    useEffect(()=>{
        const fetchStudents = async () => {
            const students = await viewClassroomStudents();
            console.log(students);
            setStudents(students);

        };
        fetchStudents();
    },[]);

    const handleDelete = async (studentId) => {
        await deleteStudent(studentId);
        const students = await viewClassroomStudents();
        setStudents(students);
    };



  console.log(students);
    return (
        <div>
            
            <table className=" border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border border-gray-300 p-2">Name</th>
                        <th className="border border-gray-300 p-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student) => (
                        <tr key={student._id} className="bg-gray-50">
                            <td className="border border-gray-300 p-2">{student.name}</td>

                            <td className="border border-gray-300 p-2">
                                <div className="flex flex-row gap-4">
                                    <button  className="p-2 text-white bg-blue-500 rounded-lg">Edit</button>
                                    <button onClick={
                                        ()=>handleDelete(student._id)
                                    } className="p-2 text-white bg-red-500 rounded-lg">Delete</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
}
