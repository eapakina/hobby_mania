export type PostType = {
  id: number;
  title: string;
  body: string;
};

export type PostFormType = Omit<PostType, 'id' | 'User'>;
