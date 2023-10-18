import React from "react";
import CommentForm from "./CommentForm";
import CommentsList from "./CommentsList";

export default function Comments({ id }): JSX.Element {
  return (
    <>
      <CommentForm id={+id} />
      <CommentsList id={+id} />
    </>
  );
}
