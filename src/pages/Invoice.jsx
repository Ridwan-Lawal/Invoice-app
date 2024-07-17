import { useParams } from "react-router-dom";
import { useState } from "react";
import { useReadInvoiceById } from "../hooks/useReadInvoiceById";
import { useDeleteInvoice } from "../hooks/useDeleteInvoice";
import { useMarkInvoicePaid } from "../hooks/useMarkInvoicePaid";

import InvoiceHeader from "../features/invoice-details/InvoiceHeader";
import InvoiceMain from "../features/invoice-details/InvoiceMain";
import WaitingLoader from "../ui/WaitingLoader";
import Modal from "../ui/Modal";
import Loader from "../ui/Loader";
import BackButton from "../ui/BackButton";

// Trying to add mark as paid functionality

function Invoice() {
  const { invoiceId } = useParams();

  const [isDeleteModal, setIsDeleteModal] = useState(false);

  // get use the data you got from supabase below to display the data of the invoice that was clicked
  const { invoice, isLoading } = useReadInvoiceById(invoiceId);

  // mutating api to delete invoice
  const { mutate, isDeleting } = useDeleteInvoice();

  // mutating api to mark as paid
  const { mutatePaidStatus, isPaying } = useMarkInvoicePaid(invoiceId);

  function handleOpenCloseModal() {
    setIsDeleteModal((cur) => !cur);
  }

  if (isDeleting) return <WaitingLoader marginTop="mt-32" />;
  if (isLoading) return <Loader />;

  return (
    <div className="px-5 sm:px-9 pt-11 md:pt-20 space-y-8  border border-green-900 mb-56 md:mb-14 md:max-w-3xl mx-auto ">
      {isDeleteModal && (
        <Modal
          invoiceId={invoiceId}
          onOpenCloseModal={handleOpenCloseModal}
          deleteInvoice={() => mutate(invoiceId)}
        />
      )}
      <BackButton />
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
