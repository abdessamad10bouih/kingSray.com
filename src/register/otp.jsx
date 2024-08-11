import React from 'react'

const otp = () => {
  return (
      <header className="w-full h-screen flex flex-col justify-center items-center">
          <Navbar />
          <div className="md:w-[60%] w-full h-screen flex justify-center items-center">
              <div className="w-[80%] md:w-[60%] md:gap-8 gap-4 h-[90%] flex flex-col justify-center items-center">
                  <form onSubmit={handleSubmit} className="w-full z-[100] flex flex-col gap-4 items-center justify-center">
                          <div className="w-full h-full z-[100] flex flex-col gap-4 items-center justify-center">
                              <img src={logo} className="md:hidden" alt="Logo" />
                              <div className="w-full h-full rounded-2xl flex flex-col justify-center items-center gap-2 md:pl-4 pr-2 md:pr-4 pl-2">
                                  <h1 className="font-medium font-poppins">
                                      We have sent a verification code to <span className="font-extrabold">{email}</span>. Type it below:
                                  </h1>
                                  <div className="w-full h-24 flex gap-4 md:justify-center">
                                      <input type="text" className="w-16 md:w-20 md:pl-8 flex justify-center items-center text-2xl font-poppins p-6 focus:outline-primary rounded-2xl h-20 bg-white" />
                                      <input type="text" className="w-16 md:w-20 md:pl-8 flex justify-center items-center text-2xl font-poppins p-6 focus:outline-primary rounded-2xl h-20 bg-white" />
                                      <input type="text" className="w-16 md:w-20 md:pl-8 flex justify-center items-center text-2xl font-poppins p-6 focus:outline-primary rounded-2xl h-20 bg-white" />
                                      <input type="text" className="w-16 md:w-20 md:pl-8 flex justify-center items-center text-2xl font-poppins p-6 focus:outline-primary rounded-2xl h-20 bg-white" />
                                  </div>
                                  <button onClick={nextPages} className="w-full h-16 bg-primary flex justify-center items-center rounded-2xl text-xl text-white font-poppins">
                                      Verify
                                  </button>
                              </div>
                          </div>
                  </form>
                  <h1 className="w-full h-5 flex items-center justify-center font-poppins relative pl-2 pr-2 before:border before:w-20 md:before:w-52 md:after:w-52 after:border after:w-20">
                      Or Sign Up with
                  </h1>
                  <div className="w-full flex gap-4 flex-col items-center justify-center h-36 md:h-44">
                      <div className="w-full cursor-pointer flex gap-3 h-16 bg-white items-center rounded-2xl justify-center">
                          <img src={googleImg} alt="Google Icon" className="w-8 h-8" />
                          <h1 className="text-primary text-md font-poppins">Sign Up with Google</h1>
                      </div>
                      <div className="w-full cursor-pointer flex gap-3 h-16 bg-blue-900 items-center rounded-2xl justify-center">
                          <img src={facebookpng} alt="Facebook Icon" className="w-8 h-8" />
                          <h1 className="text-white text-md font-poppins">Sign Up with Facebook</h1>
                      </div>
                      <h1 className="font-poppins">
                          Already have an account? <span className="text-primary cursor-pointer">Login here</span>
                      </h1>
                  </div>
              </div>
          </div>
      </header>
  )
}

export default otp
