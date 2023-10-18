import React, { useCallback, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import { useAppDispatch } from '../../redux/hooks';
import { editSchoolThunk } from '../../redux/slices/school/schoolThunk';
import type { SchoolType } from '../../types/schoolTypes';

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

type ModalFormPropsType = {
  id: number;
  school: SchoolType ;
  openEdit: boolean;
  setOpenEdit: (open: boolean) => void;
};

function EditSchoolModalForm({ id, school, openEdit, setOpenEdit}: ModalFormPropsType): JSX.Element {
  // const dispatch = useBookDispatchContext();
  const [formData, setFormData] = useState({
    schoolName: school.schoolName,
    adress: school.adress,
    phone: school.phone,
    email: school.email,
    info: school.info ,
    imgSchool: school.imgSchool
  });

  const changeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  // const submitHandler = useCallback((): void => {
  //   editBook(book.id, formData)
  //     .then((data) => dispatch({ type: 'EDIT_BOOK', payload: data }))
  //     .catch(console.log);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [formData]);
  const dispatch = useAppDispatch();

  return (
    <Modal
      open={openEdit}
      onClose={() => setOpenEdit(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Изменить описание школы
        </Typography>
        <Box display="flex" flexDirection="column" alignItems="center" gap={3}>
          <TextField
            label="schoolName"
            color="secondary"
            focused
            onChange={changeHandler}
            name="schoolName"
            value={formData.schoolName}
          />
          <TextField
            label="adress"
            color="secondary"
            focused
            onChange={changeHandler}
            name="adress"
            value={formData.adress}
          />
               <TextField
            label="phone"
            color="secondary"
            focused
            onChange={changeHandler}
            name="phone"
            value={formData.phone}
          />
               <TextField
            label="email"
            color="secondary"
            focused
            onChange={changeHandler}
            name="email"
            value={formData.email}
          />
               <TextField
            label="info"
            color="secondary"
            focused
            onChange={changeHandler}
            name="info"
            value={formData.info}
          />
               <TextField
            label="imgSchool"
            color="secondary"
            focused
            onChange={changeHandler}
            name="imgSchool"
            value={formData.imgSchool}
          />

          <Button
            onClick={() => {
              void dispatch(editSchoolThunk({id: school.id, formData}));
              setOpenEdit(false);
            }}
            variant="contained"
          >
            Изменить
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}

export default EditSchoolModalForm;
