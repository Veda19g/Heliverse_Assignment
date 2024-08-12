'use client';
import { useState } from "react";
import clsx from "clsx";
import ClassroomTable from "@/app/ui/classroomtable";
import AddClassroom from "@/app/ui/addclassroom";

export default function Classrooms() {
    const [isViewClassrooms, setIsViewClassrooms] = useState(true);
    const [isAddClassroom, setIsAddClassroom] = useState(false);

    const ViewClassrooms = () => {
        setIsViewClassrooms(true);
        setIsAddClassroom(false);    
    }

    const CreateClassroom = () => {
        setIsAddClassroom(true);
        setIsViewClassrooms(false);
    }

    return (
        <div className="p-4">
            <div className="flex flex-col gap-3 md:flex-row flex-grow justify-between md:m-4 items-center md:gap-8 md:p-4">
                <div 
                    onClick={ViewClassrooms} 
                    className={clsx(
                        "p-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer",
                        isViewClassrooms ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-800 border border-gray-300"
                    )}
                >
                    View Classrooms
                </div>
                <div 
                    onClick={CreateClassroom} 
                    className={clsx(
                        "p-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer",
                        isAddClassroom ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-800 border border-gray-300"
                    )}
                >
                    Create Classroom
                </div>
            </div>
            <div className="flex mt-3">
                {isViewClassrooms && <ClassroomTable />}
                {isAddClassroom && <AddClassroom />}
            </div>
        </div>
    );
}
