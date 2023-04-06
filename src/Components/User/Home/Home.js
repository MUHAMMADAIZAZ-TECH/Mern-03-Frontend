import React, { useState,useEffect } from "react";
import { SearchField, Userbox,Card } from "../../UI-Components/Index";
import { CssBaseline, Box, Grid,Typography,Button, IconButton,Paper } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import {getFollowersAndFollowing,searchHandler} from '../../../Store/Slicers/UserSlicer/UserSlicer';
import EditIcon from '@mui/icons-material/Edit';
import CachedIcon from '@mui/icons-material/Cached';
import StarOutlineRoundedIcon from '@mui/icons-material/StarOutlineRounded';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
export const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const state = useSelector((state) => state.user);
  const { data, searchedList } = state;
  const dispatch = useDispatch();
  const LoggedInUser = JSON.parse(localStorage.getItem('user'))
  
  useEffect( () =>{
    dispatch(getFollowersAndFollowing());
  },[])

  useEffect(()=>{
    const refreshList = () =>{
      if(state.loading2===true){
        dispatch(searchHandler(searchQuery))
      }
    }
    refreshList()
  },[state.loading2])
  return (
    <React.Fragment>
      <CssBaseline />
      <Box sx={{ height: "80vh"}}>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} columns={{ xs: 6, md: 12 }}>
        <Grid item xs={12}>
        <div style={{padding: 20,display:"flex",justifyContent:'space-between'}}>
          <Typography variant='h5'>Default dashboard</Typography>
        <div>
        <IconButton variant="text"><StarOutlineRoundedIcon /></IconButton>
        <Button variant="text" endIcon={<CachedIcon />}> Refresh</Button>
        <Button variant="text" endIcon={<EditIcon />}> Edit</Button>
        <IconButton variant="text"><MoreHorizRoundedIcon /></IconButton>
        </div>
        </div>
          </Grid>
        </Grid>
        <Grid container rowSpacing={2}  columns={{ xs: 6, md: 12 }}>
        <Grid item xs={6}>
        <Card/>
          </Grid>
          <Grid item xs={6} >
          <Card/>
          </Grid>
          <Grid item xs={6} >
          <Card/>
          </Grid>
          <Grid item xs={6} >
          <Card/>
          </Grid>
        </Grid>

      </Box>
    </React.Fragment>
  );
};
export default Home;
