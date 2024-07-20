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

  const theme = data?.[0]?.theme;
  useEffect(
    function () {
      if (theme === undefined) return;
      dispatch(updateThemeonWebsiteReload(theme));
    },
    [theme, dispatch]
  );
}
