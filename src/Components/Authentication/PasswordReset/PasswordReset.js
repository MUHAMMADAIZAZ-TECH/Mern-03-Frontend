import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { TextInput, CustomButton } from "../../UI-Components/";
import { Grid } from "@mui/material";
import {
  verifyresetpasswordurl,
  updatenewpassword,
} from "../../../Store/Slicers/Authentication/AuthenticationSlice";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function PasswordReset() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.auth);
  const params = useParams();
  const validationSchema = Yup.object({
    password: Yup.string()
      .required("Password is required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
    confirmPassword: Yup.string()
      .required("Password is required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      )
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  });
  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(
        updatenewpassword({ params: params, Password: values.password })
      );
    },
  });

  useEffect(() => {
    dispatch(verifyresetpasswordurl(params));
  }, [params.id, params.token]);
  return (
    <React.Fragment>
      {state?.urlValid ? (
        <React.Fragment>
          <h5 className="form-heading"> Enter new password</h5>
          <Grid
            container
            rowSpacing={3}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={12}>
              <TextInput
                fullWidth
                size={"small"}
                name="password"
                type="password"
                placeholder={"Enter new password"}
                value={formik.values.password}
                change={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helper={formik.touched.password && formik.errors.password}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextInput
                fullWidth
                size={"small"}
                name="confirmPassword"
                type="password"
                placeholder={"Confirm new password"}
                value={formik.values.confirmPassword}
                change={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.confirmPassword &&
                  Boolean(formik.errors.confirmPassword)
                }
                helper={
                  formik.touched.confirmPassword &&
                  formik.errors.confirmPassword
                }
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <CustomButton
                variant="contained"
                text="Confirm"
                fullWidth
                onClick={formik.handleSubmit}
              />
            </Grid>
          </Grid>
          {state.error && <div>Error:{state.error}</div>}
          {state.message && <div>Message:{state.message}</div>}
        </React.Fragment>
      ) : (
        <div>
          <h1>404 Not Found</h1>
        </div>
      )}
    </React.Fragment>
  );
}
