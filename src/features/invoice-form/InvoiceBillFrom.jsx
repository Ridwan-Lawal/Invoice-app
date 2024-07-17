import FormInput from "./FormInput";
import { useInvoiceContext } from "../../contexts/FormContext";

function InvoiceBillFrom() {
  // start registering the fieldse
  const {
    register,
    formState: { errors },
  } = useInvoiceContext();

  return (
    <section className="mt-8">
      <h4 className="form-section-header">Bill From</h4>

      <div className="mt-5 grid grid-cols-3 gap-6">
        <FormInput
          label="Street Address"
          colSpan="col-span-3"
          error={errors?.senderAddress?.street?.message}
        >
          <input
            type="text"
            name="street"
            id="street"
            className="invoice-form-input bg-inherit text-inherit"
            {...register("senderAddress.street", {
              required: "can't be empty!",
            })}
          />
        </FormInput>

        <FormInput label="City" error={errors?.senderAddress?.city?.message}>
          <input
            type="text"
            name="city"
            id="city"
            className="invoice-form-input bg-inherit text-inherit"
            {...register("senderAddress.city", {
              required: "can't be empty!",
            })}
          />
        </FormInput>

        <FormInput
          label="Post Code"
          error={errors?.senderAddress?.postCode?.message}
        >
          <input
            type="text"
            name="postCode"
            id="postCode"
            className="invoice-form-input bg-inherit text-inherit"
            {...register("senderAddress.postCode", {
              required: "can't be empty!",
            })}
          />
        </FormInput>

        <FormInput
          label="Country"
          error={errors?.senderAddress?.country?.message}
        >
          <input
            type="text"
            name="country"
            id="country"
            className="invoice-form-input bg-inherit"
            {...register("senderAddress.country", {
              required: "can't be empty!",
            })}
          />
        </FormInput>
      </div>
    </section>
  );
}

export default InvoiceBillFrom;
