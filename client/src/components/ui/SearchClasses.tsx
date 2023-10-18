import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getClassesThunk } from "../../redux/slices/class/classesThunks";
import ClassSearchItem from "./ClassSearchItem";

export default function SearchClasses({ classes }): JSX.Element {
  const [open, setOpen] = useState(false);
  const [idClass, setIdClass] = useState(0);
  console.log(idClass);
  const school = useAppSelector((store) => store.school);
  const { id } = useParams();

  console.log(classes);
  return (
    <Box display="flex" flexWrap="wrap">
      {classes?.map((item) => (
        <ClassSearchItem key={item.id} item={item} school={school} setOpen={setOpen} setIdClass={setIdClass} />
      ))}
    </Box>
  );
}
