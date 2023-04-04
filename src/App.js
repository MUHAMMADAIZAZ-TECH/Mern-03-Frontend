import './App.css';
import React from 'react';
import Auth,{SignIn,SignUp,EmailVerified,ForgotPassword,PasswordReset} from './Components/Authentication/Auth';
import UserDashboard from './Components/User/UserDashboard';
import { Route,Routes } from 'react-router-dom';
import Followers from './Components/User/Followers/Followers';
import Followings from './Components/User/Followings/Followings';
import Home from './Components/User/Home/Home';
function App() {
const accessToken = localStorage.getItem("accessToken")

  return (
    <Routes>
    {/* Authentication Routes */}
    <Route path='/' element={<Auth/>}>
      <Route index element={<SignIn/>}/>
      <Route path='/SignIn' index element={<SignIn/>}/>
      <Route path='/SignUp' element={<SignUp/>}/>
      <Route path=":id/verify/:token" element={<EmailVerified/>}/>
      <Route path='/ForgotPassword' element={<ForgotPassword/>}/>
      <Route path="/password-reset/:id/:token" element={<PasswordReset/>}/>
    </Route>
    {/* Dashboard Routes */}
    {accessToken && <Route path='/Dashboard' element={<UserDashboard/>}>
      <Route index element={<Home/>}/>
      <Route path="/Dashboard/Home"  element={<Home/>} />
      <Route path="/Dashboard/Followers"  element={<Followers/>} />
      <Route path="/Dashboard/Followings"  element={<Followings/>} />
    </Route>}
  </Routes>
  );
}

export default App;
