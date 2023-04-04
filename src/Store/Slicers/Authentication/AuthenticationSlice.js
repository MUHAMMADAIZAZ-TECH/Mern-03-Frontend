import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { SignIn,SignUp } from '../../apis';

const initialState = {
  message: null,
  error:null,
  loading: false,
};
export const signin = createAsyncThunk('signin',async ({state}) =>{
  const response = await SignIn(state);
  if(response.accessToken){
    window.location = '/Dashboard';
  return response;
  }
  else{
    return response;
  }
})
export const signup = createAsyncThunk('signup',async ({state}) =>{
  const response = await SignUp(state);
  return response;
})
export const authSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    clearMessage: (state) => {
      state.message = null;
      state.error = null;
      state.loading = false;
    }
  },
  extraReducers: (builder) =>{
    builder
    .addCase(signin.pending,state=>{
        state.loading = true;
        state.error = null;
    })
    .addCase(signin.fulfilled,(state,action)=>{
        state.loading = false;
        state.message = action.payload.message;
    })
    .addCase(signin.rejected,(state,action)=>{
        state.loading = false;
        state.error = action.error.message;
    })
    builder
    .addCase(signup.pending,state=>{
        state.loading = true;
        state.error = null;
    })
    .addCase(signup.fulfilled,(state,action)=>{
        state.loading = false;
        state.message = action.payload.message;
    })
    .addCase(signup.rejected,(state,action)=>{
        state.loading = false;
        state.error = action.error;
    })
  },
});

export const authstate = (state) => state.auth;
export const { clearMessage } = authSlice.actions;
export default authSlice.reducer;
