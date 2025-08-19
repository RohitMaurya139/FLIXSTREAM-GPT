import { IMG_CDN_URL } from "../utils/Constants";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ poster, id }) => {
  const navigate = useNavigate();

  if (!poster) return null;

  const handleMovieDetails = () => {
    navigate(`/movie/${id}`);
  };

  return (
    <div
      className="flex-shrink-0 rounded-lg overflow-hidden cursor-pointer bg-gray-100 min-w-[120px] h-[180px] sm:min-w-[150px] sm:h-[225px] md:min-w-[180px] md:h-[270px] lg:min-w-[200px] lg:h-[300px]"
      onClick={handleMovieDetails}
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

