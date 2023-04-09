import React from 'react';
import { CircularProgress } from '@mui/material';

const ScreenLoader = () => {
  return (
    <div style={{ backgroundColor:"#f5f5f5",display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <CircularProgress />
    </div>
  );
}

export default ScreenLoader;