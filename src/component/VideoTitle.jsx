import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay, faCircleInfo } from "@fortawesome/free-solid-svg-icons";

const VideoTitle = ({ title, overview }) => {
  return (
    <div
      className="
        absolute z-20
        px-3 sm:px-6 md:px-8
        py-4 sm:py-6
        aspect-video
        max-w-full sm:max-w-md md:max-w-2xl
       pt-[35%] md:pt-[20%] lg:pt-[20%]
      "
    >
      {/* Title */}
      <h1
        className="
          text-xl sm:text-2xl md:text-4xl lg:text-5xl
          font-extrabold
          mb-2 sm:mb-4
          text-white
          drop-shadow-lg
        "
      >
        {title}
      </h1>

      {/* Overview */}
      <p
        className="
          mb-4 sm:mb-6 md:mb-8
          text-white/90
          text-xs sm:text-base md:text-lg
          leading-normal sm:leading-relaxed
          line-clamp-2 sm:line-clamp-3 md:line-clamp-4
         w-[40%] lg:w-[60%]
        "
      >
        {overview}
      </p>

      {/* Buttons */}
      <div
        className="
          flex flex-col sm:flex-row
          gap-2 sm:gap-4
          items-stretch sm:items-center
          w-full
        "
      >
        {/* Play Button */}
        <button
          className="
            flex items-center justify-center gap-2
            bg-white
            hover:bg-gray-200
            text-black font-bold
            text-xs sm:text-sm
            py-2 sm:py-3 px-4 sm:px-5
            rounded-lg shadow-lg
            w-fit
            transition-all duration-300 transform hover:scale-105
          "
        >
          <FontAwesomeIcon
            icon={faCirclePlay}
            className="text-sm sm:text-base"
          />
          <span>Play</span>
        </button>

        {/* More Info Button */}
        <button
          className="
            flex items-center justify-center gap-2
            bg-gray-800/80
            hover:bg-gray-900
            text-white font-semibold
            text-xs sm:text-sm
            py-2 sm:py-3 px-4 sm:px-5
            rounded-lg shadow-lg
           w-fit
            transition-all duration-300 transform hover:scale-105
            backdrop-blur-sm
          "
        >
          <FontAwesomeIcon
            icon={faCircleInfo}
            className="text-sm sm:text-base"
          />
          <span>More Info</span>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
