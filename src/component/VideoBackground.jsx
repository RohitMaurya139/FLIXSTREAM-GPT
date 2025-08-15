import React from "react";
import { useSelector } from "react-redux";
import useWatchTrailer from "../hook/useWatchTrailer";

const VideoBackground = ({ movieId }) => {
  const watchTrailer = useSelector((store) => store.movies?.TrailerVideo);

  // Custom hook to fetch trailer data
  useWatchTrailer(movieId);

  return (
    <div className="relative w-full">
      {/* YouTube Video */}
      <iframe
        className="w-full h-[60vh] md:h-[80vh] lg:h-screen object-cover pointer-events-none"
        src={`https://www.youtube.com/embed/${watchTrailer?.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${watchTrailer?.key}&modestbranding=1&showinfo=0&rel=0`}
        title="Movie Trailer"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>

      {/* Gradient Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-gray-950 to-transparent"></div>
    </div>
  );
};

export default VideoBackground;
