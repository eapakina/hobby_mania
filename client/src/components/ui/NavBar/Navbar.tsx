import React, { useState } from "react";
import { Link as NavLink } from "react-router-dom";
import {
  Link,
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Avatar,
} from "@mui/material";
import { useAppSelector } from "../../../redux/hooks";
import { linkStyle } from "../../styles";
import LogoutConfirmDialog from "../LogoutConfirmDialog";

export function Navbar(): JSX.Element {
  const user = useAppSelector((store) => store.user);
  const school = useAppSelector((store) => store.school);
  const [open, setOpen] = useState(false);

  const handleOpen = (): void => {
    setOpen(true);
  };

  console.log(!!school.data);
  console.log(user.data.status, "1231412414");

  const links =
    user.data.status === "logged"
      ? [
          { to: "/", name: "Главная" },
          { to: "/favorite", name: "Избранное" },
          { to: "/search", name: "Поиск" },
          { to: "/allschools", name: "Центры" },
        ]
      : school.data.status === "logged"
      ? [
          { to: "/", name: "Главная" },
          { to: "/search", name: "Поиск" },
          { to: "/allschools", name: "Центры" },
        ]
      : [
          { to: "/", name: "Главная" },
          { to: "/auth", name: "Регистрация/Авторизация" },
        ];

  return (
    <Box sx={{ flexGrow: 1, typography: "body1" }}>
      <AppBar
        position="static"
        sx={{
          background: "#EAB595",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
      >
        <Toolbar>
          <IconButton>
            <a href="/">
              <Avatar alt="" src="/images.png" />
            </a>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            HoBBy
          </Typography>

          {links.map((link) => (
            <Link
              component={NavLink}
              key={link.name}
              to={link.to}
              sx={linkStyle}
            >
              {link.name}
            </Link>
          ))}
          {(user.data.status === "logged" ||
            school.data.status === "logged") && (
            <Button color="inherit" onClick={() => handleOpen()}>
              Выход
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <LogoutConfirmDialog open={open} setOpen={setOpen} />
    </Box>
  );
}

export default Navbar;
