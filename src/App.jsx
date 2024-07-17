import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Invoice from "./pages/Invoice";
import AppLayout from "./ui/AppLayout";
import PageNofFound from "./pages/PageNofFound";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { getIsDarkMode } from "./features/dashboard/dashboardSlice";

function App() {
  const isDarkMode = useSelector(getIsDarkMode);
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0,
      },
    },
  });

  console.log(navigator.onLine);

  return (
    <div
      className={`h-screen  font-spartan  overflow-hidden border border-green-500 custom-scrollbar ${
        isDarkMode ? "bg-[#141424]" : "bg-lightBackgroundColor"
      } `}
    >
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/invoice/:invoiceId" element={<Invoice />} />
            </Route>
            <Route path="*" element={<PageNofFound />} />
          </Routes>
        </BrowserRouter>

        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "13px 20px",
              backgroundColor: "#ffffff",
              color: "dark",
            },
          }}
        />
      </QueryClientProvider>
    </div>
  );
}

export default App;
