import axios from "axios";
import { EventType } from "../../types/EventType";

const API_URL = "/api/events/";

// create a new event
const createEvent = async (eventData: EventType, token: string) => {
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
  let result: any[] = [];
  response.data.map((e: any) => {
    result.push({
      id: e._id,
      title: e.user,
      allDay: false,
      start: new Date(e.end),
      end: new Date(e.start),
    });
  });
  return result;
};

// Remove Event
const removeEvent = async (eventID: string, token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.put(API_URL + eventID, config);

  return response.data;
};

// Get User Events
const getUserEvents = async (token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL + "user", config);
  return response.data;
};

const eventService = {
  createEvent,
  getAllEvents,
  removeEvent,
  getUserEvents,
};

export default eventService;
