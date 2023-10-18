import React from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { Box, Button, Grid, Input, InputLabel, TextField, Typography } from '@mui/material';
import { useAppDispatch } from '../../../../redux/hooks';
import { loginSchoolThunk, signUpSchoolThunk } from '../../../../redux/slices/school/schoolThunk';
import type { SchoolLoginFormtype, SchoolSingUpFormType } from '../../../../types/schoolTypes';
import { authTextFieldStyle, buttonStyle, postFormGridStyles } from '../../../styles';
import { ThemeContext } from '@emotion/react';

export function SigninPage(): JSX.Element {
  const { auth } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const submitHandler: React.ChangeEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.currentTarget));
    // const formData = new FormData();
    // const target = e.target as typeof e.target & {
    //   schoolName: { value: string };
    //   adress: { value: string };
    //   phone: { value: string };
    //   info: { value: string };
    //   email: { value: string };
    //   password: { value: string };
    //   file: { files: File[] };
    // };
    // formData.append('schoolName', target.schoolName.value);
    // formData.append('adress', target.adress.value);
    // formData.append('phone', target.phone.value);
    // formData.append('info', target.info.value);
    // formData.append('file', target.file.files[0]);
    // formData.append('email', target.email.value);
    // formData.append('password', target.password.value);
    e.target.reset();

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    void dispatch(loginSchoolThunk(formData)).then(() => navigate('/'));
  };
  return (
    <Grid container direction="row" sx={{ ...postFormGridStyles, minHeight: '80vh', justifyContent: 'center' }}>
      <Typography variant="h2" textAlign="center">
        Авторизация школы
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
