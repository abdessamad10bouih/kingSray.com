import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { useAuth } from '../context/AuthContext'
import "@fontsource/poppins";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUserCircle } from '@fortawesome/free-regular-svg-icons';
import { faGear, faHouse, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import Badge from '@mui/material/Badge';

const shapeStyles = { bgcolor: 'primary.main', width: 40, height: 40 };
const shapeCircleStyles = { borderRadius: '50%' };


const Navbar = () => {
    const { userAuthentified } = useAuth();
    const [menuVisble, setMenuVisible] = useState(false);

    const menuVisiblity = () => {
        setMenuVisible(!menuVisble);
    }

    const menuVariants = {
        hidden: { opacity: 0, y: '-100px' },
        visible: { opacity: 1, y: '0px', transition: { delayChildren: 0.3 } }
    };

    const liVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5 } }
    };

    return (
        <nav className='md:w-[80%] fixed top-0 z-[200] w-[95%] mt-5 h-24 justify-center bg-white rounded-2xl items-center md:mt-4 flex'>
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
            <div className={`w-64 rounded-2xl ${menuVisble ? 'flex' : 'hidden'} flex-col h-64 bg-white absolute z-[200] md:right-32 right-10 shadow-xl md:top-20 top-24 p-5`}>
                <motion.ul
                    variants={menuVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.li variants={liVariants} className='border-b gap-2 flex items-center border-primary h-14 w-full'>
                        <FontAwesomeIcon
                            icon={faUserCircle}
                            alt="User Profile"
                            className='w-6 h-6 rounded-full text-primary object-cover cursor-pointer'
                        />
                        <Link className='text-md font-poppins'>Profile</Link>
                    </motion.li>
                    <motion.li variants={liVariants} className='border-b gap-2 flex items-center border-primary h-14 w-full'>
                        <FontAwesomeIcon
                            icon={faHouse}
                            alt="User Profile"
                            className='w-6 h-6 rounded-full text-primary object-cover cursor-pointer'
                        />
                        <Link className='text-md font-poppins'>My appointments</Link>
                    </motion.li>
                    <motion.li variants={liVariants} className='border-b gap-2 flex items-center border-primary h-14 w-full'>
                        <FontAwesomeIcon
                            icon={faGear}
                            alt="User Profile"
                            className='w-6 h-6 rounded-full text-primary object-cover cursor-pointer'
                        />
                        <Link className='text-md font-poppins'>Settings</Link>
                    </motion.li>
                    <motion.li variants={liVariants} className='gap-2 flex items-center border-primary h-14 w-full'>
                        <FontAwesomeIcon
                            icon={faRightFromBracket}
                            alt="User Profile"
                            className='w-6 h-6 rounded-full text-primary object-cover cursor-pointer'
                        />
                        <Link className='text-md font-poppins'>Log Out</Link>
                    </motion.li>
                </motion.ul>
            </div>
            <div className='md:w-[40%] gap-4 w-full h-full flex justify-center items-center'>
                {userAuthentified ? (
                    <>
                        <Badge color="success" badgeContent={8} variant="dot"><FontAwesomeIcon icon={faBell} className='w-10 h-10 text-primary rounded-full object-cover cursor-pointer' /></Badge>
                        <FontAwesomeIcon
                            onClick={menuVisiblity}
                            icon={faUserCircle}
                            alt="User Profile"
                            className='w-10 h-10 text-primary rounded-full object-cover cursor-pointer'
                        />
                    </>
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
