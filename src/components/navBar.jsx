import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import "@fontsource/poppins";

const Navbar = () => {
    return (
        <nav className='md:w-[80%] w-full h-20 md:gap-12 justify-center items-center md:mt-4 flex'>
            <ul className='hidden md:flex md:w-full md:h-full md:justify-evenly md:items-center gap-8 z-[100]'>
                <li><Link to='/' className='font-poppins font-medium cursor-pointer'>Home</Link></li>
                <li><Link to='/about' className='font-poppins font-medium cursor-pointer'>About us</Link></li>
                <li><Link to='/rooms' className='font-poppins font-medium cursor-pointer'>Rooms</Link></li>
            </ul>
            <div className='w-full md:absolute md:mt-12 flex h-full items-center justify-between p-5 md:flex md:justify-center md:items-center'>
                <Link to='/'><img src={logo} alt="logo" className='w-32 md:w-44' /></Link>
                <Link to='/signup' className='md:hidden font-poppins bg-primary w-32 flex justify-center items-center text-white rounded-xl h-[100%] cursor-pointer'>Sign In/Login</Link>
            </div>
            <ul className='hidden md:flex md:w-full md:h-full md:justify-evenly md:items-center gap-8 z-[100]'>
                <li><Link to='/ratings' className='font-poppins font-medium cursor-pointer'>Ratings</Link></li>
                <li><Link to='/contact' className='font-poppins font-medium cursor-pointer'>Contact us</Link></li>
                <li><Link to='/signup' className='font-medium bg-primary w-32 flex justify-center items-center text-white rounded-xl h-12 cursor-pointer'>Sign In/Login</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
