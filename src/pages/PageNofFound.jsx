import { useSelector } from "react-redux";
import { getIsDarkMode } from "../features/dashboard/dashboardSlice";
import BackButton from "../ui/BackButton";

function PageNofFound() {
  const isDarkMode = useSelector(getIsDarkMode);
  console.log(isDarkMode);
  return (
    <div className="py-8 px-6 sm:py-10 sm:px-8">
      <BackButton />
      <div className="flex items-center justify-center  border h-[80vh]">
        <div className="flex flex-col items-center justify-center">
          <p className="text-red-600 tracking-widest text-6xl sm:text-7xl font-bold">
            404
          </p>
          <p
            className={`${
              isDarkMode ? "text-white" : "text-cinder"
            } text-2xl sm:text-3xl text-center font-bold`}
          >
            Oops! Couldn&apos;t find the page your were looking for.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PageNofFound;
