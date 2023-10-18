import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type{ DistrictType } from "../../../types/schoolTypes";



const getDistrictThunks = createAsyncThunk<DistrictType[]>(
    'school/allDistr',
    async()=>{
        const {data}= await axios.get<DistrictType[]>('school/allDistr');
        return data
    }
)

export default getDistrictThunks
