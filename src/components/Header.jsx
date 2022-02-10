import React, { Fragment } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {AppBar,Toolbar} from '@mui/material';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';


const AppBarComp = styled(AppBar)`
    z-index:1201;
    background:#fff;
    height:70px;
    box-shadow: inset 0 -1px 0  #dadca0;
`;

const Heading = styled(Typography)`
  color: #5F6368;
  font-size: 24px;
  margin-left: 25px;
`;

export default function Header ({open,handleDrawerOpen}) {
    const logo = 'https://seeklogo.com/images/G/google-keep-logo-0BC92EBBBD-seeklogo.com.png';

  return (
    <Fragment>
      <AppBarComp open={open}>
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{marginRight: "36px"}}
          >
            <MenuIcon />
          </IconButton>
          <Link to={'/'}>
            <img src={logo} alt="logo" style={{width: 30}} />
          </Link>
          <Heading>Keep</Heading>
        </Toolbar>
      </AppBarComp>
    </Fragment>
  );
}
