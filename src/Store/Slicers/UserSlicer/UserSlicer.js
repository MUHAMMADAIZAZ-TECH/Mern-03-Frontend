import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { GetDashboardDetails} from '../../apis';
export const getDashboardDetails = createAsyncThunk('getfollower/getfollowing',async () =>{
    const response = await GetDashboardDetails();
    return response.data;
})
const userSlice = createSlice({
  name: 'user',
  initialState: {
    loading: false,
    dashboardDetails: null,
    error: null,
  },
  reducers: {
    logout: (state) => {
        state.data = null;
        state.error = false;
        state.loading = false;
      },
  },
  extraReducers: (builder) =>{
    builder
    .addCase(getDashboardDetails.pending,state=>{
        state.loading = true;
        state.error = null;
    })
    .addCase(getDashboardDetails.fulfilled,(state,action)=>{
        state.loading = false;
        state.dashboardDetails = action.payload.dashboardDetails;
    })
    .addCase(getDashboardDetails.rejected,(state,action)=>{
        state.loading = false;
        state.error = action.error.message;
    })
   
  },
});
export const { logout } = userSlice.actions;
export default userSlice.reducer;
