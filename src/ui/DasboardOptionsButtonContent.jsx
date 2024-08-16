/* eslint-disable react/prop-types */
import { IoIosArrowDown } from "react-icons/io";
import { getIsDarkMode } from "../features/dashboard/dashboardSlice";
import { useSelector } from "react-redux";

function DasboardOptionsButtonContent({ optionType, optionIsOpen }) {
  const isDarkMode = useSelector(getIsDarkMode);
  return (
    <p className=" items-center gap-3 hidden md:flex">
      <span
        className={` text-[15px] font-spartan font-semibold ${
          isDarkMode ? "text-white" : "text-cinder"
        } `}
      >
        {optionType === "filter" ? "Filter by status" : "Sort by"}
      </span>
      <IoIosArrowDown
        className={`text-cornflower-blue ${
          optionIsOpen ? "rotate-180" : "rotate-0"
        } transition-transform duration-300`}
      />
    </p>
  );
}

export default DasboardOptionsButtonContent;
