// Import React & Hooks
import React, { useRef, useState } from "react";

// Import Header component
import Header from "./Header";

// Import background image constant
import { BG_IMG } from "../utils/Constants";

// Import Firebase authentication methods
import {
  createUserWithEmailAndPassword, reload, // Create new user account
  signInWithEmailAndPassword, // Log in existing user
  updateProfile, // Update user profile values (like displayName)
} from "firebase/auth";
import { auth } from "../utils/firebase"; // Firebase auth instance

// Import custom validation helper functions
import { checkValidData, newUserData } from "../utils/validate";


import { useDispatch } from "react-redux";

// Redux action to store user info
import { addUser } from "../utils/userSlice";

/**
 * LOGIN COMPONENT
 * ----------------
 * This component handles:
 * - Sign In (uses `signInWithEmailAndPassword`)
 * - Sign Up (uses `createUserWithEmailAndPassword` + `updateProfile`)
 * - Form validation before sending to Firebase
 * - Storing user info in Redux
 * - Redirecting after login
 */
const Login = () => {
  
  const dispatch = useDispatch(); // Send actions to Redux store

  // Determine if the form is for Sign In or Sign Up
  const [isSignIn, setIsSignIn] = useState(true);

  // Messages for user feedback
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  // References to form fields
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const dob = useRef(null);

  /**
   * Toggles between Sign In & Sign Up form
   * Resets messages when switching
   */
  function toggleSignIn() {
    setIsSignIn(!isSignIn);
    setErrorMessage(null);
    setSuccessMessage(null);
  }

  /**
   * Handles the Sign In / Sign Up button click
   * 1. Validates the data using custom validation helpers
   * 2. If Sign In → use Firebase's `signInWithEmailAndPassword`
   * 3. If Sign Up → use Firebase's `createUserWithEmailAndPassword` + `updateProfile`
   * 4. Store logged in user in Redux
   * 5. Redirect to Browse page
   */
  const handleButtonClick = async () => {
    let message;

    if (isSignIn) {
      // Validate email + password for sign-in
      message = checkValidData(email.current.value, password.current.value);

      if (!message) {
        try {
          // Firebase existing user sign-in
          const userCredential = await signInWithEmailAndPassword(
            auth,
            email.current.value,
            password.current.value
          );

          const user = userCredential.user;

          // Save logged-in user info in Redux store
          dispatch(
            addUser({
              uid: user.uid,
              email: user.email,
              displayName: user.displayName || "",
            })
          );

          setSuccessMessage("✅ Successfully signed in!");
          setErrorMessage(null);

          // Redirect to Browse page
          // navigate("/browse");
        } catch (error) {
          setErrorMessage(error.message);
          setSuccessMessage(null);
          return;
        }
      }
    } else {
      // Validate sign-up fields
      message = newUserData(
        email.current.value,
        password.current.value,
        name.current.value,
        dob.current.value
      );

      if (!message) {
        try {
          // Create new user account in Firebase
          const userCredential = await createUserWithEmailAndPassword(
            auth,
            email.current.value,
            password.current.value
          );

          const user = userCredential.user;

          // Update display name (since Firebase User object by default only stores email & uid)
          await updateProfile(user, { displayName: name.current.value });
              await reload(user); 
          // Store updated user in Redux
          dispatch(
            addUser({
              uid: user.uid,
              email: user.email,
              displayName: user.displayName,
            })
          );

          setSuccessMessage("🎉 Account created successfully!");
          setErrorMessage(null);
          // navigate("/browse"); this is done from header
        } catch (error) {
          setErrorMessage(error.message);
          setSuccessMessage(null);
          return;
        }
      }
    }

    // If there’s a validation message, set error and clear success
    setErrorMessage(message);
    if (message) setSuccessMessage(null);
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col">
      {/* Header with Logo & User Info */}
      <Header />

      {/* Background image overlay */}
      <div className="absolute inset-0 -z-10">
        <img
          src={BG_IMG}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      {/* Main Content */}
      <main className="relative z-10 flex-grow flex flex-col items-center px-4 py-10 max-w-4xl mx-auto w-full overflow-y-auto mt-16 sm:mt-24 md:mt-20 lg:mt-16">
        {/* Heading section */}
        <div className="max-w-xl text-center mb-10 px-2 sm:px-0">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-4">
            Unlimited movies, TV shows and more
          </h1>
          <p className="text-white font-semibold text-base sm:text-lg">
            Starts at ₹149. Cancel at any time.
          </p>
        </div>

        {/* Authentication Form */}
        <form
          onSubmit={(e) => e.preventDefault()} // Prevent page reload on submit
          className="p-8 rounded-lg max-w-md w-full shadow-lg text-white"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
        >
          {/* Form Title */}
          <h2 className="text-3xl font-bold mb-6 text-center">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h2>

          {/* Extra fields – only for Sign Up */}
          {!isSignIn && (
            <>
              {/* Full Name */}
              <input
                ref={name}
                type="text"
                placeholder="Enter Full Name"
                className="w-full p-3 mb-4 rounded border border-gray-600 bg-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
                required
              />

              {/* Gender */}
              <select
                className="w-full p-3 mb-4 rounded border border-gray-600 bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
                required
                defaultValue=""
              >
                <option value="" disabled>
                  Select Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>

              {/* Date of Birth */}
              <input
                ref={dob}
                type="date"
                placeholder="Enter Date of Birth"
                className="w-full p-3 mb-4 rounded border border-gray-600 bg-gray-900 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                required
              />
            </>
          )}

          {/* Common fields: Email & Password */}
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

          {/* Show error & success messages */}
          {errorMessage && (
            <p className="text-red-600 font-semibold mb-4">{errorMessage}</p>
          )}
          {successMessage && (
            <p className="text-green-600 font-semibold mb-4">
              {successMessage}
            </p>
          )}

          {/* Button to Sign In / Sign Up */}
          <button
            type="submit"
            className="w-full py-3 bg-red-600 font-bold rounded hover:bg-red-700 transition cursor-pointer mb-4"
            onClick={handleButtonClick}
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>

          {/* Remember Me checkbox */}
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

          {/* Toggle form link */}
          {isSignIn ? (
            <p className="text-gray-400 font-semibold mb-2">
              New to FlixStream?{" "}
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

          {/* Security note */}
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
