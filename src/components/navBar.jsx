import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import "@fontsource/poppins";

const Navbar = () => {
    return (
        <nav className='md:w-[80%] w-[95%] mt-5 h-24 justify-center bg-white rounded-2xl items-center md:mt-4 flex'>
            <div className='w-full md:w-[40%] md:h-full flex justify-center items-center'>
                <img src={logo} className='md:w-28 w-20' alt="" />
            </div>
            <ul className='hidden md:w-full md:h-full md:flex md:justify-center md:items-center md:gap-16'>
                <li className='font-semibold font-poppins'>
                    <Link>Home</Link>
                </li>
                <li className='font-semibold font-poppins'>
                    <Link>About us</Link>
                </li>
                <li className='font-semibold font-poppins'>
                    <Link>Rooms</Link>
                </li>
                <li className='font-semibold font-poppins'>
                    <Link>Contact us</Link>
                </li>
            </ul>
            <div className='md:w-[40%] w-full h-full flex justify-center items-center'>
                <Link to='/login' className='w-4/5 h-[60%] bg-primary rounded-3xl flex justify-center items-center font-semibold font-poppins text-white '>Log In / Sign Up</Link>
            </div>
        </nav>
    );
}

export default Navbar;
