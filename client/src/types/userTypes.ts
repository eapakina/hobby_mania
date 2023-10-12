export type UserModelType = {
  id: number;
  userName: string;
  email: string;
  img:string;
  token:string;
};

export type UserSignUpFormType = Omit<UserModelType, 'id'> & { password: string };
export type UserLoginFormType = Omit<UserSignUpFormType, 'userName'|'img'>;

export type UserType =
  | (UserModelType & { status: 'logged' })
  | { status: 'loading' }
  | { status: 'guest' };
