import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import userIcon from "../assets/userIcon.PNG";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

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

  return (
    <header className="fixed top-0 left-0 w-full bg-gradient-to-b from-black/70 to-transparent z-50 px-4 py-3 lg:px-10 lg:py-5 flex justify-between items-center">
      {/* LOGO */}
      <h1
        onClick={() => navigate("/browse")}
        aria-label="Home"
        className="cursor-pointer text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-wide text-red-600 drop-shadow-lg hover:scale-105 hover:text-red-600 transition-all duration-300"
      >
        FLIXSTREAM
      </h1>

      {/* USER INFO */}
      {user?.uid && (
        <div className="flex items-center gap-4 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-lg border border-red-500 shadow-lg lg:px-3 lg:py-1">
          <img
            src={userIcon}
            alt="User"
            className=" rounded-sm  object-cover size-6 lg:size-8"
          />
          <div className="flex flex-col items-start">
            <span className="font-bold text-red-500 text-sm md:text-base truncate max-w-[120px] md:max-w-[160px]">
              {user.displayName || "User"}
            </span>
            <button
              className="text-xs font-semibold md:text-sm text-gray-300 hover:text-red-500 transition-colors duration-200"
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
