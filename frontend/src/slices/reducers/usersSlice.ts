// slices/usersSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import fetchUsersData from './actions/getUsers';

interface UsersState {
  users: any[];
}

const initialState: UsersState = {
  users: [],
};

export const fetchDataAsync = createAsyncThunk('usersSlice/fetchData', async () => {
  try {
    const data: any = await fetchUsersData();
    return data;
  } catch (error) {
    console.error(error);
    throw error; // Прокидываем ошибку в случае неудачи
  }
});

const usersSlice = createSlice({
  name: 'usersSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDataAsync.fulfilled, (state, action) => {
        state.users = action.payload;
      });
  },
});

export const usersSliceActions = {
  ...usersSlice.actions,
  fetchDataAsync,
};

export default usersSlice.reducer;
