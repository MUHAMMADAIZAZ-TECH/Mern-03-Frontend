import React, { useEffect } from "react";
import { Card } from "../../UI-Components/Index";
import {
  Edit,
  Cached,
  StarOutlineRounded,
  MoreHorizRounded,
} from "@mui/icons-material/";
import { getDashboardDetails } from "../../../Store/Slicers/UserSlicer/UserSlicer";
import { useDispatch, useSelector } from "react-redux";
import {
  CssBaseline,
  Box,
  Grid,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
export const Home = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(getDashboardDetails());
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <Box sx={{ height: "80vh" }}>
        <Grid
          container
          rowSpacing={2}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          columns={{ xs: 6, md: 12 }}
        >
          <Grid item xs={12}>
            <div
              style={{
                padding: 20,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h5">Default dashboard</Typography>
              <div>
                <IconButton variant="text">
                  <StarOutlineRounded />
                </IconButton>
                <Button variant="text" endIcon={<Cached />}>
                  {" "}
                  Refresh
                </Button>
                <Button variant="text" endIcon={<Edit />}>
                  {" "}
                  Edit
                </Button>
                <IconButton variant="text">
                  <MoreHorizRounded />
                </IconButton>
              </div>
            </div>
          </Grid>
        </Grid>
        <Grid container rowSpacing={2} columns={{ xs: 6, md: 12 }}>
          {state?.dashboardDetails?.map((Item, index) => (
            <Grid key={index} item xs={6}>
              <Card content={Item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </React.Fragment>
  );
};
export default Home;
