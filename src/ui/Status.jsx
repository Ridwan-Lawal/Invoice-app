/* eslint-disable react/prop-types */
import { GoDotFill } from "react-icons/go";
import { useSelector } from "react-redux";
import { getIsDarkMode } from "../features/dashboard/dashboardSlice";

function Status({ status = "pending" }) {
  const isDarkMode = useSelector(getIsDarkMode);
  let color;
  if (status === "pending") color = "bg-orange-500 text-orange-500";
  if (status === "paid")
    color = ` ${
      isDarkMode
        ? "bg-green-400 text-green-400"
        : "bg-ocean-green text-ocean-green"
    }`;
  if (status === "draft")
    color = ` ${
      isDarkMode ? "bg-gray-300 text-gray-300" : "bg-ebony-clay text-ebony-clay"
    }`;

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
