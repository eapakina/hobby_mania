import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type {
  DistrictType,
  SchoolEditFormType,
  SchoolLoginFormtype,
  SchoolSingUpFormType,
  SchoolType,
} from "../../../types/schoolTypes";


export const saveToken = createAsyncThunk<void, string>(
  "school/saveToken",
  async (token) => localStorage.setItem("token", token)
);

export const signUpSchoolThunk = createAsyncThunk<SchoolType, FormData>(
  "school/signup",
  async (formData, { dispatch }) => {
    const { data } = await axios.post<SchoolType>("/school/signup", formData);
    void dispatch(saveToken(data.token));
    return data;
  }
);

export const removeToken = createAsyncThunk<void>("school/removeToken", () => {
  localStorage.removeItem("token");
});
export const loginSchoolThunk = createAsyncThunk<SchoolType, FormData>(
  "school/login",
  async (formData, { dispatch }) => {
    const { data } = await axios.post<SchoolType>("/school/login", formData);
    void dispatch(saveToken(data.token));
    return data;
  }
);

export const deleteSchoolThunk = createAsyncThunk<
  SchoolType["id"],
  SchoolType["id"]
>("school/deleteSchool", async (id) => {
  await axios.delete(`/school/${id}`);
  return id;
});


  export const logoutSchoolThunk = createAsyncThunk('school/logout', async (payload, { dispatch }) => {
    void dispatch(removeToken());
    await axios('/school/logout');
  });
  

export const editSchoolThunk = createAsyncThunk<
  SchoolType,
  { id: SchoolType["id"]; formData: SchoolEditFormType }
>("school/editSchoolThunk", async ({ id, formData }) => {
  const { data } = await axios.patch<SchoolType>(`/school/${id}`, formData);
  return data;
});


export const checkSchoolThunk = createAsyncThunk<SchoolType>(
  "school/checkSchool",
  async () => {
    const { data } = await axios<SchoolType>("/school/check");
    return data;
  }
);



export const getSchoolThunk = createAsyncThunk<SchoolType, SchoolType["id"]>(
  "school/getSchool",
  async (id) => {
    const { data } = await axios<SchoolType>(`/school/${id}`);
    console.log(data);
    return data;

  });



