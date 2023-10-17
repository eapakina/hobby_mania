import { createSlice } from "@reduxjs/toolkit";
import { addCommentThunks, getCommentThunks } from "./commentThunks";
import type { CommentType } from "../../../types/commentTypes";

const initialState: CommentType[] = [];

export const CommentSlice = createSlice({
  name: "Comment",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCommentThunks.fulfilled, (state, action) => {
      state.length = 0;
      state.push(...action.payload);
    });

    builder.addCase(addCommentThunks.fulfilled, (state, action) => {
      state.push(action.payload);
    });
  },
});

export default CommentSlice.reducer;
