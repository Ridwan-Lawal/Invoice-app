import { useDispatch, useSelector } from "react-redux";
import { getInvoiceFormReducer } from "../features/invoice-form/invoiceFormSlice";
import {
  getIsDarkMode,
  toggleTheme,
} from "../features/dashboard/dashboardSlice";
import { useUpdateTheme } from "../hooks/useUpdateTheme";
import Logout from "../features/authentication/Logout";

function NavSideBar() {
  const { isFormOpen } = useSelector(getInvoiceFormReducer);
  const isDarkMode = useSelector(getIsDarkMode);
  const dispatch = useDispatch();

  // mutate function the update the theme
  const mutate = useUpdateTheme();

  function handlethemeSwitch() {
    dispatch(toggleTheme());
    mutate(!isDarkMode);
  }
  return (
    <div
      className={`h-[80px] md:w-[90px] ${
        !isFormOpen && "md:rounded-r-[16px]"
      }  overflow-hidden   bg-ebony-clay md:h-[100vh] bottom-0 md:z-50`}
    >
      {/* logo, theme switch, avatar */}
      <div className="flex  md:h-full md:flex-col items-center justify-between">
        {/* logo and theme switch */}
        <div className="flex w-[90%]  md:h-[88%] md:w-full md:flex-col items-center justify-between border-r md:border-r-0 md:border-b border-san-juan pr-6 md:pr-0 md:pb-6">
          {/* logo */}
          <section
            className={` w-[80px]  h-[80px] md:h-[80px] md:w-full flex items-center justify-center bg-gradient-to-b from-san-juan to-cornflower-blue ${
              !isFormOpen && "md:rounded-r-2xl"
            } `}
          >
            <img src="/logo.svg" alt="" />
          </section>

          {/* light and dark theme switch */}
          <div className="flex items-center gap-6 md:flex-col">
            <section
              onClick={handlethemeSwitch}
              className="w-fit cursor-pointer"
            >
              {isDarkMode ? (
                <img src="/icon-sun.svg" alt="Light mode" />
              ) : (
                <img src="/icon-moon.svg" alt="Dark mode" />
              )}
            </section>
            <Logout />
          </div>
        </div>

        {/* image avatar */}
        <div className="w-[15%] sm:w-[11%] md:h-[15%] md:w-full  flex justify-center items-center ">
          <img
            src="/image-avatar.jpg"
            alt=""
            className="w-7 sm:w-10 rounded-full"
          />
        </div>
      </div>
    </div>
  );
}

export default NavSideBar;
