import { Box, CardMedia } from "@mui/material";
import React from "react";
import Typography from '@mui/material/Typography';


export default function Description(): JSX.Element {
  return <Box>
          <CardMedia
        sx={{ height: 400 }}
        image="//static.tildacdn.com/tild3233-6365-4532-b166-643233396232/10.jpg"
        title="school photo"
      />
<Typography>
Детский центр развития Милград 
</Typography>
<Typography variant="body2" color="text.secondary">
Дальше подтягивается какое то описание из БД        </Typography>

  </Box>;
}
