import { useQuery } from "@tanstack/react-query";
import { apiReadInvoiceById } from "../services/apiInvoice";
import { useUser } from "../features/authentication/useUser";

export function useReadInvoiceById(invoiceId) {
  const { user } = useUser();
  // added a second value to the querykey, which is the 'invoice id' that i want to use the get the row from supabase
  // it can be use to pass an argument into the queryfunction. all you need is to recieve the argument and in the apiReadInvoiceById function and get the 'invoice id' in the queryKey properties from the argument you recieved
  const { data: invoice, isLoading } = useQuery({
    queryKey: ["invoice", invoiceId, user?.id],
    queryFn: () => apiReadInvoiceById({ invoiceId, user_id: user?.id }),
  });

  return { invoice, isLoading };
}
