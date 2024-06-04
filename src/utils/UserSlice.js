import { createSlice } from "@reduxjs/toolkit";

const UserSlice=createSlice({
    name:"userdetails",
    initialState:{
        user:[],
    },
    reducers:{
        addUser:(state,action)=>{
            state.user.push(action.payload);
        },
        removeUser:(state,action)=>{
            return null;
        }
    }
})

export const {addUser,removeUser} = UserSlice.actions;
export default UserSlice.reducer;