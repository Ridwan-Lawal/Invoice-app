import { Outlet } from "react-router-dom";
import NavSideBar from "./NavSideBar";
import InvoiceForm from "../features/invoice-form/InvoiceForm";
import FormContextProvider from "../contexts/FormContext";

function AppLayout() {
  // build the form
  return (
    <FormContextProvider>
      <div className="flex flex-col md:flex-row ">
        <div className="flex   flex-col md:flex-row">
          <NavSideBar />
          <div className="">
            <InvoiceForm />
          </div>
        </div>
        <main className=" h-screen overflow-auto md:w-[100vw]  right-0 bottom-0 custom-scrollbar  ">
          <Outlet />
        </main>
      </div>
    </FormContextProvider>
  );
}

export default AppLayout;
