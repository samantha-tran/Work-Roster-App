import Header from "../components/Header";
import Footer from "../components/Footer";
import BigCalendar from "../components/BigCalendar";
import { EventType } from "../types/EventType";

const RosterPage = () => {
  const eventsList: EventType[] = [
    { title: "test1", start: new Date(2022, 10, 14), end: new Date(2022, 10, 14) },
    { title: "test2", start: new Date(2022, 3, 7), end: new Date(2022, 3, 10) },
    { title: "test3", start: new Date(2015, 4, 7), end: new Date(2015, 4, 10) },
  ];

  return (
    <div className="flex flex-col">
      <Header />
      <div className="grow grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <div className="card w-100 ml-6 bg-white shadow-xl">
            <div className="card-body">
              <BigCalendar eventsList={eventsList} />
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="card w-100 mr-6 bg-base-200 shadow-xl">
            <div className="card-body"></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RosterPage;
