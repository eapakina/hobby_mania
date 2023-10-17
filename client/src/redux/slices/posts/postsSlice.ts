import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import type { PostType } from "../../../types/postTypes";
import { deletePostThunk, getPostsThunk, addPostThunk } from "./postsThunks";

const initialState: PostType[] = [];

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPostsThunk.fulfilled, (state, action) => {
      state.length = 0;
      state.push(...action.payload);
    });
    builder.addCase(addPostThunk.fulfilled, (state, action) => {
      state.push(action.payload);
    });
    builder.addCase(
      deletePostThunk.fulfilled,
      (state, action: PayloadAction<number>) =>
        state.filter((el) => el.id !== action.payload)
    );
  },
});

export default postsSlice.reducer;
