'use client';
import { useState } from "react";
import clsx from "clsx";
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
        <div className="flex flex-col gap-4 md:flex-row flex-grow  justify-between md:m-8 items-center md:gap-8 md:p-4 ">
            <div onClick={ViewStudents} 
            className={clsx(
                "p-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer",
                isViewStudents ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-800 border border-gray-300"
            )}
            >
                View Students
            </div>
            <div onClick={addStudent} 
            className={clsx(
                "p-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer",
                isAddStudent ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-800 border border-gray-300"
            )}
            >
                Add Student
            </div>
        </div>
        <div className="flex mt-3">
            {isViewStudents && <StudentTable />}
            {isAddStudent && <Addstudent/>}
        </div>
        </div>
);
        
    
}