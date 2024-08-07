import React from 'react';
import logo from '../assets/logo.png';
import "@fontsource/poppins";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/400-italic.css";

const Navbar = () => {
    return (
        <>
                <nav className='md:w-[80%] w-full h-20 md:gap-12 justify-center items-center md:mt-4 flex'>
                    <ul className='hidden md:flex md:w-full md:h-full md:justify-evenly md:items-center gap-8'>
                        <li><a href="" className='font-poppins font-medium'>Home</a></li>
                        <li><a href="" className='font-poppins font-medium'>About us</a></li>
                        <li><a href="" className='font-poppins font-medium'>Rooms</a></li>
                    </ul>
                    <div className='w-full md:absolute md:mt-12 flex h-full items-center justify-between p-5 md:flex md:justify-center md:items-center'>
                    <a href=""><img src={`./${logo}`} alt="logo" className='w-32 md:w-44' /></a>
                        <a href="" className='md:hidden font-poppins bg-primary w-32 flex justify-center items-center text-white rounded-xl h-[100%]'>Sign In/Login</a>
                    </div>
                    <ul className='hidden md:flex md:w-full md:h-full md:justify-evenly md:items-center gap-8'>
                        <li><a href="" className='font-poppins font-medium'>Ratings</a></li>
                        <li><a href="" className='font-poppins font-medium'>Contact us</a></li>
                        <li><a href="" className='font-medium bg-primary w-32 flex justify-center items-center text-white rounded-xl h-12'>Sign In/Login</a></li>
                    </ul>
                </nav>
        </>
    )
}

export default Navbar
