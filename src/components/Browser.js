import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../customHooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browser = () => {

  useNowPlayingMovies();

  return (
    <div>
      <Header/>
      <div>
      <MainContainer/>
      <SecondaryContainer/>
      </div>
    </div>

  )
}

export default Browser;