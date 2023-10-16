import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './slices/posts/postsSlice';
import userReducer from './slices/user/userSlice';

import schoolReducer from './slices/school/schoolSlice';

import classesReducer from './slices/class/classesSlice';


export const store = configureStore({
  reducer: {
    posts: postsReducer,
    user: userReducer,

    school: schoolReducer,
    classes: classesReducer

  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
