import React, { useState } from "react";
import Header from "./Header";
import { BG_IMG } from "../utils/Constants";

const Login = () => {
  const [isSignIn,setIsSignIn] = useState(true)
  
  function ToggleSignIn() {
    setIsSignIn(!isSignIn)
  }
  return (
    <div className="relative min-h-screen w-full flex flex-col">
      {/* Header always on top */}
      <Header />

      {/* Background image and overlay */}
      <div className="absolute inset-0 -z-10">
        <img
          src={BG_IMG}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      {/* Main content wrapper with scroll when needed */}
      <main className="relative z-10 flex-grow flex flex-col items-center px-4 py-10 max-w-4xl mx-auto w-full overflow-y-auto">
        {/* Text above form */}
        <div className="max-w-xl text-center mb-10">
          <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-4">
            Unlimited movies, TV shows and more
          </h1>
          <p className="text-white font-semibold text-lg">
            Starts at ₹149. Cancel at any time.
          </p>
        </div>

        {/* Form */}
        <form
          className=" p-8 rounded-lg max-w-md w-full shadow-lg text-white"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}

          // Added minWidth and consistent scroll behavior
        >
          <h2 className="text-3xl font-bold mb-6 text-center">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h2>

          {!isSignIn && (
            <input
              type="text"
              placeholder="Enter Full Name"
              className="w-full p-3 mb-4 rounded border border-gray-600 bg-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
              required
            />
          )}
          {!isSignIn && (
            <select
              className="w-full p-3 mb-4 rounded border border-gray-600 bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
              required
              defaultValue="" // Ensure the first option is disabled for placeholder effect
            >
              <option value="" disabled>
                Select Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          )}

          {!isSignIn && (
            <input
              type="date"
              placeholder="Enter Date of Birth"
              className="w-full p-3 mb-4 rounded border border-gray-600 bg-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
              required
            />
          )}

          <input
            type="email"
            placeholder="Enter Email Address"
            className="w-full p-3 mb-4 rounded border border-gray-600 bg-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
            required
          />

          <input
            type="password"
            placeholder="Enter Password"
            className="w-full p-3 mb-6 rounded border border-gray-600 bg-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
            required
          />

          <button
            type="submit"
            className="w-full py-3 bg-red-600 font-bold rounded hover:bg-red-700 transition cursor-pointer mb-4"
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>

          {isSignIn && (
            <p className="text-center my-4 text-gray-400 font-semibold">OR</p>
          )}
          {isSignIn && (
            <button
              type="button"
              className="w-full py-3 bg-gray-700 font-bold rounded hover:bg-gray-800 transition cursor-pointer mb-6"
            >
              Use a Sign In code
            </button>
          )}

          {isSignIn && (
            <p className="text-center mb-6 text-white underline cursor-pointer font-semibold">
              Forgot Password?
            </p>
          )}

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
