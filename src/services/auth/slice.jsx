import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { accountApi, signInApi } from './api';
// import jwt_decode from 'jwt-decode';
import { toast } from 'react-toastify';
const initialState = {
  loading: false,
  isAuth: false,
  id_token: '',
  infoUser: {
    activated: false,
    authorities: [],
    createdBy: '',
    createdDate: '',
    email: '',
    firstName: '',
    id: 0,
    imageUrl: '',
    langKey: '',
    lastModifiedBy: '',
    lastModifiedDate: '',
    lastName: '',
    login: '',
    phoneNumber: '',
  },
};

export const infoUserAuth = createAsyncThunk('auth/infoUser', async (_, thunkAPI) => {
  try {
    const isAuth = thunkAPI.getState().authReducer.isAuth;
    if (isAuth) {
      const response = await accountApi();
      return response;
    } else {
      return thunkAPI.rejectWithValue({});
    }
  } catch (error) {
    if (error === 'error.http.401') {
      thunkAPI.dispatch(logOutAction());
    }
    return thunkAPI.rejectWithValue(error);
  } finally {
    thunkAPI.dispatch(offAppLoading());
  }
});

export const signInThunk = createAsyncThunk('auth/login', async (body, thunkAPI) => {
  try {
    const { remember, ...rest } = body;
    thunkAPI.dispatch(onAppLoading());
    const response = await signInApi(rest);
    toast.success('Login successfully');
    if (remember === true) {
      localStorage.setItem('token', response.id_token);
    } else {
      sessionStorage.setItem('token', response.id_token);
    }
    return response.id_token;
  } catch (error) {
    toast.error('Wrong account information or password');
    return thunkAPI.rejectWithValue(error);
  } finally {
    thunkAPI.dispatch(offAppLoading());
  }
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    onAppLoading: (state) => {
      state.loading = true;
    },
    offAppLoading: (state) => {
      state.loading = false;
    },
    setToken: (state) => {
      state.id_token =
        localStorage.getItem('token') !== null
          ? localStorage.getItem('token') || ''
          : sessionStorage.getItem('token') || '';
      try {
        // const decoded = jwt_decode(state.id_token);
        // if (!decoded) {
        //   state.isAuth = false;
        // } else {
        //   state.isAuth = true;
        // }
      } catch (error) {
        state.isAuth = false;
      }
    },
    clearToken: (state) => {
      state.isAuth = false;
    },
    logOutAction: (state) => {
      localStorage.getItem('token') !== null ? localStorage.removeItem('token') : sessionStorage.removeItem('token');
      state.isAuth = false;
      state.id_token = '';
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signInThunk.fulfilled, (state, { payload }) => {
      state.isAuth = true;
      state.id_token = payload;
    });
    builder.addCase(signInThunk.rejected, (state) => {
      state.isAuth = false;
    });

    builder.addCase(infoUserAuth.fulfilled, (state, { payload }) => {
      state.infoUser = payload;
    });
  },
});

export const { setToken, clearToken, offAppLoading, onAppLoading, logOutAction } = authSlice.actions;

const authReducer = authSlice.reducer;
export default authReducer;
