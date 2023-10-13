export type SchoolModelType = {
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

export type SchoolSingUpFormType = Omit<SchoolModelType, 'id'|'districtId'>&{password:string};

export type SchoolLoginFormtype = Omit<SchoolSingUpFormType, 'schoolName'|'adress'
|'phone'|'info'|'imgSchool'>;

export type SchoolType =
|(SchoolModelType & {status:'logged'})
|{status:'loading'}
|{status:'guest'}
