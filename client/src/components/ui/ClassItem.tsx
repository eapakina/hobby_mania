import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );
  

export default function ClassItem():JSX.Element {
  return (
    <Card sx={{ minWidth: 275 }}>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
Название центра      </Typography>
      <Typography variant="h5" component="div">
Название занятия (каратэ)      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
Расписание      </Typography>
      <Typography variant="body2">
Описание        <br />
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Связаться </Button>
    </CardActions>
  </Card>
  )
}
