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
  let result: any[] = [];
  response.data.map((e: any) => {
    // extract year, month, day and hour, minute, second

    const dtS = String(e.startTime).split("T");
    const ymsS = dtS[0].split("-");
    const hmsS = dtS[1].split(":");

    const dtE = String(e.endTime).split("T");
    const ymsE = dtE[0].split("-");
    const hmsE = dtE[1].split(":");

    result.push({
      id: e._id,
      title: e.user,
      allDay: false,
      start: new Date(
        Number(ymsS[0]),
        Number(ymsS[1]),
        Number(ymsS[2]),
        Number(hmsS[0]),
        Number(hmsS[1]),
        Number(hmsS[2])
      ),
      end: new Date(
        Number(ymsE[0]),
        Number(ymsE[1]),
        Number(ymsE[2]),
        Number(hmsE[0]),
        Number(hmsE[1]),
        Number(hmsE[2])
      ),
    });
  });
  return result;
};

const eventService = {
  createEvent,
  getAllEvents,
};

export default eventService;
