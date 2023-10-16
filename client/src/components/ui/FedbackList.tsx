import { List, ListItem, ListItemText, Paper, Typography } from '@mui/material';
import React from 'react'
import FeedbackItem from './FeedbackItem';
import { useAppSelector } from '../../redux/hooks';

export default function FedbackList() :JSX.Element{
    // const reviews = useAppSelector((store) => store.comments); тут будут тянутся комменты из БД

        const reviews = [
          { id: 1, author: 1, title: 'Заголовок 1', body: 'Текст отзыва 1' },
          { id: 2,author: 2, title: 'Заголовок 2', body: 'Текст отзыва 2' },
          { id: 3 ,author: 3, title: 'Заголовок 3', body: 'Текст отзыва 3' },
        ];
    
  return (
    <div>
    <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
      <Typography variant="h6">Отзывы</Typography>
      <List>
        {reviews?.map((review) => (

          <FeedbackItem review={review}/>
          
        ))}
      </List>
    </Paper>
  </div>  )
}
