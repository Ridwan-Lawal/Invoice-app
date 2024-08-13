/* eslint-disable react/prop-types */

import { FaCheck } from "react-icons/fa";
import { useAddFilterSort } from "../hooks/useAddFilterSort";
import { useDispatch, useSelector } from "react-redux";
import {
  getDashboardReducer,
  getIsDarkMode,
  updateFilterBy,
  updateSortBy,
} from "../features/dashboard/dashboardSlice";
import { useSearchParams } from "react-router-dom";

function ArrangeOption({ type, option }) {
  const dispatch = useDispatch();
  const isDarkMode = useSelector(getIsDarkMode);

  const [searchParams, setSearchParams] = useSearchParams();

  // for reading the filter and the sort from store
  const { filterBy, sortBy } = useSelector(getDashboardReducer);

  // for adding the filterBy and sortBy to the invoiceArrangement table in supabase
  const { mutate } = useAddFilterSort();

  // for selection of options
  let isOptionSelect;

  if (option === filterBy || option === sortBy) isOptionSelect = true;
  else {
    isOptionSelect = false;
  }

  function handleFilterSortUpdate() {
    mutate({ type, option });
    if (type === "sortBy") dispatch(updateSortBy(option));
    if (type === "filterBy") dispatch(updateFilterBy(option));
    searchParams.set(type, option);
    setSearchParams(searchParams);
  }

  return (
    <div
      onClick={() => handleFilterSortUpdate()}
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
