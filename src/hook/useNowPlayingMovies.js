import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { API_OPTION } from "../utils/Constants";

const useNowPlayingMovies = () => {
  const NowPlayingMovies = useSelector(
    (store) => store.movies.NowPlayingMovies
  );
  const dispatch = useDispatch();

  const getNowPlayingMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTION
    );
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    if (!NowPlayingMovies || NowPlayingMovies.length === 0) {
      getNowPlayingMovie();
    }
  }, []);
};

export default useNowPlayingMovies;
