import { ColorRing } from "react-loader-spinner";

function WaitingLoader() {
  return (
    <div className="flex items-center justify-center h-[30vh] w-[100vw]">
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
