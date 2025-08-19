
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUpcomingMovies } from "../utils/movieSlice";
import { API_OPTION } from "../utils/Constants";

const useUpcomingMovies = () => {
   const UpcomingMovies = useSelector((store) => store.movies.UpcomingMovies);
  const dispatch = useDispatch();
  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTION
    );
    const json = await data.json();

    dispatch(addUpcomingMovies(json.results));
  };
  useEffect(() => {
   !UpcomingMovies && getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;