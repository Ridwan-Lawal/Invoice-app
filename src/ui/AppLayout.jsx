import { Outlet } from "react-router-dom";
import NavSideBar from "./NavSideBar";
import InvoiceForm from "../features/invoice-form/InvoiceForm";
import FormContextProvider from "../contexts/FormContext";
import { useAddTheme } from "../hooks/useAddTheme";
import { useAddFilterSortOnReload } from "../hooks/useAddFilterSortOnReload";
import { getIsDarkMode } from "../features/dashboard/dashboardSlice";
import { useSelector } from "react-redux";

function AppLayout() {
  const isDarkMode = useSelector(getIsDarkMode);
  // custom hook to add the theme from supabase upon reload
  useAddTheme();

  // custom hook to add filter and sort options from supabase upon reload
  useAddFilterSortOnReload();

  return (
    <FormContextProvider>
      <div className="flex flex-col md:flex-row ">
        <div className="flex   flex-col md:flex-row">
          <NavSideBar />
          <div className="">
            <InvoiceForm />
          </div>
        </div>
        <main
          className={` min-h-screen overflow-auto md:w-[100vw]  right-0 bottom-0 ${
            isDarkMode ? "custom-scrollbar-dark" : "custom-scrollbar"
          } `}
        >
          <Outlet />
        </main>
      </div>
    </FormContextProvider>
  );
}

export default AppLayout;
