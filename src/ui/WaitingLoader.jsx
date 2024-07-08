/* eslint-disable react/prop-types */
import { ColorRing, Puff } from "react-loader-spinner";

function WaitingLoader({ marginTop }) {
  return (
    <div
      className={`flex items-center justify-center h-[30vh] w-[100%] border ${marginTop}`}
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

export function StatusLoader() {
  return (
    <Puff
      visible={true}
      height="20"
      width="20"
      color="#010816"
      ariaLabel="puff-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
}

export default WaitingLoader;
