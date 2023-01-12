import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

import UseAnimations from "react-useanimations";

import Container from "@mui/material/Container";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";

const MainHeader = () => {
  const buttons = [
    <Button sx={{ marginRight: "5%" }} color="inherit">
      HOME
    </Button>,
    <Button sx={{ marginRight: "5%" }} color="inherit">
      LEND
    </Button>,
    <Button sx={{ marginRight: "5%" }} color="inherit">
      RENT
    </Button>,
    <Button sx={{ marginRight: "5%" }} color="inherit">
      SHOP
    </Button>,
    <Button sx={{ marginRight: "5%" }} color="inherit">
      CATEGORY
    </Button>,
  ];
  const navItems = ["Home", "About", "Contact"];
  return (
    <>
      <Box className="main-header-appbar" position="static">
        <Box className="main-header-toolbar">
          <Box className="center-flex">
            {/* <MenuIcon sx={{ marginLeft: "4%", fontSize: "40px" }} /> */}
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <MenuIcon sx={{ marginLeft: "4%", fontSize: "40px" }} />
            </IconButton>
            <Box ml={8} fontSize={20}>
              <b>RENT^PAY</b>
            </Box>
          </Box>
          <Stack direction="row" spacing={2}>
            <Box className="main-center-flex">{buttons}</Box>
          </Stack>
        </Box>
      </Box>
      <Divider variant="middle" light={false} />
    </>
  );
};

export default MainHeader;
