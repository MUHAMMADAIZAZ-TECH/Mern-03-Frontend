import React from "react";
import { CustomButton } from "../Index";
import { useDispatch } from 'react-redux';
import {Paper,Typography} from '@mui/material';
import {follow,unfollow} from '../../../Store/Slicers/UserSlicer/UserSlicer';
export const Userbox = ({user,LoggedInUser}) => {
  const dispatch = useDispatch();
  const isUserFollowed = () => {
    let index = user?.Followers?.indexOf(LoggedInUser?.id);
    if(index!==-1) return true
    else return false
  }
  return (
    <Paper className="paper" 
    style={{fontSize: 18,color: "green",display:'flex', padding:20,margin:10,justifyContent:"space-between",borderRadius:15}}
    elevation={4}>
      <div>
      <Typography variant="h6">{`${user?.FirstName} ${user?.LastName}`}</Typography> 
      <Typography variant="subtitle2">{user?.Email}</Typography> 
      <Typography variant="subtitle2">Followers {user?.Followers?.length}</Typography> 
      <Typography variant="subtitle2">Following {user?.Following?.length}</Typography> 
      </div>
    <div>
    <CustomButton variant="contained" text={isUserFollowed()?"UnFollow":"Follow"}
       onClick={()=>isUserFollowed()?dispatch(unfollow(user._id)):dispatch(follow(user._id))}/> 
    </div>
    </Paper>
  );
};

 export default Userbox;