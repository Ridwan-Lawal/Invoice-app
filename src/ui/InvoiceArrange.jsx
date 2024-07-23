/* eslint-disable react/prop-types */

import { createContext } from "react";
import { getIsDarkMode } from "../features/dashboard/dashboardSlice";
import { useSelector } from "react-redux";

const InvoiceContext = createContext();

function InvoiceArrange({ children }) {
  return (
    <div className="flex flex-col items-center relative ">
      <InvoiceContext.Provider value={{}}>{children}</InvoiceContext.Provider>
    </div>
  );
}

function Button({ children, onClick }) {
  return <button onClick={onClick}>{children}</button>;
}

function Options({ children }) {
  const isDarkMode = useSelector(getIsDarkMode);

  return (
    <div
      className={` options ${
        isDarkMode ? "bg-ebony-clay" : "bg-white"
      } absolute top-8 rounded-md py-4 space-y-3  px-3 w-[120px] shadow-xl z-10`}
    >
      {children}
    </div>
  );
}

InvoiceArrange.Button = Button;
InvoiceArrange.Options = Options;

export default InvoiceArrange;
