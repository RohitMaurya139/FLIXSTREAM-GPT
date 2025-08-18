import { IMG_CDN_URL } from "../utils/Constants";

const MovieCard = ({ poster }) => {
  if (!poster) return null;

  return (
    <div
      className="
        flex-shrink-0 rounded-lg overflow-hidden cursor-pointer bg-gray-100
        min-w-[120px] h-[180px]   /* Mobile */
        sm:min-w-[150px] sm:h-[225px]  /* Small tablets */
        md:min-w-[180px] md:h-[270px]  /* Medium screens */
        lg:min-w-[200px] lg:h-[300px]  /* Large screens */
      "
    >
      <img
        src={IMG_CDN_URL + poster}
        alt="moviePoster"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default MovieCard;
