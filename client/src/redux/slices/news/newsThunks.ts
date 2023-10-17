import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { NewsFormType, NewsType } from "../../../types/newsTypes";

export const getNewsThunk = createAsyncThunk<NewsType, NewsType["id"]>(
  "News/getNews",
  async (id) => {
    const { data } = await axios<NewsType>(`/news/school/${id}`);
    console.log(data);
    return data;
  }
);

export const addNewsThunk = createAsyncThunk<NewsType, NewsFormType>(
  "News/addNews",
  async (formData) => {
    const { data } = await axios.post<NewsType>("/news/school/${id}", formData);
    return data;
  }
);

export const deleteNewsThunk = createAsyncThunk<NewsType["id"], NewsType["id"]>(
  "News/deleteNews",
  async (id) => {
    await axios.delete(`/news/school/${id}`);
    return id;
  }
);

export const updatePostThunk = createAsyncThunk<NewsType, NewsType>(
  "News/updateNews",
  (formData) =>
    axios
      .patch<NewsType>(`/news/${formData.id}`, formData)
      .then((res) => res.data)
);
