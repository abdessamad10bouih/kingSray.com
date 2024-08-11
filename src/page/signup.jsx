import React, { useState, useEffect } from 'react';
import Navbar from '../components/navBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import Button from '../components/button';
import googleImg from '../assets/google.png';
import facebookpng from '../assets/facebook.png';
import logo from '../assets/logo.png';
import Loading from '../components/loading ';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Signup = () => {
    const [loading, setLoading] = useState(true);

    setInterval(() => {
        setLoading(false);
    }, 1000)

    if (loading) {
        return <Loading />;
    }


    // const verifyEmail = (e) => {
    //     const mailRegx = '/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/'
    //     const email = e.target.value;
    //     if (email.match(mailRegx)) {
    //         setCurrentpage('nextStep');
    //     }
    //     else{
    //         const notify = () => toast('Email is Incorrect')
    //     }
    // }

    return (
        <>
            <header className='w-full h-screen flex flex-col justify-center items-center'>
                <Navbar />
                    <div className='md:w-[60%] w-full h-screen flex justify-center items-center'>
                        <div className='w-[80%] md:w-[60%] md:gap-8 gap-4 h-[90%] flex flex-col justify-center items-center'>
                            <form className='w-full z-[100] flex flex-col gap-4 items-center justify-center' action="">
                                <img src={logo} className='md:hidden' alt="Logo" />
                                <div className='w-full h-16 rounded-2xl flex items-center gap-2 pl-4 bg-white'>
                                    <FontAwesomeIcon icon={faEnvelope} className='text-xl text-primary' />
                                    <input
                                        type="email"
                                        className='w-full h-full bg-white pl-2 rounded-2xl focus:outline-none font-poppins'
                                        placeholder='Email'
                                    />
                                </div>
                                <div className='w-full h-16 rounded-2xl flex items-center gap-2 pl-4 bg-white'>
                                    <FontAwesomeIcon icon={faLock} className='text-xl text-primary' />
                                    <input
                                        type="password"
                                        className='w-full h-full bg-white pl-2 rounded-2xl focus:outline-none font-poppins'
                                        placeholder='Password'
                                    />
                                </div>
                                <div className='w-full h-16'>
                                    <Button type={`submit`} className={`w-full h-full`}>Log In</Button>
                                </div>
                            </form>
                            <h1 className='w-full h-5 flex items-center justify-center font-poppins relative pl-2 pr-2 before:border before:w-20 md:before:w-52 md:after:w-52 after:border after:w-20'>
                                Or Sign Up with
                            </h1>
                            <div className='w-full flex gap-4 flex-col items-center justify-center h-36 md:h-44'>
                                <div className='w-full cursor-pointer flex gap-3 h-16 bg-white items-center rounded-2xl justify-center'>
                                    <img src={`./${googleImg}`} alt="Google Icon" className='w-8 h-8' />
                                    <h1 className='text-primary text-md font-poppins'>Sign Up with Google</h1>
                                </div>
                                <div className='w-full cursor-pointer flex gap-3 h-16 bg-blue-900 items-center rounded-2xl justify-center'>
                                    <img src={`./${facebookpng}`} alt="Facebook Icon" className='w-8 h-8' />
                                    <h1 className='text-white text-md font-poppins'>Sign Up with Facebook</h1>
                                </div>
                                <h1 className='font-poppins'>You don't have an account? <Link to='/signup' className='text-primary cursor-pointer'>Sign Up here</Link> </h1>
                            </div>
                        </div>
                    </div>
            </header>
        </>
    );
};

export default Signup;
