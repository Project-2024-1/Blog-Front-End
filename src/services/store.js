import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/slice';

export const store = configureStore({
  reducer: {
    authReducer,
  },
});

// // Infer the `RootState` and `AppDispatch` types from the store itself
// export const RootState = store.getState;
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export const AppDispatch = store.dispatch;
