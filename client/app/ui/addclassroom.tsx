'use client';

import { useState } from "react";
import { addClassroom } from "@/actions";

export default function AddClassroom() {
    const [name, setName] = useState("");
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [days, setDays] = useState<string[]>([]);
    const [strength, setStrength] = useState(0);

    const handleDayChange = (day: string) => {
        if (days.includes(day)) {
            setDays(days.filter(d => d !== day));
        } else {
            setDays([...days, day]);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const classroom = { name, startTime, endTime, days,strength };
        const result = await addClassroom(classroom);
        if (result) {
            alert("Classroom created successfully!");
            setName("");
            setStartTime("");
            setEndTime("");
            setDays([]);
            setStrength(0);
        }
    };

    return (
        <div className="p-4 max-w-lg mx-auto bg-white rounded-lg shadow-md">
            <div className="text-2xl font-bold mb-4">Add Classroom</div>
            <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
    <form onSubmit={handleSubmit} >
        <div className="space-y-4">
            <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                    Classroom Name
                </label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter classroom name"
                    required
                />
            </div>

            <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                    Strength Of the Classroom
                </label>
                <input
                    type="number"
                    value={strength}
                    onChange={(e) => setStrength(Number(e.target.value))}
                    className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter classroom strength"
                    required
                />
            </div>

            <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                    Start Time
                </label>
                <input
                    type="time"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    required
                />
            </div>

            <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                    End Time
                </label>
                <input
                    type="time"
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    required
                />
            </div>

            <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                    Days
                </label>
                <div className="flex flex-wrap gap-2">
                    {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map((day) => (
                        <label key={day} className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                value={day}
                                checked={days.includes(day)}
                                onChange={() => handleDayChange(day)}
                                className="form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
                            />
                            <span className="text-gray-700">{day}</span>
                        </label>
                    ))}
                </div>
            </div>

            <div className="flex justify-end pt-4">
                <button
                    type="submit"
                    className="px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-200"
                >
                    Add Classroom
                </button>
            </div>
        </div>
    </form>
</div>

        </div>
    );
}
