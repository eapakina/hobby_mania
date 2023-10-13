import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { SchoolLoginFormtype, SchoolModelType, SchoolSingUpFormType } from "../../../types/schoolTypes";





export const saveToken = createAsyncThunk<void, string>(
    'school/saveToken',
    async (token) =>{
      localStorage.setItem('token',token);
    }
  )

  export const removeToken = createAsyncThunk<void>(
    'school/removeToken',
    ()=>{
      localStorage.removeItem('token');
    }
  );

  export const checkSchoolThunk = createAsyncThunk<SchoolModelType>('school/checkSchool', async () => {
    const { data } = await axios<SchoolModelType>('/school/check');
    return data;
  });

  export const signUpSchoolThunk = createAsyncThunk<SchoolModelType, SchoolSingUpFormType>(
    'school/signup',
    async (formData,{dispatch}) => {
      const { data } = await axios.post<SchoolModelType>('/school/signup', formData);
      void dispatch(saveToken(data.token))
      return data;
    },
  );

  export const loginSchoolThunk = createAsyncThunk<SchoolModelType, SchoolLoginFormtype>(
    'school/login',
    async (formData,{dispatch}) => {
      const { data } = await axios.post<SchoolModelType>('/school/login', formData);
      void dispatch(saveToken(data.token))
      return data;
    },
  );

  export const logoutSchoolThunk = createAsyncThunk('school/logout', async () => axios('/school/logout'));