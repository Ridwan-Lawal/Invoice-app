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

function InvoiceDatePaymentTerms({ value, onChange }) {
  // change the name you used to register invoicedate and payment terms  to createdAt and paymentDue
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
                isCalendarFocus ? style : { border: "1px solid lightgray" }
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
                className="cursor-pointer focus:outline-none "
                {...register("createdAt", {
                  required: "Can't be empty",
                })}
              />
              <FaCalendar className="absolute right-3 text-gray-400" />
            </div>
          </FormInput>
          {isCalendarOpen && (
            <div className="relative flex ">
              <div className="absolute w-full">
                <Calendar
                  onChange={onChange}
                  value={value}
                  className="px-2 py-3 font-medium bg-white rounded-md shadow-2xl w-full "
                />
              </div>
            </div>
          )}
        </div>

        {/* payment terms */}
        <FormInput label="Payment Terms">
          <div className="flex flex-col gap-4 ">
            <div
              style={
                isPaymentTermsFocus ? style : { border: "1px solid lightgray" }
              }
              className=" rounded-md flex  items-center py-3 cursor-pointer"
              onClick={() => dispatch(paymentTermsModalOpening)}
            >
              <input
                type="text"
                onFocus={() => dispatch(paymentTermsModalFocus)}
                onBlur={() => dispatch(paymentTermsModalBluring)}
                name="payment-terms"
                value={`Next ${paymentTerms} ${daysSpelling}`}
                id="payment-terms"
                className="invoice-form-input2 w-[80%] border-r border-gray-300 cursor-pointer"
                {...register("paymentDue", {
                  required: "Can't be empty",
                })}
              />

              <IoIosArrowDown className="text-cornflower-blue text-lg w-[20%]" />
            </div>

            {isPaymentTermsOpen && (
              <div className="relative ">
                <ul className="rounded-md overflow-hidden shadow-2xl absolute w-full bg-white">
                  {[30, 14, 7, 1].map((option, id) => (
                    <li
                      className={`${
                        paymentTerms === option
                          ? "text-cornflower-blue"
                          : "text-cinder"
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
        </FormInput>

        <FormInput
          label="Project Description"
          colSpan="col-span-2"
          error={errors?.description?.message}
        >
          <input
            type="text"
            name="project-description"
            id="project-description"
            className="invoice-form-input "
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
