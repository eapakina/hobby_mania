import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type {
  FeedbackFormType,
  FeedbackType,
} from "../../../types/feedbackTypes";

export const getFeedbackThunk = createAsyncThunk<FeedbackType[]>(
  "Feedback/getFeedback",
  async () => {
    const { data } = await axios.get<FeedbackType[]>("/Feedback/all");
    return data;
  }
);

export const addFeedbackThunk = createAsyncThunk<
  FeedbackType,
  FeedbackFormType
>("Feedback/addFeedback", async (formData) => {
  const { data } = await axios.post<FeedbackType>(
    `/Feedback/${formData.schoolId}/add`,
    formData
  );
  return data;
});
