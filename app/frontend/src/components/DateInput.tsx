const DateInput = () => {
  return (
    <div>
      <h1 className="block text-sm font-medium text-gray-700">Date</h1>
      <div className="px-2 py-1 bg-white rounded-md	mt-1">
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
    </div>
  );
};

export default DateInput;
