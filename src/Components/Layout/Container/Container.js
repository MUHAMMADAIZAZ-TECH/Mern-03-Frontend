import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Outlet } from 'react-router-dom';
function Container({drawerWidth}) {
  return (
    <Box
    component="main"
    sx={{ flexGrow: 1, p: 3 }}>
    <Toolbar />
    <Outlet/>
  </Box>
  );
}

export default Container;
