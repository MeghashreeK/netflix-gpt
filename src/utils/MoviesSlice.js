import { createSlice } from "@reduxjs/toolkit";

const MoviesSlice=createSlice({
    name:"addMovie",
    initialState:{
        moviesList:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.moviesList=action.payload;
        }
    }
})
export const {addNowPlayingMovies}=MoviesSlice.actions;
export default MoviesSlice.reducer;