export type FeedbackType = {
  id: number;
  title: string;
  body: string;
  userId: number;
  schoolId: number;
};

export type FeedbackFormType = Omit<FeedbackType, "id">;
