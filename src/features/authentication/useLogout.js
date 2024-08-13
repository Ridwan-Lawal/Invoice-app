import { useMutation } from "@tanstack/react-query";
import { apiLogout } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogout() {
  const navigate = useNavigate();
  const { mutate: logoutMutate, isLoading } = useMutation({
    mutationFn: apiLogout,
    onSuccess: () => {
      navigate("/login", { replace: true });
    },
    onError: () => {
      toast.error("User couldn't log out!");
    },
  });

  return { logoutMutate, isLoading };
}
