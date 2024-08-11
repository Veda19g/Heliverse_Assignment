'use client'
import { useState } from 'react';
import { assignStudentToTeacher } from "@/actions"
export default function AssignTeacher() {
    const [StudentName, setStudentName] = useState('');
    const [TeacherName, setTeacherName] = useState('');
    const [message, setMessage] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            studentName: StudentName,
            teacherName: TeacherName
        };
        await assignStudentToTeacher(data);
        setMessage('Student assigned to teacher successfully');
    };
    
        return (
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="StudentName" className="block">Name of the Student</label>
                    <input
                        type="text"
                        id="StudentName"
                        value={StudentName}
                        onChange={(e) => setStudentName(e.target.value)}
                        className="border p-2 w-full"
                    />
                </div>
                <div>
                    <label htmlFor="TeacherName" className="block">Name of the Teacher</label>
                    <input
                        type="text"
                        id="TeacherName"
                        value={TeacherName}
                        onChange={(e) => setTeacherName(e.target.value)}
                        className="border p-2 w-full"
                    />
                </div>
                
                <button type="submit" className="bg-blue-500 text-white p-2">Add Teacher</button>
                {message && <p className="mt-2">{message}</p>}
            </form>
    );
}