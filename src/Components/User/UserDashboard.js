import { Link } from 'react-router-dom';
import {Container, Header, Sidebar} from '../Layout/index';
import React,{useEffect} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {Box,CssBaseline,Divider,List,ListItem,ListItemButton,ListItemIcon,ListItemText,Toolbar} from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const drawerWidth = 240;
const UserDashboard = ({ window }) =>{

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
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
    </div>
  );
  const container = window !== undefined ? () => window().document.body : undefined;
  async function login() {
    try {
      const response = await axios({
        method: "GET",
        url: "http://localhost:8080/auth/login/success",
        withCredentials: true,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      console.log(response)
      if (response.status === 200) {
        const resObject = response.data;
        console.log(resObject);
      } else {
        throw new Error("authentication has been failed!");
      }
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    login();
  }, []);
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
     <Header handleDrawerToggle={handleDrawerToggle}/>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Sidebar drawer={drawer} drawerWidth={drawerWidth} container={container} mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle}/>
      </Box>
     <Container drawerWidth={drawerWidth} />
    </Box>
  )
}
UserDashboard.propTypes = {
  window: PropTypes.func,
};
export default UserDashboard;