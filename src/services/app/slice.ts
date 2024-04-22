import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const initialState = {
  loading: false,
};

export const fetchCandidateColumnThunk = createAsyncThunk('candidateColumn', async (_, thunkAPI) => {
  try {
    thunkAPI.dispatch(onAppLoading());
    // const response = await;
    // return response;
  } catch (error) {
    toast.error('Lay du lieu that bai!');
    return thunkAPI.rejectWithValue(error);
  } finally {
    thunkAPI.dispatch(offAppLoading());
  }
});
export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    onAppLoading: (state) => {
      state.loading = true;
    },
    offAppLoading: (state) => {
      state.loading = false;
    },
  },
  extraReducers: () => {},
});

// Action creators are generated for each case reducer function
export const { onAppLoading, offAppLoading } = appSlice.actions;

const appReducer = appSlice.reducer;
export default appReducer;
