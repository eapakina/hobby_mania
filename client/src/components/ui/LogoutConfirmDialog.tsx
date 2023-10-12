import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';

export default function LogoutConfirmDialog(): JSX.Element {
  const logoutDialogOpened = false;
  const handleClose = (): void => {};
  return (
    <Dialog
      open={logoutDialogOpened}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title-logout"
    >
      <DialogTitle id="alert-dialog-title-logout">Log out from the account?</DialogTitle>
      <DialogActions>
        <Button onClick={handleClose} autoFocus>
          No
        </Button>
        <Button onClick={handleClose}>Logout</Button>
      </DialogActions>
    </Dialog>
  );
}
