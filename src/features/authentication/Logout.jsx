import { IoLogOutOutline } from "react-icons/io5";
import { useLogout } from "./useLogout";
import { TailSpin } from "react-loader-spinner";

function Logout() {
  const { logoutMutate, isLoading: isLoggingOut } = useLogout();
  return (
    <button disabled={isLoggingOut} onClick={() => logoutMutate()}>
      {isLoggingOut ? (
        <TailSpin height="18" width="18" color="#775ef7" />
      ) : (
        <IoLogOutOutline className="text-royal-blue  text-2xl" />
      )}
    </button>
  );
}

export default Logout;
