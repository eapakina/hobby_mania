import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import type { SchoolType } from "../../types/schoolTypes";
import type { ClassType } from "../../types/classTypes";

import { SchoolSingUpFormType } from "../../types/schoolTypes";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function ClassItem({
  school,
  item,
}): JSX.Element {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {item.School?.schoolName}{" "}
        </Typography>
        <Typography variant="h5" component="div">
          {item.Category?.category}{" "}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {item.Day?.day}{" "}
        </Typography>
        <Typography variant="body2">
          {item.desription} <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Связаться </Button>
        {school?.id === item.schoolId ? (
          <>
            <Button size="small">Удалить </Button>
            <Button size="small">Редактировать </Button>
          </>
        ) : (
          <div>ghbdtn</div>
        )}
      </CardActions>
    </Card>
  );
}
