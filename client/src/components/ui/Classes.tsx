import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ClassItem from "./ClassItem";
import ClassFormModal from "./ClassFormModal";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getClassesThunk } from "../../redux/slices/class/classesThunks";

export default function Classes(): JSX.Element {
  const dispatch = useAppDispatch();
  const school = useAppSelector((store) => store.school);
  const classes = useAppSelector((store) => store.classes);
  const { id } = useParams();
  useEffect(() => {
    void dispatch(getClassesThunk(id));
  }, [])
  console.log(classes);
  return (
    <Box display="flex" flexWrap="wrap">
      {classes?.map((item) => (
        <ClassItem key={item.id} item={item} school={school} />
      ))}
      <ClassFormModal />
    </Box>
  );
}