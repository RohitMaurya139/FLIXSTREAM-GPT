import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/Constants";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";


const useWatchTrailer = (movieId) => {
    const dispatch = useDispatch();
    const getMovieVideo = async () => {
        const data = await fetch(
            `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
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
    }, []);
    
}

export default useWatchTrailer