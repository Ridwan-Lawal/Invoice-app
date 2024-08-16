import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiDeleteInvoice } from "../services/apiInvoice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";

export function useDeleteInvoice() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { user } = useUser();

  const { mutate, isLoading: isDeleting } = useMutation({
    mutationFn: (invoiceId) =>
      apiDeleteInvoice({ invoiceId, user_id: user?.id }),
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
