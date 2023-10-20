import { Box, Button, CardMedia } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { getSchoolThunk } from '../../../../redux/slices/school/schoolThunk';
import DeleteSchoolConfirmModal from '../../../ui/DeleteSchoolConfirmModal';
import EditSchoolModalForm from '../../../ui/EditSchoolModalForm';
import axios from 'axios';

export function Description({ id }: { id: number }): JSX.Element {
  const school = useAppSelector((store) => store.school);
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [checkSchool, setCheckSchool] = useState({});
  useEffect(() => {
    void dispatch(getSchoolThunk(id));
    void axios('/school/check').then((res) => {
      setCheckSchool(res.data);
    })
  }, []);

  return (
    <Box>
      <CardMedia sx={{ height: 400, borderRadius: '40px', marginBottom: '20px' }} component="img" image={school.data?.imgSchool} title="school photo" />
      <Typography sx={{ fontSize: '30px', marginBottom: '5px'}}>{school.data?.schoolName}</Typography>
      <Typography sx={{ fontSize: '20px', marginBottom: '5px'}} variant="body2" color="text.secondary">
        Округ: {school.data?.District?.district}{' '}
      </Typography>
      <Typography sx={{ fontSize: '20px', marginBottom: '5px'}} variant="body2" color="text.secondary">
        Адрес: {school.data?.adress}{' '}
      </Typography>
      <Typography sx={{ fontSize: '20px', marginBottom: '5px'}} variant="body2" color="text.secondary">
        Телефон: {school.data?.phone}{' '}
      </Typography>
      <Typography sx={{ fontSize: '20px', marginBottom: '5px'}} variant="body2" color="text.secondary">
        email: {school.data?.email}{' '}
      </Typography>
      <Typography sx={{ fontSize: '20px', marginBottom: '5px'}} variant="body2" color="text.secondary">
        Описание: {school.data?.info}{' '}
      </Typography>
      { checkSchool.schoolId === school.data.id && (
        <> 
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        Удалить школу
      </Button>
      <Button
        onClick={() => {
          setOpenEdit(true);
        }}
      >
        Изменить описание школы
      </Button>
      {open && <DeleteSchoolConfirmModal id={id} open={open} setOpen={setOpen} />}
      {openEdit && (
        <EditSchoolModalForm id={id} school={school.data!} openEdit={openEdit} setOpenEdit={setOpenEdit} />
      )}{' '} 
      </>)
  }
    </Box>
  );
}

export default Description;
