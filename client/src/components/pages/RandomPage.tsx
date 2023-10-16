import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getRandomClassesThunk } from "../../redux/slices/class/classesThunks";
import ClassRandomItem from "../ui/ClassRandomItem";

export default function RandomPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const school = useAppSelector((store) => store.school);
  const classes = useAppSelector((store) => store.classes);
  useEffect(() => {
    void dispatch(getRandomClassesThunk());
  }, []);

  console.log(classes);
  return (
    <Box display="flex" flexWrap="wrap">
      {classes?.map((item) => (
        <ClassRandomItem
          item={item}
        />
      ))}
    </Box>
  );
}