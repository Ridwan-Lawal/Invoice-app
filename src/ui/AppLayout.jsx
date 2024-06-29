import { Outlet } from "react-router-dom";
import NavSideBar from "./NavSideBar";
import InvoiceForm from "../features/invoice-form/InvoiceForm";
import FormContextProvider from "../contexts/FormContext";

function AppLayout() {
  // build the form
  return (
    <div className="flex flex-col md:flex-row ">
      <div className="flex   flex-col md:flex-row  border border-red-500 ">
        <NavSideBar />
        <div className="">
          <FormContextProvider>
            <InvoiceForm />
          </FormContextProvider>
        </div>
      </div>
      <main className="border h-screen overflow-auto border-blue-700  md:w-[100vw]  right-0 bottom-0 custom-scrollbar  ">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
