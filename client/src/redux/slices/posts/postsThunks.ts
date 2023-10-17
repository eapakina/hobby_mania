import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type { PostFormType, PostType } from '../../../types/postTypes';

export const getPostsThunk = createAsyncThunk<PostType, PostType['id']>('posts/getPosts', async (id) => {
  const { data } = await axios<PostType>(`/blog/school/${id}`);
  console.log(data)
  return data;
});

export const addPostThunk = createAsyncThunk<PostType, PostFormType>(
  'posts/addPost',
  async (formData) => {
    const { data } = await axios.post<PostType>('/blog/school/${id}', formData);
    return data;
  },
);

export const deletePostThunk = createAsyncThunk<PostType['id'], PostType['id']>(
  'posts/deletePost',
  async (id) => {
    await axios.delete(`/blog/school/${id}`);
    return id;
  },
);

export const updatePostThunk = createAsyncThunk<PostType, PostType>(
  'posts/updatePost',
  (formData) => axios.patch<PostType>(`/posts/${formData.id}`, formData).then((res) => res.data),

);
