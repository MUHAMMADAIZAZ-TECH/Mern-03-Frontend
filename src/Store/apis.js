import axios from "axios";
const LoggedInUser = JSON.parse(localStorage.getItem("user"));
const token = localStorage.getItem("accessToken");
axios.defaults.baseURL = "http://localhost:8080/";
axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
export const SignIn = async (state) => {
  try {
    const response = await axios.post(`signin`, state);
    localStorage.setItem("accessToken", response.data.accessToken);
    localStorage.setItem("user", JSON.stringify(response.data.user));
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
export const SignUp = async (state) => {
  try {
    const response = await axios.post(`signup`,state);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
 
};
export const GetFollowersAndFollowing = async () => {
  const response = await axios.post(`get`, { LoggedInUser: LoggedInUser.id });
  return response;
};
export const Follow = async (userId) => {
  const response = await axios.post(`follow`, {
    LoggedInUser: LoggedInUser.id,
    SecondUser: userId,
  });
  return response;
};
export const UnFollow = async (userId) => {
  const response = await axios.post(`unfollow`, {
    LoggedInUser: LoggedInUser.id,
    SecondUser: userId,
  });
  return response;
};
export const SearchHandler = async (searchQuery) => {
  const response = await axios.post(`search`, {
    searchQuery: searchQuery,
    UserId: LoggedInUser.id,
  });
  return response;
};