import { useInvoiceContext } from "../../contexts/FormContext";
import FormInput from "./FormInput";

function InvoiceBillTo() {
  const {
    register,
    formState: { errors },
  } = useInvoiceContext();

  console.log(errors);

  return (
    <section className="mt-8">
      <h4 className="form-section-header">Bill To</h4>

      <div className="mt-5 grid grid-cols-3 gap-6">
        <FormInput
          label="Client's Name"
          colSpan="col-span-3"
          error={errors?.clientName?.message}
        >
          <input
            type="text"
            name="client-name"
            id="client-name"
            className="invoice-form-input "
            {...register("clientName", {
              required: "can't be empty!",
            })}
          />
        </FormInput>

        <FormInput
          label="Client's Email"
          colSpan="col-span-3"
          error={errors?.clientEmail?.message}
        >
          <input
            type="text"
            name="clientEmail"
            id="clientEmail"
            className="invoice-form-input "
            {...register("clientEmail", {
              required: "can't be empty!",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Enter a valid email address!",
              },
            })}
          />
        </FormInput>

        <FormInput
          label="Street Address"
          colSpan="col-span-3"
          error={errors?.clientAddress?.street?.message}
        >
          <input
            type="text"
            name="clientAddress"
            id="clientAddress"
            className="invoice-form-input "
            {...register("clientAddress.street", {
              required: "can't be empty!",
            })}
          />
        </FormInput>

        <FormInput label="City" error={errors?.clientAddress?.city?.message}>
          <input
            type="text"
            name="clientCity"
            id="clientCity"
            className="invoice-form-input "
            {...register("clientAddress.city", {
              required: "can't be empty!",
            })}
          />
        </FormInput>

        <FormInput
          label="Post Code"
          error={errors?.clientAddress?.postCode?.message}
        >
          <input
            type="text"
            name="clientPostCode"
            id="clientPostCode"
            className="invoice-form-input "
            {...register("clientAddress.postCode", {
              required: "can't be empty!",
            })}
          />
        </FormInput>

        <FormInput
          label="Country"
          error={errors?.clientAddress?.country?.message}
        >
          <input
            type="text"
            name="clientCountry"
            id="clientCountry"
            className="invoice-form-input "
            {...register("clientAddress.country", {
              required: "can't be empty!",
            })}
          />
        </FormInput>
      </div>
    </section>
  );
}

export default InvoiceBillTo;
