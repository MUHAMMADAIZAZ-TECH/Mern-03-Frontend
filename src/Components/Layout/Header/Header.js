import React,{useState} from 'react'
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import { Button,Menu, MenuItem,Box, OutlinedInput, InputAdornment,Avatar  } from '@mui/material';
import { useDispatch,useSelector} from 'react-redux';
import { logout } from '../../../Store/Slicers/UserSlicer/UserSlicer';
import Jirasoftware from '../../../Assests/Images/jira-software.png';
import bellicon from '../../../Assests/Images/bell-icon.png';
import helpicon from '../../../Assests/Images/help-icon.png';
import settingicon from '../../../Assests/Images/setting-icon.png';
import {Apps,Search  } from '@mui/icons-material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
export default function Header() {
  const dispatch = useDispatch()
  const state = useSelector((state)=>state.auth)
  const {User} =state;
  const LogOut = () =>{
   dispatch(logout())
   localStorage.clear()
   window.open("http://localhost:8080/auth/logout", "_self");
  }
  const [anchorEl, setAnchorEl] = useState(null);
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
        <MenuItem onClick={handleClose}>{User?.FirstName} {User?.LastName}</MenuItem>
        <MenuItem onClick={handleClose}>{User?.Email}</MenuItem>
        <MenuItem onClick={()=>{
          handleClose()
          LogOut()
        }}>Logout</MenuItem>
      </Menu>
        </Toolbar>
      </AppBar>
  )
}
