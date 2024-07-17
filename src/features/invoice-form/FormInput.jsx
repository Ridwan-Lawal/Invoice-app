import { useSelector } from "react-redux";
import { getIsDarkMode } from "../dashboard/dashboardSlice";

/* eslint-disable react/prop-types */
function FormInput({ children, label, colSpan, display, error }) {
  const isDarkMode = useSelector(getIsDarkMode);
  return (
    <div className={`space-y-2 ${colSpan} `}>
      <div className={`flex ${display} items-center justify-between`}>
        <label
          htmlFor={`${children?.props?.id}`}
          className={`invoice-form-label ${
            isDarkMode ? "text-gray-100" : "text-cornflower-blue"
          } `}
        >
          {label}
        </label>

        {error && <span className="text-xs text-red-500">{error}</span>}
      </div>
      <div
        className={`${
          isDarkMode ? "bg-[#1c243c] text-white" : "bg-white text-cinder"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

export default FormInput;
