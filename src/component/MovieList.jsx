import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  // Get the toggle from Redux
 const showGtpSearch = useSelector(
   (store) => store.gpt?.showGtpSearch ?? false
 );


  return (
    <div className="mb-6 bg-black">
      {/* Movie list title */}
      <h1 className="text-white text-lg sm:text-xl md:text-2xl font-bold my-2 sm:my-3 mx-3 sm:mx-6">
        {title}
      </h1>

      {showGtpSearch ? (
        // Grid format when GPT Search is active
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 p-4">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} poster={movie.poster_path} />
          ))}
        </div>
      ) : (
        // Horizontal scroll (default)
        <div
          className="
            flex gap-3
            overflow-x-auto
            px-3 sm:px-6 py-3
            scrollbar-hide
            bg-black rounded-md
            scroll-smooth
          "
        >
          {movies?.map((movie) => (
            <div
              key={movie.id}
              className="min-w-[120px] sm:min-w-[160px] lg:min-w-[200px] flex-shrink-0"
            >
              <MovieCard poster={movie.poster_path} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MovieList;
