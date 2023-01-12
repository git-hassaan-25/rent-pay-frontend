import { useState, useEffect } from "react";
import { Avatar, IconButton, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
// import NextIcon from "@mui/icons-material/Next";
import Box from "@mui/material/Box";
import axios from "axios";
// import imgg from "../../public/hassaan.jpg";

const MainPage = () => {
  const [users, setUsers] = useState([]);
  // useEffect(() => {
  //   async function getAllUsers() {
  //     try {
  //       const dataArray = await axios.get("http://127.0.0.1:8000/api/user");
  //       setUsers(dataArray.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   getAllUsers();
  // }, []);

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: "6%" }}>
      {users &&
        users.map((user, index) => {
          return (
            <Card sx={{ maxWidth: 345, marginLeft: "4%" }} key={index}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    R
                  </Avatar>
                }
                title={user.firstname + " " + user.lastname}
                subheader={user.contact}
              />
              <CardMedia
                component="img"
                height="194"
                image={"images/" + user.firstname.toLowerCase() + ".jpg"}
                alt={user.firstname}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  This is a message from {user.firstname} {user.lastname}.
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
              </CardActions>
            </Card>
          );
        })}
    </Box>
  );
};
export default MainPage;
