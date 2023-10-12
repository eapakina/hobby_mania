import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type {
  UserLoginFormType,
  UserModelType,
  UserSignUpFormType,
} from '../../../types/userTypes';

export const saveToken = createAsyncThunk<void, string>(
  'user/saveToken',
  async (token) =>{
    localStorage.setItem('token',token);
  }
)

export const removeToken = createAsyncThunk<void>(
  'user/removeToken',
  ()=>{
    localStorage.removeItem('token');
  }
);

export const checkUserThunk = createAsyncThunk<UserModelType>('user/checkUser', async () => {
  const { data } = await axios<UserModelType>('/user/check');
  return data;
});

export const signUpUserThunk = createAsyncThunk<UserModelType, UserSignUpFormType>(
  'user/signup',
  async (formData,{dispatch}) => {
    const { data } = await axios.post<UserModelType>('/user/signup', formData);
    void dispatch(saveToken(data.token))
    return data;
  },
);

export const loginUserThunk = createAsyncThunk<UserModelType, UserLoginFormType>(
  'user/login',
  async (formData,{dispatch}) => {
    const { data } = await axios.post<UserModelType>('/user/login', formData);
    void dispatch(saveToken(data.token))
    return data;
  },
);

export const logoutUserThunk = createAsyncThunk('user/logout', async () => axios('/user/logout'));
