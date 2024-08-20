import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Loading from '../components/loading ';
import Button from '../components/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight, faBell, faCreditCard, faUserCircle } from '@fortawesome/free-regular-svg-icons';
import { faArrowRight, faCircleInfo, faClose, faGear, faHomeUser, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import profilePic from '../assets/profile.png';
import { useParams } from 'react-router-dom';
import { DatePicker, Space } from 'antd';
import { Input } from 'antd';

const Menu = () => {
    const [menu, setMenu] = useState(true);
    const [icon, setIcon] = useState(faClose);
    const [active, setActive] = useState('My Informations');

    const hideMenu = () => {
        setMenu(!menu);
        setIcon(icon === faClose ? faArrowRight : faClose);
    };

    const activeBar = (item) => {
        setActive(item);
    };

    const menuVariants = {
        hidden: { width: '4rem' },
        visible: { width: '18rem' },
    };

    const itemHover = {
        hover: {
            backgroundColor: '#176b8740',
            transition: {
                type: 'spring',
                stiffness: 300,
                damping: 20,
            },
        },
        active: {
            backgroundColor: '#176b8740',
            transition: {
                type: 'spring',
                stiffness: 300,
                damping: 20,
            },
        },
        inActive: {
            backgroundColor: '#ffffff',
            transition: {
                type: 'spring',
                stiffness: 300,
                damping: 20,
            },
        },
    };

    return (
        <motion.div
            variants={menuVariants}
            initial="hidden"
            animate={menu ? "visible" : "hidden"}
            className={`h-full border bg-white shadow-xl flex flex-col p-2 rounded-r-2xl`}
        >
            <div className="w-full flex justify-end items-center">
                <FontAwesomeIcon onClick={hideMenu} icon={icon} />
            </div>
            <div className={`w-full h-40 flex items-center ${menu ? 'p-5' : 'p-0'}`}>
                <h1 className={`${menu ? 'flex' : 'hidden'} font-poppins text-3xl font-extrabold`}>KINGSRAY HOTEL</h1>
                <h1 className={`${menu ? 'hidden' : 'flex'} font-poppins text-3xl font-extrabold`}>KH</h1>
            </div>
            <div className="w-full h-56 flex flex-col justify-center">
                <motion.div
                    variants={itemHover}
                    initial="inActive"
                    animate={active === 'My Informations' ? 'active' : 'inActive'}
                    whileHover="hover"
                    onClick={() => activeBar('My Informations')}
                    className={`w-full h-14 flex items-center gap-2 cursor-pointer hover:bg-hover rounded-2xl active:bg-secondary`}
                >
                    <FontAwesomeIcon icon={faUserCircle} className="text-2xl ml-2 text-primary" />
                    <h1 className={`font-poppins text-primary ${menu ? 'flex' : 'hidden'}`}>My Informations</h1>
                </motion.div>
                <motion.div
                    variants={itemHover}
                    initial="inActive"
                    animate={active === 'Settings' ? 'active' : 'inActive'}
                    whileHover="hover"
                    onClick={() => activeBar('Settings')}
                    className={`w-full h-14 flex items-center gap-2 cursor-pointer hover:bg-hover rounded-2xl active:bg-secondary`}
                >
                    <FontAwesomeIcon icon={faGear} className="text-2xl ml-2 text-primary" />
                    <h1 className={`font-poppins text-primary ${menu ? 'flex' : 'hidden'}`}>Settings</h1>
                </motion.div>
                <motion.div
                    variants={itemHover}
                    initial="inActive"
                    animate={active === 'My Appointments' ? 'active' : 'inActive'}
                    whileHover="hover"
                    onClick={() => activeBar('My Appointments')}
                    className={`w-full h-14 flex items-center gap-2 cursor-pointer hover:bg-hover rounded-2xl active:bg-secondary`}
                >
                    <FontAwesomeIcon icon={faHomeUser} className="text-2xl ml-2 text-primary" />
                    <h1 className={`font-poppins text-primary ${menu ? 'flex' : 'hidden'}`}>My Appointments</h1>
                </motion.div>
                <motion.div
                    variants={itemHover}
                    initial="inActive"
                    animate={active === 'Notifications' ? 'active' : 'inActive'}
                    whileHover="hover"
                    onClick={() => activeBar('Notifications')}
                    className={`w-full h-14 flex items-center gap-2 cursor-pointer hover:bg-hover rounded-2xl active:bg-secondary`}
                >
                    <FontAwesomeIcon icon={faBell} className="text-2xl ml-3 text-primary" />
                    <h1 className={`font-poppins text-primary ${menu ? 'flex' : 'hidden'}`}>Notifications</h1>
                </motion.div>
            </div>
            <div className="w-full h-[1px] bg-hover mt-3 mb-3"></div>
            <div className="w-full h-56 flex flex-col justify-center">
                <motion.div
                    variants={itemHover}
                    initial="inActive"
                    animate={active === 'Info' ? 'active' : 'inActive'}
                    whileHover="hover"
                    onClick={() => activeBar('Info')}
                    className={`w-full h-14 flex items-center gap-2 cursor-pointer hover:bg-hover rounded-2xl active:bg-secondary`}
                >
                    <FontAwesomeIcon icon={faCircleInfo} className="text-2xl ml-2 text-primary" />
                    <h1 className={`font-poppins text-primary ${menu ? 'flex' : 'hidden'}`}>Info</h1>
                </motion.div>
                <motion.div
                    variants={itemHover}
                    initial="inActive"
                    animate={active === 'Payment' ? 'active' : 'inActive'}
                    whileHover="hover"
                    onClick={() => activeBar('Payment')}
                    className={`w-full h-14 flex items-center gap-2 cursor-pointer hover:bg-hover rounded-2xl active:bg-secondary`}
                >
                    <FontAwesomeIcon icon={faCreditCard} className="text-2xl ml-2 text-primary" />
                    <h1 className={`font-poppins text-primary ${menu ? 'flex' : 'hidden'}`}>Payment</h1>
                </motion.div>
                <motion.div
                    variants={itemHover}
                    initial="inActive"
                    animate={active === 'Log out' ? 'active' : 'inActive'}
                    whileHover="hover"
                    onClick={() => activeBar('Log out')}
                    className={`w-full h-14 flex items-center gap-2 cursor-pointer hover:bg-hover rounded-2xl active:bg-secondary`}
                >
                    <FontAwesomeIcon icon={faArrowAltCircleRight} className="text-2xl ml-2 text-primary" />
                    <h1 className={`font-poppins text-primary ${menu ? 'flex' : 'hidden'}`}>Log Out</h1>
                </motion.div>
            </div>
        </motion.div>
    );
};

const Profile = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(profilePic);
    const [prof, setProf] = useState({});

    const fileInputRef = useRef(null);

    const fileOpen = () => {
        fileInputRef.current.click();
    };

    const onChange = (date, dateString) => {
        console.log(date, dateString);
    };

    const fileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setUser(URL.createObjectURL(file));
        }
    };

    useEffect(() => {
        const fetchUser = async () => {
            const url = `http://localhost/shop/backend/getUser.php?id=${id}`;

            try {
                const response = await fetch(url);
                const data = await response.json();
                if (data.success) {
                    setProf(data.data);
                    setUser(data.data.profilePic || profilePic);
                } else {
                    console.log(data.message);
                }
            } catch (err) {
                console.error('Fetch Error:', err);
            }
        };
        fetchUser();
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProf((prevProf) => ({
            ...prevProf,
            [name]: value,
        }));
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <Loading />;
    }
    return (
        <div className="w-full overflow-hidden h-screen flex items-center">
            <Menu />
            <div className="w-full h-full flex md:flex-row flex-col justify-center items-center">
                <div className="w-[50%] relative h-full items-center justify-center flex pt-5">
                    <div className="w-full rounded-full p-5 flex justify-center items-center">
                        <div className="md:w-full md:h-full w-96 rounded-full flex justify-center items-center">
                            <img
                                src={user}
                                alt="Profile Pic"
                                className="md:w-80 md:h-80 w-40 h-40 rounded-full object-cover border-4 border-white shadow-lg"
                            />
                        </div>
                    </div>
                    <div onClick={fileOpen} className="rounded-full flex justify-center items-center w-14 relative top-[120px] cursor-pointer right-[110px] h-12 border-2 bg-white">
                        <FontAwesomeIcon icon={faPencilAlt} className="text-2xl" />
                    </div>
                    <input type="file" ref={fileInputRef} onChange={fileChange} className="hidden" />
                </div>
                <div className="w-full h-full flex flex-col justify-center items-center">
                    <div className="w-[80%] h-28 flex flex-col justify-center p-4">
                        <h1 className="text-md font-poppins">Username</h1>
                        <Input
                            type="text"
                            name="username"
                            onChange={handleInputChange}
                            value={prof.username || ''}
                            className="w-full h-full rounded-2xl focus:outline-none pl-6 text-xl font-poppins"
                        />
                    </div>
                    <div className="w-[80%] h-28 flex-col flex justify-center p-4">
                        <h1 className="text-md font-poppins">Email</h1>
                        <Input
                            type="text"
                            name="email"
                            onChange={handleInputChange}
                            value={prof.email || ''}
                            className="w-full h-full rounded-2xl focus:outline-none pl-6 text-xl font-poppins"
                        />
                    </div>
                    <div className="w-[80%] h-28 flex-col flex justify-center p-4">
                        <h1 className="text-md font-poppins">Full Name</h1>
                        <Input
                            type="text"
                            name="fullName"
                            onChange={handleInputChange}
                            value={prof.fullName || ''}
                            className="w-full h-full rounded-2xl focus:outline-none pl-6 text-xl font-poppins"
                        />
                    </div>
                    <div className="w-[80%] h-28 flex-col flex justify-center p-4">
                        <h1 className="text-md font-poppins">Telephone</h1>
                        <Input
                            type="tel"
                            name="telephone"
                            onChange={handleInputChange}
                            value={prof.telephone || ''}
                            className="w-full h-full rounded-2xl focus:outline-none pl-6 text-xl font-poppins"
                        />
                    </div>
                    <div className="w-[80%] h-28 flex-col flex justify-center p-4">
                        <h1 className="text-md font-poppins">Date Of Birth</h1>
                        <Space className='w-full h-full' direction="vertical">
                            <DatePicker className="w-full h-14 rounded-2xl focus:outline-none pl-6 text-xl font-poppins" onChange={onChange} />
                        </Space>
                    </div>
                    <Button className={`md:w-[77%] mt-1 w-[75%] h-20 md:h-16`}>Save Infos</Button>
                </div>
            </div>
        </div>
    );
};

export default Profile;
