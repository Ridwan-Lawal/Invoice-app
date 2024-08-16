/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import Status from "../../ui/Status";
import { StatusLoader } from "../../ui/WaitingLoader";
import {
  // addInvoiceToEdit,
  openingForm,
  updateFormType,
} from "../invoice-form/invoiceFormSlice";
import { useInvoiceContext } from "../../contexts/FormContext";
import { getIsDarkMode } from "../dashboard/dashboardSlice";

function InvoiceHeader({ invoice, onOpenCloseModal, markAsPaid, isPaying }) {
  const dispatch = useDispatch();
  const { setValue } = useInvoiceContext();
  const isDarkMode = useSelector(getIsDarkMode);

  // for editing the form
  function handleEditForm() {
    dispatch(openingForm());
    dispatch(updateFormType("Edit"));
    Object.keys(invoice).map((key) => setValue(key, invoice[key]));
  }

  return (
    <header
      className={`flex justify-between items-center px-6 py-4 shadow-md  rounded-md ${
        isDarkMode ? "bg-[#1c243c] shadow-gray-900" : "bg-white shadow-gray-200"
      } `}
    >
      <section className="flex gap-6 items-center  w-full justify-between md:w-fit ">
        <p
          className={`invoice-primary-text font-medium ${
            isDarkMode ? "text-white" : "text-cornflower-blue"
          }`}
        >
          Status
        </p>
        {isPaying ? <StatusLoader /> : <Status status={invoice?.status} />}
      </section>

      <section
        className={`flex gap-3 items-center fixed bottom-0 w-full left-0 justify-center py-5   md:static md:py-0 md:shadow-none md:justify-between md:w-fit  ${
          isDarkMode
            ? "bg-[#1c243c] shadow-darkMode"
            : "bg-white shadow-lightmode"
        }`}
      >
        <Button
          onClick={handleEditForm}
          bgColor="bg-cornflower-blue bg-opacity-0 hover:bg-opacity-[0.15] transition-all"
          textColor={`${
            isDarkMode ? "text-white" : "text-cornflower-blue"
          } text-opacity-80 `}
          fontSize="text-[15px]"
          customStyles="py-2.5 px-6"
        >
          Edit
        </Button>

        <Button
          onClick={() => {
            onOpenCloseModal();
          }}
          name="delete"
          bgColor="bg-burnt-sienna  hover:bg-opacity-100"
          textColor="text-white"
          customStyles="py-3.5 px-7"
        >
          Delete
        </Button>

        {invoice?.status === "pending" && (
          <Button
            onClick={markAsPaid}
            bgColor="bg-cornflower-blue  hover:bg-opacity-100"
            textColor="text-white"
            customStyles="py-3.5 px-7"
          >
            Mark as paid
          </Button>
        )}
      </section>
    </header>
  );
}

export default InvoiceHeader;
