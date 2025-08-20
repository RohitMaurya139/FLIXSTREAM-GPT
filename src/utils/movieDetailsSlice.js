import { createSlice } from "@reduxjs/toolkit";



const movieDetailsSlice = createSlice({
  name: "movieDetails",
  initialState: {
    DataDetails: null,
    DataAlternativeTitle: null,
    DataImages: null,
    DataRecommended: null,
    TrailerVideo: null,
    DataReview: null,
  },

  reducers: {
    addDataDetails: (state, action) => {
      state.DataDetails = action.payload;
    },
    addDataAlternativeTitle: (state, action) => {
      state.DataAlternativeTitle = action.payload;
    },
    addDataImages: (state, action) => {
      state.DataImages = action.payload;
    },
    addDataRecommended: (state, action) => {
      state.DataRecommended = action.payload;
    },
    addDataReview: (state, action) => {
      state.DataReview = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.TrailerVideo = action.payload;
    },
  },
});
export const {
  addDataDetails,
  addDataAlternativeTitle,
  addDataImages,
  addDataRecommended,
  addDataReview,
  addTrailerVideo,
} = movieDetailsSlice.actions;
export default movieDetailsSlice.reducer