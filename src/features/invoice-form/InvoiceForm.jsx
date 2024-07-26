import { IoAdd } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { getInvoiceFormReducer, openingForm } from "./invoiceFormSlice";

import Button from "../../ui/Button";
import InvoiceBillFrom from "./InvoiceBillFrom";
import InvoiceBillTo from "./InvoiceBillTo";
import InvoiceDatePaymentTerms from "./InvoiceDatePaymentTerms";
import InvoiceItemList from "./InvoiceItemList";
import { useInvoiceContext } from "../../contexts/FormContext";
import { useEffect, useState } from "react";
import { addDays } from "date-fns";
import { formatInvoiceDate, generateRandomId } from "../../utils/helper";
import { useAddUpdateInvoice } from "../../hooks/useAddUpdateInvoice.js";
import Loader from "../../ui/Loader";
import { getIsDarkMode } from "../dashboard/dashboardSlice.js";

// handle the calender size on mobile view

function InvoiceForm() {
  const dispatch = useDispatch();
  const { handleSubmit, append, getValues, reset, clearErrors } =
    useInvoiceContext();
  const { paymentTerms } = useSelector(getInvoiceFormReducer);
  const isDarkMode = useSelector(getIsDarkMode);
  const [isDraft, setIsDraft] = useState(false);

  // from react-calendar
  const [value, onChange] = useState(new Date());

  // To add or update the form the form data to the form
  const { isAddingUpdatingInvoice, mutateToAddUpdate, isFormOpen, formType } =
    useAddUpdateInvoice(isDraft);

  useEffect(
    function () {
      if (formType === "Create") {
        reset();
      }
      setIsDraft(false);
    },
    [formType, reset]
  );

  function onSubmit(data) {
    const futureDate = addDays(value, paymentTerms);
    const invoiceFormData = {
      id: generateRandomId(),
      ...data,
      paymentDue: formatInvoiceDate(futureDate),
      paymentTerms,
      status: "pending",
      items: data.items.map((item) => ({
        ...item,
        total: +item?.quantity * +item?.price,
      })),
      total: data.items.reduce(
        (acc, curItem) => acc + +curItem.price * +curItem.quantity,
        0
      ),
    };
    mutateToAddUpdate(invoiceFormData, {
      onSuccess: () => {
        reset();
      },
    });
    setIsDraft(false);
  }

  // for saving draft without form validation
  function onDraft() {
    const data = getValues();

    const invoiceFormData = {
      id: generateRandomId(),
      ...data,
      paymentDue: null,
      paymentTerms,
      status: "draft",
      items: data.items.map((item) => ({
        ...item,
        total: +item?.quantity * +item?.price,
      })),
      total: data.items.reduce(
        (acc, curItem) => acc + +curItem.price * +curItem.quantity,
        0
      ),
    };

    setIsDraft(true);
    mutateToAddUpdate(invoiceFormData);
    clearErrors();
  }

  if (isAddingUpdatingInvoice) return <Loader />;

  return (
    <div
      className={`bg-black ${
        isFormOpen
          ? "bg-opacity-50 z-50"
          : " overflow-hidden bg-opacity-0 -z-50"
      }   md:top-0  fixed  h-screen w-full font-spartan  transition-all duration-200 left-0 border top-0 md:left-auto`}
    >
      {/* overflow scroll */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={` ${
          isDarkMode ? "bg-[#141424]" : "bg-white"
        }  z-50 sm:max-w-[600px] h-screen transition-all duration-500 -trans sm:rounded-r-3xl ${
          isFormOpen ? "px-4 sm:px-10 translate-x-0" : "px-0  -translate-x-full"
        } pt-10 flex flex-col justify-between`}
      >
        <div className="px-3  h-full border md:h-full overflow-scroll pb-20 custom-scrollbar bg-inherit">
          <h1
            className={`text-[24px] font-bold  ${
              isDarkMode ? "text-white" : "text-cinder"
            } `}
          >
            {formType} Form
          </h1>

          <InvoiceBillFrom />
          <InvoiceBillTo />

          {/* invoice date payment terms  */}
          <InvoiceDatePaymentTerms value={value} onChange={onChange} />

          {/* item List */}
          <InvoiceItemList />

          {/* add new item button */}
          {/* when clicked, increase the length of the array */}
          <button
            className={`btn-add-new ${
              isDarkMode
                ? "text-gray-300 bg-ebony-clay"
                : "text-cornflower-blue bg-cornflower-blue bg-opacity-5"
            }`}
            onClick={() => append({ name: "", quantity: "", price: "" })}
          >
            <IoAdd
              className={`text-sm  ${
                isDarkMode ? "bg-inherit" : "text-gray-500"
              }`}
            />{" "}
            Add New Item
          </button>
        </div>

        {/* discard draft and send button */}
        <div className="flex items-center border h-[16%]   justify-between">
          <Button
            onClick={() => dispatch(openingForm())}
            type="button"
            textColor={` ${
              isDarkMode
                ? "text-gray-300"
                : "text-cornflower-blue text-opacity-90"
            } `}
            bgColor={`${
              isDarkMode ? "bg-ebony-clay" : "bg-cornflower-blue bg-opacity-5 "
            } hover:bg-opacity-[0.15]`}
            fontSize="text-[15px]"
            customStyles="py-3 px-6"
          >
            {formType === "Create" ? "Discard" : "Cancel"}
          </Button>

          <div className="flex item-center  gap-3 py-4">
            {formType === "Create" && (
              <Button
                name="button"
                onClick={onDraft}
                bgColor={` hover:bg-opacity-100 ${
                  isDarkMode ? "bg-slate-700" : "bg-cinder bg-opacity-90"
                } `}
                textColor={` ${
                  isDarkMode ? "text-gray-300" : "text-gray-400 text-opacity-90"
                } `}
                customStyles="py-3.5 px-5"
              >
                <span className="md:hidden">Draft</span>
                <span className="hidden md:block"> Save as Draft</span>
              </Button>
            )}

            <Button name="save">
              {formType === "Create" ? "Add" : "Save changes"}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default InvoiceForm;
