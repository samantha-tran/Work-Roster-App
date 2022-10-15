// import "react-big-calendar/lib/css/react-big-calendar.css";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { EventType } from "../types/EventType";
import "react-big-calendar/lib/css/react-big-calendar.css";

const BigCalendar = ({ eventsList }: { eventsList: EventType[] }) => {
  const mLocalizer = momentLocalizer(moment);

  return (
    <div className="h-148">
      <Calendar
        defaultView="week"
        localizer={mLocalizer}
        events={eventsList}
        startAccessor="start"
        endAccessor="end"
      />
    </div>
  );
};
export default BigCalendar;
