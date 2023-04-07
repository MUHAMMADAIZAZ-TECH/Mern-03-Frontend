import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TextInput, CustomButton } from "../../UI-Components/Index";
import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@mui/material";
import {
  signup,
  clearMessage,
} from "../../../Store/Slicers/Authentication/AuthenticationSlice";
import { GithubLoginButton } from "react-social-login-buttons";
import { Image3 } from "../../../Assests/Images/index";
import { Link } from "react-router-dom";
const SignUp = () => {
  const validationSchema = Yup.object().shape({
    FirstName: Yup.string()
      .required("First name is required")
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .matches(/^[A-Za-z]+$/, "Firstname can only contain alphabets"),
    LastName: Yup.string()
      .required("Last name is required")
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .matches(/^[A-Za-z]+$/, "Lastname can only contain alphabets"),
    Email: Yup.string()
      .email("Please enter valid email address ")
      .required("Email is required"),
    Password: Yup.string()
      .required("Password is required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
  });
  const State = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      FirstName: "",
      LastName: "",
      Email: "",
      Password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      dispatch(signup({ state: values }));
    },
  });
  const github = () => {
    window.open("http://localhost:8080/auth/github", "_self");
  };
  useEffect(() => {
    return () => {
      dispatch(clearMessage());
    };
  }, []);

  return (
    <React.Fragment>
      <h5 className="form-heading"> Sign up to continue</h5>
      <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12}>
          <TextInput
            fullWidth
            name="FirstName"
            size="small"
            type="text"
            required
            placeholder={"Enter Your first name"}
            value={formik.values.FirstName}
            change={formik.handleChange}
            error={formik.touched.FirstName && Boolean(formik.errors.FirstName)}
            helper={formik.touched.FirstName && formik.errors.FirstName}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextInput
            fullWidth
            required
            size="small"
            name="LastName"
            placeholder={"Enter Your last name"}
            type="text"
            value={formik.values.LastName}
            change={formik.handleChange}
            error={formik.touched.LastName && Boolean(formik.errors.LastName)}
            helper={formik.touched.LastName && formik.errors.LastName}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextInput
            fullWidth
            required
            size="small"
            placeholder={"Enter Your email"}
            name="Email"
            type="text"
            value={formik.values.Email}
            change={formik.handleChange}
            error={formik.touched.Email && Boolean(formik.errors.Email)}
            helper={formik.touched.Email && formik.errors.Email}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextInput
            fullWidth
            required
            size="small"
            placeholder={"Enter Your password"}
            name="Password"
            type="password"
            value={formik.values.Password}
            change={formik.handleChange}
            error={formik.touched.Password && Boolean(formik.errors.Password)}
            helper={formik.touched.Password && formik.errors.Password}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <div className="signup-text">
            By signing up, I accept the Atlassian{" "}
            <a href="#">Cloud Terms of Service</a> and acknowledge the{" "}
            <a href="#">Privacy Policy</a>.
          </div>
          <CustomButton
            variant="contained"
            text="Sign Up"
            size="large"
            fullWidth
            onClick={formik.handleSubmit}
            disableBtn={!formik.isValid || formik.isSubmitting}
          />
        </Grid>
        <Grid item xs={12}>
          <GithubLoginButton onClick={github} align="center" size="40px" />
        </Grid>
      </Grid>
      {State.message && <div>{State.message}</div>}
      <Link to="/SignIn" className="signup-text">
        Already have an Atlassian account? Log in
      </Link>
      <img src={Image3} height={30} width={160} />
      <div className="signup-text">
        One account for Jira, Confluence, Trello and more. This page is
        protected by reCAPTCHA and the Google Privacy Policy and Terms of
        Service apply.
      </div>
    </React.Fragment>
  );
};

export default SignUp;
