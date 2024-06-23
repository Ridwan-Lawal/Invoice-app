import FormInput from "./FormInput";

function InvoiceBillFrom() {
  return (
    <section className="mt-8">
      <h4 className="form-section-header">Bill From</h4>

      <div className="mt-5 grid grid-cols-3 gap-6">
        <FormInput label="Street Address" colSpan="col-span-3">
          <input
            type="text"
            name="address"
            id="address"
            className="invoice-form-input "
          />
        </FormInput>

        <FormInput label="City">
          <input
            type="text"
            name="city"
            id="city"
            className="invoice-form-input "
          />
        </FormInput>

        <FormInput label="Post Code">
          <input
            type="text"
            name="post-code"
            id="post-code"
            className="invoice-form-input "
          />
        </FormInput>

        <FormInput label="Country">
          <input
            type="text"
            name="country"
            id="country"
            className="invoice-form-input "
          />
        </FormInput>
      </div>
    </section>
  );
}

export default InvoiceBillFrom;
