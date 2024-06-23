import FormInput from "./FormInput";

function InvoiceDatePaymentTerms() {
  return (
    <section className="mt-12">
      <div className="mt-5 grid grid-cols-2 gap-6">
        <FormInput label="Invoice Date">
          <input
            type="text"
            name="invoice-date"
            id="invoice-date"
            className="invoice-form-input "
          />
        </FormInput>

        <FormInput label="Payment Terms">
          <input
            type="text"
            name="payment-terms"
            id="payment-terms"
            className="invoice-form-input "
          />
        </FormInput>

        <FormInput label="Project Description" colSpan="col-span-2">
          <input
            type="text"
            name="project-description"
            id="project-description"
            className="invoice-form-input "
          />
        </FormInput>
      </div>
    </section>
  );
}

export default InvoiceDatePaymentTerms;
