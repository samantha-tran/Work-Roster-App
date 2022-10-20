import {
  configureStore,
  Dispatch,
  AsyncThunkPayloadCreator,
  AsyncThunk,
} from "@reduxjs/toolkit";
import AuthReducer from "../features/auth/AuthSlice";
import EventReducer from "../features/events/EventSlice";

const store = configureStore({
  reducer: {
    auth: AuthReducer,
    event: EventReducer,
  },
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export default store;

declare module "@reduxjs/toolkit" {
  type AsyncThunkConfig = {
    state?: unknown;
    dispatch?: Dispatch;
    extra?: unknown;
    rejectValue?: unknown;
    serializedErrorType?: unknown;
  };

  function createAsyncThunk<
    Returned,
    ThunkArg,
    ThunkApiConfig extends AsyncThunkConfig = {
      state: RootState; // this line makes a difference
    }
  >(
    typePrefix: string,
    payloadCreator: AsyncThunkPayloadCreator<Returned, ThunkArg, ThunkApiConfig>,
    options?: any
  ): AsyncThunk<Returned, ThunkArg, ThunkApiConfig>;
}
