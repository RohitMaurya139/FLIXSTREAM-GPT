
import { configureStore } from "@reduxjs/toolkit";

import gtpSliceReducer from "./gtpSlice";
import userSliceReducer from "./userSlice";
import movieSliceReducer from "./movieSlice"


const appStore = configureStore({
  reducer: {
    // Key: 'user' becomes the state.user inside Redux store
    // Value: the reducer function that updates that state
    user: userSliceReducer,
    movies: movieSliceReducer,
    gtp: gtpSliceReducer,
  },
});

// Export the configured store so it can be provided to our React app
export default appStore;
