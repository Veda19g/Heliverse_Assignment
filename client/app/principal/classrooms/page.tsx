'use client';
import { useState } from "react";
import ClassroomTable from "@/app/ui/classroomtable";
import AddClassroom from "@/app/ui/addclassroom";
export default function Classrooms() {
    
    const [isViewClassrooms, setIsViewClassrooms] = useState(true);
    const [isAddClassroom, setIsAddClassroom] = useState(false);
    const ViewClassrooms = () => {
            setIsViewClassrooms(true);
            setIsAddClassroom(false);    
    }
    const addClassroom = () => {
        setIsAddClassroom(true);
        setIsViewClassrooms(false);
    }
    return (

        <div className="p-4">
        <h2 className="text-2xl font-bold mb-6">Here are your classrooms</h2>
        <div className="flex flex-col gap-3 md:flex-row flex-grow  justify-between md:m-8 items-center md:gap-8 md:p-4 ">
            <div onClick={ViewClassrooms} className="p-4 text-lg font-semibold text-gray-800border border-gray-300 rounded-lg bg-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
                View Classrooms
            </div>
            <div onClick={addClassroom} className="p-4 text-lg font-semibold text-gray-800border border-gray-300 rounded-lg bg-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
                Add Classroom
            </div>
        </div>
        <div className="flex mt-3">
            {isViewClassrooms && <ClassroomTable />}
            {isAddClassroom && <AddClassroom/>}
        </div>
        </div>
);
        
    
}