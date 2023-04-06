import React ,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import { TextInput,CustomButton } from '../../UI-Components/Index';
import {Typography,CssBaseline,Box,Container,Grid} from '@mui/material';
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
    <React.Fragment>{!state?.urlValid ?(
      <React.Fragment>
          <h5 className="form-heading"> Enter new password</h5>
          <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={12}>
      <TextInput 
              fullWidth 
              size={'small'}
              name="Password" 
              type="password" 
              placeholder={'Enter new password'}
              value={Password} 
              change={HanldeInput} 
              variant="outlined" />
      </Grid>
      <Grid item xs={12}>
      <CustomButton variant="contained" text="create" fullWidth onClick={()=>dispatch(updatenewpassword({params:params,Password:Password}))}/>
      </Grid>
      </Grid>
        {state.error && <div>Error:{state.error}</div>}
        {state.message && <div>Message:{state.message}</div>}
    </React.Fragment>
  ):(
      <div><h1>404 Not Found</h1></div>
  )}
     </React.Fragment>
  )
}
