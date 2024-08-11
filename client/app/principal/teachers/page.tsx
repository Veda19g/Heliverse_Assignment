'use client';
import { useState } from "react";
import TeacherTable from "@/app/ui/teachertable";
import AddTeacher from "@/app/ui/addteacher";
export default function Teachers() {
    
    const [isViewTeachers, setIsViewTeachers] = useState(true);
    const [isAddTeacher, setIsAddTeacher] = useState(false);
    const ViewTeachers = () => {
            setIsViewTeachers(true);
            setIsAddTeacher(false);    
    }
    const add = () => {
        setIsAddTeacher(true);
        setIsViewTeachers(false);
    }
    return (

        <div className="p-4">
        <h2 className="text-2xl font-bold mb-6">Here are your Teachers</h2>
        <div className="flex flex-row flex-grow  justify-between m-8 items-center gap-8 p-4 ">
            <div onClick={ViewTeachers} className="p-4 text-lg font-semibold text-gray-800border border-gray-300 rounded-lg bg-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
                View Teachers
            </div>
            <div onClick={add} className="p-4 text-lg font-semibold text-gray-800border border-gray-300 rounded-lg bg-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
                Add Teacher
            </div>
        </div>
        <div className="flex">
            {isViewTeachers && <TeacherTable />}
            {isAddTeacher && <AddTeacher/>}
        </div>
        </div>
);
        
    
}