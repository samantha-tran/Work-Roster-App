import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { UserType } from "../../types/UserType";
import authService from "./AuthService";

const localUser = localStorage.getItem("user");
const user = localUser ? JSON.parse(localUser) : null;

const initialState = {
  user: user ? user : null,
};

// Register a new user
export const register = createAsyncThunk(
  "auth/register",
  async (user: UserType, thunkAPI) => {
    try {
      return await authService.register(user);
    } catch (error: any) {
      console.log(error);
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
export const logout = createAction("auth/logout", () => {
  authService.logout();
  return { payload: null };
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.user = null;
      })
      .addCase(login.rejected, (state) => {
        state.user = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
      });
  },
});

export default authSlice.reducer;
