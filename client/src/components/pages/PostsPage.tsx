import React, { useEffect } from 'react';
import PostForm from '../ui/PostForm';
import PostsList from '../ui/PostsList';
import { useAppDispatch } from '../../redux/hooks';
import { getPostsThunk } from '../../redux/slices/posts/postsThunks';

export default function PostsPage(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(getPostsThunk());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <PostForm />
      <PostsList />
    </>
  );
}
