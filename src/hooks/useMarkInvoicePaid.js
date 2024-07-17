import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiMarkAsPaid } from "../services/apiInvoice";
import toast from "react-hot-toast";

export function useMarkInvoicePaid(invoiceId) {
  const queryClient = useQueryClient();
  const { mutate: mutatePaidStatus, isLoading: isPaying } = useMutation({
    mutationFn: apiMarkAsPaid,
    onSuccess: () => {
      toast.success(`Invoice #${invoiceId} marked as paid`);
      // refetch the data from the api to update view
      queryClient.invalidateQueries({
        queryKey: ["invoice"],
      });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { isPaying, mutatePaidStatus };
}
