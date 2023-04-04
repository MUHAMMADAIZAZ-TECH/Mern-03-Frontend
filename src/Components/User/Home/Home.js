import React, { useState,useEffect } from "react";
import { SearchField, Userbox } from "../../UI-Components/Index";
import { CssBaseline, Box, Grid } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import {getFollowersAndFollowing,searchHandler} from '../../../Store/Slicers/UserSlicer/UserSlicer';
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
        <Grid item xs={6}>
            <div style={{display: "flex",alignSelf: "center",justifyContent: "center",flexDirection: "column",padding: 20,}}>
              <SearchField
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                searchHandler={()=>dispatch(searchHandler(searchQuery))}
              />
            </div>
          </Grid>
          <Grid item xs={6} >
           <span> Followers {data?.Followers?.length}</span>
           <span> Following {data?.Following?.length}</span>
          </Grid>
        </Grid>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} columns={{ xs: 6, md: 12 }}>
        <Grid item xs={12} >
            <div style={{ padding: 3 }}>{searchedList?.ListOfUsers?.map((user,index) => (
            <Userbox user={user} key={index} LoggedInUser={LoggedInUser} />))}</div>
          </Grid>
          </Grid>
      </Box>
    </React.Fragment>
  );
};
export default Home;
