import { EventType } from "../types/EventType";
import { TrashIcon } from "@heroicons/react/20/solid";
const ShiftDisplay = ({ shift }: { shift: EventType }) => {
  function parseShift() {
    return shift.title;
  }

  return (
    <div className="card card-compact w-88 bg-base-100">
      <div className="card-body p-2">
        <div className="flex flex-row flex-wrap justify-between">
          <div className="badge badge-outline">test date</div>
          <h2 className="card-title text-sm">
            {shift.title}
            {/* {`${shift.start} to ${shift.end}`} */}
          </h2>
          <div className="card-actions justify-end">
            <button className="btn btn-sm btn-circle">
              <TrashIcon className="h-5 w-5"></TrashIcon>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShiftDisplay;
