import React from 'react';
import Drawer from '@mui/material/Drawer';
export default function Sidebar({drawer,drawerWidth,container,mobileOpen,handleDrawerToggle}) {
  return (
   <React.Fragment>
    <Drawer
    container={container}
    variant="temporary"
    open={mobileOpen}
    onClose={handleDrawerToggle}
    ModalProps={{
      keepMounted: true, // Better open performance on mobile.
    }}
    sx={{
      display: { xs: 'block', sm: 'none' },
      '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
    }}
  >
    {drawer}
  </Drawer>
    <Drawer
    variant="permanent"
    sx={{
      display: { xs: 'none', sm: 'block' },
      '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
    }}
    open
  >
    {drawer}
  </Drawer>
  </React.Fragment>
  )
}
