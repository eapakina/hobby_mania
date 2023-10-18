export type NewsType = {
  id: number;
  title: string;
  body: string;
  schoolId: number;
  img: string;
};

export type NewsFormType = Omit<NewsType, 'id'>;
