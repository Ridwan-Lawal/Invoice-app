/* eslint-disable react/prop-types */

//  use the erros data to handle errors
function FormInput({ children, label, errors }) {
  const isDarkmode = true;

  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={children?.props?.id}
        className={`${
          isDarkmode ? "text-gray-100" : "text-cinder"
        } text-sm  w-fit`}
      >
        {label}
      </label>
      {children}
      {errors && <p className="text-red-400 italic text-xs">{errors}</p>}
    </div>
  );
}

export default FormInput;
