import React,{useState,useEffect} from 'react';
import { TextInput,CustomButton } from '../../UI-Components/Index';
import {Typography,Grid} from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch ,useSelector} from 'react-redux';
import atlassianicon2 from '../../../Assests/Images/Attlassian2.png';
import { GoogleLoginButton,GithubLoginButton,AppleLoginButton } from "react-social-login-buttons";
import {signin,clearMessage} from '../../../Store/Slicers/Authentication/AuthenticationSlice';
const SignIn = ()=> {
  const [state,setState] = useState({
    Email:"",
    Password:""
  })
  const State = useSelector((state) => state.auth);
  const dispatch = useDispatch()
  const HanldeInput = (e)=>{
    dispatch(clearMessage())
    setState({
      ...state,[e.target.name]:e.target.value
    })
  }
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
     <h5 className="form-heading"> Log in to continue</h5>
       <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={12}>
      <TextInput 
          fullWidth 
          size='small'
          name="Email" 
          type="text" 
          placeholder="Enter your email"
          value={state.Email} 
          change={HanldeInput} 
          variant="outlined" />
      </Grid>
      <Grid item xs={12}>
      <TextInput 
            fullWidth 
            size='small'
            name="Password" 
            type="password" 
            placeholder="Enter your password"
            value={state.Password}  
            change={HanldeInput}
            variant="outlined"/>
      </Grid>
      <Grid item xs={12}>
      <CustomButton 
            variant="contained" 
            text="Continue" 
            size="large"
            fullWidth
            onClick={()=>dispatch(signin({state}))}/>
      </Grid>
      <Grid item xs={12} textAlign={'center'}>
      <span>or Continue with</span>
      </Grid>
      <Grid item xs={12}>
      <GoogleLoginButton align="center" size='40px' />
      </Grid>
      <Grid item xs={12}>
      <AppleLoginButton align="center" size='40px' />
      </Grid>
      <Grid item xs={12}>
      <GithubLoginButton onClick={github} align="center" size='40px' />
      </Grid>
    </Grid>
        {State.message && <div>{State.message}</div>}
        <div className="signup-text">
        <Link to="/ForgotPassword">Can't log in?</Link>
        <Link to="/SignUp" >Doesn't have an account?</Link>
        </div>
        <img src={atlassianicon2} height={30} width={160}/>
        <div className="signup-text">One account for Jira, Confluence, Trello and more.<br/>Privacy Policy • User Notice</div>
   </React.Fragment>
  )
}

export default SignIn

