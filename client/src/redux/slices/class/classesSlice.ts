import { createSlice } from '@reduxjs/toolkit';
import type { ClassFormType, ClassType } from '../../../types/classTypes';
import { addClassThunk, deleteClassThunk, editClassThunk, getClassesThunk } from './classesThunks';

const initialState: ClassType[] = [];

export const classesSlice = createSlice({
    name: 'classes',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getClassesThunk.fulfilled, (state, action) => action.payload);

        builder.addCase(addClassThunk.fulfilled, (state, action) => [ ...state, action.payload] );

        builder.addCase(deleteClassThunk.fulfilled, (state, action) => state.filter((el) => el.id !== action.payload));

        builder.addCase(editClassThunk.fulfilled, (state, action) => {
            const index = state.findIndex((el) => el.id === action.payload.id);
            state[index] = action.payload;
        })
        }
})

export default classesSlice.reducer;