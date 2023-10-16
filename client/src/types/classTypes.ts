export type ClassType = {
    id: number;
    desription: string;
    age: number;
    isAvailable: boolean;
    categoryId: number;
    schoolId: number;
    dayId: number;
    timeId: number;
}

export type ClassFormType = Omit<ClassType, 'id' | 'categoryId' | 'dayId' | 'timeId'>&{
    category: string;
    day: string;
    time: string;
}