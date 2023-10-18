import { Box, Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import { buttonStyle, postFormGridStyles, textFieldStyle } from "../styles";
import { addNewsThunk } from "../../redux/slices/news/newsThunks";
import { useAppDispatch } from "../../redux/hooks";

export default function NewsForm({ id }): JSX.Element {
  const [input, setInput] = useState({
    schoolId: id,
    title: "",
    body: "",
    img: "",
  });

  const changeHandler: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ): void => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const dispatch = useAppDispatch();
  return (
    <Grid container direction="row" sx={postFormGridStyles}>
      <Grid item xs={3} />
      <Grid item xs={6}>
        <Box
          py={5}
          display="flex"
          flexDirection="row"
          alignItems="center"
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
            size="small"
            variant="outlined"
            name="body"
            label="Body"
            value={input.body}
            onChange={changeHandler}
            sx={textFieldStyle}
          />
          <TextField
            size="small"
            variant="outlined"
            name="img"
            label="Image URL"
            value={input.img}
            onChange={changeHandler}
            sx={textFieldStyle}
          />

          <Button
            variant="outlined"
            sx={buttonStyle}
            onClick={() => {
              void dispatch(addNewsThunk(input));
              setInput({ schoolId: id, title: "", body: "", img: "" });
            }}
          >
            Send
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}
