import React, { useEffect } from 'react';
import PostForm from '../ui/PostForm';
import PostsList from '../ui/PostsList';
import { useAppDispatch } from '../../redux/hooks';
import { getPostsThunk } from '../../redux/slices/posts/postsThunks';

export default function PostsPage({id}: {id:number}): JSX.Element {
    // eslint-disable-next-line react-hooks/exhaustive-deps

  return (
    <>
    (сделать доступы только для школы)
      <PostForm />
      <PostsList id={id} />
    </>
  );
}
