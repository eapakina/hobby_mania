import React, { useEffect, useState } from "react";
import { Box, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getAllSchoolsThunk } from "../../redux/slices/school/schoolThunk";
import axios from "axios";

export default function AllSchools(): JSX.Element {
  const dispatch = useAppDispatch();
  const schools = useAppSelector((store) => store.school.data);
  const [schola, setSchola] = useState();

  useEffect(() => {
    void axios('/school/get/all').then((res) => setSchola(res.data));
  }, []);
//   console.log(schola, schola[0].schoolName);
  return (
    <List>
      {schola?.map((school) => (
        <ListItem disablePadding>
          <ListItemIcon color="secondary">
            <SchoolIcon />
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
