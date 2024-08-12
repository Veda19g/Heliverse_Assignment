'use client'
import { UserCircleIcon } from "@heroicons/react/16/solid"

export default function ProfileCard() {

    return(
        <div className='hidden md:flex md:flex-col   md:w-56 md:p-8 md:mr-14 bg-slate-50  md:justify-center md:items-center md:rounded-2xl'>
        <div className='mt-5'><UserCircleIcon className="md:h-18 h-16"/></div>
        <div className='text-2xl text-center text-black font-semibold tracking-wide mt-4'>User Name</div>
        </div>
    )

}