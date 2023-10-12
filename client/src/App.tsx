import React, { useEffect } from 'react';
import { Container } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import PostsPage from './components/pages/PostsPage';
import MainPage from './components/pages/MainPage';
import AuthPage from './components/pages/AuthPage';
import Navbar from './components/ui/Navbar';
import { useAppDispatch } from './redux/hooks';
import { checkUserThunk } from './redux/slices/user/userThunks';
import AuthErrorDialog from './components/ui/AuthErrorDialog';
import LogoutConfirmDialog from './components/ui/LogoutConfirmDialog';

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
        <Route path="/:auth" element={<AuthPage />} />
      </Routes>
      <AuthErrorDialog />
      <LogoutConfirmDialog />
    </Container>
  );
}

export default App;
