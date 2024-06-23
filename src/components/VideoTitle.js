import React, { useEffect, useState } from 'react'

const VideoTitle = ({ title, overview, imgpath }) => {
  // const [showDetail, setShowDetail] = useState(false);
  const [showOverview, setshowOverview] = useState(true);
  const [removeOverview,setRemoveOverview]=useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setshowOverview(false);
    }, 5000);

    return () => { clearTimeout(timer); }
  }, []);

  const handleTransitionEnd=()=>{
    setRemoveOverview(true);

  }

  return (
    <div className='pt-[25%] absolute text-white bg-gradient-to-r from-black w-screen aspect-video pl-5 z-0'>
      <div>
        <h1 className={`font-bold mb-2 ${removeOverview ? "text-5xl" : "text-9xl"}`}>{title}</h1>
       {(!removeOverview) && <p className={`w-2/5 transition duration-1000 ${showOverview ? "opacity-100" : "opacity-0"}`} onTransitionEnd={handleTransitionEnd}>
          {overview}
        </p>}
        <div className='flex gap-2 mt-2'>
          <button className='flex bg-white text-black justify-center items-center font-bold text-center px-6 py-2 gap-1 rounded-sm transition duration-300 hover:bg-opacity-60'><img width="30" height="30" src="https://img.icons8.com/ios-filled/50/play--v1.png" alt="play--v1"/>Play</button>
          <button className='flex bg-gray-400 bg-opacity-40 justify-center items-center font-bold text-center px-6 py-2 gap-1 rounded-sm transition duration-300 hover:bg-opacity-30'><img width="30" height="30" src="https://img.icons8.com/material-outlined/24/ffffff/info--v1.png" alt="info--v1"/>More Info</button>
        </div>
      </div>
    </div>
  )
}

export default VideoTitle;




