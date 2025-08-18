import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addSearchResultMovies } from "../utils/movieSlice";
import { API_OPTION } from "../utils/Constants";

const useSearchResultMovies = (Query) => {
  const dispatch = useDispatch();

  const getSearchResultMovies = async () => {
    if (!Query || !Query.trim()) {
      // Optionally clear old search results
      dispatch(addSearchResultMovies([]));
      return;
    }

    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
        Query
      )}&include_adult=false&language=en-US&page=1`,
      API_OPTION
    );
    const json = await response.json();

    // Remove local filtering; use all results from API (case-insensitive search handled by API)
    const results = json.results || [];
    dispatch(addSearchResultMovies(results));
  };

  useEffect(() => {
    getSearchResultMovies();
    // eslint-disable-next-line
  }, [Query]);
};

export default useSearchResultMovies;
