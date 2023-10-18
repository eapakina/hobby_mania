import { configureStore } from '@reduxjs/toolkit';
import NewsReducer from './slices/news/newsSlice';
import userReducer from './slices/user/userSlice';
import classesReducer from './slices/class/classesSlice';
import commentsReduser from './slices/comments/commentsSlice';

import schoolReducer from './slices/school/schoolSlice';
import favoritesReducer from './slices/favorites/favoriteSlice';

export const store = configureStore({
  reducer: {
    News: NewsReducer,
    user: userReducer,
    classes: classesReducer,
    school: schoolReducer,
    favorites: favoritesReducer,
    comments: commentsReduser,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {News: NewsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
