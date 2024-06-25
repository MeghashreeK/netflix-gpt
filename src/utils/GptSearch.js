import { createSlice } from "@reduxjs/toolkit";

const GptSearch=createSlice({
    name:"gptstate",
    initialState:{
        gptToggle:false,
    },
    reducers:{
        gptToggleFunction:(state)=>{
            state.gptToggle=(!state.gptToggle);
        }
    }

})