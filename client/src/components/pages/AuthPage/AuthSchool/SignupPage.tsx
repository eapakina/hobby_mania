import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Grid, Input, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { signUpSchoolThunk } from '../../../../redux/slices/school/schoolThunk';
import { authTextFieldStyle, buttonStyle, postFormGridStyles } from '../../../styles';
import getDistrictThunks from '../../../../redux/slices/district/districtThunk';

export function SignupPage(): JSX.Element {

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const distr = useAppSelector((store)=>store.districts)



  const submitHandler: React.ChangeEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    // const formData = Object.fromEntries(new FormData(e.currentTarget));
    const formData = new FormData();
    const target = e.target as typeof e.target & {
      schoolName: { value: string };
      adress: { value: string };
      phone: { value: string };
      info: { value: string };
      email: { value: string };
      password: { value: string };
      district: {value: string};
      file: { files: File[] };
    };
    formData.append('schoolName', target.schoolName.value);
    formData.append('adress', target.adress.value);
    formData.append('phone', target.phone.value);
    formData.append('info', target.info.value);
    formData.append('file', target.file.files[0]);
    formData.append('email', target.email.value);
    formData.append('password', target.password.value);
    formData.append('district', target.district.value)
    e.target.reset();

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    void dispatch(signUpSchoolThunk(formData)).then(()=> navigate('/'));
  };

    useEffect(()=>{
void dispatch(getDistrictThunks())
  },[])

  return (
    <Grid container direction="row" sx={{ ...postFormGridStyles, minHeight: '80vh', justifyContent: 'center' }}>
        <Box display="flex" flexDirection="column" alignItems="center" textAlign="center">

      <Typography variant="h2" textAlign="center" >
        Регистрация школы
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
        <InputLabel id="demo-select-small-label">Район</InputLabel>
        <Select
            label="District"
            name="district"
                     
          >
            {/* <MenuItem value="Танцы">Танцы</MenuItem>
            <MenuItem value="Каратэ">Каратэ</MenuItem>
            <MenuItem value="Шахматы">Шахматы</MenuItem> */}
            {distr.map((el) => (
              <MenuItem  key={el.id} value={el.district}>
                {el.district}
              </MenuItem>
            ))}
          </Select>
          <TextField variant="outlined" name="schoolName" label="SchoolName" sx={authTextFieldStyle} />
          <TextField variant="outlined" name="adress" label="Adress" sx={authTextFieldStyle} />
          <TextField variant="outlined" name="phone" label="Phone" sx={authTextFieldStyle} />
          <TextField variant="outlined" name="info" label="Info" sx={authTextFieldStyle} />
          <TextField variant="outlined" name="email" label="Email" type="email" sx={authTextFieldStyle} />
          <TextField variant="outlined" name="password" label="Password" type="password" sx={authTextFieldStyle} />

          <Button variant="outlined" type="submit" sx={buttonStyle}>
            Зарегистрироваться
          </Button>
        </Box>
      </Grid>
      </Box>
    </Grid>
  );
}

export default SignupPage;
