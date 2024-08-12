import React, { useState } from 'react';
import Navbar from '../components/navBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faEye, faEyeSlash, faLock } from '@fortawesome/free-solid-svg-icons';
import googleImg from '../assets/google.png';
import facebookpng from '../assets/facebook.png';
import logo from '../assets/logo.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../components/loading ';
import { Link } from 'react-router-dom';

const Registre = () => {
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState({ email: '' });
    const [loading, setLoading] = useState(true);

    setInterval(() => {
        setLoading(false);
    }, 1000)

    if (loading) {
        return <Loading />;
    }

    const verifyEmail = () => {
        let errorOutput = '';
        if (!email) {
            errorOutput = 'You need to write an email';
            toast(errorOutput);
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errorOutput = 'Email address is invalid';
            toast(errorOutput);
        }

        setErrors((prevErrors) => ({ ...prevErrors, email: errorOutput }));
        return !errorOutput;
    };



    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {
            email: email,
            password: password,
        };

        const apiLogin = 'http://localhost/shop/backend/login.php';

        fetch(apiLogin, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    toast('Form submitted successfully! OTP has been sent.');
                } else {
                    toast('Failed to submit the form: ' + data.error);
                }
            })
            .catch((error) => {
                toast('An error occurred: ' + error.message);
            });
    };

    return (
        <>
            <header className="w-full h-screen flex flex-col justify-center items-center">
                <Navbar />
                <div className="md:w-[60%] w-full h-screen flex justify-center items-center">
                    <div className="w-[80%] md:w-[60%] md:gap-8 gap-4 h-[90%] flex flex-col justify-center items-center">
                        <form onSubmit={handleSubmit} className="w-full z-[100] flex flex-col gap-4 items-center justify-center">
                            <img src={logo} className="md:hidden" alt="Logo" />
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
                            <div className="w-full h-16">
                                <Link to={`/login/createPassword`} onClick={verifyEmail} className="w-full h-full bg-primary flex justify-center items-center rounded-2xl text-xl text-white font-poppins">
                                Next Step
                            </Link>
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
