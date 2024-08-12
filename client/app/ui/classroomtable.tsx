'use client'
import { useEffect, useState } from "react";
import { getAllClassrooms,deleteClassroom } from "@/actions";
import {useRouter} from 'next/navigation'

interface Student {
    _id: string;
    name: string;
    // Add other student properties if available
}

interface Teacher {
    _id: string;
    name: string | null;
}

interface Classroom {
    _id: string;
    name: string;
    teacher: Teacher | null;
    days: string[];
    startTime: string;
    endTime: string;
    students: Student[];
    strength: number;
    __v: number;
}

export default function ClassroomTable() {
    
    const router = useRouter();

    const [classrooms, setClassrooms] = useState<Classroom[]>([]);

    useEffect(() => {
        getAllClassrooms().then((data) => {
            setClassrooms(data);
        });
    }, []);
    
   const handleDelete = async (id: string) => {
      await deleteClassroom(id);
      const classrooms = await getAllClassrooms();
        setClassrooms(classrooms);
    }

   const handleUpdate=(id:string)=>{
        router.push(`/principal/update/classroom/${id}`);
   }


    return (
<div className="overflow-x-auto">
    <table className="min-w-full border-collapse border border-gray-300">
        <thead>
            <tr className="bg-gray-100">
                <th className="border border-gray-300 p-1 md:p-2">Classroom</th>
                <th className="border border-gray-300 p-1 md:p-2">Class Teacher</th>
                <th className="border border-gray-300 p-1 md:p-2">Start-time</th>
                <th className="border border-gray-300 p-1 md:p-2">End-time</th>
                <th className="border border-gray-300 p-1 md:p-2">Number of Students</th>
                <th className="border border-gray-300 p-1 md:p-2">Strength</th>
                <th className="border border-gray-300 p-1 md:p-2">Update</th>
                <th className="border border-gray-300 p-1 md:p-2">Delete</th>
            </tr>
        </thead>
        <tbody>
            {classrooms.map((classroom) => (
                <tr key={classroom._id} className="bg-gray-50">
                    <td className="border border-gray-300 p-1 md:p-2">{classroom.name}</td>
                    {classroom.teacher?.name ? (
                        <td className="border border-gray-300 p-1 md:p-2">{classroom.teacher.name}</td>
                    ) : (
                        <td className="border border-gray-300 p-1 md:p-2">No teacher assigned</td>
                    )}
                    <td className="border border-gray-300 p-1 md:p-2">{classroom.startTime}</td>
                    <td className="border border-gray-300 p-1 md:p-2">{classroom.endTime}</td>
                    <td className="border border-gray-300 p-1 md:p-2">{classroom.students.length}</td>
                    <td className="border border-gray-300 p-1 md:p-2">{classroom.strength}</td>
                    <td className="border border-gray-300 p-1 md:p-2">
                        <button onClick={()=>{handleUpdate(classroom._id)}} className="bg-blue-500 text-white p-1 md:p-2 rounded-lg">Update</button>
                    </td>
                    <td className="border border-gray-300 p-1 md:p-2">
                        <button onClick={()=>{handleDelete(classroom._id)}} className="bg-red-500 text-white p-1 md:p-2 rounded-lg">Delete</button>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
</div>

    );
}
