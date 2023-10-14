import { createSlice } from "@reduxjs/toolkit";
import type { SchoolType } from "../../../types/schoolTypes";
import {
  checkSchoolThunk,
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
  },
});

// export const { setToken } = schoolSlice.actions;
export default schoolSlice.reducer;
