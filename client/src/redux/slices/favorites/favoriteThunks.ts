import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type {
  ClassFormType,
  ClassType,
  FavoriteClassType,
} from "../../../types/classTypes";

export const getFavoriteClassThunk = createAsyncThunk<
  FavoriteClassType[]
>("/getFavorite", async () => {
  console.log('hahahahahaaaaaaa')
  const { data } = await axios<FavoriteClassType[]>(`/favorite/`);
  console.log("что мф получаем", data);

  return data;
});
export const addFavoriteThunk = createAsyncThunk<ClassType, ClassType["id"]>(
  "liked/addCoursesToLikedThunk",
  async (id) => {
    const { data } = await axios.post<ClassType>(`/favorite/${id}`);
    return data;
  }
);
export const removeFavoriteThunk = createAsyncThunk<
  ClassType["id"],
  ClassType["id"]
>("liked/removeLikeThunk", async (id) => {
  await axios.delete<ClassType>(`/favorite/${id}`);
  return id;
});

export const getFavoriteUserClassThunk = createAsyncThunk<
  FavoriteClassType[]
>("/getUserFavorite", async () => {
  const { data } = await axios<FavoriteClassType[]>(`/favorite/aa/user`);
  console.log("что мф получаем", data);

  return data;
});