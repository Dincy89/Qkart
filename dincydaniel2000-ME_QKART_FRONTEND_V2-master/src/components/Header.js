import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Avatar, Button, Stack } from "@mui/material";
import { Search} from "@mui/icons-material";
import Box from "@mui/material/Box";
import React from "react";
import "./Header.css";
import { useHistory} from "react-router-dom"

const Header = ({ children, hasHiddenAuthButtons }) => {
  const history = useHistory();
  const logout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("token");
    localStorage.removeItem("balance");
    history.push("/")
    window.location.reload()
  }
  if(hasHiddenAuthButtons){
    return (
      <Box className="header">
        <Box className="header-title">
          <img src="logo_light.svg" alt="QKart-icon"></img>  
        </Box>
        <Button
          className="explore-button"
          startIcon={<ArrowBackIcon />}
          variant="text"
          onClick ={() => history.push("/")}
        >
          Back to explore
        </Button>
      </Box>
    );
  }
  return (
    <Box className="header">
        <Box className="header-title">
            <img src="logo_light.svg" alt="QKart-icon"></img>
        </Box>
        {children}
        
        <Stack direction = "row" spacing = {2} alignItems = "center">
          {localStorage.getItem("username") ?
            (
              <>
              <Avatar src = "avatar.png" alt = {localStorage.getItem("username") || "profile"}/>
              <p className = "username-text">{localStorage.getItem("username")}</p>
              <Button type="primary" onClick={logout}>Logout</Button>
              </>
            ) : 
            (
              <>
              <Button onClick = {()=>history.push("/register")}>Register</Button>
              <Button onClick = {()=>history.push("/login")}  variant = "contained">Login</Button>
              </>
            )
          }
        </Stack>
    </Box>
  )
};

export default Header;
