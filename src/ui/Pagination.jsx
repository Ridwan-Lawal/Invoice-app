/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { getIsDarkMode } from "../features/dashboard/dashboardSlice";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useSearchParams } from "react-router-dom";
import { DATA_PER_PAGE } from "./dataPerPage";
import { useReadInvoices } from "../hooks/useReadInvoices";

function Pagination() {
  const isDarkmode = useSelector(getIsDarkMode);
  const [searchParams, setSearchParams] = useSearchParams();
  const { count } = useReadInvoices();

  console.log(count);

  const pageNumbers = Math.ceil(count / DATA_PER_PAGE);

  console.log(pageNumbers);

  // getting the page Number
  const currentPage = +searchParams.get("page") || 1;
  console.log(currentPage);

  function handlePreviousPage() {
    const prevPage = currentPage === 1 ? currentPage : currentPage - 1;
    console.log(prevPage);
    searchParams.set("page", prevPage);
    setSearchParams(searchParams);
  }

  function handleNextPage() {
    console.log(currentPage);
    const nextPage =
      currentPage === pageNumbers ? currentPage : currentPage + 1;

    console.log(nextPage);
    searchParams.set("page", nextPage);
    setSearchParams(searchParams);
  }

  if (count <= 2) return;
  return (
    <div
      className={`${
        isDarkmode ? "bg-[#1c243c] shadow-gray-900" : "bg-white shadow-gray-200"
      } mt-6 py-3 px-4 rounded-md flex justify-between`}
    >
      <p className="pagination text-gray-200 text-[13px]">
        <span>{(currentPage - 1) * DATA_PER_PAGE + 1}</span> to{" "}
        <span>
          {currentPage === pageNumbers ? count : DATA_PER_PAGE * currentPage}
        </span>{" "}
        of <span>{count}</span> results
      </p>

      <div
        className={`${
          isDarkmode ? "text-gray-100" : "text-cinder"
        } text-[13px] sm:text-sm flex gap-5 sm:gap-8`}
      >
        <button onClick={handlePreviousPage} className="page-control-btn">
          <IoIosArrowBack className="text-[16px] sm:text-[17px] " /> Previous
        </button>

        <button onClick={handleNextPage} className="page-control-btn">
          Next <IoIosArrowForward className="text-[16px] sm:text-[17px] " />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
