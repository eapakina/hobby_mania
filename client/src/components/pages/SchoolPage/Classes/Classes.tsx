import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ClassItem from '../../../ui/ClassItem';
import ClassFormModal from '../../../ui/ClassFormModal';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { getClassesThunk } from '../../../../redux/slices/class/classesThunks';
import ClassEditFormModal from '../../../ui/ClassEditFormModal';
import { getFavoriteClassThunk } from '../../../../redux/slices/favorites/favoriteThunks';

export default function Classes(): JSX.Element {
  const [open, setOpen] = useState(false);
  const [idClass, setIdClass] = useState(0);
  console.log(idClass);
  const dispatch = useAppDispatch();
  const school = useAppSelector((store) => store.school);
  const classes = useAppSelector((store) => store.classes);
  const user = useAppSelector((store) => store.user.data);

  const userFavorites = useAppSelector((store) => store.favorites);
  console.log(userFavorites);
  const arrayFavClassesId = userFavorites.map((el) => el.id);

  const { id } = useParams();
  useEffect(() => {
    void dispatch(getClassesThunk(id));
    if (user.status === 'logged') {
      void dispatch(getFavoriteClassThunk(user.id));
    }
  }, [user]);

  console.log(classes);
  return (
    <Box display="flex" flexWrap="wrap">
      {classes?.map((item) => (
        <ClassItem
          key={item.id}
          item={item}
          school={school}
          // dispatch={dispatch}
          setOpen={setOpen}
          setIdClass={setIdClass}
          isLiked={userFavorites.includes(item.id)}
        />
      ))}
      <ClassFormModal />
      <ClassEditFormModal open={open} setOpen={setOpen} idClass={idClass} />
    </Box>
  );
}
