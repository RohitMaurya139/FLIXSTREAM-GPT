// Import createSlice from Redux Toolkit
// createSlice is a helper that automatically generates action creators and the reducer
import { createSlice } from "@reduxjs/toolkit";

/**
 * userSlice
 * =========
 * This slice manages the authentication state of the user inside Redux.
 *
 * - `name`: The unique name for this slice of state.
 * - `initialState`: The default state, here set to `null` (no user is logged in initially).
 * - `reducers`: An object containing reducer functions to update the user state.
 */
const userSlice = createSlice({
  // This is the name of the slice — it will show up in Redux DevTools as "user"
  name: "user",

  // Initial state of the user slice — no user is logged in initially
  initialState: null,

  // Reducers (functions) define how the state can be updated
  reducers: {
    /**
     * addUser
     * -------
     * This reducer updates the Redux state with the provided user object.
     *
     * - `state`: The current state (ignored here because we directly return new state).
     * - `action`: Contains a payload with new user data (uid, email, displayName, etc.)
     *
     * Example payload:
     * {
     *   uid: "123abc",
     *   email: "user@example.com",
     *   displayName: "John Doe"
     * }
     */
    addUser: (state, action) => {
      return action.payload; // Replace `state` entirely with the new user object
    },

    /**
     * removeUser
     * ----------
     * This reducer resets the user state to null (logged out state).
     */
    removeUser: (state, action) => {
      return null;
    },
  },
});

// Export the generated action creators so they can be dispatched in components
export const { addUser, removeUser } = userSlice.actions;

// Export the reducer so it can be included in the Redux store
export default userSlice.reducer;
