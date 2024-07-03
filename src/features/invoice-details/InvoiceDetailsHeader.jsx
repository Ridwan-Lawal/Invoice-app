import Button from "../../ui/Button";
import Status from "../../ui/Status";

function InvoiceDetailsHeader() {
  return (
    <div className="bg-white border border-black flex justify-between items-center">
      <section className="flex gap-6 items-center">
        <p className="primary-text font-medium">Status</p>
        <Status status="pending" />
      </section>

      <section className="flex gap-4 items-center">
        <Button
          bgColor="bg-cornflower-blue bg-opacity-0 hover:bg-opacity-[0.15] transition-all"
          textColor="text-cornflower-blue text-opacity-80 "
          fontSize="text-[15px]"
          customStyles="py-2.5 px-6"
        >
          Edit
        </Button>

        <Button
          name="delete"
          bgColor="bg-burnt-sienna  hover:bg-opacity-100"
          textColor="text-white"
          customStyles="py-3.5 px-7"
        >
          Delete
        </Button>

        <Button
          name="delete"
          bgColor="bg-cornflower-blue  hover:bg-opacity-100"
          textColor="text-white"
          customStyles="py-3.5 px-7"
        >
          Mark as paid
        </Button>
      </section>
    </div>
  );
}

export default InvoiceDetailsHeader;
