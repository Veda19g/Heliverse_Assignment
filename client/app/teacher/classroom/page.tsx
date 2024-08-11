'use client';
import { useState, useEffect } from 'react';
import { viewclassroom } from '@/actions';
import Classroomstudenttable from "@/app/ui/classroomstudenttable"

interface Classroom {
    name: string;
}

export default function Page() {
    const [classroomData, setClassroomData] = useState<Classroom | null>(null);

    useEffect(() => {
        const fetchclassroom = async () => {
            try {
                
                const classroomData = await viewclassroom();
                setClassroomData(classroomData);
            } catch (error) {
                console.error("Error fetching classroom data", error);
                alert("Error fetching classroom data. Please try again.");
            }
        };
        
        fetchclassroom(); 
    }, []); 

    if (classroomData === null) {
        return <div>Loading...</div>;
    }

    return (
        <div className='p-4'>
            <h1>You have been allotted {classroomData.name}</h1>
            <h1>students</h1>
            <div>
                <Classroomstudenttable/>
            </div>
        </div>
    );
}