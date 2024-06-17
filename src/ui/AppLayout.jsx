import { Outlet } from "react-router-dom";
import NavSideBar from "./NavSideBar";

function AppLayout() {
  return (
    <div className="flex flex-col ">
      <NavSideBar />
      <main className="border border-blue-700">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
