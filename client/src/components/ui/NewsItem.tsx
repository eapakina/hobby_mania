import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import type { NewsType } from "../../types/newsTypes";
import { cardStyle } from "../styles";
import { useAppDispatch } from "../../redux/hooks";
import { deleteNewsThunk } from "../../redux/slices/news/newsThunks";

type newItemProps = {
  new: NewsType;
};

export default function newItem({ new }: newItemProps): JSX.Element {
  const dispatch = useAppDispatch();
  // todo
  return (
    <Card sx={cardStyle}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          new of the Day
        </Typography>
        <Typography variant="h5" component="div">
          {new.title.slice(0, 40)}...
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {new.body.slice(0, 120)}...
        </Typography>
        <CardMedia
          component="img"
          height="194"
          image={new.img}
          alt={new.title}
        />
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() => void dispatch(deleteNewsThunk(new.id))}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
