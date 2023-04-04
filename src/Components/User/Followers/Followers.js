import React, { useEffect } from "react";
import { ListContainer } from "../../UI-Components/Index";
import { getFollowersAndFollowing } from "../../../Store/Slicers/UserSlicer/UserSlicer";
import { useDispatch, useSelector } from "react-redux";
export const Followers = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.user);
  const LoggedInUser = JSON.parse(localStorage.getItem("user"));
  const { data } = state;
  useEffect(() => {
    dispatch(getFollowersAndFollowing());
  }, []);
  return (<ListContainer data={data?.Followers} LoggedInUser={LoggedInUser}/>);
};
export default Followers;
