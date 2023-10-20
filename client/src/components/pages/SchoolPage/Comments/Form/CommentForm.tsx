import { Box, Button, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';
import { buttonStyle, postFormGridStyles } from '../../../../styles';
import { useAppDispatch, useAppSelector } from '../../../../../redux/hooks';
import { addCommentThunks } from '../../../../../redux/slices/comments/commentThunks';

type CommentFormProps = {
  id: number;
};

export function CommentForm({ id }: CommentFormProps): JSX.Element {
  const [input, setInput] = useState({
    schoolId: id,
    title: '',
    body: '',
  });
  const dispatch = useAppDispatch();
  const user = useAppSelector((store) => store.user.data);
  console.log(user);
  const changeHandler: React.ChangeEventHandler<HTMLInputElement> = (e): void => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const textFieldStyle = {
    marginBottom: '10px',
  };

  return (
    <Grid container direction="row" sx={postFormGridStyles}>
          {user.status === 'logged' &&
          <>
      <Grid item xs={3} />
      <Grid item xs={6}>
        <Box py={5} display="flex" flexDirection="column" alignItems="left" justifyContent="space-around">
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
            multiline
            rows={4}
            value={input.body}
            onChange={changeHandler}
            sx={textFieldStyle}
          />
          <Button
            variant="outlined"
            sx={buttonStyle}
            onClick={() => {
              void dispatch(addCommentThunks(input));
              setInput({ schoolId: id, title: '', body: '' });
            }}
          >
            Добавить отзыв
          </Button>
        </Box>
      </Grid>
      </>}
    </Grid>
  );
}

export default CommentForm;
