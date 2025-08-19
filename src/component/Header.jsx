import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import userIcon from "../assets/userIcon.PNG";
import { toggleGtpSearchButton, toggleGtpSearchView } from "../utils/gtpSlice";
import { SUPPORTED_LANGUAGES } from "../utils/Constants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const gtp = useSelector((state) => state.gtp);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch(() => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, [dispatch, navigate]);

  const handleGptSearch = () => {
    dispatch(toggleGtpSearchView());
    dispatch(toggleGtpSearchButton());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <header
      className="
  fixed top-0 left-0 w-screen z-50
  px-4 sm:px-6 md:px-10 py-2
  flex flex-col items-start gap-2
  sm:flex-row sm:justify-between sm:items-center sm:gap-4
  bg-gradient-to-b from-black to-transparent
"
    >
      {/* Logo */}
      <h1
        onClick={() => navigate("/browse")}
        aria-label="Home"
        className="cursor-pointer text-xl sm:text-2xl md:text-3xl
                   font-extrabold tracking-wide text-red-500
                   drop-shadow-lg hover:scale-105 transition-all duration-300
                   w-full sm:w-auto text-center sm:text-left"
      >
        FLIXSTREAM
      </h1>

      {/* User Section */}
      {user?.uid && (
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 w-full sm:w-auto">
          {/* Language Selector (only when GPT Search is visible) */}
          {gtp.showGtpSearch && (
            <select
              className="block px-2 py-1 rounded-lg bg-white text-gray-700 text-sm w-full sm:w-auto"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          {/* GPT Search Button */}
          <button
            className="px-3 py-2 bg-red-500 text-white font-semibold text-sm sm:text-md  sm:inline-flex
                       hover:bg-red-700 rounded-sm cursor-pointer
                       w-full sm:w-auto"
            onClick={handleGptSearch}
          >
            {gtp.showGtpSearchButton ? "Home" : "GTP Search"}
          </button>

          {/* User Profile Info */}
          <div
            className="flex items-center gap-2 sm:gap-3 
                       bg-black/50 backdrop-blur-sm 
                       px-2 sm:px-3 py-1 rounded-lg 
                       border border-red-500 shadow-lg
                       w-full sm:w-auto justify-between sm:justify-start"
          >
            <img
              src={userIcon}
              alt="User"
              className="rounded-sm object-cover w-6 h-6 sm:w-8 sm:h-8"
            />
            <div
              className="flex flex-col items-start 
                            max-w-[100px] sm:max-w-[140px] md:max-w-[160px] 
                            overflow-hidden"
            >
              <span
                className="font-bold text-red-500 
                           text-xs sm:text-sm md:text-base truncate"
              >
                {user.displayName || "User"}
              </span>
              <button
                className="text-[10px] sm:text-xs md:text-sm font-semibold 
                           text-gray-300 hover:text-red-500 
                           transition-colors duration-200"
                onClick={handleSignOut}
                aria-label="Sign Out"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
