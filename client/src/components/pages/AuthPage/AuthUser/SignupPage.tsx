import { Box, Button, Grid, Input, InputLabel, TextField, Typography } from '@mui/material';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch } from '../../../../redux/hooks';
import { signUpUserThunk } from '../../../../redux/slices/user/userThunks';
import { authTextFieldStyle, buttonStyle, postFormGridStyles } from '../../../styles';

export function SignupPage(): JSX.Element {
  // const { auth } = useParams();
  // console.log(auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const submitHandler: React.ChangeEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    // const formData = Object.fromEntries(new FormData(e.currentTarget));
    // console.log(formData,'file');
    // if (!e.target.description.value || !e.target.file.files[0]) return;
    const formData = new FormData();
    const target = e.target as typeof e.target & {
      userName: { value: string };
      email: { value: string };
      password: { value: string };
      file: { files: File[] };
    };
    formData.append('userName', target.userName.value);
    formData.append('file', target.file.files[0]);
    formData.append('email', target.email.value);
    formData.append('password', target.password.value);
    e.target.reset();

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    void dispatch(signUpUserThunk(formData)).then(() => navigate('/'));
  };

  return (
    <Grid container direction="row" sx={{ ...postFormGridStyles, minHeight: '80vh', justifyContent: 'center' }}>
      <Typography variant="h2" textAlign="center">
        Регистрация
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
            <InputLabel htmlFor="file" style={{
  display: 'inline-block',
  padding: '10px 15px',
  border: '2px solid #ccc',
  borderRadius: '5px',
  background: 'lightgray',
  cursor: 'pointer'
}}>
  Загрузить фото
</InputLabel>
  <Input
    type="file"
    id="file"
    name="file"
    style = {{display:'none'}}
    sx={authTextFieldStyle}
  />
          <TextField variant="outlined" name="userName" label="Имя" sx={authTextFieldStyle} />
          <TextField variant="outlined" name="email" label="Email" type="email" sx={authTextFieldStyle} />
          <TextField variant="outlined" name="password" label="Пароль" type="password" sx={authTextFieldStyle} />
          <Button variant="outlined" type="submit" sx={buttonStyle}>
            Зарегистрироваться
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}

export default SignupPage;
