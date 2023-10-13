import React from 'react'
import { useParams } from 'react-router-dom';
import { Box, Button, Grid, TextField } from '@mui/material';
import { useAppDispatch } from '../../redux/hooks';
import { loginSchoolThunk, signUpSchoolThunk } from '../../redux/slices/school/schoolThunk';
import type{ SchoolLoginFormtype, SchoolSingUpFormType } from '../../types/schoolTypes';
import { authTextFieldStyle, buttonStyle, postFormGridStyles } from '../styles';

export default function AuthSchoolPage():JSX.Element {
    const { auth } = useParams();
  const dispatch = useAppDispatch();

  const submitHandler: React.ChangeEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const formData = Object.fromEntries(new FormData(e.currentTarget));

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    auth === 'signup'
      ? void dispatch(signUpSchoolThunk(formData as SchoolSingUpFormType))
      : void dispatch(loginSchoolThunk(formData as SchoolLoginFormtype));
  };
  console.log(auth === 'signup')
  return (
    <Grid container direction="row" sx={{ ...postFormGridStyles, minHeight: '80vh' }}>
      <Grid item xs={3} />
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
          {auth === 'signup' && (
            <>
            <TextField
              variant="outlined"
              name="schoolName"
              label="SchoolName"
              sx={authTextFieldStyle}
            />

            <TextField
              variant="outlined"
              name="adress"
              label="Adress"
              sx={authTextFieldStyle}
            />
            <TextField
              variant="outlined"
              name="phone"
              label="Phone"
              sx={authTextFieldStyle}
            />
            <TextField
              variant="outlined"
              name="info"
              label="Info"
              sx={authTextFieldStyle}
            />
            <TextField
            variant="outlined"
            name="imgSchool"
            label="ImgSchool"
            sx={authTextFieldStyle}
          />
          </>
          )}
          <TextField
            variant="outlined"
            name="email"
            label="Email"
            type="email"
            sx={authTextFieldStyle}
          />
          <TextField
            variant="outlined"
            name="password"
            label="Password"
            type="password"
            sx={authTextFieldStyle}
          />

          <Button variant="outlined" type="submit" sx={buttonStyle}>
            {auth === 'signup' ? 'Sign Up' : 'Login'}
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}
