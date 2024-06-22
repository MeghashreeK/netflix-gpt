import { createSlice } from "@reduxjs/toolkit";

const MoviesSlice=createSlice({
    name:"addMovie",
    initialState:{
        moviesList:null,
        trailerList:null
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.moviesList=action.payload;
        },
        addTrailerVideo:(state,action)=>{
            state.trailerList=action.payload;
        }
    }
})
export const {addNowPlayingMovies,addTrailerVideo}=MoviesSlice.actions;
export default MoviesSlice.reducer;