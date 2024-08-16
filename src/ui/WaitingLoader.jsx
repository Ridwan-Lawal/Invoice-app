/* eslint-disable react/prop-types */
import { ColorRing, Puff, TailSpin } from "react-loader-spinner";
import { useSelector } from "react-redux";
import { getIsDarkMode } from "../features/dashboard/dashboardSlice";

function WaitingLoader({ marginTop }) {
  return (
    <div
      className={`flex items-center justify-center h-[30vh] w-[100%] ${marginTop}`}
    >
      <ColorRing
        visible={true}
        height="50"
        width="50"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={[
          "#775ef7",
          "#bb67d5",
          "#775ef7",
          "#bb67d5",
          "#775ef7",
          "#bb67d5",
        ]}
      />
    </div>
  );
}
export default WaitingLoader;

export function StatusLoader() {
  const isDarkMode = useSelector(getIsDarkMode);
  return (
    <Puff
      visible={true}
      height="20"
      width="20"
      color={isDarkMode ? "#ffffff" : "#010816"}
      ariaLabel="puff-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
}

export function Spin() {
  return (
    <TailSpin
      visible={true}
      height="20"
      width="20"
      color="#ffffff"
      ariaLabel="puff-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
}
