import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./slices/posts/postsSlice";
import userReducer from "./slices/user/userSlice";
import classesReducer from "./slices/class/classesSlice";

import schoolReducer from "./slices/school/schoolSlice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    user: userReducer,

    classes: classesReducer,

    school: schoolReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
