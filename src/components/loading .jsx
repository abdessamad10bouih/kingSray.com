import React from 'react';
import { motion } from "framer-motion"

const svgVariants = {
    hidden: {opacity: 0},
    visible: {
        opacity: 1
    }
}

const pathVariants = {
    hidden: {pathLength: 0},
    visible: {
        pathLength: 1,
        transition: {
            duration: 1,
            ease: "easeInOut",
            repeat: Infinity
        }
    }
}

const Loading = () => {

    return (
        <div className='w-full h-screen bg-primary fixed z-50 justify-center items-center flex flex-col'>
            <motion.svg variants={svgVariants} initial="hidden" animate="visible" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-24 text-white">
                <motion.path variants={pathVariants} initial="hidden" animate="visible" stroke-linecap="round" stroke-linejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819" />
            </motion.svg>
            <h1 className='text-white font-poppins'>Loading ... </h1>
        </div>
    )
}

export default Loading 
