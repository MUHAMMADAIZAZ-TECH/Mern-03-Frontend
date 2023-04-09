import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { CustomButton } from "../../UI-Components/";
import { verifyemailurl } from "../../../Store/Slicers/Authentication/AuthenticationSlice";
import { useDispatch, useSelector } from "react-redux";
export default function EmailVerified() {
  const params = useParams();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(verifyemailurl(params));
  }, []);
  return (
    <div>
      {state?.urlValid ? (
        <div>
          <h2>Email Verified Successfully</h2>
          <Link to="/SignIn" className="signup-text">
            <CustomButton
              variant="contained"
              text="Continue"
              size="large"
              fullWidth
            />
          </Link>
        </div>
      ) : (
        <React.Fragment>
          <h2>404 Not Found</h2>
          <Link to="/SignIn" className="signup-text">
            <CustomButton
              variant="contained"
              text="Go back"
              size="large"
              fullWidth
            />
          </Link>
        </React.Fragment>
      )}
    </div>
  );
}
