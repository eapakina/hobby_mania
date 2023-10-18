export type CommentType = {
  id: number;
  title: string;
  body: string;
  userId?: number;
  schoolId: number;
};

export type CommentFormType = Omit<CommentType, 'id'>;
