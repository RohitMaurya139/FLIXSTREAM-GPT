import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay, faCircleInfo } from "@fortawesome/free-solid-svg-icons";

const VideoTitle = ({ title, overview }) => {
  return (
    <div
      className="
        absolute z-20 
        px-4 py-6 sm:px-6 md:px-8 
      
        max-w-full sm:max-w-md md:max-w-2xl 
        mt-24 sm:mt-28 md:mt-40 lg:mt-60
      "
    >
      {/* Title */}
      <h1
        className="
          text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
          font-extrabold 
          mb-3 sm:mb-4 
          text-white 
          drop-shadow-lg
        "
      >
        {title}
      </h1>

      {/* Overview */}
      <p
        className="
          mb-6 sm:mb-8 
          text-white/90 
          text-sm sm:text-base md:text-lg 
          leading-relaxed 
          line-clamp-3
        "
      >
        {overview}
      </p>

      {/* Buttons */}
      <div
        className="
          flex flex-col sm:flex-row 
          gap-3 sm:gap-4
        "
      >
        {/* Play Button */}
        <button
          className="
            flex items-center justify-center gap-2 
            bg-white
            w-full sm:w-[140px] md:w-[150px] 
            hover:bg-gray-200 
            text-black font-bold 
            py-2 sm:py-3 px-4 sm:px-6 
            rounded-lg shadow-lg 
            transition-all duration-300 transform hover:scale-105
          "
        >
          <FontAwesomeIcon icon={faCirclePlay} className="text-base sm:text-lg" />
          <span>Play</span>
        </button>

        {/* More Info Button */}
        <button
          className="
            flex items-center justify-center gap-2 
            bg-gray-800/80
            w-full sm:w-[160px] md:w-[180px] 
            hover:bg-gray-900 
            text-white font-semibold 
            py-2 sm:py-3 px-4 sm:px-6 
            rounded-lg shadow-lg 
            transition-all duration-300 transform hover:scale-105 
            backdrop-blur-sm
          "
        >
          <FontAwesomeIcon icon={faCircleInfo} className="text-base sm:text-lg" />
          <span>More Info</span>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
