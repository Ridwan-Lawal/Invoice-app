import { useQuery } from "@tanstack/react-query";
import { apiReadInvoice } from "../services/apiInvoice";
import { useUser } from "../features/authentication/useUser";

export function useReadInvoices() {
  const { user } = useUser();
  const {
    isLoading,
    isError,
    data: invoices,
  } = useQuery({
    queryKey: ["invoices", user?.id],
    queryFn: () => apiReadInvoice(user?.id),
  });

  return { isLoading, isError, invoices };
}
