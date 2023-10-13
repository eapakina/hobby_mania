import { createSlice } from '@reduxjs/toolkit';
import type { ClassFormType, ClassType } from '../../../types/classTypes';
import { addClassThunk, getClassesThunk } from './classesThunks';

const initialState: ClassType[] = [];

export const classesSlice = createSlice({
    name: 'classes',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getClassesThunk.fulfilled, (state, action) => action.payload);

        builder.addCase(addClassThunk.fulfilled, (state, action) => [ ...state, action.payload] );
        }
})

export default classesSlice.reducer;