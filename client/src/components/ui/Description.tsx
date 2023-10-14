import { Box, CardMedia } from "@mui/material";
import React, { useEffect } from "react";
import Typography from '@mui/material/Typography';
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getSchoolThunk } from "../../redux/slices/school/schoolThunk";


export default function Description({ id }: { id: number }): JSX.Element {
  const school = useAppSelector((store) => store.school);
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(getSchoolThunk(id));
  }, [])
  console.log(school.data)

  return <Box>
    
          <CardMedia
        sx={{ height: 400 }}
        image={school.data?.imgSchool}
        title="school photo"
      />
<Typography>
{school.data?.schoolName}
</Typography>
<Typography variant="body2" color="text.secondary">
Округ:    {school.data?.District?.district}      </Typography>
<Typography variant="body2" color="text.secondary">
Адрес:   {school.data?.adress}      </Typography>
<Typography variant="body2" color="text.secondary">
Телефон:   {school.data?.phone}      </Typography>
<Typography variant="body2" color="text.secondary">
email:   {school.data?.email}        </Typography>
<Typography variant="body2" color="text.secondary">
Описание:     {school.data?.info}      </Typography>

  </Box>;
}
