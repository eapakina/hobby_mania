import { createSlice } from "@reduxjs/toolkit";
import type { UserType } from "../../../types/userTypes";
import {
  checkUserThunk,
  getUserId,
  loginUserThunk,
  logoutUserThunk,
  signUpUserThunk,
} from "./userThunks";

type UserSliceType = {
  data: UserType;
  error: Error | null;
  logoutDialogOpened: boolean;
  token: string | null;
};

const initialState: UserSliceType = {
  data: { status: "loading" },
  error: null,
  logoutDialogOpened: false,
  token: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setToken: (state, action: { payload: string }) => {
      state.token = action.payload;
    },
  },
  extraReducers: (builder) => {
    // checkUserThunk
    builder.addCase(checkUserThunk.fulfilled, (state, { payload }) => {
      state.data = {
        ...payload,
        status: "logged",
      };
    });
    builder.addCase(checkUserThunk.pending, (state) => {
      state.data = { status: "loading" };
    });
    builder.addCase(checkUserThunk.rejected, (state) => {
      state.data = { status: "guest" };
    });

    // signUpUserThunk
    builder.addCase(signUpUserThunk.fulfilled, (state, { payload }) => {
      state.data = {
        ...payload,
        status: "logged",
      };
      state.token = payload.token;
    });
    builder.addCase(signUpUserThunk.rejected, (state) => {
      state.data = { status: "guest" };
    });

    // loginUserThunk
    builder.addCase(loginUserThunk.fulfilled, (state, { payload }) => {
      state.data = {
        ...payload,
        status: "logged",
      };
      state.token = payload.token;
    });
    builder.addCase(loginUserThunk.rejected, (state) => {
      state.data = { status: "guest" };
    });

    // logoutUserThunk
    builder.addCase(logoutUserThunk.fulfilled, (state) => {
      state.data = { status: "guest" };
      state.token = null;
    });
    builder.addCase(logoutUserThunk.rejected, (state) => state);
    builder.addCase(getUserId.fulfilled, (state) => state);
  },
});

export const { setToken } = userSlice.actions;
export default userSlice.reducer;
