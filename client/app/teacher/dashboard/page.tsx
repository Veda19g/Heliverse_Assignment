'use client'
import { useEffect, useState } from 'react';
import { getUserData } from "@/actions";
interface User {
    email: string;
    name: string;
    classroom: string;
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
                <h1>Welcome {user.name}</h1> 
                <h2>here is your email {user.email}</h2>
                
                <h2>Here is your dashboard</h2>
            </div>
        );
    }