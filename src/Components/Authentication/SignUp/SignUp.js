import React, { useEffect, useState } from "react";
import { TextInput, CustomButton } from "../../UI-Components/Index";
import { useDispatch ,useSelector} from 'react-redux';
import { Typography, Grid } from "@mui/material";
import {signup,clearMessage} from '../../../Store/Slicers/Authentication/AuthenticationSlice';
import { GithubLoginButton } from "react-social-login-buttons";
import atlassianicon2 from '../../../Assests/Images/Attlassian2.png';
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
  const github = () => {
    window.open("http://localhost:8080/auth/github", "_self");
  };
  useEffect(()=>{
    return ()=>{
      dispatch(clearMessage())
    }
  },[])
  return (
    <React.Fragment>
     <h5 className="form-heading"> Sign up to continue</h5>
    <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={12}>
        <TextInput
          fullWidth
          name="FirstName"
          size='small'
          type="text"
          required
          placeholder={'Enter Your first name'}
          value={state.FirstName}
          change={HanldeInput}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12}>
        <TextInput
          fullWidth
          required
          size='small'
          name="LastName"
          placeholder={'Enter Your last name'}
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
          size='small'
          placeholder={'Enter Your email'}
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
          size='small'
          placeholder={'Enter Your password'}
          name="Password"
          type="password"
          value={state.Password}
          change={HanldeInput}
          variant="outlined"
        />
      </Grid>
  
      <Grid item xs={12}>
      <div className="signup-text">By signing up, I accept the Atlassian <a href="#" >Cloud Terms of Service</a> and acknowledge the <a href="#">Privacy Policy</a>.</div>
        <CustomButton
          variant="contained"
          text="Sign Up"
          size="large"
          fullWidth
          onClick={()=>dispatch(signup({state}))}
        />
      </Grid>
      <Grid item xs={12}>
      <GithubLoginButton onClick={github} align="center" size='40px' />
      </Grid>
    </Grid>
    {State.message && <div>{State.message}</div>}
    <Link to="/SignIn" className="signup-text">Already have an Atlassian account? Log in</Link>
    <img src={atlassianicon2} height={30} width={160}/>
    <div className="signup-text">One account for Jira, Confluence, Trello and more.
    This page is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
    </div>
    </React.Fragment>
  );
};

export default SignUp;
