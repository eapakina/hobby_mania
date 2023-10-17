import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { NewsFormType, NewsType } from "../../../types/NewsTypes";

export const getNewsThunk = createAsyncThunk<NewsType, NewsType["id"]>(
  "News/getNews",
  async (id) => {
    const { data } = await axios<NewsType>(`/blog/school/${id}`);
    console.log(data);
    return data;
  }
);

export const addNewsThunk = createAsyncThunk<NewsType, NewsFormType>(
  "News/addPost",
  async (formData) => {
    const { data } = await axios.post<NewsType>("/blog/school/${id}", formData);
    return data;
  }
);

export const deleteNewsThunk = createAsyncThunk<NewsType["id"], NewsType["id"]>(
  "News/deletePost",
  async (id) => {
    await axios.delete(`/blog/school/${id}`);
    return id;
  }
);

export const updatePostThunk = createAsyncThunk<NewsType, NewsType>(
  "News/updatePost",
  (formData) =>
    axios
      .patch<NewsType>(`/News/${formData.id}`, formData)
      .then((res) => res.data)
);
