'use client';
import { useState } from 'react';
import { addTeacher } from '@/actions';

export default function AddTeacherForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [classroomName, setClassroomName] = useState('');
    //const [message, setMessage] = useState('');

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        if (!name || !email || !password || !classroomName) {
            alert('Please fill in all fields.');
            return;
        }

        try {
            const response = await addTeacher({ name, email, password, classroomName });
            if(response.success) {
            alert("Teacher added successfully!");
            setName("");
            setEmail("");
            setPassword("");
            setClassroomName("");
            }
            //setMessage(response.message);
        } catch (error) {
            alert('Error adding teacher.');
        }
    };

    return (
        <div className="p-4 max-w-lg mx-auto bg-white rounded-lg shadow-md">
            <div className="text-2xl font-bold mb-4">Add Teacher</div>
            <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
                <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">
                                Teacher Name
                            </label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter teacher name"
                                required
                            />
                        </div>
                        
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">
                                Teacher's Email
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter email"
                                required
                            />
                        </div>
                        
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter password"
                                required
                            />
                        </div>
                        
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">
                                Classroom Name
                            </label>
                            <input
                                type="text"
                                value={classroomName}
                                onChange={(e) => setClassroomName(e.target.value)}
                                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter classroom name"
                                required
                            />
                        </div>
                        
                        <div className="flex justify-end pt-4">
                            <button
                                type="submit"
                                className="px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-200"
                            >
                                Add Teacher
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            {/*{message && <div className="mt-4 text-center text-red-500">{message}</div>}*/}
        </div>
    );
}
