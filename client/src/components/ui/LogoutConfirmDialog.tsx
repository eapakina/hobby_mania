import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { useAppDispatch } from '../../redux/hooks';
import { logoutUserThunk } from '../../redux/slices/user/userThunks';
import { logoutSchoolThunk } from '../../redux/slices/school/schoolThunk';

type ModalExitType = {
  open: boolean;
  setOpen: () => void;
};
export default function LogoutConfirmDialog({ open, setOpen }: ModalExitType): JSX.Element {
  const dispatch = useAppDispatch();
  const handleClose = (): void => {
    setOpen(false);
  };
  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title-logout">
      <DialogTitle id="alert-dialog-title-logout">Вы точно хотите выйти?</DialogTitle>
      <DialogActions>
        <Button onClick={handleClose} autoFocus>
          No
        </Button>
        <Button
          onClick={() => {
            handleClose();
            void dispatch(logoutUserThunk());
            void dispatch(logoutSchoolThunk());
          }}
        >
          Logout
        </Button>
      </DialogActions>
    </Dialog>
  );
}
