import React, { Fragment, useContext } from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { DataContext } from "../../context/DataProvider";
import ArchiveNote from './ArchiveNote';

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export default function ArchiveNotes() {
  const { archiveNotes } = useContext(DataContext);

  return (
    <Fragment>
      <Box sx={{ display: "flex", width: "100%" }}>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          {archiveNotes && archiveNotes.map((note,ind) => <ArchiveNote key={ind} note={note} />)}
        </Box>
      </Box>
    </Fragment>
  );
}
