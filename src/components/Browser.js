import React from 'react'
import Header from './Header'
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { removeUser } from '../utils/UserSlice';
import { useNavigate } from 'react-router-dom';


const Browser = () => {
  const imgData = useSelector((store) => store.userdetails.user);
  const picURL = imgData[0].photoURL;
  const dispatch = useDispatch();
  const navigate=useNavigate();

  const handleSignOut = () => {
    signOut(auth).then(() => {
      dispatch(removeUser());
      navigate("/");
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode + "-" + errorMessage);
    });
  }

  return (
    <div>
      <div className='flex justify-between'>
        <div className='absolute left-0 top-0 -z-10 w-full'>
          <Header />
        </div>
        <div className='flex p-2 gap-4 absolute top-0 sm:left-[93%] left-[75%]'>
          <img className='w-8 h-8' alt="profile-pic" src={picURL} />
          <img className='w-8 h-8 cursor-pointer' onClick={() => handleSignOut()} src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/24/c53030/external-logout-screen-from-the-working-portfolio-of-a-user-classic-bold-tal-revivo.png" alt="external-logout-screen-from-the-working-portfolio-of-a-user-classic-bold-tal-revivo" />
        </div>
      </div>
    </div>

  )
}

export default Browser;