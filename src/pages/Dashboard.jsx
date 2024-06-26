import { useQuery } from "@tanstack/react-query";
import DashBoardHeader from "../features/dashboard/DashBoardHeader";
import InvoiceCard from "../features/dashboard/InvoiceCard";
import { apiReadInvoice } from "../services/apiInvoice";
import Loader from "../ui/Loader";
import toast from "react-hot-toast";

function Dashboard() {
  // REad the invoices from supabase api

  const {
    isLoading,
    isError,

    data: invoices,
  } = useQuery({
    queryKey: ["invoices"],
    queryFn: apiReadInvoice,
  });

  console.log(isLoading, isError);

  if (isLoading) return <Loader />;
  if (isError) toast.error("Couldn't fetch data from api");

  return (
    <div className="h-auto px-6 mt-10 md:mt-[73px] mx-auto border border-green-700 -z-10 ">
      <DashBoardHeader />
      <section className="mt-16 md:mt-12 space-y-5 max-w-[750px] mx-auto">
        {invoices?.map((invoice) => (
          <InvoiceCard key={invoice.id} invoice={invoice} />
        ))}
      </section>
    </div>
  );
}

export default Dashboard;
