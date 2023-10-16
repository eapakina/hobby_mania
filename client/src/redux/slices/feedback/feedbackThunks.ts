import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type {
  FeedbackFormType,
  FeedbackType,
} from "../../../types/feedbackTypes";

export const getFeedbackThunk = createAsyncThunk<FeedbackType[]>(
  "Feedback/getFeedback",
  async (id) => {
    const { data } = await axios.get<FeedbackType[]>(`/comments/${id}/all`);
    return data;
  }
);

export const addFeedbackThunk = createAsyncThunk<
  FeedbackType,
  FeedbackFormType
>("Feedback/addFeedback", async (formData) => {
  const { data } = await axios.post<FeedbackType>(
    `/comments/${formData.schoolId}/add`,
    formData
  );
  return data;
});
