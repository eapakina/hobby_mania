import { ListItem, ListItemText, Typography, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import React from "react";
import {
  deleteCommentThunks,
  updateCommentThunks,
} from "../../redux/slices/Comment/commentThunkss";

type CommentItemProps = {
  review: {
    id: number;
    title: string;
    body: string;
    userId: number;
    schoolId: number;
  };
};

function CommentItem({ review }: CommentItemProps): JSX.Element {
  const dispatch = useDispatch();

  const handleUpdate = () => {
    void dispatch(updateCommentThunks({ id: review.id }));
  };

  const handleDelete = () => {
    void dispatch(deleteCommentThunks({ id: review.id }));
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
export default React.memo(CommentItem);
