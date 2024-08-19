import React, { useEffect, useState } from 'react';
import Loading from '../components/loading ';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUserCircle } from '@fortawesome/free-regular-svg-icons';
import { faGear, faHomeUser } from '@fortawesome/free-solid-svg-icons';

const Menu = () => {
    return (
        <>
            <div className='w-72 h-full border-red-600 border-2 flex flex-col justify-center'>
                <div className='w-full h-40 border-red-600 border flex items-center p-5'>
                    <h1 className='font-poppins text-3xl font-extrabold'>KINGSRAY HOTEL</h1>
                </div>
                <div className='w-full h-56 flex flex-col justify-center'>
                    <div className='w-full h-14 flex items-center gap-2 cursor-pointer hover:bg-hover rounded-2xl'>
                        <FontAwesomeIcon icon={faUserCircle} className='text-2xl ml-2 text-primary' />
                        <h1 className='font-poppins text-primary'>My Informations</h1>
                    </div>
                    <div className='w-full h-14 flex items-center gap-2 cursor-pointer hover:bg-hover rounded-2xl'>
                        <FontAwesomeIcon icon={faGear} className='text-2xl ml-2 text-primary' />
                        <h1 className='font-poppins text-primary'>Settings</h1>
                    </div>
                    <div className='w-full h-14 flex items-center gap-2 cursor-pointer hover:bg-hover rounded-2xl'>
                        <FontAwesomeIcon icon={faHomeUser} className='text-2xl ml-2 text-primary' />
                        <h1 className='font-poppins text-primary'>My Appoitements</h1>
                    </div>
                    <div className='w-full h-14 flex items-center gap-2 cursor-pointer hover:bg-hover rounded-2xl'>
                        <FontAwesomeIcon icon={faBell} className='text-2xl ml-3 text-primary' />
                        <h1 className='font-poppins text-primary'>Notifications</h1>
                    </div>
                </div>
            </div>
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
        <div className='w-full h-screen flex items-center'>
            <Menu />
        </div>
    )
}

export default Profile
