import React, { useEffect } from "react";
import { TextInput, CustomButton } from "../../UI-Components/Index";
import { Grid } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  resetpassword,
  clearMessage,
} from "../../../Store/Slicers/Authentication/AuthenticationSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Image3 } from "../../../Assests/Images/index";

export default function ForgotPassword() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.auth);
  const validationSchema = Yup.object({
    Email: Yup.string()
      .email("Please enter valid email address")
      .required("Email is required"),
  });
  const formik = useFormik({
    initialValues: {
      Email: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(resetpassword({ Email: values.Email }));
    },
  });
  useEffect(() => {
    return () => {
      dispatch(clearMessage());
    };
  }, []);
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
            size="small"
            placeholder={"Enter Your email"}
            value={formik.values.Email}
            change={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.Email && Boolean(formik.errors.Email)}
            helper={formik.touched.Email && formik.errors.Email}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <CustomButton
            variant="contained"
            text="Send recovery link"
            size="large"
            fullWidth
            onClick={formik.handleSubmit}
            disableBtn={!formik.isValid || formik.isSubmitting}
          />
        </Grid>
      </Grid>
      <Link to={"/SignIn"} className="signup-text">
        Return to log in
      </Link>
      <img src={Image3} height={30} width={160} />
      <div className="signup-text">
        One account for Jira, Confluence, Trello and more.
      </div>
      <div className="signup-text">Login help • Contact Support</div>
      {state.error && <div>Error:{state.error}</div>}
      {state.error && <div>Message:{state.message}</div>}
    </React.Fragment>
  );
}
