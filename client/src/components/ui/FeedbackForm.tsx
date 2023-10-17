import { Box, Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import { buttonStyle, postFormGridStyles } from "../styles";
import { useAppDispatch } from "../../redux/hooks";
import { addFeedbackThunk } from "../../redux/slices/feedback/feedbackThunks";

export default function FeedbackForm({ id }): JSX.Element {
  const [input, setInput] = useState({
    userId: id, // todo
    schoolId: id,
    title: "",
    body: "",
  });
  const dispatch = useAppDispatch();
  const changeHandler: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ): void => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const textFieldStyle = {
    marginBottom: "10px",
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
              void dispatch(addFeedbackThunk(input));
              setInput({ userId: 1, schoolId: 2, title: "", body: "" });
            }}
          >
            Добавить отзыв
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}
