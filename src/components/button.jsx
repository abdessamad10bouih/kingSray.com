import React from 'react'

const Button = ({className, children, type}) => {
  return (
    <a href="" type={type} className={`w-40 rounded-2xl h-[6vh] bg-primary flex items-center justify-center text-white font-poppins ${className}`} >{children}</a>
  )
}

export default Button
