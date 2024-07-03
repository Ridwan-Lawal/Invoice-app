import { useQuery } from "@tanstack/react-query";
import { apiReadInvoice } from "../services/apiInvoice";

export function useReadInvoices() {
  const {
    isLoading,
    isError,
    data: invoices,
  } = useQuery({
    queryKey: ["invoices"],
    queryFn: apiReadInvoice,
  });

  return { isLoading, isError, invoices };
}
