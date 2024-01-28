import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import usersReducer, { fetchDataAsync } from './reducers/usersSlice';

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(fetchDataAsync as any),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
