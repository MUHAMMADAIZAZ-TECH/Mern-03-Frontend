import React from 'react'
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {Menu,AccountCircle} from '@mui/icons-material';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom'
import { logout } from '../../../Store/Slicers/UserSlicer/UserSlicer';
const drawerWidth = 240;
export default function Header({handleDrawerToggle}) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const LogOut = () =>{
   window.open("http://localhost:8080/auth/logout", "_self");
   dispatch(logout())
   localStorage.clear()
  }
  return (
    <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Instagram
          </Typography>
          <Button color="inherit" startIcon={ <AccountCircle />} onClick={LogOut}>Logout</Button>
        </Toolbar>
      </AppBar>
  )
}
