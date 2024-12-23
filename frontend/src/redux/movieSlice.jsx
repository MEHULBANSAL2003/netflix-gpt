import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailorVideo: null,
    popularMovies:null,
    topRatedMovies:null,
    upcomingMovies:null,
    trendingMovies:null,
    moreMovies:null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailorVideo: (state, action) => {
      state.trailorVideo = action.payload;
    },
    addPopularMovies:(state,action)=>{
      state.popularMovies=action.payload;
    },
    addTopRatedMovies:(state,action)=>{
      state.topRatedMovies=action.payload
    },
    addUpcomingMovies:(state,action)=>{
      state.upcomingMovies=action.payload;
    },
    addTrendingMovies:(state,action)=>{
      state.trendingMovies=action.payload;
    },
    addMoreMovies:(state,acion)=>{
      state.moreMovies=acion.payload;
    }
  },
});

export const { addNowPlayingMovies, addTrailorVideo ,addPopularMovies,addTopRatedMovies,addUpcomingMovies,addTrendingMovies,addMoreMovies} = movieSlice.actions;

export default movieSlice.reducer;
