import { createSlice } from "@reduxjs/toolkit";
import { addFeedbackThunk, getFeedbackThunk } from "./feedbackThunks";
import type { FeedbackType } from "../../../types/feedbackTypes";

const initialState: FeedbackType[] = [];

export const feedbackSlice = createSlice({
  name: "feedback",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getFeedbackThunk.fulfilled, (state, action) => {
      state.length = 0;
      state.push(...action.payload);
    });

    builder.addCase(addFeedbackThunk.fulfilled, (state, action) => {
      state.push(action.payload);
    });
  },
});

export default feedbackSlice.reducer;
