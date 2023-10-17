import { createSlice } from "@reduxjs/toolkit";
import type {
  ClassFormType,
  ClassType,
  FavoriteClassType,
} from "../../../types/classTypes";
import {
  addFavoriteThunk,
  getFavoriteClassThunk,
  removeFavoriteThunk,
} from "./favoriteThunks";

const initialState: ClassType[] = [];

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getFavoriteClassThunk.fulfilled, (state, action) =>
      action.payload.map((el) => el.Class)
    );
    builder.addCase(addFavoriteThunk.fulfilled, (state, action) => {
      state.push(action.payload);
    });
    builder.addCase(removeFavoriteThunk.fulfilled, (state, action) =>
      state.filter((el) => el.id !== action.payload)
    );
  },
});

export default favoritesSlice.reducer;
