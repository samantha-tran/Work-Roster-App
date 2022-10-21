import Header from "../components/Header";
import Footer from "../components/Footer";
import BigCalendar from "../components/BigCalendar";
import { EventType } from "../types/EventType";
import ShiftDisplay from "../components/ShiftDisplay";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { createEvent, getEvents } from "../features/events/EventSlice";
import { AppDispatch } from "../app/store";

const RosterPage = () => {
  const { user } = useSelector((state: any) => state.auth);
  const { allEvents, userEvents } = useSelector((state: any) => state.event);
  const dispatch = useDispatch<AppDispatch>();

  const [selectedShift, setSelectedShift] = useState({
    start: "",
    end: "",
  });

  useEffect(() => {
    dispatch(getEvents([]));
  }, []);

  const dateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedShift((prevShift) => ({
      ...prevShift,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!selectedShift.start || !selectedShift.end) {
      toast.error("Missing shift values");
    } else if (selectedShift.start > selectedShift.end) {
      toast.error("End time must be after start time!");
    } else {
      dispatch(createEvent(selectedShift));
      toast.success("Event created!");
    }
  };

  const eventsList: EventType[] = [
    {
      id: "1",
      title: "test1",
      start: "2022-10-03T01:00:000Z",
      end: "2022-10-05T03:00:000Z",
    },
  ];

  return (
    <div className="flex flex-col">
      <Header />
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <div className="card w-100 ml-6 bg-white shadow-xl">
            <div className="card-body">
              <BigCalendar eventsList={allEvents} />
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="flex flex-col card w-100 p-6 bg-white shadow-xl">
            <div className="mb-3 mt-1 card h-88 bg-base-200">
              <div className="card-body items-center">
                <form onSubmit={onSubmit} className="form-control w-full max-w-xs">
                  <h1 className="block mt-4 text-sm font-medium text-gray-700">
                    Start
                  </h1>
                  <div className="px-2 py-1 bg-white rounded-md">
                    <input
                      className="outline-transparent	"
                      type="datetime-local"
                      name="start"
                      min="2022-01-01"
                      max="2023-12-31"
                      onChange={dateChange}
                    ></input>
                  </div>
                  <h1 className="block mt-4 text-sm font-medium text-gray-700">
                    End
                  </h1>
                  <div className="px-2 py-1 bg-white rounded-md">
                    <input
                      className="outline-transparent	"
                      type="datetime-local"
                      name="end"
                      min="2022-01-01"
                      max="2023-12-31"
                      onChange={dateChange}
                    ></input>
                  </div>
                  <button type="submit" className="mb-4 mt-6 btn btn-primary">
                    Create
                  </button>
                </form>
              </div>
            </div>
            <div className="card px-8 py-4 pb-0 rounded-b-none h-15 w-100 bg-base-200">
              <h2 className="card-title">My Coming Shifts</h2>
            </div>
            <div className="overflow-auto mb-1 card p-8 pt-0 rounded-t-none h-52 w-100 bg-base-200">
              {eventsList.map((e: any) => {
                return <ShiftDisplay shift={e}></ShiftDisplay>;
              })}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
      <Footer />
    </div>
  );
};

export default RosterPage;
