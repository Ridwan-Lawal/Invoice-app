import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Invoice from "./pages/Invoice";
import AppLayout from "./ui/AppLayout";
import PageNofFound from "./pages/PageNofFound";

function App() {
  return (
    <div className="h-screen  font-spartan bg-lightBackgroundColor overflow-hidden border border-green-500">
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/invoice/:invoiceId" element={<Invoice />} />
          </Route>
          <Route path="*" element={<PageNofFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
