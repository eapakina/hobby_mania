import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import type { ClassType } from "../../types/classTypes";
import { deleteClassThunk } from "../../redux/slices/class/classesThunks";
import { useAppDispatch } from "../../redux/hooks";
import {
  addFavoriteThunk,
  removeFavoriteThunk,
} from "../../redux/slices/favorites/favoriteThunks";

type ClassRandomItemProps = {
  isLiked: boolean;
  // setIsLiked: React.Dispatch<React.SetStateAction<boolean>>;
  item: ClassType;
};

export default function ClassRandomItem({
  isLiked,
  // setIsLiked,
  item,
}: ClassRandomItemProps): JSX.Element {
  const dispatch = useAppDispatch();
  const [liked, setLiked] = useState(isLiked);
  useEffect(() => {
    setLiked(isLiked);
  }, [isLiked]);
  const clickHandler = (): void => {
    setLiked(!liked);
    if (liked) {
      void dispatch(removeFavoriteThunk(item.id));
    } else {
      void dispatch(addFavoriteThunk(item.id));
    }
  };
  return (
    <Box style={{ display: "flex",justifyContent: "space-between", marginBottom: '20px' }}>
    <Card sx={{ width: 300, height: 300, display: "flex", 
    flexDirection: "column",  
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.5)",
    backgroundImage:`url('https://instapik.ru/wp-content/uploads/2020/07/crumpled-white-paper.jpg')`,
   
    }}>
      <CardContent style={{ flex: "1 0 auto" }}>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          <a href={`/school/${item.schoolId}`} style={{ textDecoration: 'none', color: 'red' }}> {item.School?.schoolName} </a>
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

        <a href={`mailto:${item.School?.email}`}>
        <IconButton
          color="secondary"
          aria-label="add an alarm"
          onClick={clickHandler}
        >
          <EmailIcon />
          </IconButton>

        </a>

        {/* <a href={`mailto:${item.School?.email}`}>Связаться</a> */}
      </CardActions>
    </Card>
    </Box>
  );
}
