import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AuthErrorDialog(): JSX.Element {
  const [authError] = React.useState<Error | null>(null);

  const handleClose = (): void => {};

  return (
    <Dialog
      open={!!authError}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{authError?.message}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          An error occured. Please try again or contact support.
          <br />
          {authError?.name}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} autoFocus>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
