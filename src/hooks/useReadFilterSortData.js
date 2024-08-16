import { useQuery } from "@tanstack/react-query";
import { apiReadFilterSort } from "../services/apiInvoiceArrangements";

export function useReadFilterSortData() {
  const { data } = useQuery({
    queryKey: ["filterSort"],
    queryFn: apiReadFilterSort,
  });

  return data;
}
