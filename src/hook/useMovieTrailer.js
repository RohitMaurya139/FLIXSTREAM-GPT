import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/Constants";
import { addTrailerVideo } from "../utils/movieDetailsSlice";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const useMovieTrailer = () => {
     const { id } = useParams();
  const dispatch = useDispatch();
  const getMovieVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      API_OPTION
    );
    const json = await data.json();
          
            let trailer = json.results.filter((video) => video.type === "Trailer");
        
            if (trailer.length === 0) {
                trailer = json.results.filter((video) => video.type === "Teaser");
            }
            let numOfTrailer = trailer.length;
            let random = Math.floor(Math.random() * numOfTrailer);
            const finalTrailer = trailer[random];
         
            dispatch(addTrailerVideo(finalTrailer));
  };

  useEffect(() => {
    getMovieVideo();
  }, [id]);
};

export default useMovieTrailer;
