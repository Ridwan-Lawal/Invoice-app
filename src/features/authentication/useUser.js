import { useQuery } from "@tanstack/react-query";
import { apiGetCurrentUser } from "../../services/apiAuth";

export function useUser() {
  const {
    data: user,
    isLoading,
    isPaused,
  } = useQuery({
    queryKey: ["user"],
    queryFn: apiGetCurrentUser,
  });

  return {
    isLoading,
    user,
    isAuthenticated: user?.role === "authenticated",
    isPaused,
  };
}
