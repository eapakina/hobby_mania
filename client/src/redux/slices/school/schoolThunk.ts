import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { SchoolLoginFormtype,  SchoolSingUpFormType, SchoolType } from "../../../types/schoolTypes";





export const saveToken = createAsyncThunk<void, string>(
    'school/saveToken',
    async (token) =>localStorage.setItem('token', token)
  )

  export const removeToken = createAsyncThunk<void>(
    'school/removeToken',
    ()=>{
      localStorage.removeItem('token');
    }
  );

  export const checkSchoolThunk = createAsyncThunk<SchoolType>('school/checkSchool', async () => {
    const { data } = await axios<SchoolType>('/school/check');
    return data;
  });

  export const signUpSchoolThunk = createAsyncThunk<SchoolType, FormData>(
    'school/signup',
    async (formData,{dispatch}) => {
      const { data } = await axios.post<SchoolType>('/school/signup', formData);
      void dispatch(saveToken(data.token))
      return data;
    },
  );

  export const loginSchoolThunk = createAsyncThunk<SchoolType, FormData>(
    'school/login',
    async (formData,{dispatch}) => {
      const { data } = await axios.post<SchoolType>('/school/login', formData);
      void dispatch(saveToken(data.token))
      return data;
    },
  );

  export const logoutSchoolThunk = createAsyncThunk('school/logout', async () => axios('/school/logout'));

  export const getSchoolThunk = createAsyncThunk<SchoolType, SchoolType['id']>('school/getSchool', async (id) => {
    const { data } = await axios<SchoolType>(`/school/${id}`);
    console.log(data)
    return data;
  });