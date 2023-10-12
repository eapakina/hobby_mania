import React, { useState } from 'react';
import { Button, ButtonGroup, Grid } from '@mui/material';
import { useAppDispatch } from '../../redux/hooks';
import Description from '../ui/Description';
import Classes from '../ui/Classes';
import Feedbacks from '../ui/Feedbacks';

export default function SchoolPage(): JSX.Element {
  const dispatch = useAppDispatch();
const [choose,setChoose]=useState('description')
//   useEffect(() => {
//     void dispatch(getPostsThunk());
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

  return (<>
    <ButtonGroup variant="text" aria-label="text button group">
  <Button onClick={()=> setChoose('description')}>Описание</Button>
  <Button onClick={()=> setChoose('classes')} >Занятия</Button>
  <Button onClick={()=> setChoose('feedbacks')}>Отзывы</Button>
</ButtonGroup>
{choose === "description" && <Description/>}
{choose === "classes" && <Classes/>}
{choose === "feedbacks" && <Feedbacks/>}


</>

  );
}
