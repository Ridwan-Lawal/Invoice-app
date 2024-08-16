/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { useUser } from "./useUser";
import { useEffect } from "react";
import Loader from "../../ui/Loader";
import toast from "react-hot-toast";

// Next is pagination

function ProtectedRoute({ children }) {
  // get the user authenticated state
  const { isLoading, isAuthenticated, isPaused } = useUser();
  const navigate = useNavigate();

  //   if user is not authenticated when any routes is clicked navigate to the dashbord
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isAuthenticated, isLoading, navigate]
  );

  if (isPaused)
    toast.error(
      "You don't have an internet connection! Please connect to a network"
    );

  //   if user's data is still loading
  if (isLoading) return <Loader />;

  //   if user is authenticated
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
