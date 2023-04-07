import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { GetDashboardDetails } from "../../apis";
export const getDashboardDetails = createAsyncThunk(
  "get/dashboardcontent",
  async () => {
    const response = await GetDashboardDetails();
    return response.data;
  }
);
const initialState = {
  loading: false,
  dashboardDetails: null,
  error: null,
}
const userSlice = createSlice({
  name: "user",
  initialState:initialState ,
  reducers: {
    clearallstates: (state) => state = initialState
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDashboardDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getDashboardDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.dashboardDetails = action.payload.dashboardDetails;
      })
      .addCase(getDashboardDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export const { clearallstates } = userSlice.actions;
export default userSlice.reducer;
