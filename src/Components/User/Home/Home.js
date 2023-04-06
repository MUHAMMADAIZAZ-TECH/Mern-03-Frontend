import React, { useEffect } from "react";
import {Card } from "../../UI-Components/Index";
import { CssBaseline, Box, Grid,Typography,Button, IconButton } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import CachedIcon from '@mui/icons-material/Cached';
import StarOutlineRoundedIcon from '@mui/icons-material/StarOutlineRounded';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import { getDashboardDetails } from "../../../Store/Slicers/UserSlicer/UserSlicer";
import { useDispatch,useSelector } from "react-redux";
export const Home = () => {
  const dispatch = useDispatch();
  const state = useSelector((state)=>state.user);
  const Data =[{
    Heading:'Introduction',
    Title:'Welcome to Jira',
    Text:'Not sure where to start? Check out the Jira 101 guide and Atlassian training course. You can customize this text in the Administration section.',
    CreatedAt:'1 hour ago'
  },
  {
    Heading:'Introduction',
    Title:'Title',
    Text:'Not sure where to start? Check out the Jira 101 guide and Atlassian training course. You can customize this text in the Administration section.',
    CreatedAt:'1 hour ago'
  },
  {
    Heading:'Introduction',
    Title:'Title',
    Text:'Not sure where to start? Check out the Jira 101 guide and Atlassian training course. You can customize this text in the Administration section.',
    CreatedAt:'1 hour ago'
  },
  {
    Heading:'Introduction',
    Title:'Title',
    Text:'Not sure where to start? Check out the Jira 101 guide and Atlassian training course. You can customize this text in the Administration section.',
    CreatedAt:'1 hour ago'
  },
]
console.log(state.dashboardDetails)
useEffect(()=>{
  dispatch(getDashboardDetails())
},[])
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
          {state?.dashboardDetails?.map((Item,index)=><Grid key={index} item xs={6}><Card content={Item}/></Grid>)}
        </Grid>
      </Box>
    </React.Fragment>
  );
};
export default Home;
