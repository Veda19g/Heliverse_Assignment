'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { singleStudent, updateStudent } from '@/actions';

export default function UpdateStudent() {
    const params = useParams();
    const router = useRouter();
    const studentId = params.id;

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [className, setClassName] = useState('');

    useEffect(() => {
        const fetchStudent = async () => {
            const student = await singleStudent(studentId);
            if (student) {
                setName(student.name);
                setEmail(student.email);
                setClassName(student.classroom?.name || '');
            }
        };
        fetchStudent();
    }, [studentId]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedStudent = { name, email, className };
        const result = await updateStudent(studentId, updatedStudent);
        if (result) {
            alert('Student updated successfully!');
            router.push('/principal/students'); // Redirect after successful update
        }
    };

    return (
        <div className="p-4 max-w-lg mx-auto bg-white rounded-lg shadow-md">
            <div className="text-2xl font-bold mb-4">Update Student</div>
            <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                            Student Name
                        </label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter student name"
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter student email"
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                            Classroom Name
                        </label>
                        <input
                            type="text"
                            value={className}
                            onChange={(e) => setClassName(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter classroom name"
                        />
                    </div>

                    <div className="flex justify-end pt-4">
                        <button
                            type="submit"
                            className="px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-200"
                        >
                            Update Student
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}