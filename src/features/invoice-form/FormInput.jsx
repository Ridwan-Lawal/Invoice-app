/* eslint-disable react/prop-types */
function FormInput({ children, label, colSpan }) {
  console.log(children);
  return (
    <div className={`space-y-2 ${colSpan} `}>
      <label htmlFor={`${children?.props?.id}`} className="invoice-form-label">
        {label}
      </label>
      {children}
    </div>
  );
}

export default FormInput;
