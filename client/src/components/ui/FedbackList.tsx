import { List, ListItem, ListItemText, Paper, Typography } from "@mui/material";
import React, { useEffect } from "react";
import FeedbackItem from "./FeedbackItem";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getFeedbackThunk } from "../../redux/slices/feedback/feedbackThunks";


export default function FedbackList({id}): JSX.Element {
  const reviews = useAppSelector((store) => store.comments);
  const dispatch = useAppDispatch();
  useEffect(() => {
    void dispatch(getFeedbackThunk(id));
  }, []);

  return (
    <div>
      <Paper elevation={3} style={{ padding: "20px", marginBottom: "20px" }}>
        <Typography variant="h6">Отзывы</Typography>
        <List>
          {reviews?.map((review) => <FeedbackItem review={review} />)}
        </List>
      </Paper>
    </div>
  );
}

// const reviews = [
//   { id: 1, author: 1, title: 'Заголовок 1', body: 'Текст отзыва 1' },
//   { id: 2,author: 2, title: 'Заголовок 2', body: 'Текст отзыва 2' },
//   { id: 3 ,author: 3, title: 'Заголовок 3', body: 'Текст отзыва 3' },
// ];
