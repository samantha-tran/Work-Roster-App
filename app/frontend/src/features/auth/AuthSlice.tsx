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
      const message: String =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Login user
export const login = createAsyncThunk(
  "auth/login",
  async (user: UserType, thunkAPI) => {
    console.log(user);
  }
);

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
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.user = null;
        state.isError = true;
        state.message = "User already exists";
      });
  },
});

export default authSlice.reducer;
export const { reset } = authSlice.actions;
