import { Container, Header } from "../Layout/index";
import React from "react";
import { Box, CssBaseline } from "@mui/material";
const UserDashboard = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header />
      <Container />
    </Box>
  );
};

export default UserDashboard;
