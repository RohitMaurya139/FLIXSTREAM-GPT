import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addTopRatedMovies } from "../utils/movieSlice";
import { API_OPTION } from "../utils/Constants";

const useTopRatedMovies = () => {
    const dispatch = useDispatch();
    const getTopRatedMovie = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?page=1",
        API_OPTION
      );
      const json = await data.json();
     
      dispatch(addTopRatedMovies(json.results));
    };
    useEffect(() => {
      getTopRatedMovie();
    }, []);
}


export default useTopRatedMovies;