import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  addDataDetails,
  addDataAlternativeTitle,
  addDataRecommended,
} from "../utils/movieDetailsSlice";
import { API_OPTION } from "../utils/Constants";

const useGetMovieDetails = (movie_id) => {
   const dispatch = useDispatch();
   const details = useSelector((store) => store.movieDetails.DataDetails);
   const currentMovieId = details?.id;

  const getMovieDetails = async () => {
    const dataDetails = await fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}?language=en-US`,
      API_OPTION
      );
      const json = await dataDetails.json();
      dispatch(addDataDetails(json))
   
    const dataAlternativeTitle = await fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}/alternative_titles`,
      API_OPTION
      );
      const json2 = await dataAlternativeTitle.json();
      dispatch(addDataAlternativeTitle(json2))
     
      const dataRecommended = await fetch(
        `https://api.themoviedb.org/3/movie/${movie_id}/recommendations?language=en-US&page=1`,
        API_OPTION
      );
       const json4 = await dataRecommended.json();
      dispatch(addDataRecommended(json4))
 
    
  };

  useEffect(() => {
    if (!details || currentMovieId !== Number(movie_id)) {
      getMovieDetails();
    }
  }, [movie_id, details, currentMovieId, dispatch]);
};

export default useGetMovieDetails;
