import { useSelector } from "react-redux";
import useMovieTrailer from "../hook/useMovieTrailer";
import { useParams } from "react-router-dom";

const TrailerVideo = () => {
    const { id } = useParams();
  const watchTrailer = useSelector((store) => store.movieDetails?.TrailerVideo);

  // Custom hook to fetch trailer data
  useMovieTrailer();

  return (
    <div className="flex justify-center items-center w-full p-4">
      {/* Responsive YouTube Video */}
      <div className="relative w-full max-w-4xl aspect-video rounded-lg overflow-hidden shadow-lg">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={`https://www.youtube.com/embed/${watchTrailer?.key}?autoplay=0&mute=0&controls=1&loop=1&playlist=${watchTrailer?.key}&modestbranding=1&showinfo=0&rel=0`}
          title="Movie Trailer"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
    </div>
  );
};

export default TrailerVideo;
