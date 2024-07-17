import { useSelector } from "react-redux";
import Button from "./Button";
import { getIsDarkMode } from "../features/dashboard/dashboardSlice";

/* eslint-disable react/prop-types */
function Modal({ invoiceId, onOpenCloseModal, deleteInvoice }) {
  const isDarkMode = useSelector(getIsDarkMode);
  return (
    <div className="fixed bg-black h-screen w-screen top-0 left-0 z-50 bg-opacity-30 flex items-center justify-center animate__animated animate__zoomIn px-6">
      <div
        className={` ${
          isDarkMode ? "bg-ebony-clay" : "bg-white"
        } space-y-8 pt-8 pb-9 px-8 sm:pt-10 sm:pb-12 sm:px-11 rounded-lg max-w-[450px]`}
      >
        <section className="space-y-1">
          <h2
            className={`text-[23px] font-bold  ${
              isDarkMode ? "text-white" : "text-cinder"
            } `}
          >
            Confirm Deletion
          </h2>
          <p
            className={`text-[13px] font-medium ${
              isDarkMode ? "text-gray-300" : "text-gray-500"
            } `}
          >
            Are you sure you want delete invoice #{invoiceId}. This action
            cannot be undone.
          </p>
        </section>

        <section className="flex items-center gap-4 justify-end">
          <Button
            onClick={onOpenCloseModal}
            bgColor={`hover:bg-opacity-[0.15] transition-all ${
              isDarkMode
                ? "bg-mirage bg-opacity-60"
                : "bg-cornflower-blue bg-opacity-0"
            } `}
            textColor={` ${
              isDarkMode
                ? "text-gray-200"
                : "text-cornflower-blue text-opacity-80"
            } `}
            fontSize="text-[15px]"
            customStyles="py-2.5 px-6"
          >
            Cancel
          </Button>

          <Button
            onClick={() => {
              deleteInvoice();
              onOpenCloseModal();
            }}
            name="delete"
            bgColor="bg-burnt-sienna  hover:bg-opacity-100"
            textColor="text-white"
            customStyles="py-3 px-6"
          >
            Delete
          </Button>
        </section>
      </div>
    </div>
  );
}

export default Modal;
