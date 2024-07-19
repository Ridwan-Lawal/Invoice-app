import { Outlet } from "react-router-dom";
import NavSideBar from "./NavSideBar";
import InvoiceForm from "../features/invoice-form/InvoiceForm";
import FormContextProvider from "../contexts/FormContext";
import { useAddTheme } from "../hooks/useAddTheme";

function AppLayout() {
  // use to add the theme from supabase
  useAddTheme();

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
