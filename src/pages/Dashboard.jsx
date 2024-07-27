import { useIsMutating } from "@tanstack/react-query";
import DashBoardHeader from "../features/dashboard/DashBoardHeader";
import InvoiceCard from "../features/dashboard/InvoiceCard";

import Loader from "../ui/Loader";
import toast from "react-hot-toast";

import WaitingLoader from "../ui/WaitingLoader";
import { useReadInvoices } from "../hooks/useReadInvoices";
import { getDashboardReducer } from "../features/dashboard/dashboardSlice";
import { useSelector } from "react-redux";

function Dashboard() {
  // for reading the mutate state of the mutation of adding the filter and sort value to supabase
  const isMutating = useIsMutating("addFilterSort");

  // for reading the invoices from the api
  const { invoices, isLoading, isError } = useReadInvoices();

  // for reading the filter and the sort value from redux store
  const { sortBy, filterBy } = useSelector(getDashboardReducer);

  // filtering the invoices data based on the filterBy value from the filterAndSort data

  // if a filter value exist from the redux then filter the invoices data from the api, else if filter value value is Null from supabase, then it returns thte invoices data without filtering, so i can use the data to sort

  const filteredData = invoices?.filter((invoice) => {
    if (filterBy === "All") return invoices;
    return filterBy ? invoice.status === filterBy.toLowerCase() : invoices;
  });

  // I am using the filtered data to sort from above to sort, so if there is a sortBy value on supabase, then the data will be filtered, if not then the filteredData from above will be returned without sorting.

  let invoicesDataAfterSorting;

  if (sortBy === "Name") {
    invoicesDataAfterSorting = filteredData
      ?.slice()
      ?.sort((a, b) => b.clientName.localeCompare(a.clientName));
  } else if (sortBy === "Status") {
    invoicesDataAfterSorting = filteredData
      ?.slice()
      ?.sort((a, b) => a.status.localeCompare(b.status));
  } else if (sortBy === "Due Date") {
    invoicesDataAfterSorting = filteredData
      ?.slice()
      ?.sort((a, b) => a.paymentTerms - b.paymentTerms);
  } else if (sortBy === "Total") {
    invoicesDataAfterSorting = filteredData
      ?.slice()
      ?.sort((a, b) => a.total - b.total);
  } else if (sortBy === "Default") {
    invoicesDataAfterSorting = filteredData;
  } else if (!sortBy) {
    invoicesDataAfterSorting = filteredData;
  }

  if (isLoading) return <Loader />;
  if (isError) toast.error("Couldn't fetch data from api");

  return (
    <div className="px-4 sm:px-6 mt-0  md:mt-[73px] mx-auto  -z-10 max-w-[750px] pb-32 md:pb-14">
      <DashBoardHeader />
      <section className="mt-16 md:mt-12 space-y-5 transition-all duration-500 max-w-[750px] mx-auto">
        {isMutating ? (
          <WaitingLoader />
        ) : (
          invoicesDataAfterSorting
            .reverse()
            ?.map((invoice) => (
              <InvoiceCard key={invoice.id} invoice={invoice} />
            ))
        )}
      </section>
    </div>
  );
}

export default Dashboard;
