'use client'
import { useEffect,useState } from 'react';
import { getUserData } from '@/actions';
interface User {
    email: string;
    name: string;
}
export default function Page() {
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
            <h2>Your email is: {user.email}</h2>
        </div>
    );

}