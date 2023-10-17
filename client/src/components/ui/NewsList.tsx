import React, { useEffect } from "react";
import { Box, Paper } from "@mui/material";
import NewsItem from "./NewsItem";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { postListPaperStyles } from "../styles";
import { getNewsThunk } from "../../redux/slices/news/newsThunks";

export default function NewsList({ id }: { id: number }): JSX.Element {
  const news = useAppSelector((store) => store.news);

  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(getNewsThunk(id));
  }, []);

  return (
    <Paper elevation={0} sx={newListPaperStyles}>
      <Box
        mt={1}
        py={2}
        px={2}
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
      >
        {News?.map((new) => (
          <Box key={new.id} p={1}>
            <newItem key={new.id} new={new} />
          </Box>
        ))}
      </Box>
    </Paper>
  );
}
