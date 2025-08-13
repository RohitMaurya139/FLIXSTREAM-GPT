// Import the `configureStore` function from Redux Toolkit
// Redux Toolkit simplifies setting up a Redux store compared to plain Redux
import { configureStore } from "@reduxjs/toolkit";

// Import the reducer function for managing user state from userSlice.js
// A reducer is a function that updates a specific part of the Redux state
import userSliceReducer from "./userSlice";

/**
 * Configure and create the Redux store for the application.
 *
 * - `configureStore` automatically sets up:
 *   1. The store with given reducers.
 *   2. Redux DevTools extension for debugging.
 *   3. Useful default middleware.
 *
 * - The `reducer` object inside configureStore contains EACH state slice reducer
 *   we want in our app. Here we have:
 *     - user: userSliceReducer → Manages the "user" state
 */
const appStore = configureStore({
  reducer: {
    // Key: 'user' becomes the state.user inside Redux store
    // Value: the reducer function that updates that state
    user: userSliceReducer,
  },
});

// Export the configured store so it can be provided to our React app
export default appStore;
