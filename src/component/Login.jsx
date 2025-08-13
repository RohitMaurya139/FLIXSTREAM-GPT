import React, { useRef, useState } from "react";
import Header from "./Header";
import { BG_IMG } from "../utils/Constants";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { checkValidData, newUserData } from "../utils/validate";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const dob = useRef(null);

  function toggleSignIn() {
    setIsSignIn(!isSignIn);
    setErrorMessage(null);
    setSuccessMessage(null);
  }

  const handleButtonClick = async () => {
    let message;
    if (isSignIn) {
      message = checkValidData(email.current.value, password.current.value);
      if (!message) {
        try {
          const userCredential = await signInWithEmailAndPassword(
            auth,
            email.current.value,
            password.current.value
          );
          const user = userCredential.user;
          // Dispatch user info after sign in
          dispatch(
            addUser({
              uid: user.uid,
              email: user.email,
              displayName: user.displayName || "",
            })
          );
          setSuccessMessage("✅ Successfully signed in!");
          setErrorMessage(null);
          navigate("/browse");
        } catch (error) {
          setErrorMessage(error.message);
          setSuccessMessage(null);
          return;
        }
      }
    } else {
      message = newUserData(
        email.current.value,
        password.current.value,
        name.current.value,
        dob.current.value
      );
      if (!message) {
        try {
          const userCredential = await createUserWithEmailAndPassword(
            auth,
            email.current.value,
            password.current.value
          );
          const user = userCredential.user;

          // Update displayName properly with the user returned by createUserWithEmailAndPassword
          await updateProfile(user, { displayName: name.current.value });

          // Update Redux store after profile update
          dispatch(
            addUser({
              uid: user.uid,
              email: user.email,
              displayName: name.current.value,
            })
          );

          setSuccessMessage("🎉 Account created successfully!");
          setErrorMessage(null);
          navigate("/browse");
        } catch (error) {
          setErrorMessage(error.message);
          setSuccessMessage(null);
          return;
        }
      }
    }
    setErrorMessage(message);
    if (message) setSuccessMessage(null);
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col">
      <Header />

      <div className="absolute inset-0 -z-10">
        <img
          src={BG_IMG}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      <main className="relative z-10 flex-grow flex flex-col items-center px-4 py-10 max-w-4xl mx-auto w-full overflow-y-auto mt-16 sm:mt-24 md:mt-20 lg:mt-16">
        <div className="max-w-xl text-center mb-10 px-2 sm:px-0">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-4 ">
            Unlimited movies, TV shows and more
          </h1>
          <p className="text-white font-semibold text-base sm:text-lg">
            Starts at ₹149. Cancel at any time.
          </p>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="p-8 rounded-lg max-w-md w-full shadow-lg text-white"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
        >
          <h2 className="text-3xl font-bold mb-6 text-center">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h2>

          {!isSignIn && (
            <>
              <input
                ref={name}
                type="text"
                placeholder="Enter Full Name"
                className="w-full p-3 mb-4 rounded border border-gray-600 bg-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
                required
              />

              <select
                className="w-full p-3 mb-4 rounded border border-gray-600 bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
                required
                defaultValue=""
              >
                <option value="" disabled className="text-red-500">
                  Select Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>

              <input
                ref={dob}
                type="date"
                placeholder="Enter Date of Birth"
                className="w-full p-3 mb-4 rounded border border-gray-600 bg-gray-900 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                required
              />
            </>
          )}

          <input
            ref={email}
            type="email"
            placeholder="Enter Email Address"
            className="w-full p-3 mb-4 rounded border border-gray-600 bg-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
            required
          />

          <input
            ref={password}
            type="password"
            placeholder="Enter Password"
            className="w-full p-3 mb-6 rounded border border-gray-600 bg-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
            required
          />

          {errorMessage && (
            <p className="text-red-600 font-semibold mb-4">{errorMessage}</p>
          )}

          {successMessage && (
            <p className="text-green-600 font-semibold mb-4">
              {successMessage}
            </p>
          )}

          <button
            type="submit"
            className="w-full py-3 bg-red-600 font-bold rounded hover:bg-red-700 transition cursor-pointer mb-4"
            onClick={handleButtonClick}
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>

          <div className="flex items-center mb-6 space-x-2">
            <input
              type="checkbox"
              name="remember"
              id="remember"
              className="accent-white"
            />
            <label
              htmlFor="remember"
              className="text-white font-semibold cursor-pointer"
            >
              Remember me
            </label>
          </div>

          {isSignIn ? (
            <p className="text-gray-400 font-semibold mb-2">
              New to Netflix?{" "}
              <span
                className="text-white cursor-pointer font-semibold underline"
                onClick={toggleSignIn}
              >
                Sign up now.
              </span>
            </p>
          ) : (
            <p className="text-gray-400 font-semibold mb-2">
              Already a User?{" "}
              <span
                className="text-white cursor-pointer font-semibold underline"
                onClick={toggleSignIn}
              >
                Sign In now.
              </span>
            </p>
          )}

          <p className="text-sm text-gray-400">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
          </p>
        </form>
      </main>
    </div>
  );
};

export default Login;
