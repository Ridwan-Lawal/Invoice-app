import { FaTrash } from "react-icons/fa";

function InvoiceItemList() {
  return (
    <section className="mt-9">
      <h2 className="text-2xl font-bold text-gray-500">Item List</h2>
      <aside className="grid grid-cols-8 gap-4 items-center pb-1.5 mt-2.5">
        <p className="invoice-form-label col-span-3">Item Name</p>
        <p className="invoice-form-label">Qty.</p>
        <p className="invoice-form-label col-span-2">Price</p>
        <p className="invoice-form-label">Total</p>
      </aside>

      {/* replace id in 'item-name-id' with form id after looping */}
      <div className="grid mt-4 grid-cols-8 gap-4 items-center">
        {/* item Name */}
        <input
          type="text"
          name="item-name-id"
          id="item-name-id"
          className="invoice-form-input col-span-3"
        />

        {/* Qty. */}
        <input
          type="text"
          name="quantity-id"
          id="quantity-id"
          className="invoice-form-input "
        />

        {/* price */}
        <input
          type="text"
          name="price-id"
          id="price-id"
          className="invoice-form-input col-span-2 "
        />

        {/* total */}
        <p className="font-bold  text-[15px] text-cornflower-blue text-opacity-80">
          $0.00
        </p>

        {/* delete btn */}

        <button className="-mt-1  flex justify-center">
          <FaTrash className="text-cornflower-blue text-opacity-80 " />
        </button>
      </div>
    </section>
  );
}

export default InvoiceItemList;
