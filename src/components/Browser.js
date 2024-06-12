import React from 'react'
import Header from './Header'
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';


const Browser = () => {
  // const picURL = imgData[0].photoURL;



  return (
    <div>
      <div className='flex justify-between'>
        <div className='absolute left-0 top-0 -z-10 w-full'>
          <Header />
        </div>
        <div className='flex p-2 gap-4 absolute top-0 sm:left-[93%] left-[75%]'>
          {/* <img className='w-8 h-8' alt="profile-pic" src={picURL} /> */}
        </div>
      </div>
    </div>

  )
}

export default Browser;