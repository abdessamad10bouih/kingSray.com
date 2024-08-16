import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { useAuth } from '../context/AuthContext'
import "@fontsource/poppins";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';

const Navbar = () => {
    const { userAuthentified } = useAuth();

    return (
        <nav className='md:w-[80%] w-[95%] mt-5 h-24 justify-center bg-white rounded-2xl items-center md:mt-4 flex'>
            <div className='w-full md:w-[40%] md:h-full flex justify-center items-center'>
                <img src={logo} className='md:w-28 w-20' alt="Logo" />
            </div>
            <ul className='hidden md:w-full md:h-full md:flex md:justify-center md:items-center md:gap-16'>
                <li className='font-semibold font-poppins'>
                    <Link to="/">Home</Link>
                </li>
                <li className='font-semibold font-poppins'>
                    <Link to="/about">About us</Link>
                </li>
                <li className='font-semibold font-poppins'>
                    <Link to="/rooms">Rooms</Link>
                </li>
                <li className='font-semibold font-poppins'>
                    <Link to="/contact">Contact us</Link>
                </li>
            </ul>
            <div className='w-64 rounded-2xl h-60 bg-white absolute z-[200] top-0'>
                ma33333"
            </div>
            <div className='md:w-[40%] w-full h-full flex justify-center items-center'>
                {userAuthentified ? (
                    <FontAwesomeIcon
                        icon={faUserCircle}
                        alt="User Profile"
                        className='w-12 h-12 rounded-full object-cover cursor-pointer'
                    />
                ) : (
                    <Link to='/login' className='w-4/5 h-[60%] bg-primary rounded-3xl flex justify-center items-center font-semibold font-poppins text-white'>
                        Log In / Sign Up
                    </Link>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
