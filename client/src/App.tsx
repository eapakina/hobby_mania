import React, { useEffect } from "react";
import { Container } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Route, Routes } from "react-router-dom";
import { useAppDispatch } from "./redux/hooks";
import { checkUserThunk } from "./redux/slices/user/userThunks";
import { Navbar } from "./components/ui/NavBar";
import AuthErrorDialog from "./components/ui/AuthErrorDialog";

import { MainPage } from "./components/pages/MainPage";
import { AuthPage } from "./components/pages/AuthPage";
import { NotFoundPage } from "./components/pages/NotFoundPage";
import { SchoolPage } from "./components/pages/SchoolPage";
import Favorite from "./components/pages/UserPage/Favorite";

// import Favorite from './components/pages/UserPage/Favorite';
// import LogoutConfirmDialog from "./components/ui/LogoutConfirmDialog";
// import AuthSchoolPage from './components/pages/SchoolPage/AuthPage/AuthSchoolPage';
import SearchPage from "./components/pages/SchoolPage/ClassPage/SearchPage";
import AllSchools from "./components/pages/AllSchools";
import Footer from "./components/ui/Footer";
// import SchoolPage from './components/pages/SchoolPage/SchoolPage';
// import ClassForm from './components/pages/SchoolPage/ClassPage/ClassForm';
// import NewsPage from './components/pages/NewsPage';
// import AuthUserPage from './components/pages/UserPage/AuthPage/AuthUserPage';
// import RandomPage from './components/pages/MainPage/RandomPage';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(checkUserThunk());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const theme = createTheme({
    palette: {
      primary: {
        main: "#AE6378",
      },
      secondary: {
        main: "#79616F",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Navbar />
        <Container sx={{ minHeight: "80vh" }}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/school/:id" element={<SchoolPage />} />

            {/* <Route path="/News" element={<NewsPage />} /> */}
            {/* <Route path="/:auth" element={<AuthUserPage />} /> */}
            {/* <Route path="/school/authSchool" element={<AuthSchoolPage />} /> */}
            <Route path="/search" element={<SearchPage />} />
            {/* <Route path="/:authschool" element={<AuthSchool />} /> */}
            {/* <Route path="/:authuser" element={<AuthPage />} /> */}

            {/* <Route path="/school/:id/classform" element={<ClassForm />} /> */}
            {/* <Route path="/random" element={<RandomPage />} /> */}
            <Route path="/favorite" element={<Favorite />} />
            <Route path="/allschools" element={<AllSchools />} />

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Container>
        <AuthErrorDialog />
        {/* <LogoutConfirmDialog /> */}
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
