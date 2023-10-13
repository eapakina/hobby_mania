import React, { useEffect } from 'react';
import { Container } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import MainPage from './components/pages/MainPage';
import Navbar from './components/ui/Navbar';
import { useAppDispatch } from './redux/hooks';
import { checkUserThunk } from './redux/slices/user/userThunks';
import AuthErrorDialog from './components/ui/AuthErrorDialog';
import LogoutConfirmDialog from './components/ui/LogoutConfirmDialog';
import AuthSchoolPage from './components/pages/AuthSchoolPage';
import SearchPage from './components/pages/SearchPage';
import SchoolPage from './components/pages/SchoolPage';
import ClassForm from './components/pages/ClassForm';
import AuthPage from './components/pages/AuthUserPage';
import PostsPage from './components/pages/PostsPage';
import AuthUserPage from './components/pages/AuthUserPage';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(checkUserThunk());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/:auth" element={<AuthUserPage />} />
        <Route path="/school/:authSchool" element={<AuthSchoolPage />} />
        <Route path="/search" element={<SearchPage />} />
        {/* <Route path="/:authschool" element={<AuthSchool />} /> */}
        <Route path="/:authuser" element={<AuthPage />} />
        <Route path="/school/:id" element={<SchoolPage />} />
        <Route path="/school/:id/classform" element={<ClassForm />} />
      </Routes>
      <AuthErrorDialog />
      <LogoutConfirmDialog />
    </Container>
  );
}

export default App;
