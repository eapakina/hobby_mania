import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ClassItem from "./ClassItem";
import ClassFormModal from "./ClassFormModal";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getClassesThunk } from "../../redux/slices/class/classesThunks";
import ClassEditFormModal from "./ClassEditFormModal";

export default function Classes(): JSX.Element {
  const [open, setOpen] = useState(false);
  const [idClass, setIdClass] = useState(0);
  console.log(idClass);
  const dispatch = useAppDispatch();
  const school = useAppSelector((store) => store.school);
  const classes = useAppSelector((store) => store.classes);
  const { id } = useParams();
  useEffect(() => {
    void dispatch(getClassesThunk(id));
  }, []);

  console.log(classes);
  return (
    <Box display="flex" flexWrap="wrap">
      {classes?.map((item) => (
        <ClassItem key={item.id} item={item} school={school} dispatch={dispatch} setOpen={setOpen} setIdClass={setIdClass} />
      ))}
      <ClassFormModal />
      <ClassEditFormModal open={open} setOpen={setOpen} idClass={idClass} />
    </Box>
  );
}
