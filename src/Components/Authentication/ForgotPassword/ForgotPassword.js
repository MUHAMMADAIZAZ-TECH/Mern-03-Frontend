import React,{useState} from 'react';
import { TextInput,CustomButton } from '../../UI-Components/Index';
import {Typography,CssBaseline,Box,Container,Grid} from '@mui/material';
import { resetpassword } from "../../../Store/Slicers/Authentication/AuthenticationSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import atlassianicon2 from '../../../Assests/Images/Attlassian2.png';

export default function ForgotPassword() {
    const [Email,setEmail] = useState('')
    const dispatch = useDispatch();
    const state = useSelector((state) => state.auth);
    const HanldeInput = (e)=> setEmail(e.target.value);
  return (
    <React.Fragment>
     <h5 className="form-heading"> Can't log in?</h5>
     <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={12}>
       <h5>We'll send a recovery link to</h5> 
      <TextInput 
            fullWidth 
            name="Email" 
            type="text" 
            size='small'
            value={Email} 
            placeholder={'Enter Your email'}
            change={HanldeInput} 
            variant="outlined" />
      </Grid>
      <Grid item xs={12}>
      <CustomButton 
              variant="contained" 
              text="Send recovery link" 
              size="large"
              fullWidth
              onClick={()=>dispatch(resetpassword({Email:Email}))}/>
      </Grid>
        </Grid>
        <Link to={'/SignIn'} className="signup-text">Return to log in</Link>
        <img src={atlassianicon2} height={30} width={160}/>
        <div className="signup-text">One account for Jira, Confluence, Trello and more.</div >
        <div className="signup-text">Login help • Contact Support</div>
        {state.error && <div>Error:{state.error}</div>}
      {state.error && <div>Message:{state.message}</div>}
  </React.Fragment>
  )
}
