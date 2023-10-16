import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./slices/posts/postsSlice";
import userReducer from "./slices/user/userSlice";
import classesReducer from "./slices/class/classesSlice";
import commentsReduser from "./slices/feedback/feedbackSlice";

import schoolReducer from "./slices/school/schoolSlice";
import favoritesReducer from "./slices/favorites/favoriteSlice";


export const store = configureStore({
  reducer: {
    posts: postsReducer,
    user: userReducer,
    classes: classesReducer,
    school: schoolReducer,
    favorites: favoritesReducer,
    comments: commentsReduser,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
