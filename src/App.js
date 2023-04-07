import "./App.css";
import "./Mui.Custom.css";
import axios from "axios";
import React, { useEffect } from "react";
import Auth, {
  SignIn,
  SignUp,
  EmailVerified,
  ForgotPassword,
  PasswordReset,
} from "./Components/Authentication/Auth";
import UserDashboard from "./Components/User/UserDashboard";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./Components/User/Home/Home";
import { authenticateUser } from "./Store/Slicers/Authentication/AuthenticationSlice";
import { useDispatch, useSelector } from "react-redux";
function App() {
  const accessToken = localStorage.getItem("accessToken");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.auth);
  const getUser = async () => {
    try {
      const response = await axios.get("auth/login/success");
      if (response.status === 200) {
        const resObject = response.data;
        navigate("/Dashboard");
        dispatch(authenticateUser(resObject));
      } else {
        throw new Error("authentication has been failed!");
      }
    } catch (err) {
      console.log(err);
      navigate("/SignIn");
    }
  };
  useEffect(() => {
    getUser();
  }, []);
  useEffect(() => {
    if (state.isAuthenticated === true || accessToken !== null) {
      navigate("/Dashboard");
    } else {
      navigate("/SignIn");
    }
  }, [state.isAuthenticated, accessToken]);
  return (
    <Routes>
      {/* Authentication Routes */}
      <Route path="/" element={<Auth />}>
        <Route index element={<SignIn />} />
        <Route path="/SignIn" index element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path=":id/verify/:token" element={<EmailVerified />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/password-reset/:id/:token" element={<PasswordReset />} />
      </Route>
      {/* Dashboard Routes */}
      {
        <Route path="/Dashboard" element={<UserDashboard />}>
          <Route index element={<Home />} />
        </Route>
      }
    </Routes>
  );
}

export default App;
