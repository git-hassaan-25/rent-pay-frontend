import { useState, useRef } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
import CallIcon from "@mui/icons-material/Call";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const TopHeader = () => {
  const [handleMenu, setHandleMenu] = useState({ open: false, anchorEl: null });
  const menuRef = useRef(null);
  const handleOpen = (event) => {
    setHandleMenu({ open: true, anchorEl: menuRef.current });
  };
  const handleClose = () => {
    setHandleMenu({ open: false, anchorEl: null });
  };
  return (
    <Box className="header-appbar" position="static">
      <Box className="header-toolbar">
        <Stack className="center-flex" direction="row" spacing={2}>
          Welcome to our store Rentpay
          <Box ml={4} className="center-flex">
            <CallIcon
              sx={{
                marginRight: "10px",
                fontSize: "17px",
                color: "red",
              }}
            />
            Call Us: +92 321-9213-283
          </Box>
        </Stack>
        {/* <Box className="center-flex">
          <Box className="center-flex" mr={3}>
            <FavoriteIcon sx={{ marginRight: "10px", fontSize: "17px" }} />
            Wishlist
          </Box>
          <Box className="center-flex">
            <PersonIcon sx={{ marginRight: "10px", fontSize: "18px" }} />
            My Account
          </Box>
        </Box> */}
        <Stack className="center-flex" direction="row" spacing={2}>
          <Button
            sx={{
              height: "30px",
              textTransform: "inherit",
              color: "inherit",
              fontFamily: "inherit",
            }}
          >
            <FavoriteIcon sx={{ marginRight: "10px", fontSize: "16px" }} />
            <span ref={menuRef} style={{ fontSize: "13px" }}>
              Wishlist
            </span>
          </Button>
          <Button
            sx={{
              height: "30px",
              textTransform: "inherit",
              color: "inherit",
              fontFamily: "inherit",
            }}
            onClick={handleOpen}
          >
            <PersonIcon sx={{ marginRight: "10px", fontSize: "17px" }} />
            <span ref={menuRef} style={{ fontSize: "13px" }}>
              My Account
            </span>
            <ExpandMoreIcon sx={{ marginLeft: "3px", fontSize: "14px" }} />
          </Button>

          <Menu
            id="basic-menu"
            anchorEl={handleMenu.anchorEl}
            open={handleMenu.open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </Stack>
      </Box>
    </Box>
  );
};
export default TopHeader;
