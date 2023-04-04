import React from "react";
import { Userbox } from "../../UI-Components/Index";
import { CssBaseline, Box, Grid } from "@mui/material";
 const ListContainer = ({data,LoggedInUser}) => {
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
              {data?.map((user, index) => (
                <Userbox user={user} key={index} LoggedInUser={LoggedInUser} />
              ))}
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
};
export default ListContainer;
