import type { SchoolType } from "./schoolTypes";

export type ClassType = {
  id: number;
  desription: string;
  age: number;
  isAvailable: boolean;
  categoryId: number;
  schoolId: number;
  dayId: number;
  timeId: number;
  School?: SchoolType;
  Category?: CategoryType;
  Day?: DayType;
};

export type ClassFormType = Omit<
  ClassType,
  "id" | "categoryId" | "dayId" | "timeId"
> & {
  category: string;
  day: string;
  time: string;
};
export type CategoryType = {
  category: string;
};

export type DayType = {
  day: string;
};

export type FavoriteClassType = {
  id: number;
  userId: number;
  classId: number;
  Class: ClassType;
};
