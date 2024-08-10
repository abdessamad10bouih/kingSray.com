import React from 'react';
import logo from '../assets/logo.png';

const Footer = () => {
   const date = new Date();
   const year = date.getFullYear();
  return (
    <footer className='w-full h-28 bg-primary flex justify-evenly items-center'>
        <img src={logo} className='w-36' alt="" />
        <h1 className='text-white '>@{year} All rights are reserved KingsRay Hotel</h1>
    </footer>
  )
}

export default Footer
