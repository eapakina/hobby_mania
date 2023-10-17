import { createSlice } from "@reduxjs/toolkit";
import type {
  ClassFormType,
  ClassType,
  FavoriteClassType,
} from "../../../types/classTypes";
import {
  addFavoriteThunk,
  getFavoriteClassThunk,
  getFavoriteUserClassThunk,
  removeFavoriteThunk,
} from "./favoriteThunks";

const initialState: FavoriteClassType[] = [];

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getFavoriteClassThunk.fulfilled, (state, action) =>
      action.payload.map((el) => el.classId)
    );
    builder.addCase(addFavoriteThunk.fulfilled, (state, action) => {
      state.push(action.payload);
    });
    builder.addCase(removeFavoriteThunk.fulfilled, (state, action) =>
      state.filter((el) => el.id !== action.payload)
    );
    builder.addCase(getFavoriteUserClassThunk.fulfilled, (state, action) =>
      action.payload.map((el) => el.Class)
    );
  },
});

export default favoritesSlice.reducer;
