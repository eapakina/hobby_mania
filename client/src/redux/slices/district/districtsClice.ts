import { createSlice } from "@reduxjs/toolkit";
import type{ DistrictType } from "../../../types/schoolTypes";
import getDistrictThunks from "./districtThunk";



const initialState: DistrictType[]=[];

const distrSlice= createSlice({
    name:'District',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getDistrictThunks.fulfilled,(state,action)=>action.payload);
        

    }
})

export default distrSlice.reducer;