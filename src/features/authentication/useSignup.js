import { useMutation } from "@tanstack/react-query";
import { apiSignUp } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useSignup() {
  const navigate = useNavigate();
  const { mutate: mutateSignUp, isLoading: isSigningUp } = useMutation({
    mutationFn: apiSignUp,
    onSuccess: ({ user }) => {
      console.log(user);
      toast.success(
        `Welcome, ${user?.user_metadata?.fullname?.split(" ")?.at(0)}`
      );
      navigate("/");
    },
    onError: (err) => toast.error(err.message),
  });

  return { mutateSignUp, isSigningUp };
}
