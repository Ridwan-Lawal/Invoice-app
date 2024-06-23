import DashBoardHeader from "../features/dashboard/DashBoardHeader";
import InvoiceCard from "../features/dashboard/InvoiceCard";

function Dashboard() {
  return (
    <div className="h-auto px-6 mt-10 md:mt-[73px] mx-auto border border-green-700 -z-10">
      <DashBoardHeader />
      <section className="mt-16 md:mt-12 space-y-5 max-w-[750px] mx-auto">
        <InvoiceCard />
        <InvoiceCard />
        <InvoiceCard />
        <InvoiceCard />
        <InvoiceCard />
        <InvoiceCard />
        <InvoiceCard />
      </section>
    </div>
  );
}

export default Dashboard;
