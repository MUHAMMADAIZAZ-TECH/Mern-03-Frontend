import "./App.css";
import "./Mui.Custom.css";
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
  const getUser = () => {
    fetch("http://localhost:8080/auth/login/success", {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
    })
      .then((response) => {
        if (response.status === 200) return response.json();
        throw new Error("authentication has been failed!");
      })
      .then((resObject) => {
        navigate("/Dashboard");
        dispatch(authenticateUser(resObject));
      })
      .catch((err) => {
        navigate("/SignIn");
        console.log(err);
      });
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
