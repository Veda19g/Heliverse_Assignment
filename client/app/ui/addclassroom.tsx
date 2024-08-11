'use client';

import { useState } from "react";
import { addClassroom } from "@/actions";

export default function AddClassroom() {
    const [name, setName] = useState("");
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [days, setDays] = useState<string[]>([]);

    const handleDayChange = (day: string) => {
        if (days.includes(day)) {
            setDays(days.filter(d => d !== day));
        } else {
            setDays([...days, day]);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const classroom = { name, startTime, endTime, days };
        const result = await addClassroom(classroom);
        if (result) {
            alert("Classroom created successfully!");
            setName("");
            setStartTime("");
            setEndTime("");
            setDays([]);
        }
    };

    return (
        <div className="p-4 max-w-lg mx-auto bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Add Classroom</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Classroom Name
                    </label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Start Time
                    </label>
                    <input
                        type="time"
                        value={startTime}
                        onChange={(e) => setStartTime(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        End Time
                    </label>
                    <input
                        type="time"
                        value={endTime}
                        onChange={(e) => setEndTime(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Days
                    </label>
                    <div className="flex flex-wrap gap-2">
                        {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map((day) => (
                            <label key={day} className="inline-flex items-center">
                                <input
                                    type="checkbox"
                                    value={day}
                                    checked={days.includes(day)}
                                    onChange={() => handleDayChange(day)}
                                    className="form-checkbox"
                                />
                                <span className="ml-2">{day}</span>
                            </label>
                        ))}
                    </div>
                </div>
                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    >
                        Add Classroom
                    </button>
                </div>
            </form>
        </div>
    );
}
