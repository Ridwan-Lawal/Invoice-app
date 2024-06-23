import { Outlet } from "react-router-dom";
import NavSideBar from "./NavSideBar";
import InvoiceForm from "../features/invoice-form/InvoiceForm";

function AppLayout() {
  // build the form
  return (
    <div className="flex flex-col md:flex-row ">
      <div className="flex  flex-col md:flex-row  border border-red-500 ">
        <NavSideBar />
        <div className="">
          <InvoiceForm />
        </div>
      </div>
      <main className="border border-blue-700 h-screen overflow-auto  md:w-[87vw] md:absolute right-0 bottom-0">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
