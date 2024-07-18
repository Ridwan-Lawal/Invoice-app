import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { getIsDarkMode } from "./features/dashboard/dashboardSlice";
import Loader from "./ui/Loader";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Invoice = lazy(() => import("./pages/Invoice"));
const PageNotFound = lazy(() => import("./pages/Invoice"));
const AppLayout = lazy(() => import("./ui/AppLayout"));

function App() {
  const isDarkMode = useSelector(getIsDarkMode);
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0,
      },
    },
  });

  return (
    <div
      className={`h-screen  font-spartan  overflow-hidden  custom-scrollbar ${
        isDarkMode ? "bg-[#141424]" : "bg-lightBackgroundColor"
      } `}
    >
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <BrowserRouter>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route element={<AppLayout />}>
                <Route path="/" element={<Dashboard />} />
                <Route path="/invoice/:invoiceId" element={<Invoice />} />
              </Route>
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
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
              backgroundColor: isDarkMode ? "#171a2e" : "#ffffff",
              color: isDarkMode ? "#ffffff" : "#171a2e",
            },
          }}
        />
      </QueryClientProvider>
    </div>
  );
}

export default App;
