import React from 'react';
import { Box, Paper } from '@mui/material';
import PostItem from './PostItem';
import { useAppSelector } from '../../redux/hooks';
import { postListPaperStyles } from '../styles';

export default function PostsList(): JSX.Element {
  const posts = useAppSelector((store) => store.posts);

  return (
    <Paper elevation={0} sx={postListPaperStyles}>
      <Box mt={1} py={2} px={2} display="flex" flexDirection="row" flexWrap="wrap">
        {posts?.map((post) => (
          <Box key={post.id} p={1}>
            <PostItem key={post.id} post={post} />
          </Box>
        ))}
      </Box>
    </Paper>
  );
}
