import React, { useRef, useState } from "react";
import Header from "./Header";
import { BG_IMG } from "../utils/Constants";
import { checkValidData } from "../utils/validate";

const Login = () => {
  // State to toggle between Sign In and Sign Up forms
  const [isSignIn, setIsSignIn] = useState(true);
  // State to hold any validation error message to display
  const [errorMessage, setErrorMessage] = useState(null);

  // Refs to access input element values directly without controlled components
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const dob = useRef(null);

  // Toggles between "Sign In" and "Sign Up" form views
  function ToggleSignIn() {
    setIsSignIn(!isSignIn);
  }

  // Validate inputs when user clicks the submit button
  const HandelButtonClick = () => {
    let message;
    if (isSignIn) {
      // For Sign In, only validate email and password
      message = checkValidData(email.current.value, password.current.value);
    } else {
      // For Sign Up, validate email, password, name, and date of birth
      message = checkValidData(
        email.current.value,
        password.current.value,
        name.current.value,
        dob.current.value
      );
    }

    // If validation returns a message (error), update errorMessage state to show it; else clear error
    if (message !== null) {
      setErrorMessage(message);
    } else {
      setErrorMessage(null);
    }
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col">
      {/* Header component remains fixed at top */}
      <Header />

      {/* Fullscreen background image with overlay for dark tint */}
      <div className="absolute inset-0 -z-10">
        <img
          src={BG_IMG}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      {/* Main content area with scroll support and centered layout */}
      <main className="relative z-10 flex-grow flex flex-col items-center px-4 py-10 max-w-4xl mx-auto w-full overflow-y-auto mt-16 sm:mt-24 md:mt-20 lg:mt-16">
        {/* Text header section above form */}
        <div className="max-w-xl text-center mb-10 px-2 sm:px-0">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-4 ">
            Unlimited movies, TV shows and more
          </h1>
          <p className="text-white font-semibold text-base sm:text-lg">
            Starts at ₹149. Cancel at any time.
          </p>
        </div>

        {/* Form container */}
        <form
          onSubmit={(e) => e.preventDefault()} // Prevent default page reload on form submit
          className="p-8 rounded-lg max-w-md w-full shadow-lg text-white"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }} // Semi-transparent black bg
        >
          {/* Form heading changes based on sign-in or sign-up mode */}
          <h2 className="text-3xl font-bold mb-6 text-center">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h2>

          {/* Sign Up additional inputs (when !isSignIn) */}
          {!isSignIn && (
            <>
              {/* Full Name Input */}
              <input
                ref={name}
                type="text"
                placeholder="Enter Full Name"
                className="w-full p-3 mb-4 rounded border border-gray-600 bg-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
                required
              />

              {/* Gender Select Dropdown */}
              <select
                className="w-full p-3 mb-4 rounded border border-gray-600 bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
                required
                defaultValue="" // Placeholder effect
              >
                <option value="" disabled className="text-red-500">
                  Select Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>

              {/* Date of Birth Input */}
              <input
                ref={dob}
                type="date"
                placeholder="Enter Date of Birth"
                className="w-full p-3 mb-4 rounded border border-gray-600 bg-gray-900 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                required
              />
            </>
          )}

          {/* Email Input (Both Sign In and Sign Up) */}
          <input
            ref={email}
            type="email"
            placeholder="Enter Email Address"
            className="w-full p-3 mb-4 rounded border border-gray-600 bg-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
            required
          />

          {/* Password Input (Both Sign In and Sign Up) */}
          <input
            ref={password}
            type="password"
            placeholder="Enter Password"
            className="w-full p-3 mb-6 rounded border border-gray-600 bg-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
            required
          />

          {/* Display error message if any */}
          <p className="text-red-600 font-semibold mb-4">{errorMessage}</p>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-red-600 font-bold rounded hover:bg-red-700 transition cursor-pointer mb-4"
            onClick={HandelButtonClick} // Validate input on click
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>

          {/* Additional elements only on Sign In */}
          {isSignIn && (
            <>
              <p className="text-center my-4 text-gray-400 font-semibold">OR</p>
              <button
                type="button"
                className="w-full py-3 bg-gray-700 font-bold rounded hover:bg-gray-800 transition cursor-pointer mb-6"
              >
                Use a Sign In code
              </button>
              <p className="text-center mb-6 text-white underline cursor-pointer font-semibold">
                Forgot Password?
              </p>
            </>
          )}

          {/* Remember me checkbox */}
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

          {/* Toggle between Sign In and Sign Up prompt */}
          {isSignIn ? (
            <p className="text-gray-400 font-semibold mb-2">
              New to Netflix?{" "}
              <span
                className="text-white cursor-pointer font-semibold underline"
                onClick={ToggleSignIn}
              >
                Sign up now.
              </span>
            </p>
          ) : (
            <p className="text-gray-400 font-semibold mb-2">
              Already a User?{" "}
              <span
                className="text-white cursor-pointer font-semibold underline"
                onClick={ToggleSignIn}
              >
                Sign In now.
              </span>
            </p>
          )}

          {/* reCAPTCHA protection notice */}
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
