import { createSlice, createAsyncThunk, combineReducers } from "@reduxjs/toolkit";
import eventService from "./EventService";
import { EventType } from "../../types/EventType";

const initialState = {
  allEvents: [],
  userEvents: [],
  event: {},
};

export const createEvent = createAsyncThunk(
  "events/create",
  async (eventData: EventType, { rejectWithValue, getState, dispatch }) => {
    try {
      const token = getState().auth.user.token;
      const { start, end } = eventData;

      const event = {
        title: getState().auth.user.name,
        start,
        end,
      };

      return await eventService.createEvent(event, token);
    } catch (error) {
      return rejectWithValue("Error creating ticket");
    }
  }
);

export const getEvents: any = createAsyncThunk(
  "events/all",
  async (_, { rejectWithValue }) => {
    try {
      return await eventService.getAllEvents();
    } catch (error) {
      console.log(error);
      return rejectWithValue("Error fetching events");
    }
  }
);

// Get user tickets
export const getUserEvents: any = createAsyncThunk(
  "events/user",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;

      return await eventService.getUserEvents(token);
    } catch (error) {
      return thunkAPI.rejectWithValue("Error occurred fetching user events");
    }
  }
);

// Close ticket
export const removeEvent = createAsyncThunk(
  "events/delete",
  async (eventID: string, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await eventService.removeEvent(eventID, token);
    } catch (error) {
      return thunkAPI.rejectWithValue("Error occurred removing event");
    }
  }
);

// NOTE: removed loading, isSuccess state as it can be infered from presence or
// absence of tickets for simpler state management with no need for a reset
// function

export const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getEvents.fulfilled, (state, action) => {
        state.allEvents = action.payload;
      })
      .addCase(getUserEvents.fulfilled, (state, action) => {
        state.userEvents = action.payload;
      });
  },
});

export default eventSlice.reducer;
