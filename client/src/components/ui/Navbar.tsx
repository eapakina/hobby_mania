import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link as NavLink } from 'react-router-dom';
import { Link } from '@mui/material';
import {  useAppSelector } from '../../redux/hooks';
import { linkStyle } from '../styles';
import LogoutConfirmDialog from './LogoutConfirmDialog';

export default function Navbar(): JSX.Element {
  const user = useAppSelector((store) => store.user);
  const [open, setOpen] = useState(false)

  const handleOpen = ():void =>{
    setOpen(true)
  }


  const links =
    user.data.status === 'logged'
      ? [
          { to: '/', name: 'Home' },
          { to: '/favorite', name: 'Favorites' },
        ]
      : [
          { to: '/', name: 'Home' },
          { to: '/signup', name: 'Sign Up' },
          { to: '/login', name: 'Login' },
        ];

  return (
    <Box sx={{ flexGrow: 1, typography: 'body1' }}>
      <AppBar
        position="static"
        sx={{
          background: '#2E3B55',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Hello, {user.data.status === 'logged' ? user.data.userName : 'dear student'}
          </Typography>
          {links.map((link) => (
            <Link component={NavLink} key={link.name} to={link.to} sx={linkStyle}>
              {link.name}
            </Link>
          ))}
          {user.data.status === 'logged' && <Button color="inherit" onClick = {()=>
          handleOpen()}>Logout</Button>}
        </Toolbar>
      </AppBar>
      <LogoutConfirmDialog  open={open} setOpen={setOpen}/>
    </Box>
  );
}
