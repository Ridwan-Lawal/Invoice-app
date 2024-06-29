/* eslint-disable react/prop-types */
function FormInput({ children, label, colSpan, display, error }) {
  return (
    <div className={`space-y-2 ${colSpan} `}>
      <div className={`flex ${display} items-center justify-between`}>
        <label
          htmlFor={`${children?.props?.id}`}
          className="invoice-form-label"
        >
          {label}
        </label>

        {error && (
          <span className="text-xs text-red-500">can&apos;t be empty</span>
        )}
      </div>
      {children}
    </div>
  );
}

export default FormInput;
