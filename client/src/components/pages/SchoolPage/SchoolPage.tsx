import React, { useState } from 'react';
import { Box, Button, ButtonGroup } from '@mui/material';
import { useParams } from 'react-router-dom';

// import { useAppDispatch } from "../../redux/hooks";
import { Description } from './Description';
import Classes from './Classes/Classes';
import { Comments } from './Comments';
import { NewsPage } from './News';

export function SchoolPage(): JSX.Element {
  // const dispatch = useAppDispatch();
  const [choose, setChoose] = useState('description');
  const { id = 1 } = useParams();
  console.log({ id });
  //   useEffect(() => {
  //     void dispatch(getNewsThunk());
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, []);

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <ButtonGroup variant="text" aria-label="text button group">
          <Button onClick={() => setChoose('description')}>Описание</Button>
          <Button onClick={() => setChoose('classes')}>Занятия</Button>
          <Button onClick={() => setChoose('comments')}>Отзывы</Button>
          <Button onClick={() => setChoose('news')}>Новости</Button>
        </ButtonGroup>
      </Box>
      <Box>
        {choose === 'description' && <Description id={+id} />}
        {choose === 'classes' && <Classes />}
        {choose === 'comments' && <Comments id={+id} />}
        {choose === 'news' && <NewsPage id={+id} />}
      </Box>
    </>
  );
}

export default SchoolPage;
