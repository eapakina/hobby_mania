import React, { useEffect, useState } from 'react';
import { NewsForm } from './Form';
import { NewsList } from './List';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import axios from 'axios';
import { checkSchoolThunk, getSchoolThunk } from '../../../../redux/slices/school/schoolThunk';

export function NewsPage({ id }: { id: number }): JSX.Element {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const school = useAppSelector((store) => store.school.data)
  const dispatch = useAppDispatch();
  const [checkSchool, setCheckSchool] = useState({});
  
  useEffect(() => {
    // void dispatch(getSchoolThunk(id));
    void dispatch(checkSchoolThunk());
  }, []);
  console.log(school.schoolId);
  return (
    <>
      {id === school.schoolId && (<NewsForm id={id} />)}
      <NewsList id={id} />
    </>
  );
}

export default NewsPage;
