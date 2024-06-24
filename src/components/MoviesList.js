import React from 'react'
import MoviesCard from './MoviesCard'

const MoviesList = ({title,movie}) => {
 
  return (
    <div className='pl-5'>
        <h1 className='text-white'>{title}</h1>
        <div className='flex overflow-x-scroll'>
        <img width="50" height="50" src="https://img.icons8.com/ios/50/ffffff/less-than.png" alt="less-than"/>
        <div className='flex gap-3'>
            {movie && movie.map((movie)=><MoviesCard key={movie.id} posterpath={movie.poster_path}/>)}
        </div>
        <img width="50" height="50" src="https://img.icons8.com/ios/50/ffffff/more-than.png" alt="more-than"/>
        </div>
    </div>
  )
}

export default MoviesList;