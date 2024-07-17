import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiDeleteInvoice } from "../services/apiInvoice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useDeleteInvoice() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate, isLoading: isDeleting } = useMutation({
    mutationFn: apiDeleteInvoice,
    onSuccess: () => {
      toast.success("Invoice successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["invoices"],
      });
      navigate("/");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { mutate, isDeleting };
}
