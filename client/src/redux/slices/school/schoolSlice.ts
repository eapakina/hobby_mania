import { createSlice } from "@reduxjs/toolkit";
import type { SchoolType } from "../../../types/schoolTypes";
import {
  checkSchoolThunk,
<<<<<<< HEAD
  deleteSchoolThunk,
  editSchoolThunk,
=======
>>>>>>> dev
  getSchoolThunk,
  loginSchoolThunk,
  logoutSchoolThunk,
  signUpSchoolThunk,
} from "./schoolThunk";

type SchoolSliceType = {
  data: SchoolType | null;
};

const initialState: SchoolSliceType = {
  data: null,
};

const schoolSlice = createSlice({
  name: "school",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // checkSchoolThunk
    builder.addCase(checkSchoolThunk.fulfilled, (state, { payload }) => {
      state.data = {
        ...payload,
      };
    });

    // signUpSchoolThunk
    builder.addCase(signUpSchoolThunk.fulfilled, (state, { payload }) => {
      state.data = {
        ...payload,
      };
    });

    // loginSchoolThunk
    builder.addCase(loginSchoolThunk.fulfilled, (state, { payload }) => {
      state.data = {
        ...payload,
      };
    });

    // logoutSchoolThunk
    builder.addCase(logoutSchoolThunk.fulfilled, (state) => {
      if (state.data) state.data = null;
    });
    builder.addCase(logoutSchoolThunk.rejected, (state) => state);
    builder.addCase(getSchoolThunk.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(deleteSchoolThunk.fulfilled, (state, action) => {
      if (state.data?.id !== action.payload) state.data = null;
      // state.data? !== action.payload
      // state.data.filter((el) => el.id !== action.payload)
    });
    builder.addCase(editSchoolThunk.fulfilled, (state, action) => {
      state.data=action.payload
      // const index = state.findIndex((el) => el.id === action.payload.id);
      // state[index] = action.payload;
    });
  },
});

// export const { setToken } = schoolSlice.actions;
export default schoolSlice.reducer;