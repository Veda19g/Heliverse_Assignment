'use client'
import { useEffect, useState } from "react";
import { viewClassroomStudents,deleteStudent } from "@/actions";
import { useParams,useRouter } from "next/navigation";

export default function ClassroomTable() {
    const router = useRouter();
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

   const handleUpdate=async(studentId)=>{
    router.push(`/teacher/update/${studentId}`);   
}

  console.log(students);
    return (
        <div className="overflow-x-auto">
            
            <table className=" border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border border-gray-300 p-2">Name</th>
                        <th className="border border-gray-300 p-2">Email</th>
                        <th className="border border-gray-300 p-2">Update</th>
                        <th className="border border-gray-300 p-2">Delete</th>        
                    </tr>
                </thead>
                <tbody>
                    {students.map((student) => (
                        <tr key={student._id} className="bg-gray-50">
                            <td className="border border-gray-300 p-2">{student.name}</td>
                            <td className="border border-gray-300 p-2">{student.email}</td>
                            <td className="border border-gray-300 p-1 md:p-2">
                            <button onClick={()=>{handleUpdate(student._id)}} className="bg-blue-500 text-white p-1 md:p-2 rounded-lg">Update</button>
                        </td>
                        <td className="border border-gray-300 p-1 md:p-2">
                        <button onClick={()=>{handleDelete(student._id)}} className="bg-red-500 text-white p-1 md:p-2 rounded-lg">Delete</button>
                        </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
}
