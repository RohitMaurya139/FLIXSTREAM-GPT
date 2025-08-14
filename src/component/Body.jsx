// Importing required libraries
import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // For routing between pages

import { useDispatch } from "react-redux"; // Redux hook to dispatch actions to the store

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

  

  return (
    <div className="overflow-x-hidden">
      {/* RouterProvider makes routing work in the app and passes the appRouter config */}
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
