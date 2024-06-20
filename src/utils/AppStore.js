import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";
import MoviesSlice from "./MoviesSlice";

const AppStore=configureStore({
    reducer:{
        userdetails:UserSlice,
        addMovie:MoviesSlice
    }
});
export default AppStore;