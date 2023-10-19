import React, { useEffect } from 'react';
import { NewsForm } from './Form';
import { NewsList } from './List';
import { useAppSelector } from '../../../../redux/hooks';

export function NewsPage({ id }: { id: number }): JSX.Element {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const school = useAppSelector((store) => store.school.data)
  return (
    <>
      (сделать доступы только для школы)
      <NewsForm id={id} />
      <NewsList id={id} />
    </>
  );
}

export default NewsPage;
