import React, { Fragment } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import { Archive, Delete, Lightbulb } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function NavList() {
  const navListData = [
    { id: 1, name: "Notes", icon: <Lightbulb />, route: "/" },
    { id: 2, name: "Archives", icon: <Archive />, route: "/archive" },
    { id: 3, name: "Trash", icon: <Delete />, route: "/delete" },
  ];

  return (
    <Fragment>
      <List>
        {navListData.map((ele, index) => (
          <ListItem button key={index}>
            <Link
              to={`${ele.route}`}
              style={{
                textDecoration: "none",
                display: "flex",
                color: "inherit",
              }}
            >
              <ListItemIcon style={{ alignItems: "center" }}>
                {ele.icon}
              </ListItemIcon>
              <ListItemText primary={ele.name} />
            </Link>
          </ListItem>
        ))}
      </List>
    </Fragment>
  );
}
