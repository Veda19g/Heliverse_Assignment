'use client';
import { useState } from "react";
import StudentTable from "@/app/ui/studenttable";
import Addstudent from "@/app/ui/addstudent";
export default function Students() {
    
    const [isViewStudents, setIsViewStudents] = useState(true);
    const [isAddStudent, setIsAddStudent] = useState(false);
    const ViewStudents = () => {
            setIsViewStudents(true);
            setIsAddStudent(false);    
    }
    const addStudent = () => {
        setIsAddStudent(true);
        setIsViewStudents(false);
    }
    return (

        <div className="p-4">
        <h2 className="text-2xl font-bold mb-6">Here are your Students</h2>
        <div className="flex flex-row flex-grow  justify-between m-8 items-center gap-8 p-4 ">
            <div onClick={ViewStudents} className="p-4 text-lg font-semibold text-gray-800border border-gray-300 rounded-lg bg-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
                View Students
            </div>
            <div onClick={addStudent} className="p-4 text-lg font-semibold text-gray-800border border-gray-300 rounded-lg bg-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
                Add Student
            </div>
        </div>
        <div className="flex">
            {isViewStudents && <StudentTable />}
            {isAddStudent && <Addstudent/>}
        </div>
        </div>
);
        
    
}