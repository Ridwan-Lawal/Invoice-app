import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { apiUpdateFilterSort } from "../services/apiInvoiceArrangements";
import { useUser } from "../features/authentication/useUser";

export function useAddFilterSort() {
  const queryClient = useQueryClient();

  const { user } = useUser();
  const { mutate, isLoading } = useMutation({
    mutationFn: (options) =>
      apiUpdateFilterSort({ ...options, user_id: user?.id }),
    // added a key this to be able to read the mutating state of this mutation only
    mutationKey: "addFilterSort",
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: "invoices" });
    },
    onError: (err) => toast.error(err.message),
  });

  return { mutate, isLoading };
}
