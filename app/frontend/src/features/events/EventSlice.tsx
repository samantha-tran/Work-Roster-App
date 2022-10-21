import { createSlice, createAsyncThunk, combineReducers } from "@reduxjs/toolkit";
import eventService from "./EventService";
import { DecomposedEventType, EventType } from "../../types/EventType";

const initialState = {
  allEvents: [],
  userEvents: [],
  event: {},
};

export const createEvent = createAsyncThunk(
  "events/create",
  async (
    eventData: DecomposedEventType,
    { rejectWithValue, getState, dispatch }
  ) => {
    try {
      const token = getState().auth.user.token;
      const { startTime, endTime, date } = eventData;

      const event = {
        title: getState().auth.user,
        startTime,
        endTime,
        date,
      };

      return await eventService.createEvent(event, token);
    } catch (error) {
      return rejectWithValue("Error creating ticket");
    }
  }
);

export const getEvents = createAsyncThunk(
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
export const getUserEvents = createAsyncThunk(
  "events/user",
  async (eventData, thunkAPI) => {}
);

// Get user ticket
export const getEvent = createAsyncThunk(
  "events/get",
  async (eventId, thunkAPI) => {}
);

// Close ticket
export const removeEvent = createAsyncThunk(
  "events/remove",
  async (ticketId, thunkAPI) => {}
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
    builder.addCase(getEvents.fulfilled, (state, action) => {
      state.allEvents = action.payload;
    });
  },
});

export default eventSlice.reducer;
