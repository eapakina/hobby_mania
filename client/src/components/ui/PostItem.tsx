import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import type { PostType } from "../../types/postTypes";
import { cardStyle } from "../styles";
import { useAppDispatch } from "../../redux/hooks";
import { deletePostThunk } from "../../redux/slices/posts/postsThunks";

type PostItemProps = {
  post: PostType;
};

export default function PostItem({ post }: PostItemProps): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <Card sx={cardStyle}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Post of the Day
        </Typography>
        <Typography variant="h5" component="div">
          {post.title.slice(0, 40)}...
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {post.body.slice(0, 120)}...
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() => void dispatch(deletePostThunk(post.id))}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
