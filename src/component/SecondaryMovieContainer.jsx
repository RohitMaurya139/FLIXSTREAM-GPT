import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryMovieContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="bg-black text-white">
      <div className="mt-6 md:mt-10 px-2 md:px-6 relative z-20">
        <MovieList title="Now Playing" movies={movies.NowPlayingMovies} />
        <MovieList title="Trending Today" movies={movies.TrendingMovies} />
        <MovieList title="Popular" movies={movies.PopularMovies} />
        <MovieList title="Top Rated" movies={movies.TopRatedMovies} />
        <MovieList title="Upcoming" movies={movies.UpcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryMovieContainer;
