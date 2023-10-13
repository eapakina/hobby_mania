import { Box } from "@mui/material";
import React from "react";
import ClassItem from "./ClassItem";
import ClassFormModal from "./ClassFormModal";

export default function Classes(): JSX.Element {
  return (
    <Box display="flex" flexWrap="wrap">
      {/* {books?.map((book) => ( */}
      <ClassItem />
      {/* ))} */}
      <ClassFormModal />
    </Box>
  );
}
