import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-[20%] absolute text-white bg-gradient-to-r from-black w-screen aspect-video pl-5 z-0'>
        <h1 className='font-bold text-5xl mb-2'>{title}</h1>
        <p className='w-2/5'>{overview}</p>
        <div className='flex gap-2'>
            <button className='border-2 border-black'>Play</button>
            <button className='border-2 border-black'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle