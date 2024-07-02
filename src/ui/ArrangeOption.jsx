/* eslint-disable react/prop-types */

import { FaCheck } from "react-icons/fa";
import { useAddFilterSort } from "../hooks/useAddFilterSort";

function ArrangeOption({ option, type }) {
  // color for checkbox click bg-cornflower-blue

  // for adding the filterBy and sortBy to the invoiceArrangement table in supabase
  const { mutate, isLoading } = useAddFilterSort();

  console.log(isLoading);
  return (
    <div
      onClick={() => {
        mutate({ type, option });
      }}
      className="flex items-center cursor-pointer group gap-3 "
    >
      <button className="border p-[4px] rounded-[4px] bg-link-water group-hover:border-cornflower-blue ">
        <FaCheck className="text-[9px] opacity-0 text-white" />
      </button>

      <p className="text-ebony-clay text-[12px] font-extrabold capitalize group-hover:text-cornflower-blue group-hover:scale-105 transition-transform">
        {option}
      </p>
    </div>
  );
}

export default ArrangeOption;
