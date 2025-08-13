// Import React
import React from "react";

// Import Netflix SVG logo path
import { SVG_D } from "../utils/Constants";

// Import placeholder user icon image
import userIcon from "../assets/userIcon.PNG";

// Firebase auth instance
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth"; // Firebase method to log out

// React Router hook for navigation
import { useNavigate } from "react-router-dom";

// React-Redux hook to read data from the store
import { useSelector } from "react-redux";

/**
 * Header Component
 * ----------------
 * Displays:
 * - The Netflix-style logo (clickable, navigates home)
 * - The logged-in user's info (name + avatar)
 * - "Sign Out" button to log out via Firebase Auth
 */
const Header = () => {
  // Hook from React Router to navigate programmatically (no page reload)
  const navigate = useNavigate();

  // Get the logged-in user info from Redux store
  // This state.user comes from our `userSlice` reducer
  const user = useSelector((state) => state.user);

  /**
   * Function to handle user sign-out
   * --------------------------------
   * 1. Calls Firebase's signOut(auth) to log the user out
   * 2. On success → navigate to the Login ("/") page
   * 3. On failure → navigate to an error page
   */
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/"); // Redirect to login/homepage
      })
      .catch(() => {
        navigate("/error"); // Redirect to error page (optional)
      });
  };

  return (
    <header
      className="
        absolute top-4 left-0 right-0 z-50 
        px-6 py-3 flex items-center justify-between
        max-w-7xl mx-auto sm:px-12
      "
    >
      {/* ------------------------------------
          LOGO SECTION
          ------------------------------------ */}
      <svg
        viewBox="0 0 111 30"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        aria-hidden="true"
        role="img"
        className="w-28 sm:w-40 h-auto cursor-pointer"
        onClick={() => navigate("/")} // Navigate when clicking the logo
      >
        {/* Netflix Red Logo Path */}
        <g fill="#E50914">
          <path d={SVG_D} fill="rgb(229, 9, 20)"></path>
        </g>
      </svg>

      {/* ------------------------------------
          USER INFO SECTION
          Only shown if a user is logged in
          Check: user?.uid
          ------------------------------------ */}
      {user?.uid && (
        <div
          className="
            flex items-center gap-2 sm:gap-4
            bg-red-50 bg-opacity-30
            px-2 sm:px-4 py-1 sm:py-2
            rounded-lg shadow-sm border border-red-200
          "
        >
          {/* User Profile Picture */}
          <img
            src={userIcon} // Placeholder image
            alt="User Icon"
            className="
              w-6 h-6 sm:w-10 sm:h-10
              rounded-md border-2 border-red-500
              object-cover
            "
          />

          {/* Username + Sign Out Button */}
          <div className="flex flex-col justify-center">
            {/* User's display name from Redux store OR default 'User' */}
            <p
              className="
                font-semibold text-sm sm:text-lg text-red-700
                select-none truncate 
                max-w-[100px] sm:max-w-xs
              "
            >
              {user.displayName || "User"}
            </p>

            {/* Log Out Button */}
            <button
              className="
                text-xs sm:text-sm text-red-600 
                hover:text-red-800 font-semibold
                transition duration-200
              "
              onClick={handleSignOut}
              aria-label="Sign Out"
            >
              Sign Out
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
