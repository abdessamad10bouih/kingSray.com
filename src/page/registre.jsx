import React, { useState } from 'react';
import Navbar from '../components/navBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faEye, faEyeSlash, faLock } from '@fortawesome/free-solid-svg-icons';
import googleImg from '../assets/google.png';
import facebookpng from '../assets/facebook.png';
import logo from '../assets/logo.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Registre = () => {
    const [email, setEmail] = useState('');
    const [step, setStep] = useState('firstStep');
    const [text, hatchText] = useState(false)
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [errors, setErrors] = useState({ email: '', password: '', confirmPassword: '' });
    const [icon, setIcon] = useState(faEye)

    const verifyEmail = (e) => {
        e.preventDefault();
        let errorOutput = '';
        if (!email) {
            errorOutput = 'You need to write an email';
            toast(errorOutput);
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errorOutput = 'Email address is invalid';
            toast(errorOutput);
        }

        setErrors({ ...errors, email: errorOutput });
        return !errorOutput;
    };

    const iconChange = () => {
        hatchText(!text)
        setIcon(text ? faEye : faEyeSlash)
    }

    const verifyPassword = () => {
        const regxMaj = /[A-Z]/;
        const regxMin = /[a-z]/;
        const regxNum = /[0-9]/;
        let passError = '';
        let confirmPasserror = '';
        if (!password) {
            passError = 'You need to write a password';
            toast(passError);
        } else if (!regxMaj.test(password) || !regxMin.test(password) || !regxNum.test(password)) {
            passError = 'Password should have at least one uppercase letter, one lowercase letter, and one number';
            toast(passError);
        } else if (!confirmPass) {
            confirmPasserror = 'You need to confirm your password';
            toast(confirmPasserror);
        } else if (password !== confirmPass) {
            confirmPasserror = 'Passwords do not match';
            toast(confirmPasserror);
        }
        setErrors({ ...errors, password: passError, confirmPassword: confirmPasserror });
        return !passError && !confirmPasserror;
    };


    const nextPages = (e) => {
        e.preventDefault();
        if (step === 'firstStep') {
            if (verifyEmail(e)) {
                setStep('secondStep');
            }
        } else if (step === 'secondStep') {
            if (verifyPassword(e)) {
                setStep('thirdStep');
            }
        }
    };

    return (
        <>
            <header className='w-full h-screen flex flex-col justify-center items-center'>
                <Navbar />
                <div className='md:w-[60%] w-full h-screen flex justify-center items-center'>
                    <div className='w-[80%] md:w-[60%] md:gap-8 gap-4 h-[90%] flex flex-col justify-center items-center'>
                        {step === 'firstStep' && (
                            <form className='w-full z-[100] flex flex-col gap-4 items-center justify-center' action="">
                                <img src={logo} className='md:hidden' alt="Logo" />
                                <div className='w-full h-16 rounded-2xl flex items-center gap-2 pl-4 bg-white'>
                                    <FontAwesomeIcon icon={faEnvelope} className='text-xl text-primary' />
                                    <input
                                        type="email"
                                        className='w-full h-full bg-white pl-2 rounded-2xl focus:outline-none font-poppins'
                                        placeholder='Email'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className='w-full h-16'>
                                    <button onClick={nextPages} className='w-full h-full bg-primary flex justify-center items-center rounded-2xl text-xl text-white font-poppins'>
                                        Next Step
                                    </button>
                                    <ToastContainer />
                                </div>
                            </form>
                        )}
                        {step === 'secondStep' && (
                            <form className='w-full h-full z-[100] flex flex-col gap-4 items-center justify-center' action="">
                                <img src={logo} className='md:hidden' alt="Logo" />
                                <div className='w-full h-16 rounded-2xl flex items-center gap-2 pl-4 pr-4 bg-white'>
                                    <FontAwesomeIcon icon={faLock} className='text-xl text-primary' />
                                    <input
                                        type={text ? 'password' : 'text'}
                                        className='w-full h-full bg-white pl-2 rounded-2xl focus:outline-none font-poppins'
                                        placeholder='Password'
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <FontAwesomeIcon onClick={iconChange} icon={icon} className='text-2xl text-primary cursor-pointer z-[100]' />
                                </div>
                                <div className='w-full h-16 rounded-2xl flex items-center gap-2 pl-4 pr-4 bg-white'>
                                    <FontAwesomeIcon icon={faLock} className='text-xl text-primary' />
                                    <input
                                        type={text ? 'password' : 'text'}
                                        className='w-full h-full bg-white pl-2 rounded-2xl focus:outline-none font-poppins'
                                        placeholder='Confirm Password'
                                        value={confirmPass}
                                        onChange={(e) => setConfirmPass(e.target.value)}
                                    />
                                </div>
                                <div className='w-full h-16'>
                                    <button onClick={nextPages} className='w-full h-full bg-primary flex justify-center items-center rounded-2xl text-xl text-white font-poppins'>
                                        Next Step
                                    </button>
                                    <ToastContainer />
                                </div>
                            </form>
                        )}
                        {step === 'thirdStep' && (
                            <div className='w-full h-full z-[100] flex flex-col gap-4 items-center justify-center' action="">
                                <img src={logo} className='md:hidden' alt="Logo" />
                                <div className='w-full h-full rounded-2xl flex flex-col justify-center items-center gap-2 md:pl-4 pr-2 md:pr-4 pl-2'>
                                    <h1 className='font-medium font-poppins'>We have sent a verification code To <span className='font-extrabold'>{email}</span> Type it below :</h1>
                                    <div className='w-full h-24 flex gap-4 md:justify-center'>
                                        <input type="text" className='w-16 md:w-20 md:pl-8 flex justify-center items-center text-2xl font-poppins p-6 focus:outline-primary rounded-2xl h-20 bg-white' />
                                        <input type="text" className='w-16 md:w-20 md:pl-8 flex justify-center items-center text-2xl font-poppins p-6 focus:outline-primary rounded-2xl h-20 bg-white' />
                                        <input type="text" className='w-16 md:w-20 md:pl-8 flex justify-center items-center text-2xl font-poppins p-6 focus:outline-primary rounded-2xl h-20 bg-white' />
                                        <input type="text" className='w-16 md:w-20 md:pl-8 flex justify-center items-center text-2xl font-poppins p-6 focus:outline-primary rounded-2xl h-20 bg-white' />
                                    </div>
                                    <button onClick={nextPages} className='w-full h-16 bg-primary flex justify-center items-center rounded-2xl text-xl text-white font-poppins'>Verify</button>
                                </div>
                            </div>
                        )}
                        <h1 className='w-full h-5 flex items-center justify-center font-poppins relative pl-2 pr-2 before:border before:w-20 md:before:w-52 md:after:w-52 after:border after:w-20'>
                            Or Sign Up with
                        </h1>
                        <div className='w-full flex gap-4 flex-col items-center justify-center h-36 md:h-44'>
                            <div className='w-full cursor-pointer flex gap-3 h-16 bg-white items-center rounded-2xl justify-center'>
                                <img src={googleImg} alt="Google Icon" className='w-8 h-8' />
                                <h1 className='text-primary text-md font-poppins'>Sign Up with Google</h1>
                            </div>
                            <div className='w-full cursor-pointer flex gap-3 h-16 bg-blue-900 items-center rounded-2xl justify-center'>
                                <img src={facebookpng} alt="Facebook Icon" className='w-8 h-8' />
                                <h1 className='text-white text-md font-poppins'>Sign Up with Facebook</h1>
                            </div>
                            <h1 className='font-poppins'>Already have an account? <span className='text-primary cursor-pointer'>Login here</span> </h1>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Registre;
