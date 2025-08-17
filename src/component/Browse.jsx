
import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hook/useNowPlayingMovies";
import usePopularMovies from "../hook/usePopularMovies";
import useTopRatedMovies from "../hook/useTopRatedMovies";
import useTrendingMovies from "../hook/useTrendingMovies";
import useUpcomingMovies from "../hook/useUpcomingMovies";
import GptSearch from "./GptSearch";
import Header from "./Header";
import MainMovieContainer from "./MainMovieContainer";
import SecondaryMovieContainer from "./SecondaryMovieContainer";

const Browse = () => {
  const showGtpSearch = useSelector((store) => store.gtp.showGtpSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  useTrendingMovies()
  return (
    <div className="bg-black min-h-screen w-screen inset-0 overflow-x-hidden">
      <Header />
      {showGtpSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainMovieContainer />
          <SecondaryMovieContainer />
        </>
      )}
    </div>
  );
};
export default Browse;

