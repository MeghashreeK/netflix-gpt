import React, { useState } from 'react'
import MoviesCard from './MoviesCard'
import { useRef } from 'react';

const MoviesList = ({ title, movie }) => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
  };

  return (
    <div className='pl-5'>
      <h1 className='text-white'>{title}</h1>
      <div className='flex items-center relative'>
        <img className="cursor-pointer absolute left-0 z-10 w-10 h-10" src="https://img.icons8.com/ios/50/ffffff/less-than.png" onClick={scrollLeft} alt="less-than" />
        <div className='flex overflow-x-scroll scrollbar-none' ref={scrollContainerRef}>
          <div className='flex gap-3'>
            {movie && movie.map((movie) => <MoviesCard key={movie.id} posterpath={movie.poster_path} />)}
          </div>
        </div>
        <img className="cursor-pointer absolute right-0 z-10 w-10 h-10" src="https://img.icons8.com/ios/50/ffffff/more-than.png" onClick={scrollRight} alt="more-than" />
      </div>
    </div>
  )
}

export default MoviesList;

