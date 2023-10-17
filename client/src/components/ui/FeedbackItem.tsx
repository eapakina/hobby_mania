import { ListItem, ListItemText, Typography, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import React from "react";
import {
  deleteFeedbackThunk,
  updateFeedbackThunk,
} from "../../redux/slices/feedback/feedbackThunks";

type FeedbackItemProps = {
  review: {
    id: number;
    title: string;
    body: string;
    userId: number;
    schoolId: number;
  };
};

function FeedbackItem({ review }: FeedbackItemProps): JSX.Element {
  const dispatch = useDispatch();

  const handleUpdate = () => {
    dispatch(updateFeedbackThunk({ id: review.id }));
  };

  const handleDelete = () => {
    dispatch(deleteFeedbackThunk({ id: review.id }));
  };

  return (
    <ListItem>
      <ListItemText
        primary={review.userId}
        secondary={
          <>
            <Typography variant="subtitle1">{review.title}</Typography>
            {review.body}
          </>
        }
      />
      <Button size="small" onClick={handleUpdate}>
        Редактировать
      </Button>
      <Button size="small" onClick={handleDelete}>
        Удалить
      </Button>
    </ListItem>
  );
}
export default React.memo(FeedbackItem);
