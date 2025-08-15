import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';
const MainMovieContainer = () => {
    const movies = useSelector((store) => store.movies?.NowPlayingMovies);
    if (!movies) return;
    let random = Math.floor(Math.random() * 20)
    const mainMovie = movies[random]
    const { original_title, overview ,id} = mainMovie;
    console.log(mainMovie)
  return (
      <div>
          <VideoTitle title={original_title} overview={overview} />
          <VideoBackground movieId={id } />
    </div>
  )
}

export default MainMovieContainer