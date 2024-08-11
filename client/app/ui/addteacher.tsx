'use client'
import { useState } from 'react';
import { addTeacher } from '@/actions';
export default function AddTeacherForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [classroomName, setClassroomName] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        if (!name || !email || !password || !classroomName) {
            setMessage('Please fill in all fields.');
            return;
        }

        try {
            const response = await addTeacher({ name, email, password, classroomName });
            setMessage(response.message);
        } catch (error) {
            setMessage('Error adding student.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label htmlFor="name" className="block">Name</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border p-2 w-full"
                />
            </div>
            <div>
                <label htmlFor="email" className="block">Email</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border p-2 w-full"
                />
            </div>
            <div>
                <label htmlFor="password" className="block">Password</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border p-2 w-full"
                />
            </div>
            <div>
                <label htmlFor="classroomId" className="block">Classroom Name</label>
                <input
                    type="text"
                    id="classroomName"
                    value={classroomName}
                    onChange={(e) => setClassroomName(e.target.value)}
                    className="border p-2 w-full"
                />
            </div>
            <button type="submit" className="bg-blue-500 text-white p-2">Add Teacher</button>
            {message && <p className="mt-2">{message}</p>}
        </form>
    );
}
