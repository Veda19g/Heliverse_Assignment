'use client'
import { useEffect, useState } from "react";
import { fetchTimetable } from "@/actions";
export default function Tt() {
    const [timetable, setTimetable] = useState([]);

    useEffect(() => {
      const getTimetable = async () => {
        try {
          const data = await fetchTimetable();
          setTimetable(data.timetable); // Assuming the API response has a timetable field
        } catch (error) {
          console.error('Error fetching timetable:', error);
        }
      };
  
      getTimetable();
    }, []);
  
    return (
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-md shadow-md">
        <h2 className="text-xl font-semibold mb-4">Class Timetable</h2>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2">Subject</th>
              <th className="py-2">Start Time</th>
              <th className="py-2">End Time</th>
            </tr>
          </thead>
          <tbody>
            {timetable.map((period, index) => (
              <tr key={index} className="border-t">
                <td className="py-2">{period.subject}</td>
                <td className="py-2">{period.start}</td>
                <td className="py-2">{period.end}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
}