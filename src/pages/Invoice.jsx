import { IoIosArrowBack } from "react-icons/io";
import InvoiceDetailsHeader from "../features/invoice-details/InvoiceDetailsHeader";

function Invoice() {
  return (
    <div>
      <button className="flex gap-3 group">
        <IoIosArrowBack className="text-cornflower-blue" />
        <span className="text-cinder group-hover:text-cornflower-blue transition-colors duration-300 text-sm font-bold">
          Go back
        </span>
      </button>
      <InvoiceDetailsHeader />
    </div>
  );
}

export default Invoice;
