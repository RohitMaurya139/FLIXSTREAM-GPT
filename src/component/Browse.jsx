// Import React library
import React from "react";

// Import the Header component from the same folder
import Header from "./Header";

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
  return (
    <div>
      {/* The Header is shown on top of the Browse page */}
      <Header />

      {/* 
        You can add the main content section here.
        Example: Movie List, Search Bar, Categories, etc.
      */}
    </div>
  );
};

export default Browse; // Export the component so it can be imported elsewhere
