import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { ClassFormType, ClassType } from "../../../types/classTypes";

export const getClassesThunk = createAsyncThunk<ClassType[], number>(
  "classes/getClasses",
  async (id) => {
    const { data } = await axios<ClassType[]>(`/classes/${id}/all`);
    console.log(id);
    return data;
  }
);

export const getAllClassesThunk = createAsyncThunk<ClassType[], string[]>(
  "classes/getAllClasses",
  async (personName) => {
    console.log(personName);
    const { data } = await axios.post<ClassType[]>(`classes/search/all`, personName);
    return data;
  }
)

export const addClassThunk = createAsyncThunk<ClassType, ClassFormType>(
  "classes/addClass",
  async (formData) => {
    const { data } = await axios.post<ClassType>(
      `/classes/${formData.schoolId}/add`,
      formData
    );
    return data;
  }
);

export const deleteClassThunk = createAsyncThunk<ClassType["id"], ClassType["id"]>(
  "classes/deleteClass",
  async (id) => {
    await axios.delete(`/classes/${id}/delete`);
    return id;
  }
);

export const editClassThunk = createAsyncThunk<ClassType, ClassFormType>(
  "classes/editClass",
  async ({formdata, idClass}) => {
    console.log(formdata);
    const { data } = await axios.patch<ClassType>(
      `/classes/${idClass}/edit`,
      formdata
    );
    return data;
  }
)
