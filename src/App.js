import axios from "axios";
import React, { useEffect ,useState } from "react";
import Auth, {
  SignIn,
  SignUp,
  EmailVerified,
  ForgotPassword,
  PasswordReset,
} from "./Components/Authentication/Auth";
import UserDashboard from "./Components/Dashboard/UserDashboard";
import { CustomSnackbar, ScreenLoader } from "./Components/UI-Components/";
import { Route, Routes, useNavigate, Navigate } from "react-router-dom";
import { Home, NotFoundPage, ConnectionLost } from "./Components/Pages";
import { authenticateUser } from "./Store/Slicers/Authentication/AuthenticationSlice";
import { useDispatch, useSelector } from "react-redux";
function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.auth);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const { User } = state;
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
    if(!User.Provider && User.Provider !=="normal"){
      getUser()
    }
  }, []);
  useEffect(() => {
    if (state.isAuthenticated === true) {
      navigate("/Dashboard");
    }
  }, [state.isAuthenticated]);
  useEffect(() => {
    window.addEventListener("offline", () => setIsOnline(false));
    window.addEventListener("online", () => setIsOnline(true));

    return () => {
      window.removeEventListener("offline", () => setIsOnline(false));
      window.removeEventListener("online", () => setIsOnline(true));
    };
  }, []);
  return (
    <React.Fragment>
      {isOnline? 
      <Routes>
        <Route path="/" element={<Auth />}>
          <Route index element={<SignIn />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path=":id/verify/:token" element={<EmailVerified />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="/password-reset/:id/:token" element={<PasswordReset />}
          />
        </Route>
        <Route path="/Dashboard" element={
            state.isAuthenticated === true ? (
              <UserDashboard />
            ) : (
              <Navigate replace to="/SignIn" />
            )
          }
        >
          <Route index element={<Home />} />
        </Route>
        <Route path="*" index element={<NotFoundPage />} />
      </Routes>: <ConnectionLost/>}
      <CustomSnackbar />
      {state.loading?<ScreenLoader/>:null}
    </React.Fragment>
  );
}

export default App;
