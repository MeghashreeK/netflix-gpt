import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";

const AppStore=configureStore({
    reducer:{
        userdetails:UserSlice
    }
});
export default AppStore;