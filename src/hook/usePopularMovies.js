import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addPopularMovies } from "../utils/movieSlice";
import { API_OPTION } from "../utils/Constants";

const usePopularMovies = () => {
    const dispatch = useDispatch();
    const getPopularMovie = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/popular?page=1",
        API_OPTION
      );
      const json = await data.json();
     
      dispatch(addPopularMovies(json.results));
    };
    useEffect(() => {
      getPopularMovie();
    }, []);
}


export default usePopularMovies;