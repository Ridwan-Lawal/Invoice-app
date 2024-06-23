/* eslint-disable react/prop-types */
import { GoDotFill } from "react-icons/go";

function Status({ status = "pending" }) {
  let color;
  if (status === "pending") color = "bg-orange-500 text-orange-500";
  if (status === "paid") color = "bg-ocean-green text-ocean-green";
  if (status === "draft") color = "bg-ebony-clay text-ebony-clay";

  return (
    <div
      className={`flex items-center gap-2 text-sm font-bold font-spartan  w-fit px-4 rounded-md py-2 ${color} bg-opacity-5 capitalize`}
    >
      <GoDotFill className="text-[17px]" />
      <span>{status}</span>
    </div>
  );
}

export default Status;
