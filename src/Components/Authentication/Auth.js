import React from 'react';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';
import EmailVerified from './EmailVerified/EmailVerified';
import ForgotPassword from './ForgotPassword/ForgotPassword';
import PasswordReset from './PasswordReset/PasswordReset';
import atlassianicon from '../../Assests/Images/Atlassian-icon.png';
import { Outlet } from 'react-router-dom';
import {  CssBaseline, Box, Container } from "@mui/material";
function Auth() {
    return (
      <div className='auth'>
         <CssBaseline />
        <Container maxWidth="sm" >
          <Box sx={{ height: '90vh' }} >
          <div className="auth-form">
          <img src={atlassianicon} height={45} width={260}/>
          <Outlet/>
          </div>
          </Box>
        </Container>
      </div>
    );
}

export default Auth;
export {
    SignIn,
    SignUp,
    EmailVerified,
    ForgotPassword,
    PasswordReset
}