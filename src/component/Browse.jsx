// Import React library

// Import the Header component from the same folder
import Header from "./Header";
import useNowPlayingMovies from "../hook/useNowPlayingMovies";
import { use } from "react";
import MainMovieContainer from "./MainMovieContainer.jsx";
import SecondaryMovieContainer from "./SecondaryMovieContainer.jsx";
/**
 * Browse Component
 * ----------------
 * This component represents the browse page of the application.
 *
 * Responsibilities:
 * - Displays the Header component (likely containing navigation, logo, logout button)
 * - Can later be extended to display movies, shows, or other content after a user logs in
 */
const Browse = () => {
  useNowPlayingMovies()
  return (
    <div>
      {/* The Header is shown on top of the Browse page */}
      <Header />

      {/* 
        You can add the main content section here.
        Example: Movie List, Search Bar, Categories, etc.
        main container
           - videoBackground
           - video Title
           Secondary container
               - MovieList * n
                 -card * n
      */}
      <MainMovieContainer />
      <SecondaryMovieContainer/>
    </div>
  );
};

export default Browse; // Export the component so it can be imported elsewhere
