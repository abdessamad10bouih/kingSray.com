import React, { useEffect, useState } from 'react';
import {motion} from 'framer-motion';
import Loading from '../components/loading ';
import Button from '../components/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight, faBell, faCreditCard, faUserCircle } from '@fortawesome/free-regular-svg-icons';
import { faArrowRight, faCircleInfo, faClose, faGear, faHomeUser, faPencilSquare } from '@fortawesome/free-solid-svg-icons';
import profilePic from '../assets/profile.png';
const Menu = () => {
    const [menu, setMenu] = useState(true);
    const [icon, setIcon] = useState(faClose);
    const [active, setActive] = useState(true)

    const hideMenu = () => {
        setMenu(!menu);
        if (icon === faClose){
            setIcon(faArrowRight)
        }else{
            setIcon(faClose)
        }
    }

    const menuVariants = {
        hidden: {width: '4rem'},
        visible: {width: '18rem'},
    }
    return (
        <>
            <motion.div 
            variants={menuVariants}
            initial="hidden"
            animate={menu ? "visible" : "hidden"}
            className={`h-full border shadow-xl flex flex-col p-2 rounded-2xl`}>
                <div className='w-full flex justify-end items-center'>
                    <FontAwesomeIcon onClick={hideMenu} icon={icon} />
                </div>
                <div className={`w-full h-40 flex items-center ${menu ? 'p-5' : 'p-0'}`}>
                    <h1 className={`${menu ? 'flex' : 'hidden'} font-poppins text-3xl font-extrabold`}>KINGSRAY HOTEL</h1>
                    <h1 className={`${menu ? 'hidden' : 'flex'} font-poppins text-3xl font-extrabold`}>KH</h1>
                </div>
                <div className='w-full h-56 flex flex-col justify-center'>
                    <div className='w-full h-14 flex items-center gap-2 cursor-pointer hover:bg-hover rounded-2xl active:bg-secondary'>
                        <FontAwesomeIcon icon={faUserCircle} className='text-2xl ml-2 text-primary' />
                        <h1 className={`font-poppins text-primary ${menu ? 'flex' : 'hidden'}`}>My Informations</h1>
                    </div>
                    <div className='w-full h-14 flex items-center gap-2 cursor-pointer hover:bg-hover rounded-2xl'>
                        <FontAwesomeIcon icon={faGear} className='text-2xl ml-2 text-primary' />
                        <h1 className={`font-poppins text-primary ${menu ? 'flex' : 'hidden'}`}>Settings</h1>
                    </div>
                    <div className='w-full h-14 flex items-center gap-2 cursor-pointer hover:bg-hover rounded-2xl'>
                        <FontAwesomeIcon icon={faHomeUser} className='text-2xl ml-2 text-primary' />
                        <h1 className={`font-poppins text-primary ${menu ? 'flex' : 'hidden'}`}>My Appoitements</h1>
                    </div>
                    <div className='w-full h-14 flex items-center gap-2 cursor-pointer hover:bg-hover rounded-2xl'>
                        <FontAwesomeIcon icon={faBell} className='text-2xl ml-3 text-primary' />
                        <h1 className={`font-poppins text-primary ${menu ? 'flex' : 'hidden'}`}>Notifications</h1>
                    </div>
                </div>
                <div className='w-full h-[1px] bg-hover mt-3 mb-3'></div>
                <div className='w-full h-56 flex flex-col justify-center'>
                    <div className='w-full h-14 flex items-center gap-2 cursor-pointer hover:bg-hover rounded-2xl'>
                        <FontAwesomeIcon icon={faCircleInfo} className='text-2xl ml-2 text-primary' />
                        <h1 className={`font-poppins text-primary ${menu ? 'flex' : 'hidden'}`}>Info</h1>
                    </div>
                    <div className='w-full h-14 flex items-center gap-2 cursor-pointer hover:bg-hover rounded-2xl'>
                        <FontAwesomeIcon icon={faCreditCard} className='text-2xl ml-2 text-primary' />
                        <h1 className={`font-poppins text-primary ${menu ? 'flex' : 'hidden'}`}>Payment</h1>
                    </div>
                    <div className='w-full h-14 flex items-center gap-2 cursor-pointer hover:bg-hover rounded-2xl'>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} className='text-2xl ml-2 text-primary' />
                        <h1 className={`font-poppins text-primary ${menu ? 'flex' : 'hidden'}`}>Log Out</h1>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

const Profile = () => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 1000)
        return () => clearTimeout(timer);
    }, [])

    if (loading) {
        return <Loading />;
    }
    return (
        <div className='w-full overflow-hidden h-screen flex items-center '>
            <Menu />
            <div className='w-full h-full flex justify-center items-center'>
                <div className='w-[45%] relative h-full items-center justify-center flex pt-5'>
                    <img src={`./${profilePic}`} className='w-80 h-80' alt="" />
                    <FontAwesomeIcon icon={faPencilSquare} className='absolute bottom-[218px] right-28 cursor-pointer hover: text-3xl' />
                </div>
                <div className='w-full h-full  flex flex-col justify-center items-center'>
                    <div className='w-[80%] h-28 flex flex-col justify-center p-4'>
                        <h1 className='text-md font-poppins'>Username</h1>
                        <input type="text" className='w-full h-full rounded-2xl focus:outline-none pl-6 text-xl font-poppins' />
                    </div>
                    <div className='w-[80%] h-28 flex-col flex justify-center p-4'>
                        <h1 className='text-md font-poppins'>Email</h1>
                        <input type="text" className='w-full h-full rounded-2xl focus:outline-none pl-6 text-xl font-poppins' />
                    </div>
                    <Button className={`w-[77%] mt-1  h-16`}>Save Infos </Button>
                </div>
            </div>
        </div>
    )
}

export default Profile
