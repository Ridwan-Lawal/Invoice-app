import { useMutation } from "@tanstack/react-query";
import { apiLogin } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const navigate = useNavigate();

  const { mutate: loginMutate, isLoading: isLoggingIn } = useMutation({
    mutationFn: ({ email, password }) => apiLogin({ email, password }),
    onSuccess: () => {
      toast.success("User login successfully");
      navigate("/");
    },
    onError: () => toast.error("Incorrent email or password!"),
  });

  return { loginMutate, isLoggingIn };
}
