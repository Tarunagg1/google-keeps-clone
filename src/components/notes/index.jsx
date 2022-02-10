import React, { Fragment, useContext } from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Form from "./Form";
import { DataContext } from "../../context/DataProvider";
import Note from "./Note";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export default function Notes() {
  const { notes } = useContext(DataContext);

  return (
    <Fragment>
      <Box sx={{ display: "flex", width: "100%" }}>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Form />
          {notes && notes.map((note,ind) => <Note key={ind} note={note} />)}
        </Box>
      </Box>
    </Fragment>
  );
}
