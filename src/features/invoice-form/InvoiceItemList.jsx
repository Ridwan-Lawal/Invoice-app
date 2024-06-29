/* eslint-disable react/prop-types */
import { FaTrash } from "react-icons/fa";
import { useInvoiceContext } from "../../contexts/FormContext";
import FormInput from "./FormInput";

import { formatCurrency } from "../../utils/helper";

function InvoiceItemList() {
  const {
    register,
    formState: { errors },
    fields,
    remove,
    itemsWatch,
  } = useInvoiceContext();

  function totalPricePerItem(item) {
    const itemPriceByQuantity =
      +itemsWatch?.[item]?.quantity * +itemsWatch?.[item]?.price;
    if (!Number.isFinite(itemPriceByQuantity)) return;

    return formatCurrency(itemPriceByQuantity);
  }

  return (
    <section className="mt-9 ">
      <h2 className="text-2xl font-bold text-gray-500">Item List</h2>
      <aside className="hidden sm:grid grid-cols-8 gap-4 items-center pb-1.5 mt-2.5 ">
        <p className="invoice-form-label col-span-3">Item Name</p>
        <p className="invoice-form-label">Qty.</p>
        <p className="invoice-form-label col-span-2">Price</p>
        <p className="invoice-form-label">Total</p>
      </aside>

      {/* replace id in 'item-name-id' with form id after looping */}
      {fields?.map((item, index) => (
        // each item is number
        <div
          key={item.id}
          className="grid mt-4 grid-cols-5 sm:grid-cols-8 gap-4 sm:items-center transition-all duration-500 animate animate__slideOutDown"
        >
          {/* item Name */}

          <FormInput
            label="Item Name"
            colSpan="sm:col-span-3 col-span-5"
            display="sm:hidden"
            error={errors?.items?.[index]?.name}
          >
            <input
              type="text"
              name="item-name-id"
              id="item-name-id"
              className="invoice-form-input "
              {...register(`items[${index}].name`, {
                required: "can't be empty",
              })}
            />
          </FormInput>

          {/* Qty. */}
          <FormInput
            label="Qty."
            display="sm:hidden"
            error={errors?.items?.[index]?.quantity}
          >
            <input
              type="text"
              name="quantity-id"
              id="quantity-id"
              style={{ paddingLeft: "5px", paddingRight: "4px" }}
              className="invoice-form-input"
              {...register(`items[${index}].quantity`, {
                required: "can't be empty",
              })}
            />
          </FormInput>

          {/* price */}
          <FormInput
            label="Price"
            colSpan="col-span-2"
            display="sm:hidden"
            error={errors?.items?.[index]?.price}
          >
            <input
              type="text"
              name="price-id"
              id="price-id"
              className="invoice-form-input col-span-2 "
              {...register(`items[${index}].price`, {
                required: "can't be empty",
              })}
            />
          </FormInput>

          {/* total */}

          <div className="col-span-auto  word-wrap w-[80px]">
            <p className="invoice-form-label sm:hidden">Total</p>
            <p className="font-bold  text-[15px] text-cornflower-blue text-opacity-80 mt-5 sm:mt-0  break-words">
              {totalPricePerItem(index)}
            </p>
          </div>

          {/* delete btn */}

          <button
            onClick={() => {
              remove(index);
            }}
            className="sm:-mt-1  flex justify-center mt-10"
          >
            <FaTrash className="text-cornflower-blue text-opacity-80" />
          </button>
        </div>
      ))}
    </section>
  );
}

export default InvoiceItemList;
