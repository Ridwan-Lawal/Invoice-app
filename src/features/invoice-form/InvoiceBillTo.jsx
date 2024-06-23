import FormInput from "./FormInput";

function InvoiceBillTo() {
  return (
    <section className="mt-8">
      <h4 className="form-section-header">Bill To</h4>

      <div className="mt-5 grid grid-cols-3 gap-6">
        <FormInput label="Client's Name" colSpan="col-span-3">
          <input
            type="text"
            name="client-name"
            id="client-name"
            className="invoice-form-input "
          />
        </FormInput>

        <FormInput label="Client's Email" colSpan="col-span-3">
          <input
            type="text"
            name="client-email"
            id="client-email"
            className="invoice-form-input "
          />
        </FormInput>

        <FormInput label="Street Address" colSpan="col-span-3">
          <input
            type="text"
            name="client-address"
            id="client-address"
            className="invoice-form-input "
          />
        </FormInput>

        <FormInput label="City">
          <input
            type="text"
            name="client-city"
            id="client-city"
            className="invoice-form-input "
          />
        </FormInput>

        <FormInput label="Post Code">
          <input
            type="text"
            name="client-post-code"
            id="client-post-code"
            className="invoice-form-input "
          />
        </FormInput>

        <FormInput label="Country">
          <input
            type="text"
            name="client-country"
            id="client-country"
            className="invoice-form-input "
          />
        </FormInput>
      </div>
    </section>
  );
}

export default InvoiceBillTo;
