/* eslint-disable react/prop-types */
import { IoIosArrowDown } from "react-icons/io";

function DasboardOptionsButtonContent({ optionType, optionIsOpen }) {
  return (
    <p className=" items-center gap-3 hidden md:flex">
      <span className="text-cinder text-[15px] font-spartan font-semibold">
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
