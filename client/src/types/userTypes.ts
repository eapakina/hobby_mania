export type UserModelType = {
  id: number;
  userName: string;
  email: string;
  img:string;
  token:string;
};

// export type UserSignUpFormType = Omit<UserModelType, 'id'> & { password: string, file:File };
export type UserSignUpFormType = Omit<UserModelType, 'id' | 'img' | 'token'> & {
  password: string;
  file: File;
};


export type UserLoginFormType = Omit<UserSignUpFormType, 'userName'|'file'>;

export type UserType =
  | (UserModelType & { status: 'logged' })
  | { status: 'loading' }
  | { status: 'guest' };
