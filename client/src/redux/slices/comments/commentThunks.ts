import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { CommentFormType, CommentType } from "../../../types/commentTypes";

export const getCommentThunks = createAsyncThunk<
  CommentType[],
  CommentType["id"]
>("Comment/getComment", async (id: number) => {
  const { data } = await axios.get<CommentType[]>(`/comments/${id}/all`);
  return data;
});

export const addCommentThunks = createAsyncThunk<CommentType, CommentFormType>(
  "Comment/addComment",
  async (formData) => {
    const { data } = await axios.post<CommentType>(
      `/comments/${formData.schoolId}/add`,
      formData
    );
    return data;
  }
);

export const deleteCommentThunks = createAsyncThunk<
  CommentType["id"],
  CommentType["id"]
>("Comment/deleteComment", async (deleteId) => {
  //const { id } = deleteId;
  console.log(deleteId)
  await axios.delete(`/comments/${deleteId}`);
  return deleteId;
});

export const updateCommentThunks = createAsyncThunk<CommentType, CommentType>(
  "Comment/updateComment",
  (formData) =>
    axios
      .patch<CommentType>(`/comments/${formData.id}`, formData)
      .then((res) => res.data)
);
