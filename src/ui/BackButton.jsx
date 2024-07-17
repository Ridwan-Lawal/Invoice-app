import { IoIosArrowBack } from "react-icons/io";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getIsDarkMode } from "../features/dashboard/dashboardSlice";

function BackButton() {
  const navigate = useNavigate();
  const isDarkMode = useSelector(getIsDarkMode);

  return (
    <button onClick={() => navigate(-1)} className="flex gap-3 group">
      <IoIosArrowBack className="text-cornflower-blue" />
      <span
        className={`group-hover:text-cornflower-blue transition-colors duration-300 text-sm font-bold ${
          isDarkMode ? "text-white" : "text-cinder "
        } `}
      >
        Go back
      </span>
    </button>
  );
}

export default BackButton;
