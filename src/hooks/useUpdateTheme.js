import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiUpdateTheme } from "../services/apiInvoice";
import toast from "react-hot-toast";
import { useUser } from "../features/authentication/useUser";

export function useUpdateTheme() {
  const queryClient = useQueryClient();
  const { user } = useUser();
  const { mutate } = useMutation({
    mutationFn: (theme) => apiUpdateTheme({ theme, user_id: user?.id }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["theme"],
      });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return mutate;
}
