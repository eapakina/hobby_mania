import React, { useEffect } from 'react';
import { Box, Paper } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../../../redux/hooks';
import { newsListPaperStyles } from './style';
import { getNewsThunk } from '../../../../../redux/slices/news/newsThunks';
import { NewsItem } from './NewsItem';
import type { NewsType } from '../../../../../types/newsTypes';

export function NewsList({ id }: { id: number }): JSX.Element {
  const news = useAppSelector((store) => store.News);
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(getNewsThunk(id));
  }, []);

  return (
    <Paper elevation={0} sx={newsListPaperStyles}>
      <Box mt={1} py={2} px={2} display="flex" flexDirection="row" flexWrap="wrap">
        <Box p={1} display="flex" flexWrap="wrap" sx={{padding: '20px', justifyContent: "space-between"}}>{news?.map((el: NewsType) => <NewsItem key={el.id} news={el} />)}</Box>
      </Box>
    </Paper>
  );
}

export default NewsList;
