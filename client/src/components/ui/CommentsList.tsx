import { List, ListItem, ListItemText, Paper, Typography } from "@mui/material";
import React, { useEffect } from "react";
import CommentItem from "./CommentItem";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getCommentThunks } from "../../redux/slices/comments/commentThunks";

export default function CommentsList({ id }): JSX.Element {
  const reviews = useAppSelector((store) => store.comments);
  const dispatch = useAppDispatch();
  useEffect(() => {
    void dispatch(getCommentThunks(id));
  }, []);

  return (
    <div>
      <Paper elevation={3} style={{ padding: "20px", marginBottom: "20px" }}>
        <Typography variant="h6">Отзывы</Typography>
        <List>{reviews?.map((review) => <CommentItem review={review} />)}</List>
      </Paper>
    </div>
  );
}
