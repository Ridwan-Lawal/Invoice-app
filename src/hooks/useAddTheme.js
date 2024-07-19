import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { apiReadTheme } from "../services/apiInvoice";
import { useEffect } from "react";
import { updateThemeonWebsiteReload } from "../features/dashboard/dashboardSlice";

export function useAddTheme() {
  const dispatch = useDispatch();
  const { data } = useQuery({
    queryKey: ["theme"],
    queryFn: apiReadTheme,
  });
  useEffect(
    function () {
      dispatch(updateThemeonWebsiteReload(data?.[0]?.theme));
    },
    [dispatch, data]
  );
}
