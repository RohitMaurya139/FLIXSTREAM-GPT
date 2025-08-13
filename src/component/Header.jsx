import React from "react";
import { SVG_D } from "../utils/Constants";
import userIcon from "../assets/userIcon.PNG";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch(() => {
        navigate("/error");
      });
  };

  return (
    <header className="absolute top-4 left-0 right-0 z-50 px-6 py-3 flex items-center justify-between   max-w-7xl mx-auto  sm:px-12">
      {/* Logo */}
      <svg
        viewBox="0 0 111 30"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        aria-hidden="true"
        role="img"
        className="w-28 sm:w-40 h-auto cursor-pointer"
        onClick={() => navigate("/")}
      >
        <g fill="#E50914">
          <path d={SVG_D} fill="rgb(229, 9, 20)"></path>
        </g>
      </svg>

      {/* User Info */}
      {user?.uid && (
        <div className="flex items-center gap-2 sm:gap-4 bg-red-50 bg-opacity-30 px-2 sm:px-4 py-1 sm:py-2 rounded-lg shadow-sm border border-red-200">
          <img
            src={userIcon}
            alt="User Icon"
            className="w-6 h-6 sm:w-10 sm:h-10 rounded-md border-2 border-red-500 object-cover"
          />
          <div className="flex flex-col justify-center">
            <p className="font-semibold text-sm sm:text-lg text-red-700 select-none truncate max-w-[100px] sm:max-w-xs">
              {user.displayName || "User"}
            </p>
            <button
              className="text-xs sm:text-sm text-red-600 hover:text-red-800 font-semibold transition duration-200"
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
