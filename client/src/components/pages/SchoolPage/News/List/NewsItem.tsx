import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import type { NewsType } from "../../../../../types/newsTypes";
import { cardStyle } from "../../../../styles";
import { useAppDispatch, useAppSelector } from "../../../../../redux/hooks";
import { deleteNewsThunk } from "../../../../../redux/slices/news/newsThunks";

type NewsItemProps = {
  news: NewsType;
};

export function NewsItem({ news }: NewsItemProps): JSX.Element {
  const dispatch = useAppDispatch();
  const school = useAppSelector((store) => store.school.data);
  // todo
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px",
      }}
    >
      <Card sx={{
      width: 300, height: 600, display: "flex", 
      fontSize: 10,
    flexDirection: "column",  
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.5)",
    backgroundImage:`url('https://instapik.ru/wp-content/uploads/2020/07/crumpled-white-paper.jpg')`
    }}>
        <CardContent style={{flex: "1 0 auto"}}>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          </Typography>
          <Typography variant="h5" component="div">
            {/* {news.title.slice(0, 40)}... */}
            {news.title}

          </Typography>
          <Typography sx={{ mb: 1 }} color="text.secondary">
          {/* {news.body.slice(0, 120)}... */}

            {news.body}
          </Typography>
          <CardMedia
            component="img"
            height="100"
            image={news.img}
            alt={news.title}
          />
        </CardContent>
        <CardActions>
          {school?.schoolId === news.schoolId && <Button
            size="small"
            onClick={() => void dispatch(deleteNewsThunk(news.id))}
          >
            Delete
          </Button>}
        </CardActions>
      </Card>
    </Box>
  );
}

export default NewsItem;
