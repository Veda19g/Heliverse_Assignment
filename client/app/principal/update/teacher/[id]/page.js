'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { singleTeacher, updateTeacher } from '@/actions';

export default function UpdateTeacher() {
    const params = useParams();
    const router = useRouter();
    const id = params.id;

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [classroom, setClassroom] = useState('');

    useEffect(() => {
        const fetchTeacher = async () => {
            const teacher = await singleTeacher(id);
            if (teacher) {
                setName(teacher.name);
                setEmail(teacher.email);
                setClassroom(teacher.classroom ? teacher.classroom.name : '');
            }
        };
        fetchTeacher();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedTeacher = { name, email, classroom };
        const result = await updateTeacher(id, updatedTeacher);
        if (result) {
            alert('Teacher updated successfully!');
            router.push('/principal/teachers'); // Redirect after successful update
        }
    };

    return (
        <div className="p-4 max-w-lg mx-auto bg-white rounded-lg shadow-md">
            <div className="text-2xl font-bold mb-4">Update Teacher</div>
            <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter teacher's name"
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
                            placeholder="Enter teacher's email"
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                            Classroom
                        </label>
                        <input
                            type="text"
                            value={classroom}
                            onChange={(e) => setClassroom(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter classroom"
                        />
                    </div>

                    <div className="flex justify-end pt-4">
                        <button
                            type="submit"
                            className="px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-200"
                        >
                            Update Teacher
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
