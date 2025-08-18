import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const GtpMovieSuggestion = () => {
  const movies = useSelector((store) => store.movies);
  const searchQuery = useSelector((store) => store.movies.SearchQuery); // or wherever you store your search input

  return (
    <div className="bg-black text-white">
      <div className="mt-6 md:mt-10 px-2 md:px-6 relative z-20">
        {searchQuery && (
          <h2 className="mb-4 text-2xl font-bold">
            Search results for{" "}
            <span className="text-red-500">"{searchQuery}"</span>
          </h2>
        )}
        <MovieList title="" movies={movies.SearchResultMovies} />
      </div>
    </div>
  );
};

export default GtpMovieSuggestion;
