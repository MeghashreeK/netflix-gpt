import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'

const MainContainer = () => {

    const movie=useSelector((store)=>store.addMovie?.moviesList);
 
    if(!movie) return;

    const firstMovie=movie[0];
    // console.log(firstMovie);
    const {title,overview,id}=firstMovie;

  return (
    <div>
        <VideoTitle title={title} overview={overview} />
        <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer