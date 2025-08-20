import { useNavigate, useParams } from "react-router-dom";
import useGetMovieDetails from "../hook/useGetMovieDetails";
import { useSelector } from "react-redux";
import { IMG_CDN_URL } from "../utils/Constants";
import MovieList from "./MovieList"
import TrailerVideo from "./TrailerVideo";
const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
 
  
  useGetMovieDetails(id); // fetch details using your hook

  const movieDetails = useSelector((state) => state.movieDetails.DataDetails);
  const alternativeTitles = useSelector(
    (state) => state.movieDetails.DataAlternativeTitle
  );
 
 
  const recommended = useSelector(
    (state) => state.movieDetails.DataRecommended
  );
   

  if (!movieDetails)
    return (
      <div className="text-center text-white mt-20 text-lg">Loading...</div>
    );

  return (
    <>
      <div className="inset-0 bg-gray-800">
        <h1
          onClick={() => navigate("/browse")}
          aria-label="Home"
          className="cursor-pointer text-2xl 
                   font-extrabold  text-red-500
                   drop-shadow-lg py-2 px-6
                   w-full sm:w-auto text-center sm:text-left bg-gray-900"
        >
          FLIXSTREAM
        </h1>
        <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 text-white p-6 sm:p-10 md:p-16 flex flex-row gap-10">
          {/* Poster Image */}
          <div className="flex-shrink-0 w-1/3 rounded-lg overflow-hidden shadow-lg border border-gray-700">
            <img
              src={IMG_CDN_URL + movieDetails.poster_path}
              alt="poster"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>

          {/* Movie Info */}
          <div className="flex-1 max-w-4xl space-y-6 flex flex-col">
            <h1 className="text-4xl font-extrabold tracking-wide">
              {movieDetails.original_title}
            </h1>
            <p className="italic text-gray-300 text-lg">
              {movieDetails.tagline}
            </p>

            <div className="flex flex-wrap gap-3">
              {movieDetails.genres.map((g) => (
                <span
                  key={g.id}
                  className="px-3 py-1 rounded-full bg-indigo-600 text-sm font-semibold tracking-wide"
                >
                  {g.name}
                </span>
              ))}
            </div>

            <p className="text-gray-300 leading-relaxed">
              {movieDetails.overview}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-300 font-medium">
              <div>
                <p>
                  <span className="font-semibold text-white">IMDB Id:</span>{" "}
                  {movieDetails.imdb_id}
                </p>
                <p>
                  <span className="font-semibold text-white">Country:</span>{" "}
                  {movieDetails.origin_country[0]}
                </p>
                <p>
                  <span className="font-semibold text-white">
                    Original Language:
                  </span>{" "}
                  {movieDetails.original_language.toUpperCase()}
                </p>
                <p>
                  <span className="font-semibold text-white">
                    Production Companies:
                  </span>{" "}
                  {movieDetails.production_companies
                    .map((pc) => pc.name)
                    .join(", ")}
                </p>
                <p>
                  <span className="font-semibold text-white">
                    Production Company Origin:
                  </span>{" "}
                  {movieDetails.production_countries[0]?.name}
                </p>
              </div>
              <div>
                <p>
                  <span className="font-semibold text-white">Status:</span>{" "}
                  {movieDetails.status}
                </p>
                <p>
                  <span className="font-semibold text-white">
                    Release Date:
                  </span>{" "}
                  {movieDetails.release_date}
                </p>
                <p>
                  <span className="font-semibold text-white">Budget:</span> $
                  {movieDetails.budget / 1000000} Million
                </p>
                <p>
                  <span className="font-semibold text-white">Revenue:</span> $
                  {movieDetails.revenue / 1000000} Million
                </p>
                <p>
                  <span className="font-semibold text-white">Watch Time:</span>{" "}
                  {movieDetails.runtime} min
                </p>
                <p>
                  <span className="font-semibold text-white">Rating:</span>{" "}
                  {movieDetails.vote_average} / 10
                </p>
              </div>
            </div>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-3">
                Alternative Titles
              </h2>
              <ul className="text-gray-300 italic">
                {alternativeTitles?.titles?.length > 0 ? (
                  alternativeTitles.titles
                    .slice(0, 4)
                    .map((title) => (
                      <li key={title.iso_3166_1}>{title.title}</li>
                    ))
                ) : (
                  <li>No alternative titles found.</li>
                )}
              </ul>
            </section>
          </div>
        </div>
        <div className=" px-2 md:px-6 relative z-20 bg-gradient-to-b from-gray-800 via-gray-900 to-gray-950">
          <TrailerVideo  />
          <MovieList
            title="Recommended Movies"
            movies={recommended?.results || []}
          />
        </div>
      </div>
    </>
  );

};

export default MovieDetails;
