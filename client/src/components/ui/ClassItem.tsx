import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { deleteClassThunk } from "../../redux/slices/class/classesThunks";
import type { SchoolType } from "../../types/schoolTypes";
import type { ClassType } from "../../types/classTypes";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

type ClassItemProps = {
  school: SchoolType;
  item: ClassType;
  dispatch: () => void;
  setOpen: (open: boolean) => void;
  setIdClass: React.Dispatch<React.SetStateAction<number>>;
};

export default function ClassItem({
  school,
  item,
  dispatch,
  setOpen,
  setIdClass,
}: ClassItemProps): JSX.Element {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
         <a href= {`/school/${item.schoolId}`}> {item.School?.schoolName}{" "}</a>
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
        <Button
          size="small"
          onClick={() => {
            setIdClass(item.id);
            setOpen(true);
          }}
        >
          Редактировать{" "}
        </Button>
        <Button
          size="small"
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          onClick={() => dispatch(deleteClassThunk({ id: item.id }))}
        >
          Удалить{" "}
        </Button>
        {school?.id === item.schoolId ? null : <div>ghbdtn</div>}
      </CardActions>
    </Card>
  );
}
