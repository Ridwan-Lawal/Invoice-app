import { useIsMutating, useQuery } from "@tanstack/react-query";
import DashBoardHeader from "../features/dashboard/DashBoardHeader";
import InvoiceCard from "../features/dashboard/InvoiceCard";
import { apiReadInvoice } from "../services/apiInvoice";
import Loader from "../ui/Loader";
import toast from "react-hot-toast";
import { apiReadFilterSort } from "../services/apiInvoiceArrangements";
import { useAddFilterSort } from "../hooks/useAddFilterSort";
import WaitingLoader from "../ui/WaitingLoader";

function Dashboard() {
  // for reading the mutate state of the mutation of adding the filter and sort value to supabase
  const isMutating = useIsMutating("addFilterSort");

  // for reading the invoices from the api
  const {
    isLoading,
    isError,
    data: invoices,
  } = useQuery({
    queryKey: ["invoices"],
    queryFn: apiReadInvoice,
  });

  // for reading the filter and the sort value
  const { data: filterSortData } = useQuery({
    queryKey: ["filterSort"],
    queryFn: apiReadFilterSort,
  });

  // filtering the invoices data based on the filterBy value from the filterAndSort data
  const filteredData = invoices?.filter((invoice) =>
    filterSortData?.[0]?.filterBy
      ? invoice.status === filterSortData[0]?.filterBy.toLowerCase()
      : invoices
  );

  // for the sorting of invoices

  if (isLoading) return <Loader />;
  if (isError) toast.error("Couldn't fetch data from api");

  console.log(isAddingFilterSorting);
  return (
    <div className="px-6 mt-10 md:mt-[73px] mx-auto border border-green-700 -z-10 max-w-[750px] pb-32 md:pb-14">
      <DashBoardHeader />
      <section className="mt-16 md:mt-12 space-y-5 transition-all duration-500 max-w-[750px] mx-auto">
        {isMutating ? (
          <WaitingLoader />
        ) : (
          filteredData?.map((invoice) => (
            <InvoiceCard key={invoice.id} invoice={invoice} />
          ))
        )}
      </section>
    </div>
  );
}

export default Dashboard;
