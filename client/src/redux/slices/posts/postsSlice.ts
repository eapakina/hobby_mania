import { createSlice } from '@reduxjs/toolkit';
import type { PostType } from '../../../types/postTypes';
import { deletePostThunk, getPostsThunk } from './postsThunks';

const initialState: PostType[] = [];

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPostsThunk.fulfilled, (state, action) => action.payload);

    builder.addCase(deletePostThunk.fulfilled, (state, action) => state.filter((el) => el.id !== action.payload));
  },
});

export default postsSlice.reducer;
