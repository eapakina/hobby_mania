import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { getRandomClassesThunk } from '../../../redux/slices/class/classesThunks';
import ClassRandomItem from '../../ui/ClassRandomItem';
import { getFavoriteClassThunk } from '../../../redux/slices/favorites/favoriteThunks';
import { getUserId } from '../../../redux/slices/user/userThunks';

export function MainPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const school = useAppSelector((store) => store.school);
  const classes = useAppSelector((store) => store.classes);
  const user = useAppSelector((store) => store.user.data);
  const userFavorites = useAppSelector((store) => store.favorites);

  // const arrayFavClassesId = userFavorites.map((el) => el.id);
  // userFavorites.forEach((el) => arrayFavClassesId.push(el.classId));
  // const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    void dispatch(getUserId());
  }, []);

  useEffect(() => {
    void dispatch(getRandomClassesThunk());
    console.log('userStatus', user);
    if (user.status === 'logged') {
      console.log(user.id);
      void dispatch(getFavoriteClassThunk());
    }
  }, [user]);

  // console.log(classes);
  console.log('userFavorites', userFavorites);
  // console.log(classes[0]?.id === userFavorites[0]);
  return (
    <Box display="flex" flexWrap="wrap">
      {classes?.map((item) => <ClassRandomItem key={item.id} isLiked={userFavorites.includes(item.id)} item={item} />)}
    </Box>
  );
}

export default MainPage;
