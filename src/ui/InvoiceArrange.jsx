/* eslint-disable react/prop-types */

import { createContext } from "react";

const InvoiceContext = createContext();

function InvoiceArrange({ children, onBlur }) {
  return (
    <div onBlur={onBlur} className="flex flex-col items-center relative ">
      <InvoiceContext.Provider value={{}}>{children}</InvoiceContext.Provider>
    </div>
  );
}

function Button({ children, onClick }) {
  return <button onClick={onClick}>{children}</button>;
}

function Options({ children }) {
  return (
    <div
      className={` absolute top-8 bg-white rounded-md py-4 space-y-3  px-3 w-[120px] shadow-xl`}
    >
      {children}
    </div>
  );
}

InvoiceArrange.Button = Button;
InvoiceArrange.Options = Options;

export default InvoiceArrange;
