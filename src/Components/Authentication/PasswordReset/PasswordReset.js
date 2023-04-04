import axios from 'axios';
import React ,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import { TextInput,CustomButton } from '../../UI-Components/Index';
import {Typography,CssBaseline,Box,Container} from '@mui/material';
import { verifyresetpasswordurl ,updatenewpassword} from "../../../Store/Slicers/Authentication/AuthenticationSlice";
import { useDispatch, useSelector } from "react-redux";

export default function PasswordReset() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state.auth);
    const [Password,setPassword] = useState('')
    const params = useParams();
    const HanldeInput = (e) => setPassword(e.target.value);
    useEffect(()=>{
        dispatch(verifyresetpasswordurl(params))
    },[params.id,params.token])
  return (
    <React.Fragment>{state?.urlValid ?(
      <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ height: '50vh' }} >
        <div className='PasswordResetContainer'>
        <Typography variant="h4" gutterBottom>
          Enter New Password
        </Typography>
          <TextInput 
              fullWidth 
              label="Password" 
              name="Password" 
              type="password" 
              value={Password} 
              change={HanldeInput} 
              variant="outlined" />
              <br/>
            <CustomButton 
                variant="contained" 
                text="Sign In" 
                size="large"
                fullWidth
                onClick={()=>dispatch(updatenewpassword({params:params,Password:Password}))}/>
        </div>
        {state.error && <div>Error:{state.error}</div>}
        {state.message && <div>Message:{state.message}</div>}
        </Box>
      </Container>
    </React.Fragment>
  ):(
      <div><h1>404 Not Found</h1></div>
  )}
     </React.Fragment>
  )
}
