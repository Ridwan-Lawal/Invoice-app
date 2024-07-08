import Button from "./Button";

/* eslint-disable react/prop-types */
function Modal({ invoiceId, onOpenCloseModal, deleteInvoice }) {
  return (
    <div className="fixed bg-black h-screen w-screen top-0 left-0 z-50 bg-opacity-30 flex items-center justify-center animate__animated animate__zoomIn px-6">
      <div className="bg-white space-y-8 pt-8 pb-9 px-8 sm:pt-10 sm:pb-12 sm:px-11 rounded-lg max-w-[450px]">
        <section className="space-y-1">
          <h2 className="text-[23px] font-bold text-cinder">
            Confirm Deletion
          </h2>
          <p className="text-gray-500 text-[13px] font-medium">
            Are you sure you want delete invoice #{invoiceId}. This action
            cannot be undone.
          </p>
        </section>

        <section className="flex items-center gap-4 justify-end">
          <Button
            onClick={onOpenCloseModal}
            bgColor="bg-cornflower-blue border bg-opacity-0 hover:bg-opacity-[0.15] transition-all"
            textColor="text-cornflower-blue text-opacity-80 "
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
