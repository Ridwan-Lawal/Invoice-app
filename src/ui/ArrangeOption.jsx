/* eslint-disable react/prop-types */
import { FaCheck } from "react-icons/fa";

function ArrangeOption({ option }) {
  // color for checkbox click bg-cornflower-blue
  return (
    <div className="flex items-center cursor-pointer  gap-3 ">
      <button className="border p-[4px] rounded-[4px] bg-link-water ">
        <FaCheck className="text-[9px] opacity-0 text-white" />
      </button>

      <p className="text-ebony-clay text-[11px] font-extrabold capitalize">
        {option}
      </p>
    </div>
  );
}

export default ArrangeOption;
