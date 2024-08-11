import { useRouter } from 'next/navigation';
import { useState } from 'react';
import {login} from "@/actions";

export default function Login({ id }: { id: string }) {
    const router = useRouter();
    const [formData, setFormData] = useState({ email: "", password: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit =async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
        try{
            const response=await login(formData,id);
            if (response.status) {
                router.push(`/${id}/dashboard`);
            } else {
                alert("Login failed. Please check your credentials and try again.");
            }
        }catch(err){
            alert("Login failed. Please check your credentials and try again.");
            console.error(err);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-black">
            <div className="bg-white md:p-8 rounded-xl shadow-md md:w-96 p-5">
                <h2 className="md:text-3xl font-bold mb-4 text-center text-black text-xl">Login</h2>
                <p className="text-center text-2xl text-gray-600 mb-4">Login as: {id}</p> {/* Display the dynamic id */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block md:text-xl font-medium text-black text-lg">Email</label>
                        <input
                            id="email"
                            type="text"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="email compulsory"
                            className="mt-1 block w-full text-xl border md:p-2 p-1 border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black sm:text-sm"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block font-medium md:text-xl text-lg text-black">Password</label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter your password"
                            className="mt-1 md:p-3 p-1 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-black focus:border-black sm:text-sm"
                        />
                    </div>
                    <button type="submit" className="w-full bg-black text-white py-3 px-4 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2">Login</button>
                </form>
            </div>
        </div>
    );
}
