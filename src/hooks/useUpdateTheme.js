import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiUpdateTheme } from "../services/apiInvoice";
import toast from "react-hot-toast";

export function useUpdateTheme() {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: apiUpdateTheme,
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
