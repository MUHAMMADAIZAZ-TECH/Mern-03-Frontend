import axios from "axios";
axios.defaults.baseURL = "http://localhost:8080/";
axios.defaults.withCredentials = true;
export const SignIn = async (state) => {
  try {
    const response = await axios.post(`signin`, state);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
export const SignUp = async (state) => {
  try {
    const response = await axios.post(`signup`, state);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
export const GetDashboardDetails = async () => {
  const response = await axios.get(`get/jiradashboard/content`);
  return response;
};
export const verifyEmailUrl = async (params) => {
  try {
    const response = await axios.get(`${params.id}/verify/${params.token}`);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
export const resetPassword = async (state) => {
  try {
    const response = await axios.post("password-reset", state);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
export const verifyResetPasswordurl = async (params) => {
  try {
    const response = await axios.get(
      `password-reset/${params.id}/${params.token}`
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
export const UpdateNewPassword = async (state) => {
  const { params, Password } = state;
  try {
    const response = await axios.post(
      `password-reset/${params.id}/${params.token}`,
      { Password }
    );
    window.location = "/SignIn";
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

