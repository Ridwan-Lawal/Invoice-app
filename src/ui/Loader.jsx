import { Bars } from "react-loader-spinner";

function Loader() {
  return (
    <div className="w-screen h-screen flex items-center justify-center backdrop-filter backdrop-blur-sm bg-opacity-30 fixed top-0">
      <Bars
        height="50"
        width="50"
        color="#775ef7"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}

export default Loader;
