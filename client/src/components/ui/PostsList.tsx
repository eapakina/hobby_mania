import React, { useEffect } from 'react';
import { Box, Paper } from '@mui/material';
import PostItem from './PostItem';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { postListPaperStyles } from '../styles';
import { getPostsThunk } from '../../redux/slices/posts/postsThunks';

export default function PostsList({ id }: { id: number }): JSX.Element {
  const posts = useAppSelector((store) => store.posts);
  console.log(posts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(getPostsThunk(id));
  }, [])

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
