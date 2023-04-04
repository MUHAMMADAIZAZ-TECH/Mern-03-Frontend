import React,{useState} from 'react';
import { TextInput,CustomButton } from '../../UI-Components/Index';
import {Typography,CssBaseline,Box,Container} from '@mui/material';
import { resetpassword } from "../../../Store/Slicers/Authentication/AuthenticationSlice";
import { useDispatch, useSelector } from "react-redux";

export default function ForgotPassword() {
    const [Email,setEmail] = useState('')
    const dispatch = useDispatch();
    const state = useSelector((state) => state.auth);
    const HanldeInput = (e)=> setEmail(e.target.value);
  return (
    <React.Fragment>
    <CssBaseline />
    <Container maxWidth="sm">
      <Box sx={{ height: '50vh' }} >
      <div className='ForgotPasswordContainer'>
      <Typography variant="h4" gutterBottom>
        Forgot Password
      </Typography>
        <TextInput 
            fullWidth 
            label="Email" 
            name="Email" 
            type="text" 
            value={Email} 
            change={HanldeInput} 
            variant="outlined" />
            <br/>
          <CustomButton 
              variant="contained" 
              text="Sign In" 
              size="large"
              fullWidth
              onClick={()=>dispatch(resetpassword({Email:Email}))}/>
      </div>
      {state.error && <div>Error:{state.error}</div>}
      {state.error && <div>Message:{state.message}</div>}
      </Box>
    </Container>
  </React.Fragment>
  )
}
