import React, { useEffect } from 'react'

const VideoBackground = () => {

  return (
    <div>
      <iframe className='w-screen aspect-video' src="https://www.youtube.com/embed/hXzcyx9V0xw?si=aaZjORhmX6wN2KSm&autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  );
  
}

export default VideoBackground;


