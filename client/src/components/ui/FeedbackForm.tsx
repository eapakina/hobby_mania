import { Box, Button, Grid, TextField } from '@mui/material';
import React, { useState } from 'react'
import { buttonStyle, postFormGridStyles } from '../styles';
import { useAppDispatch } from '../../redux/hooks';


export default function FeedbackForm() :JSX.Element{
    const [input, setInput] = useState({ title: '', body: '' });
    const dispatch = useAppDispatch();
    const changeHandler: React.ChangeEventHandler<HTMLInputElement> = (e): void => {
      setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
    const textFieldStyle = {
        marginBottom: '10px', // Отступ между полями ввода
      };
    
  return (
    <Grid container direction="row" sx={postFormGridStyles}>
    <Grid item xs={3} />
    <Grid item xs={6}>
      <Box
        py={5}
        display="flex"
        flexDirection="column"
        alignItems="left"
        justifyContent="space-around"
      >
        <TextField
          size="small"
          variant="outlined"
          name="title"
          label="Title"
          value={input.title}
          onChange={changeHandler}
          sx={textFieldStyle}
        />
        <TextField
          size="medium"
          variant="outlined"
          name="body"
          label="body"
          multiline // Это делает поле ввода многострочным
          rows={4} // Задайте количество строк по своему усмотрению
  
          value={input.body}
          onChange={changeHandler}
          sx={textFieldStyle}
        />
        <Button
          variant="outlined"
          sx={buttonStyle}
          onClick={() => {
            dispatch(addFeedbackThunk(input));
            setInput({ title: '', body: '' });
          
          }}
        >
          Добавить отзыв
        </Button>
      </Box>
    </Grid>
  </Grid>
  )
}
