/* eslint-disable react/prop-types */

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { FaCalendar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { IoIosArrowDown } from "react-icons/io";

import { formatInvoiceDate } from "../../utils/helper";
import { useInvoiceContext } from "../../contexts/FormContext";
import {
  calendarBluring,
  calendarOpening,
  getInvoiceFormReducer,
  paymentTermsModalBluring,
  paymentTermsModalFocus,
  paymentTermsModalOpening,
  paymentTermsOption,
} from "./invoiceFormSlice";
import FormInput from "./FormInput";
import { getIsDarkMode } from "../dashboard/dashboardSlice";

function InvoiceDatePaymentTerms({ value, onChange }) {
  const isDarkMode = useSelector(getIsDarkMode);
  const {
    register,
    formState: { errors },
  } = useInvoiceContext();
  const {
    paymentTerms,
    isCalendarOpen,
    isPaymentTermsFocus,
    isCalendarFocus,
    isPaymentTermsOpen,
  } = useSelector(getInvoiceFormReducer);
  const dispatch = useDispatch();

  // for the spelling of the days on payment terms
  const daysSpelling = paymentTerms > 1 ? "Days" : "Day";

  // payment terms and calender focus style
  const style = {
    border: "1px solid #775ef7",
  };

  return (
    <section className="mt-12">
      <div className="mt-5 grid grid-cols-2 gap-6">
        {/*  invoice date */}

        <div className="flex flex-col gap-4">
          <FormInput label="Invoice Date">
            <div
              style={
                isCalendarFocus
                  ? style
                  : { border: isDarkMode ? "" : "1px solid lightgray" }
              }
              onClick={() => dispatch(calendarOpening())}
              className={`flex items-center invoice-form-input relative `}
            >
              <input
                onFocus={() => dispatch(calendarOpening)}
                onBlur={() => dispatch(calendarBluring)}
                onClick={() => dispatch(calendarOpening)}
                type="text"
                name="invoiceCreate"
                id="invoice-date"
                value={formatInvoiceDate(value)}
                className="cursor-pointer focus:outline-none bg-inherit text-inherit"
                {...register("createdAt", {
                  required: "Can't be empty",
                })}
              />
              <FaCalendar className="absolute right-3 text-gray-400" />
            </div>
          </FormInput>
          {isCalendarOpen && (
            <div className="relative">
              <div className="absolute min-h-[100%] ">
                <Calendar
                  onChange={onChange}
                  value={value}
                  className={`${isDarkMode && "react-calendar-dark"} shadow-xl`}
                />
              </div>
            </div>
          )}
        </div>

        {/* payment terms */}

        <div className="flex flex-col  gap-4 ">
          <FormInput label="Payment Terms">
            <div
              style={
                isPaymentTermsFocus
                  ? style
                  : { border: isDarkMode ? "" : "1px solid lightgray" }
              }
              className="rounded-md flex  items-center py-3 overflow-hidden cursor-pointer"
              onClick={() => dispatch(paymentTermsModalOpening())}
            >
              <input
                type="text"
                onFocus={() => dispatch(paymentTermsModalFocus)}
                onBlur={() => dispatch(paymentTermsModalBluring)}
                name="payment-terms"
                value={`Next ${paymentTerms} ${daysSpelling}`}
                id="payment-terms"
                className="invoice-form-input2 w-[80%] bg-inherit  cursor-pointer "
                {...register("paymentDue", {
                  required: "Can't be empty",
                })}
              />

              <IoIosArrowDown
                className={`text-cornflower-blue text-lg w-[20%] ${
                  isPaymentTermsOpen ? "rotate-180" : "rotate-0"
                } transition-transform duration-400 `}
              />
            </div>
          </FormInput>

          {isPaymentTermsOpen && (
            <div className="relative ">
              <ul
                className={` rounded-md overflow-hidden shadow-2xl absolute w-full ${
                  isDarkMode ? "bg-[#1c243c] " : "bg-white"
                } `}
              >
                {[30, 14, 7, 1].map((option, id) => (
                  <li
                    className={`${
                      paymentTerms === option
                        ? "text-cornflower-blue"
                        : isDarkMode
                        ? "text-white"
                        : "text-cinder"
                    } ${
                      isDarkMode && "border-gray-900"
                    } py-4 border-b px-4  text-[14px] font-bold cursor-pointer`}
                    onClick={() => dispatch(paymentTermsOption(option))}
                    key={id}
                  >
                    Next {option} {option > 1 ? "Days" : "Day"}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <FormInput
          label="Project Description"
          colSpan="col-span-2"
          error={errors?.description?.message}
        >
          <input
            type="text"
            name="project-description"
            id="project-description"
            className="invoice-form-input bg-inherit"
            {...register("description", {
              required: "Can't be empty",
            })}
          />
        </FormInput>
      </div>
    </section>
  );
}

export default InvoiceDatePaymentTerms;
