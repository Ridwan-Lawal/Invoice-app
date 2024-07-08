import { IoIosArrowBack } from "react-icons/io";

import { useNavigate, useParams } from "react-router-dom";
import {
  apiDeleteInvoice,
  apiMarkAsPaid,
  apiReadInvoiceById,
} from "../services/apiInvoice";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import InvoiceHeader from "../features/invoice-details/InvoiceHeader";
import InvoiceMain from "../features/invoice-details/InvoiceMain";
import WaitingLoader from "../ui/WaitingLoader";
import toast from "react-hot-toast";
import { useState } from "react";
import Modal from "../ui/Modal";

// Trying to add mark as paid functionality

function Invoice() {
  const { invoiceId } = useParams();
  const navigate = useNavigate();
  console.log(invoiceId);
  const queryClient = useQueryClient();
  const [isDeleteModal, setIsDeleteModal] = useState(false);

  // ask claude this question - is there anyway to make your code stop looking messy and bulky when using tailwind css

  // get use the data you got from supabase below to display the data of the invoice that was clicked

  const { data: invoice, isLoading } = useQuery({
    // added a second value to the querykey, which is the 'invoice id' that i want to use the get the row from supabase
    // it can be use to pass an argument into the queryfunction. all you need is to recieve the argument and in the apiReadInvoiceById function and get the 'invoice id' in the queryKey properties from the argument you recieved
    queryKey: ["invoice", invoiceId],
    queryFn: apiReadInvoiceById,
  });

  // mutating api to delete invoice
  const { mutate, isLoading: isDeleting } = useMutation({
    mutationFn: apiDeleteInvoice,
    onSuccess: () => {
      toast.success("Invoice successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["invoices"],
      });
      navigate("/");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  // mutating api to mark as paid
  const { mutate: mutatePaidStatus, isLoading: isPaying } = useMutation({
    mutationFn: apiMarkAsPaid,
    onSuccess: () => {
      toast.success(`Invoice #${invoiceId} marked as paid`);
      // refetch the data from the api to update view
      queryClient.invalidateQueries({
        queryKey: ["invoice"],
      });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  function handleOpenCloseModal() {
    setIsDeleteModal((cur) => !cur);
  }

  if (isLoading || isDeleting) return <WaitingLoader marginTop="mt-32" />;

  return (
    <div className="px-9 pt-11 md:pt-20 space-y-8  border border-green-900 mb-56 md:mb-14 md:max-w-3xl mx-auto">
      {isDeleteModal && (
        <Modal
          invoiceId={invoiceId}
          onOpenCloseModal={handleOpenCloseModal}
          deleteInvoice={() => mutate(invoiceId)}
        />
      )}
      <button onClick={() => navigate(-1)} className="flex gap-3 group">
        <IoIosArrowBack className="text-cornflower-blue" />
        <span className="text-cinder group-hover:text-cornflower-blue transition-colors duration-300 text-sm font-bold">
          Go back
        </span>
      </button>
      <div className="space-y-5">
        <InvoiceHeader
          invoice={invoice}
          onOpenCloseModal={handleOpenCloseModal}
          markAsPaid={() => mutatePaidStatus(invoiceId)}
          isPaying={isPaying}
        />
        <InvoiceMain invoice={invoice} />
      </div>
    </div>
  );
}

export default Invoice;
