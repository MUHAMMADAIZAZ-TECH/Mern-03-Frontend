import { Link } from 'react-router-dom';
import {Container, Header, Sidebar} from '../Layout/index';
import React,{useEffect} from 'react';
import PropTypes from 'prop-types';
import {Box,CssBaseline,Divider,List,ListItem,ListItemButton,ListItemIcon,ListItemText,Toolbar} from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';
const drawerWidth = 240;
const UserDashboard = ({ window }) =>{

  const drawer = (
      <Box sx={{ overflow: 'auto' }}>
      <List>
        {['Home', 'Followers', 'Followings'].map((text, index) => (
           <Link to={text} key={index} style={{
            color:'black',
            textDecoration:"none"
           }}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <AccountCircleIcon /> : <AccountCircleIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
          </Link>))}
      </List>
      </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
     <Header/>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Sidebar drawer={drawer} drawerWidth={drawerWidth}/>
      </Box>
     <Container drawerWidth={drawerWidth} />
    </Box>
  )
}
UserDashboard.propTypes = {
  window: PropTypes.func,
};
export default UserDashboard;