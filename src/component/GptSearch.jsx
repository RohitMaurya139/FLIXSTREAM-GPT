import React from "react";
import GptSearchBar from "./GtpSearchBar.jsx";
import GtpMovieSuggestion from "./GtpMovieSuggestion.jsx";

const GptSearch = () => {
  return (
    <div className="bg-gray-800 ">
      <GptSearchBar />
      <GtpMovieSuggestion />
    </div>
  );
}; // <-- Closing curly brace and semicolon added here

export default GptSearch;
