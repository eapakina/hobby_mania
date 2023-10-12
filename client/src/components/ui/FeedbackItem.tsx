import { ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";

type FeedbackItemProps = {
  review: { id: number; author: string; title: string; body: string };
};

function FeedbackItem({ review }: FeedbackItemProps): JSX.Element {
  return (
    <ListItem key={review.id}>
      <ListItemText
        primary={review.author}
        secondary={
          <>
            <Typography variant="subtitle1">{review.title}</Typography>
            {review.body}
          </>
        }
      />
    </ListItem>
  );
}
export default React.memo(FeedbackItem);
