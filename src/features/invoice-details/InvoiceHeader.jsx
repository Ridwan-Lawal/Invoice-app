/* eslint-disable react/prop-types */
import Button from "../../ui/Button";
import Status from "../../ui/Status";
import { StatusLoader } from "../../ui/WaitingLoader";

function InvoiceHeader({ invoice, onOpenCloseModal, markAsPaid, isPaying }) {
  return (
    <header className="bg-white border border-black flex justify-between items-center px-6 py-4 shadow-md shadow-gray-200 rounded-md  ">
      <section className="flex gap-6 items-center border w-full justify-between md:w-fit ">
        <p className="primary-text font-medium">Status</p>
        {isPaying ? <StatusLoader /> : <Status status={invoice?.status} />}
      </section>

      <section className="flex gap-3 border border-green items-center fixed bottom-0 w-full left-0 justify-center py-5 shadow-top  md:static md:py-0 md:shadow-none md:justify-between md:w-fit bg-white">
        <Button
          bgColor="bg-cornflower-blue bg-opacity-0 hover:bg-opacity-[0.15] transition-all"
          textColor="text-cornflower-blue text-opacity-80 "
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
