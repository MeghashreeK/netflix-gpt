import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'
import { API_OPTIONS } from '../utils/constants'
import { useEffect } from 'react'

const MainContainer = () => {
    const movie=useSelector((store)=>store.addMovie?.moviesList);
 
    if(!movie) return;

    const firstMovie=movie[0];
    console.log(firstMovie);
    const {title,overview,id,backdrop_path}=firstMovie;

    

  return (
    <div className='hidden sm:flex'>
        <VideoTitle title={title} overview={overview} imgpath={backdrop_path} />
        <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer;
