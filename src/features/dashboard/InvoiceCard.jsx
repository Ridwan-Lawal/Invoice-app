/* eslint-disable react/prop-types */
import { IoIosArrowForward } from "react-icons/io";
import Status from "../../ui/Status";
import { formatCurrency, formatDate } from "../../utils/helper";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getIsDarkMode } from "./dashboardSlice";

function InvoiceCard({ invoice }) {
  const navigate = useNavigate();
  const isDarkMode = useSelector(getIsDarkMode);

  return (
    <div
      onClick={() => navigate(`invoice/${invoice?.id}`)}
      className={` ${
        isDarkMode ? "bg-[#1c243c] shadow-gray-950" : "bg-white shadow-gray-100"
      } shadow-sm   border border-transparent rounded-lg hover:border-mirage  hover:scale-[1.01] cursor-pointer  transition-all duration-200 px-5 pb-4 pt-6  `}
    >
      {/* id date, name  price, status*/}
      <div className=" text-black font-spartan flex flex-col gap-1    md:flex-row md:justify-between md:max-w-[700px] mx-auto">
        {/* id and date and name */}
        <div className="flex justify-between  border md:items-center md:w-[53%]">
          {/* id and date */}
          <section className="flex flex-col gap-y-3 md:flex-row md:items-center border md:w-[60%] justify-between md:gap-3">
            <p
              className={`font-semibold ${
                isDarkMode ? "text-white" : "text-cinder"
              }`}
            >
              <span
                className={`${
                  isDarkMode ? "text-royal-blue" : "text-gray-400"
                } `}
              >
                #
              </span>
              {invoice?.id}
            </p>
            <p className="text-gray-400 text-[13px] font-medium">
              Due{" "}
              {invoice?.paymentDue ? (
                formatDate(invoice?.paymentDue)
              ) : (
                <i>hasn&apos;t been set yet</i>
              )}
            </p>
          </section>
          {/* name */}
          <p className="text-gray-400 text-[13px] font-medium">
            {invoice?.clientName}
          </p>
        </div>

        {/* price and status */}
        <section className="flex items-center justify-between gap-4">
          <p
            className={`${
              isDarkMode ? "text-white" : "text-cinder"
            } font-semibold text-[15px]`}
          >
            {formatCurrency(invoice?.total)}
          </p>
          <Status status={invoice?.status} />
          <IoIosArrowForward className="text-cornflower-blue hidden md:block" />
        </section>
      </div>
    </div>
  );
}

export default InvoiceCard;
