
'use client'
import { useEffect, useState } from "react";
import { getAllTeachers,deleteTeacher } from "@/actions";
import {useRouter} from 'next/navigation'
export default function TeacherTable() {

const router = useRouter();

 const [Teachers, setTeachers] = useState([]);

    useEffect(()=>{
        const fetchTeachers = async () => {
            const Teachers = await getAllTeachers();
            setTeachers(Teachers);
        };
        fetchTeachers();
    },[]);

    const handleDelete = async (teacherId) => {
        await deleteTeacher(teacherId);
        const Teachers = await getAllTeachers();
        setTeachers(Teachers);
    };

    const handleUpdate=async (teacherId)=>{
        router.push(`/principal/update/teacher/${teacherId}`);
   }
   
    



    return (
        <div className="overflow-x-auto">
            
            <table className=" border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="p-1 border border-gray-300 md:p-2">Name</th>
                        <th className="p-1 border border-gray-300 md:p-2">Email</th>
                        <th className="p-1 border border-gray-300 md:p-2">ClassName</th>
                        <th className="p-1 border border-gray-300 md:p-2">Update</th>
                        <th className="p-1 border border-gray-300 md:p-2">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {Teachers.map((teacher) => (
                        <tr key={teacher._id} className="bg-gray-50">
                            <td className=" p-1 border border-gray-300 md:p-2">{teacher.name}</td>
                            <td className="p-1 border border-gray-300 md:p-2">{teacher.email}</td>
                            {teacher.classroom &&
                            <td className="p-1 border border-gray-300 md:p-2">{teacher.classroom.name}</td>
                            }
                            {!teacher.classroom &&
                            <td className="p-1 border border-gray-300 md:p-2">-</td>
                            }

                            <td className="p-1 border border-gray-300 md:p-2">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded" onClick={()=>{handleUpdate(teacher._id)}}>Update</button>
                            </td>
                            <td className="p-1 border border-gray-300 md:p-2">
                                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded" onClick={()=>{handleDelete(teacher._id)}}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );


}