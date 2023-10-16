export type SchoolType = {
    id:number;
    schoolName:string;
    adress:string;
    phone:string;
    email:string;
    info:string;
    imgSchool:string;
    districtId:number;
    token:string;
};

export type SchoolSingUpFormType = Omit<SchoolType, 'id'|'districtId'|'token'|'imgSchool'>&{password:string,file:File};

export type SchoolLoginFormtype = Omit<SchoolSingUpFormType, 'schoolName'|'adress'
|'phone'|'info'|'file'>;