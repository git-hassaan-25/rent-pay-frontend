import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
import CallIcon from "@mui/icons-material/Call";
import "../index.css";
const HomePage = () => {
  return (
    <Box className="header-appbar" position="static">
      <Container className="header-container" maxWidth="xl">
        <Box className="header-toolbar">
          <Box className="center-flex">
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
          </Box>
          <Box className="center-flex">
            <Box className="center-flex" mr={3}>
              <FavoriteIcon sx={{ marginRight: "10px", fontSize: "17px" }} />
              Wishlist
            </Box>
            <Box className="center-flex">
              <PersonIcon sx={{ marginRight: "10px", fontSize: "18px" }} />
              My Account
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
export default HomePage;
