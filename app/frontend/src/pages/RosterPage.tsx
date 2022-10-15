import Header from "../components/Header";
import Footer from "../components/Footer";
import BigCalendar from "../components/BigCalendar";
import { EventType } from "../types/EventType";
import SelectInput from "../components/SelectInput";
import DateInput from "../components/DateInput";

const RosterPage = () => {
  const eventsList: EventType[] = [
    { title: "test1", start: new Date(2022, 10, 14), end: new Date(2022, 10, 14) },
    { title: "test2", start: new Date(2022, 3, 7), end: new Date(2022, 3, 10) },
    { title: "test3", start: new Date(2015, 4, 7), end: new Date(2015, 4, 10) },
  ];

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
            <div className="card h-96 bg-base-200 shadow-xl">
              <div className="card-body">
                <SelectInput times={times} label={"Start Time"}></SelectInput>
                <SelectInput times={times} label={"End Time"}></SelectInput>
                <DateInput></DateInput>
              </div>
            </div>
            <div className="card w-100 bg-base-200 shadow-xl">
              <div className="card-body">test</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RosterPage;
