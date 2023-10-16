import { Box, Button, CardMedia } from "@mui/material";
import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getSchoolThunk } from "../../redux/slices/school/schoolThunk";
import DeleteSchoolConfirmModal from "./DeleteSchoolConfirmModal";
import EditSchoolModalForm from "./EditSchoolModalForm";

export default function Description({ id }: { id: number }): JSX.Element {
  const school = useAppSelector((store) => store.school);
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);


  useEffect(() => {
    void dispatch(getSchoolThunk(id));
  }, []);

  return (
    <Box>
      <CardMedia
        sx={{ height: 400 }}
        image={school.data?.imgSchool}
        title="school photo"
      />
      <Typography>{school.data?.schoolName}</Typography>
      <Typography variant="body2" color="text.secondary">
        Округ: {school.data?.District?.district}{" "}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Адрес: {school.data?.adress}{" "}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Телефон: {school.data?.phone}{" "}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        email: {school.data?.email}{" "}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Описание: {school.data?.info}{" "}
      </Typography>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        Удалить школу
      </Button>
         <Button
        onClick={() => {
          setOpenEdit(true);
        }}
      >
        Изменить описание школы
      </Button>
{  open &&  <DeleteSchoolConfirmModal id={id} open={open} setOpen={setOpen} />

}   
{  openEdit &&  <EditSchoolModalForm id={id} school={school.data!} openEdit={openEdit} setOpenEdit={setOpenEdit} />

}   </Box>
  );
}
