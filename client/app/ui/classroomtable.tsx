'use client'
import { useEffect, useState } from "react";
import { getAllClassrooms } from "@/actions";

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
    __v: number;
}

export default function ClassroomTable() {
    const [classrooms, setClassrooms] = useState<Classroom[]>([]);

    useEffect(() => {
        getAllClassrooms().then((data) => {
            setClassrooms(data);
        });
    }, []);

    return (
        <div>
            <table className=" border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border border-gray-300 p-2">Classroom</th>
                        <th className="border border-gray-300 p-2">Class Teacher</th>
                        <th className="border border-gray-300 p-2">Number of Students</th>
                        <th className="border border-gray-300 p-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {classrooms.map((classroom) => (
                        <tr key={classroom._id} className="bg-gray-50">
                            <td className="border border-gray-300 p-2">{classroom.name}</td>
                            {classroom.teacher?.name ? (
                                <td className="border border-gray-300 p-2">{classroom.teacher.name}</td>
                            ) : (
                                <td className="border border-gray-300 p-2">No teacher assigned</td>
                            )}
                            <td className="border border-gray-300 p-2">{classroom.students.length}</td>
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
