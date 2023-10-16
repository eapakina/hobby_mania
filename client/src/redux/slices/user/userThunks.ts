import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type {

  UserModelType,

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

export const signUpUserThunk = createAsyncThunk<UserModelType, FormData>(
  'user/signup',
  async (formData,{dispatch}) => {
    const { data } = await axios.post<UserModelType>('/user/signup', formData);
    console.log(formData,'111111111')
    void dispatch(saveToken(data.token))
    return data;
  },
);

export const loginUserThunk = createAsyncThunk<UserModelType, FormData>(
  'user/login',
  async (formData,{dispatch}) => {
    const { data } = await axios.post<UserModelType>('/user/login', formData);
    void dispatch(saveToken(data.token))
    return data;
  },
);

// export const logoutUserThunk = createAsyncThunk('user/logout', async () => axios('/user/logout'));

export const logoutUserThunk = createAsyncThunk('user/logout', async (payload, { dispatch }) => {
  void dispatch(removeToken());
  await axios('/user/logout');
});

export const getUserId = createAsyncThunk('user/getuser', async () => {
  const idUser= await axios('/user/getuser');
  return idUser;
});
