import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay, faCircleInfo } from "@fortawesome/free-solid-svg-icons";

const VideoTitle = ({ title, overview }) => {
  return (
    <div
      className="
        absolute z-20
        px-3 sm:px-6 md:px-8
        aspect-video
        max-w-full sm:max-w-md md:max-w-2xl
        pt-[30%] sm:pt-[25%] md:pt-[20%]
      "
    >
      {/* Title */}
      <h1
        className="
          text-lg sm:text-2xl md:text-4xl lg:text-5xl
          font-extrabold
          mb-2 sm:mb-4
          text-white
          drop-shadow-lg
        "
      >
        {title}
      </h1>

      {/* Overview - hidden on small */}
      <p
        className="
          hidden sm:block
          mb-3 sm:mb-4 md:mb-6
          text-white/90
          text-xs sm:text-sm md:text-lg
          leading-snug sm:leading-normal md:leading-relaxed
          line-clamp-3 sm:line-clamp-4 md:line-clamp-5
          w-[90%] sm:w-3/4 md:w-2/3
        "
      >
        {overview}
      </p>

      {/* Buttons */}
      <div
        className="
          flex 
          gap-2 
          items-start sm:items-center
        "
      >
        {/* Play Button */}
        <button
          className="
            flex items-center justify-center gap-2
            bg-white
            hover:bg-gray-200
            text-black font-bold
            text-xs sm:text-sm md:text-base
            py-2 sm:py-3 px-4 sm:px-5
            rounded-lg shadow-lg
            w-auto
            transition-all duration-300 transform hover:scale-105
          "
        >
          <FontAwesomeIcon
            icon={faCirclePlay}
            className="text-sm sm:text-base md:text-lg"
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
            text-xs sm:text-sm md:text-base
            py-2 sm:py-3 px-4 sm:px-5
            rounded-lg shadow-lg
            w-auto
            transition-all duration-300 transform hover:scale-105
            backdrop-blur-sm
          "
        >
          <FontAwesomeIcon
            icon={faCircleInfo}
            className="text-sm sm:text-base md:text-lg"
          />
          <span>More Info</span>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
