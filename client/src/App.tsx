import React, { useEffect } from 'react';
import { Container } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { checkUserThunk } from './redux/slices/user/userThunks';
import { Navbar } from './components/ui/NavBar';
import AuthErrorDialog from './components/ui/AuthErrorDialog';

import { MainPage } from './components/pages/MainPage';
import { AuthPage } from './components/pages/AuthPage';
import { NotFoundPage } from './components/pages/NotFoundPage';
import { SchoolPage } from './components/pages/SchoolPage';
import Favorite from './components/pages/UserPage/Favorite';

// import Favorite from './components/pages/UserPage/Favorite';
// import LogoutConfirmDialog from "./components/ui/LogoutConfirmDialog";
// import AuthSchoolPage from './components/pages/SchoolPage/AuthPage/AuthSchoolPage';
import SearchPage from './components/pages/SchoolPage/ClassPage/SearchPage';
import PrivateRouter from './components/hocs/PrivateRouter';
import { checkSchoolThunk } from './redux/slices/school/schoolThunk';
// import SchoolPage from './components/pages/SchoolPage/SchoolPage';
// import ClassForm from './components/pages/SchoolPage/ClassPage/ClassForm';
// import NewsPage from './components/pages/NewsPage';
// import AuthUserPage from './components/pages/UserPage/AuthPage/AuthUserPage';
// import RandomPage from './components/pages/MainPage/RandomPage';

function App(): JSX.Element {
  const user = useAppSelector((store) => store.user.data);
  const dispatch = useAppDispatch();
  const school = useAppSelector((store) => store.school);

  useEffect(() => {
    void dispatch(checkUserThunk());
    void dispatch(checkSchoolThunk())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(user);

  return (
    <Container>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route element={<PrivateRouter isAllowed={user.status === 'guest'}/>}>
          <Route path="/auth" element={<AuthPage />} />
        </Route>
        <Route path="/school/:id" element={<SchoolPage />} />

        {/* <Route path="/News" element={<NewsPage />} /> */}
        {/* <Route path="/:auth" element={<AuthUserPage />} /> */}
        {/* <Route path="/school/authSchool" element={<AuthSchoolPage />} /> */}
        <Route path="/search" element={<SearchPage/>} />
        {/* <Route path="/:authschool" element={<AuthSchool />} /> */}
        {/* <Route path="/:authuser" element={<AuthPage />} /> */}

        {/* <Route path="/school/:id/classform" element={<ClassForm />} /> */}
        {/* <Route path="/random" element={<RandomPage />} /> */}
        <Route element={<PrivateRouter isAllowed={user.status === 'logged'}/>}>
          <Route path="/favorite" element={<Favorite />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <AuthErrorDialog />
      {/* <LogoutConfirmDialog /> */}
    </Container>
  );
}

export default App;
