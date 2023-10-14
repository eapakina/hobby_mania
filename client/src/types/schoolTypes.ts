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
    District?: DistrictType;
    
};

export type DistrictType = {
    id:number;
    district:string;
    
};
export type SchoolSingUpFormType = Omit<SchoolType, 'id'|'districtId'>&{password:string};

export type SchoolLoginFormtype = Omit<SchoolSingUpFormType, 'schoolName'|'adress'
|'phone'|'info'|'imgSchool'>;


