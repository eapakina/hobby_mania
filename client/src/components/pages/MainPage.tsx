import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import { postFormGridStyles } from '../styles';

export default function MainPage(): JSX.Element {
  return (
    <Grid container direction="row" sx={{ ...postFormGridStyles, minHeight: '80vh' }}>
      <Grid item xs={4} />
      <Grid item xs={4}>
        <Box pt={4} display="flex" flexDirection="row" justifyContent="center">
          <Typography variant="h3" color="#2E3B55">
            Main Page
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
