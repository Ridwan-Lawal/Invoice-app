/* eslint-disable react/prop-types */

import { FaCheck } from "react-icons/fa";
import { useAddFilterSort } from "../hooks/useAddFilterSort";

import { useReadFilterSortData } from "../hooks/useReadFilterSortData";
import { useSelector } from "react-redux";
import { getIsDarkMode } from "../features/dashboard/dashboardSlice";

function ArrangeOption({ option, type }) {
  const isDarkMode = useSelector(getIsDarkMode);
  // Add the blue tick to the filter and sort
  // try to reverse the invoices data so that if you add any data it will to the top rather that on the button
  // color for checkbox click bg-cornflower-blue

  // for reading the filter and the sort value
  const filterSortData = useReadFilterSortData();
  console.log(filterSortData);

  // getting the filterOptions and the sortOptions from the dashboard reducer

  // for adding the filterBy and sortBy to the invoiceArrangement table in supabase
  const { mutate } = useAddFilterSort();

  let isOptionSelect;

  if (
    option === filterSortData?.at(0)?.filterBy ||
    option === filterSortData?.at(0)?.sortBy
  )
    isOptionSelect = true;
  else {
    isOptionSelect = false;
  }

  return (
    <div
      onClick={() => {
        mutate({ type, option });
      }}
      className="flex items-center cursor-pointer group gap-3 "
    >
      <button
        className={` p-[4px] rounded-[4px]  group-hover:border-cornflower-blue ${
          isOptionSelect
            ? "bg-cornflower-blue"
            : isDarkMode
            ? "bg-mirage"
            : "bg-link-water"
        } `}
      >
        <FaCheck
          className={`text-[9px] ${
            isOptionSelect ? "opacity-100" : "opacity-0"
          } text-white`}
        />
      </button>

      <p
        className={`${
          isDarkMode ? "text-white" : "text-ebony-clay"
        }  text-[12px] font-extrabold capitalize group-hover:text-cornflower-blue group-hover:scale-105 transition-transform`}
      >
        {option}
      </p>
    </div>
  );
}

export default ArrangeOption;
