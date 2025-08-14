import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { API_OPTION } from "../utils/Constants";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const getNowPLayingMovie = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?page=1",
        API_OPTION
      );
      const json = await data.json();
     
      dispatch(addNowPlayingMovies(json.results));
    };
    useEffect(() => {
      getNowPLayingMovie();
    }, []);
}


export default useNowPlayingMovies