import React, { useEffect } from 'react'
import Header from './Header'
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { API_OPTIONS } from '../utils/constants';


const Browser = () => {

useEffect(()=>{getNowPlayingData()},[]);

const getNowPlayingData=async()=>{
  const data= await fetch("https://api.themoviedb.org/3/movie/now_playing",API_OPTIONS);
  const json=await data.json();
  console.log(json);

}

  return (
    <div>
      <Header/>
    </div>

  )
}

export default Browser;