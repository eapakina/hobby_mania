export type PostType = {
  id: number;
  title: string;
  body: string;
  schoolId:number;
};

export type PostFormType = Omit<PostType, 'id' >;
