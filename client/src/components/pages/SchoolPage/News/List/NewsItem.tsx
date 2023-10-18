import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import type { NewsType } from '../../../../../types/newsTypes';
import { cardStyle } from '../../../../styles';
import { useAppDispatch } from '../../../../../redux/hooks';
import { deleteNewsThunk } from '../../../../../redux/slices/news/newsThunks';

type NewsItemProps = {
  news: NewsType;
};

export function NewsItem({ news }: NewsItemProps): JSX.Element {
  const dispatch = useAppDispatch();
  // todo
  return (
    <Card sx={cardStyle}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          new of the Day
        </Typography>
        <Typography variant="h5" component="div">
          {news.title.slice(0, 40)}...
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {news.body.slice(0, 120)}...
        </Typography>
        <CardMedia component="img" height="194" image={news.img} alt={news.title} />
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => void dispatch(deleteNewsThunk(news.id))}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}

export default NewsItem;
