export type NewsType = {
  id: number;
  title: string;
  body: string;
  schoolId: number;
};

export type NewsFormType = Omit<NewsType, "id">;
