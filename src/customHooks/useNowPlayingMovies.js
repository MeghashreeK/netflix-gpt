import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addNowPlayingMovies } from '../utils/MoviesSlice';
import { useEffect } from 'react';

const useNowPlayingMovies=()=>{
    const dispatch=useDispatch();
    useEffect(()=>{getNowPlayingData()},[]);
    
    const getNowPlayingData=async()=>{
      const data= await fetch("https://api.themoviedb.org/3/movie/now_playing",API_OPTIONS);
      const json=await data.json();
      // console.log(json.results);
      dispatch(addNowPlayingMovies(json.results));
    }
}

export default useNowPlayingMovies;