import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { getUserId } from '../../../redux/slices/user/userThunks';

import { getFavoriteUserClassThunk } from '../../../redux/slices/favorites/favoriteThunks';
import ClassRandomItem from '../../ui/ClassRandomItem';

export default function Favorite(): JSX.Element {
  const dispatch = useAppDispatch();
  const user = useAppSelector((store) => store.user.data);
  console.log(user);
  const userFavorites = useAppSelector((store) => store.favorites);
  console.log(userFavorites);
  // const classes = useAppSelector((store) => store.classes);

  useEffect(() => {
    void dispatch(getUserId());
  }, []);
  useEffect(() => {
    if (user.status === 'logged') {
      // console.log(user.id)
      void dispatch(getFavoriteUserClassThunk());
    }
  }, [user]);

  return (
    <Box display="flex" flexWrap="wrap">
      {userFavorites?.map((item) => (
                  <div style={{ margin: "10px" }}>

      <ClassRandomItem key={item.id} isLiked item={item} />
      </div>
      ))}
    </Box>
  );
}
