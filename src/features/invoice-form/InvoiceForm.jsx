import { IoAdd } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { getInvoiceFormReducer, openingForm } from "./invoiceFormSlice";

import Button from "../../ui/Button";
import InvoiceBillFrom from "./InvoiceBillFrom";
import InvoiceBillTo from "./InvoiceBillTo";
import InvoiceDatePaymentTerms from "./InvoiceDatePaymentTerms";
import InvoiceItemList from "./InvoiceItemList";
import { useInvoiceContext } from "../../contexts/FormContext";
import { useState } from "react";
import { addDays } from "date-fns";
import { formatInvoiceDate, generateRandomId } from "../../utils/helper";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiAddInvoice } from "../../services/apiInvoice";
import toast from "react-hot-toast";
import Loader from "../../ui/Loader";

function InvoiceForm() {
  const isFormOpen = useSelector((store) => store.invoiceForm.isFormOpen);
  const dispatch = useDispatch();
  const { handleSubmit, append, reset } = useInvoiceContext();
  const { paymentTerms } = useSelector(getInvoiceFormReducer);
  const queryClient = useQueryClient();

  // from react-calendar
  const [value, onChange] = useState(new Date());

  // To add the form data to the form
  const { isLoading: isAddingInvoice, mutate } = useMutation({
    mutationFn: apiAddInvoice,
    onSuccess: () => {
      toast.success("Invoice successfully added");
      queryClient.invalidateQueries("invoices");
      reset();
      dispatch(openingForm());
    },
    onError: (err) => toast.error(err.message),
  });

  function onSubmit(data, event) {
    const futureDate = addDays(value, paymentTerms);
    /* to get the name property of the button that submitted the form in order to know if it was the 'draft' or 'save' button */
    const submitter = event.nativeEvent.submitter;

    let status;
    let paymentDue;

    if (submitter.name === "draft") {
      status = "draft";
      paymentDue = "";
    } else {
      (status = "pending"), (paymentDue = formatInvoiceDate(futureDate));
    }

    const invoiceFormData = {
      id: generateRandomId(),
      ...data,
      paymentDue,
      paymentTerms,
      status,
      total: data.items.reduce(
        (acc, curItem) => acc + +curItem.price * +curItem.quantity,
        0
      ),
    };
    mutate(invoiceFormData);
    console.log(invoiceFormData);
  }

  if (isAddingInvoice) return <Loader />;
  return (
    <div
      className={`bg-black ${
        isFormOpen
          ? "bg-opacity-50 z-50"
          : " overflow-hidden bg-opacity-0 -z-50"
      }   md:top-0  fixed  h-screen w-full font-spartan  transition-all duration-200 left-0 md:left-auto`}
    >
      {/* overflow scroll */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={` bg-white z-50 sm:max-w-[600px] h-screen transition-all duration-500 -trans sm:rounded-r-3xl ${
          isFormOpen ? "px-10 translate-x-0" : "px-0  -translate-x-full"
        } pt-10 `}
      >
        <div className="px-3  h-[430px] md:h-[80vh] overflow-scroll pb-20 custom-scrollbar bg-white">
          <h1 className="text-[24px] font-bold text-cinder ">Create Form</h1>
          <input type="text" />
          <input type="text" />
          <InvoiceBillFrom />
          <InvoiceBillTo />

          {/* invoice date payment terms  */}
          <InvoiceDatePaymentTerms value={value} onChange={onChange} />

          {/* item List */}
          <InvoiceItemList />

          {/* add new item button */}
          {/* when clicked, increase the length of the array */}
          <button
            className="btn-add-new"
            onClick={() => append({ name: "", quantity: "", price: "" })}
          >
            <IoAdd className="text-sm  text-gray-500" /> Add New Item
          </button>
        </div>

        {/* discard draft and send button */}
        <div className="flex items-center justify-between">
          <Button
            onClick={() => dispatch(openingForm())}
            type="button"
            textColor="text-cornflower-blue text-opacity-90"
            bgColor="bg-cornflower-blue bg-opacity-5 hover:bg-opacity-[0.15]"
            fontSize="text-[15px]"
            customStyles="py-3 px-6"
          >
            Discard
          </Button>

          <div className="flex item-center gap-3 py-4">
            <Button
              name="draft"
              bgColor="bg-cinder bg-opacity-90 hover:bg-opacity-100"
              textColor="text-gray-400 text-opacity-90"
              customStyles="py-3.5 px-5"
            >
              Save as Draft
            </Button>

            <Button name="save">Save & Send</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default InvoiceForm;
