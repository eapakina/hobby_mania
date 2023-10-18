import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { IconButton } from "@mui/material";

import { deleteClassThunk } from "../../redux/slices/class/classesThunks";
import type { SchoolType } from "../../types/schoolTypes";
import type { ClassType } from "../../types/classTypes";
import {
  addFavoriteThunk,
  removeFavoriteThunk,
} from "../../redux/slices/favorites/favoriteThunks";
import { useAppDispatch } from "../../redux/hooks";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

type ClassItemProps = {
  school: SchoolType;
  item: ClassType;
  // dispatch: () => void;
  setOpen: (open: boolean) => void;
  setIdClass: React.Dispatch<React.SetStateAction<number>>;
  isLiked: boolean;
};

export default function ClassItem({
  school,
  item,
  // dispatch,
  setOpen,
  setIdClass,
  isLiked,
}: ClassItemProps): JSX.Element {
  const dispatch = useAppDispatch();

  const [liked, setLiked] = useState(isLiked);
  const clickHandler = (): void => {
    setLiked(!liked);
    if (liked) {
      void dispatch(removeFavoriteThunk(item.id));
    } else {
      void dispatch(addFavoriteThunk(item.id));
    }
  };
  useEffect(() => {
    setLiked(isLiked);
  }, [isLiked]);

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          <a href={`/school/${item.schoolId}`}> {item.School?.schoolName} </a>
        </Typography>
        <Typography variant="h5" component="div">
          {item.className}{" "}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {item.Day?.day}{" "}
        </Typography>
        <Typography variant="body2">
          {item.description} <br />
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton
          color="secondary"
          aria-label="add an alarm"
          onClick={clickHandler}
        >
          {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </IconButton>
        <Button size="small">Связаться </Button>
        <Button
          size="small"
          onClick={() => {
            setIdClass(item.id);
            setOpen(true);
          }}
        >
          Редактировать{" "}
        </Button>
        <Button
          size="small"
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          onClick={() => dispatch(deleteClassThunk({ id: item.id }))}
        >
          Удалить{" "}
        </Button>
        {school?.id === item.schoolId ? null : <div>ghbdtn</div>}
      </CardActions>
    </Card>
  );
}
