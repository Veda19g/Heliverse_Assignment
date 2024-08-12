'use client'
import { useEffect, useState } from 'react';
import { getUserData } from "@/actions";
import { UserCircleIcon } from "@heroicons/react/16/solid";
interface User {
    email: string;
    name: string;
    classroom: {
        name: string;
    };
    }

    export default function Dashboard() {
        const [user, setUser] = useState<User | null>(null); 
    
        useEffect(() => {
            const fetchUserData = async () => {
                const userData = await getUserData();
                setUser(userData);
            };
            fetchUserData();
        }, []);
    
        if (user === null) {
            return <div>Loading...</div>; 
        }
    
        return (
    <div className='p-4'>
    <div className='flex flex-col w-full sm:w-64 p-4 sm:p-6 bg-slate-50 justify-center items-center rounded-2xl'>
    <div className='text-sm sm:text-md text-center text-black font-semibold tracking-wide mt-2 sm:mt-3'>
        Welcome to your dashboard!
    </div>
    <div className='mt-4 sm:mt-5'>
        <UserCircleIcon className="h-16 sm:h-20" />
    </div>
    <div className='text-md sm:text-lg text-center text-black font-semibold tracking-wide mt-3 sm:mt-4'>
        Name: {user.name}
    </div>
    <div className='text-sm sm:text-md text-center text-black font-semibold tracking-wide mt-2 sm:mt-3'>
        Email: {user.email}
    </div>
    <div className='text-sm sm:text-md text-center text-black font-semibold tracking-wide mt-2 sm:mt-3'>
        Class Alloted: {user.classroom.name}
    </div>
    </div>
            </div>
        );
    }