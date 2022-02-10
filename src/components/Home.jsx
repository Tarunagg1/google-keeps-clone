import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import React, { Fragment } from "react";
import Notes from "./notes";
import SwipeDrawer from "./SwipeDrawer";
import DeleteNotes from './delete';
import ArchiveNotes from './archive';

export default function Home() {
  return (
    <Fragment>
      <Box style={{ display: "flex", width: "100%" }}>
        <Router>
          <SwipeDrawer />
          <Routes>
            <Route path="/" element={<Notes />} />
            <Route path="/archive" element={<ArchiveNotes />} />
            <Route path="/delete" element={<DeleteNotes />} />
          </Routes>
        </Router>
      </Box>
    </Fragment>
  );
}
