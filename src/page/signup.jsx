import React, { useState, useEffect } from 'react';
import Navbar from '../components/navBar';
import man from '../assets/man.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import Button from '../components/button';
import logo from '../assets/logo.png';
import Loading from '../components/loading ';
import { Link } from 'react-router-dom';
import bgImg from '../assets/bgImg.png'
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
                {/* <div className='w-full z-[-10] h-full absolute top-0 right-0'>
                    <img src={bgImg} alt="background" className='w-full h-full object-contain'></img>
                </div> */}
                <Navbar />
                    <div className='md:w-[80%] w-full h-screen flex justify-center items-center'>
                        <div className='w-[80%] md:w-full md:gap-8 gap-4 h-[90%] flex justify-center items-center'>
                            <div className="hidden md:w-full md:order-2 md:h-full md:flex md:justify-center md:items-center"> 
                                <img src={man} className='w-52  mb-10' alt="man" />
                            </div>
                            <form className='w-full h-full z-[100] flex flex-col gap-4 items-center justify-center' action="">
                                <img src={logo} className='md:hidden' alt="Logo" />
                                <div className='w-[80%] h-16 rounded-2xl flex items-center gap-2 pl-4 bg-white'>
                                    <FontAwesomeIcon icon={faEnvelope} className='text-xl text-primary' />
                                    <input
                                        type="email"
                                        className='w-full h-full bg-white pl-2 rounded-2xl focus:outline-none font-poppins'
                                        placeholder='Email'
                                    />
                                </div>
                                <div className='w-[80%] h-16 rounded-2xl flex items-center gap-2 pl-4 bg-white'>
                                    <FontAwesomeIcon icon={faLock} className='text-xl text-primary' />
                                    <input
                                        type="password"
                                        className='w-full h-full bg-white pl-2 rounded-2xl focus:outline-none font-poppins'
                                        placeholder='Password'
                                    />
                                </div>
                                <div className='w-[80%] h-16'>
                                    <Button type={`submit`} className={`w-full h-full`}>Log In</Button>
                                </div>
                                <h1 className='font-semibold font-poppins text-sm'>You Don't have an account? <Link to='/signup' className='text-primary' >Sign Up Here</Link> </h1>
                            </form>
                        </div>
                    </div>
            </header>
        </>
    );
};

export default Signup;
