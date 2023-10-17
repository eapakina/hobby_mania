import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type {
  ClassFormType,
  ClassType,
  FavoriteClassType,
} from "../../../types/classTypes";
import type { UserModelType } from "../../../types/userTypes";
import { UserType } from "../../../types/userTypes";

export const getFavoriteClassThunk = createAsyncThunk<
  FavoriteClassType[],
  UserModelType["id"]
>("/getFavorite", async (id) => {
  const { data } = await axios<FavoriteClassType[]>(`/favorite/`);
  console.log(id);
  return data;
});
export const addFavoriteThunk = createAsyncThunk<ClassType, ClassType["id"]>(
  "liked/addCoursesToLikedThunk",
  async (id) => {
    const { data } = await axios<ClassType>(`/like/${id}`);
    return data;
  }
);
export const removeFavoriteThunk = createAsyncThunk<
  ClassType["id"],
  { id: ClassType["id"] }
>("liked/removeLikeThunk", async ({ id }) => {
  await axios.delete<ClassType>(`/like/${id}`);
  return id;
});
