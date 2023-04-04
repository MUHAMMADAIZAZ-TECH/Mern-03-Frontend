import React, { useEffect, useState } from "react";
import { TextInput, CustomButton } from "../../UI-Components/Index";
import { useDispatch ,useSelector} from 'react-redux';
import { Typography, Grid } from "@mui/material";
import {signup,clearMessage} from '../../../Store/Slicers/Authentication/AuthenticationSlice';
import { Link } from "react-router-dom";
const SignUp = () => {
  const [state, setState] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Password: "",
  });
  const State = useSelector((state) => state.auth);
  const dispatch = useDispatch()
  const HanldeInput = (e) => {
    dispatch(clearMessage())
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(()=>{
    return ()=>{
      dispatch(clearMessage())
    }
  },[])
  return (
    <div className="SignUpContainer">
    <Typography variant="h4" gutterBottom>
      Sign Up
    </Typography>
    <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={6}>
        <TextInput
          fullWidth
          label="First Name"
          name="FirstName"
          type="text"
          required
          value={state.FirstName}
          change={HanldeInput}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={6}>
        <TextInput
          fullWidth
          required
          label="Last Name"
          name="LastName"
          type="text"
          value={state.LastName}
          change={HanldeInput}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12}>
        <TextInput
          fullWidth
          required
          label="Email"
          name="Email"
          type="text"
          value={state.Email}
          change={HanldeInput}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12}>
        <TextInput
          fullWidth
          required
          label="Password"
          name="Password"
          type="password"
          value={state.Password}
          change={HanldeInput}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12}>
        <CustomButton
          variant="contained"
          text="Sign Up"
          size="large"
          fullWidth
          onClick={()=>dispatch(signup({state}))}
        />
      </Grid>
    </Grid>
    {State.message && <div>{State.message}</div>}
    <br />
    <Link to="/SignIn">Already have an account?</Link>
  </div>
  );
};

export default SignUp;
