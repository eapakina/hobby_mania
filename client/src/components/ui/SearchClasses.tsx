import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import ClassRandomItem from "./ClassRandomItem";
import { getUserId } from "../../redux/slices/user/userThunks";
import { getFavoriteClassThunk } from '../../redux/slices/favorites/favoriteThunks';

export default function SearchClasses({ classes }): JSX.Element {
  const user = useAppSelector((store) => store.user.data);
  const userFavorites = useAppSelector((store) => store.favorites);
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(getUserId());
  }, []);

  useEffect(() => {
    if (user.status === 'logged') {
      void dispatch(getFavoriteClassThunk());
    }
  }, [user]);

  console.log(classes);
  return (
    <Box display="flex" flexWrap="wrap" sx={{padding: '20px', justifyContent: "space-between"}}>
      {classes?.map((item) => (
        <ClassRandomItem key={item.id} item={item} isLiked={userFavorites.includes(item.id)} />
      ))}
    </Box>
  );
}
