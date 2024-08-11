'use client';
import { MoonIcon } from "@heroicons/react/24/outline";
import { UserCircleIcon } from "@heroicons/react/16/solid";
import menu from "@/app/assets/icon-menu.svg";
import closeMenu from "@/app/assets/icon-close.svg";
import Image from "next/image";
import React, { useState } from "react";
import NavLinks from "./navlinksstudent";
export default function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);


     const handleMenu = () => {
        setIsMenuOpen((prev)=>!prev);
    }

    return (
        <div className="p-4 border-b-2 flex justify-between items-center">
            <div className="md:hidden">
            <Image onClick={handleMenu} src={menu} alt="menu" width={30} height={30} />
            </div>
            {isMenuOpen && <div className='md:hidden fixed overflow-y-auto p-5 top-0 bottom-0 right-0 w-2/3  bg-white text-gray-400 text-xl  bg-opacity-100 z-50'>
      <div  className='flex justify-end md:hidden'>
      <Image
      onClick={handleMenu}
      src={closeMenu}
      alt="Close Menu"
      width={40} 
      height={40} 
      className="cursor-pointer"
    />
        </div>
      <div className='mt-10 flex flex-col gap-10 justify-center items-center text-black'>
        <NavLinks />
      </div>
        </div>}
            <div className="text-lg font-semibold">
                ClassRoom
            </div>
            
            {/* Right side of the navbar */}
            <div className="flex items-center gap-2 md:gap-5">
                {/* Search input (visible on medium screens and larger) */}

                
                {/* Icons section */}
                <div>
                    <MoonIcon className="w-6 h-6" />
                </div>
                <div className="md:hidden">
                    <UserCircleIcon className="w-6 h-6" />
                </div>
            </div>
        </div>
    );
}
