import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  SignIn,
  SignUp,
  verifyEmailUrl,
  resetPassword,
  verifyResetPasswordurl,
  UpdateNewPassword,
} from "../../apis";

const initialState = {
  message: null,
  error: null,
  loading: false,
  User: {},
  isAuthenticated: false,
  urlValid: false,
};
export const signin = createAsyncThunk("signin", async ({ state }) => {
  const response = await SignIn(state);
  return response;
});
export const signup = createAsyncThunk("signup", async ({ state }) => {
  const response = await SignUp(state);
  return response;
});
export const verifyemailurl = createAsyncThunk(
  "verifyemailurl",
  async (params) => {
    const response = await verifyEmailUrl(params);
    return response;
  }
);
export const resetpassword = createAsyncThunk(
  "resetpassword",
  async (state) => {
    const response = await resetPassword(state);
    return response;
  }
);
export const verifyresetpasswordurl = createAsyncThunk(
  "verifyresetpasswordurl",
  async (params) => {
    const response = await verifyResetPasswordurl(params);
    return response;
  }
);
export const updatenewpassword = createAsyncThunk(
  "updatenewpassword",
  async (params) => {
    const response = await UpdateNewPassword(params);
    return response;
  }
);
export const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    clearMessage: (state) => (state = initialState),
    authenticateUser: (state, action) => {
      state.error = null;
      state.User = action.payload.user;
      state.isAuthenticated = action.payload.success;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signin.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
      })
      .addCase(signin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
    builder
      .addCase(signup.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
      })
      .addCase(signup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
    builder
      .addCase(verifyemailurl.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.urlValid = false;
      })
      .addCase(verifyemailurl.fulfilled, (state, action) => {
        state.loading = false;
        state.urlValid = action.payload.urlValid;
      })
      .addCase(verifyemailurl.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
    builder
      .addCase(resetpassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(resetpassword.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
      })
      .addCase(resetpassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
    builder
      .addCase(verifyresetpasswordurl.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.urlValid = false;
      })
      .addCase(verifyresetpasswordurl.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
        state.urlValid = action.payload.urlValid;
      })
      .addCase(verifyresetpasswordurl.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
    builder
      .addCase(updatenewpassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updatenewpassword.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
      })
      .addCase(updatenewpassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  },
});

export const authstate = (state) => state.auth;
export const { clearMessage, authenticateUser } = authSlice.actions;
export default authSlice.reducer;
