import React, { useState, useEffect, useContext } from 'react';
import Navbar from '../components/navBar';
import man from '../assets/man.png';
import { useAuth } from '../context/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import Button from '../components/button';
import logo from '../assets/logo.png';
import Loading from '../components/loading ';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Registre from '../register/registre';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Signup = () => {
    const { setUserAuthentified } = useAuth();
    const [loading, setLoading] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const username = localStorage.getItem('username')

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <Loading />;
    }

    const handleSubmit = async (e) => {
        e.preventDefault(); 

        const url = 'http://localhost/shop/backend/signup.php';
        const frData = new FormData();
        frData.append('email', email);
        frData.append('pass', password);
        try {
            const response = await axios.post(url, frData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            const data = response.data;
            if (data.success) {
                localStorage.setItem('userAuthentified', 'true');
                localStorage.setItem('userData', JSON.stringify(data.user));
                setUserAuthentified(true);
                window.location.href = `/?username=${username}`;
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.error('There was a network error!', error);
            toast.error('Network error, please try again later.');
        }
    }

    return (
        <>
            <header className='w-full h-screen flex flex-col justify-center items-center'>

                <Navbar />
                <div className='md:w-[80%] w-full h-screen flex justify-center items-center'>
                    <div className='w-[80%] md:w-full md:gap-8 gap-4 h-[90%] flex justify-center items-center'>
                        <div className="hidden md:w-full md:order-2 md:h-full md:flex md:justify-center md:items-center">
                            <img src={man} className='w-52  mb-10' alt="man" />
                        </div>
                        <form onSubmit={handleSubmit} className='w-full h-full z-[100] flex flex-col gap-4 items-center justify-center'>
                            <img src={logo} className='md:hidden' alt="Logo" />
                            <div className='w-[80%] h-16 rounded-2xl flex items-center gap-2 pl-4 bg-white'>
                                <FontAwesomeIcon icon={faEnvelope} className='text-xl text-primary' />
                                <input
                                    type="email"
                                    className='w-full h-full bg-white pl-2 rounded-2xl focus:outline-none font-poppins'
                                    placeholder='Email'
                                    name='email'
                                    value={email}
                                    id='email'
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className='w-[80%] h-16 rounded-2xl flex items-center gap-2 pl-4 bg-white'>
                                <FontAwesomeIcon icon={faLock} className='text-xl text-primary' />
                                <input
                                    type="password"
                                    className='w-full h-full bg-white pl-2 rounded-2xl focus:outline-none font-poppins'
                                    placeholder='Password'
                                    name='pass'
                                    value={password}
                                    id='pass'
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className='w-[80%] h-16'>
                                <button type='submit' className='w-full h-16 bg-primary rounded-2xl text-xl text-white'>login</button>
                                <ToastContainer />
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
