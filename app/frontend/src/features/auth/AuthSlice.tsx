import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { UserType } from "../../types/UserType";

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
    console.log(user);
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
  reducers: {},
  extraReducers: (builder) => {},
});

export default authSlice.reducer;
