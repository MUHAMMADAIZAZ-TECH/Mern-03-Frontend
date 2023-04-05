import React,{useState} from 'react'
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {AccountCircle} from '@mui/icons-material';
import { Button,Menu, MenuItem,Box  } from '@mui/material';
import { useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import AdbIcon from '@mui/icons-material/Adb';
import { logout } from '../../../Store/Slicers/UserSlicer/UserSlicer';
import Jirasoftware from '../../../Assests/Images/jira-software.png';
import AppsIcon from '@mui/icons-material/Apps';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const drawerWidth = 240;
export default function Header({handleDrawerToggle}) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const LogOut = () =>{
   dispatch(logout())
   localStorage.clear()
   window.open("http://localhost:8080/auth/logout", "_self");
  }
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenNavMenu = (event) => {
    // setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    // setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    // setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    // setAnchorElUser(null);
  };

  const pages = ['Your work', 'Projects', 'Filters','Dashboards','Teams','Apps'];
  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
        <AppsIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1,fontSize:25 }} />
        <img src={Jirasoftware} alt=''/>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                style={{textTransform:'none'}}
                endIcon={<ArrowDropDownIcon/>}
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, display: 'flex' }}
              >
                {page}
              </Button>
            ))}
          
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          <Button variant="contained" size="small">
          Create
        </Button>
          </Box>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          </Typography>
        
          <Button color="inherit" startIcon={ <AccountCircle />} onClick={LogOut}>Logout</Button>
        </Toolbar>
      </AppBar>
  )
}
