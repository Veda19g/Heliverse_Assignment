'use client'
import { useEffect, useState } from "react";
import { viewClassroomfriends } from "@/actions";

export default function Friends() {
    const [students, setStudents] = useState([]);

    useEffect(()=>{
        const fetchStudents = async () => {
            const students = await viewClassroomfriends();
            setStudents(students);
        };
        fetchStudents();
    },[]);





    return (
        <div>
            
            <table className=" border-collapse border border-gray-300 ml-10 p-4">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border border-gray-300 md:p-2 p-3">Name</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student) => (
                        <tr key={student._id} className="bg-gray-50">
                            <td className="border border-gray-300 md:p-2 p-3">{student.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
}
