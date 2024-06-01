import React, { useState,useRef } from 'react';
import Header from './Header';
import { ValidateForm } from '../utils/ValidateForm';

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage,setErrorMessage]=useState([]);
  const email=useRef(null);
  const password=useRef(null);

  const tocheckSignIn = () => {
    setIsSignIn(!isSignIn);
  }

  const handleButtonEvent=()=>{
    console.log(email.current.value);
    console.log(password.current.value);
    const message=ValidateForm(email.current.value,password.current.value);
    setErrorMessage(message);
  }

  return (
    <div className='relative w-full h-screen'>
      <Header />
      <img
        className='absolute top-0 left-0 w-full h-full object-cover -z-10'
        src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="netflix-bg"
      />
      <form onSubmit={(e)=>{e.preventDefault();}} className='flex flex-col justify-center items-center absolute bg-black bg-opacity-80 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 max-w-md p-8 rounded'>
        <div className='flex flex-col w-full gap-5'>
          <p className='text-white font-bold text-3xl'>{isSignIn === false ? 'Sign Up' : 'Sign In'}</p>
          <div className='flex flex-col gap-5'>
            {isSignIn === false && <input
              className='p-3 rounded-sm bg-gray-800 bg-opacity-40 text-white w-full'
              type='text'
              placeholder='Name' required
            />}
            <input ref={email}
              className='p-3 rounded-sm bg-gray-800 bg-opacity-40 text-white w-full'
              type='text'
              placeholder='Email'
            />
            <input ref={password}
              className='p-3 rounded-sm bg-gray-800 bg-opacity-40 text-white w-full'
              type='password'
              placeholder='Password'
            />
            <p className='text-red-600'>{errorMessage}</p>
            <button className='bg-red-600 p-3 w-full text-white rounded hover:bg-red-500' onClick={()=>handleButtonEvent()}>{isSignIn === false ? 'Sign Up' : 'Sign In'}</button>
          </div>
          <div onClick={() => tocheckSignIn()}>
            {isSignIn && <div className='flex gap-1 justify-center' >
              <p className='text-white'>Not registered yet?</p>
              <p className='text-white hover:text-red-600 cursor-pointer'>Sign Up now!</p>
            </div>
            }
            {isSignIn===false && <div className='flex gap-1 justify-center' >
              <p className='text-white'>Already registered?</p>
              <p className='text-white hover:text-red-600 cursor-pointer'>Sign In now!</p>
            </div>
            }
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;