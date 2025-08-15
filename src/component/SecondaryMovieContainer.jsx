
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryMovieContainer = () => {
  const movies= useSelector(store=> store.movies)
  return (
    <div>
   

      <MovieList title={"Now PLaying"} movies={movies.NowPlayingMovies} />
    </div>
  );
}

export default SecondaryMovieContainer