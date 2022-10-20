import Header from "../components/Header";
import Footer from "../components/Footer";
import BigCalendar from "../components/BigCalendar";
import { EventType } from "../types/EventType";
import SelectInput from "../components/SelectInput";
import DateInput from "../components/DateInput";
import ShiftDisplay from "../components/ShiftDisplay";
import { useEffect, useState } from "react";
import { Listbox } from "@headlessui/react";

const RosterPage = () => {
  const [validTimes, setValidTimes] = useState<{ start: string[]; end: string[] }>({
    start: [],
    end: [],
  });

  const [startTime, setStartTime] = useState(validTimes.start[0]);

  useEffect(() => {
    let times: string[] = [];
    for (let hour = 0; hour < 24; hour++) {
      times = [
        ...times,
        "" + hour + ":00",
        "" + hour + ":15",
        "" + hour + ":30",
        "" + hour + ":45",
      ];
    }

    setValidTimes({ start: times, end: times });
  }, []);

  const eventsList: EventType[] = [
    {
      id: 1,
      title: "test1",
      start: new Date(2022, 10, 14),
      end: new Date(2022, 10, 14),
    },
    {
      id: 2,
      title: "test2",
      start: new Date(2022, 3, 7),
      end: new Date(2022, 3, 7),
    },
  ];

  // assume we can only edit events in the future

  const times: String[] = ["5am", "6am", "7am"];

  return (
    <div className="flex flex-col">
      <Header />
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <div className="card w-100 ml-6 bg-white shadow-xl">
            <div className="card-body">
              <BigCalendar eventsList={eventsList} />
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="flex flex-col card w-100 p-6 bg-white shadow-xl">
            <div className="mb-3 mt-1 card h-88 bg-base-200">
              <div className="card-body items-center">
                <div className="form-control w-full max-w-xs">
                  <h1 className="block text-sm font-medium text-gray-700">
                    Start Time
                  </h1>
                  <div className="bg-white w-80 rounded-md">
                    <select className="select bg-white focus:outline-none select-sm w-full max-w-xs">
                      {validTimes.start.map((time, index) => {
                        return <option>{time}</option>;
                      })}
                    </select>
                  </div>
                  <h1 className="block mt-4 text-sm font-medium text-gray-700">
                    End Time
                  </h1>
                  <div className="bg-white w-80 rounded-md">
                    <select className="select bg-white focus:outline-none select-sm w-full max-w-xs">
                      {validTimes.end.map((time, index) => {
                        return <option>{time}</option>;
                      })}
                    </select>
                  </div>

                  <h1 className="block mt-4 text-sm font-medium text-gray-700">
                    Date
                  </h1>
                  <div className="px-2 py-1 bg-white rounded-md">
                    <input
                      className="outline-transparent	"
                      type="date"
                      id="start"
                      name="trip-start"
                      value="2018-07-22"
                      min="2018-01-01"
                      max="2018-12-31"
                    ></input>
                  </div>
                  <button className="mb-4 mt-6 btn btn-primary">Create</button>
                </div>
              </div>
            </div>
            <div className="card px-8 py-4 pb-0 rounded-b-none h-15 w-100 bg-base-200">
              <h2 className="card-title">My Coming Shifts</h2>
            </div>
            <div className="overflow-auto mb-1 card p-8 pt-0 rounded-t-none h-52 w-100 bg-base-200">
              {eventsList.map((e) => {
                return <ShiftDisplay key={e.id} shift={e}></ShiftDisplay>;
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RosterPage;
