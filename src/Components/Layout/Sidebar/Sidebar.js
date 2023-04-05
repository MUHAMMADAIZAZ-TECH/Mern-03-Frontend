import React from 'react';
import Drawer from '@mui/material/Drawer';
export default function Sidebar({drawer,drawerWidth}) {
  return (
   <React.Fragment>
    <Drawer
    variant="permanent"
    sx={{
      width: drawerWidth,
      flexShrink: 0,
      [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
    }}
  >
    {/* {drawer} */}
  </Drawer>
  </React.Fragment>
  )
}
