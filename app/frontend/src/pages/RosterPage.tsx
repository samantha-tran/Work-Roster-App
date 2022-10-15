import Header from "../components/Header";
import Footer from "../components/Footer";
import Calendar from "../components/Calendar";

const RosterPage = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="grow grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <div className="card w-100 ml-6 bg-base-200 shadow-xl">
            <div className="card-body">
              <Calendar />
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
