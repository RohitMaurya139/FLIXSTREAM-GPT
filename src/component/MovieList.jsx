import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="mb-6 bg-black">
      {/* Movie list title */}
      <h1 className="text-white text-lg sm:text-xl md:text-2xl font-bold my-2 sm:my-3 mx-3 sm:mx-6">
        {title}
      </h1>

      {/* Always horizontal scroll with swipe */}
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
    </div>
  );
};

export default MovieList;
