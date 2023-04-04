import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { GetFollowersAndFollowing,Follow,UnFollow,SearchHandler } from '../../apis';
export const getFollowersAndFollowing = createAsyncThunk('getfollower/getfollowing',async () =>{
    const response = await GetFollowersAndFollowing();
    return response.data;
})
export const follow = createAsyncThunk('follow',async (userId) =>{
    const response = await Follow(userId);
    return response.data;
})

export const unfollow = createAsyncThunk('unfollow',async (userId) =>{
    const response = await UnFollow(userId);
    return response.data;
})
export const searchHandler = createAsyncThunk('search',async (searchQuery)=>{
    const response = await SearchHandler(searchQuery);
    return response.data;
})
const userSlice = createSlice({
  name: 'user',
  initialState: {
    loading: false,
    loading2: false,
    data: null,
    error: null,
    searchedList:null
  },
  reducers: {
    logout: (state) => {
        state.data = null;
        state.error = false;
        state.loading = false;
        state.searchedList = null;
      },
  },
  extraReducers: (builder) =>{
    builder
    .addCase(getFollowersAndFollowing.pending,state=>{
        state.loading = true;
        state.error = null;
    })
    .addCase(getFollowersAndFollowing.fulfilled,(state,action)=>{
        state.loading = false;
        state.data = action.payload;
    })
    .addCase(getFollowersAndFollowing.rejected,(state,action)=>{
        state.loading = false;
        state.error = action.error.message;
    })
    builder
    .addCase(follow.pending,state=>{
        state.loading2 = true;
        state.error = null;
    })
    .addCase(follow.fulfilled,(state,action)=>{
        state.loading2 = false;
        state.data = action.payload;
    })
    .addCase(follow.rejected,(state,action)=>{
        state.loading2 = false;
        state.error = action.error.message;
    })
    builder
    .addCase(unfollow.pending,state=>{
        state.loading2 = true;
        state.error = null;
    })
    .addCase(unfollow.fulfilled,(state,action)=>{
        state.loading2 = false;
        state.data = action.payload;
    })
    .addCase(unfollow.rejected,(state,action)=>{
        state.loading2 = false;
        state.error = action.error.message;
    })
    builder
    .addCase(searchHandler.pending,state=>{
        state.loading = true;
        state.error = null;
    })
    .addCase(searchHandler.fulfilled,(state,action)=>{
        state.loading = false;
        state.searchedList = action.payload;
    })
    .addCase(searchHandler.rejected,(state,action)=>{
        state.loading = false;
        state.error = action.error.message;
    })
  },
});
export const { logout } = userSlice.actions;
export default userSlice.reducer;
