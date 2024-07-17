import { useQuery } from "@tanstack/react-query";
import { apiReadInvoiceById } from "../services/apiInvoice";

export function useReadInvoiceById(invoiceId) {
  // added a second value to the querykey, which is the 'invoice id' that i want to use the get the row from supabase
  // it can be use to pass an argument into the queryfunction. all you need is to recieve the argument and in the apiReadInvoiceById function and get the 'invoice id' in the queryKey properties from the argument you recieved
  const { data: invoice, isLoading } = useQuery({
    queryKey: ["invoice", invoiceId],
    queryFn: apiReadInvoiceById,
  });

  return { invoice, isLoading };
}
