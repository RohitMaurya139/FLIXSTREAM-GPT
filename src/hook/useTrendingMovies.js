

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addTrendingMovies } from "../utils/movieSlice";
import { API_OPTION } from "../utils/Constants";

const useTrendingMovies = () => {
   const TrendingMovies = useSelector((store) => store.movies.TrendingMovies);
  const dispatch = useDispatch();
  const getTrendingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
      API_OPTION
    );
    const json = await data.json();

    dispatch(addTrendingMovies(json.results));
  };
  useEffect(() => {
   !TrendingMovies && getTrendingMovies();
  }, []);
};

export default useTrendingMovies;  