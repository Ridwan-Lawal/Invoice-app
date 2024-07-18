import { Bars } from "react-loader-spinner";
import { useSelector } from "react-redux";
import { getIsDarkMode } from "../features/dashboard/dashboardSlice";

function Loader() {
  const isDarkMode = useSelector(getIsDarkMode);
  return (
    <div className="w-screen h-screen flex items-center justify-center backdrop-filter backdrop-blur-sm   bg-opacity-90 fixed top-0 left-0 z-50">
      <Bars
        height="50"
        width="50"
        color={isDarkMode ? "#ffffff" : "#775ef7"}
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}

export default Loader;
