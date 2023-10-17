import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import type { NewsType } from "../../../types/newsTypes";
import { deleteNewsThunk, getNewsThunk, addNewsThunk } from "./newsThunks";

const initialState: NewsType[] = [];

export const NewsSlice = createSlice({
  name: "News",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getNewsThunk.fulfilled, (state, action) => {
      state.length = 0;
      state.push(...action.payload);
    });
    builder.addCase(addNewsThunk.fulfilled, (state, action) => {
      state.push(action.payload);
    });
    builder.addCase(
      deleteNewsThunk.fulfilled,
      (state, action: PayloadAction<number>) =>
        state.filter((el) => el.id !== action.payload)
    );
  },
});

export default NewsSlice.reducer;
