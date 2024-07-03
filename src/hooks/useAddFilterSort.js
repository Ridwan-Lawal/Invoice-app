import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { apiUpdateFilterSort } from "../services/apiInvoiceArrangements";

export function useAddFilterSort() {
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation({
    mutationFn: apiUpdateFilterSort,
    // added a key this to be able to read the mutating state of this mutation only
    mutationKey: "addFilterSort",
    onSuccess: () => {
      queryClient.invalidateQueries("invoices");
    },
    onError: (err) => toast.error(err.message),
  });

  return { mutate, isLoading };
}
