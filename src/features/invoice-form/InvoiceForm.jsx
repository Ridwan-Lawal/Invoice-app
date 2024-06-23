import { IoAdd } from "react-icons/io5";

import Button from "../../ui/Button";
import InvoiceBillFrom from "./InvoiceBillFrom";
import InvoiceBillTo from "./InvoiceBillTo";
import InvoiceDatePaymentTerms from "./InvoiceDatePaymentTerms";
import InvoiceItemList from "./InvoiceItemList";
import { useDispatch, useSelector } from "react-redux";
import { openingForm } from "./invoiceFormSlice";

function InvoiceForm() {
  const isFormOpen = useSelector((store) => store.invoiceForm.isFormOpen);
  const dispatch = useDispatch();

  return (
    <div
      className={`bg-black ${
        isFormOpen
          ? "bg-opacity-50 z-50"
          : " overflow-hidden bg-opacity-0 -z-50"
      }   md:top-0  fixed  h-screen w-full font-spartan  transition-all duration-200 left-0 md:left-auto`}
    >
      <div
        className={` bg-white z-50 sm:max-w-[600px] h-screen transition-all duration-500 -trans sm:rounded-r-3xl ${
          isFormOpen ? "px-10 translate-x-0" : "px-0  -translate-x-full"
        } pt-10 `}
      >
        {/* overflow scroll */}
        <div className=" k px-3  h-[430px] md:h-[80vh] overflow-scroll pb-20 custom-scrollbar bg-white">
          <h1 className="text-[24px] font-bold text-cinder ">Create Form</h1>

          {/*---------------- Bill from =====*/}
          <InvoiceBillFrom />

          {/* =============== bill to =========== */}
          <InvoiceBillTo />

          {/* invoice date payment terms  */}
          <InvoiceDatePaymentTerms />

          {/* item List */}
          <InvoiceItemList />

          {/* add new item button */}
          <button className="btn-add-new">
            <IoAdd className="text-sm  text-gray-500" /> Add New Item
          </button>
        </div>

        {/* discard draft and send button */}
        <div className="flex items-center justify-between">
          <Button
            onClick={() => dispatch(openingForm())}
            textColor="text-cornflower-blue text-opacity-90"
            bgColor="bg-cornflower-blue bg-opacity-5 hover:bg-opacity-[0.15]"
            fontSize="text-[15px]"
            customStyles="py-3 px-6"
          >
            Discard
          </Button>

          <div className="flex item-center gap-3 py-4">
            <Button
              bgColor="bg-cinder bg-opacity-90 hover:bg-opacity-100"
              textColor="text-gray-400 text-opacity-90"
              customStyles="py-3.5 px-5"
            >
              Save as Draft
            </Button>

            <Button>Save & Send</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvoiceForm;
