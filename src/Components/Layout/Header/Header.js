import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetauthstates } from "../../../Store/Slicers/Authentication/AuthenticationSlice";
import { Image4, Image6, Image7, Image8 } from "../../../Assests/Images/index";
import { Apps, Search, ArrowDropDown } from "@mui/icons-material";
import {
  Button,
  Menu,
  MenuItem,
  Box,
  OutlinedInput,
  InputAdornment,
  Avatar,
  Toolbar,
  AppBar,
  IconButton,
} from "@mui/material";
export default function Header() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.auth);
  const { User } = state;
  const LogOut = () => {
    window.open("http://localhost:8080/auth/logout", "_self");
    dispatch(resetauthstates());
  };
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const pages = [
    "Your work",
    "Projects",
    "Filters",
    "Dashboards",
    "Teams",
    "Apps",
  ];
  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <Apps
          sx={{ display: { xs: "none", md: "flex" }, mr: 1, fontSize: 25 }}
        />
        <img src={Image6} alt="" />
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          {pages.map((page) => (
            <Button
              style={{ textTransform: "none" }}
              endIcon={<ArrowDropDown />}
              key={page}
              sx={{ my: 2, display: "flex" }}
            >
              {page}
            </Button>
          ))}
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            display: {
              xs: "none",
              md: "flex",
              justifyContent: "space-between",
            },
          }}
        >
          <Button variant="contained" size="small">
            Create
          </Button>
          <OutlinedInput
            size="small"
            style={{
              height: "32px",
              width: "200px",
            }}
            placeholder="Search"
            startAdornment={
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            }
          />
        </Box>
        <img src={Image4} alt="" className="right-icons" />
        <img src={Image8} alt="" className="right-icons" />
        <img src={Image7} alt="" className="right-icons" />
        <IconButton onClick={handleClick}>
          <Avatar
            alt="John Doe"
            src={User?.AvatarUrl}
            sx={{ width: 34, height: 34 }}
          />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>
            {User?.FirstName} {User?.LastName}
          </MenuItem>
          <MenuItem onClick={handleClose}>{User?.Email}</MenuItem>
          <MenuItem
            onClick={() => {
              handleClose();
              LogOut();
            }}
          >
            Logout
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
