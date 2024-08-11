'use client'
import { useRouter } from 'next/navigation';
export default function Home() {
  const router = useRouter();
  const handlePrinci = () => {
    router.push('/login/principal');
  };
  const handleTeacher = () => {
    router.push('/login/teacher');
  }
  const handleStudent = () => {
    router.push('/login/student');
  }
  return (
    
    <div className='bg-black h-screen flex-col text-white'>
    <div className='flex flex-col'>
     <div className='flex justify-center text-6xl mt-32'>ClassRoom</div>
     <div className='flex justify-center md:text-3xl mt-10 text-center text-2xl'>One Stop Solution for managing your Institution</div>
     <div className='flex md:flex-row justify-center mt-14 gap-5 text-2xl flex-col p-4 md:p-0'>
        <div className='p-4 bg-slate-400 rounded-lg'>Manage Students</div>
        <div className='p-4 bg-slate-400 rounded-lg'>Manage Teachers</div>
        <div className='p-4 bg-slate-400 rounded-lg'>Timetables and more</div>
     </div>
     <div className='flex justify-center text-3xl md:mt-10 mt-5'>experience the Tech!</div>
     <div className='flex justify-center mt-12 md:gap-10 gap-3'>
        <button className='md:py-3 md:px-8 p-2   rounded-lg bg-green-500 text-slate-50   md:text-3xl' onClick={handlePrinci}>Principal login</button>
        <button className='md:py-3 md:px-8 p-2  rounded-lg bg-green-500 text-slate-50   md:text-3xl' onClick={handleTeacher}>Teacher login</button>
        <button className='md:py-3 md:px-8  p-2 rounded-lg bg-green-500 text-slate-50   md:text-3xl' onClick={handleStudent}>Student login</button>

     </div>
     </div>
  </div>


  );
}
