import { Box, Button, Grid, Input, InputLabel, TextField, Typography } from '@mui/material';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch } from '../../../../redux/hooks';
import { loginUserThunk } from '../../../../redux/slices/user/userThunks';
import { authTextFieldStyle, buttonStyle, postFormGridStyles } from '../../../styles';

export function SigninPage(): JSX.Element {
  // const { auth } = useParams();
  // console.log(auth);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const submitHandler: React.ChangeEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const formData = Object.fromEntries(new FormData(e.currentTarget));
    e.target.reset();

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    void dispatch(loginUserThunk(formData)).then(() => navigate('/'));
  };

  return (
    <Grid container direction="row" sx={{ ...postFormGridStyles, minHeight: '80vh', justifyContent: 'center' }}>
      <Typography variant="h2" textAlign="center">
        Авторизация
      </Typography>
      <Grid item xs={6}>
        <Box
          component="form"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="space-around"
          py={5}
          onSubmit={submitHandler}
        >
          <TextField variant="outlined" name="email" label="Email" type="email" sx={authTextFieldStyle} />
          <TextField variant="outlined" name="password" label="Password" type="password" sx={authTextFieldStyle} />
          <Button variant="outlined" type="submit" sx={buttonStyle}>
            Войти
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}

export default SigninPage;
