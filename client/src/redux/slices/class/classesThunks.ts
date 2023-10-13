import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type { ClassFormType, ClassType } from '../../../types/classTypes';

export const getClassesThunk = createAsyncThunk<ClassType[]>('classes/getClasses', async () => {
    const { data } = await axios<ClassType[]>('/classes/all');
    return data;
});

export const addClassThunk = createAsyncThunk<ClassType, ClassFormType>(
    'classes/addClass', async (formData) => {
        const { data } = await axios.post<ClassType>(`/classes/${formData.schoolId}/add`, formData);
        return data;
    }
)