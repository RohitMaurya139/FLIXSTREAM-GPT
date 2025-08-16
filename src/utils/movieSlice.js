import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
  name: "movies",
  initialState: {
    NowPlayingMovies: null,
    TrailerVideo: null,
    PopularMovies: null,
    TopRatedMovies: null,
    UpcomingMovies: null,
    TrendingMovies: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.NowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.PopularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.TopRatedMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.UpcomingMovies = action.payload;
    },
    addTrendingMovies: (state, action) => {
      state.TrendingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.TrailerVideo = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
  addTrendingMovies,
} = movieSlice.actions;
export default movieSlice.reducer

