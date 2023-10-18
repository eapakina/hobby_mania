import React, { useEffect } from "react";
import { Box, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getAllSchoolsThunk } from "../../redux/slices/school/schoolThunk";

export default function AllSchools(): JSX.Element {
  const dispatch = useAppDispatch();
  const schools = useAppSelector((store) => store.school.data);

  useEffect(() => {
    void dispatch(getAllSchoolsThunk());
  }, []);
  console.log(schools);
  return (
    <List>
      {schools?.map((school) => (
        <ListItem disablePadding>
          <ListItemIcon color="secondary">
            <SchoolIcon color="secondary"/>
          </ListItemIcon>

          <ListItemText>
            {" "}
            <a href={`/school/${school.id}`}>{school.schoolName} </a>{" "}
          </ListItemText>
        </ListItem>
      ))}
    </List>
  );
}
