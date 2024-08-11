'use client'
import  { useState } from 'react';
import {createTimetable} from '@/actions';

const CreateTimetable = () => {
  const [timetable, settimetable] = useState([{ subject: '', start: '', end: '' }]);

  const addPeriod = () => {
    settimetable([...timetable, { subject: '', start: '', end: '' }]);
  };

  const removePeriod = (index) => {
    const updatedtimetable = timetable.filter((_, i) => i !== index);
    settimetable(updatedtimetable);
  };

  const handleInputChange = (index, e) => {
    const { name, value } = e.target;
    const updatedtimetable = [...timetable];
    updatedtimetable[index][name] = value;
    settimetable(updatedtimetable);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = { timetable };  // Wrap the timetable array in an object with the timetable key
      console.log('Creating timetable:', payload);
      const result = await createTimetable(payload);  // Pass the payload to the createTimetable function
      alert('Timetable created successfully:');
    } catch (error) {
      console.error('Error creating timetable:', error);
    }
};

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-md shadow-md">
      <h2 className="text-xl font-semibold mb-4">Create Timetable</h2>
      <form onSubmit={handleSubmit}>
        {timetable.map((period, index) => (
          <div key={index} className="mb-4">
            <div className="flex space-x-4 mb-2">
              <input
                type="text"
                name="subject"
                value={period.subject}
                onChange={(e) => handleInputChange(index, e)}
                placeholder="Subject"
                className="px-4 py-2 border rounded-md w-full"
                required
              />
              <input
                type="time"
                name="start"
                value={period.start}
                onChange={(e) => handleInputChange(index, e)}
                className="px-4 py-2 border rounded-md"
                required
              />
              <input
                type="time"
                name="end"
                value={period.end}
                onChange={(e) => handleInputChange(index, e)}
                className="px-4 py-2 border rounded-md"
                required
              />
            </div>
            {timetable.length > 1 && (
              <button
                type="button"
                onClick={() => removePeriod(index)}
                className="text-red-500 hover:underline"
              >
                Remove Period
              </button>
            )}
          </div>
        ))}
        <button
          type="button"
          onClick={addPeriod}
          className="mb-4 px-4 py-2 mr-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600"
        >
          Add Period
        </button>
        <button
          type="submit"
          className="px-4 py-2 ml-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
        >
          Create Timetable
        </button>
      </form>
    </div>
  );
};

export default CreateTimetable;
