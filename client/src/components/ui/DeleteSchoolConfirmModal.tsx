import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { useAppDispatch } from '../../redux/hooks';
import { deleteSchoolThunk } from '../../redux/slices/school/schoolThunk';

type DeleteSchoolConfirmModalProps ={
  id: number;
  open: boolean;
  setOpen: (open: boolean) => void;
}
export default function DeleteSchoolConfirmModal({id, open, setOpen}:DeleteSchoolConfirmModalProps ): JSX.Element {
  // const logoutDialogOpened = false;
  const handleClose = (): void => {setOpen(false)};
  const dispatch = useAppDispatch();

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title-logout"
    >
      <DialogTitle id="alert-dialog-title-logout">Вы хотите удалить свою школу с портала?</DialogTitle>
      <DialogActions>
        <Button onClick={handleClose} autoFocus>
          Нет
        </Button>
        <Button onClick={() => {handleClose(); 
        void dispatch(deleteSchoolThunk(id))}}
        >Да</Button>
      </DialogActions>
    </Dialog>
  );
}
