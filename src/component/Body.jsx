// Importing required libraries
import React, { useEffect } from "react";
import Login from "./Login";
import Browse from "./Browse";
import { onAuthStateChanged } from "firebase/auth"; // Firebase listener for authentication state changes
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // For routing between pages
import { auth } from "../utils/firebase"; // Firebase authentication config instance
import { useDispatch } from "react-redux"; // Redux hook to dispatch actions to the store
import { addUser, removeUser } from "../utils/userSlice"; // Redux actions to update user state

/**
 * This is the main `Body` component that handles:
 * - Setting up routing between Login and Browse pages
 * - Listening to Firebase Authentication state changes
 * - Storing/removing the user in Redux depending on login state
 */
const Body = () => {
  // Hook from Redux to send (dispatch) actions to the store
  const dispatch = useDispatch();

  /**
   * App routing setup using React Router's `createBrowserRouter`
   * Defining two routes:
   * - "/" → Login component
   * - "/browse" → Browse component
   */
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />, // Login page
    },
    {
      path: "/browse",
      element: <Browse />, // Main browse page after login
    },
  ]);

  /**
   * useEffect - React hook that runs after the component renders
   * We're using it to set up Firebase's `onAuthStateChanged` listener
   * This listener tracks if the user is logged in or logged out
   */
  useEffect(() => {
    // Firebase Auth listener - triggers whenever the login state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName } = user; // Extract useful properties from Firebase user object

        // Dispatch Redux action to save user data in store
        dispatch(addUser({ uid, email, displayName }));
      } else {
        // User is signed out
        dispatch(removeUser()); // Remove user data from Redux store
      }
    });

    // Cleanup function to unsubscribe the listener when component unmounts
    return () => unsubscribe();
  }, [dispatch]); // Run this effect only when "dispatch" changes (rarely happens)

  return (
    <div className="overflow-x-hidden">
      {/* RouterProvider makes routing work in the app and passes the appRouter config */}
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
