import { useSelector } from "react-redux";
import useWatchTrailer from "../hook/useWatchTrailer";

const VideoBackground = ({ movieId }) => {
  const watchTrailer = useSelector((store) => store.movies?.TrailerVideo);

  // Custom hook to fetch trailer data
  useWatchTrailer(movieId);

  return (
    <div className="relative w-screen h-[56.25vw] max-h-[100vh] overflow-hidden">
      {/* YouTube Video */}
      <iframe
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={`https://www.youtube.com/embed/${watchTrailer?.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${watchTrailer?.key}&modestbranding=1&showinfo=0&rel=0`}
        title="Movie Trailer"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      />

      {/* Gradient Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-50"></div>
    </div>
  );
};

export default VideoBackground;
