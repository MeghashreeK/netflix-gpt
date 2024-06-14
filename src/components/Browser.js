import React from 'react'
import Header from './Header'
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';


const Browser = () => {
  // const picURL = imgData[0].photoURL;



  return (
    <div>
      <Header/>
    </div>

  )
}

export default Browser;