import { Box, Button } from '@mui/material';
import React, { useState } from 'react';
import { SigninPage as SigninPageUser, SignupPage as SignupPageUser } from './AuthUser';
import { SigninPage as SigninPageSchool, SignupPage as SignupPageSchool } from './AuthSchool';

// import AuthUserPage from './AuthUserPage';
// import AuthSchoolPage from '../../SchoolPage/AuthPage/AuthSchoolPage';

export function AuthPage(): JSX.Element {
  const [choose, setChoose] = useState('signinUser');

  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <Button onClick={() => setChoose('signupUser')}>Регистрация для физ. лиц</Button>
        <Button onClick={() => setChoose('signupSchool')}>Регистрация для юр. лиц</Button>
        <Button onClick={() => setChoose('signinUser')}>Вход для физ. лиц</Button>
        <Button onClick={() => setChoose('signinSchool')}>Вход для юр. лиц</Button>
      </Box>
      <Box>
        {choose === 'signupUser' && <SignupPageUser />}
        {choose === 'signupSchool' && <SignupPageSchool />}
        {choose === 'signinUser' && <SigninPageUser />}
        {choose === 'signinSchool' && <SigninPageSchool />}
      </Box>
    </Box>
  );
}

export default AuthPage;
