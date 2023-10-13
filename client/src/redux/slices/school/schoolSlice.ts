import { createSlice } from "@reduxjs/toolkit";
import type{ SchoolType } from "../../../types/schoolTypes"
import { checkSchoolThunk, loginSchoolThunk, logoutSchoolThunk, signUpSchoolThunk } from "./schoolThunk";


type SchoolSliceType = {
    data:SchoolType;
    error:Error | null;
    logoutDialogOpened: boolean;
    token: string | null;
};

const initialState: SchoolSliceType={
    data:{status:'loading'},
    error:null,
    logoutDialogOpened:false,
    token:null,
};

const schoolSlice = createSlice({
    name: 'school',
    initialState,
    reducers: {
      setToken: (state, action: { payload: string }) => {
        state.token = action.payload;
      },
    },
    extraReducers: (builder) => {
      // checkSchoolThunk
      builder.addCase(checkSchoolThunk.fulfilled, (state, { payload }) => {
        state.data = {
          ...payload,
          status: 'logged',
        };
      });
      builder.addCase(checkSchoolThunk.pending, (state) => {
        state.data = { status: 'loading' };
      });
      builder.addCase(checkSchoolThunk.rejected, (state) => {
        state.data = { status: 'guest' };
      });
  
      // signUpSchoolThunk
      builder.addCase(signUpSchoolThunk.fulfilled, (state, { payload }) => {
        state.data = {
          ...payload,
          status: 'logged',
        };
        state.token = payload.token;
      });
      builder.addCase(signUpSchoolThunk.rejected, (state) => {
        state.data = { status: 'guest' };
      });
  
      // loginSchoolThunk
      builder.addCase(loginSchoolThunk.fulfilled, (state, { payload }) => {
        state.data = {
          ...payload,
          status: 'logged',
        };
        state.token = payload.token;
      });
      builder.addCase(loginSchoolThunk.rejected, (state) => {
        state.data = { status: 'guest' };
      });
  
      // logoutSchoolThunk
      builder.addCase(logoutSchoolThunk.fulfilled, (state) => {
        state.data = { status: 'guest' };
  
        state.token = null;
      });
      builder.addCase(logoutSchoolThunk.rejected, (state) => state);
    },
  });
  
  export const { setToken } = schoolSlice.actions;
  export default schoolSlice.reducer;
  



