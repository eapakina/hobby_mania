import { ListItem, ListItemText, Typography, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import React from "react";
import {
  deleteCommentThunks,
  updateCommentThunks,
} from "../../../../../redux/slices/comments/commentThunks";
import { useAppSelector } from "../../../../../redux/hooks";

type CommentItemProps = {
  review: {
    id: number;
    title: string;
    body: string;
    userId: number;
    schoolId: number;
  };
};

export function CommentItem({ review }: CommentItemProps): JSX.Element {
  const dispatch = useDispatch();
  const school = useAppSelector((store) => store.school.data);
  const user = useAppSelector((store) => store.user.data)

  console.log(user)

  const handleUpdate = (): void => {
    dispatch(updateCommentThunks(review.id));
  };

  const handleDelete = (): void => {
    dispatch(deleteCommentThunks(review.id));
  };

  return (
    <ListItem style={{display: 'flex', flexDirection: 'column'}}>
      <Typography variant="subtitle1">{review.title} {` `}</Typography>
      <br/>
      <ListItemText 
      // primary={review.userId}
      secondary={review.body} />
      {review.userId == user.userId && <Button size="small" onClick={handleDelete}>
        Удалить
      </Button>}
    </ListItem>
  );
}
export default React.memo(CommentItem);
