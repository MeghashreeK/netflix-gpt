import React from 'react'
import useTrailerVideo from '../customHooks/useTrailerVideo'
import { useSelector } from 'react-redux';

const VideoBackground = ({ movieId }) => {
 
  const Trailer=useSelector(store=>store.addMovie?.trailerList);
  useTrailerVideo(movieId);
  
  return (
    <div>
      {Trailer && <iframe className='w-screen aspect-video' src={`https://www.youtube.com/embed/${Trailer.key}?autoplay=1&mute=1`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
      </iframe>}
    </div>
  )
}

export default VideoBackground