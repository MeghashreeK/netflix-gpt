import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'

const MainContainer = () => {
    const movie=useSelector((store)=>store.addMovie?.nowPlayingMoviesList);

    if(!movie) return;
    // console.log(movie);
    const firstMovie=movie[3];
    // console.log(firstMovie);
    const {title,overview,id,backdrop_path}=firstMovie;

    

  return (
    <div>
        <VideoTitle title={title} overview={overview} imgpath={backdrop_path} />
        <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer;
