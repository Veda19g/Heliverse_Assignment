'use client';
import { useState } from "react";
import clsx from "clsx";
import TeacherTable from "@/app/ui/teachertable";
import AddTeacher from "@/app/ui/addteacher";
//import AssignTeacher from "@/app/ui/assignteacher";
export default function Teachers() {
    
    const [isViewTeachers, setIsViewTeachers] = useState(true);
    const [isAddTeacher, setIsAddTeacher] = useState(false);
    //const [isAssignTeacher, setIsAssignTeacher] = useState(false);
    const ViewTeachers = () => {
            setIsViewTeachers(true);
            setIsAddTeacher(false);    
            //setIsAssignTeacher(false);
    }
    const add = () => {
        setIsAddTeacher(true);
        setIsViewTeachers(false);
        //setIsAssignTeacher(false);
    }
    /**
        const assign = () => {
        setIsAssignTeacher(true);
        setIsAddTeacher(false);
        setIsViewTeachers(false);
    }
     */

    return (

        <div className="p-4">
        <h2 className="text-2xl font-bold mb-6">Here are your Teachers</h2>
        <div className="flex flex-col  gap-4 md:flex-row md:flex-grow  justify-between md:m-8 items-center md:gap-8 md:p-4 ">
            <div onClick={ViewTeachers} 
            className={clsx(
                "p-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer",
                isViewTeachers ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-800 border border-gray-300"
            )}
            >
                View Teachers
            </div>
            <div onClick={add} 
            className={clsx(
                "p-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer",
                isAddTeacher ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-800 border border-gray-300"
            )}
            >
                Create Teacher
            </div>
           {/**
            <div onClick={assign}
            className={clsx(
                "p-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer",
                isAssignTeacher ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-800 border border-gray-300"
            )}
            >
            Assign Student to Teacher
            </div> 
            **/}
        </div>
        <div className="flex mt-4">
            {isViewTeachers && <TeacherTable />}
            {isAddTeacher && <AddTeacher/>}
          {/*{isAssignTeacher && <AssignTeacher/>} */}  
        </div>
        </div>
);
        
    
}