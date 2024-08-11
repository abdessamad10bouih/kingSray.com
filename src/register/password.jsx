import React from 'react'

const Password = () => {

    const [errors, setErrors] = useState({ password: '', confirmPassword: '' });
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const verifyPassword = () => {
        const regxMaj = /[A-Z]/;
        const regxMin = /[a-z]/;
        const regxNum = /[0-9]/;
        let passError = '';
        let confirmPassError = '';

        if (!password) {
            passError = 'You need to write a password';
            toast(passError);
        } else if (!regxMaj.test(password) || !regxMin.test(password) || !regxNum.test(password)) {
            passError = 'Password should have at least one uppercase letter, one lowercase letter, and one number';
            toast(passError);
        } else if (!confirmPass) {
            confirmPassError = 'You need to confirm your password';
            toast(confirmPassError);
        } else if (password !== confirmPass) {
            confirmPassError = 'Passwords do not match';
            toast(confirmPassError);
        }

        setErrors((prevErrors) => ({
            ...prevErrors,
            password: passError,
            confirmPassword: confirmPassError,
        }));
        return !passError && !confirmPassError;
    };

  return (
      <header className="w-full h-screen flex flex-col justify-center items-center">
          <Navbar />
          <div className="md:w-[60%] w-full h-screen flex justify-center items-center">
              <div className="w-[80%] md:w-[60%] md:gap-8 gap-4 h-[90%] flex flex-col justify-center items-center">
                  <form onSubmit={handleSubmit} className="w-full z-[100] flex flex-col gap-4 items-center justify-center">
                      <img src={logo} className="md:hidden" alt="Logo" />
                              <img src={logo} className="md:hidden" alt="Logo" />
                              <div className="w-full h-16 rounded-2xl flex items-center gap-2 pl-4 pr-4 bg-white">
                                  <FontAwesomeIcon icon={faLock} className="text-xl text-primary" />
                                  <input
                                      type={passwordVisible ? 'text' : 'password'}
                                      className="w-full h-full bg-white pl-2 rounded-2xl focus:outline-none font-poppins"
                                      placeholder="Password"
                                      value={password}
                                      onChange={(e) => setPassword(e.target.value)}
                                  />
                                  <FontAwesomeIcon onClick={togglePasswordVisibility} icon={passwordVisible ? faEyeSlash : faEye} className="text-2xl text-primary cursor-pointer z-[100]" />
                              </div>
                              <div className="w-full h-16 rounded-2xl flex items-center gap-2 pl-4 pr-4 bg-white">
                                  <FontAwesomeIcon icon={faLock} className="text-xl text-primary" />
                                  <input
                                      type={passwordVisible ? 'text' : 'password'}
                                      className="w-full h-full bg-white pl-2 rounded-2xl focus:outline-none font-poppins"
                                      placeholder="Confirm Password"
                                      value={confirmPass}
                                      onChange={(e) => setConfirmPass(e.target.value)}
                                  />
                              </div>
                              <div className="w-full h-16">
                                  <button className="w-full h-full bg-primary flex justify-center items-center rounded-2xl text-xl text-white font-poppins">
                                      Next Step
                                  </button>
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

export default Password
