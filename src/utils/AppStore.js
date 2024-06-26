import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";
import MoviesSlice from "./MoviesSlice";
import GptSearchSlice from "./GptSearchSlice";

const AppStore=configureStore({
    reducer:{
        userdetails:UserSlice,
        addMovie:MoviesSlice,
        gptstate:GptSearchSlice
    }
});
export default AppStore;