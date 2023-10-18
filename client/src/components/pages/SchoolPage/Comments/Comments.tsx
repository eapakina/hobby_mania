import React from 'react';
import { CommentForm } from './Form';
import { CommentsList } from './List';

type CommentsProps = {
  id: number;
};

export function Comments({ id }: CommentsProps): JSX.Element {
  return (
    <>
      <CommentForm id={+id} />
      <CommentsList id={+id} />
    </>
  );
}

export default Comments;
