import Header from "../components/Header";
import Footer from "../components/Footer";
import BigCalendar from "../components/BigCalendar";
import { EventType } from "../types/EventType";
import SelectInput from "../components/SelectInput";
import DateInput from "../components/DateInput";
import ShiftDisplay from "../components/ShiftDisplay";

const RosterPage = () => {
  const eventsList: EventType[] = [
    { title: "test1", start: new Date(2022, 10, 14), end: new Date(2022, 10, 14) },
    { title: "test2", start: new Date(2022, 3, 7), end: new Date(2022, 3, 7) },
    { title: "test3", start: new Date(2015, 4, 7), end: new Date(2015, 4, 10) },
    { title: "test3", start: new Date(2015, 4, 7), end: new Date(2015, 4, 10) },
    { title: "test3", start: new Date(2015, 4, 7), end: new Date(2015, 4, 10) },
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
              <div className="card-body">
                <SelectInput times={times} label={"Start Time"}></SelectInput>
                <SelectInput times={times} label={"End Time"}></SelectInput>
                <DateInput></DateInput>
                <button className="my-4 btn btn-primary">Create</button>
              </div>
            </div>
            <div className="card px-8 py-4 pb-0 rounded-b-none h-15 w-100 bg-base-200">
              <h2 className="card-title">My Coming Shifts</h2>
            </div>
            <div className="overflow-auto mb-1 card p-8 pt-0 rounded-t-none h-52 w-100 bg-base-200">
              {eventsList.map((e) => {
                return <ShiftDisplay shift={e}></ShiftDisplay>;
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
