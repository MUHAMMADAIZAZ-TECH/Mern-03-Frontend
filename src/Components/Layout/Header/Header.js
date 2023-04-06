import React,{useState} from 'react'
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {AccountCircle} from '@mui/icons-material';
import { Button,Menu, MenuItem,Box, OutlinedInput, InputAdornment,Avatar  } from '@mui/material';
import { useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { logout } from '../../../Store/Slicers/UserSlicer/UserSlicer';
import Jirasoftware from '../../../Assests/Images/jira-software.png';
import bellicon from '../../../Assests/Images/bell-icon.png';
import helpicon from '../../../Assests/Images/help-icon.png';
import settingicon from '../../../Assests/Images/setting-icon.png';
import {Apps,Search  } from '@mui/icons-material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SettingsRoundedIcon from '@mui/icons-material/SettingsApplications';
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

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const pages = ['Your work', 'Projects', 'Filters','Dashboards','Teams','Apps'];
  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
        <Apps sx={{ display: { xs: 'none', md: 'flex' }, mr: 1,fontSize:25 }} />
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
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' , justifyContent : 'space-between'} }}>
          <Button variant="contained" size="small">
          Create
        </Button>
      
        <OutlinedInput
              size='small'
              style={{
                height:'32px',
                width: '200px'
              }}
              placeholder="Search"
              startAdornment={
                <InputAdornment position="start">
                    <Search />
                </InputAdornment>
              }
            />
              
          </Box>
          
            <img src={bellicon} alt='' className='right-icons'/>
            <img src={helpicon} alt='' className='right-icons'/>
            <img src={settingicon} alt='' className='right-icons'/>
      <IconButton onClick={handleClick}>
      <Avatar alt="John Doe" src="/static/images/avatar/1.jpg"  sx={{ width: 34, height: 34 }} />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={()=>{
          handleClose()
          LogOut()
        }}>Logout</MenuItem>
      </Menu>
          {/* <Button color="inherit" startIcon={ <AccountCircle />} onClick={LogOut}>Logout</Button> */}
        </Toolbar>
      </AppBar>
  )
}
