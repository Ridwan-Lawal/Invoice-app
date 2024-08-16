import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { apiReadTheme } from "../services/apiInvoice";
import { useEffect } from "react";
import { updateThemeonWebsiteReload } from "../features/dashboard/dashboardSlice";
import { useUser } from "../features/authentication/useUser";

export function useAddTheme() {
  const dispatch = useDispatch();
  const { user } = useUser();
  const { data } = useQuery({
    queryKey: ["theme"],
    queryFn: () => apiReadTheme(user?.id),
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
