'use client'
import { useEffect, useState } from "react";
import { getAllStudents,deleteStudent } from "@/actions";
import {useRouter} from 'next/navigation'
export default function ClassroomTable() {

const router = useRouter();
    const [students, setStudents] = useState([]);

    useEffect(()=>{
        const fetchStudents = async () => {
            const students = await getAllStudents();
            setStudents(students);
        };
        fetchStudents();
    },[]);

    const handleDelete = async (studentId) => {
        await deleteStudent(studentId);
        const students = await getAllStudents();
        setStudents(students);
    };
   
    const handleUpdate=async (studentId)=>{
        router.push(`/principal/update/student/${studentId}`);
    }



  console.log(students);
    return (
        <div className="overflow-x-auto">
            
            <table className=" border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border border-gray-300 md:p-2 p-1">Name</th>
                        <th className="border border-gray-300 md:p-2 p-1">ClassName</th>
                        <th className="border border-gray-300 md:p-2 p-1">Email</th>
                        <th className="border border-gray-300 md:p-2 p-1">Update</th>
                        <th className="border border-gray-300 md:p-2 p-1">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student) => (
                        <tr key={student._id} className="bg-gray-50">
                            <td className="border border-gray-300 md:p-2 p-1">{student.name}</td>
                            {student.classroom &&
                            <td className="border border-gray-300 md:p-2 p-1">{student.classroom.name}</td>
                            }
                            {!student.classroom &&
                            <td className="border border-gray-300 md:p-2 p-1">-</td>
                            }

                            <td className="border border-gray-300 md:p-2 p-1">{student.email}</td>
                            <td className="p-1 border border-gray-300 md:p-2">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded" onClick={()=>{handleUpdate(student._id)}}>Update</button>
                            </td>
                            <td className="p-1 border border-gray-300 md:p-2">
                                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded" onClick={()=>{handleDelete(student._id)}}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
}
