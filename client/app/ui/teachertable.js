
'use client'
import { useEffect, useState } from "react";
import { getAllTeachers } from "@/actions";
export default function TeacherTable() {



const [Teachers, setTeachers] = useState([]);

    useEffect(()=>{
        const fetchTeachers = async () => {
            const Teachers = await getAllTeachers();
            setTeachers(Teachers);
        };
        fetchTeachers();
    },[]);


  console.log(Teachers);
    return (
        <div>
            
            <table className=" border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border border-gray-300 p-2">Name</th>
                        <th className="border border-gray-300 p-2">ClassName</th>
                        <th className="border border-gray-300 p-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {Teachers.map((teacher) => (
                        <tr key={teacher._id} className="bg-gray-50">
                            <td className="border border-gray-300 p-2">{teacher.name}</td>
                            {teacher.classroom &&
                            <td className="border border-gray-300 p-2">{teacher.classroom.name}</td>
                            }
                            {!teacher.classroom &&
                            <td className="border border-gray-300 p-2">-</td>
                            }

                            <td className="border border-gray-300 p-2">
                                <div className="flex flex-row gap-4">
                                    <button className="p-2 text-white bg-blue-500 rounded-lg">Edit</button>
                                    <button className="p-2 text-white bg-red-500 rounded-lg">Delete</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );


}