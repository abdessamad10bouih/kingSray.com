import React, { useState } from 'react';
import Navbar from '../components/navBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faEye, faEyeSlash, faLock, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import man from '../assets/man.png';
import logo from '../assets/logo.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../css/toaster.css'
import Loading from '../components/loading ';
import { Link } from 'react-router-dom';

const Registre = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(faEye);
    const [username, setUsername] = useState('');
    const [text, setText] = useState(true);
    const [numColor, setnumColor] = useState('bg-red-600');
    const [upperColor, setupperColor] = useState('bg-red-600');
    const [lowerColor, setlowerColor] = useState('bg-red-600');
    const [loading, setLoading] = useState(true);

    setInterval(() => {
        setLoading(false);
    }, 1000)

    if (loading) {
        return <Loading />;
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (confirmPassword !== password) {
            toast.error('Passwords do not match');
            return;
        }

        const response = await fetch("http://localhost/shop/backend/login.php", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, email, password }),
        });

        const data = await response.json();

        if (data.success) {
            toast.success('Registration successful');
            window.location.href = `/otp.jsx?email=${email}`;
        } else {
            toast.error(data.error || 'An error occurred');
        }
    };

    const hatchingPass = () => {
        setText(!text)
        setShowPassword(showPassword === faEye ? faEyeSlash : faEye);
    }


    const verifyEmail = () => {
        let emailRegex = /^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        if (!emailRegex.test(email)) {
            toast.error('Please Enter a correct Email');
        }
    }

    const verifyPassword = (e) => {

        const value = e.target.value;
        setPassword(value)

        const numRegx = /\d/;
        const upperRegx = /[A-Z]/;
        const lowerRegx = /[a-z]/;

        const colors = (regex, value) => (regex.test(value) ? 'bg-green-600' : 'bg-red-600')

        setnumColor(colors(numRegx, value));
        setupperColor(colors(upperRegx, value));
        setlowerColor(colors(lowerRegx, value));

        // if (numRegx.test(value)) {
        //     setnumColor('bg-green-600')
        // }else{
        //     setnumColor('bg-red-600')
        // }
        // if (upperRegx.test(value)) {
        //     setupperColor('bg-green-600')
        // }else{
        //     setupperColor('bg-red-600')
        // }
        // if (lowerRegx.test(value)) {
        //     setlowerColor('bg-green-600')
        // }else{
        //     setlowerColor('bg-red-600')
        // }
        }




        return (
            <>
                <header className="w-full flex flex-col justify-center items-center">
                    <Navbar />
                    <div className="md:w-[60%] w-full h-screen md:h-full md:mt-14 flex justify-center items-center">
                        <div className="w-[80%] md:w-full md:gap-8 gap-4 h-[90%] flex justify-center items-center">
                            <div className="hidden md:w-full md:order-2 md:h-full md:flex md:justify-center md:items-center">
                                <img src={`./${man}`} className='w-52  mb-10' alt="man" />
                            </div>
                            <form onSubmit={handleSubmit} method='POST' className="w-full z-[100] flex flex-col gap-4 items-center justify-center">
                                <img src={`./${logo}`} className="md:hidden" alt="Logo" />
                                <div className="w-full h-16 rounded-2xl flex items-center gap-2 pl-4 bg-white">
                                    <FontAwesomeIcon icon={faUserCircle} className="text-xl text-primary" />
                                    <input
                                        type="text"
                                        className="w-full h-full bg-white pl-2 rounded-2xl focus:outline-none font-poppins"
                                        placeholder="Username"
                                        value={username}
                                        name="username"
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                </div>
                                <div className="w-full h-16 rounded-2xl flex items-center gap-2 pl-4 bg-white">
                                    <FontAwesomeIcon icon={faEnvelope} className="text-xl text-primary" />
                                    <input
                                        type="email"
                                        className="w-full h-full bg-white pl-2 rounded-2xl focus:outline-none font-poppins"
                                        placeholder="Email"
                                        value={email}
                                        name="email"
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="w-full h-16 pr-5 rounded-2xl flex items-center gap-2 pl-4 bg-white">
                                    <FontAwesomeIcon icon={faLock} className="text-xl text-primary" />
                                    <input
                                        type={text ? 'password' : 'text'}
                                        className="w-full h-full bg-white pl-2 rounded-2xl focus:outline-none font-poppins"
                                        placeholder="Password"
                                        value={password}
                                        name="password"
                                        onChange={verifyPassword}
                                    />
                                    <FontAwesomeIcon onClick={hatchingPass} icon={showPassword} className="text-2xl cursor-pointer text-primary" />
                                </div>
                                <div className='w-full h-16 pr-5 rounded-2xl flex flex-col justify-center gap-2 pl-4'>
                                    <div className='w-full h-full flex items-center gap-2'>
                                        <div onChange={verifyPassword} className={`w-3 h-3 ${lowerColor} rounded-full`}></div>
                                        <h1 className='font-poppins text-sm'>Lower character</h1>
                                    </div>
                                    <div className='w-full h-full flex items-center gap-2'>
                                        <div onChange={verifyPassword} className={`w-3 h-3 ${numColor} rounded-full`}></div>
                                        <h1 className='font-poppins text-sm'>Numbers</h1>
                                    </div>
                                    <div className='w-full h-full flex items-center gap-2'>
                                        <div onChange={verifyPassword} className={`w-3 h-3 ${upperColor} rounded-full`}></div>
                                        <h1 className='font-poppins text-sm'>Upper characters</h1>
                                    </div>
                                </div>
                                <div className="w-full h-16 rounded-2xl flex items-center gap-2 pl-4 bg-white">
                                    <FontAwesomeIcon icon={faLock} className="text-xl text-primary" />
                                    <input
                                        type={text ? 'password' : 'text'}
                                        className="w-full h-full bg-white pl-2 rounded-2xl focus:outline-none font-poppins"
                                        placeholder="Repeat Password"
                                        value={confirmPassword}
                                        name="email"
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                                </div>
                                <div className="w-full h-16">
                                    <button name='register' onClick={verifyEmail} className="w-full h-full bg-primary flex justify-center items-center rounded-2xl text-xl text-white font-poppins">
                                        Next Step
                                    </button>
                                    <ToastContainer />
                                </div>
                            </form>
                        </div>
                    </div >
                </header >
            </>
        );
    };

    export default Registre;
