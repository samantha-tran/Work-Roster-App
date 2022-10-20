import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { UserType } from "../../types/UserType";
import authService from "./AuthService";

const initialState = {
  user: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Register a new user
export const register = createAsyncThunk(
  "auth/register",
  async (user: UserType, thunkAPI) => {
    try {
      return await authService.register(user);
    } catch (error: any) {
      console.log("rejected");
      return thunkAPI.rejectWithValue(
        "Error registering. Account with email already exists"
      );
    }
  }
);

// Login user
export const login = createAsyncThunk(
  "auth/login",
  async (user: UserType, thunkAPI) => {
    try {
      return await authService.login(user);
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        "Error logging in. Double check your details."
      );
    }
  }
);

// Lougout user
export const logout = createAsyncThunk("auth/logout", async (thunkAPI) => {
  console.log("signed out");
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.user = null;
        state.isError = true;
      })
      .addCase(login.rejected, (state) => {
        state.user = null;
        state.isError = true;
        state.isLoading = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
      });
  },
});

export default authSlice.reducer;
export const { reset } = authSlice.actions;
