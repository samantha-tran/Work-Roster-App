import axios from "axios";
import { DecomposedEventType, EventType } from "../../types/EventType";

const API_URL = "/api/events/";

// create a new event
const createEvent = async (eventData: DecomposedEventType, token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URL + "create", eventData, config);

  return response.data;
};

const getAllEvents = async () => {
  const response = await axios.get(API_URL + "all");
  return response.data;
};

const eventService = {
  createEvent,
  getAllEvents,
};

export default eventService;
